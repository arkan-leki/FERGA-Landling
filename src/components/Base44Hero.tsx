import React, { useState } from 'react';
import {
  Download,
  Search,
  Sparkles,
  ExternalLink,
  Users,
  BookOpen,
  School,
  Building2,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { FergaLogo } from './FergaLogo';
import { FERGA_LINKS, APP_VERSION, APP_FILE_SIZE } from '../data/content';
import { Language } from '../types';

interface Base44HeroProps {
  currentLang: Language;
  onDownloadApk: () => void;
  onSearch?: (query: string) => void;
}

export const Base44Hero: React.FC<Base44HeroProps> = ({
  currentLang,
  onDownloadApk,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const t = {
    ckb: {
      searchPlaceholder: '...گەڕان بەدوای مامۆستا، قوتابخانە، کۆرس',
      popular: 'باوترین',
      badge: '🎓 یەکەمین پلاتفۆرمی پەروەردەی کوردستان',
      headline: 'باشترین پەروەردە لە کوردستان بدۆزەرەوە',
      subtitle: 'پەیوەندی بکە بە مامۆستا و قوتابخانە و سەنتەرەکانی فێربوون لە نزیک تۆوە',
      downloadApk: 'دابەزاندنی ڕاستەوخۆ (APK)',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      expoWeb: 'وەشانی وێب (Expo)',
      teachersCount: 'مامۆستایان',
      coursesCount: 'کۆرسەکان',
      schoolsCount: 'قوتابخانەکان',
      centersCount: 'سەنتەرەکان',
    },
    en: {
      searchPlaceholder: 'Search teachers, schools, courses...',
      popular: 'Popular',
      badge: '🎓 Kurdistan’s #1 Educational Platform',
      headline: 'Find the Best Education in Kurdistan',
      subtitle: 'Connect with expert teachers, top schools, and learning centers near you',
      downloadApk: 'Direct APK Download',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      expoWeb: 'Web App (Expo)',
      teachersCount: 'Teachers',
      coursesCount: 'Courses',
      schoolsCount: 'Schools',
      centersCount: 'Centers',
    },
    ar: {
      searchPlaceholder: '...ابحث عن المعلمين، المدارس، الدورات',
      popular: 'الأكثر طلباً',
      badge: '🎓 المنصة التعليمية الأولى في كردستان',
      headline: 'اكتشف أفضل تعليم وتدريب في كردستان',
      subtitle: 'تواصل مع أفضل المعلمين والمدارس والمراكز التعليمية القريبة منك',
      downloadApk: 'تحميل مباشر APK',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      expoWeb: 'نسخة المتصفح (Expo)',
      teachersCount: 'الأساتذة',
      coursesCount: 'الدورات',
      schoolsCount: 'المدارس',
      centersCount: 'المراكز التعليمية',
    },
  }[currentLang];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
  };

  return (
    <section className="bg-slate-50 pt-3 pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Search Bar (as shown in screenshot.jpeg) */}
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <div className="relative flex items-center bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden px-3.5 py-2.5 hover:border-orange-300 transition-colors">
            {/* Left Tag: Popular / باوترین */}
            <div className="flex items-center gap-1 bg-orange-50 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-xl shrink-0 border border-orange-100">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>{t.popular}</span>
            </div>

            {/* Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent px-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none text-start font-medium"
            />

            {/* Search Icon */}
            <button
              type="submit"
              className="text-slate-400 hover:text-slate-700 p-1 shrink-0 cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Hero Card Banner (Exact match to screenshot.jpeg: Blue Gradient with White Circular Logo on left & Title on right) */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#1E40AF] p-6 sm:p-8 text-white shadow-xl overflow-hidden">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left Side: Exact Official Circular Ferga Logo from ferga.jpg */}
            <div className="shrink-0 flex flex-col items-center justify-center p-3 bg-white/10 rounded-3xl backdrop-blur-xs border border-white/20 shadow-lg">
              <FergaLogo variant="circular" size="lg" isWhite={true} />
            </div>

            {/* Right Side: Headline, Subtitle, and Direct Action Stack */}
            <div className="flex-1 text-center md:text-start space-y-3">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 shadow-2xs">
                <span>{t.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                {t.headline}
              </h1>

              {/* Subheadline */}
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed font-normal">
                {t.subtitle}
              </p>

              {/* 1-Tap Download & Install Actions */}
              <div className="pt-2 flex items-center justify-center md:justify-start gap-2.5 flex-wrap">
                {/* Direct APK Button */}
                <button
                  onClick={onDownloadApk}
                  className="bg-[#FF6600] hover:bg-[#E55B00] active:scale-95 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.downloadApk}</span>
                  <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">
                    {APP_FILE_SIZE}
                  </span>
                </button>

                {/* Google Play */}
                <a
                  href={FERGA_LINKS.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Google Play</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                {/* Apple App Store */}
                <a
                  href={FERGA_LINKS.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>App Store</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                {/* Expo Web */}
                <a
                  href={FERGA_LINKS.expoWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900/60 hover:bg-blue-900 text-white font-bold text-xs px-4 py-2.5 rounded-xl border border-white/20 transition-colors flex items-center gap-1.5"
                >
                  <span>{t.expoWeb}</span>
                  <ExternalLink className="w-3 h-3 text-blue-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards in 2x2 Grid (Exact match to screenshot.jpeg) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Teachers: 8+ */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 block leading-tight">
                8+
              </span>
              <span className="text-xs text-slate-500 font-bold">
                {t.teachersCount}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>

          {/* Courses: 18+ */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 block leading-tight">
                18+
              </span>
              <span className="text-xs text-slate-500 font-bold">
                {t.coursesCount}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>

          {/* Schools: 5+ */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 block leading-tight">
                5+
              </span>
              <span className="text-xs text-slate-500 font-bold">
                {t.schoolsCount}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <School className="w-5 h-5" />
            </div>
          </div>

          {/* Centers: 6+ */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 block leading-tight">
                6+
              </span>
              <span className="text-xs text-slate-500 font-bold">
                {t.centersCount}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
