interface ShortcutCardProps {
  title: string;
  icon: string;
  gradient: string;
  href?: string;
}

const ShortcutCard = ({ title, icon, gradient, href }: ShortcutCardProps) => {
  const Wrapper = href ? "a" : "div"
  return (
    <div className={`
      relative group rounded-xl p-4 cursor-pointer transition-all duration-300
      hover:scale-105 hover:shadow-card-hover ${gradient}
    `}>
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <span className="text-2xl">{icon}</span>
        </div>
        
        <h4 className="text-white font-medium text-sm leading-tight">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default ShortcutCard;