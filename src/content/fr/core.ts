import { PageContent, p, ul, ol, h3, note, warn, s, faq } from "@/lib/types";

const D = "2026-10-06";

export const core: Record<string, PageContent> = {
  home: {
    label: "Accueil",
    metaTitle: "Dr Amine Kammoun – Gynécologue-Obstétricien à Ain Zaghouan Nord, Tunis",
    metaDescription: "Dr Amine Kammoun, gynécologue-obstétricien à Ain Zaghouan Nord, Tunis. Informations sur la gynécologie, la grossesse, l'échographie et la fertilité.",
    h1: "Dr Amine Kammoun, Gynécologue-Obstétricien à Ain Zaghouan Nord, Tunis",
    summary: "Cabinet de gynécologie-obstétrique à Ain Zaghouan Nord, Tunis.",
    intro: "Une information médicale claire sur le suivi gynécologique, la grossesse, l'échographie et la fertilité, pour les patientes d'Ain Zaghouan Nord et des quartiers voisins de Tunis.",
    sections: [],
    faq: [
      faq("Où est situé le cabinet du Dr Amine Kammoun ?", "Le cabinet est situé à Ain Zaghouan Nord, à Tunis. Voir la page [[local-ain-zaghouan|gynécologue à Ain Zaghouan Nord]] et la page [[contact|contact]] pour l'itinéraire."),
      faq("Comment prendre rendez-vous ?", "Le plus direct est d'appeler le cabinet au {phone}. Voir [[appointment|prendre rendez-vous]]."),
      faq("Les informations du site remplacent-elles une consultation ?", "Non. Elles sont générales et éducatives. Consultez un médecin pour toute question concernant votre santé."),
      faq("Que faire en cas d'urgence ?", "En cas de douleur intense, de saignement abondant, de malaise ou de situation urgente pendant la grossesse, appelez les urgences (SAMU : 190) ou rendez-vous au service d'urgence le plus proche."),
    ],
    lastUpdated: D,
  },

  doctor: {
    label: "Le docteur",
    metaTitle: "Dr Amine Kammoun : gynécologue-obstétricien à Tunis",
    metaDescription: "Présentation du Dr Amine Kammoun, médecin gynécologue-obstétricien à Ain Zaghouan Nord, Tunis : spécialité, domaines de la gynécologie-obstétrique et contact.",
    h1: "Dr Amine Kammoun, gynécologue-obstétricien",
    summary: "Présentation du Dr Amine Kammoun et de la spécialité de gynécologie-obstétrique.",
    intro: "Le Dr Amine Kammoun est médecin gynécologue-obstétricien et exerce à Ain Zaghouan Nord, à Tunis. Cette page présente la spécialité et les moyens de prendre contact avec le cabinet.",
    sections: [
      s("specialite", "La gynécologie-obstétrique, de quoi s'agit-il ?", [
        p("La gynécologie-obstétrique est une spécialité médicale et chirurgicale qui associe deux domaines complémentaires :"),
        ul([
          "la **gynécologie**, consacrée à la santé de la femme : [[hub-gyneco|suivi gynécologique, contraception, cycle, ménopause]] et affections comme celles présentées dans [[hub-conditions|pathologies gynécologiques]] ;",
          "l'**obstétrique**, consacrée à la [[hub-pregnancy|grossesse, à l'accouchement et au post-partum]].",
        ]),
        p("Le gynécologue-obstétricien s'appuie aussi sur l'[[hub-echo|échographie]] et intervient dans la prise en charge des difficultés de [[hub-fertility|fertilité]]."),
      ]),
      s("quand", "Quand consulter un gynécologue-obstétricien ?", [
        ul([
          "pour un suivi régulier de prévention ([[gyn-routine|consultation de routine]]) ;",
          "pour des symptômes : douleurs, saignements, pertes inhabituelles, troubles du cycle ;",
          "pour un projet de grossesse ou le [[preg-follow-up|suivi d'une grossesse]] ;",
          "pour choisir une [[gyn-contraception|contraception]] ;",
          "pour les questions autour de la [[gyn-menopause|ménopause]].",
        ]),
      ]),
      s("academique", "Parcours académique et publications", [
        p("Une page est dédiée au [[doctor-publications|parcours académique et aux publications scientifiques]] du Dr Kammoun. Elle est complétée au fur et à mesure de la vérification des informations."),
      ]),
      s("exercice", "Exercice et contact", [
        p("Le cabinet est situé à Ain Zaghouan Nord, Tunis. Pour des informations pratiques, voir [[cabinet|le cabinet]] et [[local-ain-zaghouan|gynécologue à Ain Zaghouan Nord]]. Les patientes de [[local-aouina|l'Aouina]] et des quartiers voisins y trouvent aussi les informations d'accès. Pour toute question ou rendez-vous : [[contact|contact]]."),
      ]),
      s("deontologie", "Information médicale et déontologie", [
        p("Les contenus de ce site respectent les principes de l'information médicale : pas de promesse de résultat, pas de comparaison, pas de publicité. Voir notre [[editorial-policy|politique éditoriale]]."),
      ]),
    ],
    faq: [
      faq("Où consulte le Dr Amine Kammoun ?", "À Ain Zaghouan Nord, Tunis. L'itinéraire est disponible sur la page [[contact|contact]]."),
      faq("Comment contacter le cabinet ?", "Par téléphone au {phone}. Voir [[appointment|prendre rendez-vous]]."),
    ],
    lastUpdated: D,
  },

  cabinet: {
    label: "Le cabinet",
    metaTitle: "Cabinet de gynécologie à Ain Zaghouan Nord, Tunis",
    metaDescription: "Le cabinet de gynécologie-obstétrique du Dr Amine Kammoun à Ain Zaghouan Nord, Tunis : situation, accès et conseils pour préparer votre venue.",
    h1: "Le cabinet de gynécologie-obstétrique à Ain Zaghouan Nord",
    summary: "Situation du cabinet, accès et conseils pour préparer une consultation.",
    intro: "Le cabinet du Dr Amine Kammoun est situé à Ain Zaghouan Nord, à Tunis. Vous trouverez ici les informations pratiques pour vous y rendre et préparer votre venue.",
    sections: [
      s("situation", "Situation", [
        p("Le cabinet se trouve à Ain Zaghouan Nord, dans le nord de l'agglomération tunisienne. Selon votre point de départ ([[local-aouina|L'Aouina]], [[areas|La Soukra, Lac 2, Cité El Wahat…]]), l'itinéraire se calcule facilement avec Google Maps depuis la page [[contact|contact]]."),
      ]),
      s("preparer", "Préparer votre venue", [
        ul([
          "Prévoyez une pièce d'identité et, si vous en avez, votre carnet de santé ou de grossesse.",
          "Apportez vos examens récents : analyses, échographies, comptes rendus.",
          "Notez la date de vos dernières règles et les médicaments que vous prenez.",
          "Préparez vos questions : voir [[gyn-consultation|déroulement d'une consultation gynécologique]].",
          "Pour un suivi de grossesse : [[preg-consultation|première consultation de grossesse]].",
        ]),
      ]),
      s("contact", "Informations pratiques", [
        p("Pour connaître les horaires de consultation ou fixer un rendez-vous, appelez le cabinet. Voir [[appointment|prendre rendez-vous]]."),
      ]),
    ],
    faq: [
      faq("Où se garer ou comment venir ?", "Utilisez l'itinéraire Google Maps proposé sur la page [[contact|contact]] pour choisir le meilleur trajet depuis votre position."),
      faq("Dois-je venir accompagnée ?", "C'est possible si vous le souhaitez. Précisez-le lors de la prise de rendez-vous."),
    ],
    lastUpdated: D,
  },

  contact: {
    label: "Contact",
    metaTitle: "Contact et accès : cabinet du Dr Amine Kammoun, Tunis",
    metaDescription: "Contacter le cabinet du Dr Amine Kammoun, gynécologue-obstétricien à Ain Zaghouan Nord, Tunis : téléphone +216 98 272 858, itinéraire et formulaire.",
    h1: "Contact et accès au cabinet",
    summary: "Téléphone, adresse, itinéraire et formulaire de contact.",
    intro: "Pour prendre rendez-vous ou poser une question pratique, le plus direct est d'appeler le cabinet. Vous pouvez aussi utiliser le formulaire ci-dessous ou ouvrir l'itinéraire dans Google Maps.",
    sections: [
      s("urgence", "En cas d'urgence", [
        warn("Ce formulaire n'est pas destiné aux urgences. En cas de douleur intense, de saignement abondant, de malaise ou d'urgence liée à la grossesse, appelez le SAMU (190) ou rendez-vous aux urgences.", "Urgence médicale"),
      ]),
    ],
    faq: [
      faq("Puis-je décrire mes symptômes dans le formulaire ?", "Nous vous recommandons de ne pas transmettre d'informations médicales détaillées par formulaire : appelez le cabinet. Voir [[privacy|politique de confidentialité]]."),
    ],
    lastUpdated: D,
  },

  appointment: {
    label: "Prendre rendez-vous",
    metaTitle: "Prendre rendez-vous avec un gynécologue à Tunis",
    metaDescription: "Prendre rendez-vous avec le Dr Amine Kammoun, gynécologue-obstétricien à Ain Zaghouan Nord, Tunis : par téléphone au +216 98 272 858, avec conseils de préparation.",
    h1: "Prendre rendez-vous au cabinet",
    summary: "Comment prendre rendez-vous et comment préparer votre appel.",
    intro: "Le moyen le plus direct de prendre rendez-vous avec le Dr Amine Kammoun est d'appeler le cabinet. Vous pouvez aussi nous laisser une demande de contact, à laquelle il sera répondu dans la mesure du possible.",
    sections: [
      s("appel", "Prendre rendez-vous par téléphone", [
        p("Appelez le cabinet au {phone} pour fixer un rendez-vous et connaître les horaires de consultation. Précisez le motif général de votre venue (suivi de grossesse, consultation gynécologique, échographie…) afin d'organiser le rendez-vous."),
      ]),
      s("preparer", "Avant d'appeler", [
        ul([
          "Notez le motif de votre venue, sans entrer dans les détails médicaux ;",
          "indiquez s'il s'agit d'une première consultation ou d'un suivi ;",
          "préparez vos disponibilités ;",
          "tenez à disposition la date de vos dernières règles si vous attendez un bébé ou si vous consultez pour un trouble du cycle.",
        ]),
        p("Pour savoir à quoi vous attendre : [[gyn-consultation|consultation gynécologique]] ou [[preg-consultation|consultation de grossesse]]."),
      ]),
      s("urgence", "En cas d'urgence", [
        warn("Un rendez-vous n'est pas adapté à une situation urgente. En cas de saignement abondant, douleur intense, perte de liquide, diminution des mouvements du bébé ou malaise, appelez le SAMU (190) ou rendez-vous aux urgences.", "Urgence médicale"),
      ]),
    ],
    faq: [
      faq("Peut-on prendre rendez-vous en ligne ?", "Pour le moment, la prise de rendez-vous se fait par téléphone avec le cabinet."),
      faq("Faut-il préciser le motif du rendez-vous ?", "Un motif général suffit (suivi de grossesse, contraception, douleurs…). Les détails médicaux se discutent pendant la consultation."),
    ],
    lastUpdated: D,
  },

  faq: {
    label: "Questions fréquentes",
    metaTitle: "Questions fréquentes : rendez-vous, consultation, urgences",
    metaDescription: "Questions pratiques fréquentes : prendre rendez-vous, préparer une consultation, confidentialité, urgences et utilisation des informations du site.",
    h1: "Questions fréquentes",
    summary: "Réponses aux questions pratiques : rendez-vous, préparation, urgences.",
    intro: "Voici les réponses aux questions pratiques les plus courantes. Pour les questions médicales sur un sujet précis, consultez les rubriques d'information ou parlez-en à votre médecin.",
    sections: [
      s("pratique", "Rendez-vous et consultation", [
        p("Les réponses ci-dessous sont reprises de façon synthétique ; les pages [[appointment|prendre rendez-vous]] et [[cabinet|le cabinet]] détaillent chaque point."),
      ]),
    ],
    faq: [
      faq("Comment prendre rendez-vous ?", "Par téléphone au {phone}. Voir [[appointment|prendre rendez-vous]]."),
      faq("Que dois-je apporter à ma première consultation ?", "Votre pièce d'identité, vos anciens examens (analyses, échographies), la liste de vos médicaments et, si vous attendez un bébé, votre carnet de grossesse s'il existe."),
      faq("Faut-il être à jeun pour une consultation ou une échographie ?", "En général non. Pour certains examens, des consignes spécifiques peuvent exister : demandez-les lors de la prise de rendez-vous."),
      faq("Mes informations sont-elles confidentielles ?", "Oui. Les informations médicales sont couvertes par le secret médical. Voir la [[privacy|politique de confidentialité]] pour les données collectées via ce site."),
      faq("Les informations du site peuvent-elles remplacer un avis médical ?", "Non. Elles ont une visée éducative. Voir la [[editorial-policy|politique éditoriale]]."),
      faq("Que faire en cas d'urgence ?", "Appelez le SAMU (190) ou rendez-vous aux urgences les plus proches. Ne passez pas par un formulaire en ligne."),
      faq("Où trouver des informations sur la grossesse ?", "Dans la rubrique [[hub-pregnancy|grossesse et obstétrique]]."),
    ],
    lastUpdated: D,
  },

  "info-hub": {
    label: "Informations médicales",
    navLabel: "Informations",
    metaTitle: "Informations médicales : gynécologie, grossesse, fertilité",
    metaDescription: "Centre d'information médicale : gynécologie, grossesse, échographie, fertilité et pathologies gynécologiques. Contenus éducatifs et structurés.",
    h1: "Informations médicales en gynécologie-obstétrique",
    summary: "Toutes les rubriques d'information : gynécologie, grossesse, échographie, fertilité, pathologies.",
    intro: "Cette bibliothèque rassemble des informations éducatives sur la santé de la femme. Chaque page suit une structure claire, indique sa date de mise à jour et renvoie vers des organismes de référence pour aller plus loin.",
    sections: [
      s("lire", "Comment utiliser ces informations", [
        ul([
          "Les contenus sont **généraux** : ils ne tiennent pas compte de votre situation personnelle.",
          "Ils **ne remplacent pas** une consultation médicale.",
          "En cas de symptôme préoccupant, consultez ; en cas d'urgence, appelez le SAMU (190).",
        ]),
        p("Notre démarche est décrite dans la [[editorial-policy|politique éditoriale]]."),
      ]),
    ],
    faq: [
      faq("Qui rédige les contenus ?", "Les contenus sont rédigés à titre informatif. Les modalités de relecture médicale sont décrites dans la [[editorial-policy|politique éditoriale]]."),
    ],
    lastUpdated: D,
  },

  "local-ain-zaghouan": {
    label: "Gynécologue à Ain Zaghouan Nord",
    metaTitle: "Gynécologue à Ain Zaghouan Nord, Tunis – Dr Amine Kammoun",
    metaDescription: "Gynécologue-obstétricien à Ain Zaghouan Nord, Tunis : Dr Amine Kammoun. Accès depuis l'Aouina, La Soukra, Lac 2, Cité El Wahat. Téléphone +216 98 272 858.",
    h1: "Gynécologue-obstétricien à Ain Zaghouan Nord, Tunis",
    summary: "Cabinet de gynécologie-obstétrique à Ain Zaghouan Nord : accès, domaines d'information et contact.",
    intro: "Le Dr Amine Kammoun, gynécologue-obstétricien, exerce à Ain Zaghouan Nord, à Tunis. Cette page présente le cabinet, les quartiers voisins et les informations utiles pour consulter facilement, que vous veniez d'Ain Zaghouan, de l'Aouina, de La Soukra, du Lac 2 ou d'ailleurs dans le Grand Tunis.",
    sections: [
      s("cabinet", "Le cabinet à Ain Zaghouan Nord", [
        p("Le cabinet de gynécologie-obstétrique du Dr Amine Kammoun est situé à Ain Zaghouan Nord, à Tunis. Pour connaître les horaires et prendre rendez-vous, le plus simple est d'appeler le {phone}. Plus d'informations sur [[cabinet|le cabinet]] et sur [[doctor|le docteur]]."),
      ]),
      s("motifs", "Pour quels motifs consulter ?", [
        p("Un gynécologue-obstétricien accompagne les femmes à toutes les étapes de la vie. Les rubriques d'information du site vous aident à vous repérer :"),
        ul([
          "[[hub-gyneco|gynécologie]] : consultation, prévention, contraception, cycle, ménopause ;",
          "[[hub-pregnancy|grossesse et obstétrique]] : suivi de grossesse, accouchement, post-partum ;",
          "[[hub-echo|échographie]] : informations sur les examens d'imagerie ;",
          "[[hub-fertility|fertilité]] : bilan, ovulation, PMA ;",
          "[[hub-conditions|pathologies gynécologiques]] : endométriose, SOPK, kyste, fibrome.",
        ]),
      ]),
      s("quartiers", "Les quartiers et zones voisins", [
        p("Les patientes viennent d'Ain Zaghouan, de [[local-aouina|l'Aouina]], de la Cité El Wahat, de La Soukra, du Lac 2, des Berges du Lac et plus largement du Grand Tunis. Chaque secteur dispose d'un lien d'itinéraire Google Maps sur la page [[areas|zones desservies]]."),
      ]),
      s("acces", "Venir au cabinet", [
        p("Les temps de trajet varient selon l'heure et la circulation : prévoyez une marge. Ouvrez l'itinéraire dans Google Maps depuis votre position grâce au bouton « Itinéraire » ci-dessous ou depuis la page [[contact|contact]]."),
      ]),
      s("rdv", "Prendre rendez-vous", [
        p("Appelez le cabinet pour fixer un rendez-vous. Voir [[appointment|prendre rendez-vous]] pour savoir comment préparer votre appel."),
      ]),
    ],
    faq: [
      faq("Où se situe le cabinet du Dr Amine Kammoun ?", "À Ain Zaghouan Nord, Tunis. Un lien d'itinéraire Google Maps est disponible sur cette page et sur la page [[contact|contact]]."),
      faq("Consulte-t-on au cabinet depuis l'Aouina, La Soukra ou le Lac 2 ?", "Les patientes de ces quartiers peuvent consulter au cabinet d'Ain Zaghouan Nord. Pour l'Aouina, voir la page [[local-aouina|gynécologue près de l'Aouina]] ; pour les autres quartiers, calculez votre trajet depuis la page [[areas|zones desservies]]."),
      faq("Comment prendre rendez-vous ?", "Par téléphone au {phone}. Voir [[appointment|prendre rendez-vous]]."),
      faq("Les informations médicales du site sont-elles personnalisées ?", "Non, elles sont générales. Voir [[info-hub|informations médicales]]."),
    ],
    lastUpdated: D,
  },

  "editorial-policy": {
    label: "Politique éditoriale",
    metaTitle: "Politique éditoriale : information médicale responsable",
    metaDescription: "Principes éditoriaux : information médicale éducative, sources de référence, relecture médicale, mises à jour, sans publicité ni promesse de résultat.",
    h1: "Politique éditoriale",
    summary: "Nos principes pour une information médicale responsable.",
    intro: "Ce site propose des informations de santé. Nous nous engageons à les présenter de manière claire, prudente et respectueuse de la déontologie médicale.",
    sections: [
      s("objectif", "Objectif des contenus", [
        p("Les pages ont une visée **éducative** : aider les patientes à comprendre un examen, un symptôme ou une étape de suivi. Elles ne constituent ni un diagnostic, ni une prescription, ni un avis médical personnalisé."),
      ]),
      s("principes", "Nos principes", [
        ul([
          "pas de promesse de résultat ni de comparaison avec d'autres praticiens ;",
          "pas de publicité pour des produits ou des traitements ;",
          "un langage factuel et mesuré ;",
          "distinction claire entre information générale et services effectivement proposés par le cabinet ;",
          "mention des signes d'alerte et des situations d'urgence.",
        ]),
      ]),
      s("sources", "Sources et références", [
        p("Chaque page renvoie vers des organismes de référence (OMS, sociétés savantes, autorités de santé) pour permettre d'approfondir. Ces références sont revues avant la publication définitive."),
      ]),
      s("revue", "Relecture médicale et mises à jour", [
        p("Chaque page indique sa date de dernière mise à jour. Lorsqu'une relecture médicale a été réalisée, le nom du relecteur et la date de relecture sont affichés sur la page. Les contenus sont mis à jour lorsque les recommandations évoluent."),
      ]),
      s("corrections", "Signaler une erreur", [
        p("Si vous constatez une erreur ou une information obsolète, merci de nous le signaler via la page [[contact|contact]]. Voir aussi les [[legal-notice|mentions légales]] et la présentation du [[doctor|docteur]]."),
      ]),
    ],
    lastUpdated: D,
  },
};
