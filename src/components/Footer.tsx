import React from 'react';
import { Compass, MessageCircle, Mail, MapPin, AlertCircle, ShieldAlert } from 'lucide-react';
import { SectionId } from '../types';

interface FooterProps {
  onNavigate: (id: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const waUrlExact = "https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji.";

  return (
    <footer className="bg-[#071324] text-slate-400 border-t border-[#C5A059]/20 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mandatory Disclaimer Box */}
        <div className="mb-12 p-5 rounded-xl bg-[#0A192F] border border-[#C5A059]/40 shadow-sm">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                Pernyataan Resmi & Penafian (Disclaimer):
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                Website ini merupakan media informasi pribadi, bukan biro perjalanan resmi dan tidak menerima pembayaran pendaftaran. Pendaftaran resmi hanya melalui travel berizin Kementerian Agama.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9A7B38] to-[#C5A059] flex items-center justify-center text-[#0A192F]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-serif-luxury text-2xl font-bold text-white tracking-wide">
                FARIDA <span className="text-[#C5A059]">TOUR TRAVEL</span>
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              <strong className="text-white">Teman Info Umroh & Haji</strong> bersama <strong className="text-[#C5A059]">Hj. IDA R</strong> di Salatiga.
              Mendampingi setiap niat suci menuju Baitullah dengan informasi yang jujur, hangat, dan amanah.
            </p>

            <div className="text-[11px] text-slate-400 space-y-1">
              <div>Lokasi Konsultasi: <strong className="text-slate-200">Rumah Makan Cikal Gading, Tuntang, Salatiga</strong></div>
              <div>Melayani wilayah: Salatiga, Ambarawa, Boyolali, Ungaran, & sekitarnya</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('beranda')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tentang')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Tentang Saya
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('informasi')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Informasi Umroh & Haji
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tips')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Tips & Artikel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lokasi')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Lokasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kontak')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Kontak Konsultasi Hj. IDA R
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>WhatsApp: </span>
                <a
                  href={waUrlExact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#C5A059] font-medium"
                >
                  085861275083
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Email: </span>
                <a
                  href="mailto:fareda54254@gmail.com"
                  className="text-white hover:text-[#C5A059]"
                >
                  fareda54254@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300">Rumah Makan Cikal Gading, Tuntang, Salatiga</span>
                  <div className="mt-1">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rumah+Makan+Cikal+Gading+Tuntang+Salatiga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#C5A059] hover:underline"
                    >
                      Buka Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={waUrlExact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059] hover:bg-[#D8B56C] text-[#0A192F] font-bold text-xs uppercase tracking-wider rounded transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} FARIDA TOUR TRAVEL · Hj. IDA R · Salatiga. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Media Informasi Pribadi Umroh & Haji</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
