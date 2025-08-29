'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Partner {
  id: string;
  name: string;
  logo: string;
  url?: string;
  description?: string;
}

// Partenaires LPCC 2025
const partners: Partner[] = [
  {
    id: 'fondation-france',
    name: 'Fondation de France',
    logo: '/images/partenaires/fondation-france.webp',
    url: 'https://www.fondationdefrance.org',
    description: 'Partenaire principal pour la recherche contre le cancer'
  },
  {
    id: 'epita',
    name: 'EPITA',
    logo: '/images/partenaires/epita.webp',
    url: 'https://www.epita.fr',
    description: 'École d\'ingénieurs en informatique'
  },
  {
    id: 'opal',
    name: 'OPAL',
    logo: '/images/partenaires/opal.webp',
    url: 'https://www.opal-ch.com/',
    description: 'Partenaire logistique et soutien'
  },
  {
    id: 'pour-mon-velo',
    name: 'Pour Mon Vélo',
    logo: '/images/partenaires/pour-mon-velo.webp',
    url: 'https://www.pourmonvelo.com/',
    description: 'Équipement et maintenance vélo'
  },
  {
    id: 'latelier',
    name: 'L\'Atelier',
    logo: '/images/partenaires/latelier.webp',
    url: 'https://www.instagram.com/latelier_maker/',
    description: 'Atelier de réparation et maintenance'
  },
  {
    id: 'procomm-mmc',
    name: 'PROCOMM-MMC',
    logo: '/images/partenaires/procomm-mmc.webp',
    url: 'https://www.procomm-mmc.com/',
    description: 'Communication et marketing'
  }
];

interface PartenairesCarouselProps {
  className?: string;
}

export const PartenairesCarousel = ({ className = '' }: PartenairesCarouselProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">
          Nos Partenaires
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Ils nous font confiance et nous soutiennent dans notre mission.
          Ensemble, nous rendons possible cet événement exceptionnel.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="partners-swiper"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden h-80">

                {/* Logo container */}
                <div className="relative h-40 p-6 flex items-center justify-center bg-gray-50">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ aspectRatio: 'auto' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {partner.name}
                  </h3>
                  {partner.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {partner.description}
                    </p>
                  )}
                  {partner.url && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:text-primary transition-colors text-sm font-semibold"
                      aria-label={`Visiter le site de ${partner.name}`}
                    >
                      Visiter le site
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA section */}
      <div className="text-center mt-12">
        <p className="text-xl text-white mb-6">
          <span className="font-bold">Nous avons besoin du plus grand nombre de partenaires et de soutiens.</span>
          {' '}Plus nous avons de moyens, plus nous pouvons accueillir de participants, et plus notre impact est fort pour la recherche et notre message.
        </p>
        <a
          href="/mecenat-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button px-8 py-3 font-bold uppercase hover:bg-primary/80 transition-colors inline-block"
        >
          📄 Télécharger le dossier mécénat
        </a>
      </div>
    </div>
  );
};
