
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface PricingAndActionsProps {
  customization: {
    text: string;
    style: string;
    size: string;
    material: string;
  };
  estimatedPrice: number;
  onAddToCart: () => void;
  onQuoteRequest: () => void;
}

const PricingAndActions = ({
  customization,
  estimatedPrice,
  onAddToCart,
  onQuoteRequest
}: PricingAndActionsProps) => {
  return (
    <>
      <Card className="bg-secondary border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Prix estimé</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">
              À partir de {estimatedPrice}€
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Kit d'installation inclus • Prix indicatif
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Lettres de base</span>
                <span>150€</span>
              </div>
              {customization.style === 'lettres-lumineuses' && (
                <div className="flex justify-between">
                  <span>Éclairage LED</span>
                  <span>+100€</span>
                </div>
              )}
              {customization.size === 'large' && (
                <div className="flex justify-between">
                  <span>Grandes lettres</span>
                  <span>+100€</span>
                </div>
              )}
              {customization.size === 'xl' && (
                <div className="flex justify-between">
                  <span>Très grandes lettres</span>
                  <span>+200€</span>
                </div>
              )}
              {customization.material === 'aluminium' && (
                <div className="flex justify-between">
                  <span>Matériau premium</span>
                  <span>+150€</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        <Button 
          onClick={onAddToCart}
          disabled={!customization.text || !customization.style}
          className="w-full bg-white text-black hover:bg-gray-200 text-lg py-6"
        >
          <ShoppingCart size={20} className="mr-2" />
          Ajouter au panier
        </Button>
        
        <Button 
          onClick={onQuoteRequest}
          disabled={!customization.text || !customization.style}
          variant="outline"
          className="w-full border-gray-600 text-white hover:bg-gray-800 text-lg py-6"
        >
          Demander un devis détaillé
        </Button>
      </div>

      <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
        <h4 className="text-green-400 font-semibold mb-2">✓ Kit d'installation inclus</h4>
        <p className="text-green-300 text-sm">
          Fixations, câblage, transformateur et notice de pose fournis. Installation en 30 minutes !
        </p>
      </div>
    </>
  );
};

export default PricingAndActions;
