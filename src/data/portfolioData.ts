
import { PortfolioItem } from "../types/portfolio";

// Portfolio data with images from enseigne42.com
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Enseigne Néon Café Élégant",
    client: "Café Le Parisien",
    category: "Néon",
    image: "https://enseigne42.com/sites/default/files/2024-03/Pose-enseigne-lumineuse-double-face-neoshine-light.jpg",
    description: "Enseigne néon rouge et blanche pour un café parisien classique avec un design vintage."
  },
  {
    id: 2,
    title: "Lettres Lumineuses Boutique",
    client: "Élégance Mode",
    category: "Lettres Lumineuses",
    image: "https://enseigne42.com/sites/default/files/2022-01/realisation-enseigne-lumineuse.jpg",
    description: "Lettres lumineuses blanches pour une boutique de mode haut de gamme."
  },
  {
    id: 3,
    title: "Caisson Lumineux Restaurant",
    client: "Restaurant Saveur",
    category: "Caisson Lumineux",
    image: "https://enseigne42.com/sites/default/files/2022-01/restaurant-enseigne-travaux-enseigniste.jpg",
    description: "Caisson lumineux rétroéclairé avec logo personnalisé pour un restaurant gastronomique."
  },
  {
    id: 4,
    title: "Enseigne LED Bar Nocturne",
    client: "Bar Nocturne",
    category: "LED",
    image: "https://enseigne42.com/sites/default/files/2024-03/Enseigne-lumineuse-neon-led-realisation-enseigne42.jpg",
    description: "Enseigne LED moderne avec éclairage changeant pour un bar tendance."
  },
  {
    id: 5,
    title: "Enseigne Néon Club",
    client: "Club Vibration",
    category: "Néon",
    image: "https://enseigne42.com/sites/default/files/2022-01/entreprise-fabrication-enseigne-publiticaire-lyon.jpg",
    description: "Enseigne néon de couleur rose avec animation pour un club de nuit."
  },
  {
    id: 6,
    title: "Lettres Découpées Galerie",
    client: "Galerie d'Art Moderne",
    category: "Lettres Découpées",
    image: "https://enseigne42.com/sites/default/files/2022-01/signalisation-lieux-enseignes-travaux.jpg",
    description: "Lettres découpées en métal brossé pour une galerie d'art contemporain."
  },
  {
    id: 7,
    title: "Panneau Rétroéclairé Hôtel",
    client: "Hôtel Luxe",
    category: "Panneau Rétroéclairé",
    image: "https://enseigne42.com/sites/default/files/2023-11/Enseigne-lumineuse-casino-jeux-lyon-scaled.jpg",
    description: "Panneau rétroéclairé avec logo en relief pour un hôtel de luxe."
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
    title: "Lettres Lumineuses Spa",
    client: "Zen Spa",
    category: "Lettres Lumineuses",
    image: "https://enseigne42.com/sites/default/files/2021-12/installation-totem-enseigne-pvc-habillage-devanture-magasin.jpg",
    description: "Lettres lumineuses avec effet de halo pour un spa de relaxation."
  }
];

// Get unique categories for filter
export const categories = ["Tous", ...new Set(portfolioItems.map(item => item.category))];
