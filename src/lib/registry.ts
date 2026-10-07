/**
 * PAGE REGISTRY — language-independent structure of the whole site.
 * URLs, hierarchy (parent → breadcrumbs), curated related links, indexation and SEO intent live here.
 * Language-specific copy lives in src/content/{fr,ar}/*.ts, keyed by the same page `id`.
 *
 * Decisions that avoid keyword cannibalisation (see SEO-ARCHITECTURE.md):
 *  - "Échographie grossesse" is merged into "Échographie obstétricale" (same intent).
 *  - "Échographie 3D" + "Échographie 4D" are one page (same intent, one query family).
 *  - Douleurs pelviennes / Ménopause / Troubles menstruels have ONE canonical page (under Gynécologie),
 *    cross-listed (not duplicated) in the "Pathologies gynécologiques" hub through `alsoInHubs`.
 */
import type { PageDef } from "./types";
import { hasPublications } from "@/config/publications";

type Partial_ = Omit<PageDef, "slug" | "changeFrequency" | "priority" | "index"> & {
  fr: string;
  ar: string;
  priority?: number;
  index?: boolean;
  changeFrequency?: PageDef["changeFrequency"];
};

const def = (x: Partial_): PageDef => {
  const { fr, ar, priority, index, changeFrequency, ...rest } = x;
  return {
    ...rest,
    slug: { fr, ar },
    index: index ?? true,
    priority: priority ?? 0.6,
    changeFrequency: changeFrequency ?? "monthly",
  };
};

