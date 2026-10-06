import { PageContent, p, ul, ol, h3, note, warn, s, faq } from "@/lib/types";

const D = "2026-10-06";

export const conditions: Record<string, PageContent> = {
  "cond-endometriosis": {
    label: "Endométriose",
    metaTitle: "Endométriose : symptômes, diagnostic et suivi",
    metaDescription: "Endométriose : définition, symptômes (règles douloureuses, douleurs pelviennes), causes possibles, quand consulter, diagnostic (échographie, IRM) et suivi.",
    h1: "Endométriose : symptômes, diagnostic et suivi médical",
    summary: "Définition, symptômes, diagnostic et grandes lignes du suivi de l'endométriose.",
    intro: "L'endométriose est une maladie gynécologique chronique fréquente, qui touche une femme en âge de procréer sur dix environ selon les estimations internationales. Son diagnostic est souvent tardif, car les douleurs sont parfois banalisées. Cette page est une information générale, non un avis médical personnalisé.",
    sections: [
      s("quest", "Qu'est-ce que l'endométriose ?", [
        p("C'est la présence de tissu semblable à la muqueuse de l'utérus (endomètre) en dehors de l'utérus, par exemple sur les ovaires, le péritoine, les ligaments, parfois la vessie ou l'intestin. Ce tissu réagit aux hormones du cycle et peut provoquer inflammation, douleurs et adhérences."),
      ]),
      s("symptomes", "Symptômes fréquents", [
        ul([
          "[[gyn-painful-periods|règles très douloureuses]], parfois invalidantes ;",
          "[[gyn-pelvic-pain|douleurs pelviennes]] chroniques ;",
          "douleurs pendant ou après les rapports ;",
          "douleurs à la défécation ou à la miction, surtout pendant les règles ;",
          "fatigue importante, troubles digestifs cycliques ;",
          "difficultés à obtenir une grossesse, voir [[fert-female-infertility|infertilité féminine]].",
        ]),
        p("L'intensité des douleurs ne reflète pas toujours l'étendue de la maladie, et certaines femmes n'ont aucun symptôme."),
      ]),
      s("causes", "Causes possibles", [
        p("Les causes exactes ne sont pas totalement élucidées. Plusieurs mécanismes sont discutés : reflux de sang menstruel, facteurs hormonaux, immunitaires et génétiques. Un antécédent familial augmente le risque."),
      ]),
      s("consulter", "Quand consulter ?", [
        ul([
          "règles douloureuses qui limitent les activités ou qui s'aggravent ;",
          "douleurs pelviennes persistantes ou pendant les rapports ;",
          "difficulté à concevoir après plusieurs mois d'essais ;",
          "douleurs ne cédant pas aux antalgiques habituels.",
        ]),
      ]),
      s("diagnostic", "Comment le diagnostic est-il posé ?", [
        p("Il repose sur l'entretien, l'examen clinique et l'imagerie : [[echo-gyn|échographie pelvienne]] réalisée par un opérateur expérimenté, et IRM pelvienne dans certains cas pour cartographier les lésions. Une cœlioscopie peut être proposée dans certaines situations. Un bilan normal n'exclut pas toujours l'endométriose."),
      ]),
      s("suivi", "Suivi et prise en charge", [
        p("La prise en charge est individualisée et peut associer : antalgiques et anti-inflammatoires, traitements hormonaux visant à freiner les règles, kinésithérapie, soutien psychologique et conseils de mode de vie. La chirurgie est discutée dans certaines situations (douleurs sévères résistantes, lésions importantes, infertilité). En cas de projet de grossesse, la stratégie est adaptée : voir [[fert-workup|bilan de fertilité]]. Le suivi est au long cours."),
        note("Une prise en charge ne guérit pas toujours la maladie, mais peut contrôler les symptômes et améliorer la qualité de vie."),
      ]),
    ],
    faq: [
      faq("L'endométriose empêche-t-elle d'avoir un enfant ?", "Pas systématiquement. Elle peut diminuer la fertilité chez certaines femmes, mais beaucoup obtiennent une grossesse, spontanément ou avec une aide médicale."),
      faq("L'endométriose est-elle dangereuse ?", "Elle est bénigne mais peut altérer fortement la qualité de vie et la fertilité. Un suivi régulier est utile."),
      faq("Peut-on la voir à l'échographie ?", "Certaines formes sont visibles à l'échographie ou à l'IRM, d'autres non. L'expertise de l'examinateur est importante."),
      faq("Existe-t-il un traitement définitif ?", "Les traitements visent à contrôler les symptômes et à préserver la fertilité ; il n'existe pas de traitement « curatif » unique valable pour toutes."),
    ],
    lastUpdated: D,
  },

  "cond-pcos": {
    label: "Syndrome des ovaires polykystiques",
    metaTitle: "Syndrome des ovaires polykystiques (SOPK) : symptômes et suivi",
    metaDescription: "SOPK : définition, symptômes (règles irrégulières, acné, pilosité), causes, diagnostic, grandes lignes du suivi et impact sur la fertilité.",
    h1: "Syndrome des ovaires polykystiques (SOPK) : comprendre et se faire suivre",
    summary: "Définition, symptômes, diagnostic et suivi du syndrome des ovaires polykystiques.",
    intro: "Le syndrome des ovaires polykystiques (SOPK) est un trouble hormonal fréquent chez la femme en âge de procréer. Il associe à des degrés variables des cycles irréguliers, un excès d'hormones masculines (androgènes) et un aspect particulier des ovaires à l'échographie.",
    sections: [
      s("quest", "Qu'est-ce que le SOPK ?", [
        p("Malgré son nom, le SOPK n'est pas une maladie de « kystes » au sens strict : il s'agit de nombreux petits follicules, qui reflètent un trouble de la maturation des ovules. Le diagnostic repose sur la présence de deux critères parmi trois : irrégularité ou absence d'ovulation, signes d'excès d'androgènes, ovaires d'aspect polykystique, après exclusion d'autres causes."),
      ]),
      s("symptomes", "Symptômes fréquents", [
        ul([
          "[[gyn-irregular|règles irrégulières]] ou rares, voire absentes ;",
          "acné, peau grasse, pilosité excessive, chute de cheveux ;",
          "prise de poids, notamment abdominale ;",
          "difficulté à obtenir une grossesse en raison de l'absence d'ovulation, voir [[fert-ovulation|troubles de l'ovulation]].",
        ]),
      ]),
      s("causes", "Causes et facteurs associés", [
        p("Elles sont multifactorielles : facteurs génétiques, résistance à l'insuline, déséquilibres hormonaux. Le SOPK est associé à un risque plus élevé de troubles métaboliques (diabète de type 2, excès de cholestérol), d'où l'intérêt d'un suivi dans la durée."),
      ]),
      s("consulter", "Quand consulter ?", [
        ul([
          "cycles très irréguliers ou absence de règles ;",
          "acné ou pilosité persistantes ;",
          "projet de grossesse sans résultat ;",
          "antécédents familiaux de diabète.",
        ]),
      ]),
      s("diagnostic", "Diagnostic", [
        p("Il associe entretien, examen clinique, [[echo-gyn|échographie pelvienne]] et bilan sanguin (hormones, glycémie, bilan lipidique, thyroïde, prolactine) pour écarter d'autres causes."),
      ]),
      s("suivi", "Prise en charge et suivi", [
        p("Elle est adaptée aux symptômes et au projet de la patiente : hygiène de vie (alimentation, activité physique, gestion du poids), traitements hormonaux pour réguler le cycle et traiter l'acné ou la pilosité, médicaments de l'ovulation en cas de désir de grossesse, surveillance métabolique. Le suivi s'inscrit dans la durée. Pour les conséquences sur la fertilité, voir [[fert-female-infertility|infertilité féminine]]."),
      ]),
    ],
    faq: [
      faq("Le SOPK est-il guérissable ?", "C'est une condition chronique qui se contrôle, mais ses manifestations peuvent s'améliorer nettement avec une prise en charge adaptée."),
      faq("Peut-on avoir des enfants avec un SOPK ?", "Oui, dans la majorité des cas, parfois avec une aide pour stimuler l'ovulation."),
      faq("Une échographie normale exclut-elle un SOPK ?", "Pas toujours : le diagnostic repose sur plusieurs critères, pas uniquement sur l'échographie."),
    ],
    lastUpdated: D,
  },

  "cond-ovarian-cyst": {
    label: "Kyste ovarien",
    metaTitle: "Kyste ovarien : symptômes, types et surveillance",
    metaDescription: "Kyste ovarien : kystes fonctionnels ou organiques, symptômes, signes d'urgence, diagnostic par échographie, surveillance et options de prise en charge.",
    h1: "Kyste ovarien : symptômes, types et conduite à tenir",
    summary: "Types de kystes, symptômes, signes d'alerte, échographie et surveillance.",
    intro: "Un kyste ovarien est une poche, le plus souvent remplie de liquide, qui se développe dans ou sur un ovaire. La plupart sont bénins et disparaissent spontanément, mais certains nécessitent une surveillance ou un traitement. L'échographie est l'examen de référence pour les explorer.",
    sections: [
      s("quest", "Qu'est-ce qu'un kyste ovarien ?", [
        p("Un kyste ovarien est une cavité, le plus souvent remplie de liquide, située dans l'ovaire ou à sa surface. On distingue plusieurs types :"),
        ul([
          "**Kystes fonctionnels** : liés au cycle (kyste folliculaire, kyste du corps jaune), fréquents, souvent régressifs en quelques cycles ;",
          "**Kystes organiques** : persistants, comme les endométriomes (liés à l'[[cond-endometriosis|endométriose]]), les kystes dermoïdes ou les cystadénomes ;",
          "**Ovaires polykystiques** : voir [[cond-pcos|SOPK]], qui n'est pas un kyste unique mais un aspect particulier de nombreux petits follicules.",
        ]),
      ]),
      s("causes", "Pourquoi un kyste se forme-t-il ?", [
        p("Les kystes fonctionnels sont liés au fonctionnement normal de l'ovaire : un follicule qui ne se rompt pas ou un corps jaune qui persiste. Les kystes organiques ont d'autres origines : tissu d'endométriose, cellules d'origine embryonnaire (kystes dermoïdes) ou prolifération de cellules de l'ovaire. Les hormones, l'âge et certains traitements de stimulation de l'ovulation peuvent favoriser leur apparition."),
      ]),
      s("symptomes", "Symptômes", [
        p("Beaucoup de kystes sont découverts fortuitement, sans symptôme. Ils peuvent provoquer :"),
        ul([
          "[[gyn-pelvic-pain|douleur pelvienne]] d'un côté, sensation de pesanteur ;",
          "troubles du cycle ;",
          "douleur pendant les rapports ;",
          "ballonnement ou envies fréquentes d'uriner si le kyste est volumineux.",
        ]),
      ]),
      s("urgence", "Signes d'urgence", [
        warn("Une douleur pelvienne brutale et intense, avec nausées, vomissements, malaise ou fièvre, peut traduire une complication (torsion de l'ovaire, rupture du kyste, hémorragie). Consultez en urgence. SAMU : 190.", "À ne pas attendre"),
      ]),
      s("consulter", "Quand consulter ?", [
        ul([
          "douleur pelvienne persistante ou répétée ;",
          "retard de règles, règles irrégulières ou saignements anormaux ;",
          "kyste découvert à l'échographie : pour savoir s'il nécessite une surveillance ou un traitement ;",
          "douleur pendant les rapports ou sensation de pesanteur.",
        ]),
      ]),
      s("diagnostic", "Diagnostic", [
        p("L'[[echo-gyn|échographie gynécologique]] permet de préciser la taille, l'aspect et la nature probable du kyste. Selon les cas, une IRM, des dosages sanguins ou un contrôle échographique après quelques cycles sont proposés."),
      ]),
      s("suivi", "Surveillance et traitement", [
        p("Un kyste fonctionnel fait souvent l'objet d'une simple surveillance. Un traitement médicamenteux ou une intervention (le plus souvent par cœlioscopie) peut être discuté pour un kyste persistant, volumineux, douloureux ou d'aspect suspect. La décision dépend de l'aspect du kyste, de vos symptômes, de votre âge et de votre projet de grossesse. Pour un avis personnalisé, une [[gyn-consultation|consultation gynécologique]] est nécessaire."),
      ]),
    ],
    faq: [
      faq("Un kyste ovarien disparaît-il tout seul ?", "Les kystes fonctionnels régressent très souvent spontanément. Un contrôle permet de le vérifier."),
      faq("Un kyste ovarien est-il un cancer ?", "Dans la grande majorité des cas, non. L'échographie permet de repérer les aspects qui demandent des examens complémentaires."),
      faq("Un kyste empêche-t-il d'être enceinte ?", "Cela dépend du type de kyste. Certains n'ont aucun effet sur la fertilité, d'autres, comme les endométriomes, peuvent avoir un impact."),
    ],
    lastUpdated: D,
  },

  "cond-fibroid": {
    label: "Fibrome utérin",
    metaTitle: "Fibrome utérin : symptômes, diagnostic et traitements",
    metaDescription: "Fibrome utérin : définition, symptômes (règles abondantes, pesanteur), causes, diagnostic par échographie ou IRM et options de prise en charge.",
    h1: "Fibrome utérin : symptômes, diagnostic et options de prise en charge",
    summary: "Fibromes : symptômes, diagnostic par imagerie et grandes options thérapeutiques.",
    intro: "Le fibrome utérin (ou léiomyome) est une tumeur bénigne du muscle de l'utérus, très fréquente chez la femme en âge de procréer. Il est souvent asymptomatique et découvert lors d'une échographie, mais peut parfois provoquer des symptômes qui justifient une prise en charge.",
    sections: [
      s("quest", "Qu'est-ce qu'un fibrome ?", [
        p("C'est une masse bénigne constituée de cellules musculaires, qui se développe dans la paroi de l'utérus. On les classe selon leur siège : sous-muqueux (dans la cavité), intramuraux (dans la paroi) ou sous-séreux (vers l'extérieur). Leur nombre et leur taille varient. Les fibromes sont sensibles aux hormones et ont tendance à régresser après la ménopause."),
      ]),
      s("symptomes", "Symptômes possibles", [
        ul([
          "règles abondantes ou prolongées, pouvant provoquer une anémie ;",
          "[[gyn-pelvic-pain|douleurs pelviennes]] ou sensation de pesanteur ;",
          "troubles urinaires ou constipation si le fibrome comprime les organes voisins ;",
          "saignements entre les règles ;",
          "difficultés à concevoir ou fausses couches répétées dans certaines localisations.",
        ]),
        p("Beaucoup de fibromes ne donnent aucun symptôme et ne nécessitent alors qu'une surveillance."),
      ]),
      s("causes", "Causes et facteurs favorisants", [
        p("La cause exacte est inconnue. Les hormones (œstrogènes, progestérone), l'hérédité, l'âge et le surpoids jouent un rôle."),
      ]),
      s("consulter", "Quand consulter ?", [
        ul([
          "règles très abondantes, fatigue, pâleur ;",
          "douleurs ou pesanteur pelvienne persistantes ;",
          "augmentation du volume du ventre ;",
          "projet de grossesse avec fibrome connu.",
        ]),
      ]),
      s("diagnostic", "Diagnostic", [
        p("Le diagnostic repose sur l'examen clinique et l'[[echo-gyn|échographie pelvienne]], souvent suffisante. L'IRM ou l'hystéroscopie peuvent être utilisées pour préciser le nombre, la taille et la localisation des fibromes, notamment avant un traitement."),
      ]),
      s("suivi", "Prise en charge", [
        p("Elle dépend des symptômes, de la taille et de la localisation, de l'âge et du désir de grossesse. Les options vont de la simple surveillance aux traitements médicamenteux (pour limiter les saignements), aux techniques mini-invasives et à la chirurgie (ablation du fibrome ou, dans certains cas, de l'utérus). Le choix se fait après discussion avec votre médecin. Voir aussi les [[gyn-cycle|troubles du cycle menstruel]]."),
      ]),
    ],
    faq: [
      faq("Les fibromes sont-ils cancéreux ?", "Non, ce sont des tumeurs bénignes. La transformation maligne est extrêmement rare."),
      faq("Faut-il toujours opérer un fibrome ?", "Non. Un fibrome sans symptôme se surveille simplement."),
      faq("Un fibrome empêche-t-il une grossesse ?", "Pas toujours. Cela dépend de sa taille et de son siège, notamment s'il déforme la cavité utérine."),
      faq("Peut-on faire une échographie de contrôle ?", "Oui, la surveillance par [[echo-gyn|échographie]] permet de suivre l'évolution."),
    ],
    lastUpdated: D,
  },
};
