import type { Lang } from "@/lib/types";
import { getDict } from "@/dictionaries";
import { PUBLICATIONS, academicProfile } from "@/config/publications";
import { ExternalIcon, InfoIcon } from "./Icons";

/** Renders the real publication list; shows an honest "awaiting information" state while data is empty. */
export function Publications({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const hasData = PUBLICATIONS.length > 0 || academicProfile.positions.length > 0 || academicProfile.credentials.length > 0 || academicProfile.summary;

  if (!hasData) {
    return (
      <div role="status" className="not-prose my-8 flex max-w-prose gap-3 rounded-2xl border border-ink/[0.08] bg-sand-100 p-5">
        <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
        <div>
          <p className="font-semibold text-ink">{t.pub.pendingTitle}</p>
          <p className="mt-1 text-[0.97rem] text-ink-soft">{t.pub.pendingText}</p>
        </div>
      </div>
    );
  }

  const byYear = [...PUBLICATIONS].sort((a, b) => b.year - a.year);
  return (
    <div className="not-prose space-y-10">
      {academicProfile.summary && <p className="max-w-prose text-lg text-ink-soft">{academicProfile.summary[lang]}</p>}
      {academicProfile.positions.length > 0 && (
        <section aria-labelledby="pub-pos"><h2 id="pub-pos" className="mb-3">{t.pub.positions}</h2>
          <ul className="space-y-2">{academicProfile.positions.map((p, i) => <li key={i} className="card p-4"><strong>{p.title[lang]}</strong> — {p.institution}{p.period ? ` (${p.period})` : ""}</li>)}</ul>
        </section>
      )}
      {academicProfile.credentials.length > 0 && (
        <section aria-labelledby="pub-cred"><h2 id="pub-cred" className="mb-3">{t.pub.credentials}</h2>
          <ul className="space-y-2">{academicProfile.credentials.map((c, i) => <li key={i} className="card p-4">{c.name}{c.institution ? ` — ${c.institution}` : ""}{c.year ? ` (${c.year})` : ""}</li>)}</ul>
        </section>
      )}
      {byYear.length > 0 && (
        <section aria-labelledby="pub-list"><h2 id="pub-list" className="mb-4">{t.pub.list}</h2>
          <ol className="space-y-4">
            {byYear.map((p, i) => (
              <li key={i} className="card p-5">
                <p className="text-sm font-semibold text-teal-700">{t.pub.types[p.type]} · <span dir="ltr">{p.year}</span></p>
                <h3 className="mt-1 !text-lg" lang="und">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-soft"><span className="font-semibold">{t.pub.authors} :</span> {p.authors.join(", ")}</p>
                <p className="text-sm text-ink-soft"><span className="font-semibold">{t.pub.venue} :</span> {p.venue}</p>
                {p.abstract?.[lang] && <p className="mt-2 text-[0.95rem] text-ink-soft"><span className="font-semibold">{t.pub.abstract} :</span> {p.abstract[lang]}</p>}
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {p.doi && <a className="link-inline inline-flex items-center gap-1" href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer">{t.pub.doi} : <span dir="ltr">{p.doi}</span><ExternalIcon className="h-3.5 w-3.5" /></a>}
                  {p.url && <a className="link-inline inline-flex items-center gap-1" href={p.url} target="_blank" rel="noopener noreferrer">{t.pub.link}<ExternalIcon className="h-3.5 w-3.5" /></a>}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
