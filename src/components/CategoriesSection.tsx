import React from 'react';
import {
  BookOpen,
  Globe,
  CodeXml,
  Briefcase,
  Landmark,
  Heart,
  Wrench,
  Palette,
  Crown,
  Star,
  Hammer,
  Clapperboard,
  Scale,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * The 13 subject fields exactly as they exist in the FERGA app
 * (`category_groups` in supabase/seed.sql) — same order, same icons.
 */
export const CATEGORIES = [
  { key: 'school-academic', icon: BookOpen },
  { key: 'languages', icon: Globe },
  { key: 'technology-it', icon: CodeXml },
  { key: 'professional', icon: Briefcase },
  { key: 'business-finance', icon: Landmark },
  { key: 'health-wellness', icon: Heart },
  { key: 'engineering', icon: Wrench },
  { key: 'arts-creativity', icon: Palette },
  { key: 'lifestyle', icon: Crown },
  { key: 'islamic-studies', icon: Star },
  { key: 'vocational', icon: Hammer },
  { key: 'creative-media', icon: Clapperboard },
  { key: 'legal-admin', icon: Scale },
];

export function CategoriesSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF3E6] via-[#FFF6EE] to-white py-14 sm:py-20 md:py-28">
      {/* Reflected-colour atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob -left-24 top-4 h-64 w-64 bg-[#FF8C19]/18 sm:h-80 sm:w-80" />
        <div className="blob blob-anim-slow -right-20 bottom-[-4rem] h-64 w-64 bg-[#FFB22C]/18 sm:h-72 sm:w-72" />
        <div className="blob left-1/2 top-1/3 h-56 w-56 bg-[#6FA8DC]/10" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 md:px-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF8C19] sm:text-[11px]">
          {t.categories.label}
        </div>
        <h2 className="mt-3 max-w-2xl font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#1D2630] sm:text-3xl md:text-4xl">
          {t.categories.title}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#1D2630]/60 sm:text-base">
          {t.categories.desc}
        </p>

        {/* Subjects — a flowing cloud of glass tags, intentionally not a grid */}
        <div className="mt-8 flex flex-wrap items-center gap-2 sm:mt-10 sm:gap-2.5">
          {CATEGORIES.map(({ key, icon: Icon }, index) => {
            const featured = index % 5 === 0;

            return (
              <span
                key={key}
                className={
                  featured
                    ? 'cta-glow inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#FFA23D] to-[#FF8C19] px-3.5 py-1.5 text-[13px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5'
                    : 'glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-[#1D2630]/75 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#1D2630]'
                }
              >
                <Icon
                  className={`h-3.5 w-3.5 shrink-0 ${featured ? 'text-white' : 'text-[#FF8C19]'}`}
                  strokeWidth={1.75}
                />
                <span className="whitespace-nowrap">{t.categories.items[key]}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
