import Link from "next/link";
import type { Lang } from "@/lib/types";
import { pathOf } from "@/lib/links";
import { getDict } from "@/dictionaries";
import { siteConfig, mapsDirectionsUrl } from "@/config/site";
import { PhoneIcon, CalendarIcon, PinIcon } from "./Icons";

export function StickyMobileBar({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const item = "flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 text-[0.72rem] font-semibold";
  return (
    <nav aria-label={t.mobileBar.label} className="no-print fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-lg items-stretch divide-x divide-ink/10 rtl:divide-x-reverse">
        <a href={siteConfig.phone.href} className={`${item} text-white bg-teal-700`} data-track="phone_click" data-track-location="sticky-bar">
          <PhoneIcon className="h-5 w-5" />{t.mobileBar.call}
        </a>
        <Link href={pathOf("appointment", lang)} className={`${item} text-teal-900`} data-track="appointment_click" data-track-location="sticky-bar">
          <CalendarIcon className="h-5 w-5" />{t.mobileBar.appointment}
        </Link>
        <a href={mapsDirectionsUrl()} target="_blank" rel="noopener noreferrer" className={`${item} text-teal-900`} data-track="map_click" data-track-location="sticky-bar">
          <PinIcon className="h-5 w-5" />{t.mobileBar.directions}
        </a>
      </div>
    </nav>
  );
}
