
import { PortfolioItem } from "../types/portfolio";

// Portfolio data with updated images
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Enseigne Lumineuse Natural Pizza",
    client: "Natural Pizza",
    category: "Panneau Lumineux",
    image: "/lovable-uploads/4908cacc-6343-4bd3-9f30-40e22f1a1cdf.png",
    description: "Enseigne ronde lumineuse avec logo Natural Pizza en relief, couleur rouge vif avec lettrage blanc et détail de feuille verte."
  },
  {
    id: 2,
    title: "Devanture Lali Nails",
    client: "Lali Nails",
    category: "Façade Commerciale",
    image: "/lovable-uploads/40aae748-4757-4610-b7fd-026541731971.png",
    description: "Façade complète pour salon de beauté avec enseigne lumineuse et logo personnalisé sur fond noir."
  },
  {
    id: 3,
    title: "Lettres en Relief KATYPRK",
    client: "KATYPRK",
    category: "Lettres Découpées",
    image: "/lovable-uploads/e2167189-771e-44c1-a3b1-af039da6e1b7.png",
    description: "Enseigne en relief avec lettres blanches découpées sur caisson noir pour une visibilité optimale."
  },
  {
    id: 4,
    title: "Lettre Lumineuse N",
    client: "Design Concept",
    category: "Lettre Boîtier LED",
    image: "/lovable-uploads/cb7ceca3-1ed5-4812-b68f-b076b95a055e.png",
    description: "Lettre boîtier lumineuse en forme de 'N' avec éclairage LED intégré, face noire et contour blanc lumineux."
  },
  {
    id: 5,
    title: "Lettre Lumineuse E",
    client: "Design Concept",
    category: "Lettre Boîtier LED",
    image: "/lovable-uploads/5d70ddbf-4648-4d48-a487-2654449c895b.png",
    description: "Lettre boîtier lumineuse en forme de 'E' avec éclairage LED intégré, face blanche illuminée pour une visibilité maximale."
  },
  {
    id: 6,
    title: "Enseigne Lumineuse TAO",
    client: "TAO Asian Street Food",
    category: "Panneau Lumineux",
    image: "/lovable-uploads/1ba9f711-5de9-4fd7-ba34-d170b0828582.png",
    description: "Enseigne lumineuse pour restaurant asiatique avec logo TAO en lettrage noir sur fond blanc et sous-titre vert 'ASIAN STREET FOOD - Wok & Sushi'."
  },
  {
    id: 7,
    title: "Enseigne Néon Club",
    client: "Club Vibration",
    category: "Néon",
    image: "https://enseigne42.com/sites/default/files/2022-01/entreprise-fabrication-enseigne-publiticaire-lyon.jpg",
    description: "Enseigne néon de couleur rose avec animation pour un club de nuit."
  },
  {
    id: 8,
    title: "Lettres Découpées Galerie",
    client: "Galerie d'Art Moderne",
    category: "Lettres Découpées",
    image: "https://enseigne42.com/sites/default/files/2022-01/signalisation-lieux-enseignes-travaux.jpg",
    description: "Lettres découpées en métal brossé pour une galerie d'art contemporain."
  },
  {
    id: 9,
    title: "Panneau Rétroéclairé Hôtel",
    client: "Hôtel Luxe",
    category: "Panneau Rétroéclairé",
    image: "https://enseigne42.com/sites/default/files/2023-11/Enseigne-lumineuse-casino-jeux-lyon-scaled.jpg",
    description: "Panneau rétroéclairé avec logo en relief pour un hôtel de luxe."
  },
  {
    id: 10,
    title: "Enseigne LED Shop",
    client: "Digital Shop",
    category: "LED",
    image: "https://enseigne42.com/sites/default/files/2022-01/fabricant-totem-lumineux-enseigne.jpg",
    description: "Enseigne LED avec animation programmable pour une boutique d'électronique."
  },
  {
    id: 11,
    title: "Enseigne Néon Salon",
    client: "Beauty Salon",
    category: "Néon",
    image: "https://enseigne42.com/sites/default/files/2022-01/enseigne-boutique-lumineuse-panneau-habillage-local-commerce-vitre.jpg",
    description: "Enseigne néon rose sur mesure pour un salon de beauté."
  },
  {
    id: 12,
    title: "Lettres 3D Pharmacie",
    client: "Pharmacie Centrale",
    category: "Lettres 3D",
    image: "https://enseigne42.com/sites/default/files/2022-01/pharmacie-enseigne-croix-verte.jpg",
    description: "Lettres 3D avec éclairage LED vert pour une pharmacie."
  },
  {
    id: 13,
    title: "Panneau Lumineux Cinéma",
    client: "Cinéma Paradis",
    category: "Panneau Lumineux",
    image: "https://enseigne42.com/sites/default/files/2022-01/enseigne-lumineuse-devanture-commerce.jpg",
    description: "Panneau lumineux avec affichage programmable pour un cinéma."
  }
];

// Get unique categories for filter
export const categories = ["Tous", ...new Set(portfolioItems.map(item => item.category))];
