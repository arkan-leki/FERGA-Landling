import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreenshotData {
  src: string;
  key: string;
}

const SCREENSHOTS: ScreenshotData[] = [
  {
    src: '/screenshots/home.png',
    key: 'home',
  },
  {
    src: '/screenshots/nearby.png',
    key: 'nearby',
  },
  {
    src: '/screenshots/teachers.png',
    key: 'teachers',
  },
  {
    src: '/screenshots/courses.png',
    key: 'courses',
  },
];

export function AppScreenshotsSection() {
  const { t, lang } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const screensInfo = t.screenshots?.screens || [
    { title: 'Home & Discovery', caption: 'Find top educators, stats & 14 study categories' },
    { title: 'Nearby Centers (📍)', caption: 'Locate verified tutors & institutions near you' },
    { title: 'Teachers Directory', caption: 'Browse expert profiles, ratings & verified reviews' },
    { title: 'Courses & Skills', caption: 'Explore comprehensive courses from code to arts' },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % SCREENSHOTS.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  };

  return (
    <section className="bg-[#f5f5f5] py-8 md:py-12 border-b border-[#ebebeb]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section title matching poshyashop.com */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888]">
            {t.screenshots?.label || 'App Screenshots'}
          </h2>
          <span className="text-xs text-[#999] hidden sm:inline">
            {lang === 'ckb'
              ? 'بۆ بینینی زیاتر ڕابکێشە ←'
              : lang === 'ar'
              ? 'اسحب للمزيد ←'
              : 'Swipe to view more →'}
          </span>
        </div>

        {/* Horizontal snap carousel matching poshyashop.com exactly */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
          {SCREENSHOTS.map((item, index) => {
            const info = screensInfo[index] || screensInfo[0];
            return (
              <div
                key={item.key}
                onClick={() => setSelectedIdx(index)}
                className="snap-start shrink-0 w-[200px] h-[400px] md:w-[220px] md:h-[440px] rounded-3xl overflow-hidden border border-[#e0e0e0] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.18)] bg-white cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all"
                title={info.title}
              >
                <img
                  src={item.src}
                  alt={info.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal on click */}
      {selectedIdx !== null && (
        <div
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D2630]/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-sm w-full animate-in zoom-in-95 duration-200"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left / Right Nav buttons */}
            <button
              onClick={handlePrev}
              className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Clean Single-border Screenshot Viewport */}
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-white/20 w-[260px] sm:w-[290px] h-[520px] sm:h-[580px]">
              <img
                src={SCREENSHOTS[selectedIdx].src}
                alt={screensInfo[selectedIdx]?.title}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center text-white">
              <h4 className="font-heading text-lg font-bold">
                {screensInfo[selectedIdx]?.title}
              </h4>
              <p className="mt-1 text-xs text-white/70">
                {screensInfo[selectedIdx]?.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
