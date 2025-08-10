import { VideoBackground } from './VideoBackground';
import { Accroche } from './Accroche';
import { BoutonDon } from './BoutonDon';
import { CompteurDons } from './CompteurDons';

export const AccueilSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
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
          
          {/* Social Media Quick Access */}
          <div className="flex justify-center space-x-4 mt-8">
            <a
              href="https://instagram.com/lillepariscontrelecancer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Suivez-nous sur Instagram"
            >
              <span className="text-2xl">📸</span>
            </a>
            <a
              href="https://facebook.com/lillepariscontrelecancer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Suivez-nous sur Facebook"
            >
              <span className="text-2xl">👥</span>
            </a>
            <a
              href="https://linkedin.com/company/lille-paris-contre-le-cancer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Suivez-nous sur LinkedIn"
            >
              <span className="text-2xl">💼</span>
            </a>
            <a
              href="https://youtube.com/@lillepariscontrelecancer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Suivez-nous sur YouTube"
            >
              <span className="text-2xl">🎥</span>
            </a>
            <a
              href="https://tiktok.com/@lillepariscontrelecancer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Suivez-nous sur TikTok"
            >
              <span className="text-2xl">🎵</span>
            </a>
          </div>
          
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
