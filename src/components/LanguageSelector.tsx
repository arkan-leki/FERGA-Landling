import React from 'react';
import { LANGUAGES, useLanguage } from '../context/LanguageContext';

export function LanguageSelector({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-[#E5E8EC] bg-white/90 p-1 shadow-sm backdrop-blur ${className}`}
    >
      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLang(item.code)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
            lang === item.code
              ? 'bg-[#1D2630] text-white'
              : 'text-[#1D2630]/60 hover:text-[#1D2630]'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
