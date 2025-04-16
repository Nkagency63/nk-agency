
import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = ["Créations 100% personnalisées selon vos besoins"];
  
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi Choisir NK AGENCY ?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Nous combinons innovation technique et design créatif pour vous offrir 
              des enseignes qui captent l'attention et reflètent l'essence de votre marque.
            </p>
            
            <div className="space-y-4">
              {reasons.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check size={18} className="text-neon-blue" />
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Link to="/quote" className="inline-block bg-white text-black px-8 py-4 rounded text-lg font-bold transition-all hover:bg-opacity-80">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80" 
                alt="Fabrication d'enseigne" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-xl border border-gray-800 max-w-xs">
              <p className="text-2xl font-bold mb-2 text-white">+200</p>
              <p className="text-gray-400">Clients satisfaits par nos enseignes partout en France</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
