import type { Lang, PageDef } from "./types";
import { PAGES, ancestorsOf, getPage } from "./registry";
import { siteConfig } from "@/config/site";

/** Path (with leading and trailing slash) of a page in a language. */
export function pathOf(page: PageDef | string, lang: Lang): string {
  const p = typeof page === "string" ? getPage(page) : page;
  const segments = [...ancestorsOf(p.id), p].map((x) => x.slug[lang]).filter(Boolean);
  return `/${[lang, ...segments].join("/")}/`;
}

export const urlOf = (page: PageDef | string, lang: Lang) => `${siteConfig.siteUrl}${pathOf(page, lang)}`;

/** Resolve a URL slug array (from the catch-all route) to a page. */
export function resolvePage(lang: Lang, slug: string[] | undefined): PageDef | undefined {
  const target = `/${[lang, ...(slug ?? [])].join("/")}/`;
  return PAGES.find((p) => pathOf(p, lang) === target);
}

export const allStaticParams = () =>
  (["fr", "ar"] as const).flatMap((lang) =>
    PAGES.map((p) => ({ lang, slug: pathOf(p, lang).split("/").filter(Boolean).slice(1) })),
  );
