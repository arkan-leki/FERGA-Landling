import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function FloatingDock() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 600 && scrollY < lastScrollY);
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed inset-x-0 bottom-4 sm:bottom-5 z-40 flex justify-center px-4 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="glass-bar flex items-center gap-3 rounded-full px-2.5 py-2 sm:gap-4 sm:px-3 sm:py-2.5">
        <span className="hidden pl-2 font-mono text-xs uppercase tracking-[0.25em] text-[#1D2630]/70 sm:inline">
          ferkar.co
        </span>
        <a
          href="#download"
          className="cta-glow rounded-full bg-[#FF8C19] px-5 py-2 text-sm font-semibold text-[#1D2630] transition-transform hover:scale-105"
        >
          {t.nav.download}
        </a>
      </div>
    </div>
  );
}
