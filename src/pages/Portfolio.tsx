
import { useState } from "react";

// Define types for portfolio items
type PortfolioItem = {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
};

// Portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Enseigne Néon Café Élégant",
    client: "Café Le Parisien",
    category: "Néon",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000",
    description: "Enseigne néon rouge et blanche pour un café parisien classique avec un design vintage."
  },
  {
    id: 2,
    title: "Lettres Lumineuses Boutique",
    client: "Élégance Mode",
    category: "Lettres Lumineuses",
    image: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?auto=format&fit=crop&q=80&w=1000",
    description: "Lettres lumineuses blanches pour une boutique de mode haut de gamme."
  },
  {
    id: 3,
    title: "Caisson Lumineux Restaurant",
    client: "Restaurant Saveur",
    category: "Caisson Lumineux",
    image: "https://images.unsplash.com/photo-1563620915-a8e473771545?auto=format&fit=crop&q=80&w=1000",
    description: "Caisson lumineux rétroéclairé avec logo personnalisé pour un restaurant gastronomique."
  },
  {
    id: 4,
    title: "Enseigne LED Bar Nocturne",
    client: "Bar Nocturne",
    category: "LED",
    image: "https://images.unsplash.com/photo-1515268064940-5750c4be46ce?auto=format&fit=crop&q=80&w=1000",
    description: "Enseigne LED moderne avec éclairage changeant pour un bar tendance."
  },
  {
    id: 5,
    title: "Enseigne Néon Club",
    client: "Club Vibration",
    category: "Néon",
    image: "https://images.unsplash.com/photo-1563842431151-15af97dd17c4?auto=format&fit=crop&q=80&w=1000",
    description: "Enseigne néon de couleur rose avec animation pour un club de nuit."
  },
  {
    id: 6,
    title: "Lettres Découpées Galerie",
    client: "Galerie d'Art Moderne",
    category: "Lettres Découpées",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1000",
    description: "Lettres découpées en métal brossé pour une galerie d'art contemporain."
  },
  {
    id: 7,
    title: "Panneau Rétroéclairé Hôtel",
    client: "Hôtel Luxe",
    category: "Panneau Rétroéclairé",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&q=80&w=1000",
    description: "Panneau rétroéclairé avec logo en relief pour un hôtel de luxe."
  },
  {
    id: 8,
    title: "Enseigne LED Shop",
    client: "Digital Shop",
    category: "LED",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000",
    description: "Enseigne LED avec animation programmable pour une boutique d'électronique."
  },
  {
    id: 9,
    title: "Enseigne Néon Salon",
    client: "Beauty Salon",
    category: "Néon",
    image: "https://images.unsplash.com/photo-1600494448850-6b5bfc50a1f3?auto=format&fit=crop&q=80&w=1000",
    description: "Enseigne néon rose sur mesure pour un salon de beauté."
  },
  {
    id: 10,
    title: "Lettres 3D Pharmacie",
    client: "Pharmacie Centrale",
    category: "Lettres 3D",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1000",
    description: "Lettres 3D avec éclairage LED vert pour une pharmacie."
  },
  {
    id: 11,
    title: "Panneau Lumineux Cinéma",
    client: "Cinéma Paradis",
    category: "Panneau Lumineux",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1000",
    description: "Panneau lumineux avec affichage programmable pour un cinéma."
  },
  {
    id: 12,
    title: "Lettres Lumineuses Spa",
    client: "Zen Spa",
    category: "Lettres Lumineuses",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1000",
    description: "Lettres lumineuses avec effet de halo pour un spa de relaxation."
  }
];

// Get unique categories for filter
const categories = ["Tous", ...new Set(portfolioItems.map(item => item.category))];

const Portfolio = () => {
  const [filter, setFilter] = useState("Tous");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === "Tous" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 pb-20">
      {/* Portfolio Header */}
      <section className="relative py-16 mb-8 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-text">Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Découvrez nos réalisations d'enseignes publicitaires pour diverses entreprises et secteurs d'activité.
          </p>
        </div>
      </section>

      {/* Portfolio Filters */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                filter === category 
                  ? 'bg-white text-black' 
                  : 'bg-secondary text-white hover:bg-gray-800'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-secondary rounded-xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-white/5 transition-all"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full">{item.category}</span>
                </div>
                <p className="text-gray-400">{item.client}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">Aucun projet ne correspond à ce filtre.</p>
          </div>
        )}
      </div>

      {/* Portfolio Item Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-secondary max-w-4xl w-full rounded-xl overflow-hidden relative">
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              onClick={() => setSelectedItem(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="aspect-video w-full">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                <span className="text-sm font-medium px-3 py-1 bg-muted rounded-full">{selectedItem.category}</span>
              </div>
              <p className="text-gray-300 mb-4"><strong>Client:</strong> {selectedItem.client}</p>
              <p className="text-gray-400">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
