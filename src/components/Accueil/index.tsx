import { VideoBackground } from './VideoBackground';
import { Accroche } from './Accroche';
import { BoutonDon } from './BoutonDon';
import Image from 'next/image';

 

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
          
          
          
          {/* Social Media Quick Access */}
          <div className="flex justify-center space-x-4 mt-8">
            <a
              href="https://instagram.com/lillepariscontrelecancer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Suivez-nous sur Instagram"
            >
              <Image
                src="/images/social/instagram-logo.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ aspectRatio: 'auto' }}
                priority
              />
            </a>
            <a
              href="https://facebook.com/lillepariscontrelecancer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Suivez-nous sur Facebook"
            >
              <Image
                src="/images/social/facebook-logo.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="text-white"
                style={{ aspectRatio: 'auto' }}
              />
            </a>
            <a
              href="https://linkedin.com/company/lille-paris-contre-le-cancer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Suivez-nous sur LinkedIn"
            >
              <Image
                src="/images/social/linkedin-logo.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="text-white"
                style={{ aspectRatio: 'auto' }}
              />
            </a>
            <a
              href="https://youtube.com/@lillepariscontrelecancer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Suivez-nous sur YouTube"
            >
              <Image
                src="/images/social/youtube-logo.svg"
                alt="YouTube"
                width={24}
                height={24}
                className="text-white"
                style={{ aspectRatio: 'auto' }}
              />
            </a>
            <a
              href="https://tiktok.com/@lillepariscontrelecancer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Suivez-nous sur TikTok"
            >
              <Image
                src="/images/social/tiktok-logo.svg"
                alt="TikTok"
                width={24}
                height={24}
                className="text-white"
                style={{ aspectRatio: 'auto' }}
              />
            </a>
          </div>
          
          {/* Video Button */}
          <div className="flex justify-center mt-6">
            <a
              href="https://www.youtube.com/watch?v=pZ-cJe39f4w"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Image
                src="/images/social/youtube-logo.svg"
                alt="YouTube"
                width={20}
                height={20}
                className="text-white"
                style={{ aspectRatio: 'auto' }}
              />
              <span>Voir la vidéo</span>
            </a>
          </div>

          {/* Video Credits */}
          <div className="flex justify-center mt-4">
            <p className="text-white/70 text-sm">
              Vidéo par <span className="font-medium">Alexi - L&apos;oignon pédaleur</span>
            </p>
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
export { VideoBackground, Accroche, BoutonDon };
