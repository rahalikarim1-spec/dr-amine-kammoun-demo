import { PageContent, p, ul, s } from "@/lib/types";

const D = "2026-10-06";

export const legal: Record<string, PageContent> = {
  "legal-notice": {
    label: "Mentions légales",
    metaTitle: "Mentions légales",
    metaDescription: "Mentions légales du site du Dr Amine Kammoun, gynécologue-obstétricien à Tunis : éditeur, nature du site, propriété intellectuelle et responsabilité.",
    h1: "Mentions légales",
    summary: "Éditeur du site, propriété intellectuelle et responsabilité.",
    intro: "Ce site est édité par le Dr Amine Kammoun, médecin gynécologue-obstétricien. Les présentes mentions ont pour objet d'informer les visiteurs sur l'éditeur et les conditions d'utilisation du site.",
    sections: [
      s("editeur", "Éditeur du site", [
        p("Dr Amine Kammoun, Gynécologue-Obstétricien, Ain Zaghouan Nord, Tunis, Tunisie. Téléphone : {phone}."),
      ]),
      s("nature", "Nature du site", [
        p("Ce site présente le cabinet et propose des informations médicales générales à visée éducative. Il ne remplace pas une consultation médicale et ne permet pas de poser un diagnostic. En cas d'urgence, contactez le SAMU (190)."),
      ]),
      s("propriete", "Propriété intellectuelle", [
        p("Les textes, images et éléments graphiques du site sont protégés. Toute reproduction sans autorisation écrite préalable est interdite, sauf courte citation avec mention de la source."),
      ]),
      s("responsabilite", "Responsabilité", [
        p("Le site s'efforce de fournir des informations exactes et à jour, sans garantie d'exhaustivité. L'éditeur ne peut être tenu responsable d'une utilisation des informations sans avis médical. Les liens vers des sites tiers sont fournis à titre d'information : leur contenu n'engage pas l'éditeur."),
      ]),
      s("donnees", "Données personnelles et cookies", [
        p("Le traitement des données personnelles est décrit dans la [[privacy|politique de confidentialité]] et la [[cookies|politique de cookies]]."),
      ]),
      s("droit", "Droit applicable", [
        p("Le site est soumis au droit tunisien. Pour toute question, contactez-nous via la page [[contact|contact]]."),
      ]),
    ],
    lastUpdated: D,
  },

  privacy: {
    label: "Politique de confidentialité",
    metaTitle: "Politique de confidentialité",
    metaDescription: "Politique de confidentialité du site du Dr Amine Kammoun : données collectées via le formulaire de contact, mesure d'audience, droits des personnes et contact.",
    h1: "Politique de confidentialité",
    summary: "Données collectées, finalités et droits des visiteurs.",
    intro: "Le respect de votre vie privée est essentiel, en particulier dans le domaine de la santé. Cette page décrit les données que ce site peut collecter et l'usage qui en est fait.",
    sections: [
      s("donnees", "Données collectées", [
        ul([
          "**Formulaire de contact** : nom, numéro de téléphone, motif général, message éventuel et heure de rappel souhaitée ;",
          "**Mesure d'audience** (uniquement si vous l'acceptez) : pages consultées, appareil, origine de la visite, en vue d'améliorer le site.",
        ]),
        p("Ne transmettez pas d'informations médicales détaillées via le formulaire : pour une question de santé, appelez le cabinet."),
      ]),
      s("finalites", "Finalités", [
        p("Les données du formulaire servent uniquement à répondre à votre demande de contact. Les données de mesure d'audience servent à comprendre l'usage du site de façon agrégée."),
      ]),
      s("conservation", "Conservation et partage", [
        p("Les données sont conservées uniquement le temps nécessaire au traitement de votre demande. Elles ne sont pas vendues. Elles peuvent être traitées par les prestataires techniques nécessaires au fonctionnement du site, dans le respect de la législation applicable."),
      ]),
      s("droits", "Vos droits", [
        p("Conformément à la législation tunisienne sur la protection des données personnelles, vous disposez d'un droit d'accès, de rectification et d'opposition. Pour l'exercer, contactez le cabinet via la page [[contact|contact]]."),
      ]),
      s("cookies", "Cookies", [
        p("Voir la [[cookies|politique de cookies]]."),
      ]),
    ],
    lastUpdated: D,
  },

  cookies: {
    label: "Politique de cookies",
    metaTitle: "Politique de cookies",
    metaDescription: "Politique de cookies du site du Dr Amine Kammoun : cookies strictement nécessaires, mesure d'audience soumise à votre consentement et gestion de vos choix.",
    h1: "Politique de cookies",
    summary: "Cookies utilisés et gestion de vos choix.",
    intro: "Un cookie est un petit fichier déposé sur votre appareil. Ce site limite leur usage au strict nécessaire et vous laisse le choix pour la mesure d'audience.",
    sections: [
      s("necessaires", "Cookies et stockage nécessaires", [
        p("Votre choix de consentement est mémorisé dans le stockage de votre navigateur afin de ne pas vous interroger à chaque visite. Ce stockage est nécessaire au fonctionnement du site."),
      ]),
      s("audience", "Mesure d'audience", [
        p("Si vous l'acceptez, des outils de mesure d'audience (Google Analytics, via Google Tag Manager) peuvent être activés pour comprendre l'usage du site. Sans consentement, aucun cookie de mesure n'est déposé."),
      ]),
      s("gerer", "Gérer vos choix", [
        p("Vous pouvez modifier votre choix à tout moment avec le lien « Gérer les cookies » en bas de page, ou via les réglages de votre navigateur."),
      ]),
      s("plus", "En savoir plus", [
        p("Voir la [[privacy|politique de confidentialité]] et les [[legal-notice|mentions légales]]."),
      ]),
    ],
    lastUpdated: D,
  },
};
