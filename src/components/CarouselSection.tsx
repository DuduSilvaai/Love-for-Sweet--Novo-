import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import bannerWedding from "@/assets/banner-wedding.jpg";
import bannerChocolates from "@/assets/banner-chocolates.jpg";
const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Momentos Especiais",
      subtitle: "Doces que tornam cada celebração inesquecível",
      description:
        "De casamentos a aniversários, criamos doces únicos que marcam os momentos mais importantes da sua vida.",
      cta: "Encomendar Agora",
      image: bannerWedding,
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
    }, 6000);

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
                  <Card className="relative h-[600px] border-0 rounded-3xl overflow-hidden mx-3">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
                      ></div>
                    </div>

                    <div className="relative z-10 h-full flex items-center">
                      <div className="container mx-auto px-12">
                        <div className="max-w-xl text-white">
                          <h2 className="heading-section mb-4 animate-fade-up">
                            {slide.title}
                          </h2>
                          <h3 className="text-2xl mb-6 text-brand-accent-light animate-fade-up font-extrabold ">
                            {slide.subtitle}
                          </h3>
                          <p className="text-elegant mb-8 opacity-90 animate-fade-up">
                            {slide.description}
                          </p>
                          <Button
                            variant="hero"
                            size="lg"
                            className="animate-fade-up"
                          >
                            {slide.cta}
                          </Button>
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
