import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '../context/LanguageContext';
import { StoreButtons } from './StoreButtons';
import { LINKS } from '../data/links';

/**
 * The QR points at this site's own /get quick page, which detects the phone
 * (iOS / Android / desktop) and opens the matching store — or the live web app
 * when Google Play is not published yet. `lang` rides along so the quick page
 * speaks the same language as the visitor.
 */
function useQuickPageUrl(lang: string) {
  return React.useMemo(() => {
    const origin = typeof window === 'undefined' ? '' : window.location.origin;
    return `${origin}${LINKS.quickGet}?lang=${lang}&utm_source=landing-qr`;
  }, [lang]);
}

export function InstallSection() {
  const { t, lang } = useLanguage();
  const quickUrl = useQuickPageUrl(lang);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FF9A2E] via-[#FF8C19] to-[#F07800] py-14 sm:py-20 md:py-28">
      {/* Reflected-colour atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob -left-24 -top-24 h-72 w-72 bg-white/30 sm:h-96 sm:w-96" />
        <div className="blob blob-anim -right-24 bottom-[-6rem] h-72 w-72 bg-[#FFD454]/40 sm:h-80 sm:w-80" />
        <div className="blob left-1/3 top-1/4 h-56 w-56 bg-[#FF6B35]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:gap-12 md:text-start">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#1D2630]/60 sm:text-[11px]">
              {t.final.label}
            </div>
            <h2 className="mt-3 font-heading text-4xl font-extrabold leading-[0.95] tracking-tighter text-[#1D2630] sm:text-5xl md:text-7xl">
              {t.final.h1a}
              <br />
              {t.final.h1b}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[#1D2630]/80 sm:text-lg md:mx-0">
              {t.final.desc}
            </p>

            {/* What is actually live right now */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1D2630]/10 px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1D2630]/70" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1D2630]/75">
                {t.final.available}
              </span>
            </div>

            <div className="mt-8 sm:mt-10">
              <StoreButtons variant="white" />
            </div>
          </div>

          {/* Real, scannable QR → /get quick page → correct store */}
          <div className="flex flex-col items-center gap-3">
            <div className="glass rounded-3xl p-3.5 sm:p-4">
              <a
                href={quickUrl}
                className="block rounded-2xl bg-white p-3 shadow-[0_10px_30px_-16px_rgba(29,38,48,0.55)] transition-transform duration-300 hover:scale-[1.03]"
                aria-label={t.final.scan}
              >
                <QRCodeSVG
                  value={quickUrl}
                  size={148}
                  level="M"
                  marginSize={1}
                  bgColor="#FFFFFF"
                  fgColor="#1D2630"
                />
              </a>
            </div>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#1D2630]/70">
              {t.final.scan}
            </span>
            <span className="max-w-[13rem] text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-[#1D2630]/45">
              {t.final.scanHint}
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#1D2630]/50 sm:mt-16 sm:text-xs md:flex-row md:justify-start">
          <span className="hidden h-px w-10 bg-[#1D2630]/40 md:block" />
          <span>{t.final.publishedBy}</span>
          <span className="hidden text-[#1D2630]/30 md:inline">·</span>
          <a
            href={LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#1D2630]/80"
          >
            {t.footer.support}
          </a>
          <span className="hidden text-[#1D2630]/30 md:inline">·</span>
          <a
            href={LINKS.privacy}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#1D2630]/80"
          >
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </section>
  );
}