export const PAGES: PageDef[] = [
  /* ============ HOME & CORE ============ */
  def({ id: "home", template: "home", type: "home", cluster: "core", fr: "", ar: "", topic: "Dr Amine Kammoun – gynécologue-obstétricien Tunis (brand + local)", intent: "navigational", priority: 1, changeFrequency: "weekly",
    related: ["hub-gyneco", "hub-pregnancy", "hub-echo", "hub-conditions", "doctor", "local-ain-zaghouan", "contact"] }),
  def({ id: "doctor", template: "doctor", type: "core", cluster: "core", fr: "le-docteur", ar: "al-tabib", parent: "home", topic: "Dr Amine Kammoun – profile / E-E-A-T", intent: "trust", priority: 0.8, inNav: true,
    related: ["doctor-publications", "cabinet", "local-ain-zaghouan", "local-aouina", "hub-gyneco", "hub-pregnancy", "editorial-policy"] }),
  def({ id: "doctor-publications", template: "publications", type: "child", cluster: "core", fr: "publications-scientifiques", ar: "al-manshurat-al-ilmiya", parent: "doctor", topic: "Parcours académique et publications scientifiques (E-E-A-T)", intent: "trust", priority: 0.6,
    // Thin until real publications exist → noindex + not in sitemap automatically.
    index: hasPublications, related: ["doctor", "editorial-policy", "info-hub", "cabinet"] }),
  def({ id: "cabinet", template: "cabinet", type: "core", cluster: "core", fr: "le-cabinet", ar: "al-iyada", parent: "home", topic: "Cabinet de gynécologie Ain Zaghouan Nord – access & preparing a visit", intent: "local", priority: 0.7,
    related: ["local-ain-zaghouan", "local-aouina", "areas", "contact", "appointment", "gyn-consultation"] }),
  def({ id: "contact", template: "contact", type: "core", cluster: "core", fr: "contact", ar: "ittisal", parent: "home", topic: "Contact & directions (NAP)", intent: "navigational", priority: 0.9, inNav: true,
    related: ["appointment", "cabinet", "local-ain-zaghouan", "local-aouina", "faq"] }),
  def({ id: "appointment", template: "appointment", type: "core", cluster: "core", fr: "rendez-vous", ar: "hajz-mawid", parent: "home", topic: "Prendre rendez-vous gynécologue Tunis", intent: "transactional", priority: 0.9,
    related: ["contact", "cabinet", "gyn-consultation", "preg-consultation", "faq"] }),
  def({ id: "faq", template: "faq", type: "core", cluster: "core", fr: "faq", ar: "as-ila-shaiaa", parent: "home", topic: "General patient FAQ (practical questions)", intent: "informational", priority: 0.6,
    related: ["appointment", "info-hub", "gyn-consultation", "preg-follow-up", "contact"] }),
  def({ id: "info-hub", template: "infohub", type: "core", cluster: "core", fr: "informations-medicales", ar: "maalumat-tibbiya", parent: "home", topic: "Medical information hub (topical map)", intent: "informational", priority: 0.8,
    related: ["hub-gyneco", "hub-pregnancy", "hub-echo", "hub-fertility", "hub-conditions", "editorial-policy"] }),

  /* ============ LOCAL ============ */
  def({ id: "local-ain-zaghouan", template: "local", type: "local", cluster: "local", fr: "gynecologue-ain-zaghouan-nord", ar: "tabib-nisaa-ain-zaghouan-al-shamaliya", parent: "home", topic: "gynécologue Ain Zaghouan Nord (+ Aouina, Soukra, Lac 2, Cité El Wahat)", intent: "local", priority: 0.95, inNav: false,
    related: ["local-aouina", "areas", "cabinet", "hub-pregnancy", "hub-gyneco", "hub-echo", "contact"] }),
  def({ id: "local-aouina", template: "local", type: "local", cluster: "local", fr: "gynecologue-pres-de-l-aouina", ar: "tabib-nisaa-qarib-al-aouina", parent: "home", topic: "gynécologue près de l'Aouina (cabinet à Ain Zaghouan Nord) — secondary local target", intent: "local", priority: 0.9,
    related: ["local-ain-zaghouan", "doctor", "hub-gyneco", "hub-pregnancy", "hub-echo", "hub-fertility", "contact"] }),
  def({ id: "areas", template: "hub", type: "local", cluster: "local", fr: "zones-desservies", ar: "al-manatiq", parent: "local-ain-zaghouan", topic: "Zones desservies: Ain Zaghouan, Aouina, Soukra, Lac 2, Berges du Lac, Grand Tunis", intent: "local", priority: 0.7,
    related: ["local-ain-zaghouan", "local-aouina", "cabinet", "contact", "appointment"] }),

  /* ============ GYNECOLOGY ============ */
  def({ id: "hub-gyneco", template: "hub", type: "hub", cluster: "gynecology", fr: "gynecologie", ar: "tibb-al-nisaa", parent: "home", topic: "Gynécologie – hub", intent: "informational", priority: 0.9, inNav: true,
    related: ["hub-pregnancy", "hub-echo", "hub-conditions", "local-ain-zaghouan", "local-aouina", "doctor"] }),
  def({ id: "gyn-consultation", template: "article", type: "child", cluster: "gynecology", fr: "consultation-gynecologique", ar: "istishara-nisaiya", parent: "hub-gyneco", topic: "consultation gynécologique – déroulement", intent: "informational", priority: 0.8,
    related: ["gyn-routine", "gyn-screening", "echo-gyn", "gyn-contraception", "local-ain-zaghouan"], sources: ["acog", "cngof", "who"] }),
  def({ id: "gyn-routine", template: "article", type: "child", cluster: "gynecology", fr: "consultation-de-routine", ar: "fahs-dawri", parent: "hub-gyneco", topic: "suivi gynécologique de routine – fréquence & prévention", intent: "informational", priority: 0.7,
    related: ["gyn-consultation", "gyn-screening", "gyn-smear", "gyn-contraception", "gyn-menopause"], sources: ["acog", "cngof", "who"] }),
  def({ id: "gyn-screening", template: "article", type: "child", cluster: "gynecology", fr: "depistage-gynecologique", ar: "kashf-mubkir-nisaa", parent: "hub-gyneco", topic: "dépistage gynécologique (col, sein, IST)", intent: "informational", priority: 0.7,
    related: ["gyn-smear", "gyn-routine", "gyn-infections", "echo-gyn", "gyn-consultation"], sources: ["who", "has", "cngof"] }),
  def({ id: "gyn-smear", template: "article", type: "child", cluster: "gynecology", fr: "frottis-cervico-uterin", ar: "maskhat-unq-al-rahim", parent: "gyn-screening", topic: "frottis cervico-utérin", intent: "informational", priority: 0.7,
    related: ["gyn-screening", "gyn-routine", "gyn-infections", "gyn-consultation"], sources: ["who", "has", "cngof"] }),
  def({ id: "gyn-cycle", template: "article", type: "child", cluster: "gynecology", fr: "troubles-du-cycle-menstruel", ar: "idtirabat-al-dawra", parent: "hub-gyneco", topic: "troubles du cycle menstruel – vue d'ensemble", intent: "informational", priority: 0.7, alsoInHubs: ["hub-conditions"],
    related: ["gyn-irregular", "gyn-painful-periods", "cond-pcos", "cond-fibroid", "echo-gyn", "gyn-consultation"], sources: ["acog", "figo", "nhs"] }),
  def({ id: "gyn-irregular", template: "article", type: "child", cluster: "gynecology", fr: "regles-irregulieres", ar: "adam-intizam-al-dawra", parent: "gyn-cycle", topic: "règles irrégulières", intent: "informational", priority: 0.7,
    related: ["gyn-cycle", "cond-pcos", "fert-ovulation", "gyn-menopause", "echo-gyn"], sources: ["acog", "nhs", "figo"] }),
  def({ id: "gyn-painful-periods", template: "article", type: "child", cluster: "gynecology", fr: "regles-douloureuses", ar: "alam-al-dawra", parent: "gyn-cycle", topic: "règles douloureuses (dysménorrhée)", intent: "informational", priority: 0.7,
    related: ["gyn-cycle", "cond-endometriosis", "gyn-pelvic-pain", "echo-gyn", "gyn-consultation"], sources: ["acog", "nhs", "cngof"] }),
  def({ id: "gyn-pelvic-pain", template: "article", type: "child", cluster: "gynecology", fr: "douleurs-pelviennes", ar: "alam-al-hawd", parent: "hub-gyneco", topic: "douleurs pelviennes – causes & quand consulter", intent: "informational", priority: 0.75, alsoInHubs: ["hub-conditions"],
    related: ["cond-endometriosis", "cond-ovarian-cyst", "cond-fibroid", "echo-gyn", "gyn-infections", "gyn-consultation"], sources: ["acog", "nhs", "cngof"] }),
  def({ id: "gyn-menopause", template: "article", type: "child", cluster: "gynecology", fr: "menopause", ar: "sinn-al-yass", parent: "hub-gyneco", topic: "ménopause – symptômes & suivi", intent: "informational", priority: 0.75, alsoInHubs: ["hub-conditions"],
    related: ["gyn-routine", "gyn-irregular", "gyn-contraception", "gyn-screening", "gyn-consultation"], sources: ["who", "nhs", "acog"] }),
  def({ id: "gyn-contraception", template: "article", type: "child", cluster: "gynecology", fr: "contraception", ar: "mana-al-haml", parent: "hub-gyneco", topic: "contraception – méthodes & choix", intent: "informational", priority: 0.75,
    related: ["gyn-consultation", "gyn-routine", "preg-postpartum", "gyn-menopause", "gyn-infections"], sources: ["who", "has", "acog"] }),
  def({ id: "gyn-infections", template: "article", type: "child", cluster: "gynecology", fr: "infections-gynecologiques", ar: "iltihabat-nisaiya", parent: "hub-gyneco", topic: "infections gynécologiques (vaginites, IST)", intent: "informational", priority: 0.7,
    related: ["gyn-screening", "gyn-smear", "gyn-pelvic-pain", "gyn-consultation", "gyn-contraception"], sources: ["who", "nhs", "cngof"] }),

  /* ============ PREGNANCY ============ */
  def({ id: "hub-pregnancy", template: "hub", type: "hub", cluster: "pregnancy", fr: "grossesse-obstetrique", ar: "al-haml-wal-wiyada", parent: "home", topic: "Grossesse & obstétrique – hub", intent: "informational", priority: 0.9, inNav: true,
    related: ["hub-echo", "hub-gyneco", "local-ain-zaghouan", "local-aouina", "doctor", "appointment"] }),
  def({ id: "preg-follow-up", template: "article", type: "child", cluster: "pregnancy", fr: "suivi-de-grossesse", ar: "mutabaat-al-haml", parent: "hub-pregnancy", topic: "suivi de grossesse – calendrier & examens", intent: "informational", priority: 0.9,
    related: ["preg-consultation", "echo-obstetric", "preg-t1", "preg-t2", "preg-t3", "preg-high-risk"], sources: ["who", "has", "cngof", "nhs"] }),
  def({ id: "preg-consultation", template: "article", type: "child", cluster: "pregnancy", fr: "consultation-grossesse", ar: "istishara-al-haml", parent: "hub-pregnancy", topic: "première consultation de grossesse – déroulement", intent: "informational", priority: 0.8,
    related: ["preg-follow-up", "preg-t1", "echo-obstetric", "preg-high-risk", "local-ain-zaghouan"], sources: ["who", "has", "nhs"] }),
  def({ id: "preg-t1", template: "article", type: "child", cluster: "pregnancy", fr: "premier-trimestre", ar: "al-thulth-al-awwal", parent: "preg-follow-up", topic: "premier trimestre de grossesse", intent: "informational", priority: 0.75,
    related: ["preg-follow-up", "preg-t2", "echo-obstetric", "preg-consultation", "preg-high-risk"], sources: ["who", "nhs", "cngof"] }),
  def({ id: "preg-t2", template: "article", type: "child", cluster: "pregnancy", fr: "deuxieme-trimestre", ar: "al-thulth-al-thani", parent: "preg-follow-up", topic: "deuxième trimestre de grossesse", intent: "informational", priority: 0.75,
    related: ["preg-follow-up", "preg-t1", "preg-t3", "echo-obstetric", "preg-high-risk"], sources: ["who", "nhs", "cngof"] }),
  def({ id: "preg-t3", template: "article", type: "child", cluster: "pregnancy", fr: "troisieme-trimestre", ar: "al-thulth-al-thalith", parent: "preg-follow-up", topic: "troisième trimestre de grossesse", intent: "informational", priority: 0.75,
    related: ["preg-follow-up", "preg-t2", "preg-birth-prep", "echo-obstetric", "preg-high-risk"], sources: ["who", "nhs", "cngof"] }),
  def({ id: "preg-high-risk", template: "article", type: "child", cluster: "pregnancy", fr: "grossesse-a-risque", ar: "haml-khatir", parent: "hub-pregnancy", topic: "grossesse à risque – facteurs & surveillance", intent: "informational", priority: 0.75,
    related: ["preg-follow-up", "preg-t3", "echo-obstetric", "preg-birth-prep", "preg-consultation"], sources: ["who", "figo", "acog", "cngof"] }),
  def({ id: "preg-birth-prep", template: "article", type: "child", cluster: "pregnancy", fr: "preparation-accouchement", ar: "al-istidad-lil-wiyada", parent: "hub-pregnancy", topic: "préparation à l'accouchement", intent: "informational", priority: 0.7,
    related: ["preg-t3", "preg-follow-up", "preg-postpartum", "preg-high-risk", "preg-consultation"], sources: ["who", "nhs", "cngof"] }),
  def({ id: "preg-postpartum", template: "article", type: "child", cluster: "pregnancy", fr: "suivi-apres-accouchement", ar: "ma-baad-al-wiyada", parent: "hub-pregnancy", topic: "suivi post-partum (visite post-natale)", intent: "informational", priority: 0.7,
    related: ["preg-birth-prep", "gyn-contraception", "gyn-routine", "preg-follow-up", "echo-gyn"], sources: ["who", "nhs", "cngof"] }),

  /* ============ ULTRASOUND ============ */
  def({ id: "hub-echo", template: "hub", type: "hub", cluster: "ultrasound", fr: "echographie", ar: "tasweer-fawq-sawti", parent: "home", topic: "Échographie gynécologique & obstétricale – hub", intent: "informational", priority: 0.85, inNav: true,
    related: ["hub-pregnancy", "hub-gyneco", "hub-conditions", "local-ain-zaghouan", "local-aouina", "contact"] }),
  def({ id: "echo-gyn", template: "article", type: "child", cluster: "ultrasound", fr: "echographie-gynecologique", ar: "tasweer-nisaa", parent: "hub-echo", topic: "échographie gynécologique (pelvienne)", intent: "informational", priority: 0.8,
    related: ["gyn-pelvic-pain", "cond-ovarian-cyst", "cond-fibroid", "cond-endometriosis", "gyn-cycle", "fert-workup"], sources: ["acog", "nhs", "cngof"] }),
  def({ id: "echo-obstetric", template: "article", type: "child", cluster: "ultrasound", fr: "echographie-obstetricale", ar: "tasweer-al-haml", parent: "hub-echo", topic: "échographie de grossesse (obstétricale) – les 3 échographies", intent: "informational", priority: 0.85,
    related: ["preg-follow-up", "preg-t1", "preg-t2", "preg-t3", "echo-3d4d", "preg-high-risk"], sources: ["who", "has", "cngof", "nhs"] }),
  def({ id: "echo-3d4d", template: "article", type: "child", cluster: "ultrasound", fr: "echographie-3d-4d", ar: "tasweer-3d-4d", parent: "hub-echo", topic: "échographie 3D / 4D – intérêt & limites", intent: "informational", priority: 0.75,
    related: ["echo-obstetric", "preg-follow-up", "preg-t2", "echo-gyn"], sources: ["who", "nhs", "acog"] }),

  /* ============ FERTILITY ============ */
  def({ id: "hub-fertility", template: "hub", type: "hub", cluster: "fertility", fr: "fertilite", ar: "al-khusuba", parent: "home", topic: "Fertilité – hub d'information", intent: "informational", priority: 0.8, inNav: true,
    related: ["hub-conditions", "hub-gyneco", "echo-gyn", "doctor", "appointment"] }),
  def({ id: "fert-female-infertility", template: "article", type: "child", cluster: "fertility", fr: "infertilite-feminine", ar: "aqm-al-mara", parent: "hub-fertility", topic: "infertilité féminine – causes & démarche", intent: "informational", priority: 0.75,
    related: ["fert-workup", "fert-ovulation", "cond-endometriosis", "cond-pcos", "fert-pma", "echo-gyn"], sources: ["eshre", "who", "acog"] }),
  def({ id: "fert-workup", template: "article", type: "child", cluster: "fertility", fr: "bilan-de-fertilite", ar: "taqyim-al-khusuba", parent: "hub-fertility", topic: "bilan de fertilité – examens", intent: "informational", priority: 0.75,
    related: ["fert-female-infertility", "fert-ovulation", "echo-gyn", "fert-pma", "gyn-consultation"], sources: ["eshre", "who", "acog"] }),
  def({ id: "fert-ovulation", template: "article", type: "child", cluster: "fertility", fr: "troubles-ovulation", ar: "idtirabat-al-ibada", parent: "hub-fertility", topic: "troubles de l'ovulation", intent: "informational", priority: 0.7,
    related: ["cond-pcos", "gyn-irregular", "fert-workup", "fert-female-infertility", "echo-gyn"], sources: ["eshre", "acog", "who"] }),
  def({ id: "fert-pma", template: "article", type: "child", cluster: "fertility", fr: "pma-information-generale", ar: "al-injab-al-musaad", parent: "hub-fertility", topic: "PMA Tunisie – information générale", intent: "informational", priority: 0.75,
    related: ["fert-female-infertility", "fert-workup", "fert-ovulation", "cond-endometriosis", "contact"], sources: ["eshre", "who", "ms-tn"] }),

  /* ============ CONDITIONS ============ */
  def({ id: "hub-conditions", template: "hub", type: "hub", cluster: "conditions", fr: "pathologies-gynecologiques", ar: "amrad-nisaiya", parent: "home", topic: "Pathologies gynécologiques – hub", intent: "informational", priority: 0.85, inNav: true,
    related: ["hub-gyneco", "hub-echo", "hub-fertility", "gyn-consultation", "contact"] }),
  def({ id: "cond-endometriosis", template: "article", type: "child", cluster: "conditions", fr: "endometriose", ar: "al-bitana-al-muhajira", parent: "hub-conditions", topic: "endométriose", intent: "informational", priority: 0.85, condition: "Endometriosis",
    related: ["gyn-consultation", "gyn-pelvic-pain", "gyn-painful-periods", "echo-gyn", "fert-female-infertility"], sources: ["who", "eshre", "cngof", "acog"] }),
  def({ id: "cond-pcos", template: "article", type: "child", cluster: "conditions", fr: "syndrome-ovaires-polykystiques", ar: "takayyus-al-mabid", parent: "hub-conditions", topic: "syndrome des ovaires polykystiques (SOPK)", intent: "informational", priority: 0.85, condition: "Polycystic ovary syndrome",
    related: ["gyn-irregular", "fert-ovulation", "echo-gyn", "fert-female-infertility", "gyn-consultation"], sources: ["who", "eshre", "acog"] }),
  def({ id: "cond-ovarian-cyst", template: "article", type: "child", cluster: "conditions", fr: "kyste-ovarien", ar: "kis-al-mabid", parent: "hub-conditions", topic: "kyste ovarien", intent: "informational", priority: 0.8, condition: "Ovarian cyst",
    related: ["gyn-pelvic-pain", "echo-gyn", "gyn-consultation", "cond-endometriosis", "cond-pcos"], sources: ["acog", "nhs", "cngof"] }),
  def({ id: "cond-fibroid", template: "article", type: "child", cluster: "conditions", fr: "fibrome-uterin", ar: "al-auram-al-lifiya", parent: "hub-conditions", topic: "fibrome utérin", intent: "informational", priority: 0.8, condition: "Uterine fibroid",
    related: ["gyn-pelvic-pain", "gyn-cycle", "echo-gyn", "gyn-consultation", "fert-female-infertility"], sources: ["acog", "nhs", "cngof"] }),

  /* ============ LEGAL / TRUST ============ */
  def({ id: "editorial-policy", template: "legal", type: "legal", cluster: "legal", fr: "politique-editoriale", ar: "siyasat-al-tahrir", parent: "home", topic: "Politique éditoriale & information médicale (E-E-A-T)", intent: "trust", priority: 0.4, changeFrequency: "yearly",
    related: ["doctor", "info-hub", "legal-notice", "contact"] }),
  def({ id: "legal-notice", template: "legal", type: "legal", cluster: "legal", fr: "mentions-legales", ar: "ishaar-qanuni", parent: "home", topic: "Mentions légales", intent: "trust", priority: 0.3, changeFrequency: "yearly",
    related: ["privacy", "cookies", "editorial-policy", "contact"] }),
  def({ id: "privacy", template: "legal", type: "legal", cluster: "legal", fr: "politique-de-confidentialite", ar: "siyasat-al-khususiya", parent: "home", topic: "Politique de confidentialité", intent: "trust", priority: 0.2, index: false, changeFrequency: "yearly",
    related: ["cookies", "legal-notice", "contact"] }),
  def({ id: "cookies", template: "legal", type: "legal", cluster: "legal", fr: "politique-cookies", ar: "siyasat-al-cookies", parent: "home", topic: "Politique de cookies", intent: "trust", priority: 0.2, index: false, changeFrequency: "yearly",
    related: ["privacy", "legal-notice", "contact"] }),
];

/* ---------- lookups ---------- */

const byId = new Map(PAGES.map((p) => [p.id, p]));

export function getPage(id: string): PageDef {
  const p = byId.get(id);
  if (!p) throw new Error(`Unknown page id "${id}"`);
  return p;
}
export const hasPage = (id: string) => byId.has(id);

export const childrenOf = (id: string): PageDef[] => PAGES.filter((p) => p.parent === id);

/** Pages cross-listed in a hub through `alsoInHubs`. */
export const crossListedIn = (hubId: string): PageDef[] => PAGES.filter((p) => p.alsoInHubs?.includes(hubId));

export function ancestorsOf(id: string): PageDef[] {
  const chain: PageDef[] = [];
  let cur = getPage(id);
  while (cur.parent) {
    cur = getPage(cur.parent);
    chain.unshift(cur);
  }
  return chain;
}

export const HUB_IDS = ["hub-gyneco", "hub-pregnancy", "hub-echo", "hub-fertility", "hub-conditions"] as const;
