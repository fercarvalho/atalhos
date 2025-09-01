import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";
import { useEffect, useState } from "react";

const Header = () => {
  const [showFloatingSearch, setShowFloatingSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingSearch(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3 ml-12">
            {/* Troque a imagem desenhada por sua imagem */}
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <h1 className="text-xl font-bold text-foreground">
              <span className="text-ios-blue">Galeria de Atalhos</span>
              <br />
              <span className="text-youtube-red">Por Fernando Carvalho</span>
            </h1>
          </div>
          
          <div className="w-full md:flex-1 md:max-w-md md:mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="search"
                placeholder="Buscar"
                className="pl-10 bg-muted border-0 focus:ring-2 focus:ring-ios-blue/20 w-full"
              />
            </div>
          </div>
          
          {/* Ícones sociais alinhados verticalmente e centralizados no mobile */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <a
              href="https://www.youtube.com/@ai.fercarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-ios-blue font-bold"
            >
              <SiYoutube className="w-5 h-5 text-ios-blue" />
              <span>/@ai.fercarvalho</span>
            </a>
            <a
              href="https://www.tiktok.com/@ai.fercarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-ios-blue font-bold"
            >
              <SiTiktok className="w-5 h-5 text-ios-blue" />
              <span>/@ai.fercarvalho</span>
            </a>
            <a
              href="https://www.instagram.com/ai.fercarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-ios-blue font-bold"
            >
              <SiInstagram className="w-5 h-5 text-ios-blue" />
              <span>/@ai.fercarvalho</span>
            </a>
          </div>
        </div>
      </div>
      {/* Barra de pesquisa flutuante para todas as telas */}
      {showFloatingSearch && (
        <div className="fixed top-[1.5rem] left-1/2 z-50 w-11/12 max-w-sm -translate-x-1/2 scale-90 md:w-[200px] md:scale-100 bg-card rounded-xl shadow-lg px-2 py-2 flex items-center">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="search"
            placeholder="Buscar"
            className="pl-10 bg-muted border-0 focus:ring-2 focus:ring-ios-blue/20 w-full"
            style={{ minWidth: 0 }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;