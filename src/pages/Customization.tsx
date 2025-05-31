import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Palette, Type, Ruler, Upload, Eye, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';

const Customization = () => {
  const { addToCart } = useCart();
  const [customization, setCustomization] = useState({
    type: '',
    text: '',
    font: '',
    color: '',
    size: '',
    material: '',
    description: ''
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setCustomization(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleAddToCart = () => {
    if (!customization.type || !customization.text) {
      toast.error('Veuillez remplir au minimum le type et le texte de votre enseigne');
      return;
    }

    const customProduct = {
      id: `custom-${Date.now()}`,
      name: `${customization.text} - ${customization.type}`,
      description: `Lettres personnalisées "${customization.text}"`,
      price: getEstimatedPrice(),
      category: 'Personnalisé',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80',
      features: [`Texte: ${customization.text}`, `Type: ${customization.type}`, `Couleur: ${customization.color}`, `Taille: ${customization.size}`],
      customizable: true,
      inStock: true
    };

    addToCart(customProduct, customization);
    toast.success('Vos lettres personnalisées ont été ajoutées au panier !');
  };

  const handleQuoteRequest = () => {
    toast.success('Demande de devis envoyée ! Nous vous contacterons sous 24h pour vos lettres personnalisées.');
  };

  const getEstimatedPrice = () => {
    let basePrice = 150;
    if (customization.size === 'large') basePrice += 100;
    if (customization.size === 'xl') basePrice += 200;
    if (customization.material === 'premium') basePrice += 150;
    return basePrice;
  };

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-16 mb-12 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-text">Créer Mes Lettres</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Concevez vos lettres et logos lumineux sur mesure. Kit d'installation fourni pour une pose facile.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Type className="mr-2" />
                  Type de lettres / logo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Choisir le type de lettres" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lettres-decoupees-leds">Lettres découpées et lumineuses à leds sur mesure</SelectItem>
                    <SelectItem value="lettres-led">Lettres LED Lumineuses</SelectItem>
                    <SelectItem value="lettres-neon">Lettres Néon Flexible</SelectItem>
                    <SelectItem value="lettres-decoupees">Lettres Découpées (sans éclairage)</SelectItem>
                    <SelectItem value="logo-lumineux">Logo Lumineux Personnalisé</SelectItem>
                    <SelectItem value="lettres-relief">Lettres en Relief</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Type className="mr-2" />
                  Votre texte ou nom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="text">Nom de votre commerce / texte *</Label>
                  <Input
                    id="text"
                    value={customization.text}
                    onChange={(e) => handleInputChange('text', e.target.value)}
                    placeholder="Ex: BOULANGERIE, RESTAURANT..."
                    className="bg-black border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="font">Style de police</Label>
                  <Select onValueChange={(value) => handleInputChange('font', value)}>
                    <SelectTrigger className="bg-black border-gray-700 text-white">
                      <SelectValue placeholder="Choisir un style de police" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moderne">Moderne (Arial/Helvetica)</SelectItem>
                      <SelectItem value="classique">Classique (Times)</SelectItem>
                      <SelectItem value="script">Script (Élégant)</SelectItem>
                      <SelectItem value="impact">Impact (Gras)</SelectItem>
                      <SelectItem value="personnalisee">Police personnalisée</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Palette className="mr-2" />
                  Couleur et matériau
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="color">Couleur d'éclairage</Label>
                  <Select onValueChange={(value) => handleInputChange('color', value)}>
                    <SelectTrigger className="bg-black border-gray-700 text-white">
                      <SelectValue placeholder="Choisir la couleur d'éclairage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blanc-chaud">Blanc Chaud</SelectItem>
                      <SelectItem value="blanc-froid">Blanc Froid</SelectItem>
                      <SelectItem value="rouge">Rouge</SelectItem>
                      <SelectItem value="bleu">Bleu</SelectItem>
                      <SelectItem value="vert">Vert</SelectItem>
                      <SelectItem value="jaune">Jaune</SelectItem>
                      <SelectItem value="multicolore">Multicolore (RGB)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="material">Matériau des lettres</Label>
                  <Select onValueChange={(value) => handleInputChange('material', value)}>
                    <SelectTrigger className="bg-black border-gray-700 text-white">
                      <SelectValue placeholder="Choisir le matériau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acrylique">Acrylique (Standard)</SelectItem>
                      <SelectItem value="aluminium">Aluminium (Premium) +150€</SelectItem>
                      <SelectItem value="pvc">PVC (Économique)</SelectItem>
                      <SelectItem value="inox">Inox (Haut de gamme)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Ruler className="mr-2" />
                  Hauteur des lettres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(value) => handleInputChange('size', value)}>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Choisir la hauteur des lettres" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">10-20 cm (Petites enseignes)</SelectItem>
                    <SelectItem value="medium">20-40 cm (Standard)</SelectItem>
                    <SelectItem value="large">40-60 cm (Grandes) +100€</SelectItem>
                    <SelectItem value="xl">60+ cm (Très grandes) +200€</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Upload className="mr-2" />
                  Votre logo (optionnel)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="file">Télécharger votre logo pour devis personnalisé</Label>
                  <input
                    id="file"
                    type="file"
                    accept="image/*,.pdf,.ai,.eps"
                    onChange={handleFileUpload}
                    className="w-full mt-2 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-white file:text-black hover:file:bg-gray-200"
                  />
                  {uploadedFile && (
                    <p className="text-green-400 text-sm mt-2">
                      Logo téléchargé: {uploadedFile.name}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Informations complémentaires</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={customization.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Précisions sur l'installation, contraintes particulières, demandes spéciales..."
                  className="bg-black border-gray-700 text-white min-h-[100px]"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Eye className="mr-2" />
                  Aperçu de vos lettres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black rounded-lg p-8 text-center min-h-[200px] flex items-center justify-center">
                  {customization.text ? (
                    <div className="space-y-4">
                      <div 
                        className={`text-4xl font-bold ${
                          customization.color === 'rouge' ? 'text-red-400' :
                          customization.color === 'bleu' ? 'text-blue-400' :
                          customization.color === 'vert' ? 'text-green-400' :
                          customization.color === 'jaune' ? 'text-yellow-400' :
                          customization.color === 'multicolore' ? 'text-pink-400' :
                          'text-white'
                        }`}
                        style={{
                          fontFamily: customization.font === 'script' ? 'cursive' :
                                    customization.font === 'impact' ? 'Impact' :
                                    customization.font || 'inherit',
                          textShadow: '0 0 20px currentColor'
                        }}
                      >
                        {customization.text}
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {customization.type && (
                          <Badge variant="secondary">{customization.type}</Badge>
                        )}
                        {customization.color && (
                          <Badge variant="secondary">{customization.color}</Badge>
                        )}
                        {customization.size && (
                          <Badge variant="secondary">{customization.size}</Badge>
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-400">Saisissez votre texte pour voir l'aperçu</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Prix estimé</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    À partir de {getEstimatedPrice()}€
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Kit d'installation inclus • Prix indicatif
                  </p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Lettres de base</span>
                      <span>150€</span>
                    </div>
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
                onClick={handleAddToCart}
                disabled={!customization.type || !customization.text}
                className="w-full bg-white text-black hover:bg-gray-200 text-lg py-6"
              >
                <ShoppingCart size={20} className="mr-2" />
                Ajouter au panier
              </Button>
              
              <Button 
                onClick={handleQuoteRequest}
                disabled={!customization.type || !customization.text}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
