// SECTION RÉSEAUX SOCIAUX TEMPORAIREMENT DÉSACTIVÉE - CODE CONSERVÉ POUR RÉACTIVATION FUTURE

/*
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { SocialFeed } from './SocialFeed';

// Lazy load YouTube component to reduce initial bundle size
const YouTubeFeed = dynamic(() => import('./YouTubeFeed').then(mod => ({ default: mod.YouTubeFeed })), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
          <div className="aspect-video bg-gray-200"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  ),
  ssr: false
});

export type SocialPlatform = 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'tiktok';

interface SocialLink {
  platform: SocialPlatform;
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/lillepariscontrelecancer',
    icon: '📸',
    color: 'from-pink-500 to-purple-600',
    description: 'Nos moments forts en images'
  },
  {
    platform: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com/lillepariscontrelecancer',
    icon: '👥',
    color: 'from-blue-600 to-blue-700',
    description: 'Rejoignez notre communauté'
  },
  {
    platform: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/lille-paris-contre-le-cancer',
    icon: '💼',
    color: 'from-blue-700 to-blue-800',
    description: 'Réseau professionnel'
  },
  {
    platform: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/@lillepariscontrelecancer',
    icon: '🎥',
    color: 'from-red-500 to-red-600',
    description: 'Nos vidéos et témoignages'
  },
  {
    platform: 'tiktok',
    name: 'TikTok',
    url: 'https://tiktok.com/@lillepariscontrelecancer',
    icon: '🎵',
    color: 'from-black to-gray-800',
    description: 'Contenus créatifs et engagés'
  }
];

export const ReseauxSociaux = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<SocialPlatform>('instagram');

  return (
    <section id="reseaux-sociaux" className="w-full bg-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Suivez-nous sur les réseaux
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Restez connectés avec notre communauté et découvrez nos dernières actualités,
            événements et témoignages inspirants.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {socialLinks.map((social) => (
            <SocialButton
              key={social.platform}
              social={social}
              isSelected={selectedPlatform === social.platform}
              onClick={() => setSelectedPlatform(social.platform)}
            />
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <SocialFeed
            platform={selectedPlatform}
            socialLink={socialLinks.find(s => s.platform === selectedPlatform)!}
          />
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              🤝 Rejoignez notre communauté
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Suivez-nous, partagez nos contenus et aidez-nous à sensibiliser davantage de personnes à notre cause.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  {social.icon} {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
*/

// Placeholder export to avoid module errors
export const ReseauxSociaux = () => {
  return null;
};
