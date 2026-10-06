import { PageContent, p, ul, ol, h3, note, warn, s, faq } from "@/lib/types";

const D = "2026-10-06";

export const ultrasound: Record<string, PageContent> = {
  "echo-gyn": {
    label: "Échographie gynécologique",
    metaTitle: "Échographie gynécologique (pelvienne) : indications et déroulement",
    metaDescription: "Échographie gynécologique : à quoi sert-elle, voie sus-pubienne ou endovaginale, préparation, déroulement et ce qu'elle permet de dépister.",
    h1: "Échographie gynécologique (pelvienne) : à quoi sert-elle ?",
    summary: "Indications, voies d'abord, préparation et déroulement de l'échographie pelvienne.",
    intro: "L'échographie gynécologique, ou échographie pelvienne, utilise des ultrasons pour visualiser l'utérus, les ovaires et les structures voisines. C'est un examen indolore, sans rayons X, qui complète l'examen clinique. Cette page est une information générale sur cet examen.",
    sections: [
      s("indications", "Dans quels cas est-elle utile ?", [
        ul([
          "[[gyn-pelvic-pain|douleurs pelviennes]] ;",
          "règles abondantes, irrégulières ou saignements anormaux, voir [[gyn-cycle|troubles du cycle]] ;",
          "suspicion de [[cond-ovarian-cyst|kyste ovarien]] ou de [[cond-fibroid|fibrome utérin]] ;",
          "recherche d'une cause d'[[fert-workup|infertilité]] ou surveillance de l'ovulation ;",
          "contrôle d'un stérilet, suspicion d'une anomalie de l'utérus ;",
          "suivi après la ménopause en cas de saignement.",
        ]),
      ]),
      s("voies", "Les deux voies d'abord", [
        h3("Voie sus-pubienne (abdominale)"),
        p("La sonde est posée sur le bas-ventre. Une vessie pleine facilite la visualisation : le médecin vous indique si une préparation est nécessaire."),
        h3("Voie endovaginale"),
        p("Une sonde fine, protégée par une gaine, est introduite dans le vagin. Elle offre une image plus précise de l'utérus et des ovaires. Elle est généralement bien tolérée et peut être adaptée à votre confort. Elle n'est pas toujours appropriée selon la situation (par exemple chez les jeunes filles sans rapport sexuel) : le médecin choisit la voie la plus adaptée."),
      ]),
      s("deroulement", "Déroulement et préparation", [
        ol([
          "Installation sur la table d'examen, après un entretien rapide sur votre motif et vos antécédents.",
          "Examen d'une durée de quelques minutes, en direct sur écran.",
          "Explication des constatations, puis compte rendu et éventuelles recommandations.",
        ]),
        p("Apportez vos anciens examens. Le moment du cycle peut compter : le médecin vous indique le moment idéal selon l'indication."),
      ]),
      s("limites", "Ce que l'échographie ne dit pas toujours", [
        p("C'est un examen très utile mais pas toujours suffisant : certaines lésions nécessitent une IRM, un prélèvement ou une cœlioscopie. Un résultat doit toujours être interprété avec l'examen clinique. Pour les examens liés à la grossesse, voir [[echo-obstetric|échographie obstétricale]]."),
      ]),
    ],
    faq: [
      faq("L'échographie endovaginale est-elle douloureuse ?", "Elle provoque généralement peu de gêne. Dites-le au médecin si vous ressentez une douleur."),
      faq("Faut-il avoir la vessie pleine ?", "Pour la voie sus-pubienne, souvent oui ; pour la voie endovaginale, non. Suivez les consignes données lors de la prise de rendez-vous."),
      faq("Peut-on la faire pendant les règles ?", "Oui dans la plupart des cas, mais le moment idéal dépend de la question posée. Demandez conseil."),
      faq("Les ultrasons sont-ils sans danger ?", "L'échographie n'utilise pas de rayonnements ionisants et est considérée comme sûre lorsqu'elle est réalisée pour des indications médicales."),
    ],
    lastUpdated: D,
  },

  "echo-obstetric": {
    label: "Échographie obstétricale",
    metaTitle: "Échographie de grossesse : les 3 échographies expliquées",
    metaDescription: "Échographie de grossesse (obstétricale) : calendrier des trois échographies, ce qu'elles examinent, déroulement, préparation et questions fréquentes.",
    h1: "Échographie de grossesse : les trois échographies du suivi",
    summary: "Les trois échographies de la grossesse : objectifs, périodes, déroulement et limites.",
    intro: "L'échographie obstétricale (ou échographie de grossesse) permet de visualiser le bébé, le placenta et le liquide amniotique. Elle fait partie du [[preg-follow-up|suivi de grossesse]]. Trois échographies de dépistage sont habituellement proposées, à des périodes précises de la grossesse.",
    sections: [
      s("calendrier", "Le calendrier habituel", [
        p("Les termes ci-dessous sont des repères : ils peuvent varier selon les recommandations suivies et la situation de chaque grossesse. Votre médecin indique les dates adaptées."),
        h3("Échographie du 1er trimestre : environ 11 à 14 SA"),
        p("Elle permet de dater la grossesse, de vérifier le nombre d'embryons, la vitalité, et de mesurer la clarté nucale dans le cadre du dépistage. Voir [[preg-t1|premier trimestre]]."),
        h3("Échographie du 2e trimestre : environ 20 à 25 SA"),
        p("Dite « morphologique », elle étudie en détail la morphologie du fœtus (tête, cerveau, cœur, colonne, organes, membres), le placenta et le liquide amniotique. Voir [[preg-t2|deuxième trimestre]]."),
        h3("Échographie du 3e trimestre : environ 30 à 35 SA"),
        p("Elle évalue la croissance, la position du bébé, le placenta et le liquide amniotique. Voir [[preg-t3|troisième trimestre]]."),
      ]),
      s("deroulement", "Comment se déroule l'examen ?", [
        ul([
          "l'examen se fait en général par voie abdominale ; au début de la grossesse, la voie endovaginale peut être utilisée ;",
          "il dure en moyenne quelques dizaines de minutes ;",
          "il est indolore et sans risque connu lorsqu'il est réalisé pour des indications médicales ;",
          "les résultats vous sont expliqués et un compte rendu est remis.",
        ]),
      ]),
      s("limites", "Intérêts et limites", [
        p("L'échographie permet de repérer certaines anomalies, mais elle ne peut pas tout détecter : la qualité de l'examen dépend de la position du bébé, de l'âge gestationnel et de la morphologie maternelle. Un examen normal ne garantit pas l'absence de tout problème, et une anomalie suspectée peut nécessiter un avis spécialisé et des examens complémentaires."),
        note("Pour les images en relief, voir [[echo-3d4d|échographie 3D et 4D]], qui ne remplace pas l'échographie habituelle."),
      ]),
      s("autres", "Échographies supplémentaires", [
        p("Dans certaines situations ([[preg-high-risk|grossesse à risque]], saignements, doute sur la croissance), le médecin peut prescrire des échographies supplémentaires. Elles sont décidées selon l'indication médicale."),
      ]),
    ],
    faq: [
      faq("Faut-il être à jeun ou avoir la vessie pleine ?", "Les consignes dépendent du terme : au premier trimestre, une vessie pleine peut aider. Suivez les indications données lors de la prise de rendez-vous."),
      faq("Peut-on connaître le sexe du bébé ?", "Souvent, lorsque la position le permet, mais ce n'est pas l'objectif principal de l'examen."),
      faq("Combien d'échographies faut-il faire ?", "Trois échographies de dépistage sont habituellement recommandées en l'absence de complication."),
      faq("Que faire si le bébé est mal placé pendant l'examen ?", "Le médecin peut vous demander de changer de position, d'attendre un peu ou de revenir plus tard."),
    ],
    lastUpdated: D,
  },

  "echo-3d4d": {
    label: "Échographie 3D / 4D",
    metaTitle: "Échographie 3D et 4D : intérêt, limites et idées reçues",
    metaDescription: "Échographie 3D et 4D de grossesse : différence avec la 2D, indications médicales, limites, moment de réalisation et précautions à connaître.",
    h1: "Échographie 3D et 4D : intérêt, limites et idées reçues",
    summary: "Ce que sont les échographies 3D et 4D, leurs indications et leurs limites.",
    intro: "Les échographies 3D et 4D proposent des images en relief (3D) ou animées en temps réel (4D) du bébé. Elles complètent parfois l'[[echo-obstetric|échographie obstétricale]] standard, mais ne la remplacent pas. Cette page est un contenu d'information et n'indique pas que ces techniques sont réalisées dans un cabinet donné.",
    sections: [
      s("difference", "2D, 3D, 4D : quelle différence ?", [
        ul([
          "**2D** : image en coupe, référence pour le dépistage et le diagnostic ;",
          "**3D** : reconstruction en volume de la surface du visage, des membres ou d'une anomalie ;",
          "**4D** : 3D animée en temps réel, avec la dimension du mouvement.",
        ]),
      ]),
      s("interet", "À quoi servent-elles ?", [
        p("Dans un contexte médical, la 3D peut aider à préciser certaines anomalies de surface (par exemple, fente labiale) ou de l'utérus en [[echo-gyn|gynécologie]], à la demande du médecin. Elle apporte aussi une dimension de partage avec les parents, mais l'intérêt affectif ne doit pas faire oublier que le rôle premier d'une échographie est médical."),
      ]),
      s("limites", "Limites et précautions", [
        ul([
          "la qualité des images dépend de la position du bébé, de la quantité de liquide amniotique, de la paroi abdominale et du terme ;",
          "elle ne remplace pas les trois échographies de dépistage ;",
          "les examens doivent respecter le principe de l'exposition aux ultrasons la plus faible possible : on évite les examens inutilement répétés ou prolongés, notamment à visée « souvenir » ;",
          "elle ne doit être réalisée que par un professionnel formé.",
        ]),
      ]),
      s("moment", "Quand est-elle envisagée ?", [
        p("En pratique, les images de surface sont généralement exploitables entre la fin du [[preg-t2|deuxième trimestre]] et le début du troisième trimestre (environ 24 à 32 SA), selon la position du bébé. L'opportunité d'un examen 3D/4D se discute avec le médecin qui assure le [[preg-follow-up|suivi de grossesse]]."),
      ]),
    ],
    faq: [
      faq("L'échographie 3D/4D est-elle dangereuse ?", "Utilisée de façon raisonnable et par un professionnel formé, elle est considérée comme sûre, mais il faut éviter les examens multiples ou prolongés sans raison médicale."),
      faq("Remplace-t-elle l'échographie morphologique ?", "Non. L'échographie 2D reste l'examen de référence pour le dépistage."),
      faq("Quand est-elle la plus lisible ?", "Généralement entre 24 et 32 semaines d'aménorrhée, selon les conditions de l'examen."),
    ],
    lastUpdated: D,
  },
};
