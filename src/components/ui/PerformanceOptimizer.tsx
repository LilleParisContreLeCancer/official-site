'use client';

import { useEffect } from 'react';
import { requestIdleCallback } from '@/utils/performance';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer = ({ children }: PerformanceOptimizerProps) => {
  useEffect(() => {
    // Preload critical resources during idle time
    requestIdleCallback(() => {
      // Preload next page resources
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        const href = (link as HTMLAnchorElement).href;
        if (href && !href.includes('#')) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
        }
      });
    });

    // Optimize images loading
    requestIdleCallback(() => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
              }
              imageObserver.unobserve(img);
            }
          });
        },
        { rootMargin: '50px 0px' }
      );

      images.forEach((img) => imageObserver.observe(img));
    });

    // Cleanup unused resources
    return () => {
      // Remove prefetch links after navigation
      const prefetchLinks = document.querySelectorAll('link[rel="prefetch"]');
      prefetchLinks.forEach((link) => link.remove());
    };
  }, []);

  return <>{children}</>;
};
