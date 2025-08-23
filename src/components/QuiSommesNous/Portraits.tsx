'use client';

import { LazyImage } from '@/components/ui/LazyImage';
import { useState } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  image: string;
  email?: string;
  linkedin?: string;
}

// Données de l'équipe LPCC
const teamMembers: TeamMember[] = [
  {
    id: 'presidente',
    name: 'Emilia MESELLATY',
    role: 'Présidente',
    testimonial: 'Ensemble, nous pédalons pour la recherche contre le cancer.',
    image: '/images/portraits/presidente.jpg',
    email: 'emilia.mesellaty@gmail.com',
    linkedin: 'https://linkedin.com/in/emilia-mesellaty'
  },
  {
    id: 'tresoriere',
    name: 'Nathalie BOUQUET',
    role: 'Trésorière',
    testimonial: 'Chaque euro compte pour soutenir la recherche médicale.',
    image: '/images/portraits/tresoriere.jpg',
    email: 'lillepariscontrelecancer@mail.com'
  },
  {
    id: 'secretaire',
    name: 'Amélie BERTIN',
    role: 'Secrétaire',
    testimonial: 'L\'organisation au service d\'une noble cause.',
    image: '/images/portraits/secretaire.jpg',
    email: 'lillepariscontrelecancer@mail.com'
  }
];

interface PortraitsProps {
  className?: string;
}

export const Portraits = ({ className = '' }: PortraitsProps) => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-bobby-rough">
          Notre Équipe
        </h2>
        <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          Des passionnés unis par une mission commune : soutenir la recherche contre le cancer
          à travers le sport et la solidarité.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            {/* Image container */}
            <div className="relative w-full h-64 overflow-hidden">
              <LazyImage
                src={member.image}
                alt={`Portrait de ${member.name}, ${member.role} de LPCC`}
                fill
                quality="HIGH"
                sizes="PORTRAIT"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                rootMargin="150px 0px"
              />

              {/* Overlay on hover */}
              <div className={`absolute inset-0 bg-primary/80 transition-opacity duration-300 flex items-center justify-center ${hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                }`}>
                <div className="text-center text-white p-4">
                  <p className="text-sm italic mb-4">&ldquo;{member.testimonial}&rdquo;</p>
                  <div className="flex justify-center space-x-3">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                        aria-label={`Contacter ${member.name} par email`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                        aria-label={`Voir le profil LinkedIn de ${member.name}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
              <p className="text-accent font-semibold uppercase text-sm tracking-wide text-black">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
