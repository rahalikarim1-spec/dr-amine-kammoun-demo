import Link from "next/link";
import type { Lang, PageDef } from "@/lib/types";
import { getContent } from "@/lib/content";
import { childrenOf, crossListedIn, getPage } from "@/lib/registry";
import { pathOf } from "@/lib/links";
import { buildGraph } from "@/lib/schema";
import { getDict } from "@/dictionaries";
import { siteConfig } from "@/config/site";
import { AREA_ORIGINS } from "@/config/seo";
import { Inline } from "@/lib/inline";
import { JsonLd } from "./JsonLd";
import { Breadcrumbs } from "./Breadcrumbs";
import { Blocks, CardGrid, CtaCard, Disclaimer, FaqList, RelatedCards, ReviewMeta, SectionList, Sources, Toc } from "./ContentBlocks";
import { DirectionsFrom, LocalMap, NapCard } from "./ContactBlocks";
import { ContactForm } from "./ContactForm";
import { HomeView } from "./HomeView";
import { ArcMotif, CalendarIcon, PhoneIcon } from "./Icons";
import { Publications } from "./Publications";

/** Generic content layout: hero, body with sticky aside, related pages, CTA, disclaimer. */
function ContentLayout({ page, lang, children, extras, before, after, hideToc = false }: {
  page: PageDef; lang: Lang; children?: React.ReactNode; extras?: Record<string, React.ReactNode>; before?: React.ReactNode; after?: React.ReactNode; hideToc?: boolean;
}) {
  const t = getDict(lang);
  const c = getContent(lang, page.id);
  const showToc = !hideToc && c.sections.length + (c.faq ? 1 : 0) >= 4;
  const isLegal = page.template === "legal";

  return (
    <>
      <section className="bg-grain relative overflow-hidden border-b border-ink/[0.06]">
        <ArcMotif className="pointer-events-none absolute -bottom-24 end-[-60px] hidden h-[420px] w-[420px] text-teal-300/40 sm:block" />
        <div className="container-x relative py-8 sm:py-12">
          <Breadcrumbs page={page} lang={lang} />
          <h1 className="mt-5 max-w-3xl">{c.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"><Inline text={c.intro} lang={lang} /></p>
          <ReviewMeta content={c} lang={lang} medical={!["core", "legal"].includes(page.cluster)} />
        </div>
      </section>

      <div className="container-x py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <article className="prose-x min-w-0">
            {showToc && <div className="mb-8 lg:hidden"><Toc sections={c.sections} hasFaq={Boolean(c.faq)} lang={lang} /></div>}
            {before}
            <SectionList sections={c.sections} lang={lang} extras={extras} />
            {children}
            {c.faq?.length ? <FaqList items={c.faq} lang={lang} /> : null}
            {after}
            {page.sources && !isLegal ? <Sources ids={page.sources} lang={lang} /> : null}
            {!isLegal && <Disclaimer lang={lang} />}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-5">
              {showToc && <Toc sections={c.sections} hasFaq={Boolean(c.faq)} lang={lang} />}
              {!isLegal && <CtaCard lang={lang} />}
            </div>
          </aside>
        </div>
      </div>

      {page.related.length > 0 && <RelatedCards ids={page.related} lang={lang} />}
      {!isLegal && (
        <section className="section pt-0 lg:hidden"><div className="container-x"><CtaCard lang={lang} variant="wide" /></div></section>
      )}
      <span className="sr-only">{t.home}</span>
    </>
  );
}

function HubExtras({ page, lang }: { page: PageDef; lang: Lang }) {
  const t = getDict(lang);
  const kids = childrenOf(page.id);
  const cross = crossListedIn(page.id);
  return (
    <>
      {kids.length > 0 && (
        <section aria-labelledby="children-h" className="not-prose mb-4">
          <h2 id="children-h" className="mb-5 !mt-0">{t.inThisSection}</h2>
          <CardGrid pages={kids} lang={lang} cols={2} />
          {cross.length > 0 && (
            <>
              <h3 className="mb-3 mt-8 !text-lg">{t.hub.crossListed}</h3>
              <CardGrid pages={cross} lang={lang} cols={2} />
            </>
          )}
        </section>
      )}
    </>
  );
}

function InfoHubExtras({ lang }: { lang: Lang }) {
  const clusters = ["hub-gyneco", "hub-pregnancy", "hub-echo", "hub-fertility", "hub-conditions"];
  return (
    <div className="space-y-12">
      {clusters.map((id) => {
        const hub = getPage(id);
        const c = getContent(lang, id);
        const kids = [...childrenOf(id), ...crossListedIn(id)];
        return (
          <section key={id} aria-labelledby={`${id}-h`}>
            <h2 id={`${id}-h`} className="!mt-0 !mb-2"><Link href={pathOf(hub, lang)} className="hover:text-teal-800">{c.label}</Link></h2>
            <p className="!mt-0 text-ink-mute">{c.summary}</p>
            <ul className="!max-w-none grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {kids.map((k) => (
                <li key={k.id}><Link href={pathOf(k, lang)} className="link-inline">{getContent(lang, k.id).label}</Link></li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

function AppointmentSteps({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <section className="not-prose mb-10">
      <h2 className="!mt-0 mb-5">{t.appointment.stepsTitle}</h2>
      <ol className="grid gap-4 sm:grid-cols-3">
        {t.appointment.steps.map((s, i) => (
          <li key={i} className="card flex items-center gap-4 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-700 font-display font-semibold text-white">{i + 1}</span>
            <span className="font-semibold">{s}</span>
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={siteConfig.phone.href} className="btn btn-primary" data-track="phone_click" data-track-location="appointment-page"><PhoneIcon className="h-5 w-5" /><span dir="ltr">{siteConfig.phone.display}</span></a>
      </div>
    </section>
  );
}

export function PageView({ page, lang }: { page: PageDef; lang: Lang }) {
  const t = getDict(lang);
  const c = getContent(lang, page.id);
  const jsonLd = <JsonLd data={buildGraph(page, lang, c)} />;

  switch (page.template) {
    case "home":
      return <>{jsonLd}<HomeView lang={lang} /></>;

    case "hub":
      return (
        <>
          {jsonLd}
          <ContentLayout page={page} lang={lang} before={<HubExtras page={page} lang={lang} />}
            extras={page.id === "areas" ? Object.fromEntries(Object.entries(AREA_ORIGINS).map(([k, v]) => [k, <div key={k} className="flex flex-wrap gap-x-3">{v.map((o) => <DirectionsFrom key={o} lang={lang} origin={o} />)}</div>])) : undefined}
            after={page.id === "areas" ? <div className="mt-10 not-prose"><LocalMap lang={lang} /></div> : undefined} />
        </>
      );

    case "local":
      return (
        <>
          {jsonLd}
          <ContentLayout page={page} lang={lang}
            extras={{ acces: (
              <>
                {page.id === "local-aouina" && <div className="not-prose"><DirectionsFrom lang={lang} origin={AREA_ORIGINS.aouina[0]} /></div>}
                <div className="not-prose my-6 grid gap-5"><NapCard lang={lang} /><LocalMap lang={lang} /></div>
              </>
            ) }} />
        </>
      );

    case "publications":
      return <>{jsonLd}<ContentLayout page={page} lang={lang} hideToc before={<Publications lang={lang} />} /></>;

    case "infohub":
      return <>{jsonLd}<ContentLayout page={page} lang={lang} hideToc after={<div className="mt-12 not-prose"><InfoHubExtras lang={lang} /></div>} /></>;

    case "contact":
      return (
        <>
          {jsonLd}
          <ContentLayout page={page} lang={lang} hideToc
            before={
              <div className="not-prose mb-10 grid gap-6 lg:grid-cols-2">
                <NapCard lang={lang} />
                <LocalMap lang={lang} />
              </div>
            }
            after={<div className="not-prose mt-12"><ContactForm t={t.contact.form} lang={lang} privacyHref={pathOf("privacy", lang)} /></div>} />
        </>
      );

    case "appointment":
      return (
        <>
          {jsonLd}
          <ContentLayout page={page} lang={lang} hideToc before={<AppointmentSteps lang={lang} />}
            after={<div className="not-prose mt-12"><ContactForm t={t.contact.form} lang={lang} privacyHref={pathOf("privacy", lang)} /></div>} />
        </>
      );

    case "cabinet":
      return (
        <>
          {jsonLd}
          <ContentLayout page={page} lang={lang} hideToc
            extras={{ situation: <div className="not-prose my-6 grid gap-5"><NapCard lang={lang} /><LocalMap lang={lang} /></div> }} />
        </>
      );

    case "doctor":
      return (
        <>
          {jsonLd}
          <ContentLayout page={page} lang={lang} hideToc
            before={
              <div className="not-prose mb-10 flex flex-col gap-5 rounded-3xl bg-white p-6 shadow-card sm:flex-row sm:items-center">
                {siteConfig.professional.doctorPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={siteConfig.professional.doctorPhoto} alt={siteConfig.nameLocalized[lang]} width={160} height={160} className="h-40 w-40 rounded-2xl object-cover" />
                ) : (
                  <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-teal-700 font-display text-4xl font-semibold text-white" aria-hidden="true">AK</span>
                )}
                <div>
                  <p className="font-display text-2xl font-semibold rtl:font-sans">{siteConfig.nameLocalized[lang]}</p>
                  <p className="text-ink-mute">{siteConfig.jobTitle[lang]}</p>
                  <p className="mt-1 text-ink-soft">{siteConfig.location.area[lang]}, {siteConfig.location.city[lang]}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href={siteConfig.phone.href} className="btn btn-primary !min-h-[44px] !py-2 text-sm" data-track="phone_click" data-track-location="doctor-card"><PhoneIcon className="h-4 w-4" />{t.cta.call}</a>
                    <Link href={pathOf("appointment", lang)} className="btn btn-secondary !min-h-[44px] !py-2 text-sm" data-track="appointment_click" data-track-location="doctor-card"><CalendarIcon className="h-4 w-4" />{t.cta.appointment}</Link>
                  </div>
                </div>
              </div>
            }
            after={
              <>
                <section aria-labelledby="proinfo-h" className="not-prose mt-12">
                  <h2 id="proinfo-h" className="mb-4">{t.doctorInfo.title}</h2>
                  <dl className="card divide-y divide-ink/[0.07] text-[0.97rem]">
                    <div className="flex flex-col gap-1 p-4 sm:flex-row sm:gap-6"><dt className="w-48 shrink-0 font-semibold">{t.doctorInfo.specialty}</dt><dd className="text-ink-soft">{siteConfig.jobTitle[lang]}</dd></div>
                    <div className="flex flex-col gap-1 p-4 sm:flex-row sm:gap-6"><dt className="w-48 shrink-0 font-semibold">{t.doctorInfo.location}</dt><dd className="text-ink-soft">{siteConfig.location.area[lang]}, {siteConfig.location.city[lang]}</dd></div>
                    <div className="flex flex-col gap-1 p-4 sm:flex-row sm:gap-6"><dt className="w-48 shrink-0 font-semibold">{t.doctorInfo.phone}</dt><dd><a href={siteConfig.phone.href} dir="ltr" className="link-inline" data-track="phone_click" data-track-location="doctor-info">{siteConfig.phone.display}</a></dd></div>
                    {!siteConfig.professional.qualifications && (
                      <div className="p-4 text-ink-mute">{t.doctorInfo.pending} <Link href={pathOf("doctor-publications", lang)} className="link-inline">{t.doctorInfo.publicationsLink}</Link></div>
                    )}
                  </dl>
                </section>
                {siteConfig.professional.bio && <section><h2>{lang === "fr" ? "Parcours" : "نبذة"}</h2><p>{siteConfig.professional.bio[lang]}</p></section>}
                {siteConfig.professional.qualifications && (
                  <section><h2>{lang === "fr" ? "Formation et diplômes" : "التكوين والشهادات"}</h2><ul>{siteConfig.professional.qualifications[lang].map((q) => <li key={q}>{q}</li>)}</ul></section>
                )}
                {siteConfig.professional.languagesSpoken && (
                  <section><h2>{lang === "fr" ? "Langues parlées" : "اللغات"}</h2><ul>{siteConfig.professional.languagesSpoken[lang].map((q) => <li key={q}>{q}</li>)}</ul></section>
                )}
              </>
            } />
        </>
      );

    default:
      return <>{jsonLd}<ContentLayout page={page} lang={lang} hideToc={page.template === "faq" || page.template === "legal"} /></>;
  }
}

export { Blocks };
