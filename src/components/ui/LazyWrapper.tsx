'use client';

import { ReactNode, Suspense } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
  minHeight?: string;
}

const DefaultSkeleton = () => (
  <div className="animate-pulse py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-6"></div>
        <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-lg h-64"></div>
        ))}
      </div>
    </div>
  </div>
);

export const LazyWrapper = ({
  children,
  fallback,
  rootMargin = '100px 0px',
  threshold = 0.1,
  className = '',
  minHeight = 'auto',
}: LazyWrapperProps) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div 
      ref={elementRef}
      className={className}
      style={{ minHeight }}
    >
      {hasIntersected ? (
        <Suspense fallback={fallback || <DefaultSkeleton />}>
          {children}
        </Suspense>
      ) : (
        fallback || <DefaultSkeleton />
      )}
    </div>
  );
};
