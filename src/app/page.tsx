'use client';

import { Header } from '@/components/header/header';
import { AccueilSection } from '@/components/Accueil';
import { QuiSommesNousSection } from '@/components/QuiSommesNous';
import { ParticiperSection } from '@/components/Participer';
import { NosActions } from '@/components/NosActions';
import { Dons } from '@/components/Dons';
import { Footer } from '@/components/sections/Footer';
import { FloatingDonButton } from '@/components/FloatingDonButton';

export default function Home() {
  return (
    <div className={'flex flex-col'}>
      <Header />
      <AccueilSection />
      <QuiSommesNousSection />
      <ParticiperSection />
      <NosActions />
      <Dons />
      <Footer />
      <FloatingDonButton />
    </div>
  );
}
