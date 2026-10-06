import { PageContent, p, ul, ol, h3, note, warn, s, faq } from "@/lib/types";

const D = "2026-10-06";

export const gynecology: Record<string, PageContent> = {
  "gyn-consultation": {
    label: "Consultation gynécologique",
    metaTitle: "Consultation gynécologique : déroulement et préparation",
    metaDescription: "Comment se déroule une consultation gynécologique : questions posées, examen clinique, examens complémentaires et conseils pour bien la préparer.",
    h1: "Consultation gynécologique : comment ça se passe ?",
    summary: "Déroulement, examen clinique et préparation d'une première consultation gynécologique.",
    intro: "La consultation gynécologique est un temps d'écoute et d'examen consacré à la santé de la femme à tous les âges de la vie. Elle peut être motivée par un symptôme, un projet de grossesse, un besoin de contraception ou simplement par un suivi préventif. Cette page explique, de façon générale, ce qui se passe pendant un rendez-vous.",
    sections: [
      s("pourquoi", "Pourquoi consulter un gynécologue ?", [
        p("On consulte pour des raisons très différentes, et il n'est pas nécessaire d'avoir un problème pour prendre rendez-vous :"),
        ul([
          "un suivi régulier de prévention, voir la [[gyn-routine|consultation de routine]] ;",
          "le choix ou le renouvellement d'une [[gyn-contraception|contraception]] ;",
          "des règles douloureuses, abondantes ou irrégulières ([[gyn-cycle|troubles du cycle menstruel]]) ;",
          "des pertes, des démangeaisons ou une gêne ([[gyn-infections|infections gynécologiques]]) ;",
          "un projet de grossesse ou une grossesse débutante ;",
          "des symptômes autour de la [[gyn-menopause|ménopause]].",
        ]),
      ]),
      s("deroulement", "Le déroulement d'une consultation", [
        h3("1. L'entretien"),
        p("Le médecin commence par vous écouter : motif de la consultation, histoire des règles, antécédents médicaux et chirurgicaux, traitements en cours, antécédents familiaux, éventuelles grossesses. Ces informations sont confidentielles et couvertes par le secret médical."),
        h3("2. L'examen clinique"),
        p("Selon le motif, l'examen peut comprendre une prise de la tension et du poids, un examen des seins, un examen pelvien avec spéculum et/ou un toucher vaginal. Chaque geste est expliqué, et vous pouvez demander à tout moment de ralentir ou d'arrêter l'examen."),
        h3("3. Les examens complémentaires"),
        p("Si nécessaire, le médecin peut proposer une [[echo-gyn|échographie gynécologique]], un [[gyn-smear|frottis cervico-utérin]], des prélèvements pour rechercher une infection ou un bilan sanguin. Tous ces examens ne sont pas systématiques."),
        h3("4. La conclusion"),
        p("La consultation se termine par une synthèse : explication des résultats, éventuelle prescription, conseils et date du prochain suivi."),
      ]),
      s("preparer", "Bien préparer son rendez-vous", [
        ul([
          "Notez la date du premier jour de vos dernières règles et la durée habituelle de votre cycle.",
          "Listez vos symptômes : depuis quand, à quelle fréquence, ce qui les aggrave ou les soulage.",
          "Apportez vos anciens examens (échographies, frottis, analyses) et la liste de vos médicaments.",
          "Préparez vos questions, par écrit si c'est plus simple.",
        ]),
        note("Il est possible de consulter pendant les règles, mais un frottis est en général plus facile à interpréter en dehors de celles-ci. Si vous avez un doute, demandez conseil lors de la prise de rendez-vous."),
      ]),
      s("quand", "Quand ne pas attendre ?", [
        p("Certaines situations justifient une consultation rapide : douleur pelvienne intense, saignement abondant ou en dehors des règles, saignement après la ménopause, fièvre avec douleur pelvienne, ou retard de règles avec douleur. En cas de douleur très forte ou de malaise, appelez les urgences (SAMU : 190)."),
      ]),
    ],
    faq: [
      faq("Faut-il être en couple ou avoir des rapports pour consulter ?", "Non. Une consultation gynécologique est utile à tout âge et quelle que soit la situation personnelle : suivi du cycle, prévention, contraception ou questions sur la puberté ou la ménopause."),
      faq("L'examen est-il douloureux ?", "L'examen n'est normalement pas douloureux, mais il peut être inconfortable. Dites-le au médecin : la position, la taille du spéculum et le rythme peuvent être adaptés."),
      faq("À partir de quel âge consulter pour la première fois ?", "Il n'y a pas d'âge fixe. Une première consultation d'information peut avoir lieu à l'adolescence, notamment pour parler du cycle ou de la contraception, souvent sans examen interne."),
      faq("Peut-on venir accompagnée ?", "Oui, si vous le souhaitez. L'examen lui-même se déroule généralement en tête-à-tête avec le médecin, sauf demande particulière."),
    ],
    lastUpdated: D,
  },

  "gyn-routine": {
    label: "Consultation de routine",
    metaTitle: "Suivi gynécologique de routine : à quelle fréquence ?",
    metaDescription: "Fréquence du suivi gynécologique, examens de prévention (frottis, seins, contraception) et conseils pour un bilan régulier de santé féminine.",
    h1: "Suivi gynécologique de routine : fréquence et contenu",
    summary: "Fréquence conseillée et contenu d'un bilan gynécologique de prévention.",
    intro: "Le suivi gynécologique de routine a pour but de prévenir, dépister et accompagner, même en l'absence de symptôme. La bonne fréquence dépend de l'âge, des antécédents, de la contraception et de l'historique des examens : elle est définie avec votre médecin.",
    sections: [
      s("frequence", "À quelle fréquence consulter ?", [
        p("Il n'existe pas de rythme unique valable pour toutes. À titre indicatif, de nombreuses recommandations internationales proposent un suivi régulier, souvent annuel ou tous les deux à trois ans selon la situation, avec des examens adaptés à chaque âge. Un rendez-vous est utile plus tôt en cas de symptôme, de changement de contraception ou de projet de grossesse."),
        p("Votre médecin ajuste la fréquence selon vos antécédents personnels et familiaux, les résultats de vos précédents dépistages et votre mode de vie."),
      ]),
      s("contenu", "Ce que peut comprendre un bilan de routine", [
        ul([
          "un entretien sur le cycle, la contraception, la sexualité et le bien-être ;",
          "la mesure du poids et de la tension artérielle ;",
          "un examen des seins ;",
          "un examen pelvien, si nécessaire ;",
          "un [[gyn-smear|frottis cervico-utérin]] selon l'âge et les recommandations suivies ;",
          "une [[echo-gyn|échographie pelvienne]] lorsqu'elle est justifiée ;",
          "une mise à jour des vaccinations en lien avec la santé gynécologique, notamment le vaccin contre le HPV selon l'âge.",
        ]),
        p("L'ensemble du [[gyn-screening|dépistage gynécologique]] y est abordé : col de l'utérus, seins, infections sexuellement transmissibles."),
      ]),
      s("age", "Les repères aux différents âges de la vie", [
        h3("Adolescence et jeune adulte"),
        p("Information sur le cycle, la contraception, la prévention des infections et la vaccination."),
        h3("Âge de la fertilité"),
        p("Suivi de la contraception, préparation d'une éventuelle grossesse (acide folique, vaccins, traitements) et dépistages réguliers."),
        h3("Autour de la ménopause"),
        p("Évaluation des symptômes, de la santé osseuse et cardiovasculaire, dépistages adaptés. Voir [[gyn-menopause|la ménopause]]."),
      ]),
    ],
    faq: [
      faq("Doit-on consulter si tout va bien ?", "Oui, c'est précisément l'intérêt d'un suivi de prévention : repérer précocement ce qui ne donne pas de symptômes, comme certaines lésions du col."),
      faq("Faut-il faire un frottis à chaque consultation ?", "Non. Le rythme du frottis dépend de l'âge, des résultats précédents et des recommandations appliquées. Votre médecin vous indique la prochaine échéance."),
      faq("Le suivi continue-t-il après la ménopause ?", "Oui. Certains examens et dépistages restent utiles, et tout saignement après la ménopause doit être signalé sans attendre."),
    ],
    lastUpdated: D,
  },

  "gyn-screening": {
    label: "Dépistage gynécologique",
    metaTitle: "Dépistage gynécologique : col de l'utérus, seins, IST",
    metaDescription: "Les principaux dépistages en santé féminine : cancer du col de l'utérus, cancer du sein et infections sexuellement transmissibles. Repères et démarche.",
    h1: "Dépistage gynécologique : ce qu'il faut savoir",
    summary: "Les principaux dépistages de santé féminine : col de l'utérus, seins, infections.",
    intro: "Dépister, c'est rechercher une anomalie avant l'apparition de symptômes afin de la prendre en charge plus tôt. En santé féminine, trois domaines reviennent régulièrement : le col de l'utérus, le sein et les infections sexuellement transmissibles (IST).",
    sections: [
      s("col", "Dépistage des lésions du col de l'utérus", [
        p("Le cancer du col de l'utérus est dans la grande majorité des cas lié à une infection persistante par certains papillomavirus humains (HPV). Il évolue lentement, ce qui permet de repérer des lésions précancéreuses grâce à un prélèvement du col : le [[gyn-smear|frottis cervico-utérin]] et/ou la recherche de HPV, selon l'âge et les recommandations. La vaccination contre le HPV, proposée selon l'âge, complète cette prévention sans remplacer le dépistage."),
      ]),
      s("sein", "Dépistage et surveillance du sein", [
        p("L'examen clinique des seins fait partie de la consultation. Selon l'âge et les facteurs de risque personnels et familiaux, le médecin peut recommander une mammographie et/ou une échographie mammaire. Une masse, un écoulement, une modification de la peau ou du mamelon doivent conduire à consulter sans attendre le prochain rendez-vous."),
      ]),
      s("ist", "Dépistage des infections sexuellement transmissibles", [
        p("Certaines IST (chlamydia, gonocoque, syphilis, VIH, hépatites) peuvent être silencieuses. Un dépistage est proposé selon la situation : nouveau partenaire, partenaires multiples, symptômes, projet de grossesse. Il se fait par prélèvement local, analyse d'urine ou prise de sang. Voir aussi les [[gyn-infections|infections gynécologiques]]."),
      ]),
      s("demarche", "Comment se déroule la démarche ?", [
        ol([
          "Un entretien permet d'évaluer vos facteurs de risque.",
          "Le médecin propose les examens adaptés à votre âge et à votre situation.",
          "Les résultats vous sont expliqués ; en cas d'anomalie, un contrôle ou un examen complémentaire est organisé.",
          "La date du prochain dépistage est fixée.",
        ]),
        note("Un résultat anormal ne signifie pas forcément cancer : il conduit le plus souvent à un contrôle ou à un examen plus précis."),
      ]),
    ],
    faq: [
      faq("Le dépistage est-il utile sans symptôme ?", "Oui. Son objectif est justement de détecter des anomalies avant qu'elles ne provoquent des symptômes."),
      faq("Le vaccin HPV dispense-t-il du frottis ?", "Non. Le vaccin ne protège pas contre tous les types de HPV : le dépistage reste recommandé même chez les femmes vaccinées."),
      faq("À quelle fréquence se faire dépister ?", "Elle dépend de l'âge, des résultats antérieurs et des recommandations. Elle se décide avec votre médecin lors du [[gyn-routine|suivi de routine]]."),
    ],
    lastUpdated: D,
  },

  "gyn-smear": {
    label: "Frottis cervico-utérin",
    metaTitle: "Frottis cervico-utérin : déroulement et résultats",
    metaDescription: "Qu'est-ce qu'un frottis cervico-utérin ? Déroulement, préparation, fréquence, interprétation des résultats et suites en cas d'anomalie.",
    h1: "Frottis cervico-utérin : déroulement, préparation et résultats",
    summary: "Le frottis du col : à quoi il sert, comment il se passe et comment comprendre les résultats.",
    intro: "Le frottis cervico-utérin est un prélèvement de cellules du col de l'utérus réalisé lors d'un examen gynécologique. Il permet de repérer des anomalies cellulaires avant qu'elles n'évoluent, et fait partie du [[gyn-screening|dépistage gynécologique]].",
    sections: [
      s("pourquoi", "À quoi sert le frottis ?", [
        p("Il recherche des modifications des cellules du col pouvant précéder un cancer, le plus souvent causées par une infection persistante à HPV. Il ne diagnostique pas toutes les maladies gynécologiques : il n'explore ni l'utérus ni les ovaires (pour cela, voir l'[[echo-gyn|échographie gynécologique]]). Il est proposé dans le cadre du [[gyn-routine|suivi gynécologique de routine]]."),
      ]),
      s("deroulement", "Comment se passe l'examen ?", [
        ol([
          "Vous êtes installée sur la table d'examen.",
          "Le médecin place un spéculum pour visualiser le col.",
          "Un prélèvement est réalisé à l'aide d'une petite brosse ou d'une spatule, en quelques secondes.",
          "Le prélèvement est envoyé au laboratoire pour analyse.",
        ]),
        p("L'examen est bref. Il peut provoquer une gêne ou de légères crampes, rarement une douleur. De petits saignements dans les heures qui suivent sont possibles."),
      ]),
      s("preparation", "Comment se préparer ?", [
        ul([
          "Évitez si possible de le faire pendant les règles.",
          "Évitez les rapports sexuels, les ovules, crèmes ou douches vaginales dans les 24 à 48 heures qui précèdent, sauf avis contraire du médecin.",
          "Signalez un traitement en cours, une grossesse possible ou des saignements inhabituels.",
        ]),
      ]),
      s("resultats", "Comprendre les résultats", [
        p("Le compte rendu indique si les cellules sont normales ou non. En cas d'anomalie, plusieurs situations existent, de la simple surveillance au contrôle complémentaire (recherche de HPV, colposcopie avec éventuelle biopsie). Seul votre médecin peut interpréter le résultat dans votre contexte."),
        warn("Un frottis anormal n'est pas un diagnostic de cancer. Ne reportez pas le suivi proposé par votre médecin."),
      ]),
    ],
    faq: [
      faq("Le frottis fait-il mal ?", "Il est généralement bref et supportable ; une gêne est possible. Parlez-en au médecin pour que l'examen soit adapté."),
      faq("À quelle fréquence faire un frottis ?", "L'intervalle dépend de l'âge, des résultats précédents et des recommandations suivies. Votre médecin vous indiquera la prochaine date."),
      faq("Peut-on faire un frottis enceinte ?", "Le frottis peut être réalisé pendant la grossesse si nécessaire, avec les précautions habituelles. Le médecin décide du moment opportun."),
      faq("Quand récupère-t-on les résultats ?", "Le délai dépend du laboratoire. Votre médecin vous précise comment et quand obtenir le résultat."),
    ],
    lastUpdated: D,
  },

  "gyn-cycle": {
    label: "Troubles du cycle menstruel",
    metaTitle: "Troubles du cycle menstruel : causes et quand consulter",
    metaDescription: "Règles absentes, irrégulières, abondantes ou douloureuses : vue d'ensemble des troubles du cycle menstruel, des causes possibles et de la démarche médicale.",
    h1: "Troubles du cycle menstruel : comprendre et savoir quand consulter",
    summary: "Règles irrégulières, abondantes, douloureuses ou absentes : repères et démarche.",
    intro: "Le cycle menstruel varie d'une femme à l'autre et au fil de la vie. Certaines variations sont banales, d'autres méritent un avis médical. Cette page offre une vue d'ensemble ; des pages dédiées détaillent les [[gyn-irregular|règles irrégulières]] et les [[gyn-painful-periods|règles douloureuses]].",
    sections: [
      s("normal", "Qu'est-ce qu'un cycle « normal » ?", [
        p("On compte le cycle du premier jour des règles au premier jour des règles suivantes. Chez l'adulte, il dure le plus souvent entre 21 et 35 jours, avec des règles de 2 à 7 jours environ. Chez l'adolescente, le cycle peut rester irrégulier pendant les premières années."),
      ]),
      s("types", "Les principaux types de troubles", [
        ul([
          "**Règles irrégulières** ou cycles trop courts ou trop longs : voir [[gyn-irregular|règles irrégulières]] ;",
          "**Absence de règles** (aménorrhée), après une grossesse, un stress intense, une perte de poids, ou en cas de déséquilibre hormonal ;",
          "**Règles abondantes ou prolongées** (ménorragies), parfois liées à un fibrome ou à un déséquilibre hormonal ;",
          "**Saignements entre les règles** ou après les rapports ;",
          "**Règles douloureuses** : voir [[gyn-painful-periods|règles douloureuses]].",
        ]),
      ]),
      s("causes", "Causes possibles", [
        p("Elles sont variées : grossesse, allaitement, stress, variations de poids, sport intensif, troubles de la thyroïde, [[cond-pcos|syndrome des ovaires polykystiques]], [[cond-fibroid|fibrome utérin]], polype, contraception, préménopause. Une cause précise ne peut être identifiée qu'après examen."),
      ]),
      s("consulter", "Quand consulter ?", [
        ul([
          "absence de règles de plus de trois mois alors que vous n'êtes pas enceinte ;",
          "règles très abondantes (changer de protection toutes les heures), caillots, fatigue ou pâleur ;",
          "douleurs qui vous empêchent de mener vos activités ;",
          "saignements après les rapports, entre les règles ou après la ménopause ;",
          "cycles qui changent brutalement.",
        ]),
      ]),
      s("diagnostic", "Comment se déroule l'évaluation ?", [
        p("Le médecin analyse votre calendrier menstruel, réalise un examen clinique et peut demander une [[echo-gyn|échographie pelvienne]], un test de grossesse et un bilan sanguin (hormones, thyroïde, fer). Le traitement dépend de la cause identifiée."),
      ]),
    ],
    faq: [
      faq("Un retard de règles est-il toujours grave ?", "Non. Il peut être lié au stress, à un changement de rythme ou de poids. Une grossesse doit d'abord être écartée ; si les retards se répètent, consultez."),
      faq("Faut-il noter ses cycles ?", "Oui, un calendrier (dates, abondance, douleurs) aide beaucoup le diagnostic. Des applications ou un simple agenda suffisent."),
      faq("Les troubles du cycle empêchent-ils d'avoir un enfant ?", "Pas nécessairement. Certaines causes peuvent toutefois influer sur l'ovulation ; voir les [[fert-ovulation|troubles de l'ovulation]]."),
    ],
    lastUpdated: D,
  },

  "gyn-irregular": {
    label: "Règles irrégulières",
    metaTitle: "Règles irrégulières : causes, bilan et conseils",
    metaDescription: "Pourquoi les règles sont-elles irrégulières ? Causes fréquentes (SOPK, stress, thyroïde, préménopause), bilan médical et signes d'alerte.",
    h1: "Règles irrégulières : causes possibles et conduite à tenir",
    summary: "Causes fréquentes des cycles irréguliers et démarche d'évaluation.",
    intro: "On parle de règles irrégulières lorsque la durée du cycle varie beaucoup d'un mois à l'autre, ou lorsque les règles surviennent trop rarement ou trop souvent. C'est un motif fréquent de consultation, souvent bénin mais parfois révélateur d'un trouble hormonal. Elle fait partie des [[gyn-cycle|troubles du cycle menstruel]].",
    sections: [
      s("definition", "De quoi parle-t-on ?", [
        p("Un cycle est généralement considéré comme irrégulier si sa durée dépasse régulièrement la plage habituelle (environ 21 à 35 jours chez l'adulte) ou varie fortement d'un cycle à l'autre. Les premières années après la puberté et la période de préménopause sont physiologiquement plus irrégulières."),
      ]),
      s("causes", "Causes possibles", [
        ul([
          "**Syndrome des ovaires polykystiques** : première cause d'ovulation irrégulière chez la femme jeune, voir [[cond-pcos|SOPK]] ;",
          "**Troubles de la thyroïde** ou élévation de la prolactine ;",
          "**Stress, perte ou prise de poids importante**, troubles alimentaires, sport très intensif ;",
          "**Contraception hormonale** (début, arrêt ou changement) ;",
          "**Allaitement** et post-partum ;",
          "**Préménopause**, voir [[gyn-menopause|ménopause]] ;",
          "**Grossesse**, à toujours évoquer en cas de retard.",
        ]),
      ]),
      s("bilan", "Comment explorer des règles irrégulières ?", [
        p("L'évaluation débute par un entretien et un examen clinique. Le médecin peut demander un test de grossesse, une [[echo-gyn|échographie pelvienne]] et des dosages hormonaux et thyroïdiens. L'objectif est d'identifier la cause et, si vous souhaitez une grossesse, de vérifier que l'ovulation a lieu (voir [[fert-ovulation|troubles de l'ovulation]])."),
      ]),
      s("conseils", "Que faire en attendant la consultation ?", [
        ul([
          "Tenez un calendrier précis de vos règles.",
          "Notez les symptômes associés : acné, pilosité, prise de poids, bouffées de chaleur, écoulement mammaire.",
          "Évitez l'automédication hormonale sans avis médical.",
        ]),
      ]),
    ],
    faq: [
      faq("Combien de jours de retard avant de s'inquiéter ?", "Un test de grossesse est conseillé dès un retard. Si les retards sont répétés ou dépassent plusieurs mois, consultez."),
      faq("Les règles irrégulières traduisent-elles une infertilité ?", "Elles peuvent signaler une ovulation irrégulière, ce qui peut compliquer l'obtention d'une grossesse, mais de nombreuses femmes concernées obtiennent une grossesse avec un suivi adapté."),
      faq("La pilule « régularise-t-elle » le cycle ?", "La contraception hormonale provoque des saignements réguliers mais ne traite pas la cause d'un trouble sous-jacent. Un bilan reste utile."),
    ],
    lastUpdated: D,
  },

  "gyn-painful-periods": {
    label: "Règles douloureuses",
    metaTitle: "Règles douloureuses (dysménorrhée) : causes et prise en charge",
    metaDescription: "Règles douloureuses : douleur normale ou signe d'alerte ? Causes possibles dont l'endométriose, examens, solutions et moment pour consulter.",
    h1: "Règles douloureuses (dysménorrhée) : quand faut-il s'inquiéter ?",
    summary: "Distinguer des règles douloureuses banales d'une cause à rechercher, comme l'endométriose.",
    intro: "Une douleur modérée pendant les règles est fréquente. En revanche, une douleur qui limite les activités, qui s'aggrave avec le temps ou qui résiste aux antalgiques usuels ne doit pas être banalisée. Elle appartient aux [[gyn-cycle|troubles du cycle menstruel]].",
    sections: [
      s("types", "Deux grandes situations", [
        ul([
          "**Dysménorrhée primaire** : douleurs apparues dans les premières années des règles, sans anomalie de l'utérus ou des ovaires. Elle est liée à des contractions de l'utérus et tend à s'atténuer avec l'âge ou après un accouchement.",
          "**Dysménorrhée secondaire** : douleurs liées à une cause identifiable comme l'[[cond-endometriosis|endométriose]], l'adénomyose, un [[cond-fibroid|fibrome]] ou une infection pelvienne.",
        ]),
      ]),
      s("signes", "Signes qui doivent conduire à consulter", [
        ul([
          "douleurs qui empêchent d'aller à l'école, au travail ou de mener ses activités ;",
          "douleurs de plus en plus fortes d'un cycle à l'autre ;",
          "douleurs pendant les rapports ou pour aller à la selle ou uriner pendant les règles ;",
          "règles très abondantes ;",
          "difficultés à obtenir une grossesse.",
        ]),
        p("Ces éléments orientent notamment vers une endométriose, dont le diagnostic est souvent tardif lorsque les douleurs sont considérées comme « normales »."),
      ]),
      s("bilan", "Évaluation médicale", [
        p("Elle repose sur l'entretien et l'examen clinique, complétés si besoin par une [[echo-gyn|échographie pelvienne]] et parfois une IRM. Voir aussi les [[gyn-pelvic-pain|douleurs pelviennes]] en dehors des règles."),
      ]),
      s("soulager", "Ce qui peut aider", [
        p("Chaleur locale, activité physique régulière et antalgiques ou anti-inflammatoires adaptés peuvent soulager, après avis d'un médecin ou d'un pharmacien selon vos antécédents. Une contraception hormonale peut également être discutée en consultation si elle vous convient."),
      ]),
    ],
    faq: [
      faq("Est-il normal d'avoir mal à chaque règle ?", "Une gêne modérée est fréquente. Une douleur intense ou invalidante n'est pas à considérer comme normale et mérite une évaluation."),
      faq("Les règles douloureuses signifient-elles une endométriose ?", "Pas toujours. Beaucoup de douleurs sont sans cause organique, mais l'endométriose fait partie des causes à rechercher en cas de douleurs sévères ou croissantes."),
      faq("Peut-on prendre des antalgiques à chaque cycle ?", "Demandez l'avis d'un professionnel de santé : les produits, doses et durée doivent être adaptés à votre situation."),
    ],
    lastUpdated: D,
  },

  "gyn-pelvic-pain": {
    label: "Douleurs pelviennes",
    metaTitle: "Douleurs pelviennes chez la femme : causes et quand consulter",
    metaDescription: "Douleurs pelviennes : principales causes gynécologiques et non gynécologiques, signes d'urgence, examens (échographie) et prise en charge.",
    h1: "Douleurs pelviennes chez la femme : causes et conduite à tenir",
    summary: "Causes possibles, signes d'alerte et examens des douleurs du bas-ventre.",
    intro: "Les douleurs pelviennes sont ressenties dans le bas du ventre. Aiguës ou chroniques, elles ont des causes très diverses, gynécologiques, urinaires ou digestives. Un examen médical permet de les distinguer.",
    sections: [
      s("quest", "Qu'est-ce qu'une douleur pelvienne ?", [
        p("Il s'agit d'une douleur située sous le nombril, parfois irradiant vers le dos ou les cuisses. On parle de douleur **aiguë** lorsqu'elle survient brutalement ou depuis quelques jours, et de douleur **chronique** lorsqu'elle persiste depuis plusieurs mois."),
      ]),
      s("symptomes", "Symptômes associés à rechercher", [
        ul([
          "fièvre ou pertes vaginales inhabituelles ;",
          "saignements anormaux ;",
          "douleurs pendant les rapports ;",
          "troubles urinaires ou digestifs ;",
          "retard de règles.",
        ]),
      ]),
      s("causes", "Causes possibles", [
        ul([
          "**Gynécologiques** : [[cond-endometriosis|endométriose]], [[cond-ovarian-cyst|kyste ovarien]], [[cond-fibroid|fibrome utérin]], [[gyn-infections|infection pelvienne]], douleurs de l'ovulation, règles douloureuses ;",
          "**Liées à la grossesse** : grossesse extra-utérine, fausse couche ;",
          "**Urinaires** : cystite, calcul urinaire ;",
          "**Digestives** : constipation, colopathie, appendicite.",
        ]),
      ]),
      s("urgence", "Quand consulter en urgence ?", [
        warn("Consultez en urgence en cas de douleur brutale et intense, de malaise, de fièvre élevée, de vomissements, de saignement important, ou de douleur avec retard de règles ou grossesse possible. En Tunisie, le SAMU est joignable au 190.", "Signes d'alerte"),
      ]),
      s("bilan", "Comment se déroule le bilan ?", [
        p("Le médecin interroge sur la douleur (début, intensité, lien avec les règles), examine l'abdomen et le pelvis, puis peut prescrire une [[echo-gyn|échographie gynécologique]], des prélèvements ou un bilan sanguin. D'autres examens, comme l'IRM, sont proposés au cas par cas. La prise en charge dépend de la cause et fait l'objet d'un suivi."),
      ]),
    ],
    faq: [
      faq("Une douleur pelvienne peut-elle disparaître seule ?", "Certaines oui, comme les douleurs d'ovulation, mais une douleur persistante, répétée ou intense nécessite une évaluation."),
      faq("L'échographie suffit-elle toujours à trouver la cause ?", "Elle apporte beaucoup d'informations mais n'est pas toujours suffisante : une IRM ou d'autres examens peuvent être demandés."),
      faq("Une douleur pelvienne peut-elle être liée au stress ?", "Le stress peut aggraver les douleurs, mais une cause organique doit toujours être recherchée d'abord."),
    ],
    lastUpdated: D,
  },

  "gyn-menopause": {
    label: "Ménopause",
    metaTitle: "Ménopause : symptômes, suivi et traitements",
    metaDescription: "La ménopause expliquée : âge, symptômes (bouffées de chaleur, troubles du sommeil), suivi médical, santé osseuse et options pour soulager les troubles.",
    h1: "Ménopause : symptômes, suivi médical et options",
    summary: "Symptômes, suivi et solutions possibles pendant la périménopause et la ménopause.",
    intro: "La ménopause correspond à l'arrêt définitif des règles, constaté après douze mois sans règles. Elle survient en moyenne autour de 50 ans. Cette transition naturelle s'accompagne parfois de symptômes gênants qu'un suivi médical peut soulager.",
    sections: [
      s("quest", "Périménopause et ménopause", [
        p("La **périménopause** est la période qui précède la ménopause : les cycles deviennent irréguliers (voir [[gyn-irregular|règles irrégulières]]) et les premiers symptômes peuvent apparaître. La **ménopause** est confirmée lorsque les règles ont disparu depuis un an. Elle est due à l'épuisement progressif de la réserve ovarienne et à la baisse des hormones œstrogènes."),
      ]),
      s("symptomes", "Symptômes fréquents", [
        ul([
          "bouffées de chaleur et sueurs nocturnes ;",
          "troubles du sommeil, fatigue, irritabilité, variations de l'humeur ;",
          "sécheresse vaginale, gêne pendant les rapports, troubles urinaires ;",
          "baisse de la libido ;",
          "douleurs articulaires, modifications de la peau.",
        ]),
        p("Leur intensité varie beaucoup : certaines femmes sont peu gênées, d'autres le sont fortement."),
      ]),
      s("sante", "Suivi et santé à long terme", [
        p("La baisse des œstrogènes influence la santé des os (risque d'ostéoporose) et du système cardiovasculaire. Le suivi consiste à évaluer vos symptômes et vos facteurs de risque, à poursuivre les [[gyn-screening|dépistages]] adaptés (col, sein) et à donner des conseils : alimentation, activité physique, arrêt du tabac, apport en calcium et vitamine D selon les besoins."),
      ]),
      s("options", "Quelles solutions ?", [
        p("Elles sont individualisées : mesures hygiéno-diététiques, traitements non hormonaux, soins locaux contre la sécheresse vaginale, et pour certaines femmes un traitement hormonal de la ménopause. Ce dernier se discute avec votre médecin en pesant bénéfices et risques selon vos antécédents."),
      ]),
      s("alerte", "À signaler sans attendre", [
        warn("Tout saignement vaginal après la ménopause doit faire l'objet d'une consultation rapide."),
      ]),
    ],
    faq: [
      faq("À quel âge survient la ménopause ?", "En moyenne vers 50 ans, avec des variations individuelles importantes. Une ménopause avant 40 ans est dite prématurée et justifie un bilan."),
      faq("Faut-il encore une contraception en périménopause ?", "Une grossesse reste possible tant que la ménopause n'est pas confirmée. Parlez de [[gyn-contraception|contraception]] avec votre médecin."),
      faq("Le traitement hormonal est-il pour toutes les femmes ?", "Non. Il dépend des symptômes, de l'âge, des antécédents personnels et familiaux. La décision est prise après discussion avec le médecin."),
      faq("Peut-on avoir une grossesse naturelle après 45 ans ?", "C'est rare mais possible tant que l'ovulation persiste. La fertilité diminue fortement avec l'âge."),
    ],
    lastUpdated: D,
  },

  "gyn-contraception": {
    label: "Contraception",
    metaTitle: "Contraception : méthodes, avantages et choix médical",
    metaDescription: "Panorama des méthodes de contraception (pilule, stérilet, implant, préservatif…), critères de choix et conseils pour en discuter en consultation.",
    h1: "Contraception : panorama des méthodes et comment choisir",
    summary: "Les grandes méthodes de contraception et les critères pour choisir avec son médecin.",
    intro: "Il n'existe pas de contraception « idéale » universelle : la meilleure méthode est celle qui convient à votre santé, à votre mode de vie et à vos préférences, et qui peut être utilisée correctement. Cette page présente les grandes familles de méthodes à titre d'information.",
    sections: [
      s("methodes", "Les grandes familles de contraceptifs", [
        ul([
          "**Hormonales** : pilule (œstroprogestative ou progestative), implant, patch, anneau vaginal, injection ;",
          "**Dispositifs intra-utérins (stérilets)** : au cuivre (non hormonal) ou hormonal ;",
          "**Méthodes barrières** : préservatif masculin ou féminin, qui protège aussi contre les IST ;",
          "**Méthodes naturelles** : suivi de la fertilité, moins fiables en pratique ;",
          "**Contraception définitive** : stérilisation, à envisager après réflexion et information complète ;",
          "**Contraception d'urgence** : à utiliser après un rapport non protégé, le plus tôt possible.",
        ]),
      ]),
      s("choisir", "Comment choisir ?", [
        p("Plusieurs éléments entrent en compte :"),
        ul([
          "votre état de santé et vos antécédents (migraine, hypertension, thromboses, tabagisme…) ;",
          "l'efficacité attendue et la facilité d'utilisation (oublis possibles) ;",
          "vos projets de grossesse à court ou long terme ;",
          "les effets secondaires possibles et votre tolérance ;",
          "la nécessité d'une protection contre les IST.",
        ]),
      ]),
      s("consult", "En parler en consultation", [
        p("Une consultation de [[gyn-consultation|gynécologie]] permet d'évaluer vos facteurs de risque, d'expliquer les méthodes adaptées, de poser un dispositif ou de prescrire un traitement et de prévoir le suivi. La contraception se réévalue aussi à certains moments clés : après un accouchement ([[preg-postpartum|suivi post-partum]]), à l'approche de la [[gyn-menopause|ménopause]], ou lors d'un changement de situation."),
      ]),
      s("urgence", "Contraception d'urgence", [
        p("Si un rapport a eu lieu sans protection ou si la méthode a échoué (oubli de pilule, préservatif déchiré), une contraception d'urgence peut être utilisée, plus efficacement lorsqu'elle est prise rapidement. Demandez conseil à un pharmacien ou à un médecin sans attendre."),
      ]),
    ],
    faq: [
      faq("Quelle est la contraception la plus efficace ?", "Les méthodes qui ne dépendent pas d'une prise quotidienne (implant, stérilet) ont en pratique les taux d'échec les plus bas, mais le choix doit rester personnalisé."),
      faq("Peut-on tomber enceinte juste après l'arrêt de la pilule ?", "Oui, la fertilité peut revenir rapidement. Si vous ne souhaitez pas de grossesse, il faut relayer par une autre méthode."),
      faq("Le stérilet est-il possible avant une première grossesse ?", "Oui, dans de nombreux cas. L'indication est évaluée en consultation."),
      faq("Une contraception protège-t-elle des IST ?", "Seul le préservatif protège à la fois d'une grossesse et de la plupart des IST."),
    ],
    lastUpdated: D,
  },

  "gyn-infections": {
    label: "Infections gynécologiques",
    metaTitle: "Infections gynécologiques : symptômes, causes, quand consulter",
    metaDescription: "Mycose, vaginose, infections sexuellement transmissibles : principaux symptômes, causes, démarche diagnostique, prévention et signes d'alerte.",
    h1: "Infections gynécologiques : reconnaître les symptômes et consulter",
    summary: "Mycoses, vaginoses, IST : symptômes, démarche de diagnostic et prévention.",
    intro: "Les infections gynécologiques sont fréquentes. Elles touchent le vagin, la vulve, le col de l'utérus ou plus profondément l'utérus et les trompes. Beaucoup sont simples à traiter, mais un diagnostic précis est important : les symptômes de causes différentes se ressemblent.",
    sections: [
      s("types", "Les principales infections", [
        ul([
          "**Mycose vaginale** (candidose) : démangeaisons, brûlures, pertes blanches épaisses ;",
          "**Vaginose bactérienne** : pertes grisâtres, odeur marquée, liée à un déséquilibre de la flore vaginale ;",
          "**Infections sexuellement transmissibles** : chlamydia, gonocoque, trichomonase, herpès, HPV, syphilis, etc. ;",
          "**Infections pelviennes** (salpingite) : douleurs pelviennes, fièvre, pertes, pouvant retentir sur la fertilité si elles ne sont pas traitées ;",
          "**Infections urinaires**, souvent confondues avec une atteinte gynécologique.",
        ]),
      ]),
      s("symptomes", "Symptômes qui doivent alerter", [
        ul([
          "pertes vaginales inhabituelles (couleur, odeur, abondance) ;",
          "démangeaisons, brûlures, douleurs à la miction ou pendant les rapports ;",
          "saignements après les rapports ;",
          "[[gyn-pelvic-pain|douleurs pelviennes]] ou fièvre ;",
          "boutons ou lésions génitales.",
        ]),
        p("Certaines infections ne donnent aucun symptôme, d'où l'intérêt du [[gyn-screening|dépistage]]."),
      ]),
      s("diagnostic", "Diagnostic et traitement", [
        p("Le médecin interroge, examine et réalise souvent un prélèvement vaginal ou cervical (à ne pas confondre avec le [[gyn-smear|frottis de dépistage]]), parfois associé à des analyses d'urine ou de sang. Le traitement dépend du germe : antifongiques, antibiotiques, antiviraux. Il peut être nécessaire de traiter le partenaire. Évitez l'automédication répétée, qui peut masquer ou aggraver le problème."),
      ]),
      s("prevention", "Prévention", [
        ul([
          "préservatif en cas de partenaires multiples ou nouveaux ;",
          "éviter les douches vaginales et les produits d'hygiène intime agressifs ;",
          "vaccination contre le HPV selon l'âge ;",
          "[[gyn-routine|suivi gynécologique]] régulier.",
        ]),
      ]),
    ],
    faq: [
      faq("Une mycose peut-elle être soignée sans ordonnance ?", "Certains traitements sont disponibles en pharmacie, mais en cas de première fois, de récidive ou de doute, il est préférable de consulter pour confirmer le diagnostic."),
      faq("Les infections gynécologiques affectent-elles la fertilité ?", "Certaines infections non traitées, comme celles à chlamydia, peuvent atteindre les trompes. D'où l'importance du dépistage et du traitement précoces."),
      faq("Faut-il traiter le partenaire ?", "Pour les IST et certaines infections récidivantes, oui, c'est souvent nécessaire. Le médecin vous le précisera."),
    ],
    lastUpdated: D,
  },
};
