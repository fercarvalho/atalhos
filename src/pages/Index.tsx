import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FeatureCard from "@/components/FeatureCard";
import ShortcutCard from "@/components/ShortcutCard";
import TutorialCard from "@/components/TutorialCard";
import { MessageCircle, Layers, Smartphone, Watch, Instagram, Mic2, PiggyBank } from "lucide-react";

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
    },
    {
      title: (
        <>
          Automatize suas finanças com o Poupa.ai
          <br />
          10% OFF: FERCARVALHO
        </>
      ),
      background: "bg-[#3662e3]",
      icon: <PiggyBank className="w-8 h-8 text-white" />
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
      title: "Registrando Despesas Recorrentes no Poupa.ai",
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
              <a
                href="https://www.youtube.com/@ai.fercarvalho"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/banner.png"
                  alt="Banner IA"
                  className="w-full max-h-80 object-cover rounded-xl transition-transform duration-200 hover:scale-100 shadow scale-95"
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Destaques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {featuredShortcuts.map((shortcut, index) => {
                // Card 1: scroll para ESPECIAL Poupa.ai
                if (index === 0) {
                  return (
                    <a
                      key={index}
                      href="#especial-poupa-ai"
                      onClick={e => {
                        e.preventDefault();
                        const el = document.querySelector("#especial-poupa-ai");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <FeatureCard
                        title={shortcut.title}
                        background={shortcut.background}
                        icon={shortcut.icon}
                      />
                    </a>
                  );
                }
                // Card 2: scroll para Outros Atalhos para WhatsApp
                if (index === 1) {
                  return (
                    <a
                      key={index}
                      href="#outros-atalhos-whatsapp"
                      onClick={e => {
                        e.preventDefault();
                        const el = document.querySelector("#outros-atalhos-whatsapp");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <FeatureCard
                        title={shortcut.title}
                        background={shortcut.background}
                        icon={shortcut.icon}
                      />
                    </a>
                  );
                }
                // Card 3: botão Poupa.ai, link externo
                return (
                  <a
                    key={index}
                    href="https://poupa.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <FeatureCard
                      title={shortcut.title}
                      background={shortcut.background}
                      icon={shortcut.icon}
                    />
                  </a>
                );
              })}
            </div>
          </section>

          {/* Mais populares Section */}
          <section id="especial-poupa-ai" className="mb-8">
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

          {/* Outros Atalhos para WhatsApp Section */}
          <section id="outros-atalhos-whatsapp" className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Outros Atalhos para WhatsApp</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <ShortcutCard
                title="Chama no Zap"
                icon="💬"
                gradient="bg-gradient-to-br from-green-500 to-emerald-600"
                description="Fale com números no WhatsApp sem precisar salvar o contato"
              />
            </div>
          </section>

          {/* Lançamentos Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Tutoriais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="https://www.youtube.com/watch?v=qmq_ICYZt20"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <TutorialCard
                  title={tutorials[0].title}
                  image={tutorials[0].image}
                />
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
