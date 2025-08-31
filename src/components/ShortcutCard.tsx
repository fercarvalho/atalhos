import { Badge } from "@/components/ui/badge";

interface ShortcutCardProps {
  title: string;
  icon: string;
  isPremium?: boolean;
  isAI?: boolean;
  gradient: string;
  href?: string;
}

const ShortcutCard = ({ title, icon, isPremium, isAI, gradient, href }: ShortcutCardProps) => {
  const Wrapper = href ? "a" : "div"
  return (
    <div className={`
      relative group rounded-xl p-4 cursor-pointer transition-all duration-300
      hover:scale-105 hover:shadow-card-hover ${gradient}
    `}>
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="relative">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl">{icon}</span>
          </div>
          
          {/* Badges */}
          <div className="absolute -top-2 -right-2 flex flex-col space-y-1">
            {isPremium && (
              <Badge className="bg-premium-gold text-white text-xs px-1.5 py-0.5 shadow-premium">
                PREMIUM
              </Badge>
            )}
            {isAI && (
              <Badge className="bg-ai-cyan text-white text-xs px-1.5 py-0.5">
                IA
              </Badge>
            )}
          </div>
        </div>
        
        <h4 className="text-white font-medium text-sm leading-tight">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default ShortcutCard;