
import React from "react";
import { Package, Wrench, CheckCircle, Clock } from "lucide-react";

const InstallationSection = () => {
  const features = [
    {
      icon: Package,
      title: "Kit complet fourni",
      description: "Tous les éléments nécessaires à l'installation sont inclus dans votre commande"
    },
    {
      icon: Wrench,
      title: "Installation simplifiée",
      description: "Système de fixation étudié pour une pose rapide sur mur ou panneau"
    },
    {
      icon: CheckCircle,
      title: "Notice détaillée",
      description: "Guide d'installation illustré étape par étape pour une pose sans erreur"
    },
    {
      icon: Clock,
      title: "Pose en 30 minutes",
      description: "Installation moyenne d'une enseigne en moins de 30 minutes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kit d'Installation <span className="neon-text">Fourni</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chaque enseigne est livrée avec son kit d'installation complet. 
            Pas besoin d'être un professionnel pour installer votre enseigne !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-black/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Contenu du kit d'installation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                  Supports de fixation adaptés au type d'enseigne
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                  Vis et chevilles pour tous types de murs
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                  Câblage avec connecteurs étanches
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                  Transformateur et alimentation
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                  Notice illustrée et conseils de pose
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80" 
                alt="Kit d'installation" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                <p className="text-white font-medium">Installation professionnelle en option</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
