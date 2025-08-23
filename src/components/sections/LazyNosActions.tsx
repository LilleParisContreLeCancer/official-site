'use client';

import dynamic from 'next/dynamic';
import { LazyWrapper } from '@/components/ui/LazyWrapper';

// Lazy load the heavy components
const GaleriePhotos = dynamic(() => import('@/components/NosActions/GaleriePhotos').then(mod => ({ default: mod.GaleriePhotos })), {
  ssr: false
});

const ProjetsSoutenus = dynamic(() => import('@/components/NosActions/ProjetsSoutenus').then(mod => ({ default: mod.ProjetsSoutenus })), {
  ssr: false
});

const StatsDynamiques = dynamic(() => import('@/components/NosActions/StatsDynamiques').then(mod => ({ default: mod.StatsDynamiques })), {
  ssr: false
});

// Skeleton for the section
const NosActionsSkeleton = () => (
  <section className="w-full bg-gray-50 py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-6"></div>
        <div className="h-6 bg-gray-200 rounded w-full max-w-4xl mx-auto mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
      </div>
      
      {/* Stats skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 shadow-lg animate-pulse">
            <div className="h-16 bg-gray-200 rounded mb-4"></div>
            <div className="h-8 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>

      {/* Gallery skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
        ))}
      </div>

      {/* Projects skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
            <div className="h-6 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const LazyNosActions = () => {
  return (
    <LazyWrapper
      rootMargin="200px 0px"
      fallback={<NosActionsSkeleton />}
      className="w-full"
    >
      <section id="nos-actions" className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-bobby-rough">
              Nos Actions
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos initiatives concrètes pour soutenir la recherche contre le cancer.
              Chaque action compte, chaque geste fait la différence.
            </p>
          </div>

          {/* Statistics */}
          <StatsDynamiques className="mb-16" />

          {/* Photo Gallery */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Galerie Photos
            </h3>
            <GaleriePhotos />
          </div>

          {/* Supported Projects */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Projets Soutenus
            </h3>
            <ProjetsSoutenus />
          </div>
        </div>
      </section>
    </LazyWrapper>
  );
};
