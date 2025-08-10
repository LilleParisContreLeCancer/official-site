'use client';

import { Header } from '@/components/header/header';
import { AccueilSection } from '@/components/Accueil';
import { QuiSommesNousSection } from '@/components/QuiSommesNous';
import { CountdownSection } from '@/components/sections/CountdownSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { DonationSection } from '@/components/sections/DonationSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <Header />
      <AccueilSection />
      <QuiSommesNousSection />
      <CountdownSection />
      <AboutSection />
      <EventsSection />
      <StatsSection />
      <DonationSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
