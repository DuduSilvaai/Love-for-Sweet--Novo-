import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import bannerChocolates from "@/assets/banner-chocolates.jpg";
import bannerBebidas from "@/assets/banner-bebida.png";
import bannerBebidasMobile from "@/assets/banner-bebida-mobile.png";
import bannerMilkshakes from "@/assets/banner-milkshakes.png";
import bannerMilkshakesMobile from "@/assets/banner-milkshakes-mobile.png";
const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Hook para detectar se a tela é menor que 860px
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 860);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Refrescância Inesquecível",
      subtitle: "Entre cores, aromas e doçura, nasce uma experiência única.",
      description:
        "Descubra nossas bebidas artesanais, feitas para celebrar o encanto e o frescor que só a Love for Sweet tem.",
      cta: "Encomendar Agora",
      image: bannerBebidas,
      gradient: "from-brand-primary/90 to-brand-secondary/90",
    },
    {
      id: 2,
      title: "Chocolates Artesanais",
      subtitle: "Experiência de sabor incomparável",
      description:
        "Nossos chocolates são feitos com ingredientes premium selecionados, criando uma experiência sensorial única.",
      cta: "Descobrir Sabores",
      image: bannerChocolates,
      gradient: "from-brand-secondary/90 to-brand-accent/90",
    },
  ];

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1000000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 px-3">
                  <Card className="relative h-[500px] lg:h-[600px] max-[860px]:h-[700px] border-0 rounded-3xl overflow-hidden mx-3">
                    <div
                      className="absolute inset-0 bg-cover bg-center min-[861px]:bg-right"
                      style={{
                        backgroundImage: `url(${
                          isMobile && slide.id === 1
                            ? bannerBebidasMobile
                            : slide.image
                        })`,
                      }}
                    ></div>

                    <div className="relative z-10 h-full flex items-start pt-20 max-[860px]:pt-12">
                      <div className="container mx-auto px-12 max-[860px]:px-8 h-full flex flex-col">
                        <div className="max-w-lg lg:max-w-xl text-white max-[860px]:max-w-full flex-1 flex flex-col justify-between">
                          <div>
                            <h2 className="heading-section mb-2 animate-fade-up max-[860px]:text-3xl">
                              {slide.title}
                            </h2>
                            <h3 className="text-lg md:text-2xl lg:text-3xl mb-4 animate-fade-up font-extrabold max-w-md max-[860px]:text-xl max-[860px]:max-w-full">
                              {slide.subtitle}
                            </h3>
                            <p className="hyphens-auto text-elegant mb-8 opacity-90 text-sm md:text-base lg:text-lg animate-fade-up max-w-sm lg:max-w-md max-[860px]:text-base max-[860px]:max-w-full">
                              {slide.description}
                            </p>
                          </div>
                          <div className="mt-auto pb-12">
                            <Button
                              variant="hero"
                              size="lg"
                              className="animate-fade-up max-[860px]:w-full"
                            >
                              {slide.cta}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full h-12 w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full h-12 w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-brand-primary brightness-125"
                    : "bg-muted hover:bg-brand-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CarouselSection;
