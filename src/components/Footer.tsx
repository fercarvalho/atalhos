import { Instagram, Youtube } from "lucide-react";
import TikTokIcon from "./TikTokIcon";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Galeria de Atalhos</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Por Fernando Carvalho
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <nav className="flex flex-col space-y-2">
              <a 
                href="/sobre" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Sobre Mim
              </a>
              <a 
                href="/termos" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Termos de Uso
              </a>
              <a 
                href="/midia-kit" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Mídia Kit
              </a>
            </nav>
          </div>

          {/* SSL e Redes Sociais */}
          <div className="space-y-4">
            {/* SSL Certificate */}
            <div className="flex justify-center md:justify-end">
              <a
                href="https://transparencyreport.google.com/safe-browsing/search?url=fercarvalho.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-green-600 text-white px-3 py-2 rounded-lg text-center text-xs font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold">SITE SEGURO</div>
                      <div className="text-xs opacity-90">SSL CERTIFICADO</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Redes Sociais */}
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://www.instagram.com/ai.fercarvalho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@ai.fercarvalho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.youtube.com/@ai.fercarvalho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            2025 © Todos os direitos registrados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
