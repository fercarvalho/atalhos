import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Troque a imagem desenhada por sua imagem */}
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <h1 className="text-xl font-bold text-foreground">
              <span className="text-ios-blue">Galeria de</span>
              <br />
              <span className="text-youtube-red">Atalhos</span>
            </h1>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="search"
                placeholder="Buscar"
                className="pl-10 bg-muted border-0 focus:ring-2 focus:ring-ios-blue/20"
              />
            </div>
          </div>
          
          <div className="w-24"></div> {/* Spacer for balance */}
        </div>
      </div>
    </header>
  );
};

export default Header;