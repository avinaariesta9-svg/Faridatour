import React, { useState, useEffect } from 'react';
import { SectionId } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { InfoUmrohHajiSection } from './components/sections/InfoUmrohHajiSection';
import { TipsArtikelSection } from './components/sections/TipsArtikelSection';
import { LokasiKonsultasiSection } from './components/sections/LokasiKonsultasiSection';
import { KontakSection } from './components/sections/KontakSection';
import { TemukanLokasiSection } from './components/sections/TemukanLokasiSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('beranda');
  const [quotaExceeded, setQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuotaExceeded = () => setQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
  }, []);

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
      {quotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

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

        {/* 7. Temukan Lokasi Kami (Google Maps Interaktif) */}
        <TemukanLokasiSection quotaExceeded={quotaExceeded} />
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
