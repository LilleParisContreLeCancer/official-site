import { HeaderLink } from '@/components/header/headerLink';
import Link from 'next/link';

export const MobileNav = () => {
  return (
    <div className="absolute top-20 left-0 w-full bg-white shadow-md z-40">
      <ul className="flex flex-col items-center gap-4 py-4">
        <HeaderLink href="#qui-sommes-nous" label="Qui sommes-nous ?" />
        <HeaderLink href="#participer" label="Participer" />
        <HeaderLink href="#nos-actions" label="Nos actions" />
        <HeaderLink href="#dons" label="Vos dons" />
      </ul>
      <div className="flex justify-center py-4">
        <Link href="#dons" className="primary-button font-semibold text-lg text-on-primary py-3 px-6">Faire un don</Link>
      </div>
    </div>
  );
};
