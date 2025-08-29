'use client';

import { useEffect, useMemo, useState } from 'react';

function getTargetDate(): Date {
  const now = new Date();
  const currentYear = now.getFullYear();
  // 27 December 07:00 local time (month is 0-indexed -> 11 = December)
  let target = new Date(currentYear, 11, 27, 7, 0, 0, 0);
  if (now.getTime() > target.getTime()) {
    target = new Date(currentYear + 1, 11, 27, 7, 0, 0, 0);
  }
  return target;
}

type CompteProps = { className?: string; variant?: 'card' | 'inline' };

export const CompteARebours = ({ className = '', variant = 'card' }: CompteProps) => {
  const target = useMemo(() => getTargetDate(), []);
  const [now, setNow] = useState<Date | null>(null);

  // Update every 30s for efficiency; switch to 1s when < 1h for precision
  useEffect(() => {
    setNow(new Date());

    const tick = () => setNow(new Date());
    // Start with 30s tick
    const interval = window.setInterval(tick, 30000);

    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, []);

  // During SSR or before mount, render a stable placeholder
  if (!now) {
    return (
      <div className={`text-center text-white/90 ${className}`}>
        {variant === 'card' ? (
          <>
            <p className="text-xl">Compte à rebours</p>
            <p className="text-3xl font-bold mt-2">…</p>
          </>
        ) : (
          <p className="text-base">Compte à rebours…</p>
        )}
      </div>
    );
  }

  const diffMs = target.getTime() - now.getTime();
  const diffHoursTotal = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60)));
  const diffDays = Math.floor(diffHoursTotal / 24);
  const hoursRemainder = diffHoursTotal % 24;

  // Switch display from days to hours when < 24h remaining
  const showHoursOnly = diffHoursTotal < 24;

  const labelTop = 'Compte à rebours';
  let value = '';
  let unit = '';

  if (showHoursOnly) {
    value = String(diffHoursTotal);
    unit = diffHoursTotal <= 1 ? 'heure restante' : 'heures restantes';
  } else {
    value = String(diffDays);
    unit = diffDays <= 1 ? 'jour restant' : 'jours restants';
  }

  if (variant === 'inline') {
    return (
      <div className={`text-center ${className}`}>
        <div className="text-2xl font-bold text-primary">{value}</div>
        <div className="text-sm text-gray-600">{unit}</div>
      </div>
    );
  }

  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-center text-white shadow-lg backdrop-blur-sm">
        <p className="text-lg md:text-xl opacity-90">{labelTop}</p>
        <div className="mt-2 flex items-end justify-center gap-2">
          <span className="text-4xl md:text-5xl font-extrabold leading-none">{value}</span>
          <span className="text-base md:text-lg opacity-90 mb-1">{unit}</span>
        </div>
        {!showHoursOnly && (
          <p className="text-sm opacity-75 mt-2">{hoursRemainder} h supplémentaires</p>
        )}
        <p className="text-xs opacity-60 mt-2">Échéance : 27 décembre, 07:00</p>
      </div>
    </div>
  );
};

export default CompteARebours;
