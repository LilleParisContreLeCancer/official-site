import { SimulateurFiscal } from './SimulateurFiscal';
import { Explications } from './Explications';
import { PictosSecurite } from './PictosSecurite';

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
            Chaque don compte et bénéficie d'avantages fiscaux.
          </p>
        </div>
      </div>

      {/* Simulateur fiscal */}
      <SimulateurFiscal />

      {/* Explications des types de dons */}
      <div id="explications">
        <Explications />
      </div>

      {/* Pictos de sécurité */}
      <PictosSecurite />

      {/* Call to action final */}
      <div className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Nous Soutenir ?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Choisissez le type de don qui vous correspond et contribuez à notre mission 
            de lutte contre le cancer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <a
              href="https://www.fondationdefrance.org/fr/faire-un-don/lille-paris-contre-le-cancer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Don Recherche
            </a>
            
            <a
              href="#paiement-lpcc"
              className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-primary transition-colors shadow-lg"
            >
              <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Don Association
            </a>
          </div>

          <p className="text-sm opacity-75 mt-6">
            Les deux options bénéficient de 66% de déduction fiscale
          </p>
        </div>
      </div>
    </section>
  );
};
