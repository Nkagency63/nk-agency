
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, Clock, MapPin } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="text-yellow-400" size={24} />,
      title: "Excellence",
      description: "Nous nous engageons à livrer des enseignes de la plus haute qualité."
    },
    {
      icon: <Users className="text-blue-400" size={24} />,
      title: "Service Client",
      description: "Une équipe dédiée pour vous accompagner à chaque étape de votre projet."
    },
    {
      icon: <Clock className="text-green-400" size={24} />,
      title: "Réactivité",
      description: "Des délais respectés et une communication transparente."
    },
    {
      icon: <CheckCircle className="text-purple-400" size={24} />,
      title: "Innovation",
      description: "Les dernières technologies pour des enseignes modernes et durables."
    }
  ];

  const team = [
    {
      name: "Nicolas K.",
      role: "Fondateur & Directeur",
      description: "Expert en signalétique avec plus de 10 ans d'expérience dans le domaine."
    },
    {
      name: "Équipe Design",
      role: "Créatifs & Designers",
      description: "Des professionnels passionnés qui donnent vie à vos idées."
    },
    {
      name: "Équipe Technique",
      role: "Fabrication & Installation",
      description: "Des artisans qualifiés pour une réalisation parfaite."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-16 mb-12 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-text">À Propos</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Découvrez l'histoire de NK Agency et notre passion pour la création d'enseignes publicitaires d'exception.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 neon-text-blue">Notre Histoire</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Fondée avec la vision de transformer la communication visuelle des entreprises, 
                NK Agency s'est imposée comme un acteur incontournable dans la création d'enseignes 
                publicitaires en Auvergne.
              </p>
              <p>
                Depuis notre création, nous avons accompagné plus de 500 entreprises dans la 
                réalisation de leurs projets de signalétique, des petits commerces aux grandes 
                enseignes nationales.
              </p>
              <p>
                Notre expertise technique, combinée à notre créativité, nous permet de proposer 
                des solutions sur mesure qui répondent parfaitement aux besoins de nos clients.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800" 
                alt="Atelier NK Agency"
                className="rounded-xl shadow-lg"
              />
              <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                Atelier NK Agency
              </Badge>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center neon-text-green">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-secondary border-gray-800 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center neon-text-purple">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-secondary border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <Badge className="mb-3 bg-blue-600 text-white">{member.role}</Badge>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center neon-text-yellow">Nos Chiffres</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Clients satisfaits" },
              { number: "1000+", label: "Enseignes réalisées" },
              { number: "10+", label: "Années d'expérience" },
              { number: "24h", label: "Délai de réponse" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold neon-text mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <Card className="bg-secondary border-gray-800 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <MapPin className="mx-auto mb-4 text-blue-400" size={32} />
              <h2 className="text-2xl font-bold mb-4 text-white">Notre Localisation</h2>
              <p className="text-gray-300 mb-2">
                2bis avenue Édouard Herriot, 63800 COURNON-D'AUVERGNE
              </p>
              <p className="text-gray-400 text-sm">
                Idéalement situés en Auvergne, nous intervenons dans toute la région 
                et au-delà pour vos projets d'enseignes publicitaires.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
