import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm h-32 md:h-auto">
      <div className="container mx-auto px-4 py-4 h-full flex flex-col justify-start">
        <div className="flex items-start space-x-3 ml-12 pt-2">
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
        
        {/* Barra de pesquisa fixa e alinhada */}
        <div className="fixed left-1/2 transform -translate-x-1/2 w-[60vw] max-w-md z-50 top-[1.5rem] md:top-[2.5rem]">
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
    </header>
  );
};

export default Header;