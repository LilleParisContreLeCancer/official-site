'use client';

import Image from 'next/image';

export const DonationSection = () => {
  return (
    <div className={'bg-secondary flex flex-col items-center justify-center w-full py-16 md:py-24 px-4'}>
      <div className={'w-full max-w-7xl'}>
        {/* Title */}
        <h1 className={'text-center text-4xl md:text-6xl font-bold text-accent uppercase mb-16'}>
          FAIRE UN DON
        </h1>

        {/* Two donation options */}
        <div className={'flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'}>
          
          {/* Left section - Research donations */}
          <div className={'flex-1 flex flex-col items-center text-center relative'}>
            <h2 className={'text-lg md:text-xl font-bold text-primary uppercase mb-8 max-w-sm leading-tight'}>
              DONS POUR LA RECHERCHE,<br />
              DÉDUCTIBLE D'IMPÔTS À HAUTEUR<br />
              DE <span className="text-accent text-2xl">66%</span>
            </h2>
            
            {/* Curved arrow pointing down to logo */}
            <div className={'relative mb-6'}>
              <svg width="120" height="80" viewBox="0 0 120 80" className="text-accent absolute -top-4 left-1/2 transform -translate-x-1/2">
                <path 
                  d="M20 20 Q 60 10, 100 20 Q 90 40, 60 60" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="none" 
                  markerEnd="url(#arrowhead1)"
                />
                <defs>
                  <marker id="arrowhead1" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="currentColor"/>
                  </marker>
                </defs>
              </svg>
            </div>
              
            <a 
              href="https://www.fondationdefrance.org/fr/fondation/fondation-de-france" 
              target="_blank" 
              rel="noopener noreferrer"
              className={'block bg-white p-6 rounded-lg shadow-lg mb-8 mt-12 hover:shadow-xl transition-shadow duration-300 cursor-pointer'}
            >
              <Image 
                src={'/images/fondation-france-logo.svg'} 
                alt={'Logo Fondation de France'} 
                width={200} 
                height={120}
                className="object-contain"
              />
            </a>

            <div className={'text-sm md:text-base text-primary max-w-md leading-relaxed'}>
              <p className={'mb-4'}>
                GRÂCE À VOS DONS, LE PROGRAMME DE LA <span className="font-bold text-accent">FONDATION DE FRANCE</span> "RÉSISTANCE AUX TRAITEMENTS EN CANCÉROLOGIE" SOUTIENT CHAQUE ANNÉE UNE QUINZAINE DE PROJETS AVEC DEUX MILLIONS D'EUROS.
              </p>
              <p className={'font-bold text-accent mb-6'}>
                MERCI POUR VOTRE GÉNÉROSITÉ !
              </p>
              <a 
                href="https://www.fondationdefrance.org/fr/fondation/fondation-de-france" 
                target="_blank" 
                rel="noopener noreferrer"
                className="primary-button px-6 py-3 inline-block font-bold uppercase hover:bg-primary/80 transition-colors"
              >
                Faire un don recherche
              </a>
            </div>
          </div>

          {/* Center - ET/OU */}
          <div className={'flex items-center justify-center px-8'}>
            <h3 className={'text-4xl md:text-5xl font-bold text-primary'}>
              ET/OU
            </h3>
          </div>

          {/* Right section - Logistics donations */}
          <div className={'flex-1 flex flex-col items-center text-center relative'}>
            <h2 className={'text-lg md:text-xl font-bold text-primary uppercase mb-8 max-w-sm leading-tight'}>
              DONS POUR LA LOGISTIQUE DE<br />
              LPCC, AVEC FACTURE
            </h2>
            
            {/* Curved arrow pointing down to logo */}
            <div className={'relative mb-6'}>
              <svg width="120" height="80" viewBox="0 0 120 80" className="text-accent absolute -top-4 left-1/2 transform -translate-x-1/2 scale-x-[-1]">
                <path 
                  d="M20 20 Q 60 10, 100 20 Q 90 40, 60 60" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="none" 
                  markerEnd="url(#arrowhead2)"
                />
                <defs>
                  <marker id="arrowhead2" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="currentColor"/>
                  </marker>
                </defs>
              </svg>
            </div>
              
            <button 
              onClick={() => window.open('mailto:contact@lille-paris-contre-le-cancer.fr?subject=Don pour la logistique LPCC', '_blank')}
              className={'block bg-white p-6 rounded-full shadow-lg mb-8 w-48 h-48 flex items-center justify-center mt-12 hover:shadow-xl transition-shadow duration-300 cursor-pointer'}
            >
              <div className={'text-center'}>
                <div className={'text-primary font-bold text-base mb-2'}>LILLE-PARIS</div>
                <div className={'w-16 h-16 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center'}>
                  <div className={'text-white text-2xl'}>🎗️</div>
                </div>
                <div className={'text-primary font-bold text-sm'}>CONTRE LE CANCER</div>
              </div>
            </button>

            <div className={'text-sm md:text-base text-primary max-w-md leading-relaxed'}>
              <p className={'mb-4'}>
                GRÂCE À VOS DONS, VOUS NOUS AIDEZ À LA LOGISTIQUE DE NOS ÉVÉNEMENTS, ET NOUS POURRONS FAIRE PARLER DE LA RECHERCHE BIEN PLUS EFFICACEMENT.
              </p>
              <p className={'font-bold text-accent mb-6'}>
                MERCI POUR VOTRE GÉNÉROSITÉ !
              </p>
              <button 
                onClick={() => window.open('mailto:contact@lille-paris-contre-le-cancer.fr?subject=Don pour la logistique LPCC', '_blank')}
                className="primary-button px-6 py-3 font-bold uppercase hover:bg-primary/80 transition-colors"
              >
                Contacter pour don logistique
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
