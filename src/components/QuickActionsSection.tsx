import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Menu, Users } from "lucide-react";
const QuickActionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}

          {/* New Grid Layout */}
          <div className="grid grid-cols-1 gap-8">
            {/* Featured Action - Left Side */}
            <Card className="relative overflow-hidden bg-gradient-primary border-0 shadow-2xl group hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
              <div className="relative p-12 text-center text-white">
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:brightness-110 transition-all duration-300">
                    <MapPin className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">
                    Encontre Unidades
                  </h3>
                  <p className="text-xl text-white/90 mb-8 font-light leading-relaxed">
                    Descubra nossa loja mais próxima de você e visite nossos
                    espaços únicos
                  </p>
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  className="text-sm font-semibold px-8 py-4"
                >
                  Encontrar Agora
                </Button>
              </div>
            </Card>

            {/* Secondary Actions - Right Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Menu Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-accent/20 to-accent/10">
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                        <Menu className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium font-serif text-accent-foreground mb-2">
                          Seja Franqueado
                        </h4>
                        <p className="text-muted-foreground font-light text-lg">
                          Faça parte da família Love for Sweet
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="lg"
                      className="ml-6 hover:text-accent-foreground transition-colors duration-300"
                    >
                      Acessar
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Franchise Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-accent/20 to-accent/10">
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                        <Users className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium font-serif text-accent-foreground mb-2">
                          Seja Franqueado
                        </h4>
                        <p className="text-muted-foreground font-light text-lg">
                          Faça parte da família Love for Sweet
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="lg"
                      className="ml-6 hover:text-accent-foreground transition-colors duration-300"
                    >
                      Acessar
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default QuickActionsSection;
