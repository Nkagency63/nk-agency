
import React from "react";
import { Link } from "react-router-dom";

interface ProjectItem {
  title: string;
  category: string;
  imageUrl: string;
}

const FeaturedProjects = () => {
  const projects: ProjectItem[] = [
    {
      title: "Lali Nails",
      category: "Façade Commerciale",
      imageUrl: "/lovable-uploads/28cfe60f-7204-4fa7-8e75-5ee4dfef079e.png"
    }, 
    {
      title: "KATYPRK",
      category: "Lettres Découpées",
      imageUrl: "/lovable-uploads/a12f4f81-e7d3-47e0-9240-d22bea7f2bf2.png"
    }, 
    {
      title: "CHOU'KETTE",
      category: "Façade Commerciale",
      imageUrl: "/lovable-uploads/2ffc53f8-2966-4d49-bf52-68d3086d1d0b.png"
    }, 
    {
      title: "TAO Asian Street Food",
      category: "Caisson Lumineux",
      imageUrl: "/lovable-uploads/5cb57967-e822-4b52-8281-28c197167c7b.png"
    }, 
    {
      title: "Lettre Lumineuse N",
      category: "Lettre Boîtier LED",
      imageUrl: "/lovable-uploads/a8bca416-eb12-4ff0-a5f1-677b854871a1.png"
    }, 
    {
      title: "Lettre Lumineuse E",
      category: "Lettre Boîtier LED",
      imageUrl: "/lovable-uploads/85087f6e-46dd-4e75-98db-12c0a34adaca.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Réalisations</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez quelques exemples de nos enseignes publicitaires réalisées pour nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <p className="text-sm font-medium text-gray-300">{project.category}</p>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/portfolio" className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold transition-all hover:bg-white/10">
            Voir tout le portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
