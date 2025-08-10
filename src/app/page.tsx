'use client';

import { Header } from '@/components/header/header';
import { AccueilSection } from '@/components/Accueil';
import { QuiSommesNousSection } from '@/components/QuiSommesNous';
import { ParticiperSection } from '@/components/Participer';
import { NosActions } from '@/components/NosActions';
import { Dons } from '@/components/Dons';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <Header />
      <AccueilSection />
      <QuiSommesNousSection />
      <ParticiperSection />
      <NosActions />
      <Dons />
      <ContactSection />
      <Footer />
    </div>
  );
}
