
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Upload, FileText, Lightbulb, Ruler, Palette } from "lucide-react";

const quoteFormSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit comporter au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  email: z.string().email("L'e-mail doit être valide"),
  phone: z.string().min(10, "Le numéro de téléphone doit comporter au moins 10 caractères"),
  company: z.string().optional(),
  address: z.string().min(5, "L'adresse doit comporter au moins 5 caractères"),
  city: z.string().min(2, "La ville doit comporter au moins 2 caractères"),
  postalCode: z.string().min(5, "Le code postal doit comporter au moins 5 caractères"),
  signType: z.enum(["relief", "ledLetters", "flag", "neon", "lightbox", "totem", "other"], {
    required_error: "Veuillez sélectionner un type d'enseigne",
  }),
  otherType: z.string().optional(),
  width: z.string().min(1, "Veuillez indiquer la largeur du projet"),
  height: z.string().min(1, "Veuillez indiquer la hauteur du projet"),
  thickness: z.string().optional(),
  projectText: z.string().min(1, "Veuillez indiquer le texte à afficher sur l'enseigne"),
  font: z.string().optional(),
  colors: z.array(z.string()).optional(),
  lighting: z.enum(["none", "led", "neon", "backlit", "frontlit"], {
    required_error: "Veuillez choisir le type d'éclairage",
  }),
  material: z.enum(["pvc", "aluminum", "plexiglass", "dibond", "wood", "stainless"], {
    required_error: "Veuillez choisir le matériau",
  }),
  location: z.enum(["interior", "exterior", "both"], {
    required_error: "Veuillez indiquer l'emplacement",
  }),
  installation: z.enum(["wall", "ceiling", "post", "facade", "window"], {
    required_error: "Veuillez choisir le type de fixation",
  }),
  budget: z.enum(["500-1000", "1000-2500", "2500-5000", "5000+"], {
    required_error: "Veuillez indiquer votre budget",
  }),
  deadline: z.enum(["urgent", "1month", "2months", "flexible"], {
    required_error: "Veuillez indiquer vos délais",
  }),
  description: z.string().min(10, "La description doit comporter au moins 10 caractères"),
  hasLogo: z.boolean().optional(),
  needsDesign: z.boolean().optional(),
  needsInstallation: z.boolean().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les conditions" }),
  }),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const QuoteRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherType, setShowOtherType] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    watch,
    setValue
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      signType: "relief",
      location: "exterior",
      lighting: "led",
      material: "pvc",
      installation: "wall",
      budget: "1000-2500",
      deadline: "1month",
      hasLogo: false,
      needsDesign: false,
      needsInstallation: false,
      termsAccepted: true
    }
  });

  const watchSignType = watch("signType");
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };
  
  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Form data submitted:", data);
      console.log("Uploaded files:", uploadedFiles);
      toast.success("Votre demande de devis a été envoyée avec succès !", {
        description: "Nous vous contacterons dans les plus brefs délais."
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-16 mb-12 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-text">
            Demande de Devis Personnalisé
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Obtenez un devis gratuit et personnalisé pour votre projet d'enseigne lumineuse. Nos experts vous accompagnent de la conception à l'installation.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="bg-secondary border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Lightbulb className="mr-2 text-yellow-400" />
                Conception
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Création sur mesure selon vos besoins et votre identité visuelle</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Ruler className="mr-2 text-blue-400" />
                Fabrication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Matériaux de qualité et technologies LED dernière génération</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="mr-2 text-green-400" />
                Installation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Pose professionnelle et mise en service par nos techniciens</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary rounded-xl p-6 md:p-10 max-w-6xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Informations Personnelles */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <FileText className="mr-2" />
                  Informations de Contact
                </h2>
              </div>

              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input 
                  id="firstName" 
                  placeholder="Votre prénom" 
                  {...register("firstName")}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input 
                  id="lastName" 
                  placeholder="Votre nom" 
                  {...register("lastName")}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="votre@email.com" 
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input 
                  id="phone" 
                  placeholder="Votre numéro de téléphone" 
                  {...register("phone")}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Entreprise (optionnel)</Label>
                <Input 
                  id="company" 
                  placeholder="Nom de votre entreprise" 
                  {...register("company")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse *</Label>
                <Input 
                  id="address" 
                  placeholder="Votre adresse complète" 
                  {...register("address")}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Ville *</Label>
                <Input 
                  id="city" 
                  placeholder="Votre ville" 
                  {...register("city")}
                  className={errors.city ? "border-red-500" : ""}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="postalCode">Code postal *</Label>
                <Input 
                  id="postalCode" 
                  placeholder="Code postal" 
                  {...register("postalCode")}
                  className={errors.postalCode ? "border-red-500" : ""}
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-sm">{errors.postalCode.message}</p>
                )}
              </div>

              {/* Projet */}
              <div className="lg:col-span-2 mt-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Lightbulb className="mr-2" />
                  Détails du Projet
                </h2>
              </div>

              <div className="lg:col-span-2 space-y-3">
                <Label>Type d'enseigne *</Label>
                <RadioGroup 
                  defaultValue={watchSignType}
                  className="grid grid-cols-2 md:grid-cols-4 gap-2"
                  onValueChange={(value) => {
                    setValue("signType", value as any);
                    setShowOtherType(value === "other");
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="relief" id="relief" />
                    <Label htmlFor="relief" className="cursor-pointer">Lettres Relief</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ledLetters" id="ledLetters" />
                    <Label htmlFor="ledLetters" className="cursor-pointer">Lettres LED</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lightbox" id="lightbox" />
                    <Label htmlFor="lightbox" className="cursor-pointer">Caisson Lumineux</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flag" id="flag" />
                    <Label htmlFor="flag" className="cursor-pointer">Enseigne Drapeau</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neon" id="neon" />
                    <Label htmlFor="neon" className="cursor-pointer">Néon LED</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="totem" id="totem" />
                    <Label htmlFor="totem" className="cursor-pointer">Totem</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer">Autre</Label>
                  </div>
                </RadioGroup>
                {errors.signType && (
                  <p className="text-red-500 text-sm">{errors.signType.message}</p>
                )}
              </div>

              {showOtherType && (
                <div className="lg:col-span-2 space-y-2">
                  <Label htmlFor="otherType">Précisez le type d'enseigne</Label>
                  <Input 
                    id="otherType" 
                    placeholder="Décrivez le type d'enseigne souhaité" 
                    {...register("otherType")}
                  />
                </div>
              )}

              <div className="lg:col-span-2 space-y-2">
                <Label htmlFor="projectText">Texte de l'enseigne *</Label>
                <Input 
                  id="projectText" 
                  placeholder="Texte à afficher sur l'enseigne" 
                  {...register("projectText")}
                  className={errors.projectText ? "border-red-500" : ""}
                />
                {errors.projectText && (
                  <p className="text-red-500 text-sm">{errors.projectText.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="width">Largeur souhaitée (cm) *</Label>
                <Input 
                  id="width" 
                  placeholder="ex: 200" 
                  {...register("width")}
                  className={errors.width ? "border-red-500" : ""}
                />
                {errors.width && (
                  <p className="text-red-500 text-sm">{errors.width.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Hauteur souhaitée (cm) *</Label>
                <Input 
                  id="height" 
                  placeholder="ex: 50" 
                  {...register("height")}
                  className={errors.height ? "border-red-500" : ""}
                />
                {errors.height && (
                  <p className="text-red-500 text-sm">{errors.height.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="thickness">Épaisseur souhaitée (mm)</Label>
                <Input 
                  id="thickness" 
                  placeholder="ex: 20" 
                  {...register("thickness")}
                />
              </div>

              <div className="space-y-2">
                <Label>Matériau *</Label>
                <Select onValueChange={(value) => setValue("material", value as any)}>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Choisir le matériau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pvc">PVC Expansé</SelectItem>
                    <SelectItem value="aluminum">Aluminium Composite</SelectItem>
                    <SelectItem value="plexiglass">Plexiglas</SelectItem>
                    <SelectItem value="dibond">Dibond</SelectItem>
                    <SelectItem value="wood">Bois MDF</SelectItem>
                    <SelectItem value="stainless">Inox</SelectItem>
                  </SelectContent>
                </Select>
                {errors.material && (
                  <p className="text-red-500 text-sm">{errors.material.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Type d'éclairage *</Label>
                <Select onValueChange={(value) => setValue("lighting", value as any)}>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Choisir l'éclairage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Sans éclairage</SelectItem>
                    <SelectItem value="led">LED Standard</SelectItem>
                    <SelectItem value="neon">Néon LED</SelectItem>
                    <SelectItem value="backlit">Rétro-éclairage</SelectItem>
                    <SelectItem value="frontlit">Éclairage frontal</SelectItem>
                  </SelectContent>
                </Select>
                {errors.lighting && (
                  <p className="text-red-500 text-sm">{errors.lighting.message}</p>
                )}
              </div>

              <div className="space-y-3">
                <Label>Emplacement *</Label>
                <RadioGroup 
                  defaultValue="exterior"
                  className="flex flex-wrap gap-4"
                  onValueChange={(value) => setValue("location", value as any)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="interior" id="interior" />
                    <Label htmlFor="interior" className="cursor-pointer">Intérieur</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="exterior" id="exterior" />
                    <Label htmlFor="exterior" className="cursor-pointer">Extérieur</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="cursor-pointer">Les deux</Label>
                  </div>
                </RadioGroup>
                {errors.location && (
                  <p className="text-red-500 text-sm">{errors.location.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Type de fixation *</Label>
                <Select onValueChange={(value) => setValue("installation", value as any)}>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Choisir la fixation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wall">Fixation murale</SelectItem>
                    <SelectItem value="ceiling">Fixation plafond</SelectItem>
                    <SelectItem value="post">Sur poteau</SelectItem>
                    <SelectItem value="facade">Fixation façade</SelectItem>
                    <SelectItem value="window">Vitrine</SelectItem>
                  </SelectContent>
                </Select>
                {errors.installation && (
                  <p className="text-red-500 text-sm">{errors.installation.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Budget approximatif *</Label>
                <Select onValueChange={(value) => setValue("budget", value as any)}>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Choisir votre budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500-1000">500€ - 1 000€</SelectItem>
                    <SelectItem value="1000-2500">1 000€ - 2 500€</SelectItem>
                    <SelectItem value="2500-5000">2 500€ - 5 000€</SelectItem>
                    <SelectItem value="5000+">Plus de 5 000€</SelectItem>
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="text-red-500 text-sm">{errors.budget.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Délais souhaités *</Label>
                <Select onValueChange={(value) => setValue("deadline", value as any)}>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Choisir vos délais" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent (moins de 2 semaines)</SelectItem>
                    <SelectItem value="1month">1 mois</SelectItem>
                    <SelectItem value="2months">2 mois</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                {errors.deadline && (
                  <p className="text-red-500 text-sm">{errors.deadline.message}</p>
                )}
              </div>

              {/* Services additionnels */}
              <div className="lg:col-span-2 mt-6">
                <h3 className="text-xl font-bold mb-4">Services additionnels</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hasLogo" 
                      onCheckedChange={(checked) => setValue("hasLogo", checked as boolean)}
                    />
                    <Label htmlFor="hasLogo" className="cursor-pointer">J'ai déjà un logo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="needsDesign" 
                      onCheckedChange={(checked) => setValue("needsDesign", checked as boolean)}
                    />
                    <Label htmlFor="needsDesign" className="cursor-pointer">Création graphique</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="needsInstallation" 
                      onCheckedChange={(checked) => setValue("needsInstallation", checked as boolean)}
                    />
                    <Label htmlFor="needsInstallation" className="cursor-pointer">Installation professionnelle</Label>
                  </div>
                </div>
              </div>

              {/* Upload de fichiers */}
              <div className="lg:col-span-2 space-y-4">
                <Label className="flex items-center">
                  <Upload className="mr-2" />
                  Fichiers (logo, croquis, photos...)
                </Label>
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf,.ai,.eps"
                  onChange={handleFileUpload}
                  className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-white file:text-black hover:file:bg-gray-200"
                />
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex justify-between items-center bg-gray-800 p-2 rounded">
                        <span className="text-sm text-gray-300">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Supprimer
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-2 space-y-2">
                <Label htmlFor="description">Description détaillée du projet *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Décrivez votre projet : couleurs souhaitées, style, contraintes techniques, environnement d'installation..." 
                  {...register("description")}
                  className={`min-h-[120px] ${errors.description ? "border-red-500" : ""}`}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description.message}</p>
                )}
              </div>

              <div className="lg:col-span-2 flex items-start space-x-2 mt-6">
                <Checkbox 
                  id="termsAccepted" 
                  {...register("termsAccepted")}
                  className={errors.termsAccepted ? "border-red-500" : ""}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="termsAccepted" className="cursor-pointer">
                    J'accepte les <a href="#" className="text-blue-400 hover:underline">conditions générales</a> et la <a href="#" className="text-blue-400 hover:underline">politique de confidentialité</a> *
                  </Label>
                  {errors.termsAccepted && (
                    <p className="text-red-500 text-sm">{errors.termsAccepted.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black hover:bg-white/80 px-12 py-6 text-lg font-bold rounded"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis gratuit"}
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                Réponse sous 24h • Devis gratuit et sans engagement • Conseils personnalisés
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;
