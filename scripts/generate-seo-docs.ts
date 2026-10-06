/** Regenerates the page inventory table inside SEO-ARCHITECTURE.md (between the AUTO markers). `npm run docs:seo` */
import { readFileSync, writeFileSync } from "node:fs";
import { PAGES, getPage } from "../src/lib/registry";
import { LANGS } from "../src/lib/types";
import { pathOf } from "../src/lib/links";
import { getContent, extractLinkIds, inlineStrings } from "../src/lib/content";

const rows: string[] = [
  "| URL | Lang | Page type | Primary topic | Search intent | Parent hub | Important internal links | Index |",
  "|---|---|---|---|---|---|---|---|",
];
for (const p of PAGES) for (const lang of LANGS) {
  const c = getContent(lang, p.id);
  const inline = [...new Set(inlineStrings(c).flatMap(extractLinkIds))];
  const links = [...new Set([...p.related, ...inline])].filter((x) => x !== p.id).slice(0, 6).map((id) => `\`${pathOf(id, lang)}\``).join("<br>");
  const parent = p.parent && p.parent !== "home" ? `\`${pathOf(p.parent, lang)}\`` : p.parent ? "Home" : "—";
  rows.push(`| \`${pathOf(p, lang)}\` | ${lang} | ${p.type}/${p.template} | ${p.topic} | ${p.intent} | ${parent} | ${links} | ${p.index ? "index" : "**noindex**"} |`);
}
const file = "SEO-ARCHITECTURE.md";
const doc = readFileSync(file, "utf8");
const out = doc.replace(/<!-- AUTO:START -->[\s\S]*<!-- AUTO:END -->/, `<!-- AUTO:START -->\n${rows.join("\n")}\n<!-- AUTO:END -->`);
writeFileSync(file, out);
console.log(`Wrote ${PAGES.length * LANGS.length} rows to ${file}`);
