
import React from "react";

const PortfolioHeader = () => {
  return (
    <section className="relative py-16 mb-8 bg-gradient-to-b from-secondary to-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-text">Portfolio</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
          Découvrez nos réalisations d'enseignes publicitaires pour diverses entreprises et secteurs d'activité.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHeader;
