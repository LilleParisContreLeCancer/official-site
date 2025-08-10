'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Calculate initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={'flex flex-col items-center justify-center'}>
      {/* Main countdown number */}
      <div className={'text-8xl md:text-9xl font-bold text-primary mb-2'}>
        {timeLeft.days}
      </div>
      <div className={'text-lg md:text-xl font-semibold text-primary uppercase mb-8'}>
        JOURS
      </div>
      
      {/* Hours, Minutes, Seconds */}
      <div className={'flex gap-8 md:gap-12 text-center'}>
        <div className={'flex flex-col'}>
          <div className={'text-4xl md:text-5xl font-bold text-primary'}>
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className={'text-sm md:text-base font-semibold text-primary uppercase'}>
            HEURES
          </div>
        </div>
        
        <div className={'flex flex-col'}>
          <div className={'text-4xl md:text-5xl font-bold text-primary'}>
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className={'text-sm md:text-base font-semibold text-primary uppercase'}>
            MINUTES
          </div>
        </div>
        
        <div className={'flex flex-col'}>
          <div className={'text-4xl md:text-5xl font-bold text-primary'}>
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className={'text-sm md:text-base font-semibold text-primary uppercase'}>
            SECONDES
          </div>
        </div>
      </div>
      
      {/* "JUSQU'À" text */}
      <div className={'text-lg md:text-xl font-semibold text-primary uppercase mt-8'}>
        JUSQU'À
      </div>
    </div>
  );
};
