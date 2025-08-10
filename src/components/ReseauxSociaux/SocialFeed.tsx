import { SocialPlatform } from './index';
import { YouTubeFeed } from './YouTubeFeed';

interface SocialLink {
  platform: SocialPlatform;
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

interface SocialFeedProps {
  platform: SocialPlatform;
  socialLink: SocialLink;
}

// Données d'exemple pour chaque plateforme (à remplacer par de vraies données)
const mockContent = {
  instagram: [
    {
      id: 1,
      type: 'image',
      content: '🎗️ Journée mondiale contre le cancer - Ensemble, nous sommes plus forts !',
      image: '/images/placeholder-instagram-1.jpg',
      likes: 245,
      date: '2025-01-15'
    },
    {
      id: 2,
      type: 'image',
      content: '💪 Témoignage inspirant de Marie, survivante du cancer du sein',
      image: '/images/placeholder-instagram-2.jpg',
      likes: 189,
      date: '2025-01-12'
    },
    {
      id: 3,
      type: 'image',
      content: '🔬 Visite de nos laboratoires de recherche partenaires',
      image: '/images/placeholder-instagram-3.jpg',
      likes: 156,
      date: '2025-01-10'
    }
  ],
  facebook: [
    {
      id: 1,
      type: 'post',
      content: 'Merci à tous nos bénévoles qui ont participé à la collecte de fonds ce weekend ! Grâce à vous, nous avons récolté 15 000€ pour la recherche contre le cancer. 🙏',
      reactions: 342,
      shares: 28,
      date: '2025-01-14'
    },
    {
      id: 2,
      type: 'event',
      content: '📅 Prochaine conférence "Prévention et dépistage" le 25 janvier à 19h. Inscription gratuite !',
      reactions: 156,
      shares: 45,
      date: '2025-01-11'
    }
  ],
  linkedin: [
    {
      id: 1,
      type: 'article',
      content: 'Innovation en oncologie : Comment l\'IA révolutionne le diagnostic précoce du cancer',
      views: 1250,
      comments: 23,
      date: '2025-01-13'
    },
    {
      id: 2,
      type: 'post',
      content: 'Partenariat stratégique avec l\'Institut Curie pour accélérer la recherche en immunothérapie',
      views: 890,
      comments: 15,
      date: '2025-01-09'
    }
  ],
  youtube: [
    {
      id: 1,
      type: 'video',
      title: 'Témoignage de Dr. Martin - Avancées en immunothérapie',
      thumbnail: '/images/placeholder-youtube-1.jpg',
      duration: '12:34',
      views: 5420,
      date: '2025-01-12'
    },
    {
      id: 2,
      type: 'video',
      title: 'Comment bien se préparer à une chimiothérapie',
      thumbnail: '/images/placeholder-youtube-2.jpg',
      duration: '8:45',
      views: 3210,
      date: '2025-01-08'
    }
  ],
  tiktok: [
    {
      id: 1,
      type: 'video',
      content: '3 gestes simples pour prévenir le cancer au quotidien ✨',
      views: 12500,
      likes: 890,
      date: '2025-01-14'
    },
    {
      id: 2,
      type: 'video',
      content: 'Mythes vs Réalités sur le cancer - Episode 1 🧠',
      views: 8900,
      likes: 654,
      date: '2025-01-11'
    }
  ]
};

export const SocialFeed = ({ platform, socialLink }: SocialFeedProps) => {
  const content = mockContent[platform] || [];

  const renderInstagramFeed = () => (
    <div className="grid md:grid-cols-3 gap-6">
      {content.map((post: any) => (
        <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
            <div className="text-6xl opacity-50">📸</div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-700 mb-3">{post.content}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>❤️ {post.likes}</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFacebookFeed = () => (
    <div className="space-y-6">
      {content.map((post: any) => (
        <div key={post.id} className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xl">👥</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h4 className="font-semibold text-gray-900">Lille Paris Contre le Cancer</h4>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span>👍 {post.reactions}</span>
                <span>🔄 {post.shares}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderLinkedInFeed = () => (
    <div className="space-y-6">
      {content.map((post: any) => (
        <div key={post.id} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xl">💼</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h4 className="font-semibold text-gray-900">LPCC</h4>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span>👁️ {post.views} vues</span>
                <span>💬 {post.comments} commentaires</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderYouTubeFeed = () => <YouTubeFeed maxVideos={4} />;

  const renderTikTokFeed = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {content.map((video: any) => (
        <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-[9/16] max-h-96 bg-gradient-to-br from-black to-gray-800 flex items-center justify-center relative">
            <div className="text-6xl opacity-50">🎵</div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm mb-2">{video.content}</p>
              <div className="flex items-center justify-between text-xs text-white/80">
                <span>👁️ {video.views}</span>
                <span>❤️ {video.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFeed = () => {
    switch (platform) {
      case 'instagram':
        return renderInstagramFeed();
      case 'facebook':
        return renderFacebookFeed();
      case 'linkedin':
        return renderLinkedInFeed();
      case 'youtube':
        return renderYouTubeFeed();
      case 'tiktok':
        return renderTikTokFeed();
      default:
        return <div>Plateforme non supportée</div>;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${socialLink.color} flex items-center justify-center text-2xl text-white`}>
            {socialLink.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{socialLink.name}</h3>
            <p className="text-gray-600">{socialLink.description}</p>
          </div>
        </div>
        <a
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 flex items-center space-x-2"
        >
          <span>Suivre</span>
          <span>↗️</span>
        </a>
      </div>

      {/* Content */}
      {renderFeed()}

      {/* Call to action */}
      <div className="text-center mt-8">
        <a
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300"
        >
          <span>Voir plus sur {socialLink.name}</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
};
