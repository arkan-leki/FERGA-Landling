import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { STORE_LINKS } from './StoreButtons';
import { Download } from 'lucide-react';

export function TopNav() {
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo & Brand title */}
          <a href="#" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
            <div className="h-8 w-8 rounded-xl overflow-hidden border border-[#ebebeb] shadow-sm bg-white p-0.5">
              <img
                src="/ferga-logo.jpg"
                alt="Ferga"
                className="h-full w-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/ferga-icon.png';
                }}
              />
            </div>
            <span className="font-bold text-lg text-[#1a1a1a] tracking-tight">Ferga</span>
          </a>

          {/* Right actions: Language switcher + Quick download */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <a
              href={STORE_LINKS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FF8C19] text-white rounded-full text-xs font-semibold hover:bg-[#e0780f] transition-colors shadow-sm"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{t.nav.download}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
