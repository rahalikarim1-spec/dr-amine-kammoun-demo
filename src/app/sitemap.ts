import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/registry";
import { LANGS, LANG_META } from "@/lib/types";
import { urlOf } from "@/lib/links";
import { getContent } from "@/lib/content";

export const dynamic = "force-static";

/** Only indexable pages, one entry per language version, each with its hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.filter((p) => p.index).flatMap((page) =>
    LANGS.map((lang) => ({
      url: urlOf(page, lang),
      lastModified: getContent(lang, page.id).lastUpdated,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          ...Object.fromEntries(LANGS.map((l) => [LANG_META[l].hreflang, urlOf(page, l)])),
          "x-default": urlOf(page, "fr"),
        },
      },
    })),
  );
}
