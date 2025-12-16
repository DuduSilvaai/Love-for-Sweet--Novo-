import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Award, ArrowRight, Play } from "lucide-react";
import franchiseImage from "@/assets/Press/franqueado-image.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";

const FranchiseSection = () => {
  const navigate = useNavigate();

  const headerAnimation = useScrollAnimation<HTMLDivElement>({
    animationType: "fade-up",
    threshold: 0.2,
  });

  const imageAnimation = useScrollAnimation<HTMLDivElement>({
    animationType: "slide-left",
    threshold: 0.2,
  });

  const contentAnimation = useScrollAnimation<HTMLDivElement>({
    animationType: "slide-right",
    threshold: 0.2,
    delay: 150,
  });
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

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Franchise CTA - Hidden as requested */}

          {/* VSL Section - moved from VSLSection */}
          <div className="mb-20">
            {/* VSL Header */}
            <div
              ref={headerAnimation.ref}
              className={`text-center mb-16 ${headerAnimation.className}`}
            >
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
              <Card
                ref={imageAnimation.ref}
                className={`relative h-[400px] rounded-3xl overflow-hidden shadow-elegant group cursor-pointer ${imageAnimation.className}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-top"
                  style={{ backgroundImage: `url(${franchiseImage})` }}
                ></div>
              </Card>

              {/* Content */}
              <div
                ref={contentAnimation.ref}
                className={`space-y-8 ${contentAnimation.className}`}
              >
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
                  <Button
                    variant="elegant"
                    size="lg"
                    onClick={() => navigate("/franqueados")}
                  >
                    Conhecer Nossa História
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FranchiseSection;
