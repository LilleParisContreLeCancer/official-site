'use client';

import { useState } from 'react';
import { OptimizedImage } from './OptimizedImage';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { IMAGE_QUALITY, RESPONSIVE_SIZES } from '@/utils/imageOptimization';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: keyof typeof IMAGE_QUALITY;
  sizes?: keyof typeof RESPONSIVE_SIZES;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  rootMargin?: string;
  threshold?: number;
}

export const LazyImage = ({
  src,
  alt,
  width,
  height,
  quality = 'MEDIUM',
  sizes = 'CARD',
  priority = false,
  className = '',
  fill = false,
  placeholder = 'empty',
  blurDataURL,
  rootMargin = '100px 0px',
  threshold = 0.1,
}: LazyImageProps) => {
  const [shouldLoad,] = useState(priority); // Load immediately if priority
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  // Load image when it intersects or if it's priority
  const loadImage = shouldLoad || hasIntersected || priority;

  return (
    <div 
      ref={elementRef} 
      className={`${fill ? 'absolute inset-0' : 'relative'} ${className}`}
      style={!fill ? { width, height } : { position: 'absolute', inset: 0 }}
    >
      {loadImage ? (
        <OptimizedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          sizes={sizes}
          priority={priority}
          className=""
          fill={fill}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
        />
      ) : (
        // Placeholder skeleton while not in view
        <div 
          className={`bg-gray-200 animate-pulse ${fill ? 'absolute inset-0' : ''}`}
          style={!fill ? { width, height } : { position: 'absolute', inset: 0 }}
        >
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            {/* Optional loading icon */}
            <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
