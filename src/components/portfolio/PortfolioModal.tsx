
import React from "react";
import { PortfolioItem } from "../../types/portfolio";
import { X } from "lucide-react";

type PortfolioModalProps = {
  item: PortfolioItem;
  onClose: () => void;
};

const PortfolioModal = ({
  item,
  onClose
}: PortfolioModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-secondary max-w-4xl w-full rounded-xl overflow-hidden relative">
        <button className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <div className="mb-4">
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full">{item.category}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-400 mb-4">Client: {item.client}</p>
            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
