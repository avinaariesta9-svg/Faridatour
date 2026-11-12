import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, Phone, CheckCircle, ShieldAlert } from 'lucide-react';

export const KontakSection: React.FC = () => {
  const [nama, setNama] = useState('');
  const [topik, setTopik] = useState('Konsultasi Rencana Umroh');
  const [pesan, setPesan] = useState('');

  const topikOptions = [
    'Konsultasi Rencana Umroh',
    'Konsultasi Umroh Plus / Bersama Keluarga',
    'Informasi Haji Khusus / Furoda',
    'Tanya Syarat Paspor & Dokumen',
    'Atur Janji Temu Tatap Muka di Salatiga',
    'Lainnya'
  ];

  const handleKirimWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const namaText = nama.trim() ? nama.trim() : 'Hamba Allah';
    const catatanText = pesan.trim() ? `\n\nCatatan Pertanyaan:\n"${pesan.trim()}"` : '';
    
    const formattedText = `Assalamu'alaikum Hj. IDA R,\nSaya: ${namaText}\nTopik Konsultasi: ${topik}${catatanText}\n\nMohon informasi dan bimbingan seputar ibadah Umroh/Haji di Farida Tour Travel Salatiga. Terima kasih.`;
    
    const waUrl = `https://wa.me/6285861275083?text=${encodeURIComponent(formattedText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kontak" className="py-20 bg-[#0A192F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2 font-sans">
            Hubungi Teman Info Umroh & Haji
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mb-4">
            Kontak & Konsultasi Langsung
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Silakan hubungi <strong>Hj. IDA R</strong> melalui WhatsApp, telepon, atau email. 
            Kami siap mendengarkan rencana ibadah Anda dengan penuh keterbukaan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Brand Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#102A4C]/70 rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 backdrop-blur-xs">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block mb-1 font-sans">
                Identitas Layanan
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-white mb-1">
                FARIDA TOUR TRAVEL
              </h3>
              <p className="text-xs text-[#F4EFE6] mb-6">
                Pemilik: <strong>Hj. IDA R</strong> · Salatiga
              </p>

              <div className="space-y-4 text-xs text-slate-300">
                <a
                  href="https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">WhatsApp Konsultasi</span>
                    <strong className="text-sm text-white group-hover:text-[#C5A059] transition-colors">
                      085861275083
                    </strong>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">Langsung ke Hj. IDA R</span>
                  </div>
                </a>

                <a
                  href="mailto:fareda54254@gmail.com"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Email Resmi</span>
                    <strong className="text-sm text-white group-hover:text-[#C5A059] transition-colors">
                      fareda54254@gmail.com
                    </strong>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Kirim email langsung</span>
                  </div>
                </a>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-700/50 text-[#C5A059] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Lokasi Temu Konsultasi</span>
                      <strong className="text-sm text-white block">Rumah Makan Cikal Gading, Tuntang, Salatiga</strong>
                      <span className="text-[10px] text-slate-400 block mt-0.5">Silaturahmi santai & terbuka</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-white/10">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rumah+Makan+Cikal+Gading+Tuntang+Salatiga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-[#D8B56C] font-semibold"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Buka Petunjuk di Google Maps →</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Konsultasi informasi gratis tanpa pungutan biaya.</span>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Message Composer Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] text-[#0A192F] rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B38] block mb-1 font-sans">
              Formulir Tanya Cepat
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#0A192F] mb-2">
              Kirim Pesan Langsung ke WhatsApp Hj. IDA R
            </h3>
            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Tuliskan nama dan topik yang ingin Anda tanyakan. Pesan akan otomatis terformat rapi dan siap dikirim langsung ke WhatsApp <strong>085861275083</strong>.
            </p>

            <form onSubmit={handleKirimWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#0A192F] mb-1.5">
                  Nama Anda / Keluarga:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Ibu Rina / Bpk. Ahmad"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A192F] focus:ring-1 focus:ring-[#0A192F] text-[#0A192F]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A192F] mb-1.5">
                  Topik Informasi yang Ingin Ditanyakan:
                </label>
                <select
                  value={topik}
                  onChange={(e) => setTopik(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A192F] focus:ring-1 focus:ring-[#0A192F] text-[#0A192F]"
                >
                  {topikOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A192F] mb-1.5">
                  Pertanyaan Tambahan / Catatan Khusus (Opsional):
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Rencana berangkat bersama orang tua lansia (usia 67 tahun), butuh info fasilitas kursi roda dan waktu yang tidak terlalu padat."
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A192F] focus:ring-1 focus:ring-[#0A192F] text-[#0A192F]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#D8B56C] via-[#C5A059] to-[#B38F46] hover:brightness-105 active:scale-99 text-[#0A192F] font-semibold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan ke WhatsApp (085861275083)</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center mt-2">
                Pesan akan langsung tersambung ke WhatsApp Hj. IDA R tanpa perantara.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
