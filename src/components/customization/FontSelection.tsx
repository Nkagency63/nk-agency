
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Type } from 'lucide-react';

interface FontSelectionProps {
  onFontChange: (value: string) => void;
}

const FontSelection = ({ onFontChange }: FontSelectionProps) => {
  const fonts = [
    'Anton-Regular', 'Aero', 'BasicSansHeavySFBold', 'BasicSansHeavySFBolditalic', 'BlippoLightSF',
    'DejaVuSansMono-Bold', 'DejaVuSansMono-BoldOblique', 'DiamondSFBold', 'DiamondSFBoldItalic',
    'FranklinGothic-DemiCond', 'FranklinGothic-DemiItalic', 'FuturaBT-ExtraBlackCondensed',
    'FuturaBT-ExtraBlackCondItalic', 'FuturaBT-Heavy', 'FuturaBT-HeavyItalic', 'Geometric415BT-BlackItalicA',
    'Geometric706BTMediumB', 'GrizzlyITCbyBT-Regular', 'HPSimplified-Bold', 'HPSimplified-BoldItalic',
    'Humanist52IBT-BoldCondensed', 'Humanist52IBT-BoldItalic', 'Impact', 'KabelLTCbyBT-Demi',
    'Lemon', 'LucidaSansDemiItalic', 'MSReferenceSansSerif-Bold', 'MSReferenceSansSerif-BoldItalic',
    'Neuropol-Regular', 'OldSansBlack', 'RakeslyRg-BoldItalic', 'Sansation Regular',
    'SourceSansPro-Semibold', 'SourceSansPro-Semiboldlt', 'Trebuchet-Boldltalic', 'TrebuchetMS-Bold',
    'Verdana-Bold', 'Verdana-BoldItalic', 'AccordSFBold', 'AlfaSlabOne-Regular', 'Arco', 'Arco-Italic',
    'BangleBold', 'BookAntiqua-Bold', 'BookAntiqua-BoldItalic', 'CataneoBT-Bold', 'CheltenhamBT-BoldHeadline',
    'CheltenhamBT-BoldItalicHeadline', 'ChetenhamITCbyBT-Bold', 'CheltenhamITCbyBT-Bolditalic',
    'ClarendonBT-Bold', 'DejaVuSerifCondensed-Bold', 'DejaVuSerifCondensed-BoldItalic',
    'FrizQuadratalITCbyBT-Bold', 'GalliardITCbyBT-BoldItalic', 'GaramondITCbyBTBold',
    'GaramondITCbyBTBoldItalic', 'GrouchITCbyBT-Regular', 'KabarettD', 'LiberationSerif-Bold',
    'LiberationSerif-BoldItalic', 'PalatinoLinotype-Bold', 'Palatinotype-BoldItalic', 'PcBrussels-Demi',
    'PcBrussels-DemiItalic', 'RenaultMN-Bold-Rockwell-Bold', 'Rockwell-BoldItalic', 'SeabirdSFBold',
    'SeabirdSFBoldItalic', 'Subway-Black', 'TimesNewRomanPS-BoldItalicMT', 'TimesNewRomanPS-BoldMT',
    'Titania', 'ABADDON', 'AdimesDBNormal', 'AdventurerBlackSF', 'AdventurerBlackSFItalic',
    'AKAPOSSE', 'Alba', 'Amarante-Regular', 'AmigaForever', 'ANNACITCIT', 'Batavia', 'Belush-Regular',
    'Bombardier', 'Broadway', 'Chokko', 'CloisterBlackBT-Regular', 'CroissantD', 'DAVIDBOLDBT-REGULAR',
    'Demonized', 'EastMarket', 'ELDURANGO', 'ExpoPlain', 'FlamencoD', 'ForteMT', 'Germany',
    'InversSF', 'InviteSF', 'InviteSFItalic', 'WEYPUNCHPLAIN', 'LatinWide', 'Magenta',
    'Nougat-ExtraBlack', 'Urderpizza', 'OSAKA-SANSSERIF', 'Prolamina', 'Ravie', 'Realvirtue',
    'REVERTBRK', 'Saddlebag-Black', 'Sancreek-Regular', 'SLAMESEKatSONG', 'STENCIL', 'UltraSerifSF',
    'UnofficialBoPFont', 'XpressSFBold', 'XpressSFBoldItalic', 'Aeolus', 'Airstream', 'AmazeBold',
    'BallparkWeiner', 'BarcBrushDBBold', 'BerkshireSwash-Regular', 'Birdsof Paradise', 'BlackDiamonds',
    'BukkariScript', 'CaledaryHands', 'Cassia', 'ComicSansMSBoldItalic', 'CoquetteRegular',
    'DisneyPrint', 'DJBMessyAmandaGoesBold', 'EmPower42-Condensed', 'EnviroD', 'FenwayParkSF',
    'FlashD-Ligh', 'Freehand521BJ-RegularC', 'HarlowSolid', 'HaydonBrush', 'KaushanScript-Regular',
    'KinksDecor', 'LaurenScript', 'Lemon-Regular', 'LilyScriptOne-Regular', 'Lollipop', 'MarketingScript',
    'OleoScriot-Regular', 'Pristina-Regular', 'ReguitcedScript', 'Skelman', 'WrexhamScript',
    'SimplyRounded', 'MontserraSemiBold', 'Oswald', 'Timeless', 'TimelessBold', 'Frutiger-bold-cn',
    'SellYourSoul', 'ChunkFive', 'Arial'
  ];

  return (
    <Card className="bg-secondary border-gray-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Type className="mr-2" />
          Style de police
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select onValueChange={onFontChange}>
          <SelectTrigger className="bg-black border-gray-700 text-white">
            <SelectValue placeholder="Choisir un style de police" />
          </SelectTrigger>
          <SelectContent>
            {fonts.map((font) => (
              <SelectItem key={font} value={font}>{font}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default FontSelection;
