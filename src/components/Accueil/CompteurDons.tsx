'use client';

import { useEffect, useState } from 'react';

interface DonData {
  current: number;
  goal: number;
  source: string;
}

interface CompteurDonsProps {
  className?: string;
}

export const CompteurDons = ({ className = '' }: CompteurDonsProps) => {
  const [donData, setDonData] = useState<DonData>({ current: 0, goal: 5000, source: 'loading' });
  const [animatedCurrent, setAnimatedCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch donation data
    const fetchDonData = async () => {
      try {
        const response = await fetch('/api/dons');
        if (response.ok) {
          const data = await response.json();
          setDonData(data);
        } else {
          // Fallback data if API fails
          setDonData({ current: 1250, goal: 5000, source: 'fallback' });
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données de dons:', error);
        // Fallback data
        setDonData({ current: 1250, goal: 5000, source: 'fallback' });
      } finally {
        setIsLoading(false);
      }
    };

    fetchDonData();
  }, []);

  // Animate counter
  useEffect(() => {
    if (isLoading) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = donData.current / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setAnimatedCurrent(Math.min(Math.round(increment * currentStep), donData.current));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [donData, isLoading]);

  const percentage = Math.min((donData.current / donData.goal) * 100, 100);

  if (isLoading) {
    return (
      <div className={`bg-black/50 backdrop-blur-sm rounded-2xl p-6 text-white text-center ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded mb-2"></div>
          <div className="h-8 bg-white/20 rounded mb-4"></div>
          <div className="h-2 bg-white/20 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-black/50 backdrop-blur-sm rounded-2xl p-6 text-white text-center max-w-md mx-auto ${className}`}>
      <h3 className="text-lg md:text-xl font-semibold mb-2 uppercase">
        Objectif 2025
      </h3>
      
      <div className="mb-4">
        <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
          {animatedCurrent.toLocaleString('fr-FR')} €
        </div>
        <div className="text-sm opacity-75">
          sur {donData.goal.toLocaleString('fr-FR')} € collectés
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-white/20 rounded-full h-3 mb-4 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-accent to-tertiary h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="text-sm opacity-90">
        <span className="font-semibold">{Math.round(percentage)}%</span> de l&apos;objectif atteint
      </div>

      {/* Small indicator of data source for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs opacity-50 mt-2">
          Source: {donData.source}
        </div>
      )}
    </div>
  );
};
