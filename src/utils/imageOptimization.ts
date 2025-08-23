// Image optimization utilities for better performance

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

// Default image quality settings for different use cases
export const IMAGE_QUALITY = {
  HIGH: 90,      // For hero images, important visuals
  MEDIUM: 80,    // For general content images
  LOW: 60,       // For thumbnails, background images
  THUMBNAIL: 50, // For very small images
} as const;

// Common responsive image sizes
export const RESPONSIVE_SIZES = {
  HERO: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw",
  CARD: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  THUMBNAIL: "(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw",
  PORTRAIT: "(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw",
  LOGO: "200px",
} as const;

// Generate optimized image props
export function getOptimizedImageProps(
  src: string,
  alt: string,
  options: {
    width?: number;
    height?: number;
    quality?: keyof typeof IMAGE_QUALITY;
    sizes?: keyof typeof RESPONSIVE_SIZES;
    priority?: boolean;
    className?: string;
  } = {}
): OptimizedImageProps {
  const {
    width,
    height,
    quality = 'MEDIUM',
    sizes = 'CARD',
    priority = false,
    className = '',
  } = options;

  return {
    src,
    alt,
    width,
    height,
    quality: IMAGE_QUALITY[quality],
    priority,
    className,
    sizes: RESPONSIVE_SIZES[sizes],
  };
}

// Convert image to WebP format URL (for manual optimization)
export function getWebPUrl(originalUrl: string): string {
  if (originalUrl.endsWith('.svg')) {
    return originalUrl; // SVGs don't need WebP conversion
  }
  
  const extension = originalUrl.split('.').pop();
  if (extension && ['jpg', 'jpeg', 'png'].includes(extension.toLowerCase())) {
    return originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  
  return originalUrl;
}

// Preload critical images
export function preloadImage(src: string, as: 'image' = 'image'): void {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = src;
    document.head.appendChild(link);
  }
}

// Lazy load images with intersection observer
export function createImageObserver(callback: (entry: IntersectionObserverEntry) => void) {
  if (typeof window === 'undefined') return null;

  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      rootMargin: '50px 0px', // Start loading 50px before image comes into view
      threshold: 0.1,
    }
  );
}
