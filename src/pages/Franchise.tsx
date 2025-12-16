import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PressSection from "@/components/PressSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Star, StarIcon } from "lucide-react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import BoltIcon from "@mui/icons-material/Bolt";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import storeInterior from "@/assets/Press/franqueado-image.png";
// Importar imagens de produtos principais
import fatiaRedVelvet from "@/assets/products/gallery/bolos-optimized/fatia-supreme-red-velvet-image.webp";
import fatiaAbacaxiCoco from "@/assets/products/gallery/bolos-optimized/fatia-supreme-abacaxi-com-coco-image.webp";
import fatiaPistache from "@/assets/products/gallery/bolos-optimized/fatia-supreme-de-pistache-image.webp";
import fatiaChocolatudo from "@/assets/products/gallery/bolos-optimized/fatia-supreme-chocolatudo-image.webp";
// Importar imagens de avaliações do Google (fotos de perfil) removidas para usar padrão visual

import boloRedVelvet from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-red-velvet-image.webp";
import boloNinhoNutella from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-ninho-com-nutella-image.webp";
import tortaPinkLove from "@/assets/products/gallery/tortas-optimized/torta-pink-love.webp";
import tortaMoussePistache from "@/assets/products/gallery/tortas-optimized/torta-mousse-pistache.webp";
import croissantMorangoNutella from "@/assets/products/gallery/doces-momentos-optimized/croissant-morango-nutella.webp";
import eclairPistache from "@/assets/products/gallery/doces-momentos-optimized/eclair-pistache.webp";
import macarons from "@/assets/products/gallery/doces-momentos-optimized/macarons.webp";
import topCakeFerrero from "@/assets/products/gallery/doces-momentos-optimized/top-cake-ferrero-rocher.webp";
import coxinhaMorango from "@/assets/products/gallery/doces-momentos-optimized/coxinha-morango.webp"
import salgadinhoFrango from "@/assets/products/gallery/salgados-optimized/torta-frango.webp";
import dulceCoffee from "@/assets/products/gallery/bebidas-optimized/dulce-coffee3.png"
import fotoCase1 from '../cases/foto case 1.jpeg';
import fotoCase5 from '../cases/foto case 5.jpeg';
import fotoCase6 from '../cases/foto case 6.jpeg';
import fotoCase7 from '../cases/foto case 7.jpeg';
import fotoCase8 from '../cases/foto case 8.jpeg';
import fotoCase12 from '../cases/foto case 12.jpeg';
import fotoCase13 from '../cases/foto case 13.jpeg';
import fotoCase15 from '../cases/foto case 15.jpeg';
import FranchiseModal from "@/components/FranchiseModal";
import presentationPdf from "@/assets/Press/Seja um Franqueado Love.pdf.pdf";

const testimonials = [
  {
    name: "INGRID VITORIA",
    text: "Ambiente maravilhoso, equipe espetacular, e a comida um show a parte",
    rating: 5,
    image: fotoCase1,
    initials: "IV"
  },
  {
    name: "Paola Bitencourt",
    text: "Café gostoso e surpresa de uva ótimo tamanho",
    rating: 5,
    image: "",
    initials: "PB"
  },
  {
    name: "Bruno Martinelli",
    text: "Experiência muito boa, ótimos doces e salgados",
    rating: 5,
    image: "",
    initials: "BM"
  },
  {
    name: "Agatha Dell Amo",
    text: "Ambiente espetacular de lindo, boa comida com bons ingredientes.",
    rating: 5,
    image: "",
    initials: "AD"
  },
  {
    name: "Priscila Sales",
    text: "Lugar aconchegante, várias opções de doces e salgados... super recomendado",
    rating: 5,
    image: fotoCase5,
    initials: "PS"
  },
  {
    name: "Yuri Remedio",
    text: "Melhor lugar da região para um ótimo doce, salgado e café",
    rating: 5,
    image: fotoCase6,
    initials: "YR"
  },
  {
    name: "Solange Passos",
    text: "O café uma delícia, ambiente bonito, lindas fotos e boa localização.",
    rating: 5,
    image: fotoCase7,
    initials: "SP"
  },
  {
    name: "Sheila Evangelista",
    text: "Muita variedade de sobremesa, cafés, salgados e bebidas",
    rating: 5,
    image: fotoCase8,
    initials: "SE"
  },
  {
    name: "Jaqueline McKee",
    text: "ótimos preços, torta de frango maravilhosa!",
    rating: 5,
    image: "",
    initials: "JM"
  },
  {
    name: "Quebra Preços",
    text: "Muito top, tivemos que levar os bolos de pote pra família",
    rating: 5,
    image: "",
    initials: "QP"
  },
  {
    name: "Greicy Mendes",
    text: "Lugar maravilhoso e atendentes ótimas❤️ doces incríveis",
    rating: 5,
    image: fotoCase12,
    initials: "GM"
  },
  {
    name: "Sabrina T Santalucia",
    text: "Doces maravilhosos, muito capricho na decoração do local e apresentação!",
    rating: 5,
    image: fotoCase13,
    initials: "SS"
  },
  {
    name: "Cleber Soares",
    text: "Sobremesa deliciosa,doce na medida certa, com ingredientes de qualidade",
    rating: 5,
    image: fotoCase15,
    initials: "CS"
  }
];

