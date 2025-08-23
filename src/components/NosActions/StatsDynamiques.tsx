'use client';

import { useState, useEffect, useRef } from 'react';
import statsData from '../../../data/stats.json';

interface StatItem {
  value: number;
  label: string;
  description: string;
}

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  isVisible: boolean;
}

const AnimatedCounter = ({ end, duration = 2000, isVisible }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function pour une animation plus naturelle
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible, hasAnimated]);

  return <span>{count.toLocaleString('fr-FR')}</span>;
};

export const StatsDynamiques = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    statsData.editions,
    statsData.kilometres,
    statsData.euros_recoltes,
    statsData.participants
  ];

  return (
    <div ref={sectionRef} className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notre Impact en Chiffres
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Découvrez notre impact concret dans la lutte contre le cancer. Nos
            réalisations, nos chiffres et les projets de recherche que nous
            soutenons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter
                  end={stat.value}
                  duration={2000 + index * 200}
                  isVisible={isVisible}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white italic">
            Dernière mise à jour : 23/08/2025
          </p>
        </div>
      </div>
    </div>
  );
};
