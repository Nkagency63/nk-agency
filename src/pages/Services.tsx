import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

// Define service type
type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  colorClass: string;
};

// Services data - removing Installation & Maintenance service
const services: Service[] = [
  {
    id: 1,
    title: "Enseignes Néon",
    description: "Des enseignes néon authentiques qui captivent l'attention avec leur éclat distinctif et leur esthétique rétro-moderne.",
    image: "https://images.unsplash.com/photo-1563842431151-15af97dd17c4?auto=format&fit=crop&q=80&w=1000",
    features: [
      "Tubes néon véritables ou LED flexibles pour l'effet néon",
      "Large choix de couleurs vibrantes",
      "Design personnalisé selon vos besoins",
      "Installation intérieure ou extérieure",
      "Consommation électrique optimisée"
    ],
    colorClass: "neon-text-pink"
  },
  {
    id: 2,
    title: "Lettres Lumineuses",
    description: "Des lettres découpées et rétroéclairées qui donnent à votre marque un aspect premium et une visibilité optimale.",
    image: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?auto=format&fit=crop&q=80&w=1000",
    features: [
      "Lettres en acrylique, métal, PVC ou aluminium",
      "Rétroéclairage LED à haute luminosité",
      "Épaisseur et police personnalisables",
      "Finitions diverses (brossée, laquée, etc.)",
      "Installation sécurisée par notre équipe"
    ],
    colorClass: "neon-text-blue"
  },
  {
    id: 3,
    title: "Caissons Lumineux",
    description: "Des caissons lumineux élégants qui diffusent votre marque jour et nuit avec une luminosité homogène et impactante.",
    image: "https://images.unsplash.com/photo-1563620915-a8e473771545?auto=format&fit=crop&q=80&w=1000",
    features: [
      "Caissons simple ou double face",
      "Éclairage LED uniforme et économique",
      "Structure en aluminium durable",
      "Options de formes standard ou sur mesure",
      "Résistance aux intempéries"
    ],
    colorClass: "neon-text-yellow"
  },
  {
    id: 4,
    title: "Enseignes LED",
    description: "Des solutions d'éclairage LED modernes, économiques et durables pour tous types d'enseignes commerciales.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000",
    features: [
      "Modules LED haute performance",
      "Programmable pour animations lumineuses",
      "Faible consommation énergétique",
      "Durée de vie supérieure (50 000+ heures)",
      "Maintenance réduite"
    ],
    colorClass: "neon-text-green"
  },
  {
    id: 5,
    title: "Panneaux Rétroéclairés",
    description: "Des panneaux élégants avec rétroéclairage pour une communication visuelle efficace dans tous les environnements.",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&q=80&w=1000",
    features: [
      "Impression haute définition",
      "Éclairage uniforme sans points chauds",
      "Changement facile des visuels",
      "Cadres fins et discrets",
      "Options intérieures et extérieures"
    ],
    colorClass: "neon-text-purple"
  }
];

const Services = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Services Header */}
      <section className="relative py-16 mb-12 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-text">Nos Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Découvrez notre gamme complète de services pour la création et fabrication d'enseignes publicitaires.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className={`text-3xl font-bold mb-4 ${service.colorClass}`}>{service.title}</h2>
                <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle size={18} className="text-white mr-3 mt-1 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/quote"
                  className="inline-block bg-white text-black px-6 py-3 rounded font-medium transition-all hover:bg-opacity-80"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <section className="py-20 mt-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">Notre Processus</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              De la conception à la fabrication, découvrez comment nous créons votre enseigne publicitaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation",
                description: "Nous discutons de vos besoins, de votre identité visuelle et de vos attentes pour créer une enseigne adaptée.",
                step: "01"
              },
              {
                title: "Conception",
                description: "Nos designers créent des maquettes d'enseignes qui correspondent parfaitement à votre marque.",
                step: "02"
              },
              {
                title: "Fabrication",
                description: "Après validation, nos artisans spécialisés fabriquent votre enseigne avec des matériaux de qualité.",
                step: "03"
              }
            ].map((step, index) => (
              <div key={index} className="bg-black p-8 rounded-xl border border-gray-800">
                <div className="text-6xl font-bold text-gray-800 mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">
              Prêt à Donner Vie à Votre Projet d'Enseigne ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-white text-black px-8 py-4 rounded text-lg font-bold transition-all hover:bg-opacity-80"
              >
                Demander un devis
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white text-white px-8 py-4 rounded text-lg font-bold transition-all hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
