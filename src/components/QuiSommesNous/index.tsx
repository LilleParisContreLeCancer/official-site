import { Portraits } from './Portraits';
import { PartenairesCarousel } from './PartenairesCarousel';
import { CarteParcours } from './CarteParcours';

export const QuiSommesNousSection = () => {
  return (
    <section id="qui-sommes-nous" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary uppercase mb-6">
            Qui sommes-nous ?
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Lille-Paris Contre le Cancer est une association dédiée à soutenir la recherche médicale 
            à travers des événements sportifs et solidaires. Notre mission : transformer chaque coup de pédale 
            en espoir pour les patients et leurs familles.
          </p>
          <div className="mt-8">
            <a
              href="#portraits"
              className="primary-button px-8 py-3 font-bold uppercase hover:bg-primary/80 transition-colors inline-block"
            >
              Rencontrez l'équipe
            </a>
          </div>
        </div>

        {/* Team portraits */}
        <div id="portraits" className="mb-20">
          <Portraits />
        </div>

        {/* Partners carousel */}
        <div className="mb-20">
          <PartenairesCarousel />
        </div>

        {/* Route map */}
        <div>
          <CarteParcours />
        </div>

      </div>
    </section>
  );
};

// Export individual components for reuse
export { Portraits, PartenairesCarousel, CarteParcours };
