import type { Lang } from "@/lib/types";
import { getDict } from "@/dictionaries";
import { siteConfig, mapsDirectionsUrl, mapsEmbedSrc, mapsViewUrl } from "@/config/site";
import { ClockIcon, PhoneIcon, PinIcon, WhatsappIcon, ExternalIcon } from "./Icons";
import { MapCard } from "./MapCard";

/** Name – Address – Phone block. Unknown data is never invented: it shows neutral wording instead. */
export function NapCard({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const l = siteConfig.location;
  const row = "flex gap-3";
  const icon = "mt-1 h-5 w-5 shrink-0 text-teal-600";
  return (
    <div className="card space-y-5 p-6">
      <div>
        <p className="font-display text-xl font-semibold rtl:font-sans">{siteConfig.nameLocalized[lang]}</p>
        <p className="text-sm text-ink-mute">{siteConfig.jobTitle[lang]}</p>
      </div>
      <div className={row}><PinIcon className={icon} />
        <div>
          <p className="text-sm font-semibold">{t.addressLabel}</p>
          <p className="text-ink-soft">
            {l.streetAddress ? `${l.streetAddress}, ` : ""}{l.area[lang]}, {l.city[lang]}{l.postalCode ? ` ${l.postalCode}` : ""}, {l.country[lang]}
          </p>
          {!l.streetAddress && <p className="text-sm text-ink-mute">{t.addressFallback}</p>}
        </div>
      </div>
      <div className={row}><PhoneIcon className={icon} />
        <div>
          <p className="text-sm font-semibold">{t.phoneLabel}</p>
          <a href={siteConfig.phone.href} dir="ltr" className="text-lg font-semibold text-teal-800 hover:underline" data-track="phone_click" data-track-location="nap-card">{siteConfig.phone.display}</a>
          {siteConfig.additionalPhones.map((p) => <p key={p} dir="ltr" className="text-ink-soft">{p}</p>)}
        </div>
      </div>
      <div className={row}><ClockIcon className={icon} />
        <div>
          <p className="text-sm font-semibold">{t.hoursLabel}</p>
          {siteConfig.openingHours?.length ? (
            <ul className="text-ink-soft">{siteConfig.openingHours.map((h, i) => <li key={i}>{h.days[lang]} : <span dir="ltr">{h.hours}</span></li>)}</ul>
          ) : (
            <p className="text-ink-soft">{t.hoursFallback}</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-3 pt-1">
        <a href={siteConfig.phone.href} className="btn btn-primary !min-h-[44px] !py-2 text-sm" data-track="phone_click" data-track-location="nap-card-btn"><PhoneIcon className="h-4 w-4" />{t.cta.call}</a>
        {siteConfig.whatsappNumber && (
          <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary !min-h-[44px] !py-2 text-sm" data-track="whatsapp_click" data-track-location="nap-card">
            <WhatsappIcon className="h-4 w-4" />{t.cta.whatsapp}
          </a>
        )}
        {siteConfig.email && (
          <a href={`mailto:${siteConfig.email}`} className="btn btn-secondary !min-h-[44px] !py-2 text-sm">{siteConfig.email}</a>
        )}
      </div>
    </div>
  );
}

export function LocalMap({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <MapCard
      embedSrc={mapsEmbedSrc()}
      viewUrl={mapsViewUrl()}
      directionsUrl={mapsDirectionsUrl()}
      title={`${siteConfig.nameLocalized[lang]} – ${siteConfig.location.area[lang]}`}
      place={`${siteConfig.location.area[lang]}, ${siteConfig.location.city[lang]}`}
      labels={{ load: t.contact.mapLoad, view: t.cta.viewMap, directions: t.cta.directions, privacy: t.contact.mapPrivacy }}
    />
  );
}

export function DirectionsFrom({ lang, origin }: { lang: Lang; origin: string }) {
  const t = getDict(lang);
  return (
    <p className="!my-4">
      <a href={mapsDirectionsUrl(origin)} target="_blank" rel="noopener noreferrer" className="btn btn-secondary !min-h-[44px] !py-2 text-sm" data-track="map_click" data-track-location="areas-directions">
        <PinIcon className="h-4 w-4" />{t.cta.directions} · {origin.split(",")[0]}<ExternalIcon className="h-4 w-4" />
      </a>
    </p>
  );
}
