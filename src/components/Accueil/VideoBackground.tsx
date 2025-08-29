'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface VideoBackgroundProps {
  className?: string;
}

export const VideoBackground = ({ className = '' }: VideoBackgroundProps) => {
  // Mount gate to avoid hydration mismatches between SSR and client
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // YouTube video ID extracted from https://www.youtube.com/watch?v=pZ-cJe39f4w
  const youtubeVideoId = 'pZ-cJe39f4w';

  useEffect(() => {
    setMounted(true);
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Delay video loading for better performance
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  // During SSR and before mounting, render a deterministic fallback image
  if (!mounted) {
    return (
      <Image
        src="/images/accueil-fallback.webp"
        alt="Cyclistes lors de l'événement Lille-Paris contre le cancer"
        fill
        priority
        className={`object-cover ${className}`}
        style={{ aspectRatio: 'auto' }}
      />
    );
  }

  // After mount: show only image if reduced motion is preferred or on mobile
  if (prefersReducedMotion || isMobile) {
    return (
      <Image
        src="/images/accueil-fallback.webp"
        alt="Cyclistes lors de l'événement Lille-Paris contre le cancer"
        fill
        priority
        className={`object-cover ${className}`}
        style={{ aspectRatio: 'auto' }}
      />
    );
  }

  const handleVideoClick = () => {
    window.open(`https://www.youtube.com/watch?v=${youtubeVideoId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Fallback image as poster */}
      <Image
        src="/images/accueil-fallback.webp"
        alt="Cyclistes lors de l'événement Lille-Paris contre le cancer"
        fill
        priority
        className={`object-cover ${className} cursor-pointer`}
        style={{ aspectRatio: 'auto' }}
        onClick={handleVideoClick}
      />
      
      {/* YouTube Video Embed */}
      {showVideo && (
        <div className={`absolute inset-0 w-full h-full ${className}`}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`}
            title="Vidéo de présentation LPCC"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // 16:9 aspect ratio
              transform: 'translate(-50%, -50%)',
              top: '50%',
              left: '50%'
            }}
          />
          {/* Clickable overlay to redirect to YouTube */}
          <div 
            className="absolute inset-0 bg-transparent cursor-pointer hover:bg-black/10 transition-colors duration-300" 
            onClick={handleVideoClick}
            title="Cliquez pour voir la vidéo complète sur YouTube"
          />
        </div>
      )}
    </>
  );
};
