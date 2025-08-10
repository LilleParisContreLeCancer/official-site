import { Portraits } from './Portraits';
import { PartenairesCarousel } from './PartenairesCarousel';
import { CarteParcours } from './CarteParcours';

export const QuiSommesNousSection = () => {
  return (
    <section id="qui-sommes-nous" className="w-full bg-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-bobby-rough">
            Qui sommes-nous ?
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Lille Paris Contre le Cancer est une association dédiée à la lutte contre le cancer 
            à travers le financement de la recherche médicale et le soutien aux patients et leurs familles.
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
