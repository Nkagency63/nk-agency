
import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img src="/lovable-uploads/d7ce3e30-c5f8-4734-b717-c9ee4a495afc.png" alt="NK AGENCY Logo" className="h-16" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
            Prêt à Créer Vos Lettres Lumineuses ?
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 text-left">
            <h3 className="text-xl font-bold text-white mb-4">Options de fabrication disponibles :</h3>
            <p className="text-gray-300 mb-4">
              Pour la fabrication de votre enseigne sur-mesure, vous avez le choix entre :
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• <strong>Lettres découpées</strong> en PVC expansé ou aluminium composite</li>
              <li>• <strong>Lettres lumineuses de dos</strong> (rétro éclairage)</li>
              <li>• <strong>Lettres éclairantes de face</strong> en boitiers aluminium</li>
            </ul>
            <p className="text-gray-300">
              Vous pouvez commander directement en ligne avec notre <strong>CONFIGURATEUR D'ENSEIGNES</strong> ou bien à partir de votre <strong>FICHIER VECTORIEL</strong> au format PDF ou EPS.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/customization" 
              className="bg-white text-black px-8 py-4 rounded text-lg font-bold transition-all hover:bg-opacity-80"
            >
              Configurateur d'enseignes
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold transition-all hover:bg-white/10"
            >
              Faire un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
