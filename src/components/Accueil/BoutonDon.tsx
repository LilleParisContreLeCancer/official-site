import Link from 'next/link';

interface BoutonDonProps {
  className?: string;
}

export const BoutonDon = ({ className = '' }: BoutonDonProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      {/* CTA Principal - Don recherche */}
      <Link
        href="vos-dons"
        className="bg-accent text-primary font-bold text-lg md:text-xl px-8 py-4 rounded-full hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
      >
        🎗️ Je fais un don
      </Link>

      {/* CTA Secondaire - En savoir plus */}
      <Link
        href="#qui-sommes-nous"
        className="border-2 border-white text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-wide"
      >
        En savoir plus
      </Link>
    </div>
  );
};
