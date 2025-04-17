
import { useState } from "react";
import { PortfolioItem } from "../types/portfolio";
import { portfolioItems, categories } from "../data/portfolioData";
import PortfolioHeader from "../components/portfolio/PortfolioHeader";
import PortfolioFilter from "../components/portfolio/PortfolioFilter";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import PortfolioModal from "../components/portfolio/PortfolioModal";

const Portfolio = () => {
  const [filter, setFilter] = useState("Tous");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === "Tous" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 pb-20">
      {/* Portfolio Header */}
      <PortfolioHeader />

      {/* Portfolio Filters */}
      <PortfolioFilter 
        categories={categories} 
        activeFilter={filter} 
        onFilterChange={setFilter} 
      />

      {/* Portfolio Grid */}
      <PortfolioGrid 
        items={filteredItems} 
        onSelectItem={setSelectedItem} 
      />

      {/* Portfolio Item Modal */}
      {selectedItem && (
        <PortfolioModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
};

export default Portfolio;
