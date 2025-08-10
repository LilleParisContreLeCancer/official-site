import Image from 'next/image';

export const PartnersSection = () => {
  return (
    <div className={'bg-primary flex flex-col items-center justify-center w-full py-16 md:py-24 px-4'}>
      <div className={'w-full max-w-6xl'}>
        <h1 className={'text-center text-4xl md:text-6xl font-bold text-accent uppercase mb-16'}>
          Nos partenaires
        </h1>
        
        {/* Partners grid */}
        <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center'}>
          {/* Fondation de France */}
          <div className={'bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'}>
            <Image
              src={'/images/fondation-france-logo.svg'}
              alt={'Fondation de France'}
              width={120}
              height={80}
              className="object-contain"
            />
          </div>
          
          {/* OPAL */}
          <div className={'bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center'}>
            <div className={'text-center'}>
              <div className={'w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-1'}>
                <span className={'text-white font-bold text-sm'}>OPAL</span>
              </div>
              <div className={'text-xs text-primary font-semibold'}>YOU MOVE SAFE</div>
            </div>
          </div>
          
          {/* Pour Mon Vélo */}
          <div className={'bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'}>
            <div className={'text-center text-primary font-bold text-lg'}>
              POUR<br />MON<br />VÉLO
            </div>
          </div>
          
          {/* L'Atelier */}
          <div className={'bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'}>
            <div className={'text-center text-black font-bold text-xl'}>
              L'Atelier
            </div>
          </div>
          
          {/* EPITA */}
          <div className={'bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'}>
            <div className={'text-center'}>
              <div className={'text-primary font-bold text-xl mb-2'}>EPITA</div>
              <div className={'text-xs text-gray-600'}>École d'ingénieurs en informatique</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
