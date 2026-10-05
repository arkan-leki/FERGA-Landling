import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { StoreButtons } from './StoreButtons';

export function HeroSection({ logoUrl = '/ferga-logo.jpg' }: { logoUrl?: string }) {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-white border-b border-[#ebebeb]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
          {/* Logo container matching poshyashop.com */}
          <div className="shrink-0 mx-auto md:mx-0">
            <div className="h-28 w-28 md:h-32 md:w-32 rounded-[28px] overflow-hidden border border-[#ebebeb] shadow-lg bg-white p-2.5 flex items-center justify-center transition-transform hover:scale-105 duration-300">
              <img
                src={logoUrl}
                alt="Ferga"
                width={128}
                height={128}
                className="h-full w-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/ferga-icon.png';
                }}
              />
            </div>
          </div>

          {/* Details column matching poshyashop.com */}
          <div className="flex-1 text-center md:text-start">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight">
              {lang === 'ckb'
                ? 'فێرگا — Ferga'
                : lang === 'ar'
                ? 'فِرگا — Ferga'
                : 'Ferga — Teaching & Learning'}
            </h1>

            {/* Subtitle in orange */}
            <p className="mt-1 text-base text-[#FF8C19] font-semibold">
              {t.hero.tagline} · {t.hero.h1a} {t.hero.h1b}
            </p>

            {/* Metadata badges row matching poshyashop */}
            <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm text-[#555]">
              {/* 5 Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ms-1 font-semibold text-[#1a1a1a]">5.0</span>
              </div>

              <span className="text-[#999]">·</span>
              <span className="font-semibold text-[#1a1a1a]">
                {lang === 'ckb' ? 'بێبەرامبەر' : lang === 'ar' ? 'مجاني' : 'Free'}
              </span>

              <span className="text-[#999]">·</span>
              <span>
                {lang === 'ckb'
                  ? 'پەروەردە و فێرکردن'
                  : lang === 'ar'
                  ? 'التعليم والتدريس'
                  : 'Education'}
              </span>

              <span className="text-[#999]">·</span>
              <span className="rounded-full border border-[#e0e0e0] px-2 py-0.5 text-xs font-medium">
                4+
              </span>

              <span className="text-[#999]">·</span>
              <span className="text-xs text-[#888] font-mono">ferkar.co</span>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm text-[#666] max-w-2xl leading-relaxed">
              {t.hero.subhead}
            </p>

            {/* Hairline Divider */}
            <div className="my-5 border-t border-[#f0f0f0]" />

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
