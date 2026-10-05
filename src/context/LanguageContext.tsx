import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, TranslationSchema } from '../data/translations';

export type LanguageCode = 'en' | 'ar' | 'ckb';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'عربي', dir: 'rtl' },
  { code: 'ckb', label: 'کوردی', dir: 'rtl' },
];

interface LanguageContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: TranslationSchema;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>('en');
  const dir = (LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]).dir;

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
