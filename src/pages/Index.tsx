import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickActionsSection from "@/components/QuickActionsSection";
import CarouselSection from "@/components/CarouselSection";
import UnitsSection from "@/components/UnitsSection";
import FranchiseSection from "@/components/FranchiseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <QuickActionsSection />
        <CarouselSection />
        <UnitsSection />
        <FranchiseSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
