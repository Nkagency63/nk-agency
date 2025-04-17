
import React from "react";
import { PortfolioItem as PortfolioItemType } from "../../types/portfolio";

type PortfolioItemProps = {
  item: PortfolioItemType;
  onClick: (item: PortfolioItemType) => void;
};

const PortfolioItem = ({ item, onClick }: PortfolioItemProps) => {
  return (
    <div 
      className="group bg-secondary rounded-xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-white/5 transition-all"
      onClick={() => onClick(item)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full">{item.category}</span>
        </div>
        <p className="text-gray-400">{item.client}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
