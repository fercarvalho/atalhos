import { Search, Sun, Moon, Monitor } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";
import { useThemeContext } from "@/contexts/ThemeContext";
import { useSearchContext } from "@/contexts/SearchContext";
import { useState, useCallback } from "react";

const Header = () => {
  const { theme, setTheme, currentTheme } = useThemeContext();
  const { searchTerm, setSearchTerm } = useSearchContext();
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Debounce a pesquisa
    const timeoutId = setTimeout(() => {
      setSearchTerm(value);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [setSearchTerm]);

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  const getThemeIcon = () => {
    if (theme === 'system') {
      return <Monitor className="w-4 h-4" />;
    } else if (theme === 'light') {
      return <Sun className="w-4 h-4" />;
    } else {
      return <Moon className="w-4 h-4" />;
    }
  };

  return (
    <header className="bg-card border-b border-border shadow-sm h-[20rem] md:h-auto flex items-center">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center justify-center md:justify-start space-x-3 md:ml-12 w-full md:w-auto">
            {/* Troque a imagem desenhada por sua imagem */}
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <h1 className="text-xl font-bold text-foreground text-center md:text-left">
              <span className="text-ios-blue">Galeria de Atalhos</span>
              <br />
              <span className="text-youtube-red">Por Fernando Carvalho</span>
            </h1>
          </div>
          
          {/* Barra de pesquisa fixa e alinhada com botão de tema */}
          <div className="fixed left-1/2 transform -translate-x-1/2 z-50 top-[1.5rem] md:top-[2.5rem]">
            <div className="flex items-center gap-2">
              <div className="relative w-[60vw] max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Buscar atalhos..."
                  value={inputValue}
                  onChange={handleSearchChange}
                  className="pl-10 bg-muted/50 backdrop-blur-sm border-0 focus:ring-2 focus:ring-ios-blue/20 w-full transition-colors hover:bg-muted/60"
                />
              </div>
              
              {/* Botão de alternância de tema */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2 hover:bg-muted rounded-lg transition-colors bg-muted/50 backdrop-blur-sm"
                title={`Tema atual: ${theme === 'system' ? 'Sistema' : theme === 'light' ? 'Claro' : 'Escuro'}`}
              >
                {getThemeIcon()}
              </Button>
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
    </header>
  );
};

export default Header;