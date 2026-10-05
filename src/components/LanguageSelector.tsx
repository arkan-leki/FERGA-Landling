import React from 'react';
import { LANGUAGES, useLanguage } from '../context/LanguageContext';

export function LanguageSelector({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`glass-chip flex items-center gap-1 rounded-full p-1 ${className}`}
    >
      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLang(item.code)}
          className={`rounded-full px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold transition-colors ${
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
