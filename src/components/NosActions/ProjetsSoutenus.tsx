export const ProjetsSoutenus = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Projets Soutenus
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Grâce à vos dons, nous soutenons la recherche contre le cancer via la Fondation de France. 
            Chaque année, plus de 400 000 nouveaux cas de cancer sont diagnostiqués en France. 
            Découvrez tous les projets de recherche financés par la Fondation de France.
          </p>
        </div>

        {/* Redirection vers Fondation de France */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/10 rounded-xl p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Découvrez tous les projets de recherche
              </h3>
              <p className="text-gray-600 mb-6">
                Consultez l'ensemble des projets de recherche contre le cancer 
                financés par la Fondation de France et soutenus par nos dons.
              </p>
            </div>
            
            <a
              href="https://www.fondationdefrance.org/fr/cancer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Voir les projets sur Fondation de France
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Call to action pour les dons */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/5 rounded-xl">
          <h3 className="text-xl font-bold text-primary mb-4">
            Soutenez la recherche avec nous
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Chaque don compte pour financer de nouveaux projets de recherche. 
            La recherche contre le cancer progresse grâce à votre soutien.
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
