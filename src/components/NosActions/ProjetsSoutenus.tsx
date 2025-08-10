'use client';

import { useState } from 'react';
import Image from 'next/image';
import projetsData from '../../../data/projets-soutenus.json';

interface Projet {
  id: string;
  titre: string;
  institut: string;
  logo: string;
  resume: string;
  montant: number;
  annee: number;
  lien_fondation: string;
  statut: 'En cours' | 'Terminé' | 'Nouveau';
}

const StatutBadge = ({ statut }: { statut: Projet['statut'] }) => {
  const styles = {
    'En cours': 'bg-blue-100 text-blue-800 border-blue-200',
    'Terminé': 'bg-green-100 text-green-800 border-green-200',
    'Nouveau': 'bg-purple-100 text-purple-800 border-purple-200'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[statut]}`}>
      {statut}
    </span>
  );
};

export const ProjetsSoutenus = () => {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  
  const projets: Projet[] = projetsData;
  const years = [...new Set(projets.map(p => p.annee))].sort((a, b) => b - a);
  
  const filteredProjets = selectedYear === 'all' 
    ? projets 
    : projets.filter(p => p.annee === selectedYear);

  const totalMontant = projets.reduce((sum, projet) => sum + projet.montant, 0);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Projets Soutenus
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Grâce à vos dons, nous finançons des projets de recherche innovants 
            via la Fondation de France pour lutter contre le cancer.
          </p>
          <div className="inline-flex items-center bg-accent/20 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-gray-700">
              Total financé : <span className="font-bold text-primary">{totalMontant.toLocaleString('fr-FR')} €</span>
            </span>
          </div>
        </div>

        {/* Filtres par année */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedYear('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedYear === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tous
          </button>
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedYear === year
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjets.map((projet) => (
            <div
              key={projet.id}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Header avec logo institut */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src={projet.logo}
                      alt={`Logo ${projet.institut}`}
                      width={48}
                      height={48}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="text-xs text-gray-500 text-center font-medium">
                            ${projet.institut.split(' ').map(word => word[0]).join('')}
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <StatutBadge statut={projet.statut} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {projet.titre}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {projet.institut}
                </p>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {projet.resume}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Financement :</span>
                    <div className="text-lg font-bold text-primary">
                      {projet.montant.toLocaleString('fr-FR')} €
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {projet.annee}
                  </div>
                </div>

                <a
                  href={projet.lien_fondation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Voir sur Fondation de France
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun projet pour l'année sélectionnée.</p>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/10 rounded-xl">
          <h3 className="text-xl font-bold text-primary mb-4">
            Soutenez la recherche avec nous
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Chaque don compte pour financer de nouveaux projets de recherche. 
            Ensemble, nous pouvons faire la différence dans la lutte contre le cancer.
          </p>
          <a
            href="#dons"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Faire un don
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
