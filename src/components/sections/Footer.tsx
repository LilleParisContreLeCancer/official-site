import { FormulaireNewsletter } from '@/components/Newsletter/FormulaireNewsletter';

export const Footer = () => {
  return (
    <footer className="w-full bg-primary">
      {/* Section Newsletter */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Informations Association */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">
              Lille Paris Contre le Cancer
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Association dédiée à la lutte contre le cancer.
              Ensemble, nous finançons la recherche et soutenons les patients.
            </p>
            <div className="space-y-2 text-white/80">
              <p>📧 lillepariscontrelecancer@gmail.com</p>
              <p>🌐 lillepariscontrelecancer.fr</p>
            </div>
          </div>

          {/* Formulaire Newsletter */}
          <div>
            <FormulaireNewsletter />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
            <p>© 2025 Lille Paris Contre le Cancer. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/politique-confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#dons" className="hover:text-white transition-colors">
                Faire un don
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
