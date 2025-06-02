
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Truck, AlertTriangle, Info } from 'lucide-react';

const CustomizationAlerts = () => {
  return (
    <div className="mb-8 space-y-4">
      <Alert className="bg-green-900/20 border-green-700">
        <Truck className="h-4 w-4 text-green-400" />
        <AlertDescription className="text-green-300">
          <strong>Livraison offerte à partir de 400€</strong>
        </AlertDescription>
      </Alert>
      
      <Alert className="bg-orange-900/20 border-orange-700">
        <AlertTriangle className="h-4 w-4 text-orange-400" />
        <AlertDescription className="text-orange-300">
          <strong>Attention hauteur minimum 12 cm</strong>
        </AlertDescription>
      </Alert>
      
      <Alert className="bg-blue-900/20 border-blue-700">
        <Info className="h-4 w-4 text-blue-400" />
        <AlertDescription className="text-blue-300">
          Prix HT. TVA non applicable, article 293 B du Code Général des impôts.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default CustomizationAlerts;
