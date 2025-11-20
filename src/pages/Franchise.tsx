import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import storeInterior from "@/assets/store-interior.jpg";

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
                <h1 className="heading-hero text-brand-secondary leading-none">
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
                    Quero ser franqueado
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
      </main>
      <Footer />
    </div>
  );
};

export default Franchise;
