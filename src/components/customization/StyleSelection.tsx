
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Type } from 'lucide-react';

interface StyleSelectionProps {
  style: string;
  onStyleChange: (value: string) => void;
}

const StyleSelection = ({ style, onStyleChange }: StyleSelectionProps) => {
  return (
    <Card className="bg-secondary border-gray-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Type className="mr-2" />
          2. Choisissez un style
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup 
          value={style} 
          onValueChange={onStyleChange}
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
  );
};

export default StyleSelection;
