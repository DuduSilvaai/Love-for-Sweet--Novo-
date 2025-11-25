import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Menu, Users, Star } from "lucide-react";
import franqueado from "@/assets/franqueado.png";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const QuickActionsSection = () => {
  const cardAnimation = useScrollAnimation<HTMLDivElement>({
    animationType: "fade-up",
    threshold: 0.2,
  });

  return (
    <section
      id="franquia"
      className="py-20 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}

          {/* New Grid Layout */}
          <div className="grid grid-cols-1 gap-8">
            {/* Featured Action - Left Side */}

            <Card
              ref={cardAnimation.ref}
              className={`relative overflow-hidden bg-gradient-primary border-0 shadow-2xl group hover:shadow-3xl transition-all duration-500 ${cardAnimation.className}`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
              <div className="relative p-12 text-center text-white">
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:brightness-110 transition-all duration-300">
                    <Star className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">
                    Torne–se um Franqueado
                  </h3>
                  <p className="text-xl text-white/90 mb-8 font-light leading-relaxed">
                    Descubra nossa loja mais próxima de você e visite nossos
                    espaços únicos
                  </p>
                </div>
                <Button
                  asChild
                  variant="hero"
                  size="lg"
                  className="text-sm font-semibold px-8 py-4"
                >
                  <Link to="/franqueados">Quero ser Franqueado</Link>
                </Button>
              </div>
            </Card>

            {/* <Card className="relative overflow-hidden border-0 shadow-2xl rounded-3xl">
              <img
                src={franqueado}
                alt="Franqueado Love for Sweet"
                className="w-full h-[225px] md:h-[265px] object-cover"
              />
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default QuickActionsSection;
