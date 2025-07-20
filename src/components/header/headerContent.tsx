import { HeaderLink } from '@/components/header/headerLink';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

type HeaderContentProps = {
  navItemsProps?: string;
};

export const HeaderContent = ({ navItemsProps }: HeaderContentProps) => {
  return (
    <div className="max-w-7xl grow flex items-center justify-between mx-8">
      <Image src={'/images/logo.png'} alt={'Logo de LPCC'} width={64} height={64}/>

      <ul className={clsx('flex gap-8', navItemsProps)}>
        <HeaderLink href="#" label="Qui sommes-nous ?"/>
        <HeaderLink href="#" label="Evenements"/>
        <HeaderLink href="#" label="Vos dons"/>
        <HeaderLink href="#" label="Partenaires"/>
      </ul>

      <Link href="#" className="primary-button font-semibold text-lg text-on-primary py-3 px-6">Faire un don</Link>
    </div>
  );
};