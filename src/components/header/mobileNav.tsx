import { HeaderLink } from '@/components/header/headerLink';
import Link from 'next/link';

export const MobileNav = () => {
  return (
    <div className="absolute top-20 left-0 w-full bg-white shadow-md z-40">
      <ul className="flex flex-col items-center gap-4 py-4">
        <HeaderLink href="#" label="Qui sommes-nous ?" />
        <HeaderLink href="#" label="Evenements" />
        <HeaderLink href="#" label="Vos dons" />
        <HeaderLink href="#" label="Partenaires" />
      </ul>
      <div className="flex justify-center py-4">
        <Link href="#" className="primary-button font-semibold text-lg text-on-primary py-3 px-6">Faire un don</Link>
      </div>
    </div>
  );
};
