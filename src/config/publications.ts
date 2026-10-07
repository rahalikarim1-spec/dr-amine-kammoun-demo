/**
 * ACADEMIC PROFILE & SCIENTIFIC PUBLICATIONS — client data, NOT yet provided.
 *
 * Nothing in this file is invented: all lists are empty. The publications page shows an honest
 * "awaiting information" state until entries are added, stays `noindex` and out of the sitemap
 * while PUBLICATIONS is empty, and becomes indexable automatically once it has entries.
 *
 * To add a publication, append an object to PUBLICATIONS, e.g. (placeholder values only):
 *
 *   {
 *     title: "<exact title, in its original language>",
 *     authors: ["<A. Author>", "Dr A. Kammoun"],     // as printed in the publication
 *     year: 0000,
 *     venue: "<journal / university / congress name>",
 *     type: "article",                                 // article | review | book-chapter | thesis | congress | other
 *     abstract: { fr: "<optional short description>", ar: "<optional>" },
 *     doi: "10.xxxx/xxxxx",                            // optional
 *     url: "https://…",                                // optional external link
 *   }
 */
import type { Localized } from "@/lib/types";

export type PublicationType = "article" | "review" | "book-chapter" | "thesis" | "congress" | "other";

export interface Publication {
  title: string;
  authors: string[];
  year: number;
  venue: string;
  type: PublicationType;
  abstract?: Partial<Localized>;
  doi?: string;
  url?: string;
}

export const PUBLICATIONS: Publication[] = [];

/**
 * Academic profile — fill only with verified information (and only what the Ordre des médecins rules allow).
 * Rendered on the publications page and, when present, emitted as Person/Physician schema.
 */
export const academicProfile = {
  /** Short factual summary of the academic career. */
  summary: null as null | Localized,
  /** e.g. { title: { fr: "…", ar: "…" }, institution: "…", period: "…" } */
  positions: [] as { title: Localized; institution: string; period?: string }[],
  /** Degrees / diplomas: { name, institution, year }. */
  credentials: [] as { name: string; institution?: string; year?: number }[],
};

export const hasPublications = PUBLICATIONS.length > 0;
