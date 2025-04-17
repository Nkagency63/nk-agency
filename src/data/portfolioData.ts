
import { PortfolioItem } from "../types/portfolio";

// Portfolio data with updated images
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Enseigne Lumineuse Lali Nails",
    client: "Lali Nails",
    category: "Façade Commerciale",
    image: "/lovable-uploads/28cfe60f-7204-4fa7-8e75-5ee4dfef079e.png",
    description: "Façade complète pour salon de beauté avec enseigne lumineuse et logo personnalisé sur fond noir, incluant un visuel de nail art."
  },
  {
    id: 2,
    title: "Lettres en Relief KATYPRK",
    client: "KATYPRK",
    category: "Lettres Découpées",
    image: "/lovable-uploads/a12f4f81-e7d3-47e0-9240-d22bea7f2bf2.png",
    description: "Enseigne en relief avec lettres blanches découpées sur caisson noir pour une visibilité optimale et un impact visuel fort."
  },
  {
    id: 3,
    title: "Devanture CHOU'KETTE",
    client: "CHOU'KETTE",
    category: "Façade Commerciale",
    image: "/lovable-uploads/2ffc53f8-2966-4d49-bf52-68d3086d1d0b.png",
    description: "Façade élégante pour pâtisserie avec lettres en relief et logo emblématique, intégrés parfaitement à l'architecture du bâtiment historique."
  },
  {
    id: 4,
    title: "Enseigne Lumineuse TAO",
    client: "TAO Asian Street Food",
    category: "Caisson Lumineux",
    image: "/lovable-uploads/5cb57967-e822-4b52-8281-28c197167c7b.png",
    description: "Enseigne lumineuse pour restaurant asiatique avec caisson éclairé, texte noir sur fond blanc et détails verts pour la description du concept."
  },
  {
    id: 5,
    title: "Lettre Lumineuse N",
    client: "Design Concept",
    category: "Lettre Boîtier LED",
    image: "/lovable-uploads/a8bca416-eb12-4ff0-a5f1-677b854871a1.png",
    description: "Lettre boîtier lumineuse en forme de 'N' avec éclairage LED intégré, face noire et contour blanc lumineux pour une visibilité nocturne maximale."
  },
  {
    id: 6,
    title: "Lettre Lumineuse E",
    client: "Design Concept",
    category: "Lettre Boîtier LED",
    image: "/lovable-uploads/85087f6e-46dd-4e75-98db-12c0a34adaca.png",
    description: "Lettre boîtier lumineuse en forme de 'E' avec éclairage LED intégré, face blanche illuminée pour un effet visuel saisissant de jour comme de nuit."
  },
  {
    id: 8,
    title: "Enseigne LED Shop",
    client: "Digital Shop",
    category: "LED",
    image: "https://enseigne42.com/sites/default/files/2022-01/fabricant-totem-lumineux-enseigne.jpg",
    description: "Enseigne LED avec animation programmable pour une boutique d'électronique."
  },
  {
    id: 9,
    title: "Enseigne Néon Salon",
    client: "Beauty Salon",
    category: "Néon",
    image: "https://enseigne42.com/sites/default/files/2022-01/enseigne-boutique-lumineuse-panneau-habillage-local-commerce-vitre.jpg",
    description: "Enseigne néon rose sur mesure pour un salon de beauté."
  },
  {
    id: 10,
    title: "Lettres 3D Pharmacie",
    client: "Pharmacie Centrale",
    category: "Lettres 3D",
    image: "https://enseigne42.com/sites/default/files/2022-01/pharmacie-enseigne-croix-verte.jpg",
    description: "Lettres 3D avec éclairage LED vert pour une pharmacie."
  },
  {
    id: 11,
    title: "Panneau Lumineux Cinéma",
    client: "Cinéma Paradis",
    category: "Panneau Lumineux",
    image: "https://enseigne42.com/sites/default/files/2022-01/enseigne-lumineuse-devanture-commerce.jpg",
    description: "Panneau lumineux avec affichage programmable pour un cinéma."
  },
  {
    id: 12,
    title: "Enseigne Néon Club",
    client: "Club Vibration",
    category: "Néon",
    image: "https://enseigne42.com/sites/default/files/2023-11/Enseigne-lumineuse-casino-jeux-lyon-scaled.jpg",
    description: "Enseigne néon de couleur rose avec animation pour un club de nuit."
  }
];

// Get unique categories for filter
export const categories = ["Tous", ...new Set(portfolioItems.map(item => item.category))];
