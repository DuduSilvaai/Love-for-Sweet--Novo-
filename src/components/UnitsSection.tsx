import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

// Import store images
import storeJardins from "@/assets/store-jardins.jpg";
import storeeMoema from "@/assets/store-moema.jpg";
import storeVilaMadalena from "@/assets/store-vila-madalena.jpg";
import storePinheiros from "@/assets/store-pinheiros.jpg";
import storeItaim from "@/assets/store-itaim.jpg";
import storeSantana from "@/assets/store-santana.jpg";
const UnitsSection = () => {
  const stores = [
    {
      id: 1,
      name: "Love For Sweet Barueri",
      address: "Av. Henriqueta Mendes Guerra 1330, Barueri - SP",
      phone: "(11) 9999-0001",
      hours: "Seg-Dom: 8h às 22h",
      highlight: "Nossa loja principal",
      image: storeJardins,
    },
    {
      id: 2,
      name: "Love For Sweet Lapa",
      address: "Rua 12 de Outubro 615, São Paulo - SP",
      phone: "(11) 9999-0002",
      hours: "Seg-Dom: 9h às 21h",
      highlight: "Especializada em eventos",
      image: storeeMoema,
    },
    {
      id: 3,
      name: "Love For Sweet  Osasco Campesina",
      address: "Rua Mônica Maria Hubacher Smith 45, São Paulo - SP",
      phone: "(11) 9999-0003",
      hours: "Seg-Dom: 8h às 23h",
      highlight: "Ambiente jovem e moderno",
      image: storeVilaMadalena,
    },
    {
      id: 4,
      name: "Love for Sweet Osasco Dionysia",
      address: "Av. Dionysia Alves Barreto 211, Osasco - SP",
      phone: "(11) 9999-0004",
      hours: "Seg-Dom: 8h às 22h",
      highlight: "Próximo ao metrô",
      image: storePinheiros,
    },
    {
      id: 5,
      name: "Love for Sweet Shopping Catarina",
      address: "Rua Rafael Dias Costa 140, São Roque - SP",
      phone: "(11) 9999-0005",
      hours: "Seg-Sex: 7h às 20h",
      highlight: "Perfeita para o corporativo",
      image: storeItaim,
    },
    {
      id: 6,
      name: "Love for Sweet Shopping Iguatemi Esplanada",
      address: "Av. Gisele Constantino 1850, Sorocaba - SP",
      phone: "(11) 9999-0006",
      hours: "Seg-Dom: 9h às 21h",
      highlight: "Tradição da zona norte",
      image: storeSantana,
    },
    {
      id: 7,
      name: "Love for Sweet Shopping Parque Botucatu",
      address: "Av. Doutor José Amaro Faraldo 1050, Botucatu - SP",
      phone: "(11) 9999-0006",
      hours: "Seg-Dom: 9h às 21h",
      highlight: "Tradição da zona sul",
      image: storeSantana,
    },
  ];
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* CTA Section (moved to top) */}
          <div className="text-center mb-16">
            <Card className="p-8 bg-gradient-primary text-white shadow-primary border-0 max-w-2xl mx-auto">
              <h3 className="heading-card mb-4">
                Visite Nossa Loja Mais Próxima
              </h3>
               <p className="opacity-90 font-light text-base">
                 Experimente pessoalmente nossos doces e descubra por que somos a
                 escolha preferida para momentos especiais.
               </p>
            </Card>
          </div>

          {/* Section Header removed as requested */}

          {/* Stores Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stores.map((store) => (
              <Card
                key={store.id}
                className="overflow-hidden h-full shadow-soft hover:shadow-elegant transition-all duration-300 bg-white border-0"
              >
                <div className="flex flex-col h-full">
                  {/* Store Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={store.image}
                      alt={`Interior da loja ${store.name}`}
                      className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="text-sm text-white bg-brand-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        {store.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Store Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="heading-card text-brand-primary mb-3">
                        {store.name}
                      </h3>
                    </div>

                    <div className="flex-grow space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          {store.address}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <a
                          href={`tel:${store.phone}`}
                          className="text-brand-primary hover:text-brand-secondary transition-colors"
                        >
                          {store.phone}
                        </a>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <p className="text-muted-foreground">{store.hours}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border">
                      <Button variant="elegant" className="w-full">
                        Como Chegar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* (Header moved; CTA removed from bottom) */}
        </div>
      </div>
    </section>
  );
};
export default UnitsSection;
