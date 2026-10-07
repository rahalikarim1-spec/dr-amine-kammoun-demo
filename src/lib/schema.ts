/**
 * JSON-LD builders. Rules:
 *  - only data that is visible on the page / confirmed in config/site.ts
 *  - NO ratings, reviews, awards, credentials
 *  - FAQPage only when seoConfig.enableFaqSchema is true
 */
import type { Lang, PageDef, PageContent } from "./types";
import { LANG_META } from "./types";
import { siteConfig, mapsViewUrl } from "@/config/site";
import { seoConfig } from "@/config/seo";
import { editorialConfig } from "@/config/editorial";
import { ancestorsOf } from "./registry";
import { getContent } from "./content";
import { urlOf } from "./links";
import { plain } from "./inline";
import { PUBLICATIONS, academicProfile } from "@/config/publications";

const origin = siteConfig.siteUrl;
export const IDS = {
  physician: `${origin}/#physician`,
  clinic: `${origin}/#clinic`,
  website: `${origin}/#website`,
};

function address(lang: Lang) {
  const l = siteConfig.location;
  return {
    "@type": "PostalAddress",
    ...(l.streetAddress ? { streetAddress: l.streetAddress } : {}),
    addressLocality: l.city.fr,
    ...(l.postalCode ? { postalCode: l.postalCode } : {}),
    addressCountry: l.countryCode,
  };
}

function openingHours() {
  const hours = siteConfig.openingHours?.filter((h) => h.schema);
  if (!hours?.length) return {};
  return {
    openingHoursSpecification: hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.schema!.dayOfWeek,
      opens: h.schema!.opens,
      closes: h.schema!.closes,
    })),
  };
}

function sameAs(): string[] {
  return [siteConfig.googleBusinessProfileUrl, siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.linkedin].filter(
    (x): x is string => Boolean(x),
  );
}

function geo() {
  const l = siteConfig.location;
  return l.latitude != null && l.longitude != null
    ? { geo: { "@type": "GeoCoordinates", latitude: l.latitude, longitude: l.longitude } }
    : {};
}

/** Person/Physician academic metadata — emitted ONLY from verified data in config/publications.ts. */
function scholarlyFields() {
  const out: Record<string, unknown> = {};
  if (academicProfile.positions.length)
    out.affiliation = academicProfile.positions.map((p) => ({ "@type": "Organization", name: p.institution }));
  const creds = academicProfile.credentials.filter((c) => c.institution);
  if (creds.length) out.alumniOf = creds.map((c) => ({ "@type": "EducationalOrganization", name: c.institution }));
  return out;
}

/** One ScholarlyArticle node per REAL publication (none while the list is empty). */
export function publicationNodes(lang: Lang) {
  return PUBLICATIONS.map((p) => ({
    "@type": "ScholarlyArticle",
    name: p.title,
    author: p.authors.map((a) => ({ "@type": "Person", name: a })),
    datePublished: String(p.year),
    isPartOf: { "@type": "Periodical", name: p.venue },
    ...(p.abstract?.[lang] ? { abstract: p.abstract[lang] } : {}),
    ...(p.doi ? { sameAs: `https://doi.org/${p.doi}`, identifier: p.doi } : p.url ? { url: p.url } : {}),
    creator: { "@id": IDS.physician },
  }));
}

export function physicianNode(lang: Lang) {
  return {
    "@type": "Physician",
    "@id": IDS.physician,
    name: siteConfig.name,
    alternateName: siteConfig.nameLocalized.ar,
    jobTitle: siteConfig.jobTitle[lang],
    description:
      lang === "fr"
        ? "Médecin gynécologue-obstétricien à Ain Zaghouan Nord, Tunis."
        : "طبيب أمراض النساء والتوليد في عين زغوان الشمالية، تونس.",
    url: urlOf("home", lang),
    telephone: siteConfig.phone.e164,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    medicalSpecialty: ["https://schema.org/Gynecologic", "https://schema.org/Obstetric"],
    address: address(lang),
    areaServed: seoConfig.areaServed.map((a) => ({ "@type": "Place", name: a[lang] })),
    knowsLanguage: ["fr", "ar"],
    hasMap: mapsViewUrl(),
    ...geo(),
    ...openingHours(),
    ...(sameAs().length ? { sameAs: sameAs() } : {}),
    ...scholarlyFields(),
    ...(siteConfig.professional.doctorPhoto ? { image: `${origin}${siteConfig.professional.doctorPhoto}` } : {}),
  };
}

