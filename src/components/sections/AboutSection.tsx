import Image from 'next/image';
import { Highlight } from '@/components/ui/Highlight';

export const AboutSection = () => {
  return (
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
  );
};
