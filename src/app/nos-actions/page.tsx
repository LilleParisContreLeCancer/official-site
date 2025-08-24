import type { Metadata } from 'next';
import Link from 'next/link';
import { GaleriePhotos } from '@/components/NosActions/GaleriePhotos';

export const metadata: Metadata = {
    title: 'Nos Actions - Lille-Paris contre le cancer',
    description: 'Découvrez notre impact concret dans la lutte contre le cancer : nos réalisations, nos chiffres et les projets de recherche que nous soutenons.',
};

// Galerie photos interactive déplacée dans le composant GaleriePhotos

export default function NosActionsPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Nos Actions
                        </h1>
                        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
                            Découvrez notre impact concret dans la lutte contre le cancer :
                            nos réalisations, nos chiffres et les projets de recherche que nous soutenons.
                        </p>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-white shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                            Accueil
                        </Link>
                        <Link href="/participer" className="text-gray-600 hover:text-primary transition-colors">
                            Participer
                        </Link>
                        <span className="text-primary font-semibold">Nos Actions</span>
                        <Link href="/vos-dons" className="text-gray-600 hover:text-primary transition-colors">
                            Vos Dons
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Impact en Chiffres */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Notre Impact en Chiffres
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Découvrez notre impact concret dans la lutte contre le cancer.
                            Nos réalisations, nos chiffres et les projets de recherche que nous soutenons.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl text-center">
                            <div className="text-4xl font-bold mb-2">4</div>
                            <div className="text-lg font-semibold mb-1">Éditions</div>
                            <div className="text-sm opacity-90">Depuis 2021</div>
                        </div>

                        <div className="bg-gradient-to-br from-accent to-tertiary text-white p-8 rounded-2xl text-center">
                            <div className="text-4xl font-bold mb-2">1 087</div>
                            <div className="text-lg font-semibold mb-1">Kilomètres parcourus</div>
                            <div className="text-sm opacity-90">Au total depuis le début</div>
                        </div>

                        <div className="bg-gradient-to-br from-secondary to-primary text-white p-8 rounded-2xl text-center">
                            <div className="text-4xl font-bold mb-2">10 530</div>
                            <div className="text-lg font-semibold mb-1">Euros récoltés</div>
                            <div className="text-sm opacity-90">Pour la recherche contre le cancer</div>
                        </div>

                        <div className="bg-gradient-to-br from-tertiary to-accent text-white p-8 rounded-2xl text-center">
                            <div className="text-4xl font-bold mb-2">30</div>
                            <div className="text-lg font-semibold mb-1">Participants</div>
                            <div className="text-sm opacity-90">Cyclistes et bénévoles cumulés</div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-500">Dernière mise à jour : 23/08/2025</p>
                    </div>
                </div>
            </section>

            {/* Projets Soutenus */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Projets Soutenus
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                            Grâce à vos dons, nous soutenons la recherche contre le cancer via la Fondation de France.
                            Chaque année, plus de 400 000 nouveaux cas de cancer sont diagnostiqués en France.
                            Découvrez tous les projets de recherche financés par la Fondation de France.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-primary mb-4">
                                Découvrez tous les projets de recherche
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Consultez l&apos;ensemble des projets de recherche contre le cancer
                                financés par la Fondation de France et soutenus par nos dons.
                            </p>
                            <Link href="https://www.fondationdefrance.org/fr/cancer" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                                Voir les projets sur la Fondation de France
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-primary mb-4">
                                Soutenez la recherche avec nous
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Chaque don compte pour financer de nouveaux projets de recherche.
                                La recherche contre le cancer progresse grâce à votre soutien.
                            </p>
                            <Link href="/vos-dons" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                                Faire un don
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galerie Photos */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <GaleriePhotos />
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Rejoignez Notre Mission
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Ensemble, nous pouvons faire encore plus pour la recherche contre le cancer.
                        Chaque geste compte, chaque don fait la différence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/vos-dons" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Faire un don
                        </Link>
                        <Link href="/participer" className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                            Participer
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
