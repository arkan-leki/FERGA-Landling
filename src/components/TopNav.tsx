import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Download } from 'lucide-react';

export function TopNav() {
  const { t } = useLanguage();

  return (
    <nav className="glass-bar sticky top-0 z-50 border-b">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center gap-2 h-14">
          {/* Logo & Brand title */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 transition-opacity hover:opacity-90 shrink-0">
            <img
              src="/ferga-app-icon.png"
              alt="FERGA"
              width={32}
              height={32}
              className="h-8 w-8 rounded-[22%] object-cover shadow-[0_4px_12px_-4px_rgba(29,38,48,0.4)]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/ferga-icon.png';
              }}
            />
            <span className="font-bold text-base sm:text-lg text-[#1a1a1a] tracking-tight">Ferga</span>
          </a>

          {/* Right actions: Language switcher + Quick download */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector />
            <a
              href="#download"
              className="cta-glow hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FF8C19] text-white rounded-full text-xs font-semibold hover:bg-[#e0780f] transition-colors"
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
