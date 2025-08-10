import { SimulateurFiscal } from './SimulateurFiscal';
import { PictosSecurite } from './PictosSecurite';
import Image from 'next/image';

export const Dons = () => {
  return (
    <section id="dons" className="relative">
      {/* Header de section */}
      <div className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Faire un Don
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Soutenez la recherche contre le cancer ou notre association. 
            Chaque don compte et bénéficie d'avantages fiscaux de 66%.
          </p>
        </div>
      </div>

      {/* Simulateur fiscal */}
      <SimulateurFiscal />

      {/* Options de dons - Section unifiée */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Choisissez Votre Type de Don
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nous vous proposons deux façons de nous soutenir, chacune avec ses spécificités. 
              Les deux bénéficient de 66% de déduction fiscale.
            </p>
          </div>

          {/* Deux options de don côte à côte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Don pour la recherche */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-lg text-sm font-bold">
                66% déductible
              </div>
              
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Don pour la Recherche
                </h3>
              </div>

              <div className="mb-8">
                <Image 
                  src="/images/fondation-france-logo.svg" 
                  alt="Logo Fondation de France" 
                  width={200} 
                  height={80}
                  className="mx-auto mb-4"
                />
              </div>

              <div className="text-gray-700 mb-8 space-y-3">
                <div className="flex items-start text-left">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% reversé à la recherche contre le cancer</span>
                </div>
                <div className="flex items-start text-left">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reçu fiscal automatique par la Fondation de France</span>
                </div>
                <div className="flex items-start text-left">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Soutient 15 projets de recherche par an</span>
                </div>
              </div>

              <a
                href="https://www.fondationdefrance.org/fr/faire-un-don/lille-paris-contre-le-cancer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                Donner pour la recherche
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Don pour l'association */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-lg text-sm font-bold">
                66% déductible
              </div>
              
              <div className="mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Don pour l'Association
                </h3>
              </div>

              <div className="mb-8">
                <div className="w-32 h-32 bg-primary rounded-full mx-auto flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <div className="font-bold text-sm mb-1">LILLE-PARIS</div>
                    <div className="text-2xl mb-1">🎗️</div>
                    <div className="font-bold text-xs">CONTRE LE CANCER</div>
                  </div>
                </div>
              </div>

              <div className="text-gray-700 mb-8 space-y-3">
                <div className="flex items-start text-left">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Soutient la logistique de nos événements</span>
                </div>
                <div className="flex items-start text-left">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Facture fournie pour vos dons</span>
                </div>
                <div className="flex items-start text-left">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Permet de faire parler de la recherche</span>
                </div>
              </div>

              <a
                href="mailto:contact@lille-paris-contre-le-cancer.fr?subject=Don pour l'association LPCC"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-bold text-lg rounded-lg hover:bg-secondary/90 transition-colors shadow-lg"
              >
                Contacter pour don association
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Informations importantes */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="text-blue-800 font-bold mb-2">Important à savoir</h4>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Déduction fiscale :</strong> 66% de réduction d'impôt dans la limite de 20% de votre revenu imposable.
                </p>
                <p className="text-blue-700 text-sm">
                  <strong>Exemple :</strong> Un don de 100€ ne vous coûte réellement que 34€ après déduction fiscale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pictos de sécurité */}
      <PictosSecurite />
    </section>
  );
};
