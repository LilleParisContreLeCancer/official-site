import Image from 'next/image';
import { HeaderContent } from '@/components/header/headerContent';

export const HeroSection = () => {
  return (
    <div className={'h-[600px] md:h-[800px] relative flex justify-center w-full'}>
      <Image
        className={'object-bottom object-cover brightness-50'}
        src={'/images/eiffel.webp'}
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
  );
};
