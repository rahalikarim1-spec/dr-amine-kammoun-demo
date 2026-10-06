import type { Localized } from "@/lib/types";

/**
 * Reference organisations shown in the "Pour approfondir" block of each page.
 * Only organisation-level references are listed (no invented article citations).
 * Before going live, the medical reviewer should verify each page against the exact
 * guideline / document and replace or complete these entries with precise citations.
 */
export interface Source {
  id: string;
  name: Localized;
  publisher: Localized;
  url: string;
}

export const SOURCES: Source[] = [
  { id: "who", name: { fr: "OMS – Santé sexuelle et reproductive", ar: "منظمة الصحة العالمية – الصحة الجنسية والإنجابية" }, publisher: { fr: "Organisation mondiale de la Santé", ar: "منظمة الصحة العالمية" }, url: "https://www.who.int/health-topics/sexual-and-reproductive-health" },
  { id: "has", name: { fr: "HAS – Haute Autorité de santé", ar: "الهيئة العليا للصحة (فرنسا)" }, publisher: { fr: "Haute Autorité de santé (France)", ar: "الهيئة العليا للصحة (فرنسا)" }, url: "https://www.has-sante.fr" },
  { id: "cngof", name: { fr: "CNGOF – Collège national des gynécologues et obstétriciens français", ar: "الكلية الوطنية لأطباء النساء والتوليد الفرنسيين (CNGOF)" }, publisher: { fr: "CNGOF", ar: "CNGOF" }, url: "https://cngof.fr" },
  { id: "acog", name: { fr: "ACOG – American College of Obstetricians and Gynecologists", ar: "الكلية الأمريكية لأطباء النساء والتوليد (ACOG)" }, publisher: { fr: "ACOG", ar: "ACOG" }, url: "https://www.acog.org" },
  { id: "nhs", name: { fr: "NHS – Santé de la femme et grossesse (en anglais)", ar: "الخدمة الصحية الوطنية البريطانية (NHS) – بالإنجليزية" }, publisher: { fr: "National Health Service (Royaume-Uni)", ar: "NHS (المملكة المتحدة)" }, url: "https://www.nhs.uk/pregnancy/" },
  { id: "eshre", name: { fr: "ESHRE – Société européenne de reproduction humaine et d'embryologie", ar: "الجمعية الأوروبية للتكاثر البشري وعلم الأجنة (ESHRE)" }, publisher: { fr: "ESHRE", ar: "ESHRE" }, url: "https://www.eshre.eu" },
  { id: "ms-tn", name: { fr: "Ministère de la Santé de Tunisie", ar: "وزارة الصحة التونسية" }, publisher: { fr: "Ministère de la Santé (Tunisie)", ar: "وزارة الصحة (تونس)" }, url: "https://www.santetunisie.rns.tn" },
  { id: "figo", name: { fr: "FIGO – Fédération internationale de gynécologie et d'obstétrique", ar: "الاتحاد الدولي لأمراض النساء والتوليد (FIGO)" }, publisher: { fr: "FIGO", ar: "FIGO" }, url: "https://www.figo.org" },
  { id: "ismrm", name: { fr: "Société européenne de gynécologie endoscopique (ESGE)", ar: "الجمعية الأوروبية لجراحة المناظير النسائية (ESGE)" }, publisher: { fr: "ESGE", ar: "ESGE" }, url: "https://esge.org" },
];

export const sourceById = (id: string) => SOURCES.find((s) => s.id === id);
