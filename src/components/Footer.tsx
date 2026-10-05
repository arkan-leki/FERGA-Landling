import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES } from './CategoriesSection';
import { LINKS, PLAY_PUBLISHED } from '../data/links';

const BRAND_NAME = 'FERGA';
const COMPANY_NAME = 'ferkar.co';

function FooterLink({
  href,
  children,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="transition-colors hover:text-[#FF8C19]"
      >
        {children}
      </a>
    </li>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-[#1D2630] py-12 sm:py-16">
      {/* Reflected colour spilling in from the install band above */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob -top-24 left-1/4 h-64 w-64 bg-[#FF8C19]/22 sm:h-80 sm:w-80" />
        <div className="blob -bottom-32 right-1/5 h-64 w-64 bg-[#FFB22C]/14" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <div>
            <div className="font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {BRAND_NAME}
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              {t.footer.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:gap-14">
            {/* Download */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                {t.footer.download}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <FooterLink href={LINKS.appStore}>{t.store.appStore}</FooterLink>
                <FooterLink href={PLAY_PUBLISHED ? LINKS.googlePlay : LINKS.quickGet}>
                  {t.store.googlePlay}
                  {!PLAY_PUBLISHED && (
                    <span className="ms-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#FF8C19]/80">
                      {t.store.comingSoon}
                    </span>
                  )}
                </FooterLink>
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                {t.footer.company}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <FooterLink href="#download" external={false}>
                  {t.footer.about}
                </FooterLink>
                <FooterLink href={LINKS.support}>{t.footer.support}</FooterLink>
              </ul>
            </div>

            {/* Legal — the URLs registered with App Store Connect */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                {t.footer.legal}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <FooterLink href={LINKS.privacy}>{t.footer.privacy}</FooterLink>
                <FooterLink href={LINKS.dataDeletion}>{t.footer.dataDeletion}</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-14 sm:pt-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            {t.footer.subjects}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6">
            {CATEGORIES.map(({ key }) => (
              <span
                key={key}
                className="text-xs text-white/60 transition-colors hover:text-[#FF8C19] sm:text-sm"
              >
                {t.categories.items[key]}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:mt-12 md:flex-row md:items-center md:justify-between">
          <span className="font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {COMPANY_NAME}
          </span>
          <span className="font-mono uppercase tracking-[0.2em]">{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
