import type { Metadata } from "next";
import { LANGS, LANG_META, type Lang, type PageDef, type PageContent } from "./types";
import { urlOf } from "./links";
import { seoConfig, pageTitle } from "@/config/seo";
import { siteConfig, abs } from "@/config/site";

/** hreflang alternates for a page: fr-TN, ar-TN and x-default (French). */
export function alternatesFor(page: PageDef): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[LANG_META[l].hreflang] = urlOf(page, l);
  languages["x-default"] = urlOf(page, "fr");
  return languages;
}

export function buildMetadata(page: PageDef, lang: Lang, content: PageContent): Metadata {
  const url = urlOf(page, lang);
  const title = pageTitle(lang, content.metaTitle, page.id !== "home");
  const other: Lang = lang === "fr" ? "ar" : "fr";
  const ogImage = abs(seoConfig.defaultOgImage);

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: { absolute: title },
    description: content.metaDescription,
    alternates: { canonical: url, languages: alternatesFor(page) },
    robots: {
      index: page.index && siteConfig.indexing,
      follow: true,
      googleBot: { index: page.index && siteConfig.indexing, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      type: page.id === "home" ? "website" : "article",
      url,
      title,
      description: content.metaDescription,
      siteName: siteConfig.siteName[lang],
      locale: LANG_META[lang].ogLocale,
      alternateLocale: [LANG_META[other].ogLocale],
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.siteName.fr }],
    },
    twitter: { card: seoConfig.twitterCard, title, description: content.metaDescription, images: [ogImage] },
    verification: siteConfig.tracking.gscVerification ? { google: siteConfig.tracking.gscVerification } : undefined,
    other: { "content-language": LANG_META[lang].hreflang },
  };
}

