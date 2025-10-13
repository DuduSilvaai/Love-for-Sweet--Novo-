import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import vslBackground from "@/assets/vsl-background.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import bannerWedding from "@/assets/banner-wedding.jpg";
import bannerChocolates from "@/assets/banner-chocolates.jpg";
import heroDesserts from "@/assets/hero-desserts.jpg";
import storeItaim from "@/assets/store-itaim.jpg";
import capuccino from "@/assets/products/capuccino.jpeg";
import coxinhaMorango from "@/assets/products/coxinha-morango.png";
import tortaNinho from "@/assets/products/torta-ninho.jpeg";
import croissantPistache from "@/assets/products/pistache-croi.png";
import croissantMorango from "@/assets/products/croassant-morango-nutella.png";
import redVelvet from "@/assets/products/fatia-supreme-red.png";
const ImageGallery = () => {
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

  const galleryImages = [
    {
      src: capuccino,
      hoverSrc: bannerWedding,
      title: "Nossa Loja",
      description: "Ambiente acolhedor e sofisticado",
    },
    {
      src: coxinhaMorango,
      hoverSrc: bannerChocolates,
      title: "Processo Artesanal",
      description: "Cada doce feito com dedicação",
    },
    {
      src: tortaNinho,
      hoverSrc: heroDesserts,
      title: "Eventos Especiais",
      description: "Criamos doces únicos para suas celebrações",
    },
    {
      src: croissantPistache,
      hoverSrc: storeItaim,
      title: "Chocolates Premium",
      description: "Ingredientes selecionados e sabores exclusivos",
    },
    {
      src: croissantMorango,
      hoverSrc: storeInterior,
      title: "Sobremesas Artesanais",
      description: "Criações que despertam todos os sentidos",
    },
    {
      src: redVelvet,
      hoverSrc: vslBackground,
      title: "Nossas Unidades",
      description: "Espaços especiais em toda a cidade",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Gallery Header */}
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6 text-brand-secondary">
              Nossa Galeria
            </h2>
            <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
              Explore os momentos especiais, nossos produtos artesanais e os
              ambientes únicos que fazem da Love for Sweet uma experiência
              inesquecível.
            </p>
          </div>

          {/* Image Gallery */}
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

                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </Card>
            ))}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent"></div>
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

export default ImageGallery;
