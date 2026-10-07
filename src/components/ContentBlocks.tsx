import Link from "next/link";
import type { Block, FaqItem, Lang, PageContent, PageDef, Section } from "@/lib/types";
import { Inline } from "@/lib/inline";
import { pathOf } from "@/lib/links";
import { getContent } from "@/lib/content";
import { getDict } from "@/dictionaries";
import { sourceById } from "@/config/sources";
import { editorialConfig } from "@/config/editorial";
import { siteConfig } from "@/config/site";
import { getPage } from "@/lib/registry";
import { AlertIcon, ArrowIcon, CalendarIcon, ChevronIcon, ExternalIcon, InfoIcon, PhoneIcon, clusterIcon } from "./Icons";

export function Blocks({ blocks, lang }: { blocks: Block[]; lang: Lang }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p": return <p key={i}><Inline text={b.v} lang={lang} /></p>;
          case "h3": return <h3 key={i}>{b.v}</h3>;
          case "ul": return <ul key={i}>{b.v.map((x, j) => <li key={j}><Inline text={x} lang={lang} /></li>)}</ul>;
          case "ol": return <ol key={i}>{b.v.map((x, j) => <li key={j}><Inline text={x} lang={lang} /></li>)}</ol>;
          case "note":
            return (
              <div key={i} className="my-6 flex max-w-prose gap-3 rounded-2xl bg-teal-50 p-4 text-[0.97rem] text-teal-900">
                <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <p className="!my-0 !max-w-none !text-teal-900"><Inline text={b.v} lang={lang} /></p>
              </div>
            );
          case "warn":
            return (
              <div key={i} role="note" className="my-6 max-w-prose rounded-2xl border border-blush-200 border-s-4 border-s-blush-400 bg-blush-50 p-4 text-[0.97rem]">
                <p className="!my-0 flex items-center gap-2 font-semibold text-blush-600"><AlertIcon className="h-5 w-5" />{b.title ?? getDict(lang).disclaimerTitle}</p>
                <p className="!my-1 !max-w-none !text-ink"><Inline text={b.v} lang={lang} /></p>
              </div>
            );
        }
      })}
    </>
  );
}

export function SectionList({ sections, lang, extras }: { sections: Section[]; lang: Lang; extras?: Record<string, React.ReactNode> }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
          <h2 id={`${s.id}-h`}>{s.h2}</h2>
          <Blocks blocks={s.blocks} lang={lang} />
          {extras?.[s.id]}
        </section>
      ))}
    </>
  );
}

export function Toc({ sections, hasFaq, lang }: { sections: Section[]; hasFaq: boolean; lang: Lang }) {
  const t = getDict(lang);
  return (
    <nav aria-label={t.onThisPage} className="rounded-2xl border border-ink/[0.07] bg-white p-5">
      <p className="mb-3 text-sm font-semibold text-ink">{t.onThisPage}</p>
      <ol className="space-y-1.5 text-[0.93rem]">
        {sections.map((s) => (
          <li key={s.id}><a href={`#${s.id}`} className="block py-0.5 text-ink-soft hover:text-teal-800">{s.h2}</a></li>
        ))}
        {hasFaq && <li><a href="#faq" className="block py-0.5 text-ink-soft hover:text-teal-800">{t.faqTitle}</a></li>}
      </ol>
    </nav>
  );
}

