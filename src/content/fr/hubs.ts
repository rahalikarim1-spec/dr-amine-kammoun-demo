import { PageContent, p, ul, h3, note, s, faq } from "@/lib/types";

const D = "2026-10-06";

export const hubs: Record<string, PageContent> = {
  "hub-gyneco": {
    label: "Gynécologie",
    metaTitle: "Gynécologie : consultation, dépistage, cycle, contraception",
    metaDescription: "Informations sur la gynécologie : consultation, suivi de routine, dépistage, frottis, troubles du cycle, contraception, ménopause et infections gynécologiques.",
    h1: "Gynécologie : les informations essentielles",
    summary: "Consultation, prévention, cycle menstruel, contraception, ménopause : repères de santé féminine.",
    intro: "La gynécologie s'intéresse à la santé de l'appareil génital féminin et au suivi de la femme à tous les âges de la vie. Cette rubrique rassemble des informations générales, claires et sans jargon, pour comprendre les examens, les symptômes courants et les moments où consulter.",
    sections: [
      s("couvre", "Ce que couvre la gynécologie", [
        p("Prévention et dépistage, suivi du cycle, contraception, infections, douleurs pelviennes, ménopause, ainsi que les affections comme l'[[cond-endometriosis|endométriose]] ou le [[cond-fibroid|fibrome utérin]] présentées dans la rubrique [[hub-conditions|pathologies gynécologiques]]."),
      ]),
      s("parcours", "Par où commencer ?", [
        ul([
          "Vous souhaitez comprendre un rendez-vous : [[gyn-consultation|consultation gynécologique]] et [[gyn-routine|consultation de routine]].",
          "Vous avez un symptôme : [[gyn-cycle|troubles du cycle]], [[gyn-pelvic-pain|douleurs pelviennes]], [[gyn-infections|infections]].",
          "Vous cherchez une contraception : [[gyn-contraception|contraception]].",
          "Vous approchez de la cinquantaine : [[gyn-menopause|ménopause]].",
        ]),
      ]),
      s("pregnancy", "Et si vous attendez un bébé ?", [
        p("Rendez-vous dans la rubrique [[hub-pregnancy|grossesse et obstétrique]] ; pour l'imagerie, consultez [[hub-echo|échographie]]."),
      ]),
    ],
    faq: [
      faq("Quand consulter un gynécologue pour la première fois ?", "Il n'y a pas d'âge strict : en cas de symptôme, de question sur le cycle ou la contraception, ou pour un suivi de prévention. Voir [[gyn-consultation|consultation gynécologique]]."),
      faq("Les informations de ce site remplacent-elles une consultation ?", "Non. Elles sont générales et éducatives. Seul un médecin peut évaluer votre situation personnelle."),
    ],
    lastUpdated: D,
  },

  "hub-pregnancy": {
    label: "Grossesse et obstétrique",
    navLabel: "Grossesse",
    metaTitle: "Grossesse et obstétrique : suivi, trimestres, accouchement",
    metaDescription: "Tout comprendre du suivi de grossesse : consultation, trimestres, grossesse à risque, préparation à l'accouchement et suivi après la naissance.",
    h1: "Grossesse et obstétrique : suivre sa grossesse sereinement",
    summary: "Suivi de grossesse, trimestres, accouchement et période post-natale.",
    intro: "L'obstétrique accompagne la femme enceinte pendant la grossesse, l'accouchement et les semaines qui suivent. Cette rubrique présente, étape par étape, les consultations, les examens et les repères utiles pour vivre cette période en confiance.",
    sections: [
      s("parcours", "Le parcours de grossesse en un coup d'œil", [
        ul([
          "[[preg-consultation|Première consultation]] puis [[preg-follow-up|suivi de grossesse]] ;",
          "les trois trimestres : [[preg-t1|premier]], [[preg-t2|deuxième]] et [[preg-t3|troisième]] ;",
          "les échographies : [[echo-obstetric|échographie obstétricale]] ;",
          "[[preg-high-risk|grossesse à risque]] : surveillance adaptée ;",
          "[[preg-birth-prep|préparation à l'accouchement]] puis [[preg-postpartum|suivi après l'accouchement]].",
        ]),
      ]),
      s("avant", "Avant la grossesse", [
        p("Un projet de grossesse peut être préparé en consultation (vaccins, acide folique, mode de vie). En cas de difficulté, voir la rubrique [[hub-fertility|fertilité]]."),
      ]),
      s("urgence", "Quand ne pas attendre", [
        p("Saignements, douleurs intenses, perte de liquide, fièvre ou diminution des mouvements du bébé justifient une consultation en urgence (SAMU : 190). Les signes d'alerte sont détaillés dans chaque page de suivi."),
      ]),
    ],
    faq: [
      faq("Combien de consultations prévoir pendant la grossesse ?", "En l'absence de complication, une consultation mensuelle est fréquente. Le calendrier est précisé dans [[preg-follow-up|suivi de grossesse]]."),
      faq("Quelles échographies sont recommandées ?", "Trois échographies de dépistage sont habituellement proposées : voir [[echo-obstetric|échographie obstétricale]]."),
    ],
    lastUpdated: D,
  },

  "hub-echo": {
    label: "Échographie",
    metaTitle: "Échographie gynécologique et obstétricale : informations",
    metaDescription: "Échographie gynécologique, échographie de grossesse, échographie 3D/4D : à quoi servent-elles, comment se déroulent-elles et quelles sont leurs limites.",
    h1: "Échographie gynécologique et obstétricale : informations",
    summary: "Échographie pelvienne, échographie de grossesse et 3D/4D : indications et déroulement.",
    intro: "L'échographie utilise des ultrasons pour observer les organes du pelvis et le bébé pendant la grossesse. C'est un examen indolore, sans rayons X, largement utilisé en gynécologie et en obstétrique. Cette rubrique présente les principaux examens à titre d'information générale.",
    sections: [
      s("types", "Les principaux examens", [
        ul([
          "[[echo-gyn|Échographie gynécologique]] : utérus, ovaires, douleurs pelviennes, troubles du cycle ;",
          "[[echo-obstetric|Échographie obstétricale]] : les trois échographies de la grossesse ;",
          "[[echo-3d4d|Échographie 3D et 4D]] : images en relief, indications et limites.",
        ]),
        note("Cette rubrique est informative. Les examens réalisés dans un cabinet donné sont précisés par le cabinet lors de la prise de rendez-vous."),
      ]),
      s("lien", "Dans quels parcours ?", [
        p("L'échographie intervient dans le [[hub-pregnancy|suivi de grossesse]], dans l'exploration des [[hub-conditions|pathologies gynécologiques]] et dans le [[fert-workup|bilan de fertilité]]."),
      ]),
    ],
    faq: [
      faq("L'échographie est-elle sans danger ?", "Utilisée pour des indications médicales, elle est considérée comme sûre et n'utilise pas de rayons X."),
      faq("Faut-il une ordonnance ?", "Cela dépend de l'organisation des soins : demandez conseil lors de la prise de rendez-vous."),
    ],
    lastUpdated: D,
  },

  "hub-fertility": {
    label: "Fertilité",
    metaTitle: "Fertilité : infertilité, bilan, ovulation, PMA – informations",
    metaDescription: "Informations sur la fertilité féminine : infertilité, bilan de fertilité, troubles de l'ovulation et principes généraux de la PMA.",
    h1: "Fertilité : comprendre les difficultés à concevoir",
    summary: "Infertilité, bilan, ovulation et PMA : informations générales.",
    intro: "Quand une grossesse tarde à venir, il est naturel de se poser des questions. Cette rubrique présente, de manière factuelle et prudente, les causes possibles, les examens habituels et les principes de la procréation médicalement assistée. Elle ne promet aucun résultat.",
    sections: [
      s("pages", "Les sujets abordés", [
        ul([
          "[[fert-female-infertility|infertilité féminine]] : définition et causes ;",
          "[[fert-workup|bilan de fertilité]] : examens du couple ;",
          "[[fert-ovulation|troubles de l'ovulation]] ;",
          "[[fert-pma|PMA – information générale]].",
        ]),
      ]),
      s("liens", "Pathologies souvent liées", [
        p("L'[[cond-endometriosis|endométriose]] et le [[cond-pcos|syndrome des ovaires polykystiques]] sont deux causes fréquentes à connaître."),
      ]),
    ],
    faq: [
      faq("Quand consulter pour un problème de fertilité ?", "Après 12 mois d'essais sans contraception, ou plus tôt après 35 ans ou en présence d'un symptôme."),
    ],
    lastUpdated: D,
  },

  "hub-conditions": {
    label: "Pathologies gynécologiques",
    navLabel: "Pathologies",
    metaTitle: "Pathologies gynécologiques : endométriose, SOPK, kyste, fibrome",
    metaDescription: "Pathologies gynécologiques courantes : endométriose, syndrome des ovaires polykystiques, kyste ovarien, fibrome, douleurs pelviennes, troubles du cycle et ménopause.",
    h1: "Pathologies gynécologiques : comprendre les affections courantes",
    summary: "Endométriose, SOPK, kyste ovarien, fibrome : définitions, symptômes et suivi.",
    intro: "Cette rubrique présente les affections gynécologiques les plus fréquentes, selon une même structure : définition, symptômes, causes possibles, quand consulter, diagnostic et suivi. Les informations sont générales et ne remplacent pas un avis médical.",
    sections: [
      s("principales", "Les principales affections", [
        p("Chaque page détaille une pathologie. Les sujets proches, comme les [[gyn-pelvic-pain|douleurs pelviennes]], les [[gyn-cycle|troubles du cycle menstruel]] et la [[gyn-menopause|ménopause]], sont traités dans la rubrique [[hub-gyneco|gynécologie]]."),
      ]),
      s("diagnostic", "Un diagnostic repose sur un examen", [
        p("Les symptômes de plusieurs affections se ressemblent. Seuls l'examen clinique et, selon les cas, une [[echo-gyn|échographie]] permettent d'orienter le diagnostic."),
      ]),
    ],
    faq: [
      faq("Comment savoir si mes symptômes sont inquiétants ?", "Une douleur intense, des saignements anormaux ou des symptômes persistants justifient une consultation. Voir [[gyn-consultation|consultation gynécologique]]."),
    ],
    lastUpdated: D,
  },

  areas: {
    label: "Zones desservies",
    metaTitle: "Zones desservies : Ain Zaghouan, Aouina, Soukra, Lac 2",
    metaDescription: "Accès au cabinet depuis Ain Zaghouan, l'Aouina, La Soukra, Cité El Wahat, Lac 2, les Berges du Lac et le Grand Tunis : itinéraires et informations pratiques.",
    h1: "Zones desservies : venir au cabinet depuis les quartiers voisins",
    summary: "Itinéraires vers le cabinet depuis Ain Zaghouan, l'Aouina, La Soukra, Lac 2 et le Grand Tunis.",
    intro: "Le cabinet du Dr Amine Kammoun est situé à Ain Zaghouan Nord, à Tunis. Les patientes viennent de plusieurs secteurs du nord de l'agglomération. Pour chaque zone, vous trouvez ci-dessous un rappel pratique et un lien d'itinéraire Google Maps calculé depuis votre secteur.",
    sections: [
      s("ain-zaghouan", "Ain Zaghouan et Ain Zaghouan Nord", [
        p("Le cabinet est implanté à Ain Zaghouan Nord. Les informations générales sur le cabinet figurent sur la page [[local-ain-zaghouan|gynécologue à Ain Zaghouan Nord]] et sur la page [[cabinet|le cabinet]]."),
      ]),
      s("aouina", "L'Aouina", [
        p("L'Aouina est un secteur voisin du nord de Tunis, proche de l'aéroport Tunis-Carthage. Si vous cherchez un cabinet de gynécologie proche de l'Aouina, utilisez l'itinéraire ci-dessous pour estimer le trajet selon l'heure de la journée."),
      ]),
      s("cite-wahat", "Cité El Wahat", [
        p("Pour les habitantes de la Cité El Wahat, l'itinéraire se calcule directement depuis votre adresse avec le lien ci-dessous."),
      ]),
      s("soukra", "La Soukra", [
        p("La Soukra se situe au nord de Tunis. Si vous recherchez un gynécologue près de La Soukra, l'itinéraire ci-dessous vous donne le trajet et la durée selon la circulation."),
      ]),
      s("lac", "Lac 2 et les Berges du Lac", [
        p("Lac 2 et les Berges du Lac forment un secteur résidentiel et d'affaires de Tunis. Pour un cabinet gynécologique accessible depuis le Lac 2, calculez votre trajet avec le lien ci-dessous, en tenant compte de l'heure de votre rendez-vous."),
      ]),
      s("grand-tunis", "Grand Tunis", [
        p("Les patientes viennent aussi d'autres quartiers de Tunis et du Grand Tunis. Les temps de trajet varient fortement selon la circulation ; prévoyez une marge pour arriver sereinement à votre rendez-vous."),
      ]),
    ],
    faq: [
      faq("Où se trouve exactement le cabinet ?", "Le cabinet est situé à Ain Zaghouan Nord, Tunis. Vous pouvez ouvrir l'itinéraire dans Google Maps depuis cette page ou la page [[contact|contact]]."),
      faq("Peut-on prendre rendez-vous depuis un autre quartier ?", "Oui, quelle que soit votre zone, appelez le cabinet ou utilisez la page [[appointment|rendez-vous]]."),
    ],
    lastUpdated: D,
  },
};
