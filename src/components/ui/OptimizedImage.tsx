'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getOptimizedImageProps, IMAGE_QUALITY, RESPONSIVE_SIZES } from '@/utils/imageOptimization';

interface OptimizedImageProps {
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
}

export const OptimizedImage = ({
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
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const optimizedProps = getOptimizedImageProps(src, alt, {
    width,
    height,
    quality,
    sizes,
    priority,
    className,
  });

  // Generate a simple blur placeholder if none provided
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
        style={{ width, height }}
      >
        <span className="text-sm">Image non disponible</span>
      </div>
    );
  }

  return (
    <div className={`relative ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}>
      <Image
        src={optimizedProps.src}
        alt={optimizedProps.alt}
        width={fill ? undefined : optimizedProps.width}
        height={fill ? undefined : optimizedProps.height}
        fill={fill}
        quality={optimizedProps.quality}
        sizes={optimizedProps.sizes}
        priority={optimizedProps.priority}
        className={`${optimizedProps.className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
    </div>
  );
};
