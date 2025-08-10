'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface VideoBackgroundProps {
  className?: string;
}

export const VideoBackground = ({ className = '' }: VideoBackgroundProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Show only image if reduced motion is preferred or on mobile
  if (prefersReducedMotion || isMobile) {
    return (
      <Image
        src="/images/accueil-fallback.webp"
        alt="Cyclistes lors de l'événement Lille-Paris contre le cancer"
        fill
        priority
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <>
      {/* Fallback image as poster */}
      <Image
        src="/images/accueil-fallback.webp"
        alt="Cyclistes lors de l'événement Lille-Paris contre le cancer"
        fill
        priority
        className={`object-cover ${className}`}
      />
      
      {/* Video overlay */}
      <video
        muted
        autoPlay
        loop
        playsInline
        poster="/images/accueil-fallback.webp"
        aria-label="Vidéo de présentation de l'événement Lille-Paris contre le cancer"
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
      >
        <source src="/videos/accueil.webm" type="video/webm" />
        <source src="/videos/accueil.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </>
  );
};
