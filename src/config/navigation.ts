/**
 * Navigation structure shared by the UI and by scripts/validate-seo.ts (so link audits match reality).
 *
 * PATIENT-FACING NAVIGATION IS DELIBERATELY SHORT (5 entries). The deep architecture stays reachable through
 * hubs, breadcrumbs, contextual links, related blocks, the footer and the medical information hub.
 */

export interface NavItem {
  id: string;
  /** Curated children shown in the dropdown / mobile accordion (max 6). */
  children: string[];
}

export const NAV: NavItem[] = [
  { id: "doctor", children: ["doctor-publications", "cabinet"] },
  { id: "hub-gyneco", children: ["gyn-consultation", "gyn-cycle", "gyn-pelvic-pain", "gyn-contraception", "gyn-menopause", "gyn-screening"] },
  { id: "hub-pregnancy", children: ["preg-consultation", "preg-follow-up", "echo-obstetric", "preg-high-risk", "preg-birth-prep", "preg-postpartum"] },
  { id: "info-hub", children: ["hub-echo", "hub-fertility", "hub-conditions", "faq"] },
  { id: "contact", children: ["appointment", "local-ain-zaghouan", "local-aouina", "areas"] },
];

export const FOOTER_COLUMNS = {
  topics: ["hub-gyneco", "hub-pregnancy", "hub-echo", "hub-fertility", "hub-conditions", "info-hub"],
  practice: ["doctor", "doctor-publications", "cabinet", "local-ain-zaghouan", "local-aouina", "areas", "appointment", "contact", "faq"],
  legal: ["editorial-policy", "legal-notice", "privacy", "cookies"],
};

/** Pages linked directly from the homepage body (HomeView). */
export const HOME_LINKS = [
  "appointment", "doctor", "doctor-publications", "hub-gyneco", "hub-pregnancy", "hub-echo", "hub-fertility", "hub-conditions", "info-hub",
  "cond-endometriosis", "cond-pcos", "cond-ovarian-cyst", "cond-fibroid", "local-ain-zaghouan", "local-aouina", "cabinet", "areas",
  "contact", "faq", "privacy",
];

/** Targets of the sitewide header (desktop dropdowns + mobile menu). */
export function headerTargets(): string[] {
  return [...NAV.flatMap((n) => [n.id, ...n.children]), "appointment", "home"];
}
