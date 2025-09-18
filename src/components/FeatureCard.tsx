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
      relative overflow-hidden rounded-xl p-6 min-h-[160px] cursor-pointer
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
      
      <div className="relative z-10 flex flex-col justify-start items-start h-full">
        {icon && (
          <div className="mb-3">
            {icon}
          </div>
        )}
        <h3 className="text-white font-semibold text-lg leading-tight">
          {title}
        </h3>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
};

export default FeatureCard;