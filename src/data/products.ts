
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'neon-1',
    name: 'Enseigne Néon Personnalisée',
    description: 'Enseigne néon LED personnalisée avec votre texte et couleur au choix. Parfaite pour restaurants, bars et commerces.',
    price: 299,
    category: 'neon',
    image: 'https://images.unsplash.com/photo-1563842431151-15af97dd17c4?auto=format&fit=crop&q=80&w=1000',
    features: ['Tubes LED néon flexibles', 'Consommation réduite', 'Étanche IP65', 'Dimmer inclus'],
    customizable: true,
    inStock: true,
    colorOptions: ['Rouge', 'Bleu', 'Vert', 'Rose', 'Blanc', 'Jaune'],
    sizeOptions: ['50cm', '100cm', '150cm', '200cm']
  },
  {
    id: 'letters-1',
    name: 'Lettres Lumineuses 3D',
    description: 'Lettres découpées en acrylique avec rétroéclairage LED. Design moderne et élégant.',
    price: 450,
    category: 'letters',
    image: 'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?auto=format&fit=crop&q=80&w=1000',
    features: ['Acrylique haute qualité', 'LED haute luminosité', 'Fixation murale incluse', 'Garantie 2 ans'],
    customizable: true,
    inStock: true,
    colorOptions: ['Blanc', 'Noir', 'Transparent'],
    sizeOptions: ['20cm', '30cm', '40cm', '50cm']
  },
  {
    id: 'caisson-1',
    name: 'Caisson Lumineux Double Face',
    description: 'Caisson lumineux professionnel avec éclairage LED uniforme. Idéal pour enseignes de magasins.',
    price: 680,
    category: 'caisson',
    image: 'https://images.unsplash.com/photo-1563620915-a8e473771545?auto=format&fit=crop&q=80&w=1000',
    features: ['Structure aluminium', 'Double face', 'Éclairage uniforme', 'Résistant aux intempéries'],
    customizable: true,
    inStock: true,
    sizeOptions: ['60x40cm', '80x60cm', '100x70cm', '120x80cm']
  },
  {
    id: 'led-1',
    name: 'Panneau LED Programmable',
    description: 'Panneau LED haute résolution programmable pour animations et messages dynamiques.',
    price: 890,
    category: 'led',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
    features: ['Résolution HD', 'Programmation WiFi', 'Contrôle à distance', 'Résistant IP54'],
    customizable: false,
    inStock: true,
    sizeOptions: ['64x32cm', '96x48cm', '128x64cm']
  },
  {
    id: 'retro-1',
    name: 'Panneau Rétroéclairé',
    description: 'Panneau avec impression haute définition et rétroéclairage LED uniforme.',
    price: 320,
    category: 'retro',
    image: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&q=80&w=1000',
    features: ['Impression UV', 'Cadre fin aluminium', 'Changement visuel facile', 'Éclairage uniforme'],
    customizable: true,
    inStock: true,
    sizeOptions: ['A4', 'A3', 'A2', 'A1', 'A0']
  },
  {
    id: 'neon-2',
    name: 'Enseigne Néon Vintage',
    description: 'Reproduction authentique de néon vintage avec effet rétro garanti.',
    price: 520,
    category: 'neon',
    image: 'https://images.unsplash.com/photo-1563842431151-15af97dd17c4?auto=format&fit=crop&q=80&w=1000',
    features: ['Style vintage authentique', 'Effet flickering', 'Montage mural robuste', 'Dimmer vintage'],
    customizable: true,
    inStock: true,
    colorOptions: ['Rouge vintage', 'Bleu nuit', 'Blanc chaud', 'Ambre'],
    sizeOptions: ['80cm', '120cm', '160cm']
  }
];

export const categories = [
  { id: 'all', name: 'Tous les produits' },
  { id: 'neon', name: 'Enseignes Néon' },
  { id: 'letters', name: 'Lettres Lumineuses' },
  { id: 'caisson', name: 'Caissons Lumineux' },
  { id: 'led', name: 'Enseignes LED' },
  { id: 'retro', name: 'Panneaux Rétroéclairés' }
];
