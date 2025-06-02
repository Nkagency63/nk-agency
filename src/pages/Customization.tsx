
import React, { useState } from 'react';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';
import CustomizationAlerts from '@/components/customization/CustomizationAlerts';
import TextInput from '@/components/customization/TextInput';
import StyleSelection from '@/components/customization/StyleSelection';
import FontSelection from '@/components/customization/FontSelection';
import AdvancedOptions from '@/components/customization/AdvancedOptions';
import CustomizationPreview from '@/components/customization/CustomizationPreview';
import PricingAndActions from '@/components/customization/PricingAndActions';

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
  const [letterHeight, setLetterHeight] = useState([30]);
  const [letterWidth, setLetterWidth] = useState([100]);

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
        <CustomizationAlerts />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <TextInput 
              text={customization.text}
              onTextChange={(value) => handleInputChange('text', value)}
            />

            <StyleSelection 
              style={customization.style}
              onStyleChange={(value) => handleInputChange('style', value)}
            />

            {customization.style && (
              <>
                <AdvancedOptions
                  style={customization.style}
                  onTypeChange={(value) => handleInputChange('type', value)}
                  onColorChange={(value) => handleInputChange('color', value)}
                  onMaterialChange={(value) => handleInputChange('material', value)}
                  onSizeChange={(value) => handleInputChange('size', value)}
                  uploadedFile={uploadedFile}
                  onFileUpload={handleFileUpload}
                  description={customization.description}
                  onDescriptionChange={(value) => handleInputChange('description', value)}
                />

                <FontSelection 
                  onFontChange={(value) => handleInputChange('font', value)}
                />
              </>
            )}
          </div>

          <div className="space-y-6">
            <CustomizationPreview
              text={customization.text}
              style={customization.style}
              font={customization.font}
              color={customization.color}
              size={customization.size}
              letterHeight={letterHeight}
              letterWidth={letterWidth}
              onLetterHeightChange={setLetterHeight}
              onLetterWidthChange={setLetterWidth}
            />

            <PricingAndActions
              customization={customization}
              estimatedPrice={getEstimatedPrice()}
              onAddToCart={handleAddToCart}
              onQuoteRequest={handleQuoteRequest}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
