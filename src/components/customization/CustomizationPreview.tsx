
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Eye, Move } from 'lucide-react';

interface CustomizationPreviewProps {
  text: string;
  style: string;
  font: string;
  color: string;
  size: string;
  letterHeight: number[];
  letterWidth: number[];
  onLetterHeightChange: (value: number[]) => void;
  onLetterWidthChange: (value: number[]) => void;
}

const CustomizationPreview = ({
  text,
  style,
  font,
  color,
  size,
  letterHeight,
  letterWidth,
  onLetterHeightChange,
  onLetterWidthChange
}: CustomizationPreviewProps) => {
  return (
    <Card className="bg-secondary border-gray-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Eye className="mr-2" />
          Aperçu de vos lettres
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-black rounded-lg p-8 text-center min-h-[200px] flex items-center justify-center">
          {text ? (
            <div className="space-y-4">
              <div 
                className={`text-4xl font-bold ${
                  style === 'lettres-lumineuses' ? (
                    color === 'rouge' ? 'text-red-400' :
                    color === 'bleu' ? 'text-blue-400' :
                    color === 'vert' ? 'text-green-400' :
                    color === 'jaune' ? 'text-yellow-400' :
                    color === 'multicolore' ? 'text-pink-400' :
                    'text-white'
                  ) : 'text-gray-300'
                }`}
                style={{
                  fontFamily: font === 'script' ? 'cursive' :
                            font === 'impact' ? 'Impact' :
                            font || 'inherit',
                  textShadow: style === 'lettres-lumineuses' ? '0 0 20px currentColor' : 'none'
                }}
              >
                {text}
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {style && <Badge variant="secondary">{style}</Badge>}
                {color && <Badge variant="secondary">{color}</Badge>}
                {size && <Badge variant="secondary">{size}</Badge>}
              </div>
            </div>
          ) : (
            <p className="text-gray-400">Saisissez votre texte pour voir l'aperçu</p>
          )}
        </div>

        {text && (
          <div className="mt-6 space-y-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-4 text-center">Schéma de l'encadrement</h4>
              <div className="relative bg-black rounded border-2 border-gray-600 p-8 mx-auto max-w-md">
                <div className="relative border-2 border-dashed border-gray-400 p-4 min-h-[120px] flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{text}</span>
                  
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
                  onValueChange={onLetterHeightChange}
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
                  onValueChange={onLetterWidthChange}
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
  );
};

export default CustomizationPreview;
