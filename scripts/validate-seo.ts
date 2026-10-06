/**
 * SOURCE-LEVEL SEO VALIDATION  —  `npm run validate`
 *
 * Checks (per language): missing content / metadata, H1, title & description length and uniqueness,
 * canonical + hreflang pairs, broken internal links ([[id|text]] and `related`), orphan pages,
 * link-depth / inbound counts, structure of condition pages, FR/AR parity, banned promotional wording,
 * leftover placeholders. Exit code 1 on any error (warnings do not fail).
 *
 * The rendered HTML is validated separately by `npm run validate:html` (after `npm run build`).
 */
import { PAGES, childrenOf, crossListedIn, getPage, hasPage } from "../src/lib/registry";
import { LANGS, type Lang } from "../src/lib/types";
import { pathOf, urlOf } from "../src/lib/links";
import { allContent, extractLinkIds, hasContent, inlineStrings } from "../src/lib/content";
import { FOOTER_COLUMNS, HOME_LINKS, headerTargets } from "../src/config/navigation";
import { seoConfig } from "../src/config/seo";
import { sourceById } from "../src/config/sources";

const errors: string[] = [];
const warnings: string[] = [];
const err = (m: string) => errors.push(m);
const warn = (m: string) => warnings.push(m);

const BANNED: [RegExp, string][] = [
  [/meilleur(e)?s?\s+(gyn|m[ée]decin|docteur|clinique|cabinet)/i, "superlative claim (FR)"],
  [/\bnum[ée]ro\s*(1|un)\b|\bn°\s*1\b/i, "'numéro 1' claim"],
  [/r[ée]sultats?\s+garanti/i, "guaranteed results"],
  [/100\s?%\s+(de\s+)?(succ[èe]s|r[ée]ussite|garanti)/i, "success rate claim"],
  [/أفضل\s+(طبيب|عيادة|طبيبة)/, "superlative claim (AR)"],
  [/رقم\s*1(?!\d)|الأول في تونس/, "'number 1' claim (AR)"],
  [/best (doctor|gynecologist|gynaecologist)/i, "superlative claim (EN)"],
  [/\b(lorem ipsum|TODO|FIXME|XXX|à compléter|\[\.\.\.\])\b/i, "leftover placeholder"],
];

// ---------- 1. registry integrity ----------
const seenPaths = new Map<string, string>();
for (const page of PAGES) {
  if (page.parent && !hasPage(page.parent)) err(`[${page.id}] unknown parent "${page.parent}"`);
  for (const r of page.related) {
    if (!hasPage(r)) err(`[${page.id}] related → unknown page "${r}"`);
    if (r === page.id) err(`[${page.id}] related contains itself`);
  }
  for (const h of page.alsoInHubs ?? []) if (!hasPage(h)) err(`[${page.id}] alsoInHubs → unknown hub "${h}"`);
  for (const s of page.sources ?? []) if (!sourceById(s)) err(`[${page.id}] unknown source "${s}"`);
  for (const lang of LANGS) {
    const path = pathOf(page, lang);
    const clash = seenPaths.get(path);
    if (clash) err(`duplicate URL ${path}: ${clash} / ${page.id}`);
    seenPaths.set(path, page.id);
    if (!/^\/(fr|ar)\/([a-z0-9-]+\/)*$/.test(path)) err(`[${page.id}] unclean URL "${path}"`);
  }
  if (["hub", "child", "local"].includes(page.type) && (page.related.length < 3 || page.related.length > 7))
    warn(`[${page.id}] ${page.related.length} related pages (target 3–7)`);
}

// ---------- 2. per-language content checks ----------
const titles = new Map<string, string>();
const descs = new Map<string, string>();
const h1s = new Map<string, string>();

for (const lang of LANGS) {
  const content = allContent(lang);
  for (const id of Object.keys(content)) if (!hasPage(id)) err(`[${lang}] content "${id}" has no registry entry`);

  for (const page of PAGES) {
    const tag = `[${lang}:${page.id}]`;
    if (!hasContent(lang, page.id)) { err(`${tag} missing content (missing hreflang pair)`); continue; }
    const c = content[page.id];

    // metadata
    if (!c.metaTitle) err(`${tag} missing metaTitle`);
    if (!c.metaDescription) err(`${tag} missing metaDescription`);
    if (!c.h1) err(`${tag} missing H1`);
    if (!c.label) err(`${tag} missing label`);
    if (!c.intro) err(`${tag} missing intro`);
    if (c.metaTitle.length > seoConfig.titleMaxLength) warn(`${tag} metaTitle ${c.metaTitle.length} chars (> ${seoConfig.titleMaxLength})`);
    const [dMin, dMax] = seoConfig.descriptionRange;
    if (c.metaDescription.length < dMin || c.metaDescription.length > dMax) warn(`${tag} metaDescription ${c.metaDescription.length} chars (target ${dMin}–${dMax})`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(c.lastUpdated)) err(`${tag} invalid lastUpdated`);

    for (const [map, val, what] of [[titles, c.metaTitle, "metaTitle"], [descs, c.metaDescription, "metaDescription"], [h1s, c.h1, "H1"]] as const) {
      const key = `${lang}|${val}`;
      if (map.has(key)) err(`${tag} duplicate ${what} with ${map.get(key)}`);
      map.set(key, page.id);
    }

    // canonical + hreflang
    const url = urlOf(page, lang);
    if (!/^https?:\/\/[^/]+\/(fr|ar)\/([a-z0-9-]+\/)*$/.test(url)) err(`${tag} bad canonical URL ${url}`);
    for (const other of LANGS) if (!hasContent(other, page.id)) err(`${tag} no ${other} counterpart for hreflang`);

    // sections & structure
    const ids = c.sections.map((s) => s.id);
    if (new Set(ids).size !== ids.length) err(`${tag} duplicate section ids`);
    if (["article", "hub", "local"].includes(page.template) && c.sections.length < 2) warn(`${tag} fewer than 2 sections`);
    if (["article", "hub", "local", "faq", "home", "areas"].includes(page.template) && !c.faq?.length && page.type !== "legal") warn(`${tag} no FAQ`);
    if (page.template === "article" && !(page.sources?.length)) warn(`${tag} no reference sources`);
    if (page.cluster === "conditions" && page.template === "article") {
      for (const req of ["quest", "symptomes", "causes", "consulter", "diagnostic", "suivi"]) if (!ids.includes(req)) err(`${tag} condition page missing section "${req}"`);
      if (!c.faq?.length) err(`${tag} condition page missing FAQ`);
    }

    // inline links
    const targets = new Set<string>();
    for (const s of inlineStrings(c)) for (const t of extractLinkIds(s)) {
      if (!hasPage(t)) err(`${tag} broken inline link → "${t}"`);
      else if (t === page.id) warn(`${tag} inline link to itself`);
      else targets.add(t);
    }
    if (page.template === "article" && targets.size < 3) warn(`${tag} only ${targets.size} contextual links (target 3–7)`);

    // banned wording & placeholders
    const text = [c.metaTitle, c.metaDescription, c.h1, c.intro, ...inlineStrings(c), ...c.sections.map((s) => s.h2)].join(" \n ");
    for (const [re, why] of BANNED) if (re.test(text)) err(`${tag} banned wording: ${why}`);
  }
}

