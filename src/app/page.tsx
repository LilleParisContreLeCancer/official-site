'use client';

import { Header } from '@/components/header/header';
import { AccueilSection } from '@/components/Accueil';
import { QuiSommesNousSection } from '@/components/QuiSommesNous';
import { Footer } from '@/components/sections/Footer';
import { FloatingDonButton } from '@/components/FloatingDonButton';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={'flex flex-col'}>
      <Header />
      <AccueilSection />
      <QuiSommesNousSection />
      
      {/* Navigation vers les autres pages */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Découvrez Notre Mission
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Explorez nos différentes façons d&apos;agir ensemble contre le cancer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Participer */}
            <Link href="/participer" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-2xl font-bold mb-4">Participer</h3>
                <p className="text-white/90 mb-6">
                  Devenez mécène, bénévole, cycliste ou rejoignez notre communauté
                </p>
                <div className="bg-white text-primary px-6 py-3 rounded-lg font-semibold group-hover:bg-gray-100 transition-colors">
                  Découvrir →
                </div>
              </div>
            </Link>

            {/* Nos Actions */}
            <Link href="/nos-actions" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-6xl mb-6">📊</div>
                <h3 className="text-2xl font-bold mb-4">Nos Actions</h3>
                <p className="text-white/90 mb-6">
                  Découvrez notre impact, nos chiffres et les projets soutenus
                </p>
                <div className="bg-white text-primary px-6 py-3 rounded-lg font-semibold group-hover:bg-gray-100 transition-colors">
                  Voir nos résultats →
                </div>
              </div>
            </Link>

            {/* Vos Dons */}
            <Link href="/vos-dons" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-6xl mb-6">💝</div>
                <h3 className="text-2xl font-bold mb-4">Vos Dons</h3>
                <p className="text-white/90 mb-6">
                  Soutenez la recherche avec 66% de déduction fiscale
                </p>
                <div className="bg-accent text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-accent/90 transition-colors">
                  Faire un don →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingDonButton />
    </div>
  );
}
