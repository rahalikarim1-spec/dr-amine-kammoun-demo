import { PageContent, p, ul, ol, h3, note, warn, s, faq } from "@/lib/types";

const D = "2026-10-06";

export const fertility: Record<string, PageContent> = {
  "fert-female-infertility": {
    label: "Infertilité féminine",
    metaTitle: "Infertilité féminine : causes, bilan et démarche",
    metaDescription: "Infertilité féminine : définition, causes possibles (ovulation, trompes, utérus, âge), quand consulter et grandes étapes de la démarche médicale.",
    h1: "Infertilité féminine : causes possibles et démarche médicale",
    summary: "Causes possibles, quand consulter et grandes étapes de la prise en charge.",
    intro: "On parle d'infertilité lorsqu'un couple n'obtient pas de grossesse après une période d'essais sans contraception. Elle concerne les deux membres du couple : un bilan est donc souvent proposé aux deux partenaires. Cette page présente les causes féminines possibles à titre d'information.",
    sections: [
      s("definition", "Quand parler d'infertilité ?", [
        p("On évoque habituellement une infertilité après 12 mois de rapports réguliers sans contraception et sans grossesse. Une consultation plus précoce est conseillée après 35 ans, en cas de cycles irréguliers, de douleurs importantes, d'antécédents de chirurgie ou d'infection pelvienne, ou si le couple a une inquiétude particulière."),
      ]),
      s("causes", "Causes féminines possibles", [
        ul([
          "**Troubles de l'ovulation**, notamment le [[cond-pcos|syndrome des ovaires polykystiques]] : voir [[fert-ovulation|troubles de l'ovulation]] ;",
          "**Atteinte des trompes**, souvent à la suite d'une infection ;",
          "**[[cond-endometriosis|Endométriose]]** ;",
          "**Anomalies de l'utérus** : fibromes, polypes, malformations, adhérences ;",
          "**Diminution de la réserve ovarienne**, liée à l'âge ou à d'autres causes ;",
          "**Causes inexpliquées**, une fois le bilan complet réalisé.",
        ]),
        p("Un facteur masculin intervient dans une part importante des cas : c'est pourquoi l'évaluation concerne le couple."),
      ]),
      s("demarche", "Les étapes de la démarche", [
        ol([
          "Consultation : histoire du couple, du cycle, antécédents, examen.",
          "[[fert-workup|Bilan de fertilité]] : analyses hormonales, [[echo-gyn|échographie pelvienne]], exploration des trompes et de l'utérus selon le cas, spermogramme chez le partenaire.",
          "Prise en charge adaptée à la cause : conseils, traitement de la cause, stimulation de l'ovulation, insémination ou techniques de [[fert-pma|procréation médicalement assistée]].",
        ]),
      ]),
      s("facteurs", "Facteurs qui influencent la fertilité", [
        ul([
          "l'âge de la femme : la fertilité diminue progressivement, plus nettement après 35 ans ;",
          "le poids (insuffisance ou excès) ;",
          "le tabac, l'alcool et certains toxiques ;",
          "certaines maladies chroniques ou traitements.",
        ]),
        note("Un conseil individualisé est indispensable : chaque couple est différent."),
      ]),
    ],
    faq: [
      faq("Combien de temps essayer avant de consulter ?", "Après 12 mois d'essais, ou plus tôt si la femme a plus de 35 ans ou si un problème est suspecté."),
      faq("L'infertilité est-elle toujours d'origine féminine ?", "Non. Les causes peuvent être féminines, masculines ou mixtes, ou rester inexpliquées."),
      faq("Peut-on tomber enceinte avec des cycles irréguliers ?", "C'est possible, mais l'ovulation peut être moins fréquente. Un bilan permet d'en comprendre la cause."),
    ],
    lastUpdated: D,
  },

  "fert-workup": {
    label: "Bilan de fertilité",
    metaTitle: "Bilan de fertilité féminin : examens et déroulement",
    metaDescription: "Bilan de fertilité : analyses hormonales, échographie pelvienne, exploration des trompes et de l'utérus, spermogramme. Déroulement et calendrier.",
    h1: "Bilan de fertilité : quels examens et dans quel ordre ?",
    summary: "Les examens habituels d'un bilan de fertilité féminin et du couple.",
    intro: "Le bilan de fertilité cherche à comprendre pourquoi une grossesse tarde à venir. Il comprend des examens chez la femme et un spermogramme chez l'homme. Les examens proposés sont choisis en fonction de chaque situation.",
    sections: [
      s("consult", "La consultation initiale", [
        p("Elle précise l'ancienneté du projet de grossesse, la régularité des cycles, les antécédents (infections, interventions, grossesses antérieures), les traitements et le mode de vie. Un examen clinique est effectué. Voir aussi [[fert-female-infertility|infertilité féminine]]."),
      ]),
      s("exams", "Les examens habituels chez la femme", [
        ul([
          "**Dosages hormonaux** : pour évaluer l'ovulation et la réserve ovarienne, à des moments précis du cycle ;",
          "**[[echo-gyn|Échographie pelvienne]]** : étude de l'utérus et des ovaires, décompte des follicules ;",
          "**Exploration des trompes et de la cavité utérine** : hystérosalpingographie ou autres techniques, selon l'indication ;",
          "**Prélèvements** à la recherche d'une infection, au besoin ;",
          "**Bilan complémentaire** (thyroïde, prolactine…) selon le contexte.",
        ]),
      ]),
      s("homme", "Chez le partenaire", [
        p("Un spermogramme est généralement demandé précocement, car il est simple et très informatif. Une consultation spécialisée peut être proposée selon le résultat."),
      ]),
      s("calendrier", "Calendrier et suite", [
        p("Certains examens se font à des jours précis du cycle. Les résultats sont ensuite analysés ensemble pour proposer une stratégie : traitement de la cause, [[fert-ovulation|stimulation de l'ovulation]] ou [[fert-pma|PMA]]. Le bilan ne conclut pas toujours à une cause précise."),
      ]),
    ],
    faq: [
      faq("Le bilan de fertilité est-il douloureux ?", "La plupart des examens sont bien tolérés ; certains, comme l'exploration des trompes, peuvent être inconfortables. Le médecin vous explique chaque étape."),
      faq("Combien de temps dure le bilan ?", "Il peut s'étaler sur un ou plusieurs cycles, car certains examens dépendent du moment du cycle."),
      faq("Le bilan est-il nécessaire pour les deux partenaires ?", "Oui, il est généralement recommandé d'évaluer les deux membres du couple."),
    ],
    lastUpdated: D,
  },

  "fert-ovulation": {
    label: "Troubles de l'ovulation",
    metaTitle: "Troubles de l'ovulation : causes, signes et prise en charge",
    metaDescription: "Troubles de l'ovulation : anovulation et cycles irréguliers, causes (SOPK, thyroïde, prolactine), examens et grandes lignes de la prise en charge.",
    h1: "Troubles de l'ovulation : causes, signes et prise en charge",
    summary: "Absence ou irrégularité de l'ovulation : causes, bilan et options.",
    intro: "L'ovulation est la libération d'un ovule par l'ovaire, une fois par cycle en général. Lorsqu'elle est absente ou irrégulière, on parle de trouble de l'ovulation : c'est l'une des causes fréquentes de difficulté à obtenir une grossesse.",
    sections: [
      s("signes", "Comment les reconnaître ?", [
        ul([
          "cycles très longs, irréguliers ou absence de règles : voir [[gyn-irregular|règles irrégulières]] ;",
          "cycles réguliers mais sans ovulation, plus difficile à repérer ;",
          "signes d'excès d'androgènes (acné, pilosité) ;",
          "bouffées de chaleur avant 40 ans, qui évoquent une insuffisance ovarienne.",
        ]),
      ]),
      s("causes", "Causes fréquentes", [
        ul([
          "[[cond-pcos|syndrome des ovaires polykystiques]] ;",
          "troubles de la thyroïde ou excès de prolactine ;",
          "poids très bas ou très élevé, sport intensif, stress ;",
          "insuffisance ovarienne prématurée ;",
          "certains traitements.",
        ]),
      ]),
      s("bilan", "Évaluation", [
        p("Le médecin peut demander des dosages hormonaux, une [[echo-gyn|échographie pelvienne]] et un suivi de l'ovulation. Ces examens font partie du [[fert-workup|bilan de fertilité]]."),
      ]),
      s("prise-en-charge", "Prise en charge", [
        p("Elle dépend de la cause : conseils sur le mode de vie et le poids, traitement d'une anomalie thyroïdienne ou hormonale, médicaments qui stimulent l'ovulation sous surveillance médicale, puis si nécessaire d'autres techniques décrites dans [[fert-pma|PMA : information générale]]. Aucun traitement ne doit être pris sans avis médical."),
      ]),
    ],
    faq: [
      faq("Comment savoir si j'ovule ?", "Les tests d'ovulation et la courbe de température peuvent donner des indices, mais l'évaluation médicale est plus fiable en cas de doute."),
      faq("L'anovulation est-elle définitive ?", "Pas nécessairement. De nombreuses causes sont traitables ou améliorables."),
    ],
    lastUpdated: D,
  },

  "fert-pma": {
    label: "PMA – information générale",
    metaTitle: "PMA en Tunisie : informations générales sur la procréation assistée",
    metaDescription: "PMA : principales techniques (insémination, FIV, ICSI), étapes, aspects à connaître et cadre légal en Tunisie. Information générale, sans promesse de résultat.",
    h1: "PMA en Tunisie : informations générales",
    summary: "Insémination, FIV, ICSI : principes généraux de la procréation médicalement assistée.",
    intro: "La procréation médicalement assistée (PMA), ou assistance médicale à la procréation, regroupe plusieurs techniques destinées à aider un couple à obtenir une grossesse. Cette page présente des informations générales et éducatives ; elle ne constitue pas une offre de prise en charge et n'indique aucun résultat attendu.",
    sections: [
      s("quand", "Dans quels cas la PMA est-elle envisagée ?", [
        p("Après un [[fert-workup|bilan de fertilité]] complet, lorsqu'une cause ne peut être traitée autrement, ou en cas d'[[fert-female-infertility|infertilité]] inexpliquée persistante, ou dans certaines situations liées à l'[[cond-endometriosis|endométriose]] ou aux [[fert-ovulation|troubles de l'ovulation]]. L'indication dépend de la situation de chaque couple, de l'âge, des examens et des traitements déjà réalisés."),
      ]),
      s("techniques", "Les principales techniques", [
        ul([
          "**Insémination intra-utérine** : des spermatozoïdes préparés sont déposés dans l'utérus au moment de l'ovulation, souvent après stimulation ovarienne légère ;",
          "**Fécondation in vitro (FIV)** : les ovocytes sont prélevés, fécondés en laboratoire, puis les embryons sont transférés dans l'utérus ;",
          "**ICSI** : variante de la FIV où un spermatozoïde est injecté directement dans l'ovocyte, notamment en cas de facteur masculin ;",
          "**Techniques de congélation** (gamètes, embryons) selon les cas.",
        ]),
      ]),
      s("etapes", "Les grandes étapes", [
        ol([
          "Consultation et bilan du couple.",
          "Choix de la technique et information sur les bénéfices, limites et risques.",
          "Stimulation ovarienne et surveillance par échographies et dosages.",
          "Réalisation de la technique choisie.",
          "Suivi du début de grossesse.",
        ]),
      ]),
      s("cadre", "Cadre légal et organisation en Tunisie", [
        p("En Tunisie, l'assistance médicale à la procréation est encadrée par un cadre légal et réglementaire spécifique, et réalisée dans des structures autorisées. Les conditions d'accès et d'organisation doivent être vérifiées auprès du médecin et des structures concernées. Pour toute information officielle, reportez-vous aux sources de référence ci-dessous, au ministère de la Santé ou à vos interlocuteurs médicaux."),
      ]),
      s("limites", "À garder en tête", [
        ul([
          "les chances de succès varient beaucoup selon l'âge, la cause de l'infertilité et la technique ; aucune issue ne peut être promise ;",
          "les traitements peuvent être éprouvants physiquement et émotionnellement : un accompagnement est important ;",
          "des risques existent (syndrome d'hyperstimulation ovarienne, grossesses multiples), expliqués avant toute décision.",
        ]),
      ]),
    ],
    faq: [
      faq("La PMA garantit-elle une grossesse ?", "Non. Les résultats dépendent de nombreux facteurs et aucune technique ne peut garantir une grossesse."),
      faq("Faut-il réaliser un bilan avant une PMA ?", "Oui, un bilan est indispensable pour choisir la technique adaptée."),
      faq("Quelle est la différence entre FIV et ICSI ?", "En FIV, la fécondation se fait spontanément en laboratoire ; en ICSI, un spermatozoïde est injecté directement dans l'ovocyte."),
    ],
    lastUpdated: D,
  },
};
