import Image from 'next/image';
import { Header } from '@/components/header/header';
import React from 'react';
import { HeaderContent } from '@/components/header/headerContent';
import { Highlight } from '@/components/ui/Highlight';

export default function Home() {
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <Header />

      {/* Hero Section */}
      <div className={'h-[600px] md:h-[800px] relative flex justify-center w-full'}>
        <Image
          className={'object-bottom object-cover brightness-50'}
          src={'/images/eiffel.jpg'}
          alt={'Les participants devant la Tour Eiffel'}
          fill={true}
          priority={true}
        />
        <div className={'relative max-w-7xl h-full w-full mx-8'}>
          <div className="flex justify-center items-center h-20 z-40 ">
            <HeaderContent navItemsProps={'text-white'} />
          </div>
          <h1 className={'absolute bottom-[10%] right-0 text-center text-3xl md:text-5xl max-w-md md:max-w-[700px] text-white uppercase font-semibold text-balance'}>
            Unissons nos forces pour vaincre le cancer par le sport
          </h1>
        </div>
      </div>

      {/* "Qui sommes nous ?" & "Événements récurrents" Sections */}
      <div className={'bg-secondary flex flex-col items-center justify-center w-full gap-16 md:gap-32 py-16 md:py-32 px-4'}>
        <div className={'flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center p-8 w-full max-w-6xl'}>
          <Image src={'/images/cyclist.png'} alt={'Silouhette d\'un cycliste'} width={256} height={256} className="order-2 md:order-1" />
          <div className="flex flex-col items-center md:items-end gap-4 md:gap-8 order-1 md:order-2">
            <h2 className={'font-bold text-4xl md:text-5xl uppercase text-primary text-center md:text-end'}>
              Qui sommes nous ?
            </h2>
            <p className="max-w-[700px] text-center md:text-end text-lg md:text-xl">
              {'En activité depuis 2021, l\'association '}
              <Highlight>{'Lille-Paris contre le Cancer '}</Highlight>
              {'(LPCC) a pour mission de promouvoir l\'importance du sport dans la lutte contre le cancer, tout en récoltant des fonds destinés à soutenir la recherche.'}
            </p>
          </div>
        </div>

        <div className={'flex flex-col md:flex-row items-center justify-between gap-8 md:gap-32 text-center p-8 w-full max-w-6xl'}>
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-8">
            <h2 className={'font-bold text-4xl md:text-5xl uppercase text-primary text-center md:text-start'}>
              Événements récurrents
            </h2>
            <p className="max-w-[700px] text-center md:text-start text-lg md:text-xl">
              {'L\'événement phare de notre association est la course Lille-Paris, organisée chaque année sur '}
              <Highlight>{'deux jours. '}</Highlight>
              {'Cet événement rassemble des cyclistes de '}
              <Highlight>{'tous niveaux '}</Highlight>
              {'pour un parcours solidaire entre les deux villes, symbolisant l\'unité et la détermination dans '}
              <Highlight>{'la lutte contre le cancer.'}</Highlight>
            </p>
          </div>
          <Image className="rounded-full w-full max-w-xs md:max-w-md lg:max-w-lg" src={'/images/rainbow.jpeg'} alt={'Participant qui décharge un vélo d\'une voiture'} width={600} height={600} />
        </div>
      </div>

      {/* "Événements ponctuels" Section */}
      <div className={'bg-primary flex flex-col items-center justify-center w-full gap-16 md:gap-32 py-16 md:py-32 px-4'}>
        <div className={'flex flex-col md:flex-row items-center justify-between gap-8 md:gap-32 text-center px-8 w-full max-w-6xl'}>
          <div className={'h-[400px] md:h-[600px] w-full md:w-[512px] relative'}>
            <Image src={'/images/marathon.jpeg'} alt={''} fill={true} className={'object-cover'} sizes="(max-width: 768px) 100vw, 512px" />
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 md:gap-8">
            <h2 className={'font-bold text-4xl md:text-5xl uppercase text-accent text-center md:text-end'}>
              Événements ponctuels
            </h2>
            <p className="max-w-[700px] text-center md:text-end text-lg md:text-xl text-white">
              {'En dehors de notre grande course annuelle, nous organisons régulièrement de plus petits événements et nous nous associons à des manifestations sportives existantes. Qu\'il s\'agisse de marathons, de courses locales ou de tours de ville, notre équipe participe fièrement en arborant les couleurs de LPCC, toujours dans un esprit de solidarité et de partage.'}
            </p>
          </div>
        </div>
      </div>

      {/* VOS DONS & FONDATION DE FRANCE SECTION */}
      <div className={'bg-secondary relative flex flex-col items-center justify-center w-full gap-16 py-16 md:py-32 px-4'}>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8 md:gap-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image src={'/images/hand.png'} alt="Icone don" width={250} height={250} />
            <h2 className="font-bold text-4xl md:text-5xl uppercase text-accent text-center">Vos Dons</h2>
          </div>
          <div className="flex flex-col justify-center gap-8 max-w-2xl text-primary text-md md:text-lg font-semibold text-center md:text-left">
            <p>NOUS ORGANISONS TOUTES NOS <Highlight>CAGNOTTES</Highlight> VIA LA FONDATION DE FRANCE, OÙ TOUS VOS DONS SONT DESTINÉS À LA RECHERCHE, ET SONT <Highlight>DÉDUCTIBLES D'IMPÔTS À HAUTEUR DE 66%.</Highlight></p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p>VOUS POUVEZ MÊME LAISSER UN PETIT MESSAGE AVEC VOTRE DON, COMME UN LIVRE D'OR !</p>
              <div className="relative shrink-0">
                <Image src={'/images/speech-bubble.png'} alt="Bulle de parole" width={150} height={80} />
                <p className="absolute top-7/16 left-1/4 -translate-x-1/4 -translate-y-1/2 text-primary text-sm font-bold text-center w-full">COURAGE<br />SUR LA<br />ROUTE !</p>
              </div>
            </div>
            <p>SINON, NOUS POUVONS RECEVOIR VOTRE SOUTIEN FINANCIER POUR NOUS AIDER À LA LOGISTIQUE DE NOS ÉVÉNEMENTS, AVEC FACTURE !</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-8 w-full max-w-6xl px-4 text-center md:text-left">
          <h2 className="font-bold text-3xl md:text-4xl uppercase text-primary">Pourquoi la fondation de france ?</h2>
          <p className="text-primary font-semibold text-md md:text-lg">LA RECHERCHE SUR LE CANCER PROGRESSE, OUVRANT DE NOUVELLES STRATÉGIES THÉRAPEUTIQUES. CEPENDANT, <Highlight>TOUS NE SONT PAS ÉGAUX FACE À LA MALADIE.</Highlight></p>
          <p className="text-primary font-semibold text-md md:text-lg">DEPUIS LES ANNÉES 80, LA FONDATION DE FRANCE SOUTIENT LES CHERCHEURS <Highlight>POUR OFFRIR DES TRAITEMENTS PERSONNALISÉS ET EFFICACES À CHAQUE MALADE.</Highlight></p>
        </div>
        <div className="relative md:absolute bottom-0 right-0 md:right-[10%] translate-y-1/2 z-10 bg-accent rounded-full h-36 w-36 md:h-48 md:w-48 flex flex-col items-center justify-center text-primary font-bold mt-8 md:mt-0">
          <p className="text-4xl md:text-5xl">+40 ANS</p>
          <p className="text-md md:text-lg">DE RECHERCHE</p>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className={'bg-primary flex flex-col items-center justify-center w-full gap-16 py-32 px-4'}>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
          <div className="relative w-full md:w-1/3 flex justify-center">
            <Image src={'/images/micro.png'} alt="Microscope" width={300} height={300} />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-2/3 text-white font-semibold text-md md:text-lg text-center md:text-left">
            <p>LE VIEILLISSEMENT DE LA POPULATION, L'ÉVOLUTION DES MODES DE VIE ET LES RISQUES ENVIRONNEMENTAUX CONTRIBUENT À L'<Highlight>AUGMENTATION DES CANCERS.</Highlight> MALGRÉ LES PROGRÈS DANS LE DIAGNOSTIC ET LES TRAITEMENTS, LE CANCER RESTE LA PREMIÈRE CAUSE DE MORTALITÉ EN FRANCE AVEC</p>
            <p className="text-accent text-5xl md:text-6xl font-bold text-center my-4">157 000 DÉCÈS EN 2018</p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <p>TOUTEFOIS, LA GUÉRISON EST POSSIBLE POUR</p>
              <div className="flex flex-col items-center">
                <Image src={'/images/person.png'} alt="Silhouette homme et femme" width={150} height={150} />
                <p className="text-accent text-3xl font-bold">57%</p>
                <p>DES CANCERS CHEZ LA FEMME</p>
                <p className="text-accent text-3xl font-bold mt-2">44%</p>
                <p>CHEZ L'HOMME</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl text-white font-semibold text-md md:text-lg gap-8 text-center md:text-left">
          <p className="max-w-md">DE NOMBREUX PATIENTS CONNAISSENT ENCORE DES TRAITEMENTS EST UN COMBAT MAJEUR DE LA <Highlight>FONDATION DE FRANCE.</Highlight></p>
          <p className="max-w-md text-center md:text-end">COMPRENDRE LES MÉCANISMES DE LA MALADIE ET LES RÉSISTANCES AUX</p>
        </div>
      </div>
    </div>
  );
}

