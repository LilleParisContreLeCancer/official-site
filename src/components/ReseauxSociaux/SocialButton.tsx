interface SocialLink {
  platform: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

interface SocialButtonProps {
  social: SocialLink;
  isSelected: boolean;
  onClick: () => void;
}

export const SocialButton = ({ social, isSelected, onClick }: SocialButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 ${
        isSelected 
          ? 'ring-4 ring-primary shadow-2xl scale-105' 
          : 'hover:shadow-xl'
      }`}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
          {social.icon}
        </div>
        <h3 className="font-bold text-lg mb-2">
          {social.name}
        </h3>
        <p className="text-sm opacity-90 leading-tight">
          {social.description}
        </p>
      </div>

      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-2 right-2 bg-white rounded-full p-1">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      )}

      {/* Hover effect */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </button>
  );
};
