import Image from 'next/image';
import { Highlight } from '@/components/ui/Highlight';

export const EventsSection = () => {
  return (
    <div className={'bg-primary flex flex-col items-center justify-center w-full gap-16 md:gap-32 py-16 md:py-32 px-4'}>
      <div className={'flex flex-col md:flex-row items-center justify-between gap-8 md:gap-32 text-center px-8 w-full max-w-6xl'}>
        <div className={'h-[400px] md:h-[600px] w-full md:w-[512px] relative'}>
          <Image
            className={'object-cover rounded-lg'}
            src={'/images/marathon.jpeg'}
            alt={'Participants lors d\'un marathon'}
            fill={true}
          />
        </div>
        <div className="flex flex-col items-center md:items-end gap-4 md:gap-8">
          <h2 className={'font-bold text-4xl md:text-5xl uppercase text-on-primary text-center md:text-end'}>
            Événements ponctuels
          </h2>
          <p className="max-w-[700px] text-center md:text-end text-lg md:text-xl text-on-primary">
            {'En plus de notre course annuelle, nous organisons régulièrement des événements ponctuels pour sensibiliser le public et récolter des fonds. Ces événements incluent des '}
            <Highlight>{'marathons, des courses à pied, et des défis sportifs '}</Highlight>
            {'qui permettent à chacun de contribuer à notre cause selon ses capacités et ses préférences.'}
          </p>
        </div>
      </div>
    </div>
  );
};
