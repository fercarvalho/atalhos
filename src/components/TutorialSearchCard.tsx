import { Play } from "lucide-react";

interface TutorialSearchCardProps {
  title: string;
  description?: string;
  duration?: string;
}

const TutorialSearchCard = ({ title, description, duration }: TutorialSearchCardProps) => {
  return (
    <div className="group cursor-pointer bg-card border border-border rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
          <Play className="w-6 h-6 text-white fill-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-foreground font-medium text-sm leading-tight group-hover:text-red-500 transition-colors mb-1 line-clamp-2">
            {title}
          </h4>
          {description && (
            <p className="text-muted-foreground text-xs line-clamp-2 mb-2">
              {description}
            </p>
          )}
          {duration && (
            <span className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
              {duration}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialSearchCard;
