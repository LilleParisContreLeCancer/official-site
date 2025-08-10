import { HeaderLink } from '@/components/header/headerLink';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { BurgerMenu } from '@/components/header/burgerMenu';

type HeaderContentProps = {
  navItemsProps?: string;
};

export const HeaderContent = ({ navItemsProps }: HeaderContentProps) => {
  return (
    <div className="max-w-7xl grow flex items-center justify-between mx-8">
      <Image src={'/images/logo.png'} alt={'Logo de LPCC'} width={64} height={64}/>

      <div className="hidden lg:flex items-center gap-8">
        <ul className={clsx('flex gap-8', navItemsProps)}>
          <HeaderLink href="#qui-sommes-nous" label="Qui sommes-nous ?"/>
          <HeaderLink href="#participer" label="Participer"/>
          <HeaderLink href="#nos-actions" label="Nos actions"/>
          <HeaderLink href="#dons" label="Vos dons"/>
          <HeaderLink href="#contact" label="Contact"/>
        </ul>
        <Link href="#dons" className="primary-button font-semibold text-lg text-on-primary py-3 px-6">Faire un don</Link>
      </div>

      <BurgerMenu />
    </div>
  );
};