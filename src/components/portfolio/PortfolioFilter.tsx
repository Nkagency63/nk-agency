
import React from "react";

type PortfolioFilterProps = {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
};

const PortfolioFilter = ({ 
  categories, 
  activeFilter, 
  onFilterChange 
}: PortfolioFilterProps) => {
  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeFilter === category 
                ? 'bg-white text-black' 
                : 'bg-secondary text-white hover:bg-gray-800'
            }`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilter;