// FR/AR structural parity
for (const page of PAGES) {
  if (!hasContent("fr", page.id) || !hasContent("ar", page.id)) continue;
  const f = allContent("fr")[page.id], a = allContent("ar")[page.id];
  if (f.sections.map((s) => s.id).join() !== a.sections.map((s) => s.id).join()) warn(`[${page.id}] FR/AR section ids differ`);
  if ((f.faq?.length ?? 0) !== (a.faq?.length ?? 0)) warn(`[${page.id}] FR/AR FAQ count differs (${f.faq?.length ?? 0}/${a.faq?.length ?? 0})`);
  const fl = new Set(inlineStrings(f).flatMap(extractLinkIds)), al = new Set(inlineStrings(a).flatMap(extractLinkIds));
  if ([...fl].sort().join() !== [...al].sort().join()) warn(`[${page.id}] FR/AR internal link targets differ`);
}

// ---------- 3. link graph / orphans ----------
type Edge = { from: string; to: string; kind: "nav" | "footer" | "home" | "hierarchy" | "related" | "inline" };
const edges: Edge[] = [];
const add = (from: string, to: string, kind: Edge["kind"]) => from !== to && edges.push({ from, to, kind });

for (const p of PAGES) {
  for (const t of headerTargets()) add(p.id, t, "nav");
  for (const col of Object.values(FOOTER_COLUMNS)) for (const t of col) add(p.id, t, "footer");
  if (p.parent) add(p.id, p.parent, "hierarchy"); // breadcrumb
  let anc = p; while (anc.parent) { anc = getPage(anc.parent); add(p.id, anc.id, "hierarchy"); }
  for (const c of childrenOf(p.id)) add(p.id, c.id, "hierarchy"); // hub → child
  for (const c of crossListedIn(p.id)) add(p.id, c.id, "hierarchy");
  for (const r of p.related) add(p.id, r, "related");
  for (const s of inlineStrings(allContent("fr")[p.id] ?? { intro: "", summary: "", sections: [] } as never)) for (const t of extractLinkIds(s)) if (hasPage(t)) add(p.id, t, "inline");
}
for (const t of HOME_LINKS) add("home", t, "home");

const inbound = new Map<string, Edge[]>();
for (const e of edges) inbound.set(e.to, [...(inbound.get(e.to) ?? []), e]);

const rows: string[] = [];
for (const p of PAGES) {
  const all = inbound.get(p.id) ?? [];
  const contextual = new Set(all.filter((e) => ["hierarchy", "related", "inline", "home"].includes(e.kind)).map((e) => e.from));
  const editorial = new Set(all.filter((e) => ["related", "inline"].includes(e.kind)).map((e) => e.from));
  rows.push(`${p.id.padEnd(26)} inbound(all)=${String(new Set(all.map((e) => e.from)).size).padStart(2)}  contextual=${String(contextual.size).padStart(2)}  editorial(related+inline)=${String(editorial.size).padStart(2)}`);
  if (all.length === 0) err(`[${p.id}] ORPHAN: no internal links point to this page`);
  else if (contextual.size === 0 && p.id !== "home") warn(`[${p.id}] only reachable through sitewide navigation (no contextual inbound links)`);
  else if (p.index && p.type !== "legal" && p.id !== "home" && editorial.size < 2) warn(`[${p.id}] only ${editorial.size} editorial inbound link(s) (related/inline)`);
}

// ---------- report ----------
const summary = `${PAGES.length} pages × ${LANGS.length} languages = ${PAGES.length * LANGS.length} URLs checked (${PAGES.filter((p) => p.index).length * 2} indexable)`;
if (process.argv.includes("--graph")) console.log(rows.join("\n") + "\n");
console.log(summary);
if (warnings.length) console.log(`\nWarnings (${warnings.length}):\n` + warnings.map((w) => "  ⚠ " + w).join("\n"));
if (errors.length) { console.error(`\nErrors (${errors.length}):\n` + errors.map((e) => "  ✖ " + e).join("\n")); process.exit(1); }
console.log("\n✔ No blocking SEO errors.");
