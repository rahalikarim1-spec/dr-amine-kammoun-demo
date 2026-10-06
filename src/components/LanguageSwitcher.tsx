import Link from "next/link";
import { LANG_META, type Lang } from "@/lib/types";
import { pathOf } from "@/lib/links";
import { GlobeIcon } from "./Icons";

export function LanguageSwitcher({ lang, pageId, label, inverted = false }: { lang: Lang; pageId?: string; label: string; inverted?: boolean }) {
  const other: Lang = lang === "fr" ? "ar" : "fr";
  const href = pageId ? pathOf(pageId, other) : `/${other}/`;
  return (
    <Link
      href={href}
      hrefLang={LANG_META[other].hreflang}
      lang={other}
      data-track="language_change"
      data-track-to={other}
      data-track-location="header"
      className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-3 sm:px-4 text-sm font-semibold transition-colors ${inverted ? "border-white/30 text-white hover:bg-white/10" : "border-ink/10 bg-white text-ink hover:bg-teal-50"}`}
      aria-label={label}
    >
      <GlobeIcon className="hidden h-4 w-4 sm:block" />
      {LANG_META[other].native}
    </Link>
  );
}
