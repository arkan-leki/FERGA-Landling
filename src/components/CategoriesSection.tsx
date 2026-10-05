import React from 'react';
import {
  Globe,
  BookOpen,
  GraduationCap,
  Code,
  ChartColumn,
  Wrench,
  Palette,
  Music,
  Dumbbell,
  Briefcase,
  ClipboardList,
  Lightbulb,
  Compass,
  Heart,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CATEGORIES = [
  { key: 'languages', icon: Globe },
  { key: 'school', icon: BookOpen },
  { key: 'university', icon: GraduationCap },
  { key: 'technology', icon: Code },
  { key: 'business', icon: ChartColumn },
  { key: 'trades', icon: Wrench },
  { key: 'arts', icon: Palette },
  { key: 'music', icon: Music },
  { key: 'fitness', icon: Dumbbell },
  { key: 'career', icon: Briefcase },
  { key: 'exam', icon: ClipboardList },
  { key: 'life', icon: Lightbulb },
  { key: 'religious', icon: Compass },
  { key: 'personal', icon: Heart },
];

export function CategoriesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#FFF3E6] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#FF8C19]">
              {t.categories.label}
            </div>
            <h2 className="mt-4 max-w-xl font-heading text-4xl font-extrabold tracking-tight text-[#1D2630] md:text-5xl">
              {t.categories.title}
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-[#1D2630]/60">
            {t.categories.desc}
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[#E5E8EC] bg-[#E5E8EC] sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className="group flex items-center gap-4 bg-white p-6 transition-colors duration-300 hover:bg-[#FFF3E6]"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[#FFF3E6] text-[#FF8C19] transition-colors duration-300 group-hover:bg-[#FF8C19] group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1D2630]/40">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="mt-0.5 font-heading text-sm font-bold tracking-tight text-[#1D2630]">
                  {t.categories.items[key]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
