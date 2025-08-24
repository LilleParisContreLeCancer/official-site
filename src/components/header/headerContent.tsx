import { HeaderLink } from './headerLink';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { BurgerMenu } from './burgerMenu';

type HeaderContentProps = {
  navItemsProps?: string;
};

export const HeaderContent = ({ navItemsProps }: HeaderContentProps) => {
  return (
    <div className="max-w-7xl grow flex items-center justify-between mx-8">
      <Image 
        src={'/images/logo.webp'} 
        alt={'Logo de LPCC'} 
        width={64} 
        height={64}
        className="next-image"
        style={{ aspectRatio: 'auto' }}
        priority
      />

      <div className="hidden lg:flex items-center gap-8">
        <ul className={clsx('flex gap-8', navItemsProps)}>
          <HeaderLink href="/" label="Accueil"/>
          <HeaderLink href="/participer" label="Participer"/>
          <HeaderLink href="/nos-actions" label="Nos actions"/>
          <HeaderLink href="/vos-dons" label="Vos dons"/>
        </ul>
        <Link href="/vos-dons" className="primary-button font-semibold text-lg text-on-primary py-3 px-6">Faire un don</Link>
      </div>

      <BurgerMenu />
    </div>
  );
};