import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FeatureCard from "@/components/FeatureCard";
import ShortcutCard from "@/components/ShortcutCard";
import TutorialCard from "@/components/TutorialCard";
import { MessageCircle, Layers, Smartphone, Watch, Instagram, Mic2 } from "lucide-react";

const Index = () => {
  const featuredShortcuts = [
    {
      title: "Atalhos para WhatsApp",
      background: "bg-gradient-whatsapp",
      icon: <MessageCircle className="w-8 h-8 text-white" />
    },
    {
      title: "Atalhos Premium", 
      background: "bg-gradient-premium",
      icon: <Layers className="w-8 h-8 text-white" />
    },
    {
      title: "Comece com os Atalhos",
      background: "bg-gradient-to-br from-orange-500 to-red-500",
      icon: <Smartphone className="w-8 h-8 text-white" />
    },
    {
      title: "Compatíveis com o Watch",
      background: "bg-gradient-watch",
      icon: <Watch className="w-8 h-8 text-white" />
    },
    {
      title: "Perfeitos para Social Media",
      background: "bg-gradient-instagram",
      icon: <Instagram className="w-8 h-8 text-white" />
    }
  ];

  const popularShortcuts = [
    {
      title: "Ejetar Água",
      icon: "💧",
      isPremium: true,
      gradient: "bg-gradient-ai"
    },
    {
      title: "Baixar do Instagram", 
      icon: "📸",
      isPremium: true,
      gradient: "bg-gradient-instagram"
    },
    {
      title: "Despertador da Siri",
      icon: "⏰",
      isPremium: true,
      isAI: true,
      gradient: "bg-gradient-siri"
    },
    {
      title: "Tempo para Carregar",
      icon: "🔋",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "Baixar do YouTube",
      icon: "▶️",
      isPremium: true,
      gradient: "bg-gradient-youtube"
    },
    {
      title: "Compartilhar WiFi",
      icon: "📶",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
    }
  ];

  const tutorials = [
    {
      title: "Transforme Suas Manhãs com Automação no iPhone",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "Como adicionar os Atalhos na tela do iPhone", 
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "Como colocar Atalhos no iPhone",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "Como baixar vídeos e fotos do Instagram com a Siri",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=240&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          {/* Destaques Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Destaques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {featuredShortcuts.map((shortcut, index) => (
                <FeatureCard
                  key={index}
                  title={shortcut.title}
                  background={shortcut.background}
                  icon={shortcut.icon}
                />
              ))}
            </div>
          </section>

          {/* Mais populares Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Mais populares</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {popularShortcuts.map((shortcut, index) => (
                <ShortcutCard
                  key={index}
                  title={shortcut.title}
                  icon={shortcut.icon}
                  isPremium={shortcut.isPremium}
                  isAI={shortcut.isAI}
                  gradient={shortcut.gradient}
                />
              ))}
            </div>
          </section>

          {/* Lançamentos Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Lançamentos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tutorials.map((tutorial, index) => (
                <TutorialCard
                  key={index}
                  title={tutorial.title}
                  image={tutorial.image}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
