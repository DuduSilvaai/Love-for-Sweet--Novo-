import { Heart, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="">
                <Link to="/">
                  <img
                    src="./src/assets/logo-white.png"
                    alt="Love for Sweet"
                    className="w-[180px]"
                  />
                </Link>
              </div>
              <p className="text-white/80 leading-relaxed font-normal">
                Criamos momentos únicos através de doces artesanais que
                despertam os sentidos e transformam ocasiões simples em memórias
                inesquecíveis.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/loveforsweetoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-input bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/love-for-sweet-317371387/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 border border-input rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-accent-lightish" />
                  <a
                    href="tel:(11)9999-0000"
                    className="text-brand-accent-lightish hover:text-white transition-colors font-light "
                  >
                    (11) 9999-0000
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand-accent-lightish" />
                  <a
                    href="mailto:contato@loveforsweet.com.br"
                    className="text-brand-accent-lightish hover:text-white transition-colors font-light "
                  >
                    contato@loveforsweet.com.br
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-brand-accent-lightish ">
                  <MapPin className="w-5 h-5 text-brand-accent-lightish mt-0.5" />
                  <div>
                    <p className="font-light">Rua Augusta, 1234</p>
                    <p className="font-light">Jardins - São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Menu</h3>
              <div className="space-y-3 text-brand-accent-lightish ">
                <a
                  href="#sobre"
                  className="block hover:text-white transition-colors font-light "
                >
                  Sobre Nós
                </a>
                <a
                  href="#unidades"
                  className="block hover:text-white transition-colors font-light "
                >
                  Nossas Lojas
                </a>
                <a
                  href="#franquia"
                  className="block hover:text-white transition-colors font-light "
                >
                  Seja Franqueado
                </a>
                <a
                  href="#cardapio"
                  className="block hover:text-white transition-colors font-light "
                >
                  Cardápio
                </a>
                <a
                  href="#encomendas"
                  className="block hover:text-white transition-colors font-light "
                >
                  Encomendas
                </a>
              </div>
            </div>

            {/* Newsletter */}
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-white/80 font-light">
              © 2025 Love for Sweet. Todos os direitos reservados. Feito com{" "}
              <Heart className="w-4 h-4 inline-block text-brand-accent-light" />{" "}
              para adoçar sua vida.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
