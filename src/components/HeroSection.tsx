import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/Press/new-hero.png";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-fade-up">
        <h1 className="heading-hero mb-6 leading-tight">
          Momentos Doces
          <br />
          <span className="text-brand-accent">Que Despertam Paixões</span>
        </h1>

        <p className="text-elegant mb-8 max-w-2xl mx-auto opacity-90 font-light">
          Descubra sabores únicos que transformam qualquer ocasião em uma
          memória inesquecível. Na Love for Sweet, cada doce é uma obra de arte
          criada para despertar seus sentidos.
        </p>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
