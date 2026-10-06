/** Navigation structure shared by the UI and by scripts/validate-seo.ts (so link audits match reality). */
import { PAGES, childrenOf } from "@/lib/registry";

export const FOOTER_COLUMNS = {
  topics: ["hub-gyneco", "hub-pregnancy", "hub-echo", "hub-fertility", "hub-conditions", "info-hub"],
  practice: ["doctor", "cabinet", "local-ain-zaghouan", "areas", "appointment", "contact", "faq"],
  legal: ["editorial-policy", "legal-notice", "privacy", "cookies"],
};

/** Pages linked directly from the homepage body (HomeView). */
export const HOME_LINKS = [
  "appointment", "doctor", "hub-gyneco", "hub-pregnancy", "hub-echo", "hub-fertility", "hub-conditions", "info-hub",
  "cond-endometriosis", "cond-pcos", "cond-ovarian-cyst", "cond-fibroid", "local-ain-zaghouan", "cabinet", "areas",
  "contact", "faq", "privacy",
];

/** Targets of the sitewide header (desktop dropdowns + mobile menu). */
export function headerTargets(): string[] {
  const top = PAGES.filter((p) => p.inNav);
  return [...top.map((p) => p.id), ...top.filter((p) => p.template === "hub").flatMap((h) => childrenOf(h.id).map((c) => c.id)), "appointment", "home"];
}
