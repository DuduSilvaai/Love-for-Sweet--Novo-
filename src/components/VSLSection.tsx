import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import casal from "@/assets/casal2.png";

const VSLSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
              >
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-primary/10 transition duration-300"></div>
              </div>

              <div className="relative z-10 h-full flex items-center justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="h-16 w-16 rounded-full p-0 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
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
                  O sucesso foi tão imediato que logo se espalhou, dando origem
                  a outro sonho realizado: transformar a LOVE em uma grande
                  família de franqueados que compartilham da mesma paixão.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hoje com +36 Mil seguidores e mais de R$1,8Milhao faturamento.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Agora, queremos te ajudar a realizar o seu sonho.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Faça parte desta história de amor e sucesso! Entre em contato
                  conosco para nos conhecermos melhor e dê o primeiro passo para
                  se tornar um franqueado LOVE.
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
      </div>
    </section>
  );
};

export default VSLSection;
