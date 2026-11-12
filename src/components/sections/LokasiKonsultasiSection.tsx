import React from 'react';
import { MapPin, Clock, CalendarCheck, MessageSquare, Coffee, Compass } from 'lucide-react';
import { SectionId } from '../../types';

interface LokasiKonsultasiProps {
  onNavigate: (id: SectionId) => void;
}

export const LokasiKonsultasiSection: React.FC<LokasiKonsultasiProps> = ({ onNavigate }) => {
  return (
    <section id="lokasi" className="py-20 bg-white border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B38] block mb-2 font-sans">
            Silaturahmi Langsung di Salatiga
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0A192F] font-bold mb-4">
            Lokasi & Suasana Konsultasi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Bagi Anda yang berdomisili di Kota Salatiga dan sekitarnya, konsultasi tatap muka 
            memberikan ketenangan lebih. Anda dapat berbincang santai bersama <strong>Hj. IDA R</strong> 
            sembari mencermati persiapan ibadah secara teliti.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Card */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#C5A059]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0A192F] text-[#C5A059] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#0A192F]">
                    Rumah Makan Cikal Gading, Tuntang, Salatiga
                  </h3>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Titik temu silaturahmi & konsultasi tatap muka ramah
                  </span>
                </div>
              </div>

              {/* Address Highlight Box & Google Maps Button */}
              <div className="mb-6 p-4 bg-white rounded-xl border border-[#C5A059]/30 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-semibold text-[#9A7B38] uppercase tracking-wider block">
                    Alamat Temu Konsultasi:
                  </span>
                  <p className="text-sm font-medium text-[#0A192F]">
                    Rumah Makan Cikal Gading, Tuntang, Salatiga
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rumah+Makan+Cikal+Gading+Tuntang+Salatiga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#0A192F] hover:bg-[#102A4C] text-[#C5A059] hover:text-white text-xs font-semibold rounded-md transition-colors whitespace-nowrap shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Petunjuk Arah Google Maps</span>
                </a>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-[#9A7B38] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#0A192F]">Suasana Silaturahmi yang Akrab</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Konsultasi dijalankan dalam suasana santai, kekeluargaan, dan penuh keterbukaan di Rumah Makan Cikal Gading. Anda bisa mengajak keluarga, orang tua, atau pasangan untuk berdiskusi dengan tenang.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex items-start gap-3">
                    <CalendarCheck className="w-5 h-5 text-[#9A7B38] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#0A192F]">Janji Temu Fleksibel</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Kami menyadari kesibukan Anda. Cukup hubungi via WhatsApp untuk menjadwalkan hari dan jam yang paling nyaman bagi Anda, baik pagi, sore, maupun akhir pekan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-[#9A7B38] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#0A192F]">Jangkauan Wilayah Layanan</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Melayani calon jamaah di seluruh kecamatan Kota Salatiga (Sidomukti, Tingkir, Argomulyo, Sidorejo), Tuntang, serta kota sekitar: Ambarawa, Bawen, Tengaran, Suruh, Ungaran, dan Boyolali.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-[#9A7B38]" />
                <span>Waktu Konsultasi: Setiap Hari (dengan konfirmasi terlebih dahulu)</span>
              </div>
              <a
                href="https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#0A192F] hover:bg-[#102A4C] text-[#C5A059] font-semibold text-xs uppercase tracking-wider rounded-md transition-colors whitespace-nowrap"
              >
                Buat Janji Temu Salatiga
              </a>
            </div>
          </div>

          {/* Right Side: Consultation Steps & Etiquette Card */}
          <div className="lg:col-span-5 bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block mb-2 font-sans">
                Etika & Alur Konsultasi
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold mb-4 text-white">
                3 Langkah Praktis Sebelum Berkonsultasi
              </h3>

              <div className="space-y-4 my-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059] text-[#0A192F] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F4EFE6]">Kirim Pesan WhatsApp Singkat</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                      Sebutkan nama dan gambaran rencana (misal: ingin berangkat sendiri, berdua dengan pasangan, atau rombongan keluarga).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059] text-[#0A192F] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F4EFE6]">Bawa Catatan Pertanyaan</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                      Tuliskan hal-hal yang ingin Anda pastikan, mulai dari kesiapan paspor, jadwal musim, hingga penanganan orang tua lansia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059] text-[#0A192F] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F4EFE6]">Diskusi Santai Tanpa Beban</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                      Hj. IDA R siap menyambut Anda dengan ramah. Tidak ada kewajiban transaksi langsung—fokus utama adalah kejelasan informasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-300">
              <span className="text-[#C5A059] font-semibold block mb-1">Farida Tour Travel Salatiga</span>
              Hubungi via WhatsApp: <strong className="text-white">085861275083</strong> atau Email: <strong className="text-white">fareda54254@gmail.com</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
