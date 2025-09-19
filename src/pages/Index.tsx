import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FeatureCard from "@/components/FeatureCard";
import ShortcutCard from "@/components/ShortcutCard";
import TutorialCard from "@/components/TutorialCard";
import Footer from "@/components/Footer";
import ShortcutModal from "@/components/ShortcutModal";
import VideoModal from "@/components/VideoModal";
import WebsiteModal from "@/components/WebsiteModal";
import { MessageCircle, Layers, Smartphone, Watch, Instagram, Mic2, PiggyBank, Youtube, Bot, Settings, PlayCircle } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { useSearch } from "@/hooks/useSearch";
import { useShortcutModal } from "@/contexts/ShortcutModalContext";
import { useVideoModal } from "@/hooks/useVideoModal";
import { useWebsiteModal } from "@/hooks/useWebsiteModal";
import { shortcuts, tutorials } from "@/data/shortcuts";

function Index() {
  const { filteredData, filteredTutorials, isSearching, searchTerm, totalResults } = useSearch();
  const { 
    selectedShortcut, 
    isModalOpen, 
    closeModal, 
    incrementClickCount, 
    getClickCount 
  } = useShortcutModal();
  const {
    isVideoModalOpen,
    selectedVideo,
    openVideoModal,
    closeVideoModal
  } = useVideoModal();
  const {
    isWebsiteModalOpen,
    selectedWebsite,
    openWebsiteModal,
    closeWebsiteModal
  } = useWebsiteModal();

  const handleInstall = () => {
    if (selectedShortcut) {
      incrementClickCount(selectedShortcut.id);
      window.open(selectedShortcut.icloudUrl, '_blank');
    }
  };

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
      title: "ESPECIAL Poupa.ai",
      background: "bg-gray-50",
      icon: <PiggyBank className="w-8 h-8 text-white" />
    },
    {
      title: "Atalhos de IA",
      background: "bg-gradient-to-br from-cyan-500 to-blue-500",
      icon: <Bot className="w-8 h-8 text-white" />
    },
    {
      title: "Automações",
      background: "bg-gradient-to-br from-orange-500 to-red-500",
      icon: <Settings className="w-8 h-8 text-white" />
    },
    {
      title: "Atalhos para WhatsApp",
      background: "bg-gradient-whatsapp",
      icon: <MessageCircle className="w-8 h-8 text-white" />
    },
    {
      title: "Tutoriais",
      background: "bg-gradient-to-br from-purple-500 to-indigo-600",
      icon: <PlayCircle className="w-8 h-8 text-white" />
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
                          <ShortcutCard
                            key={shortcut.id}
                            shortcut={shortcut}
                          />
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
                    // Card do Poupa.ai (com texto promocional) abre modal
                    if (typeof shortcut.title === "object" &&
                      shortcut.title?.props?.children?.[0] === "Automatize suas finanças com o Poupa.ai") {
                      return (
                        <div
                          key={index}
                          onClick={() => openWebsiteModal("https://poupa.ai/?coupon=FECARVALHO", "Poupa.ai - Automatize suas finanças")}
                          className="cursor-pointer"
                        >
                          <FeatureCard
                            title={shortcut.title}
                            background={shortcut.background}
                            icon={shortcut.icon} />
                        </div>
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
                    // Card "ESPECIAL Poupa.ai" - scroll para ESPECIAL Poupa.ai
                    if (shortcut.title === "ESPECIAL Poupa.ai") {
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
                    // Card "Atalhos de IA" - scroll para Atalhos de IA
                    if (shortcut.title === "Atalhos de IA") {
                      return (
                        <a
                          key={index}
                          href="#atalhos-ia"
                          onClick={e => {
                            e.preventDefault();
                            const el = document.querySelector("#atalhos-ia");
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
                    // Card "Automações" - scroll para Automações
                    if (shortcut.title === "Automações") {
                      return (
                        <a
                          key={index}
                          href="#automacoes"
                          onClick={e => {
                            e.preventDefault();
                            const el = document.querySelector("#automacoes");
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
                    // Card "Tutoriais" - scroll para Tutoriais
                    if (shortcut.title === "Tutoriais") {
                      return (
                        <a
                          key={index}
                          href="#tutoriais"
                          onClick={e => {
                            e.preventDefault();
                            const el = document.querySelector("#tutoriais");
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
                    <ShortcutCard
                      key={shortcut.id}
                      shortcut={shortcut}
                    />
                  ))}
                </div>
              </section>

              {/* Atalhos de IA Section */}
              <section id="atalhos-ia" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Atalhos de IA</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {shortcuts.filter(shortcut => shortcut.isAI).map((shortcut) => (
                    <ShortcutCard
                      key={shortcut.id}
                      shortcut={shortcut}
                    />
                  ))}
                </div>
              </section>

              {/* Automações Section */}
              <section id="automacoes" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Automações</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {shortcuts.filter(shortcut => shortcut.isAutomacao).map((shortcut) => (
                    <ShortcutCard
                      key={shortcut.id}
                      shortcut={shortcut}
                    />
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
                      <ShortcutCard
                        key={shortcut.id}
                        shortcut={shortcut}
                      />
                    ));
                  })()}
                </div>
              </section>

              {/* Financeiro Section */}
              <section id="financeiro" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Financeiro</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {shortcuts.filter(shortcut => shortcut.category === "Financeiro").map((shortcut) => (
                    <ShortcutCard
                      key={shortcut.id}
                      shortcut={shortcut}
                    />
                  ))}
                </div>
              </section>

              {/* Tutoriais Section */}
              <section id="tutoriais">
                <h2 className="text-2xl font-bold text-foreground mb-6">Tutoriais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tutorials.map((tutorial) => (
                    <div
                      key={tutorial.id}
                      onClick={() => openVideoModal(tutorial)}
                      className="cursor-pointer"
                    >
                      <TutorialCard
                        title={tutorial.title}
                        image={tutorial.image || "tutorial01.jpg"} />
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>
      </div>
      <Footer />

      {/* Modal de Atalho */}
      {selectedShortcut && (
        <ShortcutModal
          shortcut={selectedShortcut}
          isOpen={isModalOpen}
          onClose={closeModal}
          clickCount={getClickCount(selectedShortcut.id)}
          onInstall={handleInstall}
        />
      )}

      {/* Modal de Vídeo */}
      {selectedVideo && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={closeVideoModal}
          videoUrl={selectedVideo.videoUrl}
          title={selectedVideo.title}
        />
      )}

      {/* Modal de Website */}
      {selectedWebsite && (
        <WebsiteModal
          isOpen={isWebsiteModalOpen}
          onClose={closeWebsiteModal}
          websiteUrl={selectedWebsite.url}
          title={selectedWebsite.title}
        />
      )}
    </div>
  );
}

export default Index;
