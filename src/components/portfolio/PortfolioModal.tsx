
import React from "react";
import { PortfolioItem } from "../../types/portfolio";
import { X } from "lucide-react";

type PortfolioModalProps = {
  item: PortfolioItem;
  onClose: () => void;
};

const PortfolioModal = ({ item, onClose }: PortfolioModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-secondary max-w-4xl w-full rounded-xl overflow-hidden relative">
        <button 
          className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="aspect-video w-full">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <span className="text-sm font-medium px-3 py-1 bg-muted rounded-full">{item.category}</span>
          </div>
          <p className="text-gray-300 mb-4"><strong>Client:</strong> {item.client}</p>
          <p className="text-gray-400">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
