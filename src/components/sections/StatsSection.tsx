import Image from 'next/image';
import { Highlight } from '@/components/ui/Highlight';

export const StatsSection = () => {
  return (
    <>
      {/* Foundation Info Section */}
      <div className={'bg-secondary flex flex-col items-center justify-center w-full gap-16 md:gap-32 py-16 md:py-32 px-4 relative'}>
        <div className={'w-full max-w-6xl'}>
          <div className={'flex flex-col items-center justify-center gap-8 md:gap-16 text-center p-8'}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p>VOUS POUVEZ MÊME LAISSER UN PETIT MESSAGE AVEC VOTRE DON, COMME UN LIVRE D&apos;OR !</p>
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
            <p>LE VIEILLISSEMENT DE LA POPULATION, L&apos;ÉVOLUTION DES MODES DE VIE ET LES RISQUES ENVIRONNEMENTAUX CONTRIBUENT À L&apos;<Highlight>AUGMENTATION DES CANCERS.</Highlight> MALGRÉ LES PROGRÈS DANS LE DIAGNOSTIC ET LES TRAITEMENTS, LE CANCER RESTE LA PREMIÈRE CAUSE DE MORTALITÉ EN FRANCE AVEC</p>
            <p className="text-accent text-5xl md:text-6xl font-bold text-center my-4">157 000 DÉCÈS EN 2018</p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <p>TOUTEFOIS, LA GUÉRISON EST POSSIBLE POUR</p>
              <div className="flex flex-col items-center">
                <Image src={'/images/person.png'} alt="Silhouette homme et femme" width={150} height={150} />
                <p className="text-accent text-3xl font-bold">57%</p>
                <p>DES CANCERS CHEZ LA FEMME</p>
                <p className="text-accent text-3xl font-bold mt-2">44%</p>
                <p>CHEZ L&apos;HOMME</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl text-white font-semibold text-md md:text-lg gap-8 text-center md:text-left">
          <p className="max-w-md">DE NOMBREUX PATIENTS CONNAISSENT ENCORE DES TRAITEMENTS EST UN COMBAT MAJEUR DE LA <Highlight>FONDATION DE FRANCE.</Highlight></p>
          <p className="max-w-md text-center md:text-end">COMPRENDRE LES MÉCANISMES DE LA MALADIE ET LES RÉSISTANCES AUX</p>
        </div>
      </div>
    </>
  );
};
