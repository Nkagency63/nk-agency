
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Palette, Type, Ruler, Upload, Eye } from 'lucide-react';
import { toast } from 'sonner';

const Customization = () => {
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

  const handleSubmit = () => {
    toast.success('Demande de personnalisation envoyée ! Nous vous contacterons sous 24h.');
  };

  const getEstimatedPrice = () => {
    let basePrice = 200;
    if (customization.size === 'large') basePrice += 100;
    if (customization.size === 'xl') basePrice += 200;
    if (customization.material === 'premium') basePrice += 150;
    return basePrice;
  };

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-16 mb-12 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-text">Personnalisation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Créez votre enseigne sur mesure avec notre outil de personnalisation avancé.
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
                  Type d'enseigne
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Choisir le type d'enseigne" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neon">Enseigne Néon</SelectItem>
                    <SelectItem value="letters">Lettres Lumineuses</SelectItem>
                    <SelectItem value="caisson">Caisson Lumineux</SelectItem>
                    <SelectItem value="led">Panneau LED</SelectItem>
                    <SelectItem value="retro">Panneau Rétroéclairé</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Type className="mr-2" />
                  Texte et Police
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="text">Texte de l'enseigne *</Label>
                  <Input
                    id="text"
                    value={customization.text}
                    onChange={(e) => handleInputChange('text', e.target.value)}
                    placeholder="Votre texte ici"
                    className="bg-black border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="font">Police</Label>
                  <Select onValueChange={(value) => handleInputChange('font', value)}>
                    <SelectTrigger className="bg-black border-gray-700 text-white">
                      <SelectValue placeholder="Choisir une police" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="arial">Arial</SelectItem>
                      <SelectItem value="helvetica">Helvetica</SelectItem>
                      <SelectItem value="times">Times New Roman</SelectItem>
                      <SelectItem value="script">Script MT</SelectItem>
                      <SelectItem value="impact">Impact</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Palette className="mr-2" />
                  Couleur et Matériau
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="color">Couleur principale</Label>
                  <Select onValueChange={(value) => handleInputChange('color', value)}>
                    <SelectTrigger className="bg-black border-gray-700 text-white">
                      <SelectValue placeholder="Choisir une couleur" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="red">Rouge</SelectItem>
                      <SelectItem value="blue">Bleu</SelectItem>
                      <SelectItem value="green">Vert</SelectItem>
                      <SelectItem value="yellow">Jaune</SelectItem>
                      <SelectItem value="white">Blanc</SelectItem>
                      <SelectItem value="pink">Rose</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="material">Matériau</Label>
                  <Select onValueChange={(value) => handleInputChange('material', value)}>
                    <SelectTrigger className="bg-black border-gray-700 text-white">
                      <SelectValue placeholder="Choisir un matériau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (Acrylique)</SelectItem>
                      <SelectItem value="premium">Premium (Aluminium)</SelectItem>
                      <SelectItem value="pvc">PVC</SelectItem>
                      <SelectItem value="metal">Métal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Ruler className="mr-2" />
                  Dimensions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(value) => handleInputChange('size', value)}>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Choisir la taille" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Petit (jusqu'à 50cm)</SelectItem>
                    <SelectItem value="medium">Moyen (50-100cm)</SelectItem>
                    <SelectItem value="large">Grand (100-150cm) +100€</SelectItem>
                    <SelectItem value="xl">Très Grand (150cm+) +200€</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Upload className="mr-2" />
                  Logo ou Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="file">Télécharger un fichier (optionnel)</Label>
                  <input
                    id="file"
                    type="file"
                    accept="image/*,.pdf,.ai,.eps"
                    onChange={handleFileUpload}
                    className="w-full mt-2 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-white file:text-black hover:file:bg-gray-200"
                  />
                  {uploadedFile && (
                    <p className="text-green-400 text-sm mt-2">
                      Fichier téléchargé: {uploadedFile.name}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Description supplémentaire</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={customization.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Décrivez vos besoins spécifiques, contraintes d'installation, etc."
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
                  Aperçu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black rounded-lg p-8 text-center min-h-[200px] flex items-center justify-center">
                  {customization.text ? (
                    <div className="space-y-4">
                      <div 
                        className={`text-4xl font-bold ${
                          customization.color === 'red' ? 'text-red-400' :
                          customization.color === 'blue' ? 'text-blue-400' :
                          customization.color === 'green' ? 'text-green-400' :
                          customization.color === 'yellow' ? 'text-yellow-400' :
                          customization.color === 'pink' ? 'text-pink-400' :
                          'text-white'
                        }`}
                        style={{
                          fontFamily: customization.font === 'script' ? 'cursive' :
                                    customization.font === 'impact' ? 'Impact' :
                                    customization.font || 'inherit'
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
                    <p className="text-gray-400">L'aperçu apparaîtra ici</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Estimation de prix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    À partir de {getEstimatedPrice()}€
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Prix indicatif, devis détaillé après validation
                  </p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Base</span>
                      <span>200€</span>
                    </div>
                    {customization.size === 'large' && (
                      <div className="flex justify-between">
                        <span>Taille grande</span>
                        <span>+100€</span>
                      </div>
                    )}
                    {customization.size === 'xl' && (
                      <div className="flex justify-between">
                        <span>Très grande taille</span>
                        <span>+200€</span>
                      </div>
                    )}
                    {customization.material === 'premium' && (
                      <div className="flex justify-between">
                        <span>Matériau premium</span>
                        <span>+150€</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={handleSubmit}
              disabled={!customization.type || !customization.text}
              className="w-full bg-white text-black hover:bg-gray-200 text-lg py-6"
            >
              Demander un devis personnalisé
            </Button>

            <p className="text-gray-400 text-sm text-center">
              Nous vous recontacterons sous 24h avec un devis détaillé et des conseils personnalisés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
