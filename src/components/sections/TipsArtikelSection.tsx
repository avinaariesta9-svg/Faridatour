import React, { useState } from 'react';
import nabawiImg from '../../assets/images/masjid_nabawi_medina_1794477014619.jpg';
import { 
  X, 
  ArrowRight, 
  MessageCircle, 
  AlertCircle, 
  CheckCircle, 
  Bookmark,
  Compass
} from 'lucide-react';

interface ArticleItem {
  id: string;
  title: string;
  category: 'Tips Umroh' | 'Informasi Haji' | 'Persiapan Keberangkatan' | 'Edukasi Keuangan';
  readTime: string;
  snippet: string;
  needsVerification: boolean;
  verificationNote?: string;
  keyPoints: string[];
  content: string;
}

export const TipsArtikelSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const waUrlExact = "https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji.";

  const categories = [
    'Semua',
    'Tips Umroh',
    'Informasi Haji',
    'Persiapan Keberangkatan',
    'Edukasi Keuangan'
  ];

  const articles: ArticleItem[] = [
    {
      id: 'tips-raudhah',
      title: 'Adab dan Tips Khidmat Berziarah ke Raudhah Masjid Nabawi',
      category: 'Tips Umroh',
      readTime: '4 min baca',
      snippet: 'Raudhah adalah taman surga (Riyadhul Jannah). Simak tata cara perizinan aplikasi resmi Nusuk dan adab berdoa khusyuk di Madinah.',
      needsVerification: true,
      verificationNote: 'Sistem tasreh dan jadwal masuk Raudhah diatur berkala oleh Kementerian Haji & Umrah Kerajaan Saudi Arabia via aplikasi Nusuk.',
      keyPoints: [
        'Wajib reservasi jadwal tasreh Raudhah melalui aplikasi resmi Nusuk sebelum waktu kedatangan.',
        'Waktu sangat terbatas: utamakan shalat sunnah, shalawat, istighfar, dan doa tulus tanpa sibuk berfoto.',
        'Jaga kesabaran, jangan saling berdesakan, dan hormati arahan petugas Asykar Madinah.'
      ],
      content: `Rasulullah ﷺ bersabda: "Antara rumahku dan mimbarku terdapat salah satu taman dari taman-taman surga." (HR. Bukhari & Muslim).

Ziarah ke Raudhah kini diatur sangat tertib melalui sistem giliran aplikasi resmi Nusuk:
1. Pastikan nomor paspor dan visa aktif Anda telah terdaftar di aplikasi Nusuk untuk mengambil jadwal antrean (tasreh).
2. Datanglah 30-45 menit sebelum jam tasreh yang tertera di pintu gerbang yang ditentukan.
3. Karpet Raudhah berwarna hijau, berbeda dengan area Masjid Nabawi lainnya yang berkarpet merah.
4. Di dalam Raudhah, hindari sibuk berselfie atau membuat video. Manfaatkan setiap detik untuk bershalawat kepada Nabi ﷺ dan memohon ampunan untuk diri sendiri, kedua orang tua, serta kaum muslimin.`
    },
    {
      id: 'tips-lansia',
      title: 'Menjaga Kebugaran & Stamina Jamaah Lansia di Tanah Suci',
      category: 'Tips Umroh',
      readTime: '5 min baca',
      snippet: 'Langkah taktis bagi jamaah lanjut usia agar tetap prima selama thawaf, sa\'i, dan ziarah tanpa kelelahan berlebih.',
      needsVerification: false,
      keyPoints: [
        'Biasakan jalan santai 20-30 menit setiap pagi minimal sebulan sebelum berangkat.',
        'Manfaatkan fasilitas resmi skuter listrik atau kursi roda di lantai atas Masjidil Haram jika sendi/lutut bermasalah.',
        'Bawa obat-obatan pribadi rutin di tas kabin lengkap dengan anjuran dokter.'
      ],
      content: `Ibadah Umroh menuntut ketahanan fisik yang cukup besar, terutama rangkaian thawaf 7 putaran dan sa'i antara bukit Shafa dan Marwah sejauh kurleb 3,5 kilometer.

Bagi orang tua dan jamaah lansia:
1. Istirahat cukup sebelum ibadah utama: Jangan langsung memaksakan diri thawaf segera setelah tiba jika tubuh masih lelah akibat penerbangan panjang 9-10 jam.
2. Manfaatkan jalur skuter dan kursi roda resmi: Otoritas Masjidil Haram menyediakan jalur skuter elektrik mandiri di lantai mezzanine yang sangat aman dan nyaman bagi jamaah lansia.
3. Hidrasi air zamzam secara berkala: Pilihlah dispenser berlabel 'Not Cold' (ghairu mubarad) agar tenggorokan tidak mudah radang atau batuk di tengah udara gurun.`
    },
    {
      id: 'haji-perbedaan',
      title: 'Mengenal Perbedaan Haji Reguler, Haji Khusus, dan Haji Furoda',
      category: 'Informasi Haji',
      readTime: '5 min baca',
      snippet: 'Wawasan objektif seputar kuota Kemenag RI, visa undangan Mujamalah Kerajaan Saudi, dan pentingnya memastikan keabsahan visa haji resmi.',
      needsVerification: true,
      verificationNote: 'Kuota haji, ketentuan visa Mujamalah/Furoda, serta masa tunggu resmi ditetapkan setiap musim oleh Kemenag RI dan Pemerintah Saudi Arabia.',
      keyPoints: [
        'Haji Reguler: Dikelola langsung Kemenag RI dengan masa tunggu resmi berjenjang antar kota/provinsi.',
        'Haji Khusus (PIHK): Kuota resmi Kemenag dengan fasilitas akomodasi lebih dekat dan masa tunggu lebih singkat.',
        'Haji Furoda / Mujamalah: Menggunakan visa haji resmi undangan Kerajaan Saudi di luar kuota Kemenag; harus diverifikasi legalitasnya agar tidak menggunakan visa ziarah ilegal.'
      ],
      content: `Menunaikan rukun Islam ke-5 memerlukan pemahaman jalur keberangkatan yang benar agar tidak terjebak penipuan visa non-haji:

1. Haji Reguler:
Pendaftaran dilakukan melalui Kankemenag kabupaten/kota setempat dengan setoran awal Bipih ke BPKH. Memiliki antrean resmi yang dapat dicegah kepastiannya melalui nomor porsi.

2. Haji Khusus (dulu Haji Plus):
Dikelola oleh Penyelenggara Ibadah Haji Khusus (PIHK) resmi yang berizin. Biaya lebih tinggi dengan fasilitas hotel bintang 5 serta tenda berpendingin khusus di Mina dan Arafah.

3. Haji Furoda (Visa Mujamalah):
Haji tanpa antrean kuota Kemenag yang bersumber dari undangan resmi Kerajaan Arab Saudi. Pastikan visa yang diterbitkan adalah visa resmi haji (Tasyrih Haji), bukan visa turis atau visa ziarah kerja yang dilarang untuk berhaji.`
    },
    {
      id: 'haji-puncak',
      title: 'Memahami Rangkaian Hari Puncak Ibadah Haji (Armuzna)',
      category: 'Informasi Haji',
      readTime: '4 min baca',
      snippet: 'Tahapan wukuf di Padang Arafah, mabit di Muzdalifah, melontar jumrah di Mina, hingga thawaf ifadhah di Makkah.',
      needsVerification: false,
      keyPoints: [
        'Wukuf di Arafah pada 9 Dzulhijjah adalah inti dari ibadah haji (Al-Hajju Arafah).',
        'Mabit di Muzdalifah untuk mengumpulkan kerikil dan mabit di Mina selama hari Tasyriq.',
        'Pentingnya menjaga kesabaran tinggi di tengah pergerakan jutaan jamaah dari seluruh penjuru dunia.'
      ],
      content: `Puncak ibadah haji terpusat di kawasan Arafah, Muzdalifah, dan Mina (Armuzna):
- 8 Dzulhijjah (Hari Tarwiyah): Jamaah bersiap menuju Mina atau langsung ke Arafah sesuai arahan pembimbing.
- 9 Dzulhijjah (Wukuf di Arafah): Menghabiskan siang hingga maghrib dengan zikir, doa, dan muhasabah diri. Inilah waktu paling mustajab memohon ampunan.
- Malam 10 Dzulhijjah: Mabit di Muzdalifah untuk mengambil kerikil.
- 10 - 13 Dzulhijjah: Mabit di Mina, melontar Jumrah Aqabah, Ula, dan Wustha, serta thawaf ifadhah dan sa'i di Masjidil Haram.`
    },
    {
      id: 'persiapan-packing',
      title: 'Panduan Cermat Memilah Barang: Koper Bagasi vs Tas Kabin Pesawat',
      category: 'Persiapan Keberangkatan',
      readTime: '3 min baca',
      snippet: 'Daftar barang primer yang wajib selalu melekat di tas kabin dan apa saja yang cukup masuk bagasi besar koper hotel.',
      needsVerification: false,
      keyPoints: [
        'Tas kabin: Paspor, buku vaksin, 1 stel kain ihram/mukena cadangan, obat rutin, dan sandal masuk masjid.',
        'Koper bagasi: Pakaian harian bahan katun adem, perlengkapan mandi besar, gunting tahallul, colokan kaki tiga.',
        'Batasan cairan kabin pesawat: Maksimal 100 ml per wadah dalam kantong transparan.'
      ],
      content: `Kenyamanan perjalanan udara berjam-jam sangat bergantung pada penataan bawaan:

Tas Jinjing / Kabin (Dibawa ke tempat duduk):
- Dokumen penting: Paspor, tiket pesawat, bukti vaksinasi, dan kartu identitas jamaah.
- 1 Stel kain ihram (pria) atau busana ihram ganti (wanita): Sangat penting jika mengambil miqat di atas pesawat menjelang transit/mendarat di Jeddah.
- Sandal cadangan dan kantong kresek sandal agar mudah dibawa saat masuk ke dalam masjid.
- Powerbank kapasitas aman maskapai (di bawah 20.000 mAh).

Koper Bagasi (Masuk bagasi pesawat):
- Pakaian ihram utama dan baju harian secukupnya.
- Gunting kuku dan gunting kecil tahallul (wajib di bagasi, dilarang di kabin).
- Adaptor colokan listrik tipe G (kaki tiga) yang standar digunakan di hotel-hotel Arab Saudi.`
    },
    {
      id: 'persiapan-cuaca',
      title: 'Menghadapi Dinamika Iklim & Cuaca Kering di Makkah dan Madinah',
      category: 'Persiapan Keberangkatan',
      readTime: '3 min baca',
      snippet: 'Udara gurun memiliki tingkat kelembaban yang sangat rendah. Ketahui perlindungan terbaik untuk kulit dan pernapasan.',
      needsVerification: false,
      keyPoints: [
        'Sediakan lip balm, petroleum jelly/pelembab, dan semprotan air wajah untuk mencegah mimisan dan bibir pecah-pecah.',
        'Gunakan kacamata hitam di siang hari untuk meredam pantulan terik pada marmer putih Masjidil Haram.',
        'Minum air zamzam secara teratur sedikit demi sedikit tanpa menunggu haus.'
      ],
      content: `Perbedaan mendasar antara iklim tropis Indonesia dan tanah suci adalah kelembaban udara:
- Udara Saudi sangat kering (low humidity), sehingga keringat cepat menguap dan tubuh tidak terasa basah meski kehilangan banyak cairan.
- Oleskan pelembab atau petroleum jelly di cuping hidung bagian dalam untuk mencegah pembuluh darah tipis hidung pecah (mimisan).
- Di musim dingin (Desember - Februari), suhu malam dan subuh di Madinah bisa turun hingga 12°C, siapkan jaket atau pakaian hangat.`
    },
    {
      id: 'keuangan-syariah',
      title: 'Merencanakan Tabungan Umroh/Haji Melalui Rekening Syariah Resmi',
      category: 'Edukasi Keuangan',
      readTime: '4 min baca',
      snippet: 'Membangun disiplin menabung dengan autodebet bank syariah, menghindari skema berisiko tinggi, dan menjaga berkahnya niat.',
      needsVerification: true,
      verificationNote: 'Produk tabungan haji/umroh diatur oleh OJK, LPS, dan BPKH melalui Bank Syariah terdaftar.',
      keyPoints: [
        'Buka rekening khusus tabungan umroh/haji dengan akad Wadiah atau Mudharabah di bank syariah resmi.',
        'Aktifkan autodebet bulanan sesuai target perkiraan keberangkatan agar dana tidak terpakai kebutuhan konsumtif.',
        'Hindari skema talangan utang berbunga atau investasi tanpa kejelasan legalitas OJK.'
      ],
      content: `Keberangkatan ibadah yang tenang bermula dari sumber dana yang halal dan tertata dengan baik:
1. Rekening Khusus Terpisah: Jangan mencampur dana persiapan umroh dengan rekening belanja sehari-hari.
2. Gunakan Bank Syariah: Bank syariah memiliki rekening khusus tabungan haji/umroh yang terhubung langsung dengan sistem SISKOPATUH dan BPKH saat Anda siap membayar setoran awal porsi.
3. Hindari Skema Cepat Berangkat Tanpa Nalar: Jangan tergiur pihak yang menjanjikan berangkat dulu bayar belakangan dengan sistem denda berbunga atau skema multi level yang berisiko menelantarkan dana jamaah.`
    },
    {
      id: 'keuangan-transparan',
      title: 'Cermat Memeriksa Rincian Biaya: Waspadai Jebakan Biaya Tersembunyi',
      category: 'Edukasi Keuangan',
      readTime: '4 min baca',
      snippet: 'Cara membaca brosur penawaran umroh secara kritis: tiket maskapai, jarak hotel, handling fee, dan komponen yang belum termasuk.',
      needsVerification: true,
      verificationNote: 'Komponen biaya paket wajib tercantum transparan dalam lembar perjanjian (MOU) travel berizin resmi.',
      keyPoints: [
        'Periksa apakah paket sudah termasuk tiket pesawat PP (direct atau transit berapa lama).',
        'Pastikan jarak hotel ke pelataran masjid: hotel bintang 3 berjarak 500m berbeda nilainya dengan hotel ring 1 depan pelataran.',
        'Tanyakan apakah biaya visa, asuransi, manasik, dan perlengkapan sudah tercakup atau masih ditagih terpisah.'
      ],
      content: `Sebelum menyetujui paket biro mana pun, mintalah rincian 'Include' dan 'Exclude' secara tertulis:
- Biaya yang umumnya sudah termasuk: Tiket pesawat PP, visa umroh, akomodasi hotel Makkah & Madinah, makan 3x sehari menu Indonesia, muthawwif/pembimbing, bus AC antar kota, asuransi perjalanan.
- Biaya yang seringkali ditagih terpisah: Pembuatan paspor di imigrasi lokal, vaksinasi meningitis, kelebihan bagasi maskapai, pengeluaran pribadi (laundry, telepon, kursi roda pribadi).
- Mintalah kepastian nama hotel dan maskapai, bukan hanya keterangan 'setaraf' tanpa nama yang jelas.`
    }
  ];

  const filteredArticles = selectedCategory === 'Semua' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <section id="tips" className="py-20 bg-[#FAF7F2] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Masjid Nabawi High Quality Image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-xl border border-[#C5A059]/30 bg-[#0A192F]">
          <div className="h-64 sm:h-80 md:h-96 w-full relative">
            <img
              src={nabawiImg}
              alt="Keagungan Kubah Hijau dan Payung Masjid Nabawi di Madinah Al-Munawwarah"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/55 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] block mb-2 font-sans">
                Madinah Al-Munawwarah & Makkah Al-Mukarramah
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold mb-2">
                Artikel Edukasi Umroh & Haji
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl font-light">
                Kumpulan tulisan edukatif terpercaya seputar tips ibadah, informasi haji, persiapan logistik, dan perencanaan keuangan yang transparan untuk jamaah.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B38] block font-sans">
              Pilih Kategori Pembahasan
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#0A192F]">
              Katalog Artikel Edukatif
            </h3>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#C5A059]/30 max-w-full overflow-x-auto shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0A192F] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0A192F] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-[#C5A059]/20 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#9A7B38]">{art.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.readTime}</span>
                  </div>

                  {art.needsVerification && (
                    <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-amber-600 shrink-0" />
                      <span>Perlu Verifikasi</span>
                    </span>
                  )}
                </div>

                <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#0A192F] mb-3 leading-snug">
                  {art.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed font-light">
                  {art.snippet}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  {art.keyPoints.slice(0, 2).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#9A7B38] font-bold">•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A192F] hover:text-[#9A7B38] transition-colors"
                >
                  <span>Baca Penjelasan Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={waUrlExact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#0A192F] hover:bg-[#102A4C] text-[#C5A059] hover:text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>TANYA GRATIS VIA WHATSAPP</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA WhatsApp on Artikel Section */}
        <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block font-sans">
              Pusat Edukasi Salatiga
            </span>
            <h4 className="font-serif-luxury text-2xl font-bold text-white">
              Punya Pertanyaan Seputar Topik di Atas?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Hj. IDA R siap berdiskusi dan membantu memverifikasi ketentuan terbaru langsung via WhatsApp.
            </p>
          </div>

          <a
            href={waUrlExact}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#D8B56C] via-[#C5A059] to-[#B38F46] text-[#0A192F] text-xs font-bold uppercase tracking-wider rounded-md hover:brightness-105 active:scale-98 transition-all shadow-md whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#0A192F]" />
            <span>TANYA GRATIS VIA WHATSAPP</span>
          </a>
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border border-[#C5A059]/30">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Tutup artikel"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#9A7B38] font-medium mb-3">
              <span>{selectedArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0A192F] mb-3">
              {selectedArticle.title}
            </h3>

            {selectedArticle.needsVerification && (
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 mb-5 flex items-start gap-2.5 text-xs text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Tanda Verifikasi Resmi:</strong>
                  <span>{selectedArticle.verificationNote || 'Informasi ini perlu selalu diverifikasi dengan ketentuan resmi Kemenag RI / Kedutaan Arab Saudi terkini.'}</span>
                </div>
              </div>
            )}

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#C5A059]/20 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9A7B38] mb-2 font-sans">
                Ringkasan Poin Penting:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedArticle.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#9A7B38] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-8 font-light">
              {selectedArticle.content}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Konsultasikan langsung dengan Hj. IDA R
              </span>
              <a
                href={waUrlExact}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0A192F] hover:bg-[#102A4C] text-[#C5A059] hover:text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>TANYA GRATIS VIA WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
