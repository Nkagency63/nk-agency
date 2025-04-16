
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
      title: "Café Le Parisien",
      category: "Enseigne Néon",
      imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000"
    }, 
    {
      title: "Boutique Élégance",
      category: "Lettres Lumineuses",
      imageUrl: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?auto=format&fit=crop&q=80&w=1000"
    }, 
    {
      title: "Restaurant Saveur",
      category: "Caisson Lumineux",
      imageUrl: "https://images.unsplash.com/photo-1563620915-a8e473771545?auto=format&fit=crop&q=80&w=1000"
    }, 
    {
      title: "Bar Nocturne",
      category: "Enseigne LED",
      imageUrl: "https://images.unsplash.com/photo-1515268064940-5750c4be46ce?auto=format&fit=crop&q=80&w=1000"
    }, 
    {
      title: "Club Vibration",
      category: "Enseigne Néon",
      imageUrl: "https://images.unsplash.com/photo-1563842431151-15af97dd17c4?auto=format&fit=crop&q=80&w=1000"
    }, 
    {
      title: "Galerie d'Art Moderne",
      category: "Lettres Découpées",
      imageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1000"
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
