import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gazetaImage from "@/assets/Press/gazeta-image.png";
import diarioBrasiliaImage from "@/assets/Press/diario-brasilia-image.png";
import diarioBrasiliaPngImage from "@/assets/Press/diariodebrasilia.png";
import jornalBelemImage from "@/assets/Press/jornal-belem-image.png";
import estadaoImage from "@/assets/Press/estadao1.jpeg";
import pegnImage from "@/assets/Press/estadao2.webp";
import portalIdeiasImage from "@/assets/Press/portalideias.jpg";
import redeFoodServiceImage from "@/assets/Press/redefoodservice.jpg";

const PressSection = () => {
  const articles = [
    {
      id: 1,
      image: gazetaImage,
      headline:
        "Franquia mais instagramável do Brasil inaugura 4ª loja no Outlet Catarina em SãoRoque, interior de São Paulo",
      description:
        "Com faturamento de R$2 milhões ao ano, marca se destaca com modelo de negócio 6 em 1 confeitaria, boulangerie, salgaderia, sorveteria, chocolateria e cafeteria",
      author: "Fábio Malvezzi",
      publication: "Gazeta da Semana",
      date: "11 de Outubro, 2024",
      link: "https://gazetadasemana.com.br/noticia/195221/franquia-mais-instagramavel-do-brasil-inaugura-4--loja-no-outlet-catarina-em-sao-roque-interior-de-sao-paulo",
    },
    {
      id: 2,
      image: diarioBrasiliaImage,
      headline:
        "Após diagnóstico de autismo de um dos filhos e nascimento prematuro do outro, mãe cria franquia mais instagramável do Brasil",
      description:
        "A união entre o amor de uma mãe e a paixão por doces renderam uma história cor de rosa e de muita luta à empreendedora Ariele Barreto. Ler mais",
      author: "Marcos Ribeiro ",
      publication: "Diário de Brasília",
      date: "24 de Outubro, 2024",
      link: "https://www.diariodebrasilia.net.br/noticia/7167/brasilia/noticias/apos-diagnostico-de-autismo-de-um-dos-filhos-e-nascimento-prematuro-do-outro-mae-cria-franquia-mais-instagramavel-do-brasil.html",
    },
    {
      id: 3,
      image: jornalBelemImage,
      headline:
        "Franquia mais instagramável do Brasil inaugura 4ª loja no Outlet Catarina em SãoRoque, interior de São Paulo",
      description:
        "Ingredientes selecionados, técnicas artesanais e paixão pela confeitaria: conheça os pilares que fazem da Love for Sweet uma marca de sucesso.",
      author: "Fábio Malvezzi",
      publication: "Jornal do Belém",
      date: "11 de Outubro, 2024",
      link: "https://jornaldobelem.com.br/noticia/51828/franquia-mais-instagramavel-do-brasil-inaugura-4-loja-no-outlet-catarina-em-sao-roque-interior-de-sao-paulo",
    },
    {
      id: 4,
      image: estadaoImage,
      headline:
        "Love for Sweet: cafeteria de São Paulo tem autismo, é instagramável e pretende abrir 20 lojas",
      description:
        "Com faturamento de R$2 milhões ao ano e marca se destacando com modelo de negócio 6 em 1, a Love for Sweet conquista o Brasil.",
      author: "Mirella Joels",
      publication: "Estadão",
      date: "08 de Março, 2024",
      link: "https://www.estadao.com.br/amp/pme/love-for-sweet-cafeteria-sao-paulo-autismo-instagramavel-pretende-abrir-20-lojas-2024-nprei/",
    },
    {
      id: 5,
      image: pegnImage,
      headline:
        "Empreendedora fatura R$ 1,8 milhão com cafeteria rosa inspirada em Paris",
      description:
        "Love for Sweet nasceu depois que a empreendedora Ariele Barreto deixou a carreira na área de recursos humanos para se dedicar à maternidade e ao empreendedorismo.",
      author: "Cleide Assis",
      publication: "Revista PEGN",
      date: "26 de Novembro, 2023",
      link: "https://revistapegn.globo.com/google/amp/franquias/noticia/2023/11/empreendedora-fatura-r-18-milhao-com-cafeteria-rosa-inspirada-em-paris.ghtml",
    },
    {
      id: 6,
      image: portalIdeiasImage,
      headline:
        "Inspirada nas charmosas cafeterias de Paris, franquia Love for Sweet surgiu como distração e se tornou negócio milionário",
      description:
        "Ambiente aconchegante e todo cor de rosa marcam o visual das lojas da Love for Sweet, que hoje faturam R$ 2 milhões ao ano e busca por novos investidores na marca instagramável.",
      author: "Portal Ideiascast",
      publication: "Portal Ideiascast",
      date: "02 de Dezembro, 2024",
      link: "https://portalideiascast.com.br/2024/12/02/inspirada-nas-charmosas-cafeterias-de-paris-franquia-love-for-sweet-surgiu-como-distracao-e-se-tornou-negocio-milionario/?amp=1",
    },
    {
      id: 7,
      image: redeFoodServiceImage,
      headline:
        "Love for Sweet: conheça uma das redes de franquias mais inovadoras e instagramáveis do Brasil que já fatura R$ 2 milhões ao ano",
      description:
        "A Love for Sweet é fruto do amor de uma mãe e a paixão por doces está sendo trabalhada para virar a maior rede de 'pink houses' do país.",
      author: "Tabata Martins",
      publication: "Rede Food Service",
      date: "09 de Janeiro, 2025",
      link: "https://redefoodservice.com.br/2025/01/love-for-sweet-conheca-uma-das-redes-de-franquias-mais-inovadoras-e-instagramaveis-do-brasil-que-ja-fatura-r-2-milhoes-ao-ano/",
    },
    {
      id: 8,
      image: diarioBrasiliaPngImage,
      headline:
        "Após diagnóstico de autismo de um dos filhos e nascimento prematuro do outro, mãe cria franquia mais instagramável do Brasil",
      description:
        "A união entre o amor de uma mãe e a paixão por doces renderam uma história cor de rosa e de muita luta à empreendedora Ariele Barreto.",
      author: "Marcos Ribeiro",
      publication: "Diário de Brasília",
      date: "24 de Outubro, 2024",
      link: "https://www.diariodebrasilia.net.br/noticia/7167/brasilia/noticias/apos-diagnostico-de-autismo-de-um-dos-filhos-e-nascimento-prematuro-do-outro-mae-cria-franquia-mais-instagramavel-do-brasil.html",
    },
  ];

  return (
    <section id="imprensa" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="heading-section text-brand-secondary mb-4">
            O Que Dizem Sobre Nós
          </h2>
          <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
            Reconhecimento e autoridade conquistados através da excelência em
            cada doce que criamos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {articles.map((article) => (
                <CarouselItem
                  key={article.id}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  {article.link ? (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full no-underline text-inherit hover:text-inherit focus:text-inherit active:text-inherit visited:text-inherit outline-none focus:outline-none hover:no-underline active:no-underline visited:no-underline"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Card className="h-full border-0 shadow-elegant hover:shadow-primary transition-all duration-300 overflow-hidden group cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.headline}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="heading-card mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {article.headline}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                            {article.description}
                          </p>
                        </CardContent>
                        <CardFooter className="px-6 pb-6 pt-0 flex flex-col items-start gap-2">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-medium">
                              {article.author}
                            </span>
                            <span>•</span>
                            <span>{article.publication}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {article.date}
                          </span>
                        </CardFooter>
                      </Card>
                    </a>
                  ) : (
                    <Card className="h-full border-0 shadow-elegant hover:shadow-primary transition-all duration-300 overflow-hidden group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.headline}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="heading-card mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {article.headline}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                          {article.description}
                        </p>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0 flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="font-medium">{article.author}</span>
                          <span>•</span>
                          <span>{article.publication}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {article.date}
                        </span>
                      </CardFooter>
                    </Card>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12 bg-white/90 backdrop-blur-sm border-border hover:bg-white shadow-elegant" />
            <CarouselNext className="right-2 md:-right-12 bg-white/90 backdrop-blur-sm border-border hover:bg-white shadow-elegant" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PressSection;
