'use client';

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  rootMargin?: string;
  threshold?: number;
  fallback?: ReactNode;
  minHeight?: string;
}

export const LazySection = ({
  children,
  className = '',
  id,
  rootMargin = '200px 0px',
  threshold = 0.1,
  fallback,
  minHeight = 'auto',
}: LazySectionProps) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div 
      ref={elementRef}
      id={id}
      className={className}
      style={{ minHeight }}
    >
      {hasIntersected ? (
        children
      ) : (
        fallback || (
          <div className="flex items-center justify-center py-20">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-80"></div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
