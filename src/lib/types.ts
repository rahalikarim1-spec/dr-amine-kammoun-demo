export const LANGS = ["fr", "ar"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "fr";

export const LANG_META: Record<Lang, { dir: "ltr" | "rtl"; hreflang: string; ogLocale: string; label: string; native: string }> = {
  fr: { dir: "ltr", hreflang: "fr-TN", ogLocale: "fr_TN", label: "Français", native: "Français" },
  ar: { dir: "rtl", hreflang: "ar-TN", ogLocale: "ar_TN", label: "العربية", native: "العربية" },
};

export function isLang(v: string): v is Lang {
  return (LANGS as readonly string[]).includes(v);
}

export type Localized<T = string> = Record<Lang, T>;

/** How a page is rendered. */
export type Template =
  | "home"
  | "hub"
  | "article"
  | "local"
  | "doctor"
  | "cabinet"
  | "contact"
  | "appointment"
  | "faq"
  | "infohub"
  | "legal";

export type PageType = "home" | "core" | "hub" | "child" | "local" | "legal";

export type Intent = "informational" | "local" | "navigational" | "transactional" | "trust";

export type Cluster = "gynecology" | "pregnancy" | "ultrasound" | "fertility" | "conditions" | "local" | "core" | "legal";

/** Structural definition of a page: language independent. */
export interface PageDef {
  id: string;
  template: Template;
  type: PageType;
  cluster: Cluster;
  /** URL segment, per language. Empty string for the home page. */
  slug: Localized;
  /** Parent page id: drives URL nesting and breadcrumbs. */
  parent?: string;
  /** Primary topic (English, internal documentation only). */
  topic: string;
  intent: Intent;
  /** false => noindex, excluded from sitemap. */
  index: boolean;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  /** Curated, semantically related pages (siblings, cross-cluster, CTA targets). 3–7 for content pages. */
  related: string[];
  /** Schema.org MedicalCondition name (English), for condition pages. */
  condition?: string;
  /** Source ids, see config/sources.ts */
  sources?: string[];
  /** Also listed (as a secondary relation) in another hub, without duplicating the page. */
  alsoInHubs?: string[];
  /** Show in the main desktop navigation dropdown. */
  inNav?: boolean;
}

/* ---------- Content model ---------- */

export type Block =
  | { t: "p"; v: string }
  | { t: "ul"; v: string[] }
  | { t: "ol"; v: string[] }
  | { t: "h3"; v: string }
  | { t: "note"; v: string }
  | { t: "warn"; v: string; title?: string };

export interface Section {
  id: string;
  h2: string;
  blocks: Block[];
}

export interface FaqItem {
  q: string;
  a: string;
}

/** Per-language content of a page. Inline markup: [[page-id|anchor text]] and **bold**. */
export interface PageContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Short label used in navigation, breadcrumbs and cards. */
  label: string;
  /** Shorter label for the desktop navigation (falls back to `label`). */
  navLabel?: string;
  /** One/two sentence summary used on hub cards and "related" cards. */
  summary: string;
  intro: string;
  sections: Section[];
  faq?: FaqItem[];
  /** ISO date of the last editorial update. */
  lastUpdated: string;
  /** Optional per-page medical reviewer override (see config/editorial.ts). */
  medicalReviewer?: string | null;
  lastReviewed?: string | null;
}

/* helpers for authoring content compactly */
export const p = (v: string): Block => ({ t: "p", v });
export const ul = (v: string[]): Block => ({ t: "ul", v });
export const ol = (v: string[]): Block => ({ t: "ol", v });
export const h3 = (v: string): Block => ({ t: "h3", v });
export const note = (v: string): Block => ({ t: "note", v });
export const warn = (v: string, title?: string): Block => ({ t: "warn", v, title });
export const s = (id: string, h2: string, blocks: Block[]): Section => ({ id, h2, blocks });
export const faq = (q: string, a: string): FaqItem => ({ q, a });
