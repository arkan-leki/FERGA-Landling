import React, { useState } from 'react';
import {
  Globe,
  BookOpen,
  Code,
  Briefcase,
  TrendingUp,
  Palette,
  Star,
  MapPin,
  Sparkles,
  Download,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../types';
import { FERGA_LINKS } from '../data/content';

interface Base44SectionsProps {
  currentLang: Language;
  onDownloadApk: () => void;
}

export const Base44Sections: React.FC<Base44SectionsProps> = ({
  currentLang,
  onDownloadApk,
}) => {
  const [activeTab, setActiveTab] = useState<'teachers' | 'schools' | 'centers' | 'courses'>('teachers');

  const categories = [
    { id: 'languages', title: 'زمانەکان', count: '٢٤ کۆرس', icon: Globe, bg: 'bg-teal-50 text-teal-600' },
    { id: 'school', title: 'قوتابخانە و ئەکادیمی', count: '١٢٠ وانە', icon: BookOpen, bg: 'bg-blue-50 text-blue-600' },
    { id: 'tech', title: 'تەکنەلۆژیا و ئایتی', count: '٤٥ کۆرس', icon: Code, bg: 'bg-cyan-50 text-cyan-600' },
    { id: 'career', title: 'لێهاتوویی پیشەیی', count: '٣٢ کۆرس', icon: Briefcase, bg: 'bg-purple-50 text-purple-600' },
    { id: 'business', title: 'بازرگانی و کارگێڕی', count: '٢٨ کۆرس', icon: TrendingUp, bg: 'bg-amber-50 text-amber-600' },
    { id: 'arts', title: 'هونەر و دیزاین', count: '١٩ کۆرس', icon: Palette, bg: 'bg-pink-50 text-pink-600' },
  ];

  const teachers = [
    {
      id: '1',
      name: 'هانا کەریم',
      role: 'مامۆستای بیرکاری پۆلی ١٢',
      tag: 'نوێ',
      rating: 5.0,
      city: 'Sulaymaniyah',
      avatar: 'HK',
      badgeColor: 'bg-blue-600 text-white',
    },
    {
      id: '2',
      name: 'ڕێباز عەلی',
      role: 'مامۆستای فیزیا و کیمیا',
      tag: 'نایاب',
      rating: 4.9,
      city: 'Erbil',
      avatar: 'RA',
      badgeColor: 'bg-orange-600 text-white',
    },
    {
      id: '3',
      name: 'سروشت مەحمود',
      role: 'مامۆستای ئینگلیزی (IELTS)',
      tag: 'باوترین',
      rating: 5.0,
      city: 'Duhok',
      avatar: 'SM',
      badgeColor: 'bg-emerald-600 text-white',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-12">
      {/* 1. Categories Section "پۆلەکان" */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900">
            پۆلەکان (Categories)
          </h2>
          <button
            onClick={onDownloadApk}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 cursor-pointer"
          >
            بینینی هەموو ←
          </button>
        </div>

        {/* Horizontal Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                onClick={onDownloadApk}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-orange-300 transition-all flex flex-col items-center text-center cursor-pointer space-y-2 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {c.title}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {c.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Latest Section "نوێیەکان" (matching screenshot.jpeg tabs) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900">
            نوێیەکان (Latest)
          </h2>
          <span className="text-xs text-slate-400 font-medium">
            بەردەوام نوێدەکرێتەوە
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('teachers')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'teachers'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            مامۆستایان
          </button>
          <button
            onClick={() => setActiveTab('schools')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'schools'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            قوتابخانەکان
          </button>
          <button
            onClick={() => setActiveTab('centers')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'centers'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            سەنتەرەکان
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'courses'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            کۆرسەکان
          </button>
        </div>

        {/* Featured Teachers List (matching "هانا کەریم" from screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teachers.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-2xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0 ring-2 ring-slate-100">
                  {t.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">{t.name}</h3>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">{t.role}</p>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                    <span className="text-amber-500 font-bold flex items-center gap-0.5">
                      ★ {t.rating}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {t.city}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={onDownloadApk}
                className="bg-orange-50 hover:bg-orange-100 text-orange-700 p-2.5 rounded-xl transition-colors shrink-0 cursor-pointer"
                title="داگرتن بۆ پەیوەندی"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