export function clinicNode(lang: Lang) {
  return {
    "@type": "MedicalClinic",
    "@id": IDS.clinic,
    name: lang === "fr" ? "Cabinet du Dr Amine Kammoun" : "عيادة د. أمين قمون",
    url: urlOf("cabinet", lang),
    telephone: siteConfig.phone.e164,
    medicalSpecialty: ["https://schema.org/Gynecologic", "https://schema.org/Obstetric"],
    address: address(lang),
    areaServed: seoConfig.areaServed.map((a) => ({ "@type": "Place", name: a[lang] })),
    hasMap: mapsViewUrl(),
    ...geo(),
    ...openingHours(),
    ...(sameAs().length ? { sameAs: sameAs() } : {}),
    employee: { "@id": IDS.physician },
  };
}

export function websiteNode(lang: Lang) {
  return {
    "@type": "WebSite",
    "@id": IDS.website,
    url: urlOf("home", lang),
    name: siteConfig.siteName[lang],
    inLanguage: LANG_META[lang].hreflang,
    publisher: { "@id": IDS.physician },
  };
}

export function breadcrumbNode(page: PageDef, lang: Lang) {
  const chain = [...ancestorsOf(page.id), page];
  return {
    "@type": "BreadcrumbList",
    itemListElement: chain.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: getContent(lang, p.id).label,
      item: urlOf(p, lang),
    })),
  };
}

function reviewFields(content: PageContent) {
  const reviewer = content.medicalReviewer ?? (editorialConfig.reviewed ? editorialConfig.reviewerName : null);
  const date = content.lastReviewed ?? editorialConfig.reviewedOn;
  if (!reviewer || !date) return {};
  return { lastReviewed: date, reviewedBy: { "@id": IDS.physician } };
}

export function webPageNode(page: PageDef, lang: Lang, content: PageContent) {
  const url = urlOf(page, lang);
  const medical = ["article", "hub"].includes(page.template) && page.cluster !== "local" && page.cluster !== "core";
  const type = page.template === "contact" ? "ContactPage" : medical ? "MedicalWebPage" : "WebPage";
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: plain(content.h1),
    description: content.metaDescription,
    inLanguage: LANG_META[lang].hreflang,
    isPartOf: { "@id": IDS.website },
    dateModified: content.lastUpdated,
    publisher: { "@id": IDS.physician },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    ...(page.condition ? { about: { "@type": "MedicalCondition", name: page.condition } } : {}),
    ...(medical ? reviewFields(content) : {}),
    ...(page.template === "local" ? { about: { "@id": IDS.clinic } } : {}),
  };
}

export function faqNode(content: PageContent) {
  if (!seoConfig.enableFaqSchema || !content.faq?.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  };
}

/** Pages that carry the full Physician / MedicalClinic entities. */
const ENTITY_PAGES: Record<string, ("physician" | "clinic")[]> = {
  home: ["physician", "clinic"],
  doctor: ["physician"],
  "doctor-publications": ["physician"],
  cabinet: ["clinic", "physician"],
  contact: ["clinic", "physician"],
  "local-ain-zaghouan": ["clinic", "physician"],
  "local-aouina": ["clinic", "physician"],
};

export function buildGraph(page: PageDef, lang: Lang, content: PageContent) {
  const url = urlOf(page, lang);
  const graph: Record<string, unknown>[] = [];
  const entities = ENTITY_PAGES[page.id] ?? [];
  if (page.id === "home") graph.push(websiteNode(lang));
  if (entities.includes("physician")) graph.push(physicianNode(lang));
  if (entities.includes("clinic")) graph.push(clinicNode(lang));
  graph.push(webPageNode(page, lang, content));
  if (page.id !== "home") graph.push({ ...breadcrumbNode(page, lang), "@id": `${url}#breadcrumb` });
  else graph.push({ "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: content.label, item: url }] });
  if (page.id === "doctor-publications") graph.push(...publicationNodes(lang));
  const faq = faqNode(content);
  if (faq) graph.push(faq);
  return { "@context": "https://schema.org", "@graph": JSON.parse(JSON.stringify(graph)) };
}

