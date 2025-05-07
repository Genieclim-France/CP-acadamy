export interface Formation {
  subTitle: string;
  title: string;
  description: string[];
  brochure: {
    path: string;
    fileName: string;
  };
  image?: string;
}

export interface Formations {
  [key: string]: Formation;
}

export const formations: Formations = {
  coiffure: {
    subTitle: "Formation métier de la coiffure -",
    title: "Browlift & Rehaussement de cils",
    description: [
      "Maîtrisez les techniques tendance du browlift et du rehaussement de cils grâce à notre formation certifiée. Apprenez à sublimer le regard de vos clientes avec des gestes professionnels, sûrs et durables. ",
      "Cette formation s’adresse aux passionné(e)s de la beauté souhaitant enrichir leurs compétences ou lancer leur activité dans le secteur de la coiffure et de l’esthétique du regard. Avec CP Academy, accédez à un enseignement de qualité et valorisez votre savoir-faire dans un marché en pleine croissance.",
    ],
    brochure: {
      path: "/brochures/formation-coiffure.pdf",
      fileName: "formation-coiffure.pdf",
    },
    image: "/assets/browlift.png",
  },
  esthetique: {
    subTitle: "Formation métier de l'esthétique -",
    title: "Création d’entreprise & Soin capillaire au Botox",
    description: [
      "Lancez votre activité en toute confiance grâce à notre formation double compétence : création d’entreprise et soin capillaire au Botox. ",
      "Apprenez à structurer un projet viable, maîtrisez les étapes administratives, et développez une offre esthétique innovante. Le soin au Botox, tendance incontournable dans les instituts, vous permettra d’offrir des résultats visibles et durables à votre clientèle. Intégrez une formation complète, pensée pour les futur(e)s entrepreneur(e)s de l’esthétique.",
    ],
    brochure: {
      path: "/brochures/formation-esthetique.pdf",
      fileName: "formation-esthetique.pdf",
    },
    image: "/assets/botox.png",
  },
};
