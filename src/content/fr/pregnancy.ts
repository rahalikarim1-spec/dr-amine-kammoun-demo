import { PageContent, p, ul, ol, h3, note, warn, s, faq } from "@/lib/types";

const D = "2026-10-06";

export const pregnancy: Record<string, PageContent> = {
  "preg-follow-up": {
    label: "Suivi de grossesse",
    metaTitle: "Suivi de grossesse : calendrier des consultations et examens",
    metaDescription: "Le suivi de grossesse mois par mois : consultations, échographies, analyses et dépistages, signes d'alerte et conseils pour une grossesse bien accompagnée.",
    h1: "Suivi de grossesse : consultations, échographies et analyses",
    summary: "Vue d'ensemble du suivi d'une grossesse : calendrier, examens et points de vigilance.",
    intro: "Le suivi de grossesse a pour but de vérifier le bon déroulement de la grossesse, de dépister les complications et d'accompagner la future maman jusqu'à l'accouchement. Le calendrier ci-dessous donne des repères généraux ; votre médecin l'adapte à votre situation.",
    sections: [
      s("principe", "Les grandes étapes du suivi", [
        p("Le suivi repose sur des consultations régulières, des analyses biologiques et des échographies. Le rythme est le plus souvent mensuel, plus resserré en fin de grossesse ou en cas de [[preg-high-risk|grossesse à risque]]."),
        ul([
          "**Première consultation** : confirmation de la grossesse, estimation du terme, bilan initial, voir la [[preg-consultation|consultation de grossesse]] ;",
          "**[[preg-t1|Premier trimestre]]** : échographie de datation, analyses de début de grossesse, dépistages proposés ;",
          "**[[preg-t2|Deuxième trimestre]]** : échographie morphologique, dépistage du diabète gestationnel ;",
          "**[[preg-t3|Troisième trimestre]]** : échographie de croissance, préparation à la naissance, signes de l'accouchement.",
        ]),
      ]),
      s("echo", "Les échographies", [
        p("Trois échographies sont généralement proposées, à des termes précis : une au premier trimestre, une au deuxième et une au troisième. Leur objectif et leur déroulement sont expliqués sur la page [[echo-obstetric|échographie obstétricale]]."),
      ]),
      s("examens", "Analyses et examens habituels", [
        ul([
          "groupe sanguin, rhésus et recherche d'anticorps ;",
          "sérologies (rubéole, toxoplasmose, et selon les cas syphilis, hépatite B, VIH) ;",
          "recherche de sucre et de protéines dans les urines ;",
          "dépistage du diabète gestationnel, généralement entre le 2e et le 3e trimestre ;",
          "prélèvement vaginal vers la fin de la grossesse selon les pratiques.",
        ]),
        note("Les examens proposés peuvent différer selon les pays et les recommandations suivies. Votre médecin vous indique ceux qui sont adaptés à votre grossesse."),
      ]),
      s("hygiene", "Conseils généraux", [
        ul([
          "alimentation variée et équilibrée, avec les précautions habituelles contre la listériose et la toxoplasmose ;",
          "supplémentation en acide folique avant et en début de grossesse, selon l'avis médical ;",
          "arrêt du tabac et de l'alcool ;",
          "pas d'automédication : demandez toujours un avis avant de prendre un médicament ;",
          "activité physique adaptée si aucune contre-indication.",
        ]),
      ]),
      s("alerte", "Quand consulter en urgence ?", [
        warn("Consultez sans attendre en cas de saignements, de pertes de liquide, de contractions régulières avant terme, de douleurs abdominales intenses, de fièvre, de maux de tête sévères ou troubles visuels, ou de diminution des mouvements du bébé. SAMU : 190.", "Signes d'alerte"),
      ]),
    ],
    faq: [
      faq("Combien de consultations durant la grossesse ?", "Le nombre dépend du déroulement : en l'absence de complication, une consultation par mois est une pratique courante, avec des visites supplémentaires si nécessaire."),
      faq("Quand faire la première consultation ?", "Dès que la grossesse est confirmée, idéalement avant la fin du premier trimestre. Voir la page [[preg-consultation|consultation grossesse]]."),
      faq("Combien d'échographies sont recommandées ?", "Trois échographies de dépistage sont habituellement proposées. D'autres peuvent s'ajouter si une indication médicale le justifie."),
      faq("Peut-on voyager enceinte ?", "Dans la plupart des grossesses sans complication, oui, avec certaines précautions selon le terme et la destination. Demandez l'avis de votre médecin avant de partir."),
    ],
    lastUpdated: D,
  },

  "preg-consultation": {
    label: "Consultation grossesse",
    metaTitle: "Première consultation de grossesse : déroulement",
    metaDescription: "Première consultation de grossesse : quand la programmer, questions posées, examens, ordonnance de début de grossesse et conseils à préparer.",
    h1: "Première consultation de grossesse : déroulement et préparation",
    summary: "Quand prendre rendez-vous, ce qui est évalué et comment se préparer.",
    intro: "La première consultation de grossesse est le point de départ du [[preg-follow-up|suivi de grossesse]]. Elle sert à confirmer la grossesse, à estimer le terme et à évaluer votre santé pour préparer les mois à venir.",
    sections: [
      s("quand", "Quand prendre rendez-vous ?", [
        p("Dès le test de grossesse positif et un retard de règles, il est conseillé de prendre rendez-vous pour une consultation, idéalement avant la fin du premier trimestre. En cas de douleur, de saignement ou d'antécédent de [[preg-high-risk|grossesse à risque]], consultez sans attendre."),
      ]),
      s("contenu", "Ce qui est évalué", [
        ul([
          "date des dernières règles et estimation du terme ;",
          "antécédents médicaux, chirurgicaux et obstétricaux, traitements en cours ;",
          "antécédents familiaux (diabète, hypertension, maladies génétiques) ;",
          "mode de vie : alimentation, tabac, alcool, activité professionnelle ;",
          "examen clinique : poids, tension artérielle, examen gynécologique si nécessaire.",
        ]),
      ]),
      s("examens", "Examens et prescriptions", [
        p("Le médecin prescrit le bilan de début de grossesse (analyses de sang et d'urine) et programme l'[[echo-obstetric|échographie]] du premier trimestre. Il explique également quels dépistages sont possibles et quelle démarche est adaptée dans votre cas."),
      ]),
      s("preparer", "Comment préparer ce rendez-vous ?", [
        ul([
          "notez la date de vos dernières règles et la durée habituelle de vos cycles ;",
          "listez les médicaments, compléments et vaccins récents ;",
          "apportez vos analyses et comptes rendus antérieurs ;",
          "préparez vos questions (alimentation, travail, voyages, activité sportive).",
        ]),
      ]),
    ],
    faq: [
      faq("Faut-il venir avec le partenaire ?", "C'est possible et souvent apprécié, mais ce n'est pas obligatoire."),
      faq("L'échographie est-elle réalisée lors de la première consultation ?", "Cela dépend du terme et de l'organisation. L'échographie de datation se programme généralement à un terme précis, expliqué par votre médecin."),
      faq("Que faire en cas de nausées importantes ?", "Parlez-en lors de la consultation : des conseils et, si besoin, des traitements existent. Des vomissements incoercibles justifient une consultation rapide."),
    ],
    lastUpdated: D,
  },

  "preg-t1": {
    label: "Premier trimestre",
    metaTitle: "Premier trimestre de grossesse : suivi et conseils",
    metaDescription: "Premier trimestre de grossesse (jusqu'à 14 semaines d'aménorrhée) : symptômes, examens, échographie de datation, alimentation et signes d'alerte.",
    h1: "Premier trimestre de grossesse : ce qu'il faut savoir",
    summary: "Symptômes, examens, échographie et conseils du début de grossesse.",
    intro: "Le premier trimestre s'étend du début de la grossesse jusqu'à environ 14 semaines d'aménorrhée (SA). C'est une période de grandes transformations pour l'embryon et de nombreux changements pour la future maman, souvent marquée par la fatigue et les nausées.",
    sections: [
      s("symptomes", "Symptômes fréquents", [
        ul([
          "fatigue importante, besoin de sommeil ;",
          "nausées, parfois vomissements ;",
          "tension mammaire, envies fréquentes d'uriner ;",
          "variations de l'humeur ;",
          "petits saignements parfois, qui doivent toujours être signalés.",
        ]),
      ]),
      s("suivi", "Suivi médical du trimestre", [
        p("La [[preg-consultation|première consultation]] confirme la grossesse et prescrit le bilan de début de grossesse. L'[[echo-obstetric|échographie du premier trimestre]], généralement réalisée entre 11 et 14 SA, permet de dater précisément la grossesse, de vérifier le nombre d'embryons, la vitalité et certains éléments de dépistage. Des dépistages de risque de maladie chromosomique peuvent être discutés."),
      ]),
      s("conseils", "Conseils pratiques", [
        ul([
          "acide folique selon avis médical ;",
          "fractionnez les repas pour limiter les nausées ;",
          "évitez alcool, tabac et automédication ;",
          "respectez les précautions alimentaires (viandes bien cuites, fromages au lait pasteurisé, lavage des fruits et légumes) ;",
          "reposez-vous et hydratez-vous.",
        ]),
      ]),
      s("alerte", "Quand consulter ?", [
        warn("Saignements, douleurs abdominales ou pelviennes, fièvre, vomissements empêchant de s'alimenter ou de boire : consultez rapidement. Une douleur intense avec saignement doit conduire aux urgences."),
      ]),
      s("suite", "La suite", [
        p("Après le premier trimestre, le suivi se poursuit avec le [[preg-t2|deuxième trimestre]], souvent plus confortable. Vue d'ensemble : [[preg-follow-up|suivi de grossesse]]."),
      ]),
    ],
    faq: [
      faq("Les nausées durent-elles toute la grossesse ?", "Elles disparaissent le plus souvent vers la fin du premier trimestre, mais peuvent persister chez certaines femmes."),
      faq("À quel moment entend-on le cœur du bébé ?", "L'activité cardiaque est visible à l'échographie dès les premières semaines. Le terme exact est précisé par le médecin."),
      faq("Les petits saignements sont-ils graves ?", "Ils sont parfois bénins, mais toujours à signaler : une évaluation médicale est nécessaire."),
    ],
    lastUpdated: D,
  },

  "preg-t2": {
    label: "Deuxième trimestre",
    metaTitle: "Deuxième trimestre de grossesse : suivi et échographie",
    metaDescription: "Deuxième trimestre de grossesse (14 à 27 SA) : évolution, échographie morphologique, dépistage du diabète gestationnel, mouvements du bébé et conseils.",
    h1: "Deuxième trimestre de grossesse : suivi et examens",
    summary: "Échographie morphologique, dépistage du diabète gestationnel et mouvements du bébé.",
    intro: "Le deuxième trimestre, de 14 à environ 27 semaines d'aménorrhée, est souvent vécu comme la phase la plus confortable de la grossesse : les nausées s'atténuent, l'énergie revient et les mouvements du bébé deviennent perceptibles.",
    sections: [
      s("evolution", "Ce qui change", [
        p("Le ventre s'arrondit, le bébé grandit et ses organes mûrissent. Les premiers mouvements sont généralement ressentis entre 16 et 22 SA, plus tôt chez les femmes ayant déjà eu une grossesse. Certaines femmes ressentent des maux de dos, des crampes dans les jambes ou des brûlures d'estomac."),
      ]),
      s("suivi", "Suivi médical", [
        ul([
          "consultation mensuelle avec contrôle du poids, de la tension et de la hauteur utérine ;",
          "**échographie morphologique**, généralement entre 20 et 25 SA : étude détaillée de la morphologie du fœtus, voir [[echo-obstetric|échographie obstétricale]] ;",
          "**dépistage du diabète gestationnel**, souvent proposé entre 24 et 28 SA selon les facteurs de risque ;",
          "analyses complémentaires selon le bilan initial et d'éventuels facteurs de [[preg-high-risk|grossesse à risque]].",
        ]),
      ]),
      s("conseils", "Conseils", [
        ul([
          "poursuivre une activité physique douce (marche, natation) si aucune contre-indication ;",
          "bien s'hydrater et privilégier une alimentation variée riche en fer et en calcium ;",
          "adopter une bonne posture et porter des chaussures confortables ;",
          "commencer à réfléchir au projet de naissance, voir [[preg-birth-prep|préparation à l'accouchement]].",
        ]),
      ]),
      s("alerte", "Signes d'alerte", [
        warn("Saignements, pertes de liquide, contractions régulières, douleurs abdominales intenses, fièvre, maux de tête persistants ou troubles visuels, gonflement brutal du visage ou des mains : consultez sans attendre."),
      ]),
    ],
    faq: [
      faq("L'échographie morphologique permet-elle de connaître le sexe du bébé ?", "Le sexe peut souvent être observé, mais l'objectif de l'examen est l'étude de la morphologie fœtale. La visibilité dépend de la position du bébé."),
      faq("Comment fait-on le dépistage du diabète gestationnel ?", "Il repose sur une prise de sang, éventuellement avec une charge en sucre, selon un protocole précisé par votre médecin."),
      faq("Quels sports pratiquer ?", "Marche, natation et gymnastique douce sont généralement bien tolérés. Évitez les sports à risque de chute ou de choc et demandez l'avis de votre médecin."),
    ],
    lastUpdated: D,
  },

  "preg-t3": {
    label: "Troisième trimestre",
    metaTitle: "Troisième trimestre de grossesse : suivi avant l'accouchement",
    metaDescription: "Troisième trimestre de grossesse : consultations, échographie de croissance, préparation à l'accouchement, signes du début du travail et alertes.",
    h1: "Troisième trimestre de grossesse : se préparer à la naissance",
    summary: "Surveillance, échographie de croissance, signes de l'accouchement et préparation.",
    intro: "Le troisième trimestre commence vers 28 semaines d'aménorrhée et se termine à la naissance. Le suivi devient plus rapproché : on surveille la croissance du bébé, la tension artérielle et on prépare l'accouchement.",
    sections: [
      s("suivi", "Suivi médical", [
        ul([
          "consultations plus rapprochées, avec mesure de la tension, du poids, de la hauteur utérine et recherche de protéines dans les urines ;",
          "**échographie du troisième trimestre**, vers 30 à 35 SA : croissance, position du bébé, quantité de liquide, placenta, voir [[echo-obstetric|échographie obstétricale]] ;",
          "prélèvement vaginal de dépistage de certaines bactéries (streptocoque B) vers la fin de la grossesse selon les pratiques ;",
          "pour les femmes de rhésus négatif, un suivi spécifique est organisé.",
        ]),
      ]),
      s("preparation", "Préparer l'accouchement", [
        p("C'est le moment de choisir le lieu de l'accouchement, de découvrir les cours de préparation et d'anticiper l'organisation des premiers jours, puis le [[preg-postpartum|suivi après l'accouchement]]. Tous ces points sont développés dans [[preg-birth-prep|préparation à l'accouchement]]."),
      ]),
      s("travail", "Reconnaître les signes du début de travail", [
        ul([
          "contractions régulières, de plus en plus rapprochées et intenses ;",
          "perte du bouchon muqueux ;",
          "perte de liquide amniotique (rupture de la poche des eaux), à signaler immédiatement.",
        ]),
        p("Votre médecin vous indiquera à quel moment vous rendre à la maternité."),
      ]),
      s("alerte", "Signes d'alerte", [
        warn("Moins de mouvements du bébé, saignement, perte de liquide, contractions avant terme, maux de tête intenses, troubles de la vue, douleurs sous les côtes, gonflement brutal : consultez en urgence. Ces signes peuvent évoquer une complication de type prééclampsie. SAMU : 190."),
      ]),
    ],
    faq: [
      faq("Comment surveiller les mouvements du bébé ?", "Vous apprenez à reconnaître son rythme habituel. Toute diminution marquée des mouvements justifie un avis médical rapide."),
      faq("Quand faut-il aller à la maternité ?", "Selon les consignes données par votre médecin, généralement en cas de contractions régulières et rapprochées, de perte de liquide, de saignement ou de diminution des mouvements."),
      faq("Qu'est-ce qu'un accouchement à terme ?", "On parle d'accouchement à terme à partir de 37 semaines d'aménorrhée révolues."),
    ],
    lastUpdated: D,
  },

  "preg-high-risk": {
    label: "Grossesse à risque",
    metaTitle: "Grossesse à risque : facteurs, surveillance et conseils",
    metaDescription: "Qu'est-ce qu'une grossesse à risque ? Principaux facteurs (âge, diabète, hypertension…), surveillance adaptée, signes d'alerte et rôle du suivi spécialisé.",
    h1: "Grossesse à risque : comprendre la surveillance renforcée",
    summary: "Facteurs de risque, surveillance adaptée et signes à ne pas ignorer.",
    intro: "Une grossesse est dite « à risque » lorsque certains facteurs augmentent la probabilité d'une complication pour la mère ou pour le bébé. Cela ne signifie pas qu'un problème surviendra : cela justifie une surveillance plus attentive et un suivi adapté.",
    sections: [
      s("facteurs", "Principaux facteurs de risque", [
        ul([
          "âge maternel jeune ou avancé ;",
          "maladies préexistantes : hypertension, diabète, maladies rénales, thyroïdiennes, cardiaques ou auto-immunes ;",
          "antécédents obstétricaux : prématurité, fausses couches répétées, prééclampsie, césarienne ;",
          "grossesse multiple (jumeaux ou plus) ;",
          "problèmes apparus pendant la grossesse : diabète gestationnel, hypertension, anomalie du placenta, retard de croissance, menace d'accouchement prématuré ;",
          "tabagisme, obésité ou dénutrition, certaines infections.",
        ]),
      ]),
      s("surveillance", "Quelle surveillance ?", [
        p("Elle est adaptée à chaque situation : consultations plus fréquentes, examens biologiques complémentaires, [[echo-obstetric|échographies]] supplémentaires et parfois un suivi conjoint avec d'autres spécialistes. Le but est de détecter rapidement toute évolution et de choisir le lieu et le moment optimal de l'accouchement."),
      ]),
      s("vie", "Au quotidien", [
        ul([
          "suivez scrupuleusement les rendez-vous et les traitements prescrits ;",
          "mesurez régulièrement votre tension ou votre glycémie si on vous le demande ;",
          "ne prenez aucun médicament sans avis médical ;",
          "adaptez le repos et l'activité professionnelle avec votre médecin.",
        ]),
      ]),
      s("alerte", "Signes d'alerte", [
        warn("Saignements, perte de liquide, contractions régulières, fièvre, maux de tête sévères, troubles visuels, douleurs abdominales ou diminution des mouvements : consultez en urgence."),
      ]),
      s("suite", "Pour aller plus loin", [
        p("Le suivi général est détaillé dans [[preg-follow-up|suivi de grossesse]] ; la fin de grossesse dans [[preg-t3|troisième trimestre]] et [[preg-birth-prep|préparation à l'accouchement]]."),
      ]),
    ],
    faq: [
      faq("Une grossesse à risque finit-elle forcément mal ?", "Non. Avec une surveillance adaptée, de nombreuses grossesses à risque se déroulent bien."),
      faq("Faut-il accoucher dans un lieu particulier ?", "Cela dépend du risque identifié. Votre médecin vous conseille sur le lieu le plus adapté."),
      faq("Peut-on devenir « à risque » en cours de grossesse ?", "Oui, par exemple en cas d'hypertension ou de diabète gestationnel. D'où l'intérêt d'un suivi régulier."),
    ],
    lastUpdated: D,
  },

  "preg-birth-prep": {
    label: "Préparation à l'accouchement",
    metaTitle: "Préparation à l'accouchement : étapes et conseils pratiques",
    metaDescription: "Préparation à l'accouchement : cours de préparation, projet de naissance, valise de maternité, reconnaissance du travail, analgésie et organisation.",
    h1: "Préparation à l'accouchement : comment s'y préparer sereinement",
    summary: "Cours de préparation, projet de naissance, organisation et signes du travail.",
    intro: "Se préparer à l'accouchement, c'est comprendre ce qui va se passer, connaître les options possibles et organiser l'arrivée du bébé. Les informations ci-dessous sont générales ; votre médecin et l'équipe de la maternité vous guideront selon votre situation.",
    sections: [
      s("cours", "Les séances de préparation", [
        p("Elles abordent le déroulement du travail, la respiration, la gestion de la douleur, les positions d'accouchement, l'allaitement et les soins du nouveau-né. Elles sont généralement proposées à partir du septième mois, souvent par des sages-femmes."),
      ]),
      s("projet", "Le projet de naissance", [
        p("C'est un document qui exprime vos souhaits (présence d'un accompagnant, gestion de la douleur, premiers soins, allaitement). Il se discute avec votre médecin et l'équipe de la maternité : il reste évolutif et s'adapte aux impératifs médicaux."),
      ]),
      s("modes", "Voie basse, césarienne, analgésie", [
        ul([
          "**Accouchement par voie basse** : le plus fréquent en l'absence de contre-indication ; en cas de [[preg-high-risk|grossesse à risque]], le lieu et le mode d'accouchement sont discutés à l'avance ;",
          "**Césarienne** : programmée ou en urgence, selon l'indication médicale ;",
          "**Analgésie** : différentes options existent, dont l'analgésie péridurale. Les possibilités dépendent de la maternité et de votre état de santé : renseignez-vous en amont.",
        ]),
      ]),
      s("organisation", "Organisation pratique", [
        ul([
          "choisir la maternité et vous y inscrire ;",
          "préparer la valise de maternité (documents, affaires pour vous et le bébé) ;",
          "prévoir le trajet, le moyen de transport et la personne qui vous accompagne ;",
          "prévoir l'organisation à la maison et le retour, voir [[preg-postpartum|suivi après accouchement]].",
        ]),
      ]),
      s("signes", "Quand partir à la maternité ?", [
        p("Votre médecin vous donne des consignes précises. De façon générale, on se rend à la maternité en cas de contractions régulières et rapprochées, de perte de liquide, de saignement ou de diminution des mouvements du bébé. Voir aussi [[preg-t3|troisième trimestre]]."),
      ]),
    ],
    faq: [
      faq("Quand commencer la préparation à l'accouchement ?", "Souvent au début du troisième trimestre, mais il est possible de commencer plus tôt."),
      faq("Peut-on choisir une césarienne ?", "La césarienne repose sur une indication médicale. Toute demande de césarienne de convenance se discute avec le médecin."),
      faq("Que mettre dans la valise de maternité ?", "Vos documents médicaux et administratifs, vos affaires de toilette, des vêtements confortables et ceux du bébé. La maternité peut fournir une liste précise."),
    ],
    lastUpdated: D,
  },

  "preg-postpartum": {
    label: "Suivi après accouchement",
    metaTitle: "Suivi après accouchement : visite post-natale et récupération",
    metaDescription: "Suivi après l'accouchement : visite post-natale, récupération physique, contraception, baby blues, allaitement et signes d'alerte à connaître.",
    h1: "Suivi après l'accouchement : visite post-natale et récupération",
    summary: "Visite post-natale, contraception, santé physique et émotionnelle après la naissance.",
    intro: "Les semaines qui suivent la naissance prolongent le [[preg-follow-up|suivi de grossesse]] : c'est une période de récupération et d'adaptation. Un suivi médical permet de vérifier que tout se passe bien pour la maman et d'aborder la contraception, l'allaitement et le bien-être émotionnel.",
    sections: [
      s("visite", "La visite post-natale", [
        p("Elle a généralement lieu entre 6 et 8 semaines après l'accouchement. Elle comprend un entretien, un examen clinique (cicatrice, périnée, tension, poids), un examen gynécologique si nécessaire et un point sur la [[gyn-contraception|contraception]]."),
      ]),
      s("physique", "Récupération physique", [
        ul([
          "saignements (lochies) pouvant durer plusieurs semaines ;",
          "cicatrisation de l'épisiotomie, de la déchirure ou de la césarienne ;",
          "rééducation périnéale, souvent prescrite ;",
          "fatigue, douleurs dorsales, difficultés de sommeil ;",
          "montée de lait et soins des seins en cas d'allaitement.",
        ]),
      ]),
      s("emotions", "Bien-être émotionnel", [
        p("Un « baby blues » (tristesse, irritabilité, pleurs) est fréquent dans les jours suivant la naissance et disparaît en général rapidement. S'il persiste, s'accompagne d'angoisse intense, de perte d'intérêt ou d'idées sombres, parlez-en : la dépression du post-partum se soigne."),
      ]),
      s("alerte", "Signes d'alerte", [
        warn("Saignements très abondants, fièvre, douleur ou rougeur d'un mollet, douleur thoracique ou essoufflement, plaie qui s'infecte ou écoule, douleur intense d'un sein avec fièvre, pensées sombres : consultez immédiatement ou appelez les urgences (SAMU : 190)."),
      ]),
      s("suite", "Et ensuite ?", [
        p("Un [[gyn-routine|suivi gynécologique régulier]] reprend ensuite son cours. Si une nouvelle grossesse est envisagée, parlez-en à votre médecin pour choisir le bon délai."),
      ]),
    ],
    faq: [
      faq("Quand reprendre les rapports sexuels ?", "Il n'y a pas de délai universel. Attendez de vous sentir prête et que les saignements et les cicatrices soient apaisés ; la contraception reste nécessaire."),
      faq("Peut-on tomber enceinte en allaitant ?", "Oui : l'allaitement n'est pas une contraception fiable à long terme. Discutez d'une méthode compatible."),
      faq("Combien de temps durent les saignements ?", "Plusieurs semaines en général, en diminuant progressivement. Une reprise brutale ou abondante doit être signalée."),
    ],
    lastUpdated: D,
  },
};
