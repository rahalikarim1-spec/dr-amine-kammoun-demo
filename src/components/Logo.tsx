import Link from "next/link";
import type { Lang } from "@/lib/types";
import { siteConfig } from "@/config/site";
import { pathOf } from "@/lib/links";

export function Logo({ lang, inverted = false }: { lang: Lang; inverted?: boolean }) {
  return (
    <Link href={pathOf("home", lang)} className="group flex min-w-0 items-center gap-2 sm:gap-3" aria-label={siteConfig.siteName[lang]}>
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display sm:h-11 sm:w-11 text-[0.95rem] font-semibold tracking-wide ${inverted ? "bg-white/10 text-white" : "bg-teal-700 text-white"}`} aria-hidden="true">
        AK
      </span>
      <span className="min-w-0 truncate whitespace-nowrap leading-tight">
        <span className={`block truncate font-display text-[0.95rem] min-[360px]:text-[1rem] sm:text-[1.05rem] font-semibold rtl:font-sans ${inverted ? "text-white" : "text-ink"}`}>{siteConfig.nameLocalized[lang]}</span>
        <span className={`hidden text-[0.78rem] sm:block ${inverted ? "text-white/70" : "text-ink-mute"}`}>{siteConfig.jobTitle[lang]}</span>
      </span>
    </Link>
  );
}
