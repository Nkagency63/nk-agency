
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Type } from 'lucide-react';

interface TextInputProps {
  text: string;
  onTextChange: (value: string) => void;
}

const TextInput = ({ text, onTextChange }: TextInputProps) => {
  return (
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
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            placeholder="Ex: BOULANGERIE, RESTAURANT..."
            className="bg-black border-gray-700 text-white"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TextInput;
