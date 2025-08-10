'use client';

import { CountdownTimer } from '@/components/ui/CountdownTimer';

export const CountdownSection = () => {
  return (
    <div className={'bg-white flex flex-col items-center justify-center w-full py-16 md:py-24 px-4'}>
      <div className={'w-full max-w-4xl text-center'}>
        {/* Countdown Timer */}
        <div className={'mb-8'}>
          <CountdownTimer targetDate={new Date('2025-12-27T07:00:00')} />
        </div>
        
        {/* Event Title */}
        <h2 className={'text-2xl md:text-3xl font-bold text-primary mb-8'}>
          Prochaine course Lille-Paris Contre le Cancer
        </h2>
        
        {/* Registration Buttons */}
        <div className={'flex flex-col sm:flex-row gap-4 justify-center items-center'}>
          <button 
            onClick={() => window.open('mailto:lillepariscontrelecancer@gmail.com?subject=Inscription en tant que cycliste', '_blank')}
            className="primary-button px-8 py-4 font-bold uppercase hover:bg-primary/80 transition-colors text-lg"
          >
            S'inscrire en tant que cycliste
          </button>
          <button 
            onClick={() => window.open('mailto:lillepariscontrelecancer@gmail.com?subject=Inscription en tant que bénévole logistique', '_blank')}
            className="bg-accent text-primary px-8 py-4 rounded-full font-bold uppercase hover:bg-accent/80 transition-colors text-lg"
          >
            S'inscrire en tant que bénévole logistique
          </button>
        </div>
      </div>
    </div>
  );
};
