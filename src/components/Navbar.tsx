import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Compass, MessageCircle } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: SectionId; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Saya' },
    { id: 'informasi', label: 'Informasi Umroh & Haji' },
    { id: 'tips', label: 'Tips & Artikel' },
    { id: 'lokasi', label: 'Lokasi' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const handleLinkClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-md border-b border-[#C5A059]/20 py-3'
          : 'bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark with elegant badge */}
          <button
            onClick={() => handleLinkClick('beranda')}
            className="flex items-center gap-2.5 text-left group transition-transform focus:outline-none"
            aria-label="Farida Tour Travel - Kembali ke Beranda"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#9A7B38] via-[#C5A059] to-[#F4EFE6] flex items-center justify-center shadow-sm">
              <Compass className="w-5 h-5 text-[#0A192F]" />
            </div>
            <div>
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-white block leading-tight">
                FARIDA <span className="text-[#C5A059]">TOUR TRAVEL</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059]/80 block font-sans">
                Teman Info Umroh & Haji · Salatiga
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm tracking-wide transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? 'text-[#C5A059] font-semibold'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#D8B56C] via-[#C5A059] to-[#B38F46] rounded-md hover:brightness-105 transition-all shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Konsultasi WA</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A192F]/98 border-b border-[#C5A059]/20 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'bg-[#C5A059]/15 text-[#C5A059] font-medium'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-white/10">
            <a
              href="https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] rounded-md hover:bg-[#D8B56C] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp: 085861275083</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
