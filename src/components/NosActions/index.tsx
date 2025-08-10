import { GaleriePhotos } from './GaleriePhotos';
import { StatsDynamiques } from './StatsDynamiques';
import { ProjetsSoutenus } from './ProjetsSoutenus';

export const NosActions = () => {
  return (
    <section id="nos-actions" className="relative">
      {/* Header de section */}
      <div className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Actions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Découvrez notre impact concret dans la lutte contre le cancer : 
            nos réalisations, nos chiffres et les projets de recherche que nous soutenons.
          </p>
        </div>
      </div>

      {/* Statistiques dynamiques */}
      <StatsDynamiques />

      {/* Projets soutenus */}
      <ProjetsSoutenus />

      {/* Galerie photos */}
      <GaleriePhotos />

      {/* Call to action final */}
      <div className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez Notre Mission
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Ensemble, nous pouvons faire encore plus pour la recherche contre le cancer. 
            Chaque geste compte, chaque don fait la différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#dons"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Faire un don
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </a>
            <a
              href="#participer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Participer
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
