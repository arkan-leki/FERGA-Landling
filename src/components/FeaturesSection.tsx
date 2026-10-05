import React from 'react';
import { BadgeCheck, MessageSquare, Receipt, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/** Icons for the four "how it works" pillars (from the live App Store listing). */
const FEATURE_ICONS = [BadgeCheck, MessageSquare, Receipt, Languages];

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FBFCFE] to-white py-14 sm:py-20 md:py-28">
      {/* Reflected-colour atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob -right-24 top-10 h-64 w-64 bg-[#FFB22C]/14 sm:h-80 sm:w-80" />
        <div className="blob blob-anim -left-20 bottom-0 h-64 w-64 bg-[#6FA8DC]/12 sm:h-72 sm:w-72" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF8C19] sm:text-[11px]">
              {t.features.label}
            </div>
            <h2 className="mt-3 max-w-xl font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#1D2630] sm:text-3xl md:text-5xl">
              {t.features.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#1D2630]/60 sm:text-base">
            {t.features.desc}
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {t.features.items.map((item, index) => {
            const Icon = FEATURE_ICONS[index] || BadgeCheck;
            return (
              <div
                key={index}
                className="glass flex flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-26px_rgba(255,140,25,0.45)] sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1D2630]/90 text-[#FF8C19] shadow-[0_12px_30px_-14px_rgba(29,38,48,0.7)] backdrop-blur sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-heading text-lg font-bold tracking-tight text-[#1D2630] sm:mt-8 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#1D2630]/60 sm:mt-3 sm:text-base">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
