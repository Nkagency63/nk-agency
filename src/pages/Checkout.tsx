
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simuler le traitement du paiement
    setTimeout(() => {
      alert('Commande confirmée ! Vous recevrez un email de confirmation.');
      clearCart();
      setIsProcessing(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Panier vide</h1>
          <p className="text-gray-300 mb-6">Votre panier est vide. Ajoutez des produits pour continuer.</p>
          <Link to="/shop">
            <Button className="bg-white text-black hover:bg-gray-200">
              Continuer les achats
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center neon-text">Finaliser la commande</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="bg-secondary border-gray-800 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Informations de livraison</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={customerInfo.firstName}
                      onChange={handleInputChange}
                      className="bg-black border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={customerInfo.lastName}
                      onChange={handleInputChange}
                      className="bg-black border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    className="bg-black border-gray-700 text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">Adresse *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    className="bg-black border-gray-700 text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Ville *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={customerInfo.city}
                      onChange={handleInputChange}
                      className="bg-black border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Code postal *</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={customerInfo.zipCode}
                      onChange={handleInputChange}
                      className="bg-black border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    className="bg-black border-gray-700 text-white"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="mr-2" />
                  Paiement sécurisé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black p-4 rounded-lg text-center">
                  <Lock className="mx-auto mb-2 text-green-400" size={24} />
                  <p className="text-gray-300 text-sm">
                    Paiement sécurisé par Stripe
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Vos données bancaires sont protégées
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Récapitulatif de commande</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${JSON.stringify(item.customizations)}`} className="flex justify-between items-center">
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{item.product.name}</h4>
                        <p className="text-gray-400 text-sm">Quantité: {item.quantity}</p>
                        {item.customizations && (
                          <div className="text-xs text-gray-500">
                            {item.customizations.color && <span>Couleur: {item.customizations.color}</span>}
                            {item.customizations.size && <span className="ml-2">Taille: {item.customizations.size}</span>}
                          </div>
                        )}
                      </div>
                      <span className="text-white font-medium">
                        {item.product.price * item.quantity}€
                      </span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4 bg-gray-700" />

                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Sous-total</span>
                    <span>{getTotalPrice()}€</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Livraison</span>
                    <span>Gratuite</span>
                  </div>
                  <Separator className="my-2 bg-gray-700" />
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span>{getTotalPrice()}€</span>
                  </div>
                </div>

                <Button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full mt-6 bg-white text-black hover:bg-gray-200 text-lg py-6"
                >
                  {isProcessing ? 'Traitement...' : 'Payer maintenant'}
                </Button>

                <p className="text-gray-400 text-xs text-center mt-4">
                  En passant commande, vous acceptez nos CGV et notre politique de confidentialité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
