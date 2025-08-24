'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const metadata: Metadata = {
    title: 'Vos Dons - Lille-Paris contre le cancer',
    description: 'Soutenez la recherche contre le cancer ou notre association. Chaque don compte et bénéficie d\'avantages fiscaux de 66%.',
};

export default function VosDonsPage() {
    const [donAmount, setDonAmount] = useState(100);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [acceptNewsletter, setAcceptNewsletter] = useState(false);

    const deductionFiscale = Math.round(donAmount * 0.66);
    const coutReel = donAmount - deductionFiscale;

    const handlePresetAmount = (amount: number) => {
        setDonAmount(amount);
    };

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Faire un Don
                        </h1>
                        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
                            Soutenez la recherche contre le cancer ou notre association.
                            Chaque don compte et bénéficie d&apos;avantages fiscaux de 66%.
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
                        <Link href="/nos-actions" className="text-gray-600 hover:text-primary transition-colors">
                            Nos Actions
                        </Link>
                        <span className="text-primary font-semibold">Vos Dons</span>
                    </div>
                </div>
            </nav>

            {/* Simulateur Fiscal */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Simulateur Fiscal
                        </h2>
                        <p className="text-xl text-gray-600 mb-4">
                            Calculez votre avantage fiscal pour les dons à la Fondation de France
                        </p>
                        <p className="text-sm text-gray-500">
                            Uniquement pour les dons recherche (Fondation de France)
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8">
                        <div className="mb-8">
                            <label className="block text-lg font-semibold text-gray-700 mb-4">
                                Montant de votre don
                            </label>

                            {/* Boutons prédéfinis */}
                            <div className="flex flex-wrap gap-3 mb-4">
                                <button
                                    onClick={() => handlePresetAmount(50)}
                                    className={`px-4 py-2 rounded-lg ${donAmount === 50 ? 'bg-primary text-white' : 'bg-white text-gray-700 border'}`}
                                >
                                    50 €
                                </button>
                                <button
                                    onClick={() => handlePresetAmount(100)}
                                    className={`px-4 py-2 rounded-lg ${donAmount === 100 ? 'bg-primary text-white' : 'bg-white text-gray-700 border'}`}
                                >
                                    100 €
                                </button>
                                <button
                                    onClick={() => handlePresetAmount(200)}
                                    className={`px-4 py-2 rounded-lg ${donAmount === 200 ? 'bg-primary text-white' : 'bg-white text-gray-700 border'}`}
                                >
                                    200 €
                                </button>
                            </div>

                            {/* Input personnalisé */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    value={donAmount}
                                    onChange={(e) => setDonAmount(Number(e.target.value))}
                                    className="w-32 px-4 py-2 border rounded-lg text-center text-2xl font-bold"
                                    min="1"
                                />
                                <span className="text-2xl font-bold text-gray-700">€</span>
                            </div>
                        </div>

                        {/* Résultats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-xl text-center">
                                <div className="text-2xl font-bold text-primary mb-2">{donAmount} €</div>
                                <div className="text-gray-600">Montant du don</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl text-center">
                                <div className="text-2xl font-bold text-green-600 mb-2">{deductionFiscale} €</div>
                                <div className="text-gray-600">Déduction fiscale (66%)</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl text-center">
                                <div className="text-2xl font-bold text-accent mb-2">{coutReel} €</div>
                                <div className="text-gray-600">Coût réel pour vous</div>
                            </div>
                        </div>

                        {/* Explication */}
                        <div className="bg-blue-50 p-6 rounded-xl mb-6">
                            <h3 className="font-bold text-blue-900 mb-3">Comment ça marche ?</h3>
                            <div className="flex items-center justify-center gap-4 text-blue-800">
                                <span>Don : {donAmount} €</span>
                                <span>-</span>
                                <span>Déduction : {deductionFiscale} €</span>
                                <span>=</span>
                                <span className="font-bold">Coût réel : {coutReel} €</span>
                            </div>
                            <p className="text-sm text-blue-700 mt-3 text-center">Calcul indicatif</p>
                        </div>

                        {/* Avertissements */}
                        <div className="space-y-4 text-sm text-gray-600">
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-yellow-800 mb-2">Ce simulateur donne une estimation.</h4>
                                <p className="text-yellow-700">
                                    La déduction fiscale réelle dépend de votre situation personnelle.
                                    Consultez votre comptable ou les services fiscaux pour une information précise.
                                </p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-orange-800 mb-2">Plafond de déduction</h4>
                                <p className="text-orange-700">
                                    La déduction fiscale est limitée à 20% de votre revenu imposable.
                                    L&apos;excédent peut être reporté sur les 5 années suivantes.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <p className="text-gray-600 mb-4">Prêt à faire un don ? Choisissez votre destination :</p>
                            <div className="flex gap-4 justify-center">
                                <a 
                                    href="https://lpcc.pagefondationdefrance.org/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                >
                                    Don Recherche
                                </a>
                                <a 
                                    href="https://www.payasso.fr/lille-paris-contre-le-cancer/dons" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    Don Association
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types de Don */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Choisissez Votre Type de Don
                        </h2>
                        <p className="text-xl text-gray-600">
                            Nous vous proposons deux façons de nous soutenir, chacune avec ses spécificités.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Don Recherche */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200">
                            <div className="text-center mb-6">
                                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                                    66% déductible
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Don pour la Recherche</h3>
                                <div className="text-sm text-gray-600 mb-4">Logo Fondation de France</div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-3">✓</span>
                                    100% reversé à la recherche contre le cancer
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Reçu fiscal automatique par la Fondation de France
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-3">✓</span>
                                    La Fondation de France soutient la recherche fondamentale et translationnelle
                                </li>
                            </ul>

                            <a 
                                href="https://lpcc.pagefondationdefrance.org/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block text-center"
                            >
                                Donner pour la recherche
                            </a>
                        </div>

                        {/* Don Association */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-primary mb-4">Don pour l&apos;Association</h3>
                                <div className="text-sm text-gray-600 mb-4">Logo Lille Paris Contre le Cancer</div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center">
                                    <span className="text-primary mr-3">✓</span>
                                    Soutient la logistique de nos événements
                                </li>
                                <li className="flex items-center">
                                    <span className="text-primary mr-3">✓</span>
                                    Facture fournie pour vos dons
                                </li>
                                <li className="flex items-center">
                                    <span className="text-primary mr-3">✓</span>
                                    Permet de faire parler de la recherche
                                </li>
                            </ul>

                            <a 
                                href="https://www.payasso.fr/lille-paris-contre-le-cancer/dons" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors block text-center"
                            >
                                Donner pour la logistique de nos événements
                            </a>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl mt-8">
                        <h3 className="font-bold text-blue-900 mb-3">Important à savoir</h3>
                        <p className="text-blue-800 mb-2">
                            <strong>Déduction fiscale :</strong> 66% de réduction d&apos;impôt dans la limite de 20% de votre revenu imposable.
                        </p>
                        <p className="text-blue-800">
                            <strong>Exemple :</strong> Un don de 100€ ne vous coûte réellement que 34€ après déduction fiscale.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sécurité */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Sécurité & Confiance
                        </h2>
                        <p className="text-xl text-gray-600">
                            Vos dons sont traités avec les plus hauts standards de sécurité
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold text-primary mb-3">SSL</h3>
                            <p className="text-gray-600">Connexion sécurisée</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold text-primary mb-3">PCI DSS</h3>
                            <p className="text-gray-600">Norme de sécurité des données</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">💳</div>
                            <h3 className="text-xl font-bold text-primary mb-3">Cartes bancaires</h3>
                            <p className="text-gray-600">Paiement sécurisé</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-primary mb-4">Protection des Données</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Chiffrement SSL/TLS : Toutes vos données sont chiffrées lors de la transmission</li>
                                <li>• Conformité PCI DSS : Standards de sécurité pour les paiements par carte</li>
                                <li>• Vos données personnelles sont protégées et ne seront jamais partagées avec des tiers sans votre consentement explicite</li>
                                <li>• Nous respectons strictement les réglementations RGPD en vigueur</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-primary mb-4">Transparence Totale</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Reçus fiscaux automatiques : Justificatifs envoyés immédiatement</li>
                                <li>• Suivi des projets : Rapports réguliers sur l&apos;utilisation des fonds</li>
                                <li>• Contact direct : Équipe disponible pour toute question</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partenaires */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Nos Partenaires de Confiance
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl text-center">
                            <div className="text-2xl mb-3">🏛️</div>
                            <h3 className="font-bold text-primary mb-2">Fondation de France</h3>
                            <p className="text-gray-600 text-sm">Partenaire officiel</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center">
                            <div className="text-2xl mb-3">💳</div>
                            <h3 className="font-bold text-primary mb-2">SumUp</h3>
                            <p className="text-gray-600 text-sm">Paiement sécurisé</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center">
                            <div className="text-2xl mb-3">🤝</div>
                            <h3 className="font-bold text-primary mb-2">PayAsso</h3>
                            <p className="text-gray-600 text-sm">Solution associative</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Lille Paris Contre le Cancer
                    </h2>
                    <p className="text-xl mb-6">
                        Association dédiée à la lutte contre le cancer. Ensemble, nous finançons la recherche et soutenons les patients.
                    </p>
                    <div className="space-y-2 mb-8">
                        <p>📧 lillepariscontrelecancer@gmail.com</p>
                        <p>🌐 lillepariscontrelecancer.fr</p>
                    </div>
                    <a href="mailto:lillepariscontrelecancer@gmail.com" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Nous Contacter
                    </a>
                </div>
            </section>
        </main>
    );
}
