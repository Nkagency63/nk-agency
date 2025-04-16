
import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img src="/lovable-uploads/f3ed4c91-dfb6-47c8-b017-6a1414937753.png" alt="NK AGENCY Logo" className="h-16" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">Prêt à Illuminer Votre Marque ?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Contactez-nous pour discuter de votre projet d'enseigne publicitaire 
            et obtenir une consultation gratuite avec l'un de nos experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="bg-white text-black px-8 py-4 rounded text-lg font-bold transition-all hover:bg-opacity-80">
              Demander un devis
            </Link>
            <Link to="/contact" className="bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold transition-all hover:bg-white/10">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
