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
                        <SelectItem value="Anton-Regular">Anton-Regular</SelectItem>
                        <SelectItem value="Aero">Aero</SelectItem>
                        <SelectItem value="BasicSansHeavySFBold">BasicSansHeavySFBold</SelectItem>
                        <SelectItem value="BasicSansHeavySFBolditalic">BasicSansHeavySFBolditalic</SelectItem>
                        <SelectItem value="BlippoLightSF">BlippoLightSF</SelectItem>
                        <SelectItem value="DejaVuSansMono-Bold">DejaVuSansMono-Bold</SelectItem>
                        <SelectItem value="DejaVuSansMono-BoldOblique">DejaVuSansMono-BoldOblique</SelectItem>
                        <SelectItem value="DiamondSFBold">DiamondSFBold</SelectItem>
                        <SelectItem value="DiamondSFBoldItalic">DiamondSFBoldItalic</SelectItem>
                        <SelectItem value="FranklinGothic-DemiCond">FranklinGothic-DemiCond</SelectItem>
                        <SelectItem value="FranklinGothic-DemiItalic">FranklinGothic-DemiItalic</SelectItem>
                        <SelectItem value="FuturaBT-ExtraBlackCondensed">FuturaBT-ExtraBlackCondensed</SelectItem>
                        <SelectItem value="FuturaBT-ExtraBlackCondItalic">FuturaBT-ExtraBlackCondItalic</SelectItem>
                        <SelectItem value="FuturaBT-Heavy">FuturaBT-Heavy</SelectItem>
                        <SelectItem value="FuturaBT-HeavyItalic">FuturaBT-HeavyItalic</SelectItem>
                        <SelectItem value="Geometric415BT-BlackItalicA">Geometric415BT-BlackItalicA</SelectItem>
                        <SelectItem value="Geometric706BTMediumB">Geometric706BTMediumB</SelectItem>
                        <SelectItem value="GrizzlyITCbyBT-Regular">GrizzlyITCbyBT-Regular</SelectItem>
                        <SelectItem value="HPSimplified-Bold">HPSimplified-Bold</SelectItem>
                        <SelectItem value="HPSimplified-BoldItalic">HPSimplified-BoldItalic</SelectItem>
                        <SelectItem value="Humanist52IBT-BoldCondensed">Humanist52IBT-BoldCondensed</SelectItem>
                        <SelectItem value="Humanist52IBT-BoldItalic">Humanist52IBT-BoldItalic</SelectItem>
                        <SelectItem value="Impact">Impact</SelectItem>
                        <SelectItem value="KabelLTCbyBT-Demi">KabelLTCbyBT-Demi</SelectItem>
                        <SelectItem value="Lemon">Lemon</SelectItem>
                        <SelectItem value="LucidaSansDemiItalic">LucidaSansDemiItalic</SelectItem>
                        <SelectItem value="MSReferenceSansSerif-Bold">MSReferenceSansSerif-Bold</SelectItem>
                        <SelectItem value="MSReferenceSansSerif-BoldItalic">MSReferenceSansSerif-BoldItalic</SelectItem>
                        <SelectItem value="Neuropol-Regular">Neuropol-Regular</SelectItem>
                        <SelectItem value="OldSansBlack">OldSansBlack</SelectItem>
                        <SelectItem value="RakeslyRg-BoldItalic">RakeslyRg-BoldItalic</SelectItem>
                        <SelectItem value="Sansation Regular">Sansation Regular</SelectItem>
                        <SelectItem value="SourceSansPro-Semibold">SourceSansPro-Semibold</SelectItem>
                        <SelectItem value="SourceSansPro-Semiboldlt">SourceSansPro-Semiboldlt</SelectItem>
                        <SelectItem value="Trebuchet-Boldltalic">Trebuchet-Boldltalic</SelectItem>
                        <SelectItem value="TrebuchetMS-Bold">TrebuchetMS-Bold</SelectItem>
                        <SelectItem value="Verdana-Bold">Verdana-Bold</SelectItem>
                        <SelectItem value="Verdana-BoldItalic">Verdana-BoldItalic</SelectItem>
                        <SelectItem value="AccordSFBold">AccordSFBold</SelectItem>
                        <SelectItem value="AlfaSlabOne-Regular">AlfaSlabOne-Regular</SelectItem>
                        <SelectItem value="Arco">Arco</SelectItem>
                        <SelectItem value="Arco-Italic">Arco-Italic</SelectItem>
                        <SelectItem value="BangleBold">BangleBold</SelectItem>
                        <SelectItem value="BookAntiqua-Bold">BookAntiqua-Bold</SelectItem>
                        <SelectItem value="BookAntiqua-BoldItalic">BookAntiqua-BoldItalic</SelectItem>
                        <SelectItem value="CataneoBT-Bold">CataneoBT-Bold</SelectItem>
                        <SelectItem value="CheltenhamBT-BoldHeadline">CheltenhamBT-BoldHeadline</SelectItem>
                        <SelectItem value="CheltenhamBT-BoldItalicHeadline">CheltenhamBT-BoldItalicHeadline</SelectItem>
                        <SelectItem value="ChetenhamITCbyBT-Bold">ChetenhamITCbyBT-Bold</SelectItem>
                        <SelectItem value="CheltenhamITCbyBT-Bolditalic">CheltenhamITCbyBT-Bolditalic</SelectItem>
                        <SelectItem value="ClarendonBT-Bold">ClarendonBT-Bold</SelectItem>
                        <SelectItem value="DejaVuSerifCondensed-Bold">DejaVuSerifCondensed-Bold</SelectItem>
                        <SelectItem value="DejaVuSerifCondensed-BoldItalic">DejaVuSerifCondensed-BoldItalic</SelectItem>
                        <SelectItem value="FrizQuadratalITCbyBT-Bold">FrizQuadratalITCbyBT-Bold</SelectItem>
                        <SelectItem value="GalliardITCbyBT-BoldItalic">GalliardITCbyBT-BoldItalic</SelectItem>
                        <SelectItem value="GaramondITCbyBTBold">GaramondITCbyBTBold</SelectItem>
                        <SelectItem value="GaramondITCbyBTBoldItalic">GaramondITCbyBTBoldItalic</SelectItem>
                        <SelectItem value="GrouchITCbyBT-Regular">GrouchITCbyBT-Regular</SelectItem>
                        <SelectItem value="KabarettD">KabarettD</SelectItem>
                        <SelectItem value="LiberationSerif-Bold">LiberationSerif-Bold</SelectItem>
                        <SelectItem value="LiberationSerif-BoldItalic">LiberationSerif-BoldItalic</SelectItem>
                        <SelectItem value="PalatinoLinotype-Bold">PalatinoLinotype-Bold</SelectItem>
                        <SelectItem value="Palatinotype-BoldItalic">Palatinotype-BoldItalic</SelectItem>
                        <SelectItem value="PcBrussels-Demi">PcBrussels-Demi</SelectItem>
                        <SelectItem value="PcBrussels-DemiItalic">PcBrussels-DemiItalic</SelectItem>
                        <SelectItem value="RenaultMN-Bold-Rockwell-Bold">RenaultMN-Bold-Rockwell-Bold</SelectItem>
                        <SelectItem value="Rockwell-BoldItalic">Rockwell-BoldItalic</SelectItem>
                        <SelectItem value="SeabirdSFBold">SeabirdSFBold</SelectItem>
                        <SelectItem value="SeabirdSFBoldItalic">SeabirdSFBoldItalic</SelectItem>
                        <SelectItem value="Subway-Black">Subway-Black</SelectItem>
                        <SelectItem value="TimesNewRomanPS-BoldItalicMT">TimesNewRomanPS-BoldItalicMT</SelectItem>
                        <SelectItem value="TimesNewRomanPS-BoldMT">TimesNewRomanPS-BoldMT</SelectItem>
                        <SelectItem value="Titania">Titania</SelectItem>
                        <SelectItem value="ABADDON">ABADDON</SelectItem>
                        <SelectItem value="AdimesDBNormal">AdimesDBNormal</SelectItem>
                        <SelectItem value="AdventurerBlackSF">AdventurerBlackSF</SelectItem>
                        <SelectItem value="AdventurerBlackSFItalic">AdventurerBlackSFItalic</SelectItem>
                        <SelectItem value="AKAPOSSE">AKAPOSSE</SelectItem>
                        <SelectItem value="Alba">Alba</SelectItem>
                        <SelectItem value="Amarante-Regular">Amarante-Regular</SelectItem>
                        <SelectItem value="AmigaForever">AmigaForever</SelectItem>
                        <SelectItem value="ANNACITCIT">ANNACITCIT</SelectItem>
                        <SelectItem value="Batavia">Batavia</SelectItem>
                        <SelectItem value="Belush-Regular">Belush-Regular</SelectItem>
                        <SelectItem value="Bombardier">Bombardier</SelectItem>
                        <SelectItem value="Broadway">Broadway</SelectItem>
                        <SelectItem value="Chokko">Chokko</SelectItem>
                        <SelectItem value="CloisterBlackBT-Regular">CloisterBlackBT-Regular</SelectItem>
                        <SelectItem value="CroissantD">CroissantD</SelectItem>
                        <SelectItem value="DAVIDBOLDBT-REGULAR">DAVIDBOLDBT-REGULAR</SelectItem>
                        <SelectItem value="Demonized">Demonized</SelectItem>
                        <SelectItem value="EastMarket">EastMarket</SelectItem>
                        <SelectItem value="ELDURANGO">ELDURANGO</SelectItem>
                        <SelectItem value="ExpoPlain">ExpoPlain</SelectItem>
                        <SelectItem value="FlamencoD">FlamencoD</SelectItem>
                        <SelectItem value="ForteMT">ForteMT</SelectItem>
                        <SelectItem value="Germany">Germany</SelectItem>
                        <SelectItem value="InversSF">InversSF</SelectItem>
                        <SelectItem value="InviteSF">InviteSF</SelectItem>
                        <SelectItem value="InviteSFItalic">InviteSFItalic</SelectItem>
                        <SelectItem value="WEYPUNCHPLAIN">WEYPUNCHPLAIN</SelectItem>
                        <SelectItem value="LatinWide">LatinWide</SelectItem>
                        <SelectItem value="Magenta">Magenta</SelectItem>
                        <SelectItem value="Nougat-ExtraBlack">Nougat-ExtraBlack</SelectItem>
                        <SelectItem value="Urderpizza">Urderpizza</SelectItem>
                        <SelectItem value="OSAKA-SANSSERIF">OSAKA-SANSSERIF</SelectItem>
                        <SelectItem value="Prolamina">Prolamina</SelectItem>
                        <SelectItem value="Ravie">Ravie</SelectItem>
                        <SelectItem value="Realvirtue">Realvirtue</SelectItem>
                        <SelectItem value="REVERTBRK">REVERTBRK</SelectItem>
                        <SelectItem value="Saddlebag-Black">Saddlebag-Black</SelectItem>
                        <SelectItem value="Sancreek-Regular">Sancreek-Regular</SelectItem>
                        <SelectItem value="SLAMESEKatSONG">SLAMESEKatSONG</SelectItem>
                        <SelectItem value="STENCIL">STENCIL</SelectItem>
                        <SelectItem value="UltraSerifSF">UltraSerifSF</SelectItem>
                        <SelectItem value="UnofficialBoPFont">UnofficialBoPFont</SelectItem>
                        <SelectItem value="XpressSFBold">XpressSFBold</SelectItem>
                        <SelectItem value="XpressSFBoldItalic">XpressSFBoldItalic</SelectItem>
                        <SelectItem value="Aeolus">Aeolus</SelectItem>
                        <SelectItem value="Airstream">Airstream</SelectItem>
                        <SelectItem value="AmazeBold">AmazeBold</SelectItem>
                        <SelectItem value="BallparkWeiner">BallparkWeiner</SelectItem>
                        <SelectItem value="BarcBrushDBBold">BarcBrushDBBold</SelectItem>
                        <SelectItem value="BerkshireSwash-Regular">BerkshireSwash-Regular</SelectItem>
                        <SelectItem value="Birdsof Paradise">Birdsof Paradise</SelectItem>
                        <SelectItem value="BlackDiamonds">BlackDiamonds</SelectItem>
                        <SelectItem value="BukkariScript">BukkariScript</SelectItem>
                        <SelectItem value="CaledaryHands">CaledaryHands</SelectItem>
                        <SelectItem value="Cassia">Cassia</SelectItem>
                        <SelectItem value="ComicSansMSBoldItalic">ComicSansMSBoldItalic</SelectItem>
                        <SelectItem value="CoquetteRegular">CoquetteRegular</SelectItem>
                        <SelectItem value="DisneyPrint">DisneyPrint</SelectItem>
                        <SelectItem value="DJBMessyAmandaGoesBold">DJBMessyAmandaGoesBold</SelectItem>
                        <SelectItem value="EmPower42-Condensed">EmPower42-Condensed</SelectItem>
                        <SelectItem value="EnviroD">EnviroD</SelectItem>
                        <SelectItem value="FenwayParkSF">FenwayParkSF</SelectItem>
                        <SelectItem value="FlashD-Ligh">FlashD-Ligh</SelectItem>
                        <SelectItem value="Freehand521BJ-RegularC">Freehand521BJ-RegularC</SelectItem>
                        <SelectItem value="HarlowSolid">HarlowSolid</SelectItem>
                        <SelectItem value="HaydonBrush">HaydonBrush</SelectItem>
                        <SelectItem value="KaushanScript-Regular">KaushanScript-Regular</SelectItem>
                        <SelectItem value="KinksDecor">KinksDecor</SelectItem>
                        <SelectItem value="LaurenScript">LaurenScript</SelectItem>
                        <SelectItem value="Lemon-Regular">Lemon-Regular</SelectItem>
                        <SelectItem value="LilyScriptOne-Regular">LilyScriptOne-Regular</SelectItem>
                        <SelectItem value="Lollipop">Lollipop</SelectItem>
                        <SelectItem value="MarketingScript">MarketingScript</SelectItem>
                        <SelectItem value="OleoScriot-Regular">OleoScriot-Regular</SelectItem>
                        <SelectItem value="Pristina-Regular">Pristina-Regular</SelectItem>
                        <SelectItem value="ReguitcedScript">ReguitcedScript</SelectItem>
                        <SelectItem value="Skelman">Skelman</SelectItem>
                        <SelectItem value="WrexhamScript">WrexhamScript</SelectItem>
                        <SelectItem value="SimplyRounded">SimplyRounded</SelectItem>
                        <SelectItem value="MontserraSemiBold">MontserraSemiBold</SelectItem>
                        <SelectItem value="Oswald">Oswald</SelectItem>
                        <SelectItem value="Timeless">Timeless</SelectItem>
                        <SelectItem value="TimelessBold">TimelessBold</SelectItem>
                        <SelectItem value="Frutiger-bold-cn">Frutiger-bold-cn</SelectItem>
                        <SelectItem value="SellYourSoul">SellYourSoul</SelectItem>
                        <SelectItem value="ChunkFive">ChunkFive</SelectItem>
                        <SelectItem value="Arial">Arial</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

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
