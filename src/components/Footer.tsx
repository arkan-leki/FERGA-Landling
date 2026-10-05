import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES } from './CategoriesSection';
import { STORE_LINKS } from './StoreButtons';

const BRAND_NAME = 'Ferga';
const COMPANY_NAME = 'ferkar.co';
const CONTACT_EMAIL = 'hello@ferkar.co';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1D2630] py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-heading text-3xl font-extrabold tracking-tight text-white">
              {BRAND_NAME}
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              {t.footer.tagline}
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                {t.footer.download}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href={STORE_LINKS.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#FF8C19]"
                  >
                    Google Play
                  </a>
                </li>
                <li>
                  <a
                    href={STORE_LINKS.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#FF8C19]"
                  >
                    App Store
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                {t.footer.company}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href="#download"
                    className="transition-colors hover:text-[#FF8C19]"
                  >
                    {t.footer.about}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="transition-colors hover:text-[#FF8C19]"
                  >
                    {t.footer.contact}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            {t.footer.subjects}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {CATEGORIES.map(({ key }) => (
              <span
                key={key}
                className="text-sm text-white/60 transition-colors hover:text-[#FF8C19]"
              >
                {t.categories.items[key]}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span className="font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {COMPANY_NAME}
          </span>
          <span className="font-mono uppercase tracking-[0.2em]">
            {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
