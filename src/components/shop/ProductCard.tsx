
import React from 'react';
import { Product } from '@/types/product';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-secondary border-gray-800">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.customizable && (
          <Badge className="absolute top-2 left-2 bg-blue-600 text-white">
            Personnalisable
          </Badge>
        )}
        {!product.inStock && (
          <Badge className="absolute top-2 right-2 bg-red-600 text-white">
            Rupture
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">{product.price}€</span>
          <span className="text-sm text-gray-400">{product.category}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link to={`/product/${product.id}`} className="flex-1">
          <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
            <Eye size={16} className="mr-2" />
            Voir
          </Button>
        </Link>
        <Button 
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="flex-1 bg-white text-black hover:bg-gray-200"
        >
          <ShoppingCart size={16} className="mr-2" />
          Ajouter
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
