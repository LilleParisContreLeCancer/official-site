import { VideoBackground } from './VideoBackground';
import { Accroche } from './Accroche';
import { BoutonDon } from './BoutonDon';
import { CompteurDons } from './CompteurDons';

export const AccueilSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <VideoBackground className="brightness-50" />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 py-8">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          
          {/* Main headline */}
          <Accroche className="mb-8" />
          
          {/* CTA Buttons */}
          <BoutonDon className="mb-12" />
          
          {/* Donation Counter */}
          <CompteurDons className="mx-auto" />
          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-label="Faire défiler vers le bas"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

// Export individual components for reuse
export { VideoBackground, Accroche, BoutonDon, CompteurDons };