const Franchise = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Link para a página de CTA (pode ser alterado conforme necessário)
  const ctaLink = "https://wa.me/11965048285"; // Substitua pelo link desejado

  return (
    <div className="min-h-screen">
      <FranchiseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-rose-50 via-rose-50/30 to-stone-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Text Content - Left */}
              <div className="space-y-6 animate-fade-up">
                <h1 className="heading-hero text-brand-secondary leading-none mt-10 text-6xl md:mt-0">
                  Abra sua Love For Sweet — a franquia que une beleza, sabor e
                  lucro.
                </h1>
                <p className="text-elegant text-muted-foreground max-w-xl">
                  Transforme sua paixão por doces em um negócio de sucesso.
                  Junte-se à rede que está conquistando o Brasil com produtos
                  artesanais de alta qualidade.
                </p>
                <div className="pt-4">
                  <Button
                    variant="elegant"
                    size="lg"
                    className="text-lg px-8 py-6"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Quero ser um Franqueado
                  </Button>
                </div>
              </div>

              {/* Image - Right */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={storeInterior}
                    alt="Unidade Love for Sweet"
                    className="w-full h-[500px] object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PorQue Section */}
        <section id="por-que" className="relative py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-section text-brand-secondary mb-4">
                  Por que escolher a Love For Sweet?
                </h2>
                <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
                  Descubra os diferenciais que fazem da nossa franquia a escolha
                  ideal para seu negócio de sucesso.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Produtos autorais */}
                <Card className="border-none shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-white cursor-pointer">
                  <CardContent className="p-8">
                    <AutoAwesomeIcon
                      className="mb-6 text-brand-primary"
                      style={{ fontSize: 32 }}
                    />
                    <h3 className="heading-card text-brand-secondary mb-4">
                      Produtos autorais e visualmente marcantes
                    </h3>
                    <p className="text-muted-foreground">
                      Nossa linha exclusiva de produtos foi desenvolvida para se
                      destacar visualmente e criar uma experiência única para
                      seus clientes.
                    </p>
                  </CardContent>
                </Card>

                {/* Card 2: Experiência premium */}
                <Card className="border-none shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-white cursor-pointer">
                  <CardContent className="p-8">
                    <StarIcon
                      className="mb-6 text-brand-primary"
                      style={{ fontSize: 32 }}
                    />
                    <h3 className="heading-card text-brand-secondary mb-4">
                      Experiência premium
                    </h3>
                    <p className="text-muted-foreground">
                      Oferecemos uma experiência diferenciada que encanta
                      clientes e cria fidelização, elevando o padrão do seu
                      negócio.
                    </p>
                  </CardContent>
                </Card>

                {/* Card 3: Padronização fácil */}
                <Card className="border-none shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-white cursor-pointer">
                  <CardContent className="p-8">
                    <CheckCircleIcon
                      className="mb-6 text-brand-primary"
                      style={{ fontSize: 32 }}
                    />
                    <h3 className="heading-card text-brand-secondary mb-4">
                      Padronização fácil
                    </h3>
                    <p className="text-muted-foreground">
                      Processos simplificados e manuais detalhados garantem que
                      você mantenha a qualidade e o padrão da marca com
                      facilidade.
                    </p>
                  </CardContent>
                </Card>

                {/* Card 4: Suporte e treinamento */}
                <Card className="border-none shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-white cursor-pointer">
                  <CardContent className="p-8">
                    <SchoolIcon
                      className="mb-6 text-brand-primary"
                      style={{ fontSize: 32 }}
                    />
                    <h3 className="heading-card text-brand-secondary mb-4">
                      Suporte e treinamento completo
                    </h3>
                    <p className="text-muted-foreground">
                      Treinamento completo para você e sua equipe, além de
                      suporte contínuo para garantir o sucesso da sua unidade.
                    </p>
                  </CardContent>
                </Card>

                {/* Card 5: Processo simples */}
                <Card className="border-none shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300 md:col-span-2 lg:col-span-1 bg-white cursor-pointer">
                  <CardContent className="p-8">
                    <BoltIcon
                      className="mb-6 text-brand-primary"
                      style={{ fontSize: 32 }}
                    />
                    <h3 className="heading-card text-brand-secondary mb-4">
                      Processo simples de operação
                    </h3>
                    <p className="text-muted-foreground">
                      Sistema operacional intuitivo e eficiente, permitindo que
                      você foque no que realmente importa: atender seus
                      clientes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ComoFunciona Section */}
        <section className="relative py-20 bg-gradient-to-br from-rose-50 via-rose-50/30 to-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-section text-brand-secondary mb-4">
                  Como Funciona
                </h2>
                <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
                  Um processo simples e estruturado para você começar seu
                  negócio de sucesso.
                </p>
              </div>

              {/* Steps Timeline */}
              <div className="relative">
                {/* Desktop: Horizontal Timeline */}
                <div className="hidden md:flex items-start justify-between relative">
                  {/* Connecting Line */}
                  <div className="absolute top-8 left-32 right-32 h-0.5 bg-brand-primary/50 -z-0"></div>

                  {/* Step 1: Aplicação */}
                  <div className="flex flex-col items-center flex-1 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center mb-4 shadow-soft">
                      <DescriptionIcon
                        className="text-white"
                        style={{ fontSize: 28 }}
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-semibold text-brand-primary mb-1">
                        01
                      </div>
                      <h3 className="heading-card text-brand-secondary mb-2">
                        Aplicação
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-[200px]">
                        Preencha o formulário e envie sua solicitação de
                        franquia.
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Treinamento */}
                  <div className="flex flex-col items-center flex-1 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center mb-4 shadow-soft">
                      <MenuBookIcon
                        className="text-white"
                        style={{ fontSize: 28 }}
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-semibold text-brand-primary mb-1">
                        02
                      </div>
                      <h3 className="heading-card text-brand-secondary mb-2">
                        Treinamento
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-[200px]">
                        Receba treinamento completo sobre produtos e operação.
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Montagem da Loja */}
                  <div className="flex flex-col items-center flex-1 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center mb-4 shadow-soft">
                      <StoreIcon
                        className="text-white"
                        style={{ fontSize: 28 }}
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-semibold text-brand-primary mb-1">
                        03
                      </div>
                      <h3 className="heading-card text-brand-secondary mb-2">
                        Montagem da Loja
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-[200px]">
                        Montamos sua loja seguindo o padrão visual da marca.
                      </p>
                    </div>
                  </div>

                  {/* Step 4: Primeiras Vendas */}
                  <div className="flex flex-col items-center flex-1 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center mb-4 shadow-soft">
                      <ShoppingCartIcon
                        className="text-white"
                        style={{ fontSize: 28 }}
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-semibold text-brand-primary mb-1">
                        04
                      </div>
                      <h3 className="heading-card text-brand-secondary mb-2">
                        Primeiras Vendas
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-[200px]">
                        Inicie suas operações com suporte completo da
                        franqueadora.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="md:hidden space-y-8">
                  {/* Step 1: Aplicação */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                      <DescriptionIcon
                        className="text-white"
                        style={{ fontSize: 24 }}
                      />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="text-sm font-semibold text-brand-primary mb-1">
                        01
                      </div>
                      <h3 className="heading-card text-brand-secondary mb-2">
                        Aplicação
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Preencha o formulário e envie sua solicitação de
                        franquia.
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Treinamento */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                      <MenuBookIcon
                        className="text-white"
                        style={{ fontSize: 24 }}
                      />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="text-sm font-semibold text-brand-primary mb-1">
                        02
                      </div>
                      <h3 className="heading-card text-brand-secondary mb-2">
                        Treinamento
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Receba treinamento completo sobre produtos e operação.
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Montagem da Loja */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                      <StoreIcon
                        className="text-white"
                        style={{ fontSize: 24 }}
                      />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="text-sm font-semibold text-brand-primary mb-1">
                        03
                      </div>
                      <h3 className="heading-card text-brand-secondary mb-2">
                        Montagem da Loja
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Montamos sua loja seguindo o padrão visual da marca.
                      </p>
                    </div>
                  </div>

                  {/* Step 4: Primeiras Vendas */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                      <ShoppingCartIcon
                        className="text-white"
                        style={{ fontSize: 24 }}
                      />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="text-sm font-semibold text-brand-primary mb-1">
                        04
                      </div>
                      <h3 className="heading-card text-brand-secondary mb-2">
                        Primeiras Vendas
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Inicie suas operações com suporte completo da
                        franqueadora.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Section */}
        <section className="relative py-20 bg-gradient-to-br from-rose-50 to-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-section text-brand-secondary mb-4">
                  Nossos Produtos
                </h2>
                <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
                  Doces artesanais que encantam pela beleza e pelo sabor,
                  criados para despertar paixões.
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Product 1 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={fatiaRedVelvet}
                      alt="Fatia Supreme Red Velvet"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Fatia Supreme Red Velvet
                    </p>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={salgadinhoFrango}
                      alt="Torta de Frango"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Torta de Frango
                    </p>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={fatiaPistache}
                      alt="Fatia Supreme de Pistache"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Fatia Supreme de Pistache
                    </p>
                  </div>
                </div>

                {/* Product 4 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={coxinhaMorango}
                      alt="Coxinha de Morango"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Coxinha de Morango
                    </p>
                  </div>
                </div>

                {/* Product 5 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={dulceCoffee}
                      alt="Dulce Coffee"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Dulce Coffee
                    </p>
                  </div>
                </div>

                {/* Product 6 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={boloNinhoNutella}
                      alt="Bolo de Pote Ninho com Nutella"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Bolo de Pote Ninho com Nutella
                    </p>
                  </div>
                </div>

                {/* Product 7 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={tortaPinkLove}
                      alt="Torta Pink Love"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Torta Pink Love
                    </p>
                  </div>
                </div>

                {/* Product 8 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={tortaMoussePistache}
                      alt="Torta Mousse Pistache"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Torta Mousse Pistache
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <PressSection />

        {/* Depoimentos Section */}
        <section className="relative py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-section text-brand-secondary mb-4">
                  O que pessoas dizem
                </h2>
                <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
                  Histórias reais de sucesso de quem visitou a Love For Sweet.
                </p>
              </div>

              <Carousel
                opts={{
                  loop: true,
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-white rounded-2xl p-8 shadow-soft">
                        <div className="flex items-start gap-4 mb-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback className="bg-brand-primary text-white text-lg">
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold text-brand-secondary text-lg">
                              {testimonial.name}
                            </h3>
                            <div className="flex gap-1 mt-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Download Apresentação Section */}
        <section className="relative py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-rose-50/30 to-stone-50 border-0 shadow-elegant rounded-2xl">
                <div className="relative p-12 md:p-16">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto bg-brand-primary rounded-full flex items-center justify-center mb-6 shadow-soft">
                      <DownloadIcon
                        className="text-white"
                        style={{ fontSize: 40 }}
                      />
                    </div>
                    <h2 className="heading-section text-brand-secondary mb-4">
                      Apresentação de Franquia
                    </h2>
                    <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
                      Baixe nossa apresentação completa e conheça todos os
                      detalhes sobre a oportunidade de se tornar um franqueado
                      Love For Sweet.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <a href={presentationPdf} download="Apresentacao_Love_For_Sweet.pdf" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="elegant"
                        size="lg"
                        className="text-lg px-8 py-6"
                      >
                        <DownloadIcon className="mr-2" style={{ fontSize: 20 }} />
                        Baixar Apresentação
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-gradient-to-br from-rose-50 via-rose-50/30 to-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-section text-brand-secondary mb-4">
                  Perguntas Frequentes
                </h2>
                <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
                  Tire suas dúvidas sobre a franquia Love For Sweet.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-white rounded-lg px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left text-brand-secondary hover:no-underline text-xl font-semibold">
                    Qual o investimento inicial necessário?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light font-sans">
                    O investimento inicial varia conforme o modelo de loja e
                    localização. Entre em contato conosco preenchendo o formulário no topo da página para receber uma
                    proposta personalizada com todos os detalhes do
                    investimento.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-white rounded-lg px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left text-brand-secondary hover:no-underline text-xl font-semibold">
                    Preciso ter experiência prévia no ramo alimentício?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light font-sans">
                    Não é necessário ter experiência prévia. Oferecemos
                    treinamento completo que cobre desde a produção dos produtos
                    até a gestão da loja, garantindo que você esteja preparado
                    para operar com sucesso.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-white rounded-lg px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left text-brand-secondary hover:no-underline text-xl font-semibold">
                    Quanto tempo leva para abrir uma unidade?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light font-sans">
                    Após a aprovação da aplicação, o processo completo de
                    treinamento, montagem da loja e início das operações leva em
                    média de 60 a 90 dias, dependendo da localização e
                    adequações necessárias.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-white rounded-lg px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left text-brand-secondary hover:no-underline text-xl font-semibold">
                    Qual o suporte oferecido pela franqueadora?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light font-sans">
                    Oferecemos suporte completo incluindo treinamento inicial,
                    suporte operacional contínuo, suporte de marketing, assistência na prospecção do ponto físico, projeto arquitetônico padronizado
                    na montagem da loja e acompanhamento regular
                    para garantir o sucesso da sua unidade.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-white rounded-lg px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left text-brand-secondary hover:no-underline text-xl font-semibold">
                    Posso escolher a localização da minha loja?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light font-sans">
                    Sim, você pode sugerir localizações. Nossa equipe fará uma
                    análise de viabilidade considerando fatores como fluxo de
                    pessoas, concorrência e perfil do público-alvo para garantir
                    o melhor local para sua unidade.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="bg-white rounded-lg px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left text-brand-secondary hover:no-underline text-xl font-semibold">
                    Qual a margem de lucro média?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light font-sans">
                    A margem de lucro média varia conforme o mix de produtos e
                    volume de vendas, mas nossos franqueados alcançam margens
                    atrativas que garantem um retorno sobre o investimento
                    consistente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="bg-white rounded-lg px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left text-brand-secondary hover:no-underline text-xl font-semibold">
                    Existe taxa de franquia e royalties?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light font-sans">
                    Sim, há uma taxa de franquia inicial que é paga somente uma vez. Parte dos royalties são reinvestidos em melhorias contínuas e desenvolvimento de novos produtos.
                    Esses valores são reinvestidos em melhorias contínuas da
                    marca, desenvolvimento de novos produtos, marketing nacional
                    e suporte aos franqueados.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-8"
                  className="bg-white rounded-lg px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left text-brand-secondary hover:no-underline text-xl font-semibold">
                    Posso abrir mais de uma unidade?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light font-sans">
                    Sim! Franqueados que demonstram sucesso e comprometimento
                    podem expandir abrindo unidades adicionais, com condições
                    especiais para multi-unidades.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="relative py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden bg-gradient-primary border-0 shadow-elegant rounded-2xl">
                <div className="relative p-12 md:p-16 text-center text-white">
                  <div className="mb-8">
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6 border-2 border-white/30">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif mb-4">
                      Quero ser um Franqueado
                    </h3>
                    <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed max-w-2xl mx-auto font-sans">
                      Junte-se à rede que está conquistando o Brasil com
                      produtos artesanais de alta qualidade e uma marca
                      reconhecida.
                    </p>
                  </div>

                  <Button
                    variant="hero"
                    size="lg"
                    className="text-base font-semibold px-8 py-6"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Quero ser um Franqueado
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div >
  );
};

export default Franchise;
