import { CarteLien } from './CarteLien';

export const ParticiperSection = () => {
  return (
    <section id="participer" className="w-full bg-secondary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary uppercase mb-6">
            Comment Participer ?
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Rejoignez notre mission contre le cancer ! Que vous soyez entreprise, bénévole,
            cycliste ou simplement solidaire, il y a une place pour vous dans cette aventure.
          </p>
        </div>

        {/* Participation cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          {/* Devenir mécène */}
          <CarteLien
            icon="🤝"
            title="Devenir Mécène"
            description="Entreprises, soutenez notre cause et bénéficiez d'une visibilité exceptionnelle lors de notre événement."
            buttonText="Dossier mécénat"
            href="/mecenat-2025.pdf"
            isExternal={true}
          />

          {/* Être bénévole */}
          <CarteLien
            icon="🙋‍♀️"
            title="Être Bénévole"
            description="Aidez-nous dans l'organisation, la logistique, l'accueil des participants et bien plus encore !"
            buttonText="S'inscrire bénévole"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdEs4ESVjsgF-TCts64iuAWjfjn9-UhmzqNVbH-psIa4IRkVg/viewform?usp=sharing&ouid=103143528588335537779"
            isExternal={true}
          />

          {/* Rouler avec nous */}
          <CarteLien
            icon="🚴‍♂️"
            title="Rouler avec Nous"
            description="Participez au défi sportif Lille-Paris et pédalez pour la recherche contre le cancer."
            buttonText="Inscription cycliste"
            href="https://docs.google.com/forms/d/e/1FAIpQLScEzNOywgQYRFrtdaYGlJY_J0iOzwSvVZw3q4PbUlQNlfMqNg/viewform?usp=sharing&ouid=103143528588335537779"
            isExternal={true}
          />

          {/* Rejoindre la communauté */}
          <CarteLien
            icon="💬"
            title="Rejoindre la Commu"
            description="Suivez nos actualités, échangez avec les participants et restez connectés !"
            buttonText="Rejoindre Discord"
            href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "https://discord.gg/lpcc2025"}
            isExternal={true}
          />
        </div>

        {/* Additional info section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Pourquoi Nous Rejoindre ?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Chaque participation compte dans notre lutte contre le cancer.
              Ensemble, nous transformons l'engagement sportif en espoir médical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Impact */}
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary text-xl font-bold mx-auto mb-4">
                💡
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Impact Réel</h3>
              <p className="text-gray-600">
                100% des dons reversés à la recherche via la Fondation de France
              </p>
            </div>

            {/* Communauté */}
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary text-xl font-bold mx-auto mb-4">
                👥
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Communauté</h3>
              <p className="text-gray-600">
                Rejoignez une famille de passionnés unis par une cause commune
              </p>
            </div>

            {/* Aventure */}
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary text-xl font-bold mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Aventure</h3>
              <p className="text-gray-600">
                Vivez une expérience unique et mémorable au service des autres
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-primary mb-4">
            Des Questions ?
          </h3>
          <p className="text-gray-700 mb-6">
            Notre équipe est là pour vous accompagner dans votre participation.
          </p>
          <a
            href="mailto:lillepariscontrelecancer@mail.com?subject=Question sur la participation LPCC 2025"
            className="primary-button px-8 py-3 font-bold uppercase hover:bg-primary/80 transition-colors inline-flex items-center"
          >
            📧 Nous Contacter
          </a>
        </div>
      </div>
    </section>
  );
};

// Export individual components for reuse
export { CarteLien };
