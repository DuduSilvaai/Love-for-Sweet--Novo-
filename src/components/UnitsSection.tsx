import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

// Import store images
import storeJardins from "@/assets/store-jardins.jpg";
import storeeMoema from "@/assets/store-moema.jpg";
import storeVilaMadalena from "@/assets/store-vila-madalena.jpg";
import storePinheiros from "@/assets/store-pinheiros.jpg";
import storeItaim from "@/assets/store-itaim.jpg";
import storeSantana from "@/assets/store-santana.jpg";
import osascoDionysia from "@/assets/loja-dionysia.png";
import testeSecundariodionysia from "@/assets/teste-secundario-dionysia.png";
import barueri from "@/assets/barueri.png";
import lapa from "@/assets/lapa.png";
import campesina from "@/assets/campesina.png";
import saoRoque from "@/assets/sao-roque.png";
import sorocaba from "@/assets/sorocaba.png";
import teste2 from "@/assets/teste2.png";
import teste3 from "@/assets/teste3.png";
import teste4 from "@/assets/teste4.png";
import sorocaba2 from "@/assets/sorocaba2.png";
const UnitsSection = () => {
  const stores = [
    {
      id: 1,
      name: "Love For Sweet Barueri",
      address: "Av. Henriqueta Mendes Guerra 1330, Barueri - SP",
      hours: "Seg-Sáb: 09:30 às 20h; Dom: 12h às 19h",
      highlight: "Nossa loja principal",
      image: barueri,
      mapsLink: "https://www.google.com/maps/place/Love+For+Sweet/@-23.4824921,-47.414618,10z/data=!4m6!3m5!1s0x94cf036876cecbff:0x1b76f0a36872987f!8m2!3d-23.5091465!4d-46.8875661!16s%2Fg%2F11lh6ft4_n?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 2,
      name: "Love For Sweet Lapa",
      address: "Rua 12 de Outubro 615, São Paulo - SP",
      hours: "Seg-Sáb: 9h às 19h; Dom: 12h às 19h",
      highlight: "Especializada em eventos",
      image: lapa,
      mapsLink: "https://www.google.com/maps/place/Love+For+Sweet+-+Lapa/@-23.4824921,-47.414618,10z/data=!4m6!3m5!1s0x94cef919fd0e79ad:0x1d1824bd56f4050e!8m2!3d-23.523316!4d-46.7056167!16s%2Fg%2F11szkxltxz?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 3,
      name: "Love For Sweet  Osasco Campesina",
      address: "Rua Mônica Maria Hubacher Smith 45, São Paulo - SP",
      hours: "Seg-Sáb: 10h às 19h; Dom: 12h às 19h",
      highlight: "Ambiente jovem e moderno",
      image: campesina,
      mapsLink: "https://www.google.com/maps/place/Love+For+Sweet+Osasco/@-23.4824921,-47.414618,10z/data=!4m6!3m5!1s0x94ceff179eb99e23:0xf19cd683686a80b2!8m2!3d-23.5444487!4d-46.7661728!16s%2Fg%2F11ydjcmp4l?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 4,
      name: "Love for Sweet Osasco Dionysia",
      address: "Av. Dionysia Alves Barreto 211, Osasco - SP",
      hours: "Seg-Sáb: 10h às 19h; Dom: 12h às 19h",
      highlight: "Próximo ao metrô",
      image: teste4,
      mapsLink: "https://www.google.com/maps/place/Love+For+Sweet+-+Osasco+Dionysia/@-23.4824921,-47.414618,10z/data=!4m6!3m5!1s0x94ceff0027e3a0cd:0xe9f4292961f82ec4!8m2!3d-23.5365621!4d-46.7833568!16s%2Fg%2F11xlw3wk70?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 5,
      name: "Love for Sweet Shopping Catarina",
      address: "Rua Rafael Dias Costa 140, São Roque - SP",
      hours: "Seg-Sáb: 10h às 19h; Dom: 12h às 19h",
      highlight: "Perfeita para o corporativo",
      image: saoRoque,
      mapsLink: "https://www.google.com/maps/place/Catarina+Fashion+Outlet/@-23.4824921,-47.414618,10z/data=!4m6!3m5!1s0x94cf6a455ebc270d:0x9fa1b986c75abcd0!8m2!3d-23.4201508!4d-47.1627973!16s%2Fg%2F11bzsnltkk?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 6,
      name: "Love for Sweet Shopping Iguatemi Esplanada",
      address: "Av. Gisele Constantino 1850, Sorocaba - SP",
      hours: "Seg-Dom: 11h às 22h",
      highlight: "Tradição da zona norte",
      image: sorocaba,
      mapsLink: "https://www.google.com/maps/place/Love+For+Sweet+-+Sorocaba/@-23.5360247,-47.4644396,17z/data=!3m1!4b1!4m6!3m5!1s0x94c58b2597399971:0xb7ed877cf0a4e6dc!8m2!3d-23.5360247!4d-47.4644396!16s%2Fg%2F11xmkr8k68?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 7,
      name: "Love for Sweet Shopping Parque Botucatu",
      address: "Av. Doutor José Amaro Faraldo 1050, Botucatu - SP",
      hours: "Seg-Sáb: 10h às 19h; Dom: 12h às 19h",
      highlight: "Tradição da zona sul",
      image: teste3,
      mapsLink: "https://www.google.com/maps/place/Shopping+Park+Botucatu/@-22.9144088,-48.4661254,17z/data=!3m1!4b1!4m6!3m5!1s0x94c6df23759d49bf:0xa61da4e8682a0cf4!8m2!3d-22.9144088!4d-48.4635505!16s%2Fg%2F1q67q_yjd?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
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
                 Experimente pessoalmente os doces da LOVE e descubra por que somos a
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
                        <Clock className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <p className="text-muted-foreground">{store.hours}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border">
                      <a
                        href={store.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button variant="elegant" className="w-full">
                          Ver no Maps
                        </Button>
                      </a>
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
