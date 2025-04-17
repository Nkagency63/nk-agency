
import React from "react";
import { PortfolioItem as PortfolioItemType } from "../../types/portfolio";
import PortfolioItem from "./PortfolioItem";

type PortfolioGridProps = {
  items: PortfolioItemType[];
  onSelectItem: (item: PortfolioItemType) => void;
};

const PortfolioGrid = ({ items, onSelectItem }: PortfolioGridProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <PortfolioItem key={item.id} item={item} onClick={onSelectItem} />
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">Aucun projet ne correspond à ce filtre.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
