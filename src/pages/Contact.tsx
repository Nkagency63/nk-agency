import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  email: z.string().email("L'e-mail doit être valide"),
  subject: z.string().min(2, "Le sujet doit comporter au moins 2 caractères"),
  message: z.string().min(10, "Le message doit comporter au moins 10 caractères")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Contact form data submitted:", data);
      toast.success("Votre message a été envoyé avec succès !", {
        description: "Nous vous répondrons dans les plus brefs délais."
      });
      setIsSubmitting(false);
      reset();
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-16 mb-12 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-text">Contact</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            N'hésitez pas à nous contacter pour toute question ou pour discuter de votre projet d'enseigne publicitaire.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-secondary rounded-xl p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom *</Label>
                  <Input 
                    id="name" 
                    placeholder="Votre nom" 
                    {...register("name")}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
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
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input 
                    id="subject" 
                    placeholder="Sujet de votre message" 
                    {...register("subject")}
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Votre message" 
                    {...register("message")}
                    className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-white/80 py-6 text-lg font-bold rounded"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Adresse</h3>
                    <p className="text-gray-300">2bis avenue Édouard Herriot<br />63800 COURNON-D'AUVERGNE, France</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-lg mr-4">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-300">nkagency63@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-lg mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Téléphone</h3>
                    <p className="text-gray-300">+33 (0)6 35 42 13 59</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-lg mr-4">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Horaires d'ouverture</h3>
                    <p className="text-gray-300">Lundi - Vendredi: 9h00 - 18h00<br />Samedi: Sur rendez-vous<br />Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Nous trouver</h2>
              <div className="w-full h-[300px] rounded-xl overflow-hidden bg-secondary">
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <p className="text-gray-400">Carte interactive indisponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 mt-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">Questions Fréquentes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Retrouvez les réponses aux questions les plus fréquemment posées.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "Quel est le délai de réalisation pour une enseigne ?",
                answer: "Le délai dépend du type et de la complexité de l'enseigne. En général, il faut compter 1 à 2 semaines pour une enseigne standard, et 2 à 3 semaines pour des projets plus complexes ou sur mesure."
              },
              {
                question: "Quels types de matériaux utilisez-vous pour vos enseignes ?",
                answer: "Nous utilisons une variété de matériaux de haute qualité, adaptés à chaque type d'enseigne : aluminium, acrylique, PVC, plexiglas, métal, néon véritable, LED, etc. Tous nos matériaux sont sélectionnés pour leur durabilité et leur rendu esthétique."
              },
              {
                question: "Proposez-vous des services de maintenance après l'installation ?",
                answer: "Absolument. Nous proposons des contrats de maintenance préventive et curative pour garantir la longévité et le bon fonctionnement de votre enseigne. Notre service de maintenance inclut des vérifications régulières, le nettoyage et les réparations si nécessaire."
              },
              {
                question: "Comment se déroule le processus de création d'une enseigne ?",
                answer: "Le processus commence par une consultation pour comprendre vos besoins, suivie d'une phase de conception avec des maquettes. Après validation, nous passons à la fabrication, puis à l'installation. Tout au long du projet, nous vous tenons informé de l'avancement."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-black p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
