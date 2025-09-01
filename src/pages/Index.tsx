import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FeatureCard from "@/components/FeatureCard";
import ShortcutCard from "@/components/ShortcutCard";
import TutorialCard from "@/components/TutorialCard";
import { MessageCircle, Layers, Smartphone, Watch, Instagram, Mic2 } from "lucide-react";

const Index = () => {
  const featuredShortcuts = [
    {
      title: "Atalhos para IAs no WhatsApp",
      background: "bg-gradient-whatsapp",
      icon: <MessageCircle className="w-8 h-8 text-white" />
    },
    {
      title: "Atalhos para WhatsApp",
      background: "bg-gradient-whatsapp",
      icon: <MessageCircle className="w-8 h-8 text-white" />
    }
  ];

  const popularShortcuts = [
    {
      title: "Adicionar Banco",
      icon: "🏦",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "Adicionar Cartão", 
      icon: "💳",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "Adicionar Categoria",
      icon: "🏷️",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "Adicionar Transação",
      icon: "🧾",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "Adicionar Transação do Cartão AUTOMÁTICO",
      icon: "📩",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    }
  ];

  const tutorials = [
    {
      title: "Como automatizar suas transações do cartão",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=240&fit=crop&crop=center"
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
            {/* Banner Section */}
            <div className="mb-8">
              <img
                src="/banner.png"
                alt="Banner IA"
                className="w-full max-h-80 object-cover rounded-xl transition-transform duration-200 hover:scale-105 shadow scale-90"
                style={{ cursor: "pointer" }}
              />
            </div>
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
            <h2 className="text-2xl font-bold text-foreground mb-6">ESPECIAL Poupa.ai</h2>
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
            <h2 className="text-2xl font-bold text-foreground mb-6">Tutoriais</h2>
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
