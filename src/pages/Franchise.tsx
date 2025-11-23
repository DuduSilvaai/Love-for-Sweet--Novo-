import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import storeInterior from "@/assets/store-interior.jpg";
// Importar imagens de produtos principais
import fatiaRedVelvet from "@/assets/products/gallery/bolos-optimized/fatia-supreme-red-velvet-image.webp";
import fatiaAbacaxiCoco from "@/assets/products/gallery/bolos-optimized/fatia-supreme-abacaxi-com-coco-image.webp";
import fatiaPistache from "@/assets/products/gallery/bolos-optimized/fatia-supreme-de-pistache-image.webp";
import fatiaChocolatudo from "@/assets/products/gallery/bolos-optimized/fatia-supreme-chocolatudo-image.webp";
import boloRedVelvet from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-red-velvet-image.webp";
import boloNinhoNutella from "@/assets/products/gallery/bolos-optimized/bolo-de-pote-ninho-com-nutella-image.webp";
import tortaPinkLove from "@/assets/products/gallery/tortas-optimized/torta-pink-love.webp";
import tortaMoussePistache from "@/assets/products/gallery/tortas-optimized/torta-mousse-pistache.webp";
import croissantMorangoNutella from "@/assets/products/gallery/doces-momentos-optimized/croissant-morango-nutella.webp";
import eclairPistache from "@/assets/products/gallery/doces-momentos-optimized/eclair-pistache.webp";
import macarons from "@/assets/products/gallery/doces-momentos-optimized/macarons.webp";
import topCakeFerrero from "@/assets/products/gallery/doces-momentos-optimized/top-cake-ferrero-rocher.webp";

const Franchise = () => {
  return (
    <div className="min-h-screen">
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
                  >
                    Seja um Franqueado
                  </Button>
                </div>
              </div>

              {/* Image - Right */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={storeInterior}
                    alt="Unidade Love for Sweet"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PorQue Section */}
        <section className="relative py-20 bg-background">
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
                      src={fatiaAbacaxiCoco}
                      alt="Fatia Supreme Abacaxi com Coco"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Fatia Supreme Abacaxi com Coco
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
                      src={fatiaChocolatudo}
                      alt="Fatia Supreme Chocolatudo"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Fatia Supreme Chocolatudo
                    </p>
                  </div>
                </div>

                {/* Product 5 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={boloRedVelvet}
                      alt="Bolo de Pote Red Velvet"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">
                      Bolo de Pote Red Velvet
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

        {/* Depoimentos Section */}
        <section className="relative py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-section text-brand-secondary mb-4">
                  O que nossos franqueados dizem
                </h2>
                <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
                  Histórias reais de sucesso de quem escolheu a Love For Sweet.
                </p>
              </div>

              <Carousel className="w-full">
                <CarouselContent>
                  {/* Depoimento 1 */}
                  <CarouselItem>
                    <div className="bg-white rounded-2xl p-8 shadow-soft">
                      <div className="flex items-start gap-4 mb-6">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src="" alt="Maria Silva" />
                          <AvatarFallback className="bg-brand-primary text-white text-lg">
                            MS
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-brand-secondary text-lg">
                            Maria Silva
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Franqueada - Barueri, SP
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        "A Love For Sweet transformou minha vida. Em menos de 6
                        meses já estava no lucro. O suporte da franqueadora é
                        excepcional e os produtos são realmente diferenciados.
                        Recomendo de olhos fechados!"
                      </p>
                    </div>
                  </CarouselItem>

                  {/* Depoimento 2 */}
                  <CarouselItem>
                    <div className="bg-white rounded-2xl p-8 shadow-soft">
                      <div className="flex items-start gap-4 mb-6">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src="" alt="João Santos" />
                          <AvatarFallback className="bg-brand-primary text-white text-lg">
                            JS
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-brand-secondary text-lg">
                            João Santos
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Franqueado - Pinheiros, SP
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        "O processo de abertura foi muito simples e o
                        treinamento completo. A marca tem um apelo visual
                        incrível que atrai clientes naturalmente. Estou muito
                        satisfeito com minha escolha!"
                      </p>
                    </div>
                  </CarouselItem>

                  {/* Depoimento 3 */}
                  <CarouselItem>
                    <div className="bg-white rounded-2xl p-8 shadow-soft">
                      <div className="flex items-start gap-4 mb-6">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src="" alt="Ana Costa" />
                          <AvatarFallback className="bg-brand-primary text-white text-lg">
                            AC
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-brand-secondary text-lg">
                            Ana Costa
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Franqueada - Vila Madalena, SP
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        "A margem de lucro é excelente e o ticket médio
                        surpreende. Os clientes adoram os produtos e sempre
                        voltam. É um negócio que realmente funciona!"
                      </p>
                    </div>
                  </CarouselItem>

                  {/* Depoimento 4 */}
                  <CarouselItem>
                    <div className="bg-white rounded-2xl p-8 shadow-soft">
                      <div className="flex items-start gap-4 mb-6">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src="" alt="Carlos Oliveira" />
                          <AvatarFallback className="bg-brand-primary text-white text-lg">
                            CO
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-brand-secondary text-lg">
                            Carlos Oliveira
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Franqueado - Moema, SP
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        "A padronização é muito fácil de seguir e o suporte
                        contínuo faz toda a diferença. Em um ano já estou
                        pensando em abrir uma segunda unidade!"
                      </p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
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
                    localização. Entre em contato conosco para receber uma
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
                    suporte operacional contínuo, suporte de marketing,
                    assistência na montagem da loja e acompanhamento regular
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
                    Sim, há uma taxa de franquia inicial e royalties mensais.
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
                      Torne-se um Franqueado
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
                    onClick={() =>
                      window.open("https://wa.me/11965048285", "_blank")
                    }
                  >
                    Quero ser Franqueado
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Franchise;
