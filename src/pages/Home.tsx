import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Check } from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.2)'
      }}></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        
        <div className="container mx-auto px-4 z-20 mt-16">
          
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
              Des Enseignes <span className="neon-text-blue">Lumineuses</span><br />
              Qui Font <span className="neon-text-pink">Briller</span> Votre Marque
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
              NK AGENCY conçoit et réalise des enseignes publicitaires innovantes 
              et sur mesure pour donner vie à votre identité visuelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="bg-white text-black px-8 py-4 rounded text-lg font-bold transition-all hover:bg-opacity-80">
                Demander un devis
              </Link>
              <Link to="/portfolio" className="bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold flex items-center justify-center gap-2 transition-all hover:bg-white/10">
                Voir nos réalisations
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 w-full text-center z-20">
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une gamme complète de solutions pour vos projets d'enseignes publicitaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: "Conception d'Enseignes",
            description: "Création sur mesure d'enseignes adaptées à votre identité visuelle et à vos besoins spécifiques.",
            color: "neon-text-pink"
          }, {
            title: "Fabrication d'Enseignes",
            description: "Production d'enseignes lumineuses, non-lumineuses, lettres découpées, caissons, et bien plus.",
            color: "neon-text-blue"
          }, {
            title: "Installation & Maintenance",
            description: "Installation professionnelle et service de maintenance pour assurer la longévité et la sécurité de vos enseignes.",
            color: "neon-text-yellow"
          }].map((service, index) => <div key={index} className="bg-secondary rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5">
                <h3 className={`text-2xl font-bold mb-4 ${service.color}`}>{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-white hover:underline">
                  En savoir plus
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>)}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services" className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold transition-all hover:bg-white/10">
              Tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Réalisations</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez quelques exemples de nos enseignes publicitaires réalisées pour nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            title: "Café Le Parisien",
            category: "Enseigne Néon",
            imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000"
          }, {
            title: "Boutique Élégance",
            category: "Lettres Lumineuses",
            imageUrl: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?auto=format&fit=crop&q=80&w=1000"
          }, {
            title: "Restaurant Saveur",
            category: "Caisson Lumineux",
            imageUrl: "https://images.unsplash.com/photo-1563620915-a8e473771545?auto=format&fit=crop&q=80&w=1000"
          }, {
            title: "Bar Nocturne",
            category: "Enseigne LED",
            imageUrl: "https://images.unsplash.com/photo-1515268064940-5750c4be46ce?auto=format&fit=crop&q=80&w=1000"
          }, {
            title: "Club Vibration",
            category: "Enseigne Néon",
            imageUrl: "https://images.unsplash.com/photo-1563842431151-15af97dd17c4?auto=format&fit=crop&q=80&w=1000"
          }, {
            title: "Galerie d'Art Moderne",
            category: "Lettres Découpées",
            imageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1000"
          }].map((project, index) => <div key={index} className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <p className="text-sm font-medium text-gray-300">{project.category}</p>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>)}
          </div>

          <div className="mt-16 text-center">
            <Link to="/portfolio" className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold transition-all hover:bg-white/10">
              Voir tout le portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                {["Créations 100% personnalisées selon vos besoins", "Qualité supérieure et matériaux durables", "Suivi et maintenance de vos enseignes"].map((item, index) => <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check size={18} className="text-neon-blue" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>)}
              </div>
              
              <div className="mt-10">
                <Link to="/quote" className="inline-block bg-white text-black px-8 py-4 rounded text-lg font-bold transition-all hover:bg-opacity-80">
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80" alt="Fabrication d'enseigne" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-xl border border-gray-800 max-w-xs">
                <p className="text-2xl font-bold mb-2 text-white">+200</p>
                <p className="text-gray-400">Clients satisfaits par nos enseignes partout en France</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>;
};
export default Home;
