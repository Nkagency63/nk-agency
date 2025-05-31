
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Produit non trouvé</h1>
          <Link to="/shop">
            <Button className="bg-white text-black hover:bg-gray-200">
              Retour à la boutique
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const customizations: any = {};
    if (selectedColor) customizations.color = selectedColor;
    if (selectedSize) customizations.size = selectedSize;
    
    addToCart(product, Object.keys(customizations).length > 0 ? customizations : undefined);
    toast.success('Produit ajouté au panier !');
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <Link to="/shop" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Retour à la boutique
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative rounded-xl overflow-hidden bg-secondary">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.customizable && (
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  Personnalisable
                </Badge>
              )}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4 text-white">{product.name}</h1>
            <p className="text-xl text-gray-300 mb-6">{product.description}</p>
            
            <div className="text-4xl font-bold mb-6 text-white">{product.price}€</div>

            <Card className="bg-secondary border-gray-800 mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Caractéristiques</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <Check size={16} className="text-green-400 mr-2 mt-1 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {product.customizable && (
              <div className="space-y-4 mb-6">
                {product.colorOptions && (
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Couleur
                    </label>
                    <Select onValueChange={setSelectedColor}>
                      <SelectTrigger className="bg-black border-gray-700 text-white">
                        <SelectValue placeholder="Choisir une couleur" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.colorOptions.map(color => (
                          <SelectItem key={color} value={color}>{color}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {product.sizeOptions && (
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Taille
                    </label>
                    <Select onValueChange={setSelectedSize}>
                      <SelectTrigger className="bg-black border-gray-700 text-white">
                        <SelectValue placeholder="Choisir une taille" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.sizeOptions.map(size => (
                          <SelectItem key={size} value={size}>{size}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-4">
              <Button 
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-white text-black hover:bg-gray-200 text-lg py-6"
              >
                <ShoppingCart size={20} className="mr-2" />
                Ajouter au panier
              </Button>
              
              <Link to="/customization" className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 text-white hover:bg-gray-800 text-lg py-6"
                >
                  Personnaliser
                </Button>
              </Link>
            </div>

            {!product.inStock && (
              <p className="text-red-400 text-center mt-4">
                Ce produit est actuellement en rupture de stock.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
