
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Type, Palette, Ruler, Upload } from 'lucide-react';

interface AdvancedOptionsProps {
  style: string;
  onTypeChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onMaterialChange: (value: string) => void;
  onSizeChange: (value: string) => void;
  uploadedFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  onDescriptionChange: (value: string) => void;
}

const AdvancedOptions = ({
  style,
  onTypeChange,
  onColorChange,
  onMaterialChange,
  onSizeChange,
  uploadedFile,
  onFileUpload,
  description,
  onDescriptionChange
}: AdvancedOptionsProps) => {
  if (!style) return null;

  return (
    <>
      <Card className="bg-secondary border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Type className="mr-2" />
            Type spécifique
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={onTypeChange}>
            <SelectTrigger className="bg-black border-gray-700 text-white">
              <SelectValue placeholder="Choisir le type spécifique (optionnel)" />
            </SelectTrigger>
            <SelectContent>
              {style === 'lettres-decoupees' ? (
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
            <Palette className="mr-2" />
            Couleur d'éclairage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={onColorChange}>
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
          <Select onValueChange={onMaterialChange}>
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
          <Select onValueChange={onSizeChange}>
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
              onChange={onFileUpload}
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
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            placeholder="Précisions sur l'installation, contraintes particulières, demandes spéciales..."
            className="bg-black border-gray-700 text-white min-h-[100px]"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default AdvancedOptions;
