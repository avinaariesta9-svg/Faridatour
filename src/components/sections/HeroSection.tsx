import React from 'react';
import { MessageCircle, BookOpen, MapPin, HeartHandshake, ShieldCheck } from 'lucide-react';
import { SectionId } from '../../types';
import kabahImg from '../../assets/images/kabah_makkah_mecca_1794477014232.jpg';

interface HeroSectionProps {
  onNavigate: (id: SectionId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="beranda" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0A192F]">
      {/* Background Image: Holy Ka'bah at Masjidil Haram */}
      <div className="absolute inset-0 z-0">
        <img
          src={kabahImg}
          alt="Keagungan Ka'bah di Masjidil Haram Makkah Al-Mukarramah"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
        {/* Measured Gradient Scrim for high contrast & luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/85 to-[#0A192F]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Subtle Islamic greeting & brand identity */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
            <span>FARIDA TOUR TRAVEL</span>
            <span aria-hidden="true">·</span>
            <span>Salatiga</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-5 max-w-2xl text-balance">
            Mau Umroh atau Haji tapi Bingung Mulai dari Mana?
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8 font-light">
            Ngobrol dulu saja, gratis. Saya <strong className="font-semibold text-white">Hj. IDA R</strong>, warga Salatiga. Saya bantu jelaskan informasi Umroh dan Haji dengan bahasa yang gampang dipahami.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#D8B56C] via-[#C5A059] to-[#B38F46] text-[#0A192F] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md hover:brightness-105 active:scale-98 transition-all shadow-lg whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#0A192F]" />
              <span>KONSULTASI GRATIS VIA WHATSAPP</span>
            </a>

            <button
              onClick={() => onNavigate('tentang')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#C5A059]/50 text-slate-200 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap"
            >
              <span>KENALI SAYA</span>
            </button>
          </div>

          {/* 3 Pillars strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-slate-300">
            <div className="flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-semibold text-white">Konsultasi Hangat</h2>
                <p className="text-xs text-slate-300 mt-1">Diskusi santai dan terbuka tanpa rasa sungkan ataupun tekanan.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-semibold text-white">Hadir di Salatiga</h2>
                <p className="text-xs text-slate-300 mt-1">Mudah dijangkau oleh jamaah dari Salatiga, Ambarawa, dan sekitarnya.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-semibold text-white">Panduan Edukatif</h2>
                <p className="text-xs text-slate-300 mt-1">Fokus pada kesiapan fisik, kelengkapan berkas, serta bekal manasik.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
