import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="">
          <Link to="/">
            {isScrolled ? (
              <img
                src="./src/assets/logo-pink.png"
                alt="Love for Sweet"
                className="h-[40px]"
              />
            ) : (
              <img
                src="./src/assets/logo-white.png"
                alt="Love for Sweet"
                className="h-[40px]"
              />
            )}
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#sobre"
            className={`transition-colors duration-300 ${
              isScrolled
                ? "text-muted-foreground hover:text-primary"
                : "text-white/80 hover:text-white "
            }`}
          >
            Sobre
          </a>
          <a
            href="#unidades"
            className={`transition-colors duration-300 ${
              isScrolled
                ? "text-muted-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            Unidades
          </a>
          <a
            href="#franquia"
            className={`transition-colors duration-300 ${
              isScrolled
                ? "text-muted-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            Franquia
          </a>
        </nav>

        <Button
          variant={isScrolled ? "elegant" : "outline"}
          size="sm"
          className={
            !isScrolled
              ? "text-primary border-none hover:glow-elegant hover:text-primary transition duration-300"
              : "text-white font-light border-none"
          }
        >
          Visite uma Loja
        </Button>
      </div>
    </header>
  );
};

export default Header;
