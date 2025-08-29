import { Header } from '@/components/header/header';
import { Footer } from '@/components/sections/Footer';

export default function PolitiqueConfidentialite() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Qui sommes-nous ?</h2>
              <p className="text-gray-700 leading-relaxed">
                Lille Paris Contre le Cancer (LPCC) est une association à but non lucratif dédiée à la lutte contre le cancer.
                Nous collectons et traitons vos données personnelles dans le respect du Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Quelles données collectons-nous ?</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold mb-3">Newsletter :</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Email</strong> : obligatoire pour l&apos;envoi de la newsletter</li>
                  <li><strong>Prénom</strong> : optionnel, pour personnaliser nos communications</li>
                  <li><strong>Date d&apos;inscription</strong> : automatique, pour le suivi de nos abonnés</li>
                  <li><strong>Consentement</strong> : preuve de votre accord pour recevoir nos communications</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Pourquoi collectons-nous ces données ?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Vous informer de nos actions et événements</li>
                <li>Vous tenir au courant de nos projets de lutte contre le cancer</li>
                <li>Vous proposer des moyens de participer à nos initiatives</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Base légale du traitement</h2>
              <p className="text-gray-700 leading-relaxed">
                Le traitement de vos données repose sur votre <strong>consentement explicite</strong> (article 6.1.a du RGPD).
                Vous pouvez retirer ce consentement à tout moment sans affecter la licéité du traitement fondé sur le consentement effectué avant ce retrait.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Avec qui partageons-nous vos données ?</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Nous utilisons <strong>Formspree</strong> pour gérer notre newsletter.
                  Formspree est conforme RGPD et dispose de certifications de sécurité appropriées.
                  Vos données ne sont jamais vendues à des tiers.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Combien de temps conservons-nous vos données ?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Abonnés actifs</strong> : tant que vous restez abonné à notre newsletter</li>
                <li><strong>Après désinscription</strong> : suppression immédiate de nos listes actives</li>
                <li><strong>Données de contact</strong> : conservées selon les obligations légales (maximum 3 ans)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Vos droits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">✅ Droit d&apos;accès</h3>
                  <p className="text-sm text-green-700">Connaître les données que nous détenons sur vous</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">✏️ Droit de rectification</h3>
                  <p className="text-sm text-blue-700">Corriger vos données inexactes</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">🗑️ Droit à l&apos;effacement</h3>
                  <p className="text-sm text-red-700">Demander la suppression de vos données</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">📤 Droit à la portabilité</h3>
                  <p className="text-sm text-purple-700">Récupérer vos données dans un format lisible</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Comment exercer vos droits ?</h2>
              <div className="bg-accent p-6 rounded-lg">
                <p className="text-primary font-medium mb-4">
                  Pour exercer vos droits ou pour toute question relative à cette politique :
                </p>
                <ul className="text-primary space-y-2">
                  <li><strong>📧 Email :</strong> contact@lille-paris-contre-cancer.org</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Sécurité de vos données</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Chiffrement des données en transit et au repos</li>
                <li>Accès limité aux données par des personnes autorisées</li>
                <li>Surveillance et audit réguliers de nos systèmes</li>
                <li>Formation de notre équipe aux bonnes pratiques RGPD</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">10. Modifications de cette politique</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous pouvons modifier cette politique de confidentialité. En cas de changement significatif,
                nous vous en informerons par email ou via une notification sur notre site web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">11. Réclamations</h2>
              <p className="text-gray-700 leading-relaxed">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
                auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
                <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  www.cnil.fr
                </a>
              </p>
            </section>

            <div className="bg-primary text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">🛡️ Notre engagement</h3>
              <p>
                Lille Paris Contre le Cancer s&apos;engage à respecter votre vie privée et à protéger vos données personnelles
                conformément aux réglementations en vigueur.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
