import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { StoreButtons } from './StoreButtons';

const QR_ACTIVE_INDICES = new Set([
  0, 1, 2, 5, 6, 7, 13, 14, 21, 28, 35, 42, 48, 47, 46, 43, 24, 25, 18, 11, 10,
  33, 32, 31, 38, 39, 16, 23, 30, 37, 44, 9, 17, 26, 34, 41,
]);

export function QrCodeMatrix() {
  return (
    <div className="grid h-32 w-32 grid-cols-7 grid-rows-7 gap-px rounded-2xl bg-[#1D2630] p-2.5">
      {Array.from({ length: 49 }).map((_, idx) => (
        <div
          key={idx}
          className={`rounded-[1px] ${
            QR_ACTIVE_INDICES.has(idx) ? 'bg-[#FF8C19]' : 'bg-white'
          }`}
        />
      ))}
    </div>
  );
}

export function InstallSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#FF8C19] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#1D2630]/60">
              {t.final.label}
            </div>
            <h2 className="mt-4 font-heading text-5xl font-extrabold leading-[0.9] tracking-tighter text-[#1D2630] md:text-7xl">
              {t.final.h1a}
              <br />
              {t.final.h1b}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#1D2630]/80">
              {t.final.desc}
            </p>
            <div className="mt-10">
              <StoreButtons variant="white" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <QrCodeMatrix />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#1D2630]/60">
              {t.final.scan}
            </span>
          </div>
        </div>
        <div className="mt-16 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#1D2630]/50">
          <span className="h-px w-10 bg-[#1D2630]/40" />
          {t.final.publishedBy}
        </div>
      </div>
    </section>
  );
}
