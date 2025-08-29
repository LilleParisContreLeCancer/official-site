'use client';

import Image from 'next/image';
import donsData from '../../../data/dons-info.json';

export const PictosSecurite = () => {
  const { securite } = donsData;

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sécurité & Confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vos dons sont traités avec les plus hauts standards de sécurité
          </p>
        </div>

        {/* Certifications de sécurité */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {securite.certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src={cert.logo}
                  alt={`Logo ${cert.nom}`}
                  width={64}
                  height={64}
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="text-2xl font-bold text-primary">${cert.nom}</div>
                    `;
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {cert.nom}
              </h3>
              <p className="text-gray-600">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Informations de sécurité détaillées */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sécurité technique */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Protection des Données
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Chiffrement SSL/TLS</strong> : Toutes vos données sont chiffrées lors de la transmission
                  </span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Conformité PCI DSS</strong> : Standards de sécurité pour les paiements par carte
                  </span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    Vos données personnelles sont protégées et ne seront jamais partagées avec des tiers sans votre consentement explicite. Nous respectons strictement les réglementations RGPD en vigueur.
                  </span>
                </div>
              </div>
            </div>

            {/* Transparence */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Transparence Totale
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Reçus fiscaux automatiques</strong> : Justificatifs envoyés immédiatement
                  </span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Suivi des projets</strong> : Rapports réguliers sur l&apos;utilisation des fonds
                  </span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Contact direct</strong> : Équipe disponible pour toute question
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partenaires de confiance */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Nos Partenaires de Confiance
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center flex flex-col items-center">
              <Image
                src="/images/partenaires/fondation-france.png"
                alt="Logo Fondation de France"
                width={80}
                height={40}
                className="object-contain mb-2"
              />
              <div className="text-lg font-semibold text-gray-700">Fondation de France</div>
              <div className="text-sm text-gray-500">Partenaire officiel</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center flex flex-col items-center">
              <Image
                src="/images/partenaires/sumup.png"
                alt="Logo SumUp"
                width={80}
                height={40}
                className="object-contain mb-2"
              />
              <div className="text-lg font-semibold text-gray-700">SumUp</div>
              <div className="text-sm text-gray-500">Paiement sécurisé</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center flex flex-col items-center">
              <Image
                src="/images/partenaires/payasso.png"
                alt="Logo PayAsso"
                width={80}
                height={40}
                className="object-contain mb-2"
              />
              <div className="text-lg font-semibold text-gray-700">PayAsso</div>
              <div className="text-sm text-gray-500">Solution associative</div>
            </div>
          </div>
        </div>

        {/* Contact sécurité */}
        <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-primary mb-2">
              Questions sur la sécurité ?
            </h4>
            <p className="text-gray-600 mb-4">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant la sécurité de vos dons.
            </p>
            <a
              href="mailto:securite@lille-paris-contre-le-cancer.fr"
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              lillepariscontrelecancer@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
