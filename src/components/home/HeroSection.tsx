
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-black"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.2)",
        }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

      <div className="container mx-auto px-4 z-20 mt-16">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-6">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FABRICANT FRANÇAIS D'ENSEIGNES LUMINEUSES
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight text-center">
            <span className="neon-text-blue">LETTRES</span> et <span className="neon-text-pink">LOGOS</span>
            <br />
            Sur Mesure Pour Votre Enseigne
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 text-center">
            Créez et commandez en ligne vos lettres lumineuses en toute simplicité. 
            Kit d'installation fourni pour une pose facile sur votre mur ou panneau.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/customization"
              className="bg-white text-black px-8 py-4 rounded text-lg font-bold transition-all hover:bg-opacity-80"
            >
              Configurateur d'enseignes
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold flex items-center justify-center gap-2 transition-all hover:bg-white/10"
            >
              Faire un devis
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full text-center z-20">
        <div className="animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
