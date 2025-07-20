'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { HeaderContent } from '@/components/header/headerContent';


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isScrolled) return null;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween', ease: 'easeInOut', duration: .2 }}
      className="fixed top-0 flex justify-center items-center shadow-sm h-20 w-full z-50 bg-white"
    >
      <HeaderContent/>
    </motion.header>
  );
};