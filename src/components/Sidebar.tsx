import { 
  Smartphone, 
  Camera, 
  MessageCircle, 
  Heart, 
  Briefcase, 
  Watch, 
  Download, 
  Mail,
  Zap
} from "lucide-react";

const categories = [
  { icon: Zap, label: "Utilitários", count: 25, active: true },
  { icon: Camera, label: "Foto e Vídeo", count: 13 },
  { icon: MessageCircle, label: "Redes Sociais", count: 12 },
  { icon: Heart, label: "Saúde", count: 10 },
  { icon: Briefcase, label: "Essenciais", count: 8 },
  { icon: Briefcase, label: "Produtividade", count: 3 },
  { icon: Watch, label: "Watch", count: 2 },
  { icon: Download, label: "Download", count: 1 },
  { icon: Mail, label: "Mensagens", count: 1 },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-border h-screen overflow-y-auto">
      <div className="p-4">
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
  );
};

export default Sidebar;