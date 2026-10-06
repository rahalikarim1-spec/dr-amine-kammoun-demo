import Link from "next/link";
import type { Lang, PageDef } from "@/lib/types";
import { ancestorsOf } from "@/lib/registry";
import { pathOf } from "@/lib/links";
import { getContent } from "@/lib/content";
import { getDict } from "@/dictionaries";
import { ChevronIcon } from "./Icons";

export function Breadcrumbs({ page, lang }: { page: PageDef; lang: Lang }) {
  const t = getDict(lang);
  const chain = ancestorsOf(page.id);
  return (
    <nav aria-label={t.breadcrumb} className="text-sm text-ink-mute">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {chain.map((p) => (
          <li key={p.id} className="flex items-center gap-1.5">
            <Link href={pathOf(p, lang)} className="hover:text-teal-800 hover:underline underline-offset-4">{getContent(lang, p.id).label}</Link>
            <ChevronIcon className="h-3.5 w-3.5 -rotate-90 opacity-50 rtl:rotate-90" />
          </li>
        ))}
        <li aria-current="page" className="font-medium text-ink-soft">{getContent(lang, page.id).label}</li>
      </ol>
    </nav>
  );
}
