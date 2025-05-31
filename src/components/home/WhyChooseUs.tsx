
import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "Fabricant français spécialisé en lettres et logos lumineux",
    "Kit d'installation complet fourni avec chaque commande",
    "Création 100% personnalisée selon vos besoins",
    "Éclairage LED basse consommation et longue durée",
    "Matériaux de qualité résistants aux intempéries",
    "Installation simplifiée en moins de 30 minutes",
    "Garantie 2 ans sur tous nos produits",
    "Support technique et conseil personnalisé"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi Choisir NK AGENCY ?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Fabricant français d'enseignes lumineuses, nous combinons savoir-faire artisanal 
              et technologies LED pour créer vos lettres et logos sur mesure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check size={18} className="text-neon-blue flex-shrink-0" />
                  </div>
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Link 
                to="/customization" 
                className="inline-block bg-white text-black px-8 py-4 rounded text-lg font-bold transition-all hover:bg-opacity-80 mr-4"
              >
                Configurateur d'enseignes
              </Link>
              <Link 
                to="/contact" 
                className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold transition-all hover:bg-white/10"
              >
                Faire un devis
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80" 
                alt="Fabrication de lettres lumineuses" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
