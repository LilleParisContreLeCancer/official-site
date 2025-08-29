import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Participer - Lille-Paris contre le cancer',
    description: 'Rejoignez notre mission contre le cancer ! Devenez mécène, bénévole, cycliste ou rejoignez notre communauté.',
};

export default function ParticiperPage() {
    // Google Calendar: trainings schedule
    const calendarSrc =
        'https://calendar.google.com/calendar/embed?src=' +
        encodeURIComponent('2d85d4f19145ac8461c382956e3d06cd86161e6e8510b521d32fbc86795871d8@group.calendar.google.com') +
        '&ctz=Europe/Paris&mode=AGENDA&showTitle=0&showPrint=0&showCalendars=0&showTabs=0&showTz=0';

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Comment Participer ?
                        </h1>
                        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
                            Rejoignez notre mission contre le cancer ! Que vous soyez entreprise, bénévole,
                            cycliste ou simplement solidaire, il y a une place pour vous dans cette aventure.
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
                        <span className="text-primary font-semibold">Participer</span>
                        <Link href="/nos-actions" className="text-gray-600 hover:text-primary transition-colors">
                            Nos Actions
                        </Link>
                        <Link href="/vos-dons" className="text-gray-600 hover:text-primary transition-colors">
                            Vos Dons
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Participation Options */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Devenir Mécène */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">🤝</div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Devenir Mécène</h3>
                                <p className="text-gray-600 mb-4">
                                    Entreprises, associez votre marque à une cause utile et fédératrice.
                                </p>
                                <ul className="text-left inline-block text-gray-700 mb-6 space-y-2">
                                    <li>• Renforcez votre <strong>politique RSE</strong> par un engagement concret</li>
                                    <li>• Soutenez une <strong>cause noble</strong> et locale</li>
                                    <li>• Participez à la <strong>médiatisation</strong> de la solidarité par le sport</li>
                                    <li>• <strong>Promouvez l&apos;activité physique</strong> et le bien-être au sein de votre écosystème</li>
                                    <li>• Bénéficiez de <strong>visibilités</strong> adaptées (supports, réseaux, événement)</li>
                                </ul>
                                <a href="/mecenat-2025.pdf" target="_blank" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                                    Dossier mécénat
                                </a>
                            </div>
                        </div>

                        {/* Être Bénévole */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">🙋‍♀️</div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Être Bénévole</h3>
                                <p className="text-gray-600 mb-2">
                                    L&apos;événement aura lieu les <strong>27 et 28 décembre 2025</strong> (avec
                                    préparation possible dès le <strong>26</strong>).
                                </p>
                                <p className="text-gray-600 mb-2">
                                    Ce formulaire nous permet de mieux te connaître, de savoir sur quel(s)
                                    rôle(s) tu veux t&apos;engager et quelles sont tes disponibilités.
                                </p>
                                <p className="text-gray-600 mb-2">
                                    Aucune expérience sportive nécessaire (sauf pour certains rôles
                                    techniques).
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Les données sont <strong>confidentielles</strong> et utilisées uniquement par
                                    l&apos;organisation.
                                </p>
                                <a href="https://forms.gle/bABDg63YuvfyeB8EA" target="_blank" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                                    S&apos;inscrire bénévole
                                </a>
                            </div>
                        </div>

                        {/* Rouler avec Nous */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">🚴‍♂️</div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Rouler avec Nous</h3>
                                <p className="text-gray-600 mb-2">
                                    Cette édition aura lieu les <strong>27 et 28 décembre 2025</strong> (en comptant
                                    le <strong>rapatriement sur Lille la veille</strong>).
                                </p>
                                <p className="text-gray-600 mb-2">
                                    Ce formulaire nous permettra d&apos;en savoir plus sur toi et ton matériel afin
                                    de préparer au mieux l&apos;événement.
                                </p>
                                <p className="text-gray-700 font-medium mb-2">⚠️ Engagement requis :</p>
                                <ul className="text-gray-600 text-sm mb-4 space-y-1">
                                    <li>• Présence sur les <strong>deux jours</strong></li>
                                    <li>• Au moins <strong>2 entraînements collectifs</strong> avant la course</li>
                                </ul>
                                <p className="text-gray-600 mb-6">
                                    Les données récoltées sont <strong>strictement confidentielles</strong> et
                                    utilisées uniquement pour l&apos;organisation.
                                </p>
                                <a href="https://forms.gle/aRD5g2A54FCuLBQq6" target="_blank" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                                    Inscription cycliste
                                </a>
                            </div>
                        </div>

                        {/* Rejoindre la Commu */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">💬</div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Rejoindre la Commu</h3>
                                <p className="text-gray-600 mb-4">
                                    Rejoignez notre <strong>Discord</strong> pour faire vivre la communauté au quotidien :
                                </p>
                                <ul className="text-left inline-block text-gray-700 mb-6 space-y-2">
                                    <li>• <strong>Annonces</strong> de l’association</li>
                                    <li>• <strong>Événements</strong> et rencontres</li>
                                    <li>• <strong>Entraînements</strong> et sorties</li>
                                    <li>• <strong>Planification</strong> logistique</li>
                                    <li>• <strong>Conseils</strong> matos et préparation</li>
                                </ul>
                                <div className="text-center">
                                    <a href="https://discord.gg/5mQtTChUu3" target="_blank" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                                        Rejoindre Discord
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pourquoi Nous Rejoindre */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Pourquoi Nous Rejoindre ?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Chaque participation compte dans notre lutte contre le cancer.
                            Ensemble, nous transformons l&apos;engagement sportif en espoir médical.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl mb-4">💡</div>
                            <h3 className="text-xl font-bold text-primary mb-3">Impact Réel</h3>
                            <p className="text-gray-600">
                                100% des dons reversés à la recherche via la Fondation de France
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl mb-4">👥</div>
                            <h3 className="text-xl font-bold text-primary mb-3">Communauté</h3>
                            <p className="text-gray-600">
                                Rejoignez une famille de passionnés unis par une cause commune
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl mb-4">🎯</div>
                            <h3 className="text-xl font-bold text-primary mb-3">Aventure</h3>
                            <p className="text-gray-600">
                                Vivez une expérience unique et mémorable au service des autres
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Participer aux entraînements */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Participer aux entraînements
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Rejoins-nous sur nos sorties et séances collectives. Consulte le calendrier pour voir les prochaines dates
                            et viens rouler avec nous.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="relative w-full" style={{ paddingTop: '70vh', maxHeight: '80vh' }}>
                            <iframe
                                src={calendarSrc}
                                title="Calendrier des entraînements"
                                className="absolute top-0 left-0 w-full h-full"
                                style={{ border: 0 }}
                                loading="lazy"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <a
                                href="https://calendar.google.com/calendar/u/1?cid=MmQ4NWQ0ZjE5MTQ1YWM4NDYxYzM4Mjk1NmUzZDA2Y2Q4NjE2MWU2ZTg1MTBiNTIxZDMyZmJjODY3OTU4NzFkOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Ouvrir dans Google Agenda
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Des Questions ?</h2>
                    <p className="text-xl mb-8">
                        Notre équipe est là pour vous accompagner dans votre participation.
                    </p>
                    <a href="mailto:lillepariscontrelecancer@mail.com" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        📧 Nous Contacter
                    </a>
                </div>
            </section>
        </main>
    );
}
