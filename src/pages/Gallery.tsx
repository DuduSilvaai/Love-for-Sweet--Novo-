import React, { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useEmblaCarousel from "embla-carousel-react";

// Importar todas as imagens de produtos
import capuccino from "@/assets/products/capuccino.jpeg";
import coxinhaMorango from "@/assets/products/coxinha-morango.png";
import tortaNinho from "@/assets/products/torta-ninho.jpeg";
import croissantPistache from "@/assets/products/pistache-croi.png";
import croissantMorango from "@/assets/products/croassant-morango-nutella.png";
import redVelvet from "@/assets/products/fatia-supreme-red.png";
import tortaLimao from "@/assets/products/torta-limão.jpeg";
import banoffePote from "@/assets/products/banoffe-pote.png";
import eclairPistache from "@/assets/products/eclair-pistache.png";
import fatiaAbacaxiCoco from "@/assets/products/fatia-supreme-abacaxi-coco.png";
import topCakeRed from "@/assets/products/top-cake-red.png";
import heroDesserts from "@/assets/hero-desserts.jpg";
import bannerChocolates from "@/assets/banner-chocolates.jpg";

// Componente de Seção de Carrossel
const ProductCarouselSection = ({ title, items, category }: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 2,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="mb-16">
      <div className="mb-6">
        <h2 className="text-3xl font-serif text-brand-secondary mb-2">
          {title}
        </h2>
        <div className="h-1 w-20 bg-brand-primary rounded-full"></div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {items.map((product: any, index: number) => (
              <div key={index} className="flex-[0_0_300px] min-w-0">
                <Card className="relative h-[400px] rounded-2xl overflow-hidden shadow-soft cursor-pointer group transition-transform duration-300 hover:scale-105">
                  <div className="absolute inset-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.src})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full h-12 w-12 border-none"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full h-12 w-12 border-none"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

const Gallery = () => {
  const allProducts = [
    {
      src: redVelvet,
      title: "Fatia Supreme Red Velvet",
      description: "Fatia generosa de bolo red velvet com cobertura especial",
      category: "Bolos",
    },
    {
      src: fatiaAbacaxiCoco,
      title: "Fatia Supreme Abacaxi Coco",
      description: "Fatia de bolo tropical com abacaxi e coco",
      category: "Bolos",
    },
    {
      src: topCakeRed,
      title: "Top Cake Red Velvet",
      description: "Bolo red velvet premium em porção completa",
      category: "Bolos",
    },
    {
      src: tortaNinho,
      title: "Torta Ninho",
      description: "Torta cremosa com brigadeiro branco e ninho",
      category: "Tortas",
    },
    {
      src: tortaLimao,
      title: "Torta de Limão",
      description: "Torta refrescante de limão com base crocante",
      category: "Tortas",
    },
    {
      src: coxinhaMorango,
      title: "Coxinha de Morango",
      description: "Bombom em formato de coxinha com recheio de morango",
      category: "Doces",
    },
    {
      src: banoffePote,
      title: "Banoffee no Pote",
      description: "Doce banoffee em porção individual",
      category: "Doces",
    },
    {
      src: eclairPistache,
      title: "Éclair de Pistache",
      description: "Éclair crocante com creme de pistache",
      category: "Doces",
    },
    {
      src: croissantPistache,
      title: "Croissant de Pistache",
      description: "Croissant artesanal com creme de pistache",
      category: "Salgados",
    },
    {
      src: croissantMorango,
      title: "Croissant Morango Nutella",
      description: "Croissant recheado com morango e nutella",
      category: "Salgados",
    },
    {
      src: capuccino,
      title: "Cappuccino",
      description: "Delicioso cappuccino cremoso com acabamento perfeito",
      category: "Bebidas",
    },
  ];

  const categories = [
    { title: "Bolos", key: "Bolos" },
    { title: "Tortas", key: "Tortas" },
    { title: "Cookies", key: "Cookies" },
    { title: "Milkshakes", key: "Milkshakes" },
    { title: "Bebidas", key: "Bebidas" },
    { title: "Salgados", key: "Salgados" },
  ];

  const getItemsByCategory = (categoryKey: string) => {
    return allProducts.filter((p) => p.category === categoryKey);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner Top Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Left side - Desserts image */}
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${heroDesserts})` }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          {/* Right side - Chocolates image */}
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerChocolates})` }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Love for Sweet
          </h1>
          <p className="text-xl md:text-2xl font-extralight mb-8 opacity-90">
            Conheça nosso cardápio completo!
          </p>
          <a
            href="https://www.ifood.com.br/busca?q=love%20for%20sweet"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="heading-section mb-6 text-brand-secondary">
                Nossos Doces
              </h1>
              <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
                Explore toda nossa variedade de doces artesanais, tortas, bolos
                e sobremesas feitas com os melhores ingredientes e muito
                carinho.
              </p>
            </div>

            {/* Seções de Carrossel */}
            {categories.map((category) => {
              const items = getItemsByCategory(category.key);
              if (items.length === 0) return null;

              return (
                <ProductCarouselSection
                  key={category.key}
                  title={category.title}
                  items={items}
                  category={category.key}
                />
              );
            })}

            {/* Botão Cardápio */}
            <div className="text-center mt-8">
              <a
                href="https://www.ifood.com.br/busca?q=love%20for%20sweet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="elegant" size="lg">
                  Ver Cardápio Completo no iFood
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
