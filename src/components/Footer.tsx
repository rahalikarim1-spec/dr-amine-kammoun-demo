import Link from "next/link";
import type { Lang } from "@/lib/types";
import { FOOTER_COLUMNS } from "@/config/navigation";
import { pathOf } from "@/lib/links";
import { getContent } from "@/lib/content";
import { getDict } from "@/dictionaries";
import { siteConfig, mapsViewUrl } from "@/config/site";
import { Logo } from "./Logo";
import { CookieSettingsButton } from "./ConsentBanner";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PhoneIcon, PinIcon } from "./Icons";

const col = (ids: string[], lang: Lang) =>
  ids.map((id) => (
    <li key={id}>
      <Link href={pathOf(id, lang)} className="inline-block py-1 text-[0.95rem] text-white/75 hover:text-white">{getContent(lang, id).label}</Link>
    </li>
  ));

export function Footer({ lang, pageId }: { lang: Lang; pageId?: string }) {
  const t = getDict(lang);
  return (
    <footer className="mt-10 bg-teal-900 pb-28 pt-14 text-white lg:pb-10">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo lang={lang} inverted />
            <address className="mt-5 space-y-2 text-[0.95rem] not-italic text-white/80">
              <p className="flex items-start gap-2"><PinIcon className="mt-1 h-4 w-4 shrink-0" />
                <span>
                  {siteConfig.location.streetAddress ? `${siteConfig.location.streetAddress}, ` : ""}
                  {siteConfig.location.area[lang]}, {siteConfig.location.city[lang]}
                </span>
              </p>
              <p className="flex items-center gap-2"><PhoneIcon className="h-4 w-4 shrink-0" />
                <a href={siteConfig.phone.href} dir="ltr" className="hover:text-white" data-track="phone_click" data-track-location="footer">{siteConfig.phone.display}</a>
              </p>
            </address>
            <a href={mapsViewUrl()} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-white/70 underline underline-offset-4 hover:text-white" data-track="map_click" data-track-location="footer">{t.cta.viewMap}</a>
            <div className="mt-6"><LanguageSwitcher lang={lang} pageId={pageId} label={t.switchTo} inverted /></div>
          </div>

          <nav aria-label={t.footer.nav}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/50 rtl:normal-case rtl:tracking-normal">{t.footer.nav}</p>
            <ul>{col(FOOTER_COLUMNS.topics, lang)}</ul>
          </nav>
          <nav aria-label={t.footer.practice}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/50 rtl:normal-case rtl:tracking-normal">{t.footer.practice}</p>
            <ul>{col(FOOTER_COLUMNS.practice, lang)}</ul>
          </nav>
          <nav aria-label={t.footer.legal}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/50 rtl:normal-case rtl:tracking-normal">{t.footer.legal}</p>
            <ul>{col(FOOTER_COLUMNS.legal, lang)}
              <li className="py-1"><CookieSettingsButton label={t.footer.manageCookies} /></li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.nameLocalized[lang]}. {t.footer.rights}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
