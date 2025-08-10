import Image from 'next/image';
import { Header } from '@/components/header/header';
import React from 'react';
import { HeaderContent } from '@/components/header/headerContent';

export default function DonationPage() {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <Header />

            {/* Header with navigation */}
            <div className={'h-20 relative flex justify-center w-full bg-white'}>
                <div className={'relative max-w-7xl h-full w-full mx-8'}>
                    <div className="flex justify-center items-center h-20 z-40">
                        <HeaderContent navItemsProps={'text-primary'} />
                    </div>
                </div>
            </div>

            {/* Main donation section with purple background */}
            <div className={'bg-primary flex flex-col items-center justify-center w-full py-16 md:py-24 px-4 min-h-screen'}>
                <div className={'w-full max-w-7xl'}>
                    {/* Title */}
                    <h1 className={'text-center text-4xl md:text-6xl font-bold text-accent uppercase mb-16'}>
                        FAIRE UN DON
                    </h1>

                    {/* Two donation options */}
                    <div className={'flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'}>

                        {/* Left section - Research donations */}
                        <div className={'flex-1 flex flex-col items-center text-center relative'}>
                            <h2 className={'text-lg md:text-xl font-bold text-white uppercase mb-8 max-w-sm leading-tight'}>
                                Dons pour la recherche,<br />
                                déductible d'impôts à hauteur<br />
                                de <span className="text-accent text-2xl">66%</span>
                            </h2>

                            {/* Curved arrow pointing down to logo */}
                            <div className={'relative mb-6'}>
                                <svg width="120" height="80" viewBox="0 0 120 80" className="text-accent absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <path
                                        d="M20 20 Q 60 10, 100 20 Q 90 40, 60 60"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                        markerEnd="url(#arrowhead1)"
                                    />
                                    <defs>
                                        <marker id="arrowhead1" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                                            <polygon points="0 0, 12 4, 0 8" fill="currentColor" />
                                        </marker>
                                    </defs>
                                </svg>
                            </div>

                            <div className={'bg-white p-6 rounded-lg shadow-lg mb-8 mt-12'}>
                                <Image
                                    src={'/images/fondation-france-logo.svg'}
                                    alt={'Logo Fondation de France'}
                                    width={200}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>

                            <div className={'text-sm md:text-base text-white max-w-md leading-relaxed'}>
                                <p className={'mb-4'}>
                                    Grâce à vos dons, le programme de la <span className="font-bold text-accent">Fondation de France</span> "Résistance aux traitements en Cancérologie" soutient chaque année une quinzaine de projets avec deux millions d'euros.
                                </p>
                                <p className={'font-bold text-accent'}>
                                    Merci pour votre générosité !
                                </p>
                            </div>
                        </div>

                        {/* Center - ET/OU */}
                        <div className={'flex items-center justify-center px-8'}>
                            <h3 className={'text-4xl md:text-5xl font-bold text-accent'}>
                                ET/OU
                            </h3>
                        </div>

                        {/* Right section - Logistics donations */}
                        <div className={'flex-1 flex flex-col items-center text-center relative'}>
                            <h2 className={'text-lg md:text-xl font-bold text-white uppercase mb-8 max-w-sm leading-tight'}>
                                Dons pour la logistique de<br />
                                LPCC, avec facture
                            </h2>

                            {/* Curved arrow pointing down to logo */}
                            <div className={'relative mb-6'}>
                                <svg width="120" height="80" viewBox="0 0 120 80" className="text-accent absolute -top-4 left-1/2 transform -translate-x-1/2 scale-x-[-1]">
                                    <path
                                        d="M20 20 Q 60 10, 100 20 Q 90 40, 60 60"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                        markerEnd="url(#arrowhead2)"
                                    />
                                    <defs>
                                        <marker id="arrowhead2" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                                            <polygon points="0 0, 12 4, 0 8" fill="currentColor" />
                                        </marker>
                                    </defs>
                                </svg>
                            </div>

                            <div className={'bg-white p-6 rounded-full shadow-lg mb-8 w-48 h-48 flex items-center justify-center mt-12'}>
                                <div className={'text-center'}>
                                    <div className={'text-primary font-bold text-base mb-2'}>LILLE-PARIS</div>
                                    <div className={'w-16 h-16 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center'}>
                                        <div className={'text-white text-2xl'}>🎗️</div>
                                    </div>
                                    <div className={'text-primary font-bold text-sm'}>CONTRE LE CANCER</div>
                                </div>
                            </div>

                            <div className={'text-sm md:text-base text-white max-w-md leading-relaxed'}>
                                <p className={'mb-4'}>
                                    Grâce à vos dons, vous nous aidez à la logistique de nos événements, et nous pourrons faire parler de la recherche bien plus efficacement.
                                </p>
                                <p className={'font-bold text-accent'}>
                                    Merci pour votre générosité !
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
