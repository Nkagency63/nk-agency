
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

// Form schema definition
const quoteFormSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit comporter au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  email: z.string().email("L'e-mail doit être valide"),
  phone: z.string().min(10, "Le numéro de téléphone doit comporter au moins 10 caractères"),
  company: z.string().optional(),
  signType: z.enum(["neon", "letters", "cabinet", "led", "panel", "other"], {
    required_error: "Veuillez sélectionner un type d'enseigne",
  }),
  otherType: z.string().optional(),
  width: z.string().min(1, "Veuillez indiquer la largeur"),
  height: z.string().min(1, "Veuillez indiquer la hauteur"),
  location: z.enum(["interior", "exterior", "both"], {
    required_error: "Veuillez indiquer l'emplacement",
  }),
  description: z.string().min(10, "La description doit comporter au moins 10 caractères"),
  budget: z.enum(["under1000", "1000to3000", "3000to5000", "5000to10000", "over10000"]),
  urgency: z.boolean().optional(),
  installationRequired: z.boolean().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les conditions" }),
  }),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const QuoteRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherType, setShowOtherType] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    watch,
    setValue
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      signType: "neon",
      location: "exterior",
      budget: "1000to3000",
      urgency: false,
      installationRequired: true,
      termsAccepted: false
    }
  });

  const watchSignType = watch("signType");
  
  // Handle form submission
  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      console.log("Form data submitted:", data);
      toast.success("Votre demande de devis a été envoyée avec succès !", {
        description: "Nous vous contacterons dans les plus brefs délais."
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Quote Request Header */}
      <section className="relative py-16 mb-12 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-text">
            Demande de Devis
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour votre projet d'enseigne.
          </p>
        </div>
      </section>

      {/* Quote Request Form */}
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Informations Personnelles</h2>
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

              {/* Project Information */}
              <div className="md:col-span-2 mt-6">
                <h2 className="text-2xl font-bold mb-4">Informations sur le Projet</h2>
              </div>

              <div className="md:col-span-2 space-y-3">
                <Label>Type d'enseigne *</Label>
                <RadioGroup 
                  defaultValue={watchSignType}
                  className="grid grid-cols-2 md:grid-cols-3 gap-2"
                  onValueChange={(value) => {
                    setValue("signType", value as any);
                    setShowOtherType(value === "other");
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neon" id="neon" />
                    <Label htmlFor="neon" className="cursor-pointer">Enseigne Néon</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="letters" id="letters" />
                    <Label htmlFor="letters" className="cursor-pointer">Lettres Lumineuses</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cabinet" id="cabinet" />
                    <Label htmlFor="cabinet" className="cursor-pointer">Caisson Lumineux</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="led" id="led" />
                    <Label htmlFor="led" className="cursor-pointer">Enseigne LED</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="panel" id="panel" />
                    <Label htmlFor="panel" className="cursor-pointer">Panneau Rétroéclairé</Label>
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
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="otherType">Précisez le type d'enseigne</Label>
                  <Input 
                    id="otherType" 
                    placeholder="Décrivez le type d'enseigne souhaité" 
                    {...register("otherType")}
                    className={errors.otherType ? "border-red-500" : ""}
                  />
                  {errors.otherType && (
                    <p className="text-red-500 text-sm">{errors.otherType.message}</p>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="width">Largeur (cm) *</Label>
                <Input 
                  id="width" 
                  placeholder="Largeur approximative" 
                  {...register("width")}
                  className={errors.width ? "border-red-500" : ""}
                />
                {errors.width && (
                  <p className="text-red-500 text-sm">{errors.width.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Hauteur (cm) *</Label>
                <Input 
                  id="height" 
                  placeholder="Hauteur approximative" 
                  {...register("height")}
                  className={errors.height ? "border-red-500" : ""}
                />
                {errors.height && (
                  <p className="text-red-500 text-sm">{errors.height.message}</p>
                )}
              </div>

              <div className="md:col-span-2 space-y-3">
                <Label>Emplacement d'installation *</Label>
                <RadioGroup 
                  defaultValue="exterior"
                  className="flex flex-wrap gap-4"
                  onValueChange={(value) => {
                    setValue("location", value as any);
                  }}
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

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="description">Description du projet *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Décrivez votre projet d'enseigne (texte, logo, couleurs, etc.)" 
                  {...register("description")}
                  className={`min-h-[120px] ${errors.description ? "border-red-500" : ""}`}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description.message}</p>
                )}
              </div>

              <div className="md:col-span-2 space-y-3">
                <Label>Budget estimé *</Label>
                <RadioGroup 
                  defaultValue="1000to3000"
                  className="grid grid-cols-2 md:grid-cols-3 gap-2"
                  onValueChange={(value) => {
                    setValue("budget", value as any);
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="under1000" id="under1000" />
                    <Label htmlFor="under1000" className="cursor-pointer">Moins de 1 000 €</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1000to3000" id="1000to3000" />
                    <Label htmlFor="1000to3000" className="cursor-pointer">1 000 € - 3 000 €</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3000to5000" id="3000to5000" />
                    <Label htmlFor="3000to5000" className="cursor-pointer">3 000 € - 5 000 €</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5000to10000" id="5000to10000" />
                    <Label htmlFor="5000to10000" className="cursor-pointer">5 000 € - 10 000 €</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="over10000" id="over10000" />
                    <Label htmlFor="over10000" className="cursor-pointer">Plus de 10 000 €</Label>
                  </div>
                </RadioGroup>
                {errors.budget && (
                  <p className="text-red-500 text-sm">{errors.budget.message}</p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="urgency" 
                  onClick={() => setValue("urgency", !watch("urgency"))}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="urgency" className="cursor-pointer">Projet urgent (délai &lt; 4 semaines)</Label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="installationRequired" 
                  defaultChecked={true}
                  onClick={() => setValue("installationRequired", !watch("installationRequired"))}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="installationRequired" className="cursor-pointer">Installation par NK AGENCY requise</Label>
                </div>
              </div>

              <div className="md:col-span-2 flex items-start space-x-2 mt-4">
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
                className="bg-white text-black hover:bg-white/80 px-8 py-6 text-lg font-bold rounded"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;
