import React, { useState, useEffect } from 'react';
import { SectionId } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { InfoUmrohHajiSection } from './components/sections/InfoUmrohHajiSection';
import { TipsArtikelSection } from './components/sections/TipsArtikelSection';
import { LokasiKonsultasiSection } from './components/sections/LokasiKonsultasiSection';
import { KontakSection } from './components/sections/KontakSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('beranda');

  const scrollToSection = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Intersection observer to track current active section during manual scroll
  useEffect(() => {
    const sectionIds: SectionId[] = [
      'beranda',
      'tentang',
      'informasi',
      'tips',
      'lokasi',
      'kontak'
    ];

    const handleScrollObserver = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#0A192F]">
      {/* Sticky Premium Islamic Navbar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Beranda */}
        <HeroSection onNavigate={scrollToSection} />

        {/* 2. Tentang Hj. IDA R */}
        <AboutSection onNavigate={scrollToSection} />

        {/* 3. Informasi Umroh & Haji */}
        <InfoUmrohHajiSection />

        {/* 4. Tips & Artikel */}
        <TipsArtikelSection />

        {/* 5. Lokasi Konsultasi Salatiga */}
        <LokasiKonsultasiSection onNavigate={scrollToSection} />

        {/* 6. Kontak */}
        <KontakSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Action for Quick Chat */}
      <FloatingWhatsApp />

      {/* Back to Top Floating Button */}
      <ScrollToTop />
    </div>
  );
}