export function FaqList({ items, lang, id = "faq" }: { items: FaqItem[]; lang: Lang; id?: string }) {
  const t = getDict(lang);
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28">
      <h2 id={`${id}-h`} className="mb-5 mt-14">{t.faqTitle}</h2>
      <div className="max-w-prose divide-y divide-ink/10 rounded-2xl border border-ink/[0.07] bg-white">
        {items.map((f, i) => (
          <details key={i} className="group px-5">
            <summary className="flex min-h-[56px] cursor-pointer items-center justify-between gap-4 py-4 font-semibold text-ink">
              <h3 className="!my-0 !text-base !font-semibold !leading-snug font-sans">{f.q}</h3>
              <ChevronIcon className="h-5 w-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180" />
            </summary>
            <p className="!mt-0 pb-5 text-[0.98rem] leading-relaxed text-ink-soft"><Inline text={f.a} lang={lang} /></p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Disclaimer({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <aside role="note" className="mt-10 flex gap-3 rounded-2xl border border-ink/[0.08] bg-sand-100 p-5 text-[0.93rem] text-ink-soft">
      <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
      <p><strong className="text-ink">{t.disclaimerTitle}.</strong> {t.disclaimer}</p>
    </aside>
  );
}

export function Sources({ ids, lang }: { ids: string[]; lang: Lang }) {
  const t = getDict(lang);
  const items = ids.map(sourceById).filter((x): x is NonNullable<typeof x> => Boolean(x));
  if (!items.length) return null;
  return (
    <section aria-labelledby="sources-h" className="mt-12 max-w-prose">
      <h2 id="sources-h" className="!mb-2 !mt-0 !text-lg">{t.sourcesTitle}</h2>
      <p className="!mt-0 !mb-3 text-sm text-ink-mute">{t.sourcesNote}</p>
      <ul className="!space-y-1.5 !my-0">
        {items.map((s) => (
          <li key={s.id} className="!ps-0 before:!hidden">
            <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="link-inline inline-flex items-center gap-1.5 text-[0.95rem]">
              {s.name[lang]} <ExternalIcon className="h-3.5 w-3.5" />
              <span className="sr-only">{t.externalLink}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

const fmt = (lang: Lang, iso: string) =>
  new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "ar-TN-u-nu-latn", { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso));

export function ReviewMeta({ content, lang, medical = true }: { content: PageContent; lang: Lang; medical?: boolean }) {
  const t = getDict(lang);
  const reviewer = content.medicalReviewer ?? (editorialConfig.reviewed ? editorialConfig.reviewerName : null);
  const reviewed = content.lastReviewed ?? editorialConfig.reviewedOn;
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink-mute">
      <p>{t.lastUpdated} : <time dateTime={content.lastUpdated}>{fmt(lang, content.lastUpdated)}</time></p>
      {medical && <p>{t.author} <Link href={pathOf("doctor", lang)} className="link-inline">{siteConfig.nameLocalized[lang]}</Link></p>}
      {!medical ? null : reviewer && reviewed ? (
        <p>{t.reviewedBy} : {reviewer}, <time dateTime={reviewed}>{fmt(lang, reviewed)}</time></p>
      ) : (
        <p>{t.reviewPending}</p>
      )}
    </div>
  );
}

export function PageCard({ page, lang, compact = false }: { page: PageDef; lang: Lang; compact?: boolean }) {
  const c = getContent(lang, page.id);
  const Icon = clusterIcon(page.cluster);
  return (
    <Link href={pathOf(page, lang)} className="card card-hover group flex h-full flex-col p-5">
      <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700"><Icon className="h-5 w-5" /></span>
      <h3 className="!text-lg !leading-snug">{c.label}</h3>
      {!compact && <p className="mt-1.5 flex-1 text-[0.93rem] leading-relaxed text-ink-mute">{c.summary}</p>}
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
        {getDict(lang).cta.learnMore} <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
      </span>
    </Link>
  );
}

export function CardGrid({ pages, lang, cols = 3 }: { pages: PageDef[]; lang: Lang; cols?: 2 | 3 }) {
  return (
    <ul className={`grid gap-4 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}>
      {pages.map((p) => <li key={p.id}><PageCard page={p} lang={lang} /></li>)}
    </ul>
  );
}

export function RelatedCards({ ids, lang, title }: { ids: string[]; lang: Lang; title?: string }) {
  const t = getDict(lang);
  if (!ids.length) return null;
  return (
    <section aria-labelledby="related-h" className="section bg-sand-100/70">
      <div className="container-x">
        <h2 id="related-h" className="mb-6">{title ?? t.relatedTitle}</h2>
        <CardGrid pages={ids.map(getPage)} lang={lang} />
      </div>
    </section>
  );
}

export function CtaCard({ lang, variant = "aside" }: { lang: Lang; variant?: "aside" | "wide" }) {
  const t = getDict(lang);
  return (
    <div className={`rounded-3xl bg-teal-800 text-white ${variant === "wide" ? "p-8 sm:p-10" : "p-6"}`}>
      <p className="font-display text-xl font-semibold rtl:font-sans">{t.doctorCta.title}</p>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">{t.doctorCta.text}</p>
      <div className={`mt-5 flex gap-3 ${variant === "wide" ? "flex-col sm:flex-row" : "flex-col"}`}>
        <a href={siteConfig.phone.href} className="btn !bg-white !text-teal-900 hover:!bg-teal-50" data-track="phone_click" data-track-location="cta-card">
          <PhoneIcon className="h-5 w-5" /><span dir="ltr">{siteConfig.phone.display}</span>
        </a>
        <Link href={pathOf("appointment", lang)} className="btn border border-white/40 text-white hover:bg-white/10" data-track="appointment_click" data-track-location="cta-card">
          <CalendarIcon className="h-5 w-5" />{t.cta.appointment}
        </Link>
      </div>
    </div>
  );
}
