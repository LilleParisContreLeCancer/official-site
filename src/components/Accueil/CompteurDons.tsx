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
  const [donData, setDonData] = useState<DonData>({ current: 1250, goal: 5000, source: 'loading' });
  const [animatedCurrent, setAnimatedCurrent] = useState(1250);
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
      <div className={`bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-2xl shadow-xl ${className}`}>
        <h3 className="text-xl font-bold mb-4 text-center">
          🎯 Objectif de collecte
        </h3>
        
        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-2 h-12 flex items-center justify-center">
            <div className="animate-pulse bg-white/20 rounded h-8 w-32"></div>
          </div>
          <div className="text-lg opacity-90 h-6 flex items-center justify-center">
            <div className="animate-pulse bg-white/20 rounded h-4 w-40"></div>
          </div>
        </div>

        {/* Progress bar skeleton */}
        <div className="w-full bg-white/20 rounded-full h-3 mb-4 overflow-hidden">
          <div className="animate-pulse bg-white/30 h-full rounded-full w-1/4"></div>
        </div>

        <div className="text-sm opacity-90 h-5 flex items-center justify-center">
          <div className="animate-pulse bg-white/20 rounded h-3 w-24"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-2xl shadow-xl ${className}`}>
      <h3 className="text-xl font-bold mb-4 text-center">
        🎯 Objectif de collecte
      </h3>
      
      <div className="text-center mb-6">
        <div className="text-4xl font-bold mb-2 h-12 flex items-center justify-center">
          {animatedCurrent.toLocaleString('fr-FR')} €
        </div>
        <div className="text-lg opacity-90 h-6 flex items-center justify-center">
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

      <div className="text-sm opacity-90 h-5 flex items-center justify-center">
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
