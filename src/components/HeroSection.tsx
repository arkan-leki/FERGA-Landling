import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { StoreButtons } from './StoreButtons';
import { LINKS } from '../data/links';

export function HeroSection({ logoUrl = '/ferga-logo.jpg' }: { logoUrl?: string }) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-white/60 bg-gradient-to-b from-[#FFF6EC] via-white to-white">
      {/* Reflected-colour atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob blob-anim -left-24 -top-28 h-72 w-72 bg-[#FF8C19]/25 sm:h-96 sm:w-96" />
        <div className="blob blob-anim-slow -right-20 -top-24 h-72 w-72 bg-[#FFB22C]/22 sm:h-80 sm:w-80" />
        <div className="blob -bottom-32 left-1/4 h-64 w-64 bg-[#6FA8DC]/14 sm:h-80 sm:w-80" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-10 md:py-14">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:gap-12">
          {/* App Store–style app icon: filled white squircle, artwork centred
              with clear space from the edges — no border, no frame. */}
          <div className="relative mx-auto shrink-0 md:mx-0">
            {/* wide reflected colour spill, like a screen glow on a surface */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,140,25,0.5),rgba(255,178,44,0.22)_45%,transparent_72%)] blur-2xl sm:-inset-12"
            />
            <div aria-hidden="true" className="icon-halo" />
            <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-[22%] bg-white p-3 shadow-[0_20px_50px_-18px_rgba(29,38,48,0.45)] transition-transform duration-300 hover:scale-[1.03] sm:h-40 sm:w-40 sm:p-4 md:h-44 md:w-44 md:p-[18px]">
              <img
                src={logoUrl}
                alt={t.hero.appName}
                width={176}
                height={176}
                className="h-full w-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/ferga-icon.png';
                }}
              />
            </div>
          </div>

          {/* Details column — App Store listing hierarchy */}
          <div className="min-w-0 flex-1 text-center md:text-start">
            {/* Category eyebrow */}
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#1D2630]/45 sm:text-[11px]">
              {t.hero.badge}
            </div>

            {/* App name — the name used on the stores */}
            <h1 className="mt-2 font-heading text-3xl font-extrabold leading-[1.06] tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl">
              {t.hero.appName}
            </h1>

            {/* Subtitle */}
            <p className="mt-2 text-lg font-semibold leading-snug text-[#FF8C19] sm:text-xl md:text-2xl">
              {t.hero.subtitle}
            </p>

            {/* Metadata strip — frosted glass bar (ratings omitted: the store
                listing has no ratings yet, so there is nothing to show) */}
            <div className="glass-chip mt-4 inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl px-4 py-2.5 text-xs text-[#555] sm:text-sm md:justify-start">
              <span className="font-semibold text-[#1a1a1a]">{t.hero.free}</span>

              <span className="hidden text-[#1D2630]/25 sm:inline">·</span>
              <span>{t.hero.category}</span>

              <span className="hidden text-[#1D2630]/25 sm:inline">·</span>
              <span className="rounded-full border border-[#1D2630]/15 bg-white/60 px-2 py-0.5 text-xs font-medium">
                {LINKS.ageRating}
              </span>

              <span className="hidden text-[#1D2630]/25 sm:inline">·</span>
              <span className="font-mono text-xs text-[#1D2630]/60">
                {t.hero.languages}
              </span>
            </div>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#1D2630]/65 md:mx-0">
              {t.hero.subhead}
            </p>

            {/* Hairline divider — fades out like a glass edge */}
            <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#1D2630]/10 to-transparent md:bg-gradient-to-r md:from-[#1D2630]/12 md:via-[#1D2630]/6 md:to-transparent" />

            {/* Action Store Buttons */}
            <div id="download" className="scroll-mt-20">
              <StoreButtons variant="poshya" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
