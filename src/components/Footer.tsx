import { Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

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
                href="https://fercarvalho.com/" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Sobre Mim
              </a>
              <a 
                href="https://fercarvalho.com/politicadeprivacidade" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Termos de Uso
              </a>
              {/*<a 
                href="/midia-kit" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >*/}
                <span className="text-muted-foreground text-sm">
                  Mídia Kit
                </span>
              {/*</a>*/}
            </nav>
          </div>

          {/* SSL e Redes Sociais */}
          <div className="space-y-4">
            {/* SSL Certificate e Redes Sociais Alinhados */}
            <div className="flex flex-col items-center md:items-end gap-4">
              {/* Container com largura fixa para alinhamento */}
              <div className="w-fit">
                {/* SSL Certificate */}
                <a
                  href="https://transparencyreport.google.com/safe-browsing/search?url=fercarvalho.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-4"
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

                {/* Redes Sociais - Grid de 3 colunas para alinhamento perfeito */}
                <div className="grid grid-cols-3 gap-0 w-full">
                  <div className="flex justify-start">
                    <a
                      href="https://www.instagram.com/ai.fercarvalho"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-pink-500 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="https://www.tiktok.com/@ai.fercarvalho"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-black transition-colors"
                      aria-label="TikTok"
                    >
                      <SiTiktok className="w-6 h-6" />
                    </a>
                  </div>
                  <div className="flex justify-end">
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
            </div>
          </div>
        </div>

        {/* Informações Pessoais e Legais */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm font-medium">
              41.748.511 FERNANDO CARVALHO GOMES DOS SANTOS
            </p>
            <p className="text-muted-foreground text-sm">
              Rua das Humaitá, nº 635 - Londrina, PR
            </p>
            <p className="text-muted-foreground text-sm">
              CEP: 86060-060
            </p>
            <p className="text-muted-foreground text-sm">
              CNPJ: 41.748.511/0001-73
            </p>
          </div>
        </div>

        {/* Copyright e Disclaimer */}
        <div className="mt-6 pt-6 border-t border-border space-y-3">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Viver da PJ ME. Todos os direitos reservados. CNPJ: 41.748.511/0001-73
          </p>
          <p className="text-center text-muted-foreground text-xs leading-relaxed">
            Este site e os produtos e serviços oferecidos neste site não são associados, afiliados, endossados ou patrocinados pelo Facebook, nem foram revisados, testados ou certificados pelo Facebook.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
