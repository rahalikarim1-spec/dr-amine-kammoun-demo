import Link from "next/link";
import type { Lang } from "@/lib/types";
import { HUB_IDS } from "@/lib/registry";
import { getContent } from "@/lib/content";
import { pathOf } from "@/lib/links";
import { getDict } from "@/dictionaries";
import { SiteShell } from "./SiteShell";
import { ArcMotif } from "./Icons";

export function NotFoundView({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <SiteShell lang={lang}>
      <section className="bg-grain relative overflow-hidden">
        <ArcMotif className="pointer-events-none absolute -bottom-24 end-[-60px] h-[420px] w-[420px] text-teal-300/40" />
        <div className="container-x relative py-20 text-center sm:py-28">
          <p className="font-display text-7xl font-semibold text-teal-700/30">404</p>
          <h1 className="mt-2">{t.notFound.title}</h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">{t.notFound.text}</p>
          <Link href={pathOf("home", lang)} className="btn btn-primary mt-8">{t.notFound.cta}</Link>
          <p className="mt-12 text-sm text-ink-mute">{t.notFound.explore}</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {HUB_IDS.map((id) => (
              <li key={id}><Link href={pathOf(id, lang)} className="inline-block rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium hover:bg-teal-50">{getContent(lang, id).label}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
