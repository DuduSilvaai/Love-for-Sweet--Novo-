import React, { useState, useEffect, useCallback, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useEmblaCarousel from "embla-carousel-react";
import heroDesserts from "@/assets/hero-desserts.jpg";
import bannerChocolates from "@/assets/banner-chocolates.jpg";

// Componente para Lazy Loading de imagens
const LazyImage = ({ src, alt = "" }: { src: string; alt?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px", // Carrega 100px antes de entrar na viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && !isLoaded) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [isInView, src, isLoaded]);

  return (
    <div
      ref={imgRef}
      className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
      style={{
        backgroundImage: isLoaded ? `url(${src})` : "none",
        backgroundColor: isLoaded ? "transparent" : "#f3f4f6",
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
          <div className="w-10 h-10 border-3 border-brand-primary border-t-transparent rounded-full animate-spin opacity-50"></div>
        </div>
      )}
    </div>
  );
};

// Importar imagens de Bolos
import boloBlackCake from "@/assets/products/gallery/bolos-optimized/black-cake-fatia-image.webp";
import boloChocolatudo from "@/assets/products/gallery/bolos-optimized/Bolo de pote - Chocolatudo-image.webp";
import boloCenoura from "@/assets/products/gallery/bolos-optimized/bolo-de-cenoura-image.webp";
import boloPrestigio from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-de-prestigio-image.webp";
import boloDoceLeiteCoco from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-doce-de-leite-com-coco-image.webp";
import boloDoisAmores from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-dois-amores-image.webp";
import boloMaracuja from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-maracuja-image.webp";
import boloNinhoNutella from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-ninho-com-nutella-image.webp";
import boloPistacchioRed from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-pistacchio-red-image.webp";
import boloRedVelvet from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-red-velvet-image.webp";
import boloGeladoCoco from "@/assets/products/gallery/bolos-optimized/bolo-gelado-de-coco-image.webp";
import fatiaAbacaxiCoco from "@/assets/products/gallery/bolos-optimized/fatia-supreme-abacaxi-com-coco-image.webp";
import fatiaBemCasado from "@/assets/products/gallery/bolos-optimized/fatia-supreme-bem-casado-crocante-image.webp";
import fatiaChocolatudo from "@/assets/products/gallery/bolos-optimized/fatia-supreme-chocolatudo-image.webp";
import fatiaPistache from "@/assets/products/gallery/bolos-optimized/fatia-supreme-de-pistache-image.webp";
import fatiaDoisAmores from "@/assets/products/gallery/bolos-optimized/fatia-supreme-dois-amores-image.webp";
import fatiaMaracuja from "@/assets/products/gallery/bolos-optimized/fatia-supreme-maracuja-com-brigadeiro-image.webp";
import fatiaPrestigio from "@/assets/products/gallery/bolos-optimized/fatia-supreme-prestigio-image.webp";
import fatiaRedVelvet from "@/assets/products/gallery/bolos-optimized/fatia-supreme-red-velvet-image.webp";
import pedacoDoceLeite from "@/assets/products/gallery/bolos-optimized/pedaco-caseiro-doce-de-leite-com-coco-image.webp";
import pedacoMesclado from "@/assets/products/gallery/bolos-optimized/pedaco-caseiro-mesclado-image.webp";
import pedacoBanana from "@/assets/products/gallery/bolos-optimized/pedacos-casei-bolo-de-banana-image.webp";
import pedacoBaunilha from "@/assets/products/gallery/bolos-optimized/pedacos-caseiro-baunilha-com-goiabada-image.webp";
import pedacoLimao from "@/assets/products/gallery/bolos-optimized/pedacos-caseiros-limao-com-blueberry-image.webp";

// Importar imagens de Tortas
import tortaCheesecakeFrutas from "@/assets/products/gallery/tortas-optimized/cheesecake-frutas-vermelhas.webp";
import tortaCheesecakePistache from "@/assets/products/gallery/tortas-optimized/cheesecake-pistache.webp";
import tortaCookieChocolatuda from "@/assets/products/gallery/tortas-optimized/torta-cookie-chocolatuda.webp";
import tortaCookieNinhoNutella from "@/assets/products/gallery/tortas-optimized/torta-cookie-ninho-nutella.webp";
import tortaCookieNutella from "@/assets/products/gallery/tortas-optimized/torta-cookie-nutella.webp";
import tortaMousseNapolitana from "@/assets/products/gallery/tortas-optimized/torta-mousse-napolitana.webp";
import tortaMousseOreo from "@/assets/products/gallery/tortas-optimized/torta-mousse-oreo.webp";
import tortaMoussePistache from "@/assets/products/gallery/tortas-optimized/torta-mousse-pistache.webp";
import tortaMousseSensacao from "@/assets/products/gallery/tortas-optimized/torta-mousse-sensacao.webp";
import tortaPinkLove from "@/assets/products/gallery/tortas-optimized/torta-pink-love.webp";
import tortinhaBrigadeiroMorango from "@/assets/products/gallery/tortas-optimized/tortinha-brigadeiro-morango.webp";
import tortinhaLimao from "@/assets/products/gallery/tortas-optimized/tortinha-limao.webp";
import tortinhaNinhoMorango from "@/assets/products/gallery/tortas-optimized/tortinha-ninho-morango.webp";

// Importar imagens de Doces Momentos
import banoffePote from "@/assets/products/gallery/doces-momentos-optimized/banoffe-pote.webp";
import bombomMorango from "@/assets/products/gallery/doces-momentos-optimized/bombom-aberto-morango.webp";
import bombomUva from "@/assets/products/gallery/doces-momentos-optimized/bombom-aberto-uva.webp";
import brigadeiroTradicional from "@/assets/products/gallery/doces-momentos-optimized/brigadeiro-tradicional.webp";
import brownieDoisAmores from "@/assets/products/gallery/doces-momentos-optimized/brownie-2-amores.webp";
import brownieNutella from "@/assets/products/gallery/doces-momentos-optimized/brownie-nutella-chocolate.webp";
import brownieSemRecheio from "@/assets/products/gallery/doces-momentos-optimized/brownie-sem-recheio.webp";
import coneTrufadoDragee from "@/assets/products/gallery/doces-momentos-optimized/cone-trufado-drageé.webp";
import coneTrufadoFerrero from "@/assets/products/gallery/doces-momentos-optimized/cone-trufado-ferrero-rocher.webp";
import coneTrufadoKinderBueno from "@/assets/products/gallery/doces-momentos-optimized/cone-trufado-kinder-bueno.webp";
import coneTrufadoKinderWhite from "@/assets/products/gallery/doces-momentos-optimized/cone-trufado-kinder-white.webp";
import coneTrufadoPistache from "@/assets/products/gallery/doces-momentos-optimized/cone-trufado-pistache.webp";
import coneTrufadoPrestigio from "@/assets/products/gallery/doces-momentos-optimized/cone-trufado-prestigio.webp";
import coxinhaMorango from "@/assets/products/gallery/doces-momentos-optimized/coxinha-morango.webp";
import croissantMorangoNutella from "@/assets/products/gallery/doces-momentos-optimized/croissant-morango-nutella.webp";
import croissantPistache from "@/assets/products/gallery/doces-momentos-optimized/croissant-pistache.webp";
import eclairBrigadeiro from "@/assets/products/gallery/doces-momentos-optimized/eclair-brigadeiro.webp";
import eclairPistache from "@/assets/products/gallery/doces-momentos-optimized/eclair-pistache.webp";
import macarons from "@/assets/products/gallery/doces-momentos-optimized/macarons.webp";
import topCakeFerrero from "@/assets/products/gallery/doces-momentos-optimized/top-cake-ferrero-rocher.webp";
import topCakeOreo from "@/assets/products/gallery/doces-momentos-optimized/top-cake-oreo.webp";
import topCakeRed from "@/assets/products/gallery/doces-momentos-optimized/top-cake-red.webp";

// Importar imagens de Salgados
import bauru from "@/assets/products/gallery/salgados-optimized/bauru.webp";
import coxinhaFrango from "@/assets/products/gallery/salgados-optimized/coxinha-frango.webp";
import croissantQueijoPresunto from "@/assets/products/gallery/salgados-optimized/croissant-queijo-presunto.webp";
import croqueMonsieur from "@/assets/products/gallery/salgados-optimized/croque-moseiur.webp";
import esfihaCarne from "@/assets/products/gallery/salgados-optimized/esfiha-carne.webp";
import paoBatata from "@/assets/products/gallery/salgados-optimized/pao-batata.webp";
import paoChapa from "@/assets/products/gallery/salgados-optimized/pao-chapa.webp";
import paoQueijo from "@/assets/products/gallery/salgados-optimized/pao-queijo.webp";
import tortaCamarao from "@/assets/products/gallery/salgados-optimized/torta-camarao.webp";
import tortaFrango from "@/assets/products/gallery/salgados-optimized/torta-frango.webp";
import totexOvo from "@/assets/products/gallery/salgados-optimized/totex-ovo.webp";

// Importar imagens de Bebidas
import capuccino from "@/assets/products/capuccino.jpeg";
import chocolateGelado from "@/assets/products/gallery/bebidas-optimized/chocolate-gelado-quente.png";
import coldCoffee from "@/assets/products/gallery/bebidas-optimized/cold-coffe.png";
import dulceCoffee from "@/assets/products/gallery/bebidas-optimized/dulce-coffee3.png";
import milkshakes from "@/assets/products/gallery/bebidas-optimized/milkshakes.png";
import vitaminaAcai from "@/assets/products/gallery/bebidas-optimized/vitamina-acai.png";

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
                    <LazyImage src={product.src} alt={product.title} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pointer-events-none">
                    <p className="text-white font-serif text-lg md:text-xl font-semibold">
                      {product.title}
                    </p>
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
    // Bolos
    {
      src: fatiaRedVelvet,
      title: "Fatia Supreme Red Velvet",
      category: "Bolos",
    },
    {
      src: fatiaAbacaxiCoco,
      title: "Fatia Supreme Abacaxi com Coco",
      category: "Bolos",
    },
    {
      src: fatiaPistache,
      title: "Fatia Supreme de Pistache",
      category: "Bolos",
    },
    {
      src: fatiaDoisAmores,
      title: "Fatia Supreme Dois Amores",
      category: "Bolos",
    },
    {
      src: fatiaBemCasado,
      title: "Fatia Supreme Bem Casado Crocante",
      category: "Bolos",
    },
    {
      src: fatiaChocolatudo,
      title: "Fatia Supreme Chocolatudo",
      category: "Bolos",
    },
    {
      src: fatiaMaracuja,
      title: "Fatia Supreme Maracujá com Brigadeiro",
      category: "Bolos",
    },
    {
      src: fatiaPrestigio,
      title: "Fatia Supreme Prestígio",
      category: "Bolos",
    },
    {
      src: pedacoBaunilha,
      title: "Pedação Caseiro Baunilha com Goiabada",
      category: "Bolos",
    },
    {
      src: pedacoDoceLeite,
      title: "Pedação Caseiro Doce de Leite com Coco",
      category: "Bolos",
    },
    {
      src: pedacoMesclado,
      title: "Pedação Caseiro Mesclado",
      category: "Bolos",
    },
    {
      src: pedacoBanana,
      title: "Pedação Caseiro Bolo de Banana",
      category: "Bolos",
    },
    { src: boloBlackCake, title: "Black Cake", category: "Bolos" },
    {
      src: boloChocolatudo,
      title: "Bolo de Pote Chocolatudo",
      category: "Bolos",
    },
    { src: boloPrestigio, title: "Bolo de Pote Prestígio", category: "Bolos" },
    {
      src: boloDoceLeiteCoco,
      title: "Bolo de Pote Doce de Leite com Coco",
      category: "Bolos",
    },
    {
      src: boloDoisAmores,
      title: "Bolo de Pote Dois Amores",
      category: "Bolos",
    },
    { src: boloMaracuja, title: "Bolo de Pote Maracujá", category: "Bolos" },
    {
      src: boloNinhoNutella,
      title: "Bolo de Pote Ninho com Nutella",
      category: "Bolos",
    },
    {
      src: boloPistacchioRed,
      title: "Bolo de Pote Pistacchio Red",
      category: "Bolos",
    },
    { src: boloRedVelvet, title: "Bolo de Pote Red Velvet", category: "Bolos" },
    { src: boloGeladoCoco, title: "Bolo Gelado de Coco", category: "Bolos" },
    { src: boloCenoura, title: "Bolo de Cenoura", category: "Bolos" },
    // {
    //   src: pedacoLimao,
    //   title: "Pedação Caseiro Limão com Blueberry",
    //   category: "Bolos",
    // },

    // Tortas
    {
      src: tortinhaBrigadeiroMorango,
      title: "Tortinha Brigadeiro Morango",
      category: "Tortas",
    },
    { src: tortinhaLimao, title: "Tortinha Limão", category: "Tortas" },
    {
      src: tortinhaNinhoMorango,
      title: "Tortinha Ninho Morango",
      category: "Tortas",
    },
    {
      src: tortaCheesecakeFrutas,
      title: "Cheesecake Frutas Vermelhas",
      category: "Tortas",
    },
    {
      src: tortaCheesecakePistache,
      title: "Cheesecake Pistache",
      category: "Tortas",
    },
    {
      src: tortaCookieChocolatuda,
      title: "Torta Cookie Chocolatuda",
      category: "Tortas",
    },
    {
      src: tortaCookieNinhoNutella,
      title: "Torta Cookie Ninho Nutella",
      category: "Tortas",
    },
    {
      src: tortaCookieNutella,
      title: "Torta Cookie Nutella",
      category: "Tortas",
    },
    { src: tortaPinkLove, title: "Torta Pink Love", category: "Tortas" },
    {
      src: tortaMousseNapolitana,
      title: "Torta Mousse Napolitana",
      category: "Tortas",
    },
    { src: tortaMousseOreo, title: "Torta Mousse Oreo", category: "Tortas" },
    {
      src: tortaMoussePistache,
      title: "Torta Mousse Pistache",
      category: "Tortas",
    },
    {
      src: tortaMousseSensacao,
      title: "Torta Mousse Sensação",
      category: "Tortas",
    },

    // Doces Momentos
    {
      src: croissantMorangoNutella,
      title: "Croissant Morango Nutella",
      category: "Doces Momentos",
    },
    {
      src: croissantPistache,
      title: "Croissant Pistache",
      category: "Doces Momentos",
    },
    {
      src: eclairBrigadeiro,
      title: "Éclair Brigadeiro",
      category: "Doces Momentos",
    },
    {
      src: eclairPistache,
      title: "Éclair Pistache",
      category: "Doces Momentos",
    },
    {
      src: coxinhaMorango,
      title: "Coxinha de Morango",
      category: "Doces Momentos",
    },
    {
      src: brownieDoisAmores,
      title: "Brownie Dois Amores",
      category: "Doces Momentos",
    },
    {
      src: brownieNutella,
      title: "Brownie Nutella Chocolate",
      category: "Doces Momentos",
    },
    {
      src: brownieSemRecheio,
      title: "Brownie Sem Recheio",
      category: "Doces Momentos",
    },
    { src: banoffePote, title: "Banoffee no Pote", category: "Doces Momentos" },
    { src: bombomUva, title: "Bombom Aberto Uva", category: "Doces Momentos" },
    {
      src: bombomMorango,
      title: "Bombom Aberto Morango",
      category: "Doces Momentos",
    },
    {
      src: topCakeFerrero,
      title: "Top Cake Ferrero Rocher",
      category: "Doces Momentos",
    },
    { src: topCakeOreo, title: "Top Cake Oreo", category: "Doces Momentos" },
    {
      src: topCakeRed,
      title: "Top Cake Red Velvet",
      category: "Doces Momentos",
    },
    {
      src: brigadeiroTradicional,
      title: "Brigadeiro Tradicional",
      category: "Doces Momentos",
    },
    {
      src: coneTrufadoDragee,
      title: "Cone Trufado Dragée",
      category: "Doces Momentos",
    },
    {
      src: coneTrufadoFerrero,
      title: "Cone Trufado Ferrero Rocher",
      category: "Doces Momentos",
    },
    {
      src: coneTrufadoKinderBueno,
      title: "Cone Trufado Kinder Bueno",
      category: "Doces Momentos",
    },
    {
      src: coneTrufadoKinderWhite,
      title: "Cone Trufado Kinder White",
      category: "Doces Momentos",
    },
    {
      src: coneTrufadoPistache,
      title: "Cone Trufado Pistache",
      category: "Doces Momentos",
    },
    {
      src: coneTrufadoPrestigio,
      title: "Cone Trufado Prestígio",
      category: "Doces Momentos",
    },
    { src: macarons, title: "Macarons", category: "Doces Momentos" },

    // Salgados
    {
      src: croissantQueijoPresunto,
      title: "Croissant Queijo e Presunto",
      category: "Salgados",
    },
    { src: paoQueijo, title: "Pão de Queijo", category: "Salgados" },
    { src: coxinhaFrango, title: "Coxinha de Frango", category: "Salgados" },
    { src: croqueMonsieur, title: "Croque Monsieur", category: "Salgados" },
    { src: tortaCamarao, title: "Torta de Camarão", category: "Salgados" },
    { src: totexOvo, title: "Totex de Ovo", category: "Salgados" },
    { src: esfihaCarne, title: "Esfiha de Carne", category: "Salgados" },
    { src: paoBatata, title: "Pão de Batata", category: "Salgados" },
    { src: paoChapa, title: "Pão na Chapa", category: "Salgados" },
    { src: tortaFrango, title: "Torta de Frango", category: "Salgados" },
    { src: bauru, title: "Bauru", category: "Salgados" },

    // Bebidas
    { src: milkshakes, title: "Milkshakes", category: "Bebidas" },
    { src: vitaminaAcai, title: "Vitamina de Açaí", category: "Bebidas" },
    {
      src: chocolateGelado,
      title: "Chocolate Gelado Quente",
      category: "Bebidas",
    },
    { src: dulceCoffee, title: "Dulce Coffee", category: "Bebidas" },
    { src: coldCoffee, title: "Cold Coffee", category: "Bebidas" },
    { src: capuccino, title: "Capuccino", category: "Bebidas" },
  ];

  const categories = [
    { title: "Bolos", key: "Bolos" },
    { title: "Tortas", key: "Tortas" },
    { title: "Doces Momentos", key: "Doces Momentos" },
    { title: "Salgados", key: "Salgados" },
    { title: "Bebidas", key: "Bebidas" },
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
