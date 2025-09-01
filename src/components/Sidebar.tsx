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
  { icon: PiggyBank, label: "Poupa.ai", count: 5, active: true },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão do menu para mobile */}
      {!open && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-card p-2 rounded-lg shadow"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6 text-foreground" />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          h-screen overflow-y-auto bg-card border-r border-border
          transition-transform duration-300
          fixed top-0 left-0 z-40
          w-64
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:block
        `}
        style={{ maxWidth: "100vw" }}
      >
        <div className="p-4">
          {/* Botão para fechar no mobile */}
          <div className="md:hidden flex justify-end mb-4">
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg bg-muted"
              aria-label="Fechar menu"
            >
              <Menu className="w-6 h-6 text-foreground rotate-180" />
            </button>
          </div>
          <nav className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.label}
                  href="#"
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

      {/* Overlay para fechar o menu ao clicar fora (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;