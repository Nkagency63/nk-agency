
import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img src="/lovable-uploads/d7ce3e30-c5f8-4734-b717-c9ee4a495afc.png" alt="NK AGENCY Logo" className="h-16" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
            Prêt à Créer Vos Lettres Lumineuses ?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Concevez et commandez vos lettres personnalisées en ligne. 
            Kit d'installation fourni pour une pose simple et rapide !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/customization" 
              className="bg-white text-black px-8 py-4 rounded text-lg font-bold transition-all hover:bg-opacity-80"
            >
              Créer mes lettres
            </Link>
            <Link 
              to="/shop" 
              className="bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold transition-all hover:bg-white/10"
            >
              Voir le catalogue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
