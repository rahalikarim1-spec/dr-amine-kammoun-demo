/**
 * EDITORIAL / E-E-A-T CONFIGURATION
 *
 * The demo content has NOT been medically reviewed. The UI therefore never claims a review.
 * When Dr Kammoun has validated the content, set `reviewed: true` and `reviewedOn`
 * (global default; any page can override with `medicalReviewer` / `lastReviewed` in its content).
 * Schema.org `reviewedBy` / `lastReviewed` are only emitted when `reviewed` is true.
 */
export const editorialConfig = {
  reviewed: false,
  reviewerName: "Dr Amine Kammoun",
  reviewedOn: null as string | null, // ISO date, e.g. "2026-11-02"
  /** Contact point for corrections. */
  correctionsEmail: null as string | null,
};
