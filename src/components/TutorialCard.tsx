interface TutorialCardProps {
  title: string;
  image: string;
}

const TutorialCard = ({ title, image }: TutorialCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl aspect-video mb-3 transition-transform duration-300 group-hover:scale-105">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h4 className="text-foreground font-medium text-sm leading-tight group-hover:text-ios-blue transition-colors">
        {title}
      </h4>
    </div>
  );
};

export default TutorialCard;