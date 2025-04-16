
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  color: string;
}

const ServicesOverview = () => {
  const services: ServiceItem[] = [
    {
      title: "Conception d'Enseignes",
      description: "Création sur mesure d'enseignes adaptées à votre identité visuelle et à vos besoins spécifiques.",
      color: "neon-text-pink"
    }, 
    {
      title: "Fabrication d'Enseignes",
      description: "Production d'enseignes lumineuses, non-lumineuses, lettres découpées, caissons, et bien plus.",
      color: "neon-text-blue"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une gamme complète de solutions pour vos projets d'enseignes publicitaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-secondary rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5"
            >
              <h3 className={`text-2xl font-bold mb-4 ${service.color}`}>{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Link to="/services" className="inline-flex items-center text-white hover:underline">
                En savoir plus
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold transition-all hover:bg-white/10">
            Tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
