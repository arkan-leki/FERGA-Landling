import React from 'react';
import { BookOpen, Users, TrendingUp, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FEATURE_ICONS = [BookOpen, Users, TrendingUp, Sparkles];

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#FF8C19]">
              {t.features.label}
            </div>
            <h2 className="mt-4 max-w-xl font-heading text-4xl font-extrabold tracking-tight text-[#1D2630] md:text-5xl">
              {t.features.title}
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-[#1D2630]/60">
            {t.features.desc}
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((item, index) => {
            const Icon = FEATURE_ICONS[index] || BookOpen;
            return (
              <div
                key={index}
                className="flex flex-col rounded-3xl border border-[#E5E8EC] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8C19]/40 hover:shadow-[0_24px_60px_-24px_rgba(29,38,48,0.25)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1D2630] text-[#FF8C19]">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h3 className="mt-8 font-heading text-xl font-bold tracking-tight text-[#1D2630]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#1D2630]/60">
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
