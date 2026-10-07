import { PageContent, p, ul, note, warn, s, faq } from "@/lib/types";

const D = "2026-10-07";

export const localExtra: Record<string, PageContent> = {
  "local-aouina": {
    label: "Gynécologue près de L'Aouina",
    metaTitle: "Gynécologue près de L'Aouina – cabinet à Ain Zaghouan Nord",
    metaDescription: "Dr Amine Kammoun, gynécologue-obstétricien. Cabinet à Ain Zaghouan Nord (Tunis), voisin de l'Aouina : accès depuis l'Aouina, motifs de consultation, rendez-vous.",
    h1: "Gynécologue-obstétricien près de L'Aouina : cabinet à Ain Zaghouan Nord",
    summary: "Le cabinet du Dr Kammoun est à Ain Zaghouan Nord, secteur voisin de l'Aouina : accès, motifs de consultation, rendez-vous.",
    intro: "Vous habitez ou travaillez à l'Aouina et cherchez un gynécologue-obstétricien ? Le cabinet du Dr Amine Kammoun est situé à Ain Zaghouan Nord, à Tunis, dans un secteur voisin de l'Aouina. Cette page explique où se trouve exactement le cabinet, comment s'y rendre depuis l'Aouina et pour quels motifs consulter.",
    sections: [
      s("cabinet", "Où se trouve le cabinet ?", [
        p("Le cabinet n'est pas situé à l'Aouina : il se trouve à **Ain Zaghouan Nord**, à Tunis. Ain Zaghouan Nord est un secteur voisin de l'Aouina, dans le nord de l'agglomération, ce qui permet aux patientes de l'Aouina de s'y rendre sans traverser tout le Grand Tunis. La page [[local-ain-zaghouan|gynécologue à Ain Zaghouan Nord]] présente le cabinet en détail."),
        p("Téléphone : {phone}. Pour l'adresse détaillée et l'itinéraire, utilisez les boutons de la section « Venir de l'Aouina » ci-dessous."),
      ]),
      s("specialite", "Un gynécologue-obstétricien à votre écoute", [
        p("Le Dr Amine Kammoun est médecin gynécologue-obstétricien. La gynécologie-obstétrique accompagne la femme à tous les âges de la vie, de la prévention au suivi de grossesse. Pour en savoir plus sur le docteur, consultez sa [[doctor|présentation]]."),
      ]),
      s("motifs", "Pour quels motifs consulter ?", [
        p("Les rubriques d'information du site vous aident à vous repérer avant votre rendez-vous :"),
        ul([
          "suivi gynécologique, contraception, cycle, ménopause : [[hub-gyneco|gynécologie]] ;",
          "projet de grossesse, suivi et accouchement : [[hub-pregnancy|grossesse et obstétrique]] ;",
          "examens d'imagerie : [[hub-echo|échographie]] ;",
          "difficultés à concevoir, quand elles se prolongent : [[hub-fertility|fertilité]] ;",
          "douleurs, règles anormales, kystes, fibromes : [[hub-conditions|pathologies gynécologiques]].",
        ]),
        note("Ces rubriques sont informatives. Les examens et prises en charge réellement proposés par le cabinet sont précisés lors de la prise de rendez-vous."),
      ]),
      s("acces", "Venir de l'Aouina au cabinet", [
        p("La durée du trajet dépend de l'heure et de la circulation. Le bouton ci-dessous ouvre Google Maps avec un itinéraire calculé depuis l'Aouina jusqu'au cabinet, avec la durée en temps réel. Prévoyez une marge aux heures de pointe pour arriver sereinement."),
      ]),
      s("autres", "Vous venez d'un autre quartier ?", [
        p("Le cabinet reçoit aussi des patientes venant de [[areas|La Soukra, du Lac 2, de la Cité El Wahat et d'autres quartiers du Grand Tunis]]."),
      ]),
      s("rdv", "Prendre rendez-vous", [
        p("Appelez le cabinet au {phone} pour fixer un rendez-vous. Voir [[appointment|prendre rendez-vous]] pour préparer votre appel, ou la page [[contact|contact]]."),
        warn("En cas d'urgence (saignement abondant, douleur intense, grossesse avec symptôme inquiétant), appelez le SAMU (190) ou rendez-vous aux urgences.", "Urgence médicale"),
      ]),
    ],
    faq: [
      faq("Le cabinet est-il situé à l'Aouina ?", "Non. Le cabinet est à Ain Zaghouan Nord, à Tunis, un secteur voisin de l'Aouina."),
      faq("Comment aller de l'Aouina au cabinet ?", "Utilisez le bouton d'itinéraire de cette page : Google Maps calcule le trajet depuis l'Aouina avec la durée selon la circulation."),
      faq("Quels types de consultations sont concernés ?", "Les domaines de la gynécologie-obstétrique : voir [[hub-gyneco|gynécologie]], [[hub-pregnancy|grossesse]] et [[hub-echo|échographie]]. Les prestations exactes sont confirmées par le cabinet lors de la prise de rendez-vous."),
      faq("Comment prendre rendez-vous ?", "Par téléphone au {phone}. Voir [[appointment|prendre rendez-vous]]."),
      faq("Peut-on se renseigner sur le suivi de grossesse avant de consulter ?", "Oui : la rubrique [[hub-pregnancy|grossesse et obstétrique]] présente le suivi étape par étape. Pour les modalités pratiques, appelez le cabinet."),
    ],
    lastUpdated: D,
  },

  "doctor-publications": {
    label: "Publications scientifiques",
    metaTitle: "Publications scientifiques et parcours académique",
    metaDescription: "Parcours académique et publications scientifiques du Dr Amine Kammoun, gynécologue-obstétricien à Tunis : section en cours de constitution.",
    h1: "Parcours académique et publications scientifiques",
    summary: "Parcours académique et travaux scientifiques du Dr Kammoun (section en cours de constitution).",
    intro: "Cette page est consacrée au parcours académique et aux publications scientifiques du Dr Amine Kammoun, gynécologue-obstétricien. Pour chaque travail, elle présentera le titre, les auteurs, l'année, la revue, l'université ou le congrès, et un lien vers la publication lorsqu'il existe.",
    sections: [
      s("contenu", "Ce que présentera cette page", [
        ul([
          "le parcours académique (fonctions d'enseignement et de recherche) ;",
          "les articles publiés dans des revues scientifiques ;",
          "les communications présentées en congrès ;",
          "les thèses, mémoires, chapitres d'ouvrage et autres travaux ;",
          "pour chaque entrée : titre, auteurs, année, revue / université / congrès, type, résumé et lien (DOI) lorsque disponibles.",
        ]),
      ]),
      s("rigueur", "Une information vérifiée", [
        p("Seules des informations confirmées avec le Dr Kammoun seront publiées : aucune fonction, aucun titre et aucune publication n'est affiché tant qu'il n'a pas été vérifié. Voir la [[editorial-policy|politique éditoriale]]."),
        p("Retrouvez la [[doctor|présentation du docteur]], les informations sur [[cabinet|le cabinet]] et la bibliothèque d'[[info-hub|informations médicales]]."),
      ]),
    ],
    lastUpdated: D,
  },
};
