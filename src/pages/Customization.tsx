
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Palette, Type, Ruler, Upload, Eye, ShoppingCart, Move, AlertTriangle, Truck, Info } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';

const Customization = () => {
  const { addToCart } = useCart();
  const [customization, setCustomization] = useState({
    text: '',
    style: '',
    type: '',
    font: '',
    color: '',
    size: '',
    material: '',
    description: ''
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [letterHeight, setLetterHeight] = useState([30]); // Hauteur totale en cm
  const [letterWidth, setLetterWidth] = useState([100]); // Longueur totale en cm

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
    if (!customization.text || !customization.style) {
      toast.error('Veuillez remplir le texte et choisir un style pour votre enseigne');
      return;
    }

    const customProduct = {
      id: `custom-${Date.now()}`,
      name: `${customization.text} - ${customization.style}`,
      description: `Lettres personnalisées "${customization.text}"`,
      price: getEstimatedPrice(),
      category: 'Personnalisé',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80',
      features: [`Texte: ${customization.text}`, `Style: ${customization.style}`, `Couleur: ${customization.color}`, `Taille: ${customization.size}`],
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
    if (customization.style === 'lettres-lumineuses') basePrice += 100;
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
        {/* Alertes importantes */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Étape 1: Texte de l'enseigne */}
            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Type className="mr-2" />
                  1. Insérez le texte pour votre enseigne
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
              </CardContent>
            </Card>

            {/* Étape 2: Style des lettres */}
            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Type className="mr-2" />
                  2. Choisissez un style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={customization.style} 
                  onValueChange={(value) => handleInputChange('style', value)}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 p-4 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors">
                    <RadioGroupItem value="lettres-decoupees" id="lettres-decoupees" />
                    <Label htmlFor="lettres-decoupees" className="text-white cursor-pointer flex-1">
                      <div>
                        <div className="font-semibold">Lettres découpées</div>
                        <div className="text-gray-400 text-sm">Lettres en relief sans éclairage</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors">
                    <RadioGroupItem value="lettres-lumineuses" id="lettres-lumineuses" />
                    <Label htmlFor="lettres-lumineuses" className="text-white cursor-pointer flex-1">
                      <div>
                        <div className="font-semibold">Lettres lumineuses</div>
                        <div className="text-gray-400 text-sm">Lettres avec éclairage LED +100€</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Options avancées */}
            {customization.style && (
              <>
                <Card className="bg-secondary border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Type className="mr-2" />
                      Type spécifique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select onValueChange={(value) => handleInputChange('type', value)}>
                      <SelectTrigger className="bg-black border-gray-700 text-white">
                        <SelectValue placeholder="Choisir le type spécifique (optionnel)" />
                      </SelectTrigger>
                      <SelectContent>
                        {customization.style === 'lettres-decoupees' ? (
                          <>
                            <SelectItem value="pvc">PVC</SelectItem>
                            <SelectItem value="alu">ALU</SelectItem>
                            <SelectItem value="adhesif">ADHESIF</SelectItem>
                          </>
                        ) : (
                          <>
                            <SelectItem value="retro-pvc">Rétro PVC</SelectItem>
                            <SelectItem value="boitier-alu">Boitier ALU</SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                <Card className="bg-secondary border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Type className="mr-2" />
                      Style de police
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>

                {customization.style === 'lettres-lumineuses' && (
                  <Card className="bg-secondary border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Palette className="mr-2" />
                        Couleur d'éclairage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
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
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-secondary border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Palette className="mr-2" />
                      Matériau des lettres
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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
              </>
            )}
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
                          customization.style === 'lettres-lumineuses' ? (
                            customization.color === 'rouge' ? 'text-red-400' :
                            customization.color === 'bleu' ? 'text-blue-400' :
                            customization.color === 'vert' ? 'text-green-400' :
                            customization.color === 'jaune' ? 'text-yellow-400' :
                            customization.color === 'multicolore' ? 'text-pink-400' :
                            'text-white'
                          ) : 'text-gray-300'
                        }`}
                        style={{
                          fontFamily: customization.font === 'script' ? 'cursive' :
                                    customization.font === 'impact' ? 'Impact' :
                                    customization.font || 'inherit',
                          textShadow: customization.style === 'lettres-lumineuses' ? '0 0 20px currentColor' : 'none'
                        }}
                      >
                        {customization.text}
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {customization.style && (
                          <Badge variant="secondary">{customization.style}</Badge>
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

                {/* Section dimensions et schéma */}
                {customization.text && (
                  <div className="mt-6 space-y-6">
                    {/* Schéma de l'encadrement */}
                    <div className="bg-gray-900 rounded-lg p-6">
                      <h4 className="text-white font-semibold mb-4 text-center">Schéma de l'encadrement</h4>
                      <div className="relative bg-black rounded border-2 border-gray-600 p-8 mx-auto max-w-md">
                        {/* Schéma avec dimensions */}
                        <div className="relative border-2 border-dashed border-gray-400 p-4 min-h-[120px] flex items-center justify-center">
                          <span className="text-white text-sm font-medium">{customization.text}</span>
                          
                          {/* Flèche et dimension hauteur (a) */}
                          <div className="absolute -left-8 top-0 bottom-0 flex items-center">
                            <div className="flex flex-col items-center">
                              <div className="h-full border-l border-gray-400"></div>
                              <div className="absolute top-0 w-2 h-2 border-t border-l border-gray-400 transform -rotate-45"></div>
                              <div className="absolute bottom-0 w-2 h-2 border-b border-r border-gray-400 transform -rotate-45"></div>
                              <span className="absolute -left-8 text-gray-300 text-xs whitespace-nowrap transform -rotate-90">
                                a - {letterHeight[0]} cm
                              </span>
                            </div>
                          </div>
                          
                          {/* Flèche et dimension longueur (b) */}
                          <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
                            <div className="flex items-center">
                              <div className="w-full border-b border-gray-400"></div>
                              <div className="absolute left-0 w-2 h-2 border-b border-l border-gray-400 transform rotate-45"></div>
                              <div className="absolute right-0 w-2 h-2 border-t border-r border-gray-400 transform rotate-45"></div>
                              <span className="absolute -bottom-6 text-gray-300 text-xs whitespace-nowrap">
                                b - {letterWidth[0]} cm
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contrôles pour ajuster les dimensions */}
                    <Button 
                      variant="outline"
                      className="w-full border-gray-600 text-white hover:bg-gray-800"
                    >
                      <Move className="mr-2" size={16} />
                      Déplacer le bouton pour ajuster les dimensions
                    </Button>
                    
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm mb-2 block">
                          a - Hauteur totale: {letterHeight[0]} cm
                        </Label>
                        <Slider
                          value={letterHeight}
                          onValueChange={setLetterHeight}
                          max={200}
                          min={10}
                          step={5}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm mb-2 block">
                          b - Longueur totale: {letterWidth[0]} cm
                        </Label>
                        <Slider
                          value={letterWidth}
                          onValueChange={setLetterWidth}
                          max={500}
                          min={20}
                          step={10}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
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
                onClick={handleAddToCart}
                disabled={!customization.text || !customization.style}
                className="w-full bg-white text-black hover:bg-gray-200 text-lg py-6"
              >
                <ShoppingCart size={20} className="mr-2" />
                Ajouter au panier
              </Button>
              
              <Button 
                onClick={handleQuoteRequest}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
