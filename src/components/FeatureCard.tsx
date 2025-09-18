import { ReactNode } from "react";

interface FeatureCardProps {
  title: string | ReactNode;
  background: string;
  icon?: ReactNode;
  image?: string;
}

const FeatureCard = ({ title, background, icon, image }: FeatureCardProps) => {
  return (
    <div className={`
      relative overflow-hidden rounded-xl p-6 h-[220px] cursor-pointer
      transition-all duration-300 hover:scale-105 hover:shadow-card-hover
      ${background}
    `}>
      {image && (
        <img 
          src={image} 
          alt={typeof title === 'string' ? title : 'Feature card'}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex flex-col">
          {icon && (
            <div className="mb-3 flex-shrink-0">
              {icon}
            </div>
          )}
          <h3 className="text-white font-semibold text-lg leading-tight overflow-hidden">
            <span className="block overflow-hidden" style={{
              display: '-webkit-box',
              WebkitLineClamp: 6,
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis'
            }}>
              {title}
            </span>
          </h3>
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
};

export default FeatureCard;