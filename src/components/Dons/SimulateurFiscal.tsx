'use client';

import { useState, useEffect } from 'react';
import donsData from '../../../data/dons-info.json';

export const SimulateurFiscal = () => {
  const [montant, setMontant] = useState<number>(100);
  const [deduction, setDeduction] = useState<number>(0);
  const [coutNet, setCoutNet] = useState<number>(0);

  const { simulateur } = donsData;

  // Calcul automatique des valeurs
  useEffect(() => {
    const calculDeduction = Math.round(montant * simulateur.taux_deduction * 100) / 100;
    const calculCoutNet = Math.round((montant - calculDeduction) * 100) / 100;
    
    setDeduction(calculDeduction);
    setCoutNet(calculCoutNet);
  }, [montant, simulateur.taux_deduction]);

  const handleMontantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setMontant(Math.max(0, value));
  };

  const setMontantPredefini = (value: number) => {
    setMontant(value);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-accent/10 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simulateur Fiscal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Calculez votre avantage fiscal pour les dons à la Fondation de France
          </p>
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
            <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-blue-700">
              Uniquement pour les dons recherche (Fondation de France)
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Input montant */}
            <div className="mb-8">
              <label htmlFor="montant" className="block text-lg font-semibold text-gray-900 mb-4">
                Montant de votre don
              </label>
              
              {/* Boutons montants prédéfinis */}
              <div className="flex flex-wrap gap-2 mb-4">
                {simulateur.exemples.map((exemple) => (
                  <button
                    key={exemple.montant}
                    onClick={() => setMontantPredefini(exemple.montant)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      montant === exemple.montant
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {exemple.montant} €
                  </button>
                ))}
              </div>

              {/* Input personnalisé */}
              <div className="relative">
                <input
                  type="number"
                  id="montant"
                  value={montant}
                  onChange={handleMontantChange}
                  min="0"
                  step="1"
                  className="w-full px-4 py-3 text-2xl font-bold text-center border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Entrez un montant"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-500">
                  €
                </span>
              </div>
            </div>

            {/* Résultats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Montant du don */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Montant du don
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {montant.toLocaleString('fr-FR')} €
                </div>
              </div>

              {/* Déduction fiscale */}
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="text-sm font-medium text-green-600 mb-2">
                  Déduction fiscale (66%)
                </div>
                <div className="text-3xl font-bold text-green-700">
                  {deduction.toLocaleString('fr-FR')} €
                </div>
              </div>

              {/* Coût net */}
              <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="text-sm font-medium text-primary mb-2">
                  Coût réel pour vous
                </div>
                <div className="text-3xl font-bold text-primary">
                  {coutNet.toLocaleString('fr-FR')} €
                </div>
              </div>
            </div>

            {/* Explication visuelle */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Comment ça marche ?
              </h3>
              
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
                  <span>Don : {montant} €</span>
                </div>
                <span className="text-gray-400">-</span>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span>Déduction : {deduction} €</span>
                </div>
                <span className="text-gray-400">=</span>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded mr-2"></div>
                  <span className="font-semibold">Coût réel : {coutNet} €</span>
                </div>
              </div>
            </div>

            {/* Avertissements */}
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <p className="text-yellow-800 text-sm font-medium mb-1">
                      Calcul indicatif
                    </p>
                    <p className="text-yellow-700 text-sm">
                      Ce simulateur donne une estimation. La déduction fiscale réelle dépend de votre situation personnelle. 
                      Consultez votre comptable ou les services fiscaux pour une information précise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-blue-800 text-sm font-medium mb-1">
                      Plafond de déduction
                    </p>
                    <p className="text-blue-700 text-sm">
                      La déduction fiscale est limitée à {simulateur.plafond_deduction}% de votre revenu imposable. 
                      L'excédent peut être reporté sur les 5 années suivantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Prêt à faire un don ? Choisissez votre destination :
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#explications"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Voir les options de don
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
