import Link from 'next/link';

interface CarteLienProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  isExternal?: boolean;
  badge?: {
    text: string;
    color: 'green' | 'orange' | 'red' | 'blue';
  };
  className?: string;
}

const badgeColors = {
  green: 'bg-green-100 text-green-800 border-green-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  red: 'bg-red-100 text-red-800 border-red-200',
  blue: 'bg-blue-100 text-blue-800 border-blue-200',
};

export const CarteLien = ({
  icon,
  title,
  description,
  buttonText,
  href,
  isExternal = false,
  badge,
  className = ''
}: CarteLienProps) => {
  const CardContent = () => (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 h-full flex flex-col ${className}`}>
      {/* Badge if provided */}
      {badge && (
        <div className="mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${badgeColors[badge.color]}`}>
            {badge.text}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="text-center flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
          {title}
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="text-center mt-auto">
        <span className="primary-button px-6 py-3 font-bold uppercase hover:bg-primary/80 transition-colors inline-flex items-center">
          {buttonText}
          {isExternal && (
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
        </span>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`${title} - ${description}`}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <Link href={href} className="block h-full">
      <CardContent />
    </Link>
  );
};
