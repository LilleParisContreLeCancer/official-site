interface AccrocheProps {
  className?: string;
}

export const Accroche = ({ className = '' }: AccrocheProps) => {
  return (
    <div className={`text-center text-white ${className}`}>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 leading-tight">
        Chaque coup de pédale rapproche la recherche d'une victoire
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
        Ensemble, unissons nos forces pour soutenir la recherche contre le cancer 
        à travers le sport et la solidarité.
      </p>
    </div>
  );
};
