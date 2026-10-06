import type { Lang, PageContent } from "./types";
import { fr } from "@/content/fr";
import { ar } from "@/content/ar";

const CONTENT: Record<Lang, Record<string, PageContent>> = { fr, ar };

export function getContent(lang: Lang, id: string): PageContent {
  const c = CONTENT[lang][id];
  if (!c) throw new Error(`Missing ${lang} content for page "${id}"`);
  return c;
}

export const hasContent = (lang: Lang, id: string) => Boolean(CONTENT[lang][id]);
export const allContent = (lang: Lang) => CONTENT[lang];

/** Extract every [[page-id|anchor]] reference from a piece of inline markup. */
export function extractLinkIds(text: string): string[] {
  return [...text.matchAll(/\[\[([a-z0-9-]+)\|[^\]]+\]\]/g)].map((m) => m[1]);
}

/** All strings of a page's content that may carry inline markup. */
export function inlineStrings(c: PageContent): string[] {
  const out: string[] = [c.intro, c.summary];
  for (const s of c.sections) {
    for (const b of s.blocks) {
      if (b.t === "ul" || b.t === "ol") out.push(...b.v);
      else out.push(b.v);
    }
  }
  for (const f of c.faq ?? []) out.push(f.a);
  return out;
}
