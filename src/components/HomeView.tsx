import Link from "next/link";
import type { Lang } from "@/lib/types";
import { getContent } from "@/lib/content";
import { getPage } from "@/lib/registry";
import { pathOf } from "@/lib/links";
import { getDict } from "@/dictionaries";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";
import { FaqList, CardGrid } from "./ContentBlocks";
import { LocalMap, NapCard } from "./ContactBlocks";
import { Inline } from "@/lib/inline";
import { ArcMotif, ArrowIcon, CalendarIcon, CheckIcon, PhoneIcon, PinIcon } from "./Icons";

export function HomeView({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const h = t.home_;
  const c = getContent(lang, "home");

  return (
    <>
      {/* HERO */}
      <section className="bg-grain relative overflow-hidden">
        <ArcMotif className="pointer-events-none absolute -bottom-32 end-[-80px] h-[560px] w-[560px] text-teal-300/40" />
        <div className="container-x relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow">{h.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl text-[2.15rem] sm:text-6xl">
              {siteConfig.nameLocalized[lang]}
              <span className="mt-2 block text-[1.35rem] font-normal text-teal-700 sm:text-3xl">{siteConfig.jobTitle[lang]}</span>
            </h1>
            <p className="mt-5 flex items-center gap-2 text-lg font-medium text-ink-soft"><PinIcon className="h-5 w-5 text-teal-600" />{h.location}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft"><Inline text={c.intro} lang={lang} /></p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={pathOf("appointment", lang)} className="btn btn-primary" data-track="appointment_click" data-track-location="hero"><CalendarIcon className="h-5 w-5" />{t.cta.appointment}</Link>
              <a href={siteConfig.phone.href} className="btn btn-secondary" data-track="phone_click" data-track-location="hero"><PhoneIcon className="h-5 w-5" />{t.cta.call}</a>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              {h.trust.map((x) => <li key={x} className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-teal-600" />{x}</li>)}
            </ul>
          </div>

          <div className="relative">
            <div className="card relative space-y-5 p-7 shadow-lift">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-700 font-display text-2xl font-semibold text-white" aria-hidden="true">AK</span>
                <div>
                  <p className="font-display text-xl font-semibold rtl:font-sans">{siteConfig.nameLocalized[lang]}</p>
                  <p className="text-sm text-ink-mute">{siteConfig.jobTitle[lang]}</p>
                </div>
              </div>
              <dl className="space-y-3 border-t border-ink/10 pt-5 text-[0.95rem]">
                <div className="flex gap-3"><dt className="sr-only">{t.addressLabel}</dt><PinIcon className="mt-1 h-5 w-5 shrink-0 text-teal-600" /><dd>{siteConfig.location.area[lang]}, {siteConfig.location.city[lang]}</dd></div>
                <div className="flex gap-3"><dt className="sr-only">{t.phoneLabel}</dt><PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                  <dd><a href={siteConfig.phone.href} dir="ltr" className="font-semibold text-teal-800 hover:underline" data-track="phone_click" data-track-location="hero-card">{siteConfig.phone.display}</a></dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">{getContent(lang, "doctor").label}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{h.doctorTitle}</h2>
            <p className="mt-4 max-w-xl text-lg text-ink-soft">{h.doctorText}</p>
            <Link href={pathOf("doctor", lang)} className="btn btn-secondary mt-6">{h.doctorLink}<ArrowIcon className="h-4 w-4" /></Link>
          </div>
          <div className="card p-7">
            <p className="font-display text-xl font-semibold rtl:font-sans">{siteConfig.nameLocalized[lang]}</p>
            <p className="text-ink-mute">{siteConfig.jobTitle[lang]}</p>
            <ul className="mt-5 space-y-2 text-[0.97rem]">
              <li><Link href={pathOf("doctor-publications", lang)} className="link-inline">{getContent(lang, "doctor-publications").label}</Link></li>
              <li><Link href={pathOf("cabinet", lang)} className="link-inline">{getContent(lang, "cabinet").label}</Link></li>
              <li><Link href={pathOf("local-aouina", lang)} className="link-inline">{getContent(lang, "local-aouina").label}</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="section bg-sand-100/70">
        <div className="container-x">
          <p className="eyebrow">{getContent(lang, "info-hub").label}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{h.topicsTitle}</h2>
          <p className="mt-3 mb-9 max-w-2xl text-lg text-ink-soft">{h.topicsIntro}</p>
          <CardGrid pages={["hub-gyneco", "hub-pregnancy", "hub-echo", "hub-fertility", "hub-conditions"].map(getPage)} lang={lang} />
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-ink-soft">{h.conditionsTitle} :</span>
            {["cond-endometriosis", "cond-pcos", "cond-ovarian-cyst", "cond-fibroid"].map((id) => (
              <Link key={id} href={pathOf(id, lang)} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium hover:bg-teal-50">{getContent(lang, id).label}</Link>
            ))}
          </div>
          <p className="mt-6"><Link href={pathOf("info-hub", lang)} className="link-inline">{t.cta.seeAll} →</Link></p>
        </div>
      </section>

      {/* CABINET + AREAS */}
      <section className="section bg-teal-900 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl text-white sm:text-4xl">{h.cabinetTitle}</h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">{h.cabinetText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={pathOf("local-ain-zaghouan", lang)} className="btn !bg-white !text-teal-900 hover:!bg-teal-50">{getContent(lang, "local-ain-zaghouan").label}</Link>
              <Link href={pathOf("cabinet", lang)} className="btn border border-white/40 text-white hover:bg-white/10">{getContent(lang, "cabinet").label}</Link>
            </div>
          </div>
          <div>
            <h3 className="!text-2xl text-white">{h.areasTitle}</h3>
            <p className="mt-3 text-white/80">{h.areasText}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {seoConfig.areaServed.map((a) => (
                <li key={a.fr}>
                  {a.page ? (
                    <Link href={pathOf(a.page, lang)} className="inline-block rounded-full border border-white/60 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white hover:bg-white/20">{a[lang]}</Link>
                  ) : (
                    <span className="inline-block rounded-full border border-white/25 px-4 py-1.5 text-sm text-white/90">{a[lang]}</span>
                  )}
                </li>
              ))}
            </ul>
            <Link href={pathOf("areas", lang)} className="mt-6 inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4">{h.areasLink}<ArrowIcon className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-3xl">{c.faq && <FaqList items={c.faq} lang={lang} />}</div>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section className="section bg-sand-100/70">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl">{h.contactTitle}</h2>
          <p className="mt-3 mb-8 max-w-2xl text-lg text-ink-soft">{h.contactText}</p>
          <div className="grid gap-6 lg:grid-cols-2">
            <NapCard lang={lang} />
            <LocalMap lang={lang} />
          </div>
        </div>
      </section>
    </>
  );
}
