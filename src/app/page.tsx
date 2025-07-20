import Image from 'next/image';
import { Header } from '@/components/header/header';
import React from 'react';
import { HeaderContent } from '@/components/header/headerContent';

export default function Home() {
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <Header/>

      <div className={'h-[800px] relative flex justify-center w-full'}>
        {/*<div className={''}>*/}

        {/*</div>*/}

        <Image className={'object-bottom object-cover brightness-50'}
               src={'/images/eiffel.jpg'}
               alt={'Les participants devant la Tour Eiffel'}
               fill={true}
        />

        <div className={'relative max-w-7xl h-full w-full mx-8'}>
          <div className="flex justify-center items-center h-20 z-40 ">
            <HeaderContent navItemsProps={'text-white'}/>
          </div>

          <span className={'absolute bottom-[10%] right-0 text-center text-5xl max-w-[700px] text-white uppercase font-semibold text-balance'}>
            Unissons nos forces pour vaincre le cancer par le sport
          </span>
        </div>
      </div>

      <div className={'bg-secondary flex flex-col items-center justify-center w-full gap-32 py-32'}>
        <div className={'flex items-center justify-between gap-4 text-center p-8 w-full max-w-6xl '}>
          <Image src={'/images/cyclist.png'} alt={'Silouhette d\'un cycliste'} width={256} height={256}/>

          <div className="flex flex-col items-end gap-8">
            <span className={'font-bold text-5xl uppercase text-primary text-end'}>
              Qui sommes nous ?
            </span>

            <span className="max-w-[700px] text-end text-xl font-semibold">
              {'En activité depuis 2021, l\'association '}

              <span className={'text-primary font-bold'}>
                {'Lille-Paris contre le Cancer '}
              </span>

              {'(LPCC) a pour mission de promouvoir l\'importance du sport dans la lutte contre le cancer, tout en récoltant des fonds destinés à soutenir la recherche.'}
            </span>
          </div>
        </div>

        <div className={'flex items-center justify-between gap-32 text-center p-8 w-full max-w-6xl'}>
          <div className="flex flex-col items-start gap-8">
            <span className={'font-bold text-5xl uppercase text-primary text-start'}>
              évenements récurrents
            </span>

            <span className="max-w-[700px] text-start text-xl font-semibold">
              {'L\'événement phare de notre association est la course Lille-Paris, organisée chaque année sur '}

              <span className={'text-primary font-bold'}>
                {'deux jours. '}
              </span>

              {'Cet événement rassemble des cyclistes de '}

              <span className={'text-primary font-bold'}>
                {'tous niveaux '}
              </span>


              {'pour un parcours solidaire entre les deux villes, symbolisant l\'unité et la détermination dans '}

              <span className={'text-primary font-bold'}>
                {'la lutte contre le cancer.'}
              </span>
            </span>
          </div>

          <Image className="rounded-full" src={'/images/rainbow.jpeg'} alt={'Participant qui décharge un vélo d\'une voiture'} width={600} height={600}/>
        </div>
      </div>

      <div className={'bg-primary flex flex-col items-center justify-center w-full gap-32'}>
        <div className={'flex items-center justify-between gap-32 text-center px-8 w-full max-w-6xl'}>
          <div className={'h-[600px] w-[512px] relative bg-green-500'}>

            <Image src={'/images/marathon.jpeg'} alt={''} fill={true} className={'object-cover'}/>
          </div>

          <div className="flex flex-col items-end gap-8">
            <span className={'font-bold text-5xl uppercase text-accent text-end'}>
              évenements ponctuels
            </span>

            <span className="max-w-[700px] text-end text-xl font-semibold text-white">
              {'En dehors de notre grande course annuelle, nous organisons régulièrement de plus petits événements et nous nous associons à des manifestations sportives existantes. Qu\'il s\'agisse de marathons, de courses locales ou de tours de ville, notre équipe participe fièrement en arborant les couleurs de LPCC, toujours dans un esprit de solidarité et de partage.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

