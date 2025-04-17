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
  return <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-secondary max-w-4xl w-full rounded-xl overflow-hidden relative">
        <button className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all" onClick={onClose}>
          <X size={24} />
        </button>
        
        
        
        
      </div>
    </div>;
};
export default PortfolioModal;