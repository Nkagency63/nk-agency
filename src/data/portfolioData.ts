import { PortfolioItem } from "../types/portfolio";

// Portfolio data with updated images
export const portfolioItems: PortfolioItem[] = [
  {
    id: 7,
    title: "Logo Fernandes en Relief",
    client: "Fernandes",
    category: "Lettres Découpées",
    image: "/lovable-uploads/bad52d0a-bbf2-43b6-a893-14d026f283d5.png",
    description: "Logo d'entreprise en relief avec lettres découpées et symbole rouge distinctif, installé dans une salle de réunion moderne avec finitions en bois."
  },
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
  }
];

// Get unique categories for filter
export const categories = ["Tous", ...new Set(portfolioItems.map(item => item.category))];
