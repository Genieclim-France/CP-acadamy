import coiffurePDF from "/brochures/formation-coiffure.pdf";
import esthetiquePDF from "/brochures/formation-esthetique.pdf";

export interface Formation {
  title: string;
  description: string;
  list?: string[];
  modules: string[];
  price: string;
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
    title: "la coiffure",
    description:
      "Obtenez votre diplôme de coiffure, un diplôme d'État niveau 3, et devenez expert en soins, coupe, coloration et vente.",
    list: [
      "500h de formation et 24 parcours",
      "Des contenus techniques et théoriques variés (vidéos, quizz, infographie, visite virtuelle...)",
      "Des exercices corrigés par un professionnel de la coiffure",
      "Des modules techniques hors référentiel offerts (wavy, balayage, barbier...)",
    ],
    modules: ["Coupe", "Coloration", "Brushing"],
    price: "2500€",
    brochure: {
      path: coiffurePDF,
      fileName: "formation-coiffure.pdf",
    },
    image: "../src/assets/coiffure-img.png",
  },
  esthetique: {
    title: "l'esthétique",
    description:
      "Obtenez votre diplôme en esthétique, un diplôme d'État niveau 3, et devenez expert en soins du visage, manucure et épilation.",
    list: [
      "450h de formation et 20 parcours",
      "Des contenus techniques et théoriques variés (vidéos, quizz, infographie, visite virtuelle...)",
      "Des exercices pratiques encadrés par des professionnels de l'esthétique",
      "Des modules techniques hors référentiel offerts (maquillage, soins avancés...)",
    ],
    modules: ["Soins visage", "Manucure", "Épilation"],
    price: "2800€",
    brochure: {
      path: esthetiquePDF,
      fileName: "formation-esthetique.pdf",
    },
    image: "../src/assets/esthetique-img.png",
  },
};
