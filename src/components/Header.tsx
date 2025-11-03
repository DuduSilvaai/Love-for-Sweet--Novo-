import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isIndexPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para navegar para seção, seja na mesma página ou após navegar para index
  const handleSectionClick = (
    sectionId: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (isIndexPage) {
      // Se já está na index, apenas rola para a seção
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (!el) return;
      const headerOffset =
        (document.querySelector("header") as HTMLElement)?.offsetHeight || 0;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      // @ts-ignore
      const lenis = window.lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(top);
      } else {
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  // Função para navegar para index com seção quando estiver em outra página
  const handleNavigateToSection = (
    sectionId: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    navigate("/");
    // Aguarda a página carregar e depois rola para a seção
    setTimeout(() => {
      const scrollToSection = () => {
        const el = document.getElementById(sectionId);
        if (!el) {
          // Tenta novamente após um pequeno delay se o elemento ainda não existir
          setTimeout(scrollToSection, 50);
          return;
        }
        const headerOffset =
          (document.querySelector("header") as HTMLElement)?.offsetHeight || 0;
        const top =
          el.getBoundingClientRect().top + window.scrollY - headerOffset;
        // @ts-ignore
        const lenis = window.lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(top);
        } else {
          window.scrollTo({ top, behavior: "smooth" });
        }
      };
      scrollToSection();
    }, 150);
  };

  // Efeito para rolar para seção após navegar da gallery para index
  useEffect(() => {
    if (isIndexPage) {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (!el) return;
          const headerOffset =
            (document.querySelector("header") as HTMLElement)?.offsetHeight ||
            0;
          const top =
            el.getBoundingClientRect().top + window.scrollY - headerOffset;
          // @ts-ignore
          const lenis = window.lenis;
          if (lenis && typeof lenis.scrollTo === "function") {
            lenis.scrollTo(top);
          } else {
            window.scrollTo({ top, behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [isIndexPage]);

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
                className="h-[40px] transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <img
                src="./src/assets/logo-white.png"
                alt="Love for Sweet"
                className="h-[40px] transition-transform duration-300 hover:scale-105"
              />
            )}
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {isIndexPage ? (
            <>
              <a
                href="#sobre"
                onClick={(e) => handleSectionClick("sobre", e)}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white "
                }`}
              >
                Sobre
              </a>
              <Link
                to="/galeria"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white "
                }`}
              >
                Cardápio
              </Link>
              <a
                href="#unidades"
                onClick={(e) => handleSectionClick("unidades", e)}
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
                onClick={(e) => handleSectionClick("franquia", e)}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Franquia
              </a>
            </>
          ) : (
            <>
              <a
                href="/#sobre"
                onClick={(e) => handleNavigateToSection("sobre", e)}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white "
                }`}
              >
                Sobre
              </a>
              <Link
                to="/galeria"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white "
                }`}
              >
                Cardápio
              </Link>
              <a
                href="/#unidades"
                onClick={(e) => handleNavigateToSection("unidades", e)}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Unidades
              </a>
              <a
                href="/#franquia"
                onClick={(e) => handleNavigateToSection("franquia", e)}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Franquia
              </a>
            </>
          )}
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
          {isIndexPage ? (
            <a
              href="#unidades"
              onClick={(e) => handleSectionClick("unidades", e)}
            >
              Visite uma Loja
            </a>
          ) : (
            <a
              href="/#unidades"
              onClick={(e) => handleNavigateToSection("unidades", e)}
            >
              Visite uma Loja
            </a>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
