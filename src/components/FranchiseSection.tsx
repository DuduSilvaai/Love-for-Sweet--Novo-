import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Award, ArrowRight, X, Play } from "lucide-react";
import { useState, useEffect } from "react";
import vslBackground from "@/assets/vsl-background.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import bannerWedding from "@/assets/banner-wedding.jpg";
import bannerChocolates from "@/assets/banner-chocolates.jpg";
import heroDesserts from "@/assets/hero-desserts.jpg";
import storeItaim from "@/assets/store-itaim.jpg";
import casal from "@/assets/casal2.png";
const FranchiseSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedImage !== null) {
        setSelectedImage(null);
      }
    };

    if (selectedImage !== null) {
      document.addEventListener("keydown", handleEscKey);
      // Prevenir scroll do body quando modal estiver aberto
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Negócio Lucrativo",
      description:
        "Mercado em expansão com alta rentabilidade e retorno rápido do investimento.",
    },
    {
      icon: Users,
      title: "Suporte Completo",
      description:
        "Treinamento, marketing e suporte operacional contínuo para seu sucesso.",
    },
    {
      icon: Award,
      title: "Marca Reconhecida",
      description: "Marca consolidada com reputação sólida e clientes fiéis.",
    },
  ];

  const galleryImages = [
    {
      src: storeInterior,
      hoverSrc: bannerWedding,
      title: "Nossa Loja",
      description: "Ambiente acolhedor e sofisticado",
    },
    {
      src: vslBackground,
      hoverSrc: bannerChocolates,
      title: "Processo Artesanal",
      description: "Cada doce feito com dedicação",
    },
    {
      src: bannerWedding,
      hoverSrc: heroDesserts,
      title: "Eventos Especiais",
      description: "Criamos doces únicos para suas celebrações",
    },
    {
      src: bannerChocolates,
      hoverSrc: storeItaim,
      title: "Chocolates Premium",
      description: "Ingredientes selecionados e sabores exclusivos",
    },
    {
      src: heroDesserts,
      hoverSrc: storeInterior,
      title: "Sobremesas Artesanais",
      description: "Criações que despertam todos os sentidos",
    },
    {
      src: storeItaim,
      hoverSrc: vslBackground,
      title: "Nossas Unidades",
      description: "Espaços especiais em toda a cidade",
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Franchise CTA - Hidden as requested */}

          {/* VSL Section - moved from VSLSection */}
          <div className="mb-20">
            {/* VSL Header */}
            <div className="text-center mb-16">
              <h2 className="heading-section mb-6 text-brand-secondary">
                Descubra o Segredo dos Nossos Doces
              </h2>
              <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
                Por trás de cada criação há uma história de paixão, tradição e
                inovação. Veja como transformamos ingredientes simples em
                experiências extraordinárias.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* VSL Video */}
              <Card className="relative h-[400px] rounded-3xl overflow-hidden shadow-elegant group cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${casal})` }}
                ></div>
              </Card>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="heading-card text-brand-primary mb-4">
                    A LOVE nasceu de uma paixão.
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nossa história começou com um sonho: criar uma confeitaria
                    capaz de espalhar os melhores sentimentos em cada colher. Em
                    2021, esse sonho se tornou realidade com a inauguração da
                    nossa primeira loja.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    O sucesso foi tão imediato que logo se espalhou, dando
                    origem a outro sonho realizado: transformar a LOVE em uma
                    grande família de franqueados que compartilham da mesma
                    paixão.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hoje com +36 Mil seguidores e mais de R$1,8Milhao
                    faturamento.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Agora, queremos te ajudar a realizar o seu sonho.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Faça parte desta história de amor e sucesso! Entre em
                    contato conosco para nos conhecermos melhor e dê o primeiro
                    passo para se tornar um franqueado LOVE.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="elegant" size="lg">
                    Conhecer Nossa História
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="ml-6 hover:text-accent-foreground transition-colors duration-300"
                  >
                    Agendar Visita
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery - moved from VSLSection */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  className="relative h-[300px] rounded-2xl overflow-hidden shadow-soft cursor-pointer group transition-transform duration-300 hover:scale-102"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="absolute inset-0">
                    {/* Imagem principal */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${image.src})` }}
                    ></div>

                    {/* Gradiente */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70"
                      style={{
                        background:
                          "linear-gradient(to top, hsl(350 40% 52%) 0%, hsl(350 40% 52% / 0.6) 20%, transparent 60%)",
                      }}
                    ></div>

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className="absolute top-4 right-4 z-50 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/50 rounded-full h-12 w-12"
                >
                  <X className="h-6 w-6" />
                </Button>

                <Card className="relative h-[80vh] border-0 rounded-3xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${galleryImages[selectedImage].src})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent"></div>
                  </div>

                  <div className="relative z-10 h-full flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-4xl font-serif mb-4">
                        {galleryImages[selectedImage].title}
                      </h3>
                      <p className="text-xl opacity-90 leading-relaxed max-w-2xl">
                        {galleryImages[selectedImage].description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default FranchiseSection;
