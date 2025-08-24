import { HeaderLink } from '@/components/header/headerLink';
import Link from 'next/link';

interface MobileNavProps {
  onClose?: () => void;
}

export const MobileNav = ({ onClose }: MobileNavProps) => {
  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <div className="absolute top-20 left-0 w-full bg-white shadow-md z-40 animate-slideDown">
      <ul className="flex flex-col items-center gap-4 py-4">
        <div onClick={handleLinkClick}>
          <HeaderLink href="/" label="Accueil" />
        </div>
        <div onClick={handleLinkClick}>
          <HeaderLink href="/participer" label="Participer" />
        </div>
        <div onClick={handleLinkClick}>
          <HeaderLink href="/nos-actions" label="Nos actions" />
        </div>
        <div onClick={handleLinkClick}>
          <HeaderLink href="/vos-dons" label="Vos dons" />
        </div>
      </ul>
      <div className="flex justify-center py-4">
        <Link 
          href="/vos-dons" 
          className="primary-button font-semibold text-lg text-on-primary py-3 px-6"
          onClick={handleLinkClick}
        >
          Faire un don
        </Link>
      </div>
    </div>
  );
};
