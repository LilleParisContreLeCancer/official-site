'use client';

import { useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { LazyImage } from '@/components/ui/LazyImage';
import { LazySection } from '@/components/ui/LazySection';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  year: number;
  category: 'parcours' | 'equipe' | 'evenement';
  width: number;
  height: number;
}

// Données d'exemple - à remplacer par un fichier JSON
const photosData: Photo[] = [
  {
    id: '1',
    src: '/images/actions/2024-depart-lille.jpg',
    alt: 'Départ de Lille 2024',
    title: 'Départ de Lille - Édition 2024',
    year: 2024,
    category: 'parcours',
    width: 800,
    height: 600
  },
  {
    id: '2',
    src: '/images/actions/2024-equipe-velo.jpg',
    alt: 'Équipe cyclistes 2024',
    title: 'Notre équipe de cyclistes',
    year: 2024,
    category: 'equipe',
    width: 800,
    height: 600
  },
  {
    id: '3',
    src: '/images/actions/2023-arrivee-paris.jpg',
    alt: 'Arrivée à Paris 2023',
    title: 'Arrivée triomphale à Paris',
    year: 2023,
    category: 'parcours',
    width: 800,
    height: 600
  },
  {
    id: '4',
    src: '/images/actions/2022-preparation-velos.jpg',
    alt: 'Préparation vélos 2022',
    title: 'Préparation des vélos avant le départ',
    year: 2022,
    category: 'equipe',
    width: 800,
    height: 600
  },
  {
    id: '5',
    src: '/images/actions/equipe-benevoles.jpg',
    alt: 'Equipe bénévoles',
    title: 'Notre équipe de bénévoles',
    year: 2024,
    category: 'equipe',
    width: 800,
    height: 600
  },
  {
    id: '6',
    src: '/images/actions/equipe-benevoles-2.jpg',
    alt: 'Equipe bénévoles',
    title: 'Notre équipe de bénévoles',
    year: 2024,
    category: 'equipe',
    width: 800,
    height: 600
  }
];

const categories = [
  { key: 'all', label: 'Toutes' },
  { key: 'parcours', label: 'Parcours' },
  { key: 'equipe', label: 'Équipe' },
];

export const GaleriePhotos = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const years = [...new Set(photosData.map(p => p.year))].sort((a, b) => b - a);

  const filteredPhotos = photosData.filter(photo => {
    const categoryMatch = selectedCategory === 'all' || photo.category === selectedCategory;
    const yearMatch = selectedYear === 'all' || photo.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  const lightboxSlides = filteredPhotos.map(photo => ({
    src: photo.src,
    alt: photo.alt,
    title: photo.title
  }));

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Galerie Photos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Revivez les moments forts de nos éditions à travers notre galerie photo
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 self-center mr-2">Catégorie :</span>
            {categories.map(category => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.key
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Filtres par année */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 self-center mr-2">Année :</span>
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedYear === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              Toutes
            </button>
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedYear === year
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de photos */}
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => openLightbox(index)}
              >
                <LazyImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality="MEDIUM"
                  sizes="CARD"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  rootMargin="100px 0px"
                />

                {/* Overlay avec titre */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-medium text-sm mb-1">{photo.title}</h3>
                    <p className="text-xs text-gray-200">{photo.year}</p>
                  </div>
                </div>

                {/* Icône zoom */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 p-1.5 rounded-full">
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-500">Aucune photo trouvée pour les filtres sélectionnés.</p>
          </div>
        )}

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxSlides}
          plugins={[]}
          carousel={{
            finite: true,
            preload: 2
          }}
          render={{
            buttonPrev: lightboxSlides.length <= 1 ? () => null : undefined,
            buttonNext: lightboxSlides.length <= 1 ? () => null : undefined,
          }}
        />

        {/* Informations sur les photos */}
        <div className="text-center mt-8 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            {filteredPhotos.length} photo{filteredPhotos.length > 1 ? 's' : ''} •
            Cliquez sur une image pour l&apos;agrandir
          </p>
        </div>
      </div>
    </div>
  );
};
