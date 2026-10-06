/**
 * RENDERED-HTML VALIDATION  —  `npm run validate:html` (run after `npm run build`)
 * Reads the prerendered pages in .next/server/app and checks: single H1, <title>, meta description,
 * canonical, hreflang trio (fr-TN / ar-TN / x-default) with reciprocal targets, html lang/dir,
 * JSON-LD parses and has no rating/review fields, internal <a href> targets exist, images have alt.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { PAGES } from "../src/lib/registry";
import { LANGS, LANG_META } from "../src/lib/types";
import { pathOf, urlOf } from "../src/lib/links";

const root = join(process.cwd(), ".next/server/app");
const errors: string[] = [];
const valid = new Set(PAGES.flatMap((p) => LANGS.map((l) => pathOf(p, l))));
const staticOk = new Set(["/", "/og/", "/sitemap.xml", "/robots.txt", "/icon.svg"]);
let checked = 0;

for (const page of PAGES) for (const lang of LANGS) {
  const path = pathOf(page, lang);
  const file = join(root, path.replace(/\/$/, "") + ".html");
  const tag = `[${path}]`;
  if (!existsSync(file)) { errors.push(`${tag} not prerendered`); continue; }
  checked++;
  const html = readFileSync(file, "utf8");
  const count = (re: RegExp) => (html.match(re) ?? []).length;

  if (count(/<h1[\s>]/g) !== 1) errors.push(`${tag} expected exactly one <h1>, found ${count(/<h1[\s>]/g)}`);
  if (!/<title>[^<]{10,}<\/title>/.test(html)) errors.push(`${tag} missing <title>`);
  if (!/<meta name="description" content="[^"]{40,}"/.test(html)) errors.push(`${tag} missing meta description`);
  if (!html.includes(`<link rel="canonical" href="${urlOf(page, lang)}"`)) errors.push(`${tag} wrong/missing canonical`);
  for (const l of LANGS) if (!html.includes(`hrefLang="${LANG_META[l].hreflang}" href="${urlOf(page, l)}"`) && !html.includes(`hreflang="${LANG_META[l].hreflang}" href="${urlOf(page, l)}"`)) errors.push(`${tag} missing hreflang ${LANG_META[l].hreflang}`);
  if (!/hrefLang="x-default"|hreflang="x-default"/i.test(html)) errors.push(`${tag} missing hreflang x-default`);
  if (!html.includes(`lang="${LANG_META[lang].hreflang}"`) || !html.includes(`dir="${LANG_META[lang].dir}"`)) errors.push(`${tag} wrong <html lang/dir>`);
  if (!/property="og:title"/.test(html) || !/name="twitter:card"/.test(html)) errors.push(`${tag} missing Open Graph / Twitter tags`);

  const ld = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  if (!ld.length) errors.push(`${tag} no JSON-LD`);
  for (const m of ld) {
    try {
      const s = m[1];
      JSON.parse(s);
      if (/aggregateRating|"review"|"award"|ratingValue/.test(s)) errors.push(`${tag} forbidden schema field (rating/review/award)`);
    } catch { errors.push(`${tag} invalid JSON-LD`); }
  }

  for (const m of html.matchAll(/<a [^>]*href="(\/[^"#?]*)/g)) {
    const href = m[1];
    if (!valid.has(href) && !staticOk.has(href)) errors.push(`${tag} broken internal link ${href}`);
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/ alt=/.test(m[0])) errors.push(`${tag} <img> without alt`);
}

console.log(`${checked}/${PAGES.length * LANGS.length} rendered pages checked`);
if (errors.length) { console.error(errors.map((e) => "  ✖ " + e).join("\n")); process.exit(1); }
console.log("✔ Rendered HTML OK (H1, title, description, canonical, hreflang, lang/dir, OG, JSON-LD, internal links, alt).");
