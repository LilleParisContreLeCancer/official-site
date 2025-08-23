'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

export const FloatingDonButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  // Vérifier si on est dans la section dons
  useEffect(() => {
    const checkSection = () => {
      const donsSection = document.getElementById('dons');
      if (donsSection) {
        const rect = donsSection.getBoundingClientRect();
        const isInDonsSection = rect.top <= 100 && rect.bottom >= 100;
        setIsVisible(!isInDonsSection);
      }
    };

    // Vérifier au chargement et lors du scroll
    checkSection();
    window.addEventListener('scroll', checkSection);
    window.addEventListener('resize', checkSection);

    return () => {
      window.removeEventListener('scroll', checkSection);
      window.removeEventListener('resize', checkSection);
    };
  }, []);

  // Gestion du drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Limiter le bouton aux bords de l'écran
    const maxX = window.innerWidth - 80; // 80px = largeur approximative du bouton
    const maxY = window.innerHeight - 80; // 80px = hauteur approximative du bouton

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  }, [isDragging, dragStart.x, dragStart.y]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Gestion du drag pour mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
  };

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;

    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;

    setPosition({
      x: Math.max(20, Math.min(newX, maxX)),
      y: Math.max(20, Math.min(newY, maxY))
    });
  }, [isDragging, dragStart.x, dragStart.y]);

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Ajouter les event listeners pour le drag
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, dragStart, handleMouseMove, handleTouchMove]);

  if (!isVisible) return null;

  return (
    <div
      ref={buttonRef}
      className={`fixed z-50 transition-all duration-300 ${
        isDragging ? 'cursor-grabbing scale-110' : 'cursor-grab hover:scale-105'
      }`}
      style={{
        right: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <Link
        href="#dons"
        className="flex items-center justify-center w-16 h-16 bg-accent text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        onClick={(e) => {
          // Empêcher le clic si on est en train de dragger
          if (isDragging) {
            e.preventDefault();
          }
        }}
      >
        <div className="text-center">
          <div className="text-2xl mb-1">🎗️</div>
          <div className="text-xs font-bold leading-none">DON</div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Faire un don
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black"></div>
        </div>
      </Link>
    </div>
  );
};
