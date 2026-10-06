/**
 * SITE CONFIGURATION — single source of truth for the doctor's identity and NAP data.
 *
 * Everything that is NOT verified yet is `null`/empty here. The UI never displays an
 * invented value: a `null` simply hides the corresponding block or shows neutral wording.
 * See CLIENT-DATA-NEEDED.md for the list of values to collect from Dr Kammoun.
 */
import type { Localized } from "@/lib/types";

const env = (v: string | undefined) => (v && v.trim() !== "" ? v.trim() : null);

const vercelHost = env(process.env.VERCEL_PROJECT_PRODUCTION_URL);

export const siteConfig = {
  /** Public origin, no trailing slash. Set NEXT_PUBLIC_SITE_URL in production. */
  siteUrl: (
    env(process.env.NEXT_PUBLIC_SITE_URL) ??
    (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")
  ).replace(/\/$/, ""),

  /**
   * Indexing switch. The demo must NOT be indexed (duplicate-content / wrong-domain risk).
   * Set NEXT_PUBLIC_INDEXING=on on the final production domain only.
   */
  indexing: process.env.NEXT_PUBLIC_INDEXING === "on",

  name: "Dr Amine Kammoun",
  siteName: { fr: "Dr Amine Kammoun – Gynécologue-Obstétricien", ar: "د. أمين قمون – طبيب أمراض النساء والتوليد" } as Localized,
  /** ⚠ Arabic spelling of the surname to be confirmed with the doctor. */
  nameLocalized: { fr: "Dr Amine Kammoun", ar: "د. أمين قمون" } as Localized,
  jobTitle: { fr: "Gynécologue-Obstétricien", ar: "طبيب أمراض النساء والتوليد" } as Localized,

  phone: {
    display: "+216 98 272 858",
    e164: "+21698272858",
    href: "tel:+21698272858",
  },

  /** Optional channels — leave null until confirmed (UI hides them). */
  whatsappNumber: env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER), // digits only, e.g. 21698272858
  email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  additionalPhones: [] as string[],
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
  },

  location: {
    area: { fr: "Ain Zaghouan Nord", ar: "عين زغوان الشمالية" } as Localized,
    city: { fr: "Tunis", ar: "تونس" } as Localized,
    country: { fr: "Tunisie", ar: "تونس" } as Localized,
    countryCode: "TN",
    /** ⚠ Official street address — NOT provided yet. Fill in once verified (also update the Google Business Profile). */
    streetAddress: null as string | null,
    postalCode: null as string | null,
    latitude: null as number | null,
    longitude: null as number | null,
  },

  /** ⚠ Verified Google Maps / Business Profile URLs. When null, links fall back to a Google Maps *search* for the name + area. */
  mapsUrl: env(process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL),
  mapsEmbedUrl: env(process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL),
  googleBusinessProfileUrl: env(process.env.NEXT_PUBLIC_GBP_URL),

  /**
   * ⚠ Opening hours — NOT provided. Format when known:
   * [{ days: { fr: "Lundi – Vendredi", ar: "من الاثنين إلى الجمعة" }, hours: "09:00 – 17:00" }]
   * Also add `openingHoursSpecification` mapping in lib/schema.ts if you want it in JSON-LD.
   */
  openingHours: null as null | { days: Localized; hours: string; schema?: { dayOfWeek: string[]; opens: string; closes: string } }[],

  /** ⚠ Optional professional data — rendered only when provided. */
  professional: {
    bio: null as null | Localized,
    qualifications: null as null | { fr: string[]; ar: string[] },
    languagesSpoken: null as null | { fr: string[]; ar: string[] },
    registrationNumber: null as string | null,
    doctorPhoto: null as string | null, // path under /public, e.g. "/images/dr-kammoun.jpg"
    cabinetPhotos: [] as { src: string; alt: Localized }[],
  },

  tracking: {
    gtmId: env(process.env.NEXT_PUBLIC_GTM_ID),
    ga4Id: env(process.env.NEXT_PUBLIC_GA4_ID),
    gscVerification: env(process.env.NEXT_PUBLIC_GSC_VERIFICATION),
  },
};

export type SiteConfig = typeof siteConfig;

export const abs = (path: string) => `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

/** Text query identifying the practice on Google Maps (used until a verified URL is configured). */
export function mapsQuery(): string {
  const l = siteConfig.location;
  return siteConfig.location.streetAddress
    ? `${siteConfig.name} ${l.streetAddress} ${l.city.fr}`
    : `${siteConfig.name} gynécologue ${l.area.fr} ${l.city.fr}`;
}

export function mapsViewUrl(): string {
  return siteConfig.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery())}`;
}

export function mapsDirectionsUrl(origin?: string): string {
  const q = new URLSearchParams({ api: "1", destination: mapsQuery() });
  if (origin) q.set("origin", origin);
  return `https://www.google.com/maps/dir/?${q.toString()}`;
}

export function mapsEmbedSrc(): string {
  return siteConfig.mapsEmbedUrl ?? `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery())}&output=embed`;
}
