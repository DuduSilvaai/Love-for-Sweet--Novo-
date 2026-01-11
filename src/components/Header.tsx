import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Import logos corretamente para funcionar em produção
import logoPink from "@/assets/logo-pink.png";
import logoWhite from "@/assets/logo-white.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isIndexPage = location.pathname === "/";
  const isFranchisePage = location.pathname === "/franqueados";

  // Link para Sou Franqueado (pode ser alterado conforme necessário)
  const areaMembrosLink = "#"; // Substitua pelo link desejado

  useEffect(() => {
    // Na página de franqueados, sempre manter o estado pós-scroll
    if (isFranchisePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFranchisePage]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-sm border-b border-border"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="">
          <Link to="/">
            {isScrolled ? (
              <img
                src={logoPink}
                alt="Love for Sweet"
                className="h-[40px] transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <img
                src={logoWhite}
                alt="Love for Sweet"
                className="h-[40px] transition-transform duration-300 hover:scale-105"
              />
            )}
          </Link>
        </div>

        <nav className="hidden nav:flex items-center space-x-6 lg:space-x-8 text-sm fontlg:text-base">
          {isIndexPage ? (
            <>
              <a
                href="#unidades"
                onClick={(e) => handleSectionClick("unidades", e)}
                className={`transition-colors duration-300 ${isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                Unidades
              </a>

              <a
                href="#unidades"
                onClick={(e) => handleSectionClick("unidades", e)}
                className={`transition-colors duration-300 ${isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                Visite uma Loja
              </a>

              <Link
                to="/galeria"
                className={`transition-colors duration-300 ${isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white "
                  }`}
              >
                Cardápio
              </Link>
              <a
                href="#sobre"
                onClick={(e) => handleSectionClick("sobre", e)}
                className={`transition-colors duration-300 ${isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white "
                  }`}
              >
                Sobre
              </a>
              <Link
                to="/franqueados"
                className={`transition-colors duration-300 ${isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                Ser Franqueado
              </Link>
            </>
          ) : (
            <>
              <a
                href="/#unidades"
                onClick={(e) => handleNavigateToSection("unidades", e)}
                className={`transition-colors duration-300 ${isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                Unidades
              </a>
              <a
                href="/#unidades"
                onClick={(e) => handleNavigateToSection("unidades", e)}
                className={`transition-colors duration-300 ${isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                Visite uma Loja
              </a>
              <Link
                to="/galeria"
                className={`transition-colors duration-300 ${isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white "
                  }`}
              >
                Cardápio
              </Link>
              <a
                href="/#sobre"
                onClick={(e) => handleNavigateToSection("sobre", e)}
                className={`transition-colors duration-300 ${isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white "
                  }`}
              >
                Sobre
              </a>
              <Link
                to="/franqueados"
                className={`transition-colors duration-300 ${isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                Ser Franqueado
              </Link>
            </>
          )}
        </nav>

        <div className="hidden nav:block">
          <Button
            variant={isScrolled ? "elegant" : "outline"}
            size="sm"
            className={
              !isScrolled
                ? "text-primary border-none hover:glow-elegant hover:text-primary transition duration-300"
                : "text-white font-light border-none"
            }
            onClick={() => window.open(areaMembrosLink, "_blank")}
          >
            Sou Franqueado
          </Button>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="flex nav:hidden"
              aria-label="Menu"
            >
              <Menu
                className={`!h-8 !w-8 transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"
                  }`}
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              {isIndexPage ? (
                <>
                  <SheetClose asChild>
                    <a
                      href="#unidades"
                      onClick={(e) => {
                        handleSectionClick("unidades", e);
                        setIsSheetOpen(false);
                      }}
                      className="block py-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Unidades
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#unidades"
                      onClick={(e) => {
                        handleSectionClick("unidades", e);
                        setIsSheetOpen(false);
                      }}
                      className="block py-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Visite uma Loja
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/galeria"
                      onClick={() => setIsSheetOpen(false)}
                      className="block py-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Cardápio
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#sobre"
                      onClick={(e) => {
                        handleSectionClick("sobre", e);
                        setIsSheetOpen(false);
                      }}
                      className="block py-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Sobre
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/franqueados"
                      onClick={() => setIsSheetOpen(false)}
                      className="block py-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Ser Franqueado
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      variant="elegant"
                      className="w-full mt-4"
                      onClick={() => {
                        window.open(areaMembrosLink, "_blank");
                        setIsSheetOpen(false);
                      }}
                    >
                      Sou Franqueado
                    </Button>
                  </SheetClose>
                </>
              ) : (
                <>
                  <SheetClose asChild>
                    <a
                      href="/#unidades"
                      onClick={(e) => {
                        handleNavigateToSection("unidades", e);
                        setIsSheetOpen(false);
                      }}
                      className="block py-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Unidades
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="/#unidades"
                      onClick={(e) => {
                        handleNavigateToSection("unidades", e);
                        setIsSheetOpen(false);
                      }}
                      className="block py-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Visite uma Loja
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/galeria"
                      onClick={() => setIsSheetOpen(false)}
                      className="block py-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Cardápio
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="/#sobre"
                      onClick={(e) => {
                        handleNavigateToSection("sobre", e);
                        setIsSheetOpen(false);
                      }}
                      className="block py-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Sobre
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/franqueados"
                      onClick={() => setIsSheetOpen(false)}
                      className="block py-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Ser Franqueado
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      variant="elegant"
                      className="w-full mt-4"
                      onClick={() => {
                        window.open(areaMembrosLink, "_blank");
                        setIsSheetOpen(false);
                      }}
                    >
                      Sou Franqueado
                    </Button>
                  </SheetClose>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
