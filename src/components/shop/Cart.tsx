
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, getTotalItems, getTotalPrice, updateQuantity, removeFromCart, isOpen, setIsOpen } = useCart();

  if (!isOpen) {
    return (
      <div className="fixed top-20 right-4 z-50">
        <Button 
          onClick={() => setIsOpen(true)}
          className="relative bg-white text-black hover:bg-gray-200 p-3 rounded-full shadow-lg"
        >
          <ShoppingCart size={20} />
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed top-20 right-4 w-96 bg-secondary border border-gray-800 rounded-lg shadow-xl z-50 max-h-[80vh] overflow-hidden">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Panier ({getTotalItems()})</h3>
        <Button variant="ghost" onClick={() => setIsOpen(false)} className="p-1">
          <X size={20} />
        </Button>
      </div>

      <div className="overflow-y-auto max-h-96">
        {items.length === 0 ? (
          <div className="p-6 text-center text-gray-400">
            <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
            <p>Votre panier est vide</p>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {items.map((item) => (
              <div key={`${item.product.id}-${JSON.stringify(item.customizations)}`} className="flex items-center space-x-3 bg-black p-3 rounded-lg">
                <img 
                  src={item.product.image} 
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium">{item.product.name}</h4>
                  <p className="text-gray-400 text-xs">{item.product.price}€</p>
                  {item.customizations && (
                    <div className="text-xs text-gray-500">
                      {item.customizations.color && <span>Couleur: {item.customizations.color}</span>}
                      {item.customizations.size && <span className="ml-2">Taille: {item.customizations.size}</span>}
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-6 h-6 p-0"
                  >
                    <Minus size={12} />
                  </Button>
                  <span className="text-white w-8 text-center">{item.quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-6 h-6 p-0"
                  >
                    <Plus size={12} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeFromCart(item.product.id)}
                    className="w-6 h-6 p-0 text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={12} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="p-4 border-t border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-white">Total:</span>
            <span className="text-xl font-bold text-white">{getTotalPrice()}€</span>
          </div>
          <Link to="/checkout" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-white text-black hover:bg-gray-200">
              Passer commande
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
