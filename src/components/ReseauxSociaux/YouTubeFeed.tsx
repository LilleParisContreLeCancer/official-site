'use client';

import { useState, useEffect } from 'react';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  channelTitle: string;
}

interface YouTubeFeedProps {
  maxVideos?: number;
}

export const YouTubeFeed = ({ maxVideos = 4 }: YouTubeFeedProps) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/youtube-feed');
        const data = await response.json();

        if (data.success) {
          setVideos(data.videos.slice(0, maxVideos));
          setError(null);
        } else {
          setError(data.error || 'Erreur lors du chargement des vidéos');
        }
      } catch (err) {
        setError('Impossible de charger les vidéos YouTube');
        console.error('Erreur YouTube Feed:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [maxVideos]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        {[...Array(maxVideos)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">🎥</div>
        <p className="text-gray-600 mb-4">{error}</p>
        <a
          href="https://youtube.com/@lillepariscontrelecancer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
        >
          <span>Voir sur YouTube</span>
          <span>↗️</span>
        </a>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">🎥</div>
        <p className="text-gray-600 mb-4">Aucune vidéo disponible pour le moment</p>
        <a
          href="https://youtube.com/@lillepariscontrelecancer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
        >
          <span>Découvrir notre chaîne</span>
          <span>↗️</span>
        </a>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        >
          {/* Thumbnail avec overlay play */}
          <div className="relative aspect-video bg-gray-100">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label={`Regarder: ${video.title}`}
            />
          </div>

          {/* Contenu */}
          <div className="p-4">
            <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
              {video.title}
            </h4>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {video.description}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{video.channelTitle}</span>
              <span>{new Date(video.publishedAt).toLocaleDateString('fr-FR')}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
