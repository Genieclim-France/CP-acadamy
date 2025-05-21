export interface Formation {
  surTitle: string;
  title: string;
  subTitle?: string;
  description: string[];
  firstPart: {
    title: string;
    description: string[];
    list: string[];
  };
  secondPart: {
    title: string;
    description: string[];
  };
  secondSectionTitle: string;
  learningCard: string[];
  prerequis: {
    description: string;
    level: string;
  }[];
  brochure: {
    path: string;
    fileName: string;
  };
  image?: string;
  price?: string;
  duration?: string;
  formationDuration: {
    title: string;
    description: string;
    points: string[];
    lastPoint: string;
  }[];
  thumbnail?: string;
  cards?: string;
}

export interface Formations {
  [key: string]: Formation;
}

export const formations: Formations = {
  browlift: {
    surTitle: "Création / Développement d'entreprise",
    subTitle: "& Techniques professionnelles :",
    title: "Browlift & Rehaussement de cils",
    description: [
      "La formation se structure en deux parties complémentaires, conçues pour accompagner les participants dans leur développement professionnel et technique dans le domaine du Browlift & du rehaussement de cils.",
    ],
    firstPart: {
      title:
        "Partie 1 – Création et gestion d'entreprise, communication, management",
      description: [
        "Cette première phase vise à fournir aux participants les compétences essentielles pour lancer et structurer leur activité professionnelle.",
        " À l'issue de cette partie, le stagiaire sera capable de :",
      ],
      list: [
        "Élaborer un projet de création ou de développement d'entreprise;",
        "Mettre en place une stratégie de communication adaptée;",
        "Comprendre les bases du management d'une petite structure.",
      ],
    },
    secondPart: {
      title: "Partie 2 – Techniques du Browlift & Rehaussement de cils",
      description: [
        "La seconde partie est dédiée à l'apprentissage pratique et théorique des prestations esthétiques. Le stagiaire y apprend les protocoles complets du Browlift et du Rehaussement de cils, dans le respect des normes d'hygiène, de sécurité et de satisfaction client.",
        "Cette formation vise à rendre le stagiaire opérationnel, autonome et professionnellement crédible à la fois dans la gestion de son activité et la réalisation des prestations proposées.",
      ],
    },
    secondSectionTitle: "Maîtrise l'art du browlift",
    learningCard: [
      "Protocoles du browlift étape par étape",
      "Choix des produits et matériel professionnel",
      "Application de la teinture et restructuration",
      "Conseils d’entretien pour une tenue optimale",
      "Fidélisation et satisfaction client",
    ],
    prerequis: [
      {
        description:
          "Un entretien ou un test de positionnement peut être proposé afin de vérifier l’adéquation entre le profil du bénéficiaire et les exigences de la formation. La personne concernée doit être majeur à l’entrée de la formation.",
        level: "Aucun",
      },
    ],
    formationDuration: [
      {
        title: "Durée de la formation",
        description: "La formation se déroule sur une durée totale de 2 jours.",
        points: [
          "Partie 1 - Création d’entreprise, communication et management : 1 Jour",
          "Partie 2 - Browlift & Rehaussement de cils : 1 Jour",
        ],
        lastPoint:
          "Les horaires de formation sont fixés de 9h00 à 12h30 et de 13h30 à 17h00.",
      },
    ],
    brochure: {
      path: "/brochures/programme-formation-browlift.pdf",
      fileName: "programme-formation-browlift.pdf",
    },
    image: "/assets/browlift.png",
    duration: "2 jours",
    price: "1600€",
    thumbnail: "/assets/thumbnails-browlift.png",
    cards:
      "Maîtrisez les techniques tendance du browlift et du rehaussement de cils grâce à notre formation certifiée. Apprenez à sublimer le regard de vos clientes avec des gestes professionnels, sûrs et durables.",
  },
  botox: {
    surTitle: "Création / Développement d'entreprise",
    subTitle: "& Techniques professionnelles :",
    title: "Soin capillaire au Botox",
    description: [
      "La formation se structure en deux parties complémentaires, conçues pour accompagner les participants dans leur développement professionnel et technique dans le domaine de la création d'entreprise & du soin capillaire au botox.",
    ],
    firstPart: {
      title:
        "Partie 1 – Création et gestion d’entreprise, communication, management",
      description: [
        "Cette première phase vise à fournir aux participants les compétences essentielles pour lancer et structurer leur activité professionnelle.",
        " À l'issue de cette partie, le stagiaire sera capable de :",
      ],
      list: [
        "Élaborer un projet de création ou de développement d'entreprise;",
        "Mettre en place une stratégie de communication adaptée;",
        "Comprendre les bases du management d'une petite structure.",
      ],
    },
    secondPart: {
      title: "Partie 2 – Techniques du Soin capillaire au Botox",
      description: [
        "La seconde partie est dédiée à l’acquisition des savoir-faire techniques liés au soin capillaire au Botox, dans le respect des normes d’hygiène, de sécurité et de satisfaction client.",
        "Cette formation vise à rendre le stagiaire opérationnel, autonome et professionnellement crédible à la fois dans la gestion de son activité et la réalisation des prestations proposées.",
      ],
    },
    brochure: {
      path: "/brochures/programme-formation-botox.pdf",
      fileName: "programme-formation-botox.pdf",
    },
    image: "/assets/botox.png",
    duration: "2 jours",
    price: "1600€",
    secondSectionTitle: "Maîtrise l'art du Botox",
    learningCard: [
      "Structure et besoins des cheveux sensibilisés",
      "Composition et bienfaits du soin au botox",
      "Protocole d’application étape par étape",
      "Résultats attendus et astuces professionnelles",
      "Conseils d’entretien à recommander au client",
    ],
    thumbnail: "/assets/thumbnails-botox.png",
    prerequis: [
      {
        description:
          "Apprenez à structurer un projet viable, maîtrisez les étapes administratives, et développez une offre esthétique innovante. Le soin au Botox, tendance incontournable dans les instituts, vous permettra d'offrir des résultats visibles et durables à votre clientèle. Intégrez une formation complète, pensée pour les futur(e)s entrepreneur(e)s de l'esthétique.",
        level: "Aucun",
      },
    ],
    formationDuration: [
      {
        title: "Durée de la formation",
        description: "La formation se déroule sur une durée totale de 2 jours.",
        points: [
          "Partie 1 - Création d’entreprise, communication et management : 1 Jour",
          "Partie 2 - Soin capillaire au Botox : 1 Jour",
        ],
        lastPoint:
          "Les horaires de formation sont fixés de 9h00 à 12h30 et de 13h30 à 17h00.",
      },
    ],
    cards:
      "Lancez votre activité en toute confiance grâce à notre formation double compétence : création d’entreprise et soin capillaire au Botox. Apprenez à structurer un projet viable, maîtrisez les étapes administratives, et développez une offre esthétique innovante..",
  },
  prothesiste: {
    surTitle: "Création / Développement d'entreprise",
    subTitle: "& Techniques professionnelles :",
    title: "Prothésiste ongulaire",
    description: [
      "Lancez votre activité en toute confiance grâce à notre formation double compétence : création d'entreprise et soin capillaire au Botox. ",
    ],
    firstPart: {
      title:
        "Partie 1 – Création et gestion d'entreprise, communication, management",
      description: [
        "Cette première phase vise à fournir aux participants les compétences essentielles pour lancer et structurer leur activité professionnelle.",
      ],
      list: [
        "Élaborer un projet de création ou de développement d'entreprise;",
        "Mettre en place une stratégie de communication adaptée;",
        "Comprendre les bases du management d'une petite structure.",
      ],
    },
    secondPart: {
      title: "Partie 2 – Techniques du Prothésiste",
      description: [
        "La seconde partie est dédiée à l’acquisition des savoir-faire techniques liés à la prothésie ongulaire.",
        "Cette formation vise à rendre le stagiaire opérationnel, autonome et professionnellement crédible à la fois dans la gestion de son activité et la réalisation des prestations proposées.",
      ],
    },
    secondSectionTitle: "Maîtrise l'art du Prothésiste",
    learningCard: [
      "Protocoles du Prothésiste étape par étape",
      "Choix des produits et matériel professionnel",
      "Application du Prothésiste",
      "Conseils d’entretien pour une tenue optimale",
      "Fidélisation et satisfaction client",
    ],
    prerequis: [
      {
        description:
          "Un entretien ou un test de positionnement peut être proposé afin de vérifier l’adéquation entre le profil du bénéficiaire et les exigences de la formation. La personne concernée doit être majeur à l’entrée de la formation.",
        level: "Aucun",
      },
    ],
    formationDuration: [
      {
        title: "Durée de la formation",
        description: "La formation se déroule sur une durée totale de 2 jours.",
        points: [
          "Partie 1 - Création d’entreprise, communication et management : 1 Jour",
          "Partie 2 - Prothésiste ongulaire : 1 Jour",
        ],
        lastPoint:
          "Les horaires de formation sont fixés de 9h00 à 12h30 et de 13h30 à 17h00.",
      },
    ],
    brochure: {
      path: "/brochures/programme-formation-prothesiste-ongulaire.pdf",
      fileName: "programme-formation-prothesiste-ongulaire.pdf",
    },
    image: "/assets/ongle.png",
    duration: "2 jours",
    price: "1600€",
    thumbnail: "/assets/thumbnails-ongle.png",
    cards:
      "Perfectionnez l'art de la prothésie ongulaire grâce à notre formation spécialisée. Développez votre expertise en techniques modernes pour créer des ongles esthétiques, résistants et personnalisés qui raviront votre clientèle.",
  },
};
