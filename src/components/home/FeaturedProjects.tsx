
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
      title: "Enseigne Lumineuse Natural Pizza",
      category: "Panneau Lumineux",
      imageUrl: "/lovable-uploads/4908cacc-6343-4bd3-9f30-40e22f1a1cdf.png"
    }, 
    {
      title: "Devanture Lali Nails",
      category: "Façade Commerciale",
      imageUrl: "/lovable-uploads/40aae748-4757-4610-b7fd-026541731971.png"
    }, 
    {
      title: "Lettres en Relief KATYPRK",
      category: "Lettres Découpées",
      imageUrl: "/lovable-uploads/e2167189-771e-44c1-a3b1-af039da6e1b7.png"
    }, 
    {
      title: "Lettre Lumineuse N",
      category: "Enseigne LED",
      imageUrl: "/lovable-uploads/cb7ceca3-1ed5-4812-b68f-b076b95a055e.png"
    }, 
    {
      title: "Lettre Lumineuse E",
      category: "Lettre Boîtier LED",
      imageUrl: "/lovable-uploads/5d70ddbf-4648-4d48-a487-2654449c895b.png"
    }, 
    {
      title: "Enseigne Néon Club",
      category: "Enseigne Néon",
      imageUrl: "https://enseigne42.com/sites/default/files/2022-01/enseigne-boutique-lumineuse-panneau-habillage-local-commerce-vitre.jpg"
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
