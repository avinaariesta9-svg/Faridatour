import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Kontak Cepat WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      <div className="hidden sm:block bg-white text-[#0A192F] text-xs font-medium py-1.5 px-3 rounded-full shadow-md border border-[#C5A059]/30">
        Teman Info Umroh · <span className="text-[#9A7B38] font-semibold">Tanya Hj. IDA R</span>
      </div>
      <a
        href="https://wa.me/6285861275083?text=Assalamu%27alaikum%20Hj.%20IDA%20R,%20saya%20ingin%20bertanya%20mengenai%20informasi%20Umroh%20dan%20Haji."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi WhatsApp Hj. IDA R (085861275083)"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#1E7E34] to-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
};
