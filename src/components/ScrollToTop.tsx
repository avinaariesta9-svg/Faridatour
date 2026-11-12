import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="fixed bottom-5 left-5 z-40 w-11 h-11 bg-[#0A192F]/90 hover:bg-[#0A192F] text-[#C5A059] hover:text-white rounded-full flex items-center justify-center shadow-lg border border-[#C5A059]/40 backdrop-blur-xs transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
