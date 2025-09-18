import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FeatureCard from "@/components/FeatureCard";
import ShortcutCard from "@/components/ShortcutCard";
import TutorialCard from "@/components/TutorialCard";
import { MessageCircle, Layers, Smartphone, Watch, Instagram, Mic2, PiggyBank, Youtube, Bot } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { useSearch } from "@/hooks/useSearch";
import { shortcuts, tutorials } from "@/data/shortcuts";

function Index() {
  const { filteredData, filteredTutorials, isSearching, searchTerm, totalResults } = useSearch();

  const featuredShortcuts = [
    {
      title: "Assista as aulas mais completas sobre IA no Youtube",
      background: "bg-gradient-to-br from-red-500 to-red-700",
      icon: <Youtube className="w-8 h-8 text-white" />
    },
    {
      title: "Obtenha dicas rápidas e poderosas sobre IA no TikTok",
      background: "bg-gradient-to-br from-black via-gray-900 to-gray-800",
      icon: <SiTiktok className="w-8 h-8 text-white" />
    },
    {
      title: "Acesse o Instagram para dicas diárias de IA",
      background: "bg-gradient-to-br from-pink-500 to-pink-700",
      icon: <Instagram className="w-8 h-8 text-white" />
    },
    {
      title: (
        <>
          Automatize suas finanças com o Poupa.ai
          <br />
          10% OFF: FECARVALHO
        </>
      ),
      background: "bg-[#3662e3]",
      icon: <PiggyBank className="w-8 h-8 text-white" />
    },
    {
      title: "Atalhos para IAs no WhatsApp",
      background: "bg-gradient-whatsapp",
      icon: <Bot className="w-8 h-8 text-white" />
    },
    {
      title: "Atalhos para WhatsApp",
      background: "bg-gradient-whatsapp",
      icon: <MessageCircle className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          {/* Resultados de Busca */}
          {isSearching && (
            <section className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Resultados da busca: "{searchTerm}"
                </h2>
                <span className="text-muted-foreground">
                  {totalResults} {totalResults === 1 ? 'resultado' : 'resultados'}
                </span>
              </div>
              
              {(filteredData.length > 0 || filteredTutorials.length > 0) ? (
                <>
                  {/* Atalhos encontrados */}
                  {filteredData.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Atalhos ({filteredData.length})
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {filteredData.map((shortcut) => (
                          <a
                            key={shortcut.id}
                            href={shortcut.icloudUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <ShortcutCard
                              title={shortcut.title}
                              icon={shortcut.icon || "🔗"}
                              gradient="bg-gradient-to-br from-green-500 to-emerald-600"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tutoriais encontrados */}
                  {filteredTutorials.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Tutoriais ({filteredTutorials.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredTutorials.map((tutorial) => (
                          <a
                            key={tutorial.id}
                            href={tutorial.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <TutorialCard
                              title={tutorial.title}
                              image={tutorial.image || "tutorial01.jpg"}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Nenhum resultado encontrado para "{searchTerm}"
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Tente usar termos diferentes ou mais gerais
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Conteúdo padrão - oculto durante busca */}
          {!isSearching && (
            <>
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
                      style={{ cursor: "pointer" }} />
                  </a>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Destaques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {featuredShortcuts.map((shortcut, index) => {
                    // Card do Poupa.ai (com texto promocional) aponta para link externo
                    if (typeof shortcut.title === "object" &&
                      shortcut.title?.props?.children?.[0] === "Automatize suas finanças com o Poupa.ai") {
                      return (
                        <a
                          key={index}
                          href="https://poupa.ai/?coupon=FECARVALHO"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <FeatureCard
                            title={shortcut.title}
                            background={shortcut.background}
                            icon={shortcut.icon} />
                        </a>
                      );
                    }
                    // Card TikTok
                    if (shortcut.title === "Obtenha dicas rápidas e poderosas sobre IA no TikTok") {
                      return (
                        <a
                          key={index}
                          href="https://www.tiktok.com/@ai.fercarvalho"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <FeatureCard
                            title={shortcut.title}
                            background={shortcut.background}
                            icon={shortcut.icon} />
                        </a>
                      );
                    }
                    // Card Instagram
                    if (shortcut.title === "Acesse o Instagram para dicas diárias de IA") {
                      return (
                        <a
                          key={index}
                          href="https://www.instagram.com/ai.fercarvalho"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <FeatureCard
                            title={shortcut.title}
                            background={shortcut.background}
                            icon={shortcut.icon} />
                        </a>
                      );
                    }
                    // Card Youtube
                    if (shortcut.title === "Assista as aulas mais completas sobre IA no Youtube") {
                      return (
                        <a
                          key={index}
                          href="https://www.youtube.com/@ai.fercarvalho"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <FeatureCard
                            title={shortcut.title}
                            background={shortcut.background}
                            icon={shortcut.icon} />
                        </a>
                      );
                    }
                    // Card "Atalhos para IAs no WhatsApp" - scroll para Especial Poupa.ai
                    if (shortcut.title === "Atalhos para IAs no WhatsApp") {
                      return (
                        <a
                          key={index}
                          href="#especial-poupa-ai"
                          onClick={e => {
                            e.preventDefault();
                            const el = document.querySelector("#especial-poupa-ai");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          } }
                          style={{ textDecoration: "none" }}
                        >
                          <FeatureCard
                            title={shortcut.title}
                            background={shortcut.background}
                            icon={shortcut.icon} />
                        </a>
                      );
                    }
                    // Card "Atalhos para WhatsApp" - scroll para Outros Atalhos para WhatsApp
                    if (shortcut.title === "Atalhos para WhatsApp") {
                      return (
                        <a
                          key={index}
                          href="#outros-atalhos-whatsapp"
                          onClick={e => {
                            e.preventDefault();
                            const el = document.querySelector("#outros-atalhos-whatsapp");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          } }
                          style={{ textDecoration: "none" }}
                        >
                          <FeatureCard
                            title={shortcut.title}
                            background={shortcut.background}
                            icon={shortcut.icon} />
                        </a>
                      );
                    }
                    // Outros cards: apenas exibem o card sem link
                    return (
                      <FeatureCard
                        key={index}
                        title={shortcut.title}
                        background={shortcut.background}
                        icon={shortcut.icon} />
                    );
                  })}
                </div>
              </section>

              {/* Mais populares Section */}
              <section id="especial-poupa-ai" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">ESPECIAL Poupa.ai</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {shortcuts.slice(0, 5).map((shortcut) => (
                    <a
                      key={shortcut.id}
                      href={shortcut.icloudUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <ShortcutCard
                        title={shortcut.title}
                        icon={shortcut.icon}
                        gradient="bg-gradient-to-br from-green-500 to-emerald-600"
                      />
                    </a>
                  ))}
                </div>
              </section>

              {/* Outros Atalhos para WhatsApp Section */}
              <section id="outros-atalhos-whatsapp" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Outros Atalhos para WhatsApp</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {/* Buscar e mostrar atalhos da categoria WhatsApp */}
                  {(() => {
                    // Filtrar atalhos da categoria WhatsApp dos dados originais
                    const whatsappShortcuts = shortcuts.filter(shortcut => 
                      shortcut.category.toLowerCase().includes('whatsapp')
                    );
                    
                    if (whatsappShortcuts.length === 0) {
                      return (
                        <div className="text-center text-muted-foreground p-4 col-span-full">
                          <p>Nenhum atalho para WhatsApp encontrado</p>
                        </div>
                      );
                    }
                    
                    return whatsappShortcuts.map((shortcut) => (
                      <a
                        key={shortcut.id}
                        href={shortcut.icloudUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <ShortcutCard
                          title={shortcut.title}
                          icon={shortcut.icon || "💬"}
                          gradient="bg-gradient-to-br from-green-500 to-emerald-600"
                        />
                      </a>
                    ));
                  })()}
                </div>
              </section>

              {/* Tutoriais Section */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Tutoriais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tutorials.map((tutorial) => (
                    <a
                      key={tutorial.id}
                      href={tutorial.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <TutorialCard
                        title={tutorial.title}
                        image={tutorial.image || "tutorial01.jpg"} />
                    </a>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Index;
