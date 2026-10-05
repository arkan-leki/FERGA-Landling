import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const STORE_LINKS = {
  googlePlay: 'https://play.google.com/store/apps/details?id=com.ferga.mobile',
  appStore: 'https://apps.apple.com/us/app/ferga-teaching-learning/id6808258219',
};

export const GooglePlayColorIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none" aria-hidden="true">
    <path
      d="M3.18 23.5C2.55 23.16 2.14 22.49 2.14 21.72V2.28C2.14 1.51 2.55 0.84 3.18 0.5L14.07 12L3.18 23.5Z"
      fill="#EA4335"
    />
    <path
      d="M18.22 15.89L4.88 23.68L14.07 12L18.22 15.89Z"
      fill="#FBBC04"
    />
    <path
      d="M21.45 10.68C21.86 11.02 22.14 11.52 22.14 12C22.14 12.48 21.86 12.98 21.45 13.32L18.22 15.89L14.07 12L18.22 8.11L21.45 10.68Z"
      fill="#4285F4"
    />
    <path
      d="M4.88 0.32L18.22 8.11L14.07 12L3.18 0.5L4.88 0.32Z"
      fill="#34A853"
    />
  </svg>
);

export const AppleStoreIcon = () => (
  <svg viewBox="0 0 384 512" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.4-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-73.6-19.7C63.3 141.2 4 184.8 4 273.8c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.5 125.2 25.2-.8 43-17.9 75.8-17.9 31.8 0 51.8 17.9 75.8 17.9 48.9.8 90.6-82.5 102.6-119.3-65.2-30.7-61.7-90-61.4-91.3zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const VARIANT_CLASSES = {
  poshya: 'inline-flex items-center justify-center gap-3 rounded-xl bg-[#1a1a1a] px-8 py-3 text-white hover:bg-[#2d2d2d] transition-colors shadow-sm',
  navy: 'bg-[#1D2630] text-white hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-10px_rgba(29,38,48,0.55)]',
  white: 'bg-white text-[#1D2630] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-12px_rgba(0,0,0,0.25)]',
  orange: 'bg-[#FF8C19] text-[#1D2630] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-10px_rgba(255,140,25,0.55)]',
};

export function StoreButtons({
  variant = 'poshya',
  className = '',
}: {
  variant?: 'poshya' | 'navy' | 'white' | 'orange';
  className?: string;
}) {
  const { t } = useLanguage();

  if (variant === 'poshya') {
    return (
      <div className={className}>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a
            href={STORE_LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#1a1a1a] px-8 py-3 text-white hover:bg-[#2d2d2d] transition-colors shadow-sm"
          >
            <GooglePlayColorIcon />
            <div className="text-start leading-tight">
              <div className="text-[10px] text-white/70 uppercase tracking-wide">
                {t.store.getItOn}
              </div>
              <div className="text-base font-semibold">Google Play</div>
            </div>
          </a>
          <a
            href={STORE_LINKS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#1a1a1a] bg-[#1a1a1a] px-8 py-3 text-white hover:bg-[#2d2d2d] transition-colors shadow-sm"
          >
            <AppleStoreIcon />
            <div className="text-start leading-tight">
              <div className="text-[10px] text-white/70 uppercase tracking-wide">
                {t.store.downloadOnThe}
              </div>
              <div className="text-base font-semibold">App Store</div>
            </div>
          </a>
        </div>
      </div>
    );
  }

  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.navy;

  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={STORE_LINKS.googlePlay}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-3 rounded-2xl px-5 py-3.5 transition-all duration-300 will-change-transform ${variantClass}`}
        >
          <GooglePlayColorIcon />
          <span className="flex flex-col items-start leading-none">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
              {t.store.getItOn}
            </span>
            <span className="mt-1 text-base font-semibold tracking-tight">
              Google Play
            </span>
          </span>
        </a>
        <a
          href={STORE_LINKS.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-3 rounded-2xl px-5 py-3.5 transition-all duration-300 will-change-transform ${variantClass}`}
        >
          <AppleStoreIcon />
          <span className="flex flex-col items-start leading-none">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
              {t.store.downloadOnThe}
            </span>
            <span className="mt-1 text-base font-semibold tracking-tight">
              App Store
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
