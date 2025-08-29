'use client';

import { useState } from 'react';
import { CompteARebours } from './CompteARebours';

interface CarteParcoursProps {
  className?: string;
}

export const CarteParcours = ({ className = '' }: CarteParcoursProps) => {
  const [isLiveMode] = useState(false);

  // URL Google My Maps - version embed pour l'iframe
  const mapUrl = "https://www.google.com/maps/d/embed?mid=1MbuWa5VOb9VGjjN5czfxHSlM0nCKgEQ&ehbc=2E312F";

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-bobby-rough">
          Notre Parcours
        </h2>
        <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          Découvrez l&apos;itinéraire de notre périple de Lille à Paris,
          un parcours de plus de 300 kilomètres au service de la recherche contre le cancer.
          Les <span className="font-semibold">27 et 28 décembre</span>, nous roulons pour profiter de l&apos;élan des fêtes :
          une période de générosité, de chaleur et de partage. Plus nous sommes nombreux, plus notre message
          porte loin et plus nous renforçons l&apos;impact de la recherche. Chaque coup de pédale est un geste
          d&apos;espoir pour celles et ceux qui en ont besoin.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Map container */}
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Map header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Lille → Paris</h3>
              <p className="text-sm opacity-90">
                {isLiveMode ? 'Suivi en temps réel' : 'Itinéraire prévisionnel'}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">~300 km</div>
              <div className="text-sm opacity-90">Distance totale</div>
            </div>
          </div>

          {/* Map iframe */}
          <div className="relative h-96 md:h-[500px]">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Parcours Lille-Paris contre le Cancer"
              className="w-full h-full"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            ></iframe>

            {/* Live mode overlay */}
            {isLiveMode && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🔴 LIVE
              </div>
            )}
          </div>

          {/* Map footer with key info */}
          <div className="bg-gray-50 p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center items-stretch">
              {/* Inline countdown */}
              <div className="flex items-center justify-center">
                <CompteARebours variant="inline" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">2 jours</div>
                <div className="text-sm text-gray-600">Durée du parcours</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">16 étapes</div>
                <div className="text-sm text-gray-600">Points de passage</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-tertiary">15 km/h</div>
                <div className="text-sm text-gray-600">Vitesse moyenne</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          {/* Departure info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                🚴
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-primary">Départ</h4>
                <p className="text-gray-600">Lille - Grand Place</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Le départ sera donné depuis la magnifique Grand Place de Lille,
              symbole de notre région et point de rassemblement de tous les participants.
            </p>
          </div>

          {/* Arrival info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary text-xl font-bold">
                🏁
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-primary">Arrivée</h4>
                <p className="text-gray-600">Paris - Tour Eiffel</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              L&apos;arrivée se fera au pied de la Tour Eiffel, monument emblématique
              qui marquera l&apos;aboutissement de notre défi sportif et solidaire.
            </p>
          </div>
        </div>

        {/* GPX Download section */}
        <div className="text-center mt-8 p-6 bg-gray-50 rounded-xl">
          <h4 className="text-lg font-bold text-primary mb-4">
            Télécharger le parcours
          </h4>
          <p className="text-gray-700 mb-6">
            Récupérez le fichier GPX pour suivre notre itinéraire sur votre GPS ou application mobile.
          </p>
          <a
            href="/parcours/edition-2025.gpx"
            download
            className="primary-button px-6 py-3 font-bold uppercase hover:bg-primary/80 transition-colors inline-flex items-center"
          >
            📍 Télécharger le GPX
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
