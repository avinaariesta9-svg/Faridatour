import React, { useState } from 'react';
import { 
  Wallet, 
  ShieldCheck, 
  PiggyBank, 
  MessageCircle, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  HelpCircle,
  ExternalLink,
  CreditCard
} from 'lucide-react';

export const InfoUmrohHajiSection: React.FC = () => {
  const [selectedPanduan, setSelectedPanduan] = useState<number | null>(null);

  const waUrlDefault = "https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji.";

  // 1. TIGA KARTU LAYANAN MODERN
  const layananCards = [
    {
      id: 'biaya-syarat',
      title: 'Info Biaya & Syarat Umroh/Haji',
      icon: Wallet,
      tagline: 'Transparansi Komponen Ibadah',
      desc: 'Bimbingan memahami komponen biaya sebenarnya (tiket pesawat, visa, hotel, konsumsi, transportasi lokal) dan berkas persyaratan resmi tanpa mark-up atau angka fiktif.',
      points: [
        'Rincian komponen wajib vs pengeluaran pribadi',
        'Penjelasan syarat paspor dan administrasi keluarga',
        'Verifikasi biaya wajar standar Kementerian Agama'
      ]
    },
    {
      id: 'cek-travel',
      title: 'Cara Memeriksa Travel Resmi',
      icon: ShieldCheck,
      tagline: 'Keamanan Legalitas PPIU & PIHK',
      desc: 'Edukasi langkah mandiri mengecek izin Penyelenggara Perjalanan Ibadah Umroh (PPIU) dan Haji Khusus (PIHK) resmi melalui kanal SISKOPATUH Kemenag RI.',
      points: [
        'Panduan cek nomor SK izin travel di Kemenag',
        'Menerapkan prinsip 5 Pasti Umroh Kemenag RI',
        'Ciri-ciri penawaran mencurigakan / skema ponzi'
      ]
    },
    {
      id: 'tabungan',
      title: 'Perencanaan Tabungan Umroh/Haji',
      icon: PiggyBank,
      tagline: 'Langkah Nyata Menuju Baitullah',
      desc: 'Konsultasi menyusun alokasi tabungan syariah secara terencana dan aman tanpa terbebani, cocok untuk rencana ibadah pribadi maupun membiayai orang tua tercinta.',
      points: [
        'Simulasi hitungan target waktu keberangkatan',
        'Rekomendasi menabung di rekening bank syariah terpercaya',
        'Menghindari skema dana talangan berisiko tinggi'
      ]
    }
  ];

  // 2. EMPAT PANDUAN UMROH & HAJI EDUKASI SINGKAT
  const panduanItems = [
    {
      id: 1,
      title: 'Persiapan Sebelum Umroh',
      subtitle: 'Kesiapan Niat, Fisik & Pembekalan Manasik',
      summary: 'Langkah esensial agar ibadah berjalan lancar dan khusyuk sejak dari tanah air.',
      details: [
        'Menata Niat yang Lurus: Niatkan semata-mata mengharap ridha Allah SWT, bukan demi prestise sosial atau gelar.',
        'Latihan Kebugaran Fisik: Mulai berjalan kaki 2-3 km setiap pagi minimal sebulan sebelum jadwal, karena thawaf dan sa\'i membutuhkan stamina prima.',
        'Mengikuti Manasik: Pahami rukun (ihram, thawaf, sa\'i, tahallul, tertib) dan wajib umroh serta doa-doa yang dianjurkan.',
        'Pemeriksaan Kesehatan: Konsultasi dokter bagi yang memiliki komorbid dan siapkan obat rutin secukupnya dalam tas jinjing.'
      ]
    },
    {
      id: 2,
      title: 'Dokumen yang Perlu Disiapkan',
      subtitle: 'Kelengkapan Paspor, Identitas & Sertifikat Resmi',
      summary: 'Daftar berkas primer yang wajib dipersiapkan sebelum pendaftaran resmi.',
      details: [
        'Paspor Republik Indonesia: Masa berlaku minimal 7 bulan sebelum keberangkatan dengan susunan nama minimal 2 suku kata.',
        'KTP Elektronik & Kartu Keluarga: Salinan identitas yang valid dan sinkron dengan database kependudukan Dukcapil.',
        'Buku Nikah / Akta Lahir: Wajib bagi pasangan suami istri atau anak yang mendampingi mahramnya.',
        'Sertifikat Vaksinasi: Vaksin meningitis dan vaksinasi kesehatan lain sesuai regulasi otoritas Saudi Arabia yang berlaku.'
      ]
    },
    {
      id: 3,
      title: 'Cara Memilih Travel Berizin',
      subtitle: 'Standar 5 Pasti Kementerian Agama RI',
      summary: 'Tolak ukur utama memastikan biro perjalanan amanah dan terdaftar resmi.',
      details: [
        '1. Pasti Travelnya: Berizin resmi PPIU (Penyelenggara Perjalanan Ibadah Umroh) dari Kemenag RI.',
        '2. Pasti Jadwalnya: Memiliki kejelasan tanggal keberangkatan, rute, dan maskapai penerbangan.',
        '3. Pasti Terbangnya: Tiket pesawat pulang-pergi (PP) sudah terbit (confirmed ticket), bukan sekadar booking sementara.',
        '4. Pasti Hotelnya: Nama dan lokasi hotel di Makkah dan Madinah sudah dipastikan serta jaraknya jelas.',
        '5. Pasti Visanya: Memperoleh visa umroh/haji resmi dari Kedutaan/Otoritas Kerajaan Arab Saudi sebelum berangkat.'
      ]
    },
    {
      id: 4,
      title: 'Hal yang Perlu Diperhatikan Sebelum Membayar Biaya Perjalanan',
      subtitle: 'Kewaspadaan Finansial & Akad Perjanjian Transparan',
      summary: 'Prinsip pencegahan kerugian dan penipuan sebelum mentransfer dana apa pun.',
      details: [
        'Rekening Resmi Perusahaan: Jangan pernah mentransfer uang ke rekening perorangan atau rekening pribadi agen/sales.',
        'Kwitansi & Akad Tertulis: Minta bukti tanda terima bermeterai dan surat perjanjian layanan yang memuat hak serta kewajiban kedua belah pihak.',
        'Cermati Rincian Fasilitas: Pastikan rincian harga sudah mencakup atau belum mencakup perlengkapan, handling bandara, visa, dan asuransi.',
        'Waspadai Harga Terlalu Murah: Hindari travel yang menawarkan harga jauh di bawah batas bawah wajar standar pemerintah (biasanya mengarah pada skema ponzi atau penundaan berangkat).'
      ]
    }
  ];

  return (
    <section id="informasi" className="py-20 bg-white border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9A7B38] mb-2 font-sans">
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>Layanan & Panduan Edukatif</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0A192F] font-bold mb-4">
            Layanan Informasi Umroh & Haji
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            Farida Tour Travel hadir sebagai teman diskusi netral di Salatiga. Kami tidak memungut biaya konsultasi dan tidak memaksakan pembelian, agar Anda dan keluarga dapat membuat keputusan ibadah dengan tenang dan aman.
          </p>
        </div>

        {/* 1. TIGA KARTU LAYANAN MODERN */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9A7B38] block font-sans">
                Fasilitas Konsultasi
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#0A192F]">
                3 Layanan Informasi Utama
              </h3>
            </div>
            <span className="text-xs text-slate-500 hidden sm:block">
              Konsultasi Santai Bersama Hj. IDA R
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {layananCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-[#FAF7F2] rounded-2xl p-7 border border-[#C5A059]/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-[#C5A059] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9A7B38] block mb-1">
                      {card.tagline}
                    </span>

                    <h4 className="font-serif-luxury text-2xl font-bold text-[#0A192F] mb-3 leading-snug">
                      {card.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {card.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-[#C5A059]/20 text-xs text-slate-700">
                      {card.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7B38] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200">
                    <a
                      href={waUrlDefault}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0A192F] hover:bg-[#102A4C] text-[#C5A059] hover:text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors text-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>TANYA GRATIS VIA WHATSAPP</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. PANDUAN UMROH & HAJI (4 KONTEN EDUKASI SINGKAT) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9A7B38] block mb-1 font-sans">
              Bekal Calon Jamaah
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0A192F] mb-2">
              Panduan Edukasi Umroh & Haji
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Poin-poin penting sebelum mengambil keputusan dan menyerahkan berkas ke biro travel resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {panduanItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#C5A059]/40 shadow-xs transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#0A192F] text-[#C5A059] flex items-center justify-center font-bold text-xs shrink-0">
                      0{item.id}
                    </span>
                    <div>
                      <h4 className="font-serif-luxury text-xl font-bold text-[#0A192F] leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-[#9A7B38] block">{item.subtitle}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed font-light">
                    {item.summary}
                  </p>

                  <div className="space-y-2.5 bg-[#FAF7F2] p-4 rounded-xl border border-[#C5A059]/20 text-xs text-slate-700">
                    {item.details.map((dt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-[#9A7B38] font-bold">•</span>
                        <span className="leading-relaxed">{dt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Butuh penjelasan khusus?</span>
                  <a
                    href={waUrlDefault}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A192F] hover:text-[#9A7B38] transition-colors"
                  >
                    <span>Tanya Hj. IDA R via WA</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Warning Notice */}
          <div className="mt-10 p-4 sm:p-5 bg-[#0A192F] text-slate-300 rounded-xl border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed">
                <strong className="text-white">Penting untuk Diverifikasi:</strong> Regulasi visa, aturan vaksinasi, serta batasan usia dapat diperbarui sewaktu-waktu oleh Kementerian Agama RI dan Kementerian Haji & Umrah Kerajaan Saudi Arabia. Pastikan selalu memverifikasi ketentuan terbaru saat Anda bersiap mendaftar.
              </p>
            </div>
            <a
              href={waUrlDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#C5A059] hover:bg-[#D8B56C] text-[#0A192F] text-xs font-bold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              TANYA GRATIS VIA WHATSAPP
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
