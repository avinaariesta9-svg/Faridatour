import React, { useState, useRef } from 'react';
import { User, MessageCircle, MapPin, Upload, Camera, CheckCircle2, ShieldCheck, Wallet, FileText, Compass } from 'lucide-react';
import { SectionId } from '../../types';

interface AboutSectionProps {
  onNavigate: (id: SectionId) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPhotoUrl(objectUrl);
    }
  };

  return (
    <section id="tentang" className="py-20 bg-[#FAF7F2] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Photo Card (Tempat Foto Profil Asli) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#C5A059]/30 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A059]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

              {/* Photo Frame Container */}
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl border-2 border-dashed border-[#C5A059]/50 overflow-hidden bg-[#102A4C] flex flex-col items-center justify-center p-4 mb-5 shadow-inner">
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt="Foto Profil Hj. IDA R"
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-300 space-y-2">
                    <div className="w-16 h-16 rounded-full bg-[#0A192F] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                      <User className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-semibold text-white">Tempat Foto Profil Asli</span>
                    <span className="text-[11px] text-slate-400 max-w-[180px] leading-tight">
                      Sediakan foto asli Hj. IDA R tanpa rekayasa
                    </span>
                  </div>
                )}
              </div>

              {/* Upload photo trigger */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                aria-label="Unggah foto profil asli Hj. IDA R"
              />

              <div className="flex items-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 text-slate-200 text-[11px] font-medium rounded border border-white/10 transition-colors"
                >
                  <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{photoUrl ? 'Ganti Foto Asli' : 'Pilih Foto Profil Asli'}</span>
                </button>
                {photoUrl && (
                  <button
                    type="button"
                    onClick={() => setPhotoUrl(null)}
                    className="px-2.5 py-1.5 text-[11px] text-red-300 hover:text-red-200"
                  >
                    Reset
                  </button>
                )}
              </div>

              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block font-sans">
                Pendamping & Teman Informasi
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                Hj. IDA R
              </h3>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Warga Kota Salatiga, Jawa Tengah</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Content */}
          <div className="lg:col-span-7">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9A7B38] mb-3">
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <span>Profil Pendamping</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0A192F] font-bold leading-tight mb-6">
                Kenalan dengan Hj. IDA R
              </h2>

              {/* Exact content required */}
              <p className="text-base sm:text-lg text-[#0A192F]/90 leading-relaxed font-normal mb-8 bg-white p-5 rounded-xl border border-[#C5A059]/20 shadow-xs">
                &ldquo;Saya Hj. IDA R, warga Salatiga. Saya hadir sebagai teman informasi Umroh dan Haji untuk membantu masyarakat memahami biaya, persyaratan, cara memilih travel resmi, dan perencanaan tabungan keberangkatan.&rdquo;
              </p>

              {/* 4 Pillars of Help */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Wallet className="w-5 h-5 text-[#9A7B38] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wide">Memahami Biaya</h4>
                      <p className="text-xs text-slate-600 mt-1">Transparansi komponen pengeluaran riil tanpa jebakan biaya tersembunyi.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#9A7B38] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wide">Persyaratan & Berkas</h4>
                      <p className="text-xs text-slate-600 mt-1">Panduan lengkap paspor, vaksinasi, buku nikah, dan identitas keluarga.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#9A7B38] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wide">Memilih Travel Resmi</h4>
                      <p className="text-xs text-slate-600 mt-1">Kriteria travel berizin Kemenag agar keberangkatan aman dan terjamin.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9A7B38] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wide">Perencanaan Tabungan</h4>
                      <p className="text-xs text-slate-600 mt-1">Menata alokasi waktu dan tabungan berkah untuk diri maupun orang tua.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation button */}
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A192F] hover:bg-[#102A4C] text-[#C5A059] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ngobrol via WhatsApp (085861275083)</span>
                </a>
                <button
                  onClick={() => onNavigate('lokasi')}
                  className="px-4 py-2.5 text-xs text-slate-700 hover:text-[#0A192F] font-medium"
                >
                  Temu di Salatiga →
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 3. BAGIAN AJAKAN (Call-to-Action) */}
        <div className="bg-gradient-to-r from-[#0A192F] via-[#102A4C] to-[#0A192F] text-white rounded-2xl p-8 sm:p-10 border border-[#C5A059]/40 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block mb-2 font-sans">
              Konsultasi Ramah & Terbuka
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white mb-3 leading-tight">
              Tidak Perlu Bingung Memulai.
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-light">
              Silakan bertanya terlebih dahulu. Konsultasi informasi gratis dan tanpa kewajiban mendaftar.
            </p>
            <div>
              <a
                href="https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#D8B56C] via-[#C5A059] to-[#B38F46] text-[#0A192F] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md hover:brightness-105 active:scale-98 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#0A192F]" />
                <span>KONSULTASI VIA WHATSAPP (085861275083)</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
