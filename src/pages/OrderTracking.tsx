
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderData, setOrderData] = useState<any>(null);

  // Données fictives pour la démonstration
  const mockOrderData = {
    id: 'CMD-2024-001',
    status: 'processing',
    orderDate: '2024-01-15',
    estimatedDelivery: '2024-01-22',
    items: [
      { name: 'Enseigne Néon Personnalisée', quantity: 1, price: 299 }
    ],
    total: 299,
    timeline: [
      { status: 'pending', label: 'Commande reçue', date: '2024-01-15', completed: true },
      { status: 'processing', label: 'En fabrication', date: '2024-01-16', completed: true },
      { status: 'shipped', label: 'Expédiée', date: null, completed: false },
      { status: 'delivered', label: 'Livrée', date: null, completed: false }
    ]
  };

  const handleSearch = () => {
    if (orderNumber.trim()) {
      // Simuler la recherche de commande
      setOrderData(mockOrderData);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="text-yellow-400" size={20} />;
      case 'processing': return <Package className="text-blue-400" size={20} />;
      case 'shipped': return <Truck className="text-purple-400" size={20} />;
      case 'delivered': return <CheckCircle className="text-green-400" size={20} />;
      default: return <Clock className="text-gray-400" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-600';
      case 'processing': return 'bg-blue-600';
      case 'shipped': return 'bg-purple-600';
      case 'delivered': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-16 mb-12 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-text">Suivi de commande</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Suivez l'état de votre commande en temps réel avec votre numéro de commande.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="bg-secondary border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Rechercher votre commande</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="orderNumber">Numéro de commande</Label>
                <Input
                  id="orderNumber"
                  placeholder="Ex: CMD-2024-001"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="bg-black border-gray-700 text-white"
                />
              </div>
              <div className="flex items-end">
                <Button onClick={handleSearch} className="bg-white text-black hover:bg-gray-200">
                  <Search size={16} className="mr-2" />
                  Rechercher
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {orderData && (
          <div className="space-y-6">
            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Commande {orderData.id}</CardTitle>
                  <Badge className={getStatusColor(orderData.status)}>
                    {orderData.status === 'processing' ? 'En fabrication' : 
                     orderData.status === 'shipped' ? 'Expédiée' :
                     orderData.status === 'delivered' ? 'Livrée' : 'En attente'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">Date de commande</p>
                    <p className="text-white font-medium">{new Date(orderData.orderDate).toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Livraison estimée</p>
                    <p className="text-white font-medium">{new Date(orderData.estimatedDelivery).toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Total</p>
                    <p className="text-white font-medium">{orderData.total}€</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Articles commandés</h3>
                  {orderData.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center bg-black p-3 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-gray-400 text-sm">Quantité: {item.quantity}</p>
                      </div>
                      <p className="text-white font-medium">{item.price}€</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Progression de la commande</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.timeline.map((step: any, index: number) => (
                    <div key={index} className={`flex items-center space-x-4 ${step.completed ? 'opacity-100' : 'opacity-50'}`}>
                      <div className={`p-2 rounded-full ${step.completed ? 'bg-green-600' : 'bg-gray-600'}`}>
                        {getStatusIcon(step.status)}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${step.completed ? 'text-white' : 'text-gray-400'}`}>
                          {step.label}
                        </p>
                        {step.date && (
                          <p className="text-gray-400 text-sm">
                            {new Date(step.date).toLocaleDateString('fr-FR')}
                          </p>
                        )}
                      </div>
                      {step.completed && (
                        <CheckCircle className="text-green-400" size={20} />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {!orderData && orderNumber && (
          <Card className="bg-secondary border-gray-800">
            <CardContent className="text-center py-8">
              <p className="text-gray-400">Aucune commande trouvée avec ce numéro.</p>
              <p className="text-gray-500 text-sm mt-2">
                Vérifiez votre numéro de commande ou contactez notre service client.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
