import { 
  Smartphone, 
  Camera, 
  MessageCircle, 
  Heart, 
  Briefcase, 
  Watch, 
  Download, 
  Mail,
  Zap,
  PiggyBank,
  Menu,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { icon: PiggyBank, label: "Poupa.ai", count: 5, active: false },
  { icon: MessageCircle, label: "Atalhos para WhatsApp", count: 1, active: false },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão do menu para abrir */}
      {!open && (
        <button
          className="fixed top-[2.5rem] md:top-[2.5rem] left-4 z-50 bg-card p-2 rounded-lg shadow"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6 text-foreground" />
        </button>
      )}

      {/* Botão para fechar */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="fixed top-[2.5rem] md:top-[2.5rem] left-4 z-50 bg-card p-2 rounded-lg shadow"
          aria-label="Fechar menu"
        >
          <Menu className="w-6 h-6 text-foreground rotate-180" />
        </button>
      )}

      {/* Sidebar */}
      {open && (
        <aside
          className={`
            h-screen overflow-y-auto bg-card border-r border-border
            transition-all duration-300
            w-64
            fixed top-0 left-0 z-40
          `}
          style={{ maxWidth: "100vw" }}
        >
          <div className="p-4 pt-16">
            <nav className="space-y-1">
              {categories.map((category) => {
                const Icon = category.icon;
                let href = "#";
                if (category.label === "Poupa.ai") href = "#especial-poupa-ai";
                if (category.label === "Atalhos para WhatsApp") href = "#outros-atalhos-whatsapp";
                return (
                  <a
                    key={category.label}
                    href={href}
                    onClick={e => {
                      e.preventDefault();
                      setOpen(false);
                      const el = document.querySelector(href);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`
                      flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                      ${category.active 
                        ? 'bg-ios-blue text-white' 
                        : 'text-foreground hover:bg-muted'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-4 h-4" />
                      <span>{category.label}</span>
                    </div>
                    <span className={`
                      text-xs px-2 py-1 rounded-full
                      ${category.active 
                        ? 'bg-white/20 text-white' 
                        : 'bg-muted text-muted-foreground'
                      }
                    `}>
                      {category.count}
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>
      )}

      {/* Overlay para fechar o menu ao clicar fora */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;