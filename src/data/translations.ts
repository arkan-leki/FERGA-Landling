/**
 * FERGA landing copy — EN / AR / CKB (Sorani).
 *
 * Content is grounded in the shipped FERGA app, not invented:
 *  · hero + features  → the live App Store description (app id 6808258219)
 *  · subjects         → `category_groups` in fergapp/supabase/seed.sql (13 fields,
 *                       label / label_ar / label_ku taken verbatim from the database)
 *  · store links      → com.ferga.mobile (Play) · id6808258219 (App Store)
 *  · web app          → https://ferga.expo.app
 */
export interface TranslationSchema {
  nav: {
    download: string;
  };
  hero: {
    appName: string;
    badge: string;
    subtitle: string;
    subhead: string;
    free: string;
    category: string;
    languages: string;
  };
  store: {
    getItOn: string;
    downloadOnThe: string;
    googlePlay: string;
    appStore: string;
    comingSoon: string;
  };
  categories: {
    label: string;
    title: string;
    desc: string;
    items: Record<string, string>;
  };
  features: {
    label: string;
    title: string;
    desc: string;
    items: Array<{
      title: string;
      body: string;
    }>;
  };
  final: {
    label: string;
    h1a: string;
    h1b: string;
    desc: string;
    scan: string;
    scanHint: string;
    available: string;
    publishedBy: string;
  };
  footer: {
    tagline: string;
    download: string;
    company: string;
    legal: string;
    about: string;
    support: string;
    privacy: string;
    dataDeletion: string;
    subjects: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<string, TranslationSchema> = {
  en: {
    nav: { download: 'Get FERGA' },
    hero: {
      appName: 'Ferga — Teaching & Learning',
      badge: "Kurdistan's education marketplace",
      subtitle: 'Find tutors and courses near you',
      subhead:
        'FERGA is the education marketplace for Kurdistan — discover, compare and book the best private tutors, schools and training centers. Learn languages, programming, business, arts, music and more — online or in person.',
      free: 'Free',
      category: 'Education',
      languages: 'کوردی · العربية · English',
    },
    store: {
      getItOn: 'Get it on',
      downloadOnThe: 'Download on the',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      comingSoon: 'Coming soon',
    },
    categories: {
      label: '01 — Browse by subject',
      title: 'From school subjects to professional skills.',
      desc:
        '13 fields of study, taught by tutors, schools and training centers across Kurdistan — online or in person.',
      items: {
        'school-academic': 'School & Academic',
        languages: 'Languages',
        'technology-it': 'Technology & IT',
        professional: 'Professional Skills',
        'business-finance': 'Business & Finance',
        'health-wellness': 'Health & Wellness',
        engineering: 'Engineering',
        'arts-creativity': 'Arts & Creativity',
        lifestyle: 'Lifestyle & Hobbies',
        'islamic-studies': 'Islamic Studies',
        vocational: 'Vocational Trades',
        'creative-media': 'Creative & Media Jobs',
        'legal-admin': 'Legal, Admin & Finance',
      },
    },
    features: {
      label: '02 — How it works',
      title: 'Discover, compare, then book.',
      desc: 'Everything you need to find the right teacher — in one app.',
      items: [
        {
          title: 'Tutors, schools & centers',
          body: 'Explore detailed profiles with photos, subjects, experience, ratings and hourly rates — plus featured courses.',
        },
        {
          title: 'Chat & book directly',
          body: 'Message the instructor who fits you and book lessons from inside the app — online or in person.',
        },
        {
          title: 'Compare prices & reviews',
          body: 'Read genuine student reviews, then compare pricing, ratings and availability before you commit.',
        },
        {
          title: 'Built for Kurdistan',
          body: 'Available in Kurdish, Arabic and English, with trusted partners in Erbil, Sulaymaniyah, Duhok and beyond.',
        },
      ],
    },
    final: {
      label: '03 — Get the app',
      h1a: 'Start learning',
      h1b: 'today.',
      desc:
        'Free to download. Point your phone camera at the code — it opens the right store for your device.',
      scan: 'Scan to download',
      scanHint: 'Opens the App Store or Google Play',
      available: 'Available now on the App Store.',
      publishedBy: 'Published by ferkar.co',
    },
    footer: {
      tagline:
        'FERGA is the education marketplace for Kurdistan — tutors, schools, training centers and courses in one app.',
      download: 'Download',
      company: 'Company',
      legal: 'Legal',
      about: 'About',
      support: 'Support',
      privacy: 'Privacy policy',
      dataDeletion: 'Data deletion',
      subjects: 'Subjects',
      rights: 'All rights reserved',
    },
  },

  ar: {
    nav: { download: 'حمّل التطبيق' },
    hero: {
      appName: 'منصة — التعليم والتدريس',
      badge: 'سوق التعليم في كردستان',
      subtitle: 'اعثر على معلّمين ودورات قريبة منك',
      subhead:
        'منصة التعليم في كردستان — اكتشف وقارن واحجز أفضل المعلمين الخاصين والمدارس ومراكز التدريب. تعلّم اللغات والبرمجة والأعمال والفنون والموسيقى والمزيد — عبر الإنترنت أو حضوريًا.',
      free: 'مجاني',
      category: 'التعليم',
      languages: 'کوردی · العربية · English',
    },
    store: {
      getItOn: 'متاح على',
      downloadOnThe: 'حمّله من',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      comingSoon: 'قريبًا',
    },
    categories: {
      label: '٠١ — تصفّح حسب المادة',
      title: 'من المواد الدراسية إلى المهارات المهنية.',
      desc:
        '١٣ مجالًا للدراسة يدرّسها معلمون ومدارس ومراكز تدريب في كردستان — عبر الإنترنت أو حضوريًا.',
      items: {
        'school-academic': 'المدرسة والأكاديمية',
        languages: 'اللغات',
        'technology-it': 'التكنولوجيا وتقنية المعلومات',
        professional: 'المهارات المهنية',
        'business-finance': 'الأعمال والمالية',
        'health-wellness': 'الصحة والعافية',
        engineering: 'الهندسة',
        'arts-creativity': 'الفنون والإبداع',
        lifestyle: 'نمط الحياة والهوايات',
        'islamic-studies': 'الدراسات الإسلامية',
        vocational: 'الحرف المهنية',
        'creative-media': 'الوظائف الإبداعية والإعلامية',
        'legal-admin': 'القانون والإدارة والمالية',
      },
    },
    features: {
      label: '٠٢ — كيف يعمل التطبيق',
      title: 'اكتشف، قارن، ثم احجز.',
      desc: 'كل ما تحتاجه للعثور على المعلّم المناسب — في تطبيق واحد.',
      items: [
        {
          title: 'معلمون ومدارس ومراكز',
          body: 'تصفّح ملفات مفصلة مع الصور والمواد والخبرة والتقييمات والأجر بالساعة — إضافة إلى الدورات المميزة.',
        },
        {
          title: 'تواصل واحجز مباشرة',
          body: 'راسل المعلّم المناسب لك واحجز الدروس من داخل التطبيق — عبر الإنترنت أو حضوريًا.',
        },
        {
          title: 'قارن الأسعار والمراجعات',
          body: 'اقرأ مراجعات الطلاب الحقيقية، ثم قارن الأسعار والتقييمات والتوفر قبل أن تقرر.',
        },
        {
          title: 'مصمّم لكردستان',
          body: 'متاح بالكردية والعربية والإنجليزية، مع شركاء موثوقين في أربيل والسليمانية ودهوك وما بعدها.',
        },
      ],
    },
    final: {
      label: '٠٣ — حمّل التطبيق',
      h1a: 'ابدأ التعلّم',
      h1b: 'اليوم.',
      desc:
        'التحميل مجاني. وجّه كاميرا هاتفك نحو الرمز — سيفتح المتجر المناسب لجهازك.',
      scan: 'امسح للتحميل',
      scanHint: 'يفتح App Store أو Google Play',
      available: 'متاح الآن على App Store.',
      publishedBy: 'نُشر بواسطة ferkar.co',
    },
    footer: {
      tagline:
        'منصة التعليم في كردستان — معلمون ومدارس ومراكز تدريب ودورات في تطبيق واحد.',
      download: 'تحميل',
      company: 'الشركة',
      legal: 'قانوني',
      about: 'حول التطبيق',
      support: 'الدعم',
      privacy: 'سياسة الخصوصية',
      dataDeletion: 'حذف البيانات',
      subjects: 'المواد',
      rights: 'جميع الحقوق محفوظة',
    },
  },

  ckb: {
    nav: { download: 'فێرگە دابگرە' },
    hero: {
      appName: 'فێرگە — فێرکردن و فێربوون',
      badge: 'بازاڕگەی پەروەردەیی کوردستان',
      subtitle: 'مامۆستا و کۆرسەکان لە نزیک خۆت بدۆزەوە',
      subhead:
        'فێرگە بازاڕگەی پەروەردەیی کوردستانە — باشترین مامۆستای تایبەت، قوتابخانە و ناوەندەکانی ڕاهێنان بدۆزەرەوە، بەراورد بکە و تۆمار بکە. زمان، پرۆگرامینگ، بازرگانی، هونەر، میوزیک و زۆر شتی تر فێربە — ئۆنلاین یان ڕووبەڕوو.',
      free: 'بێبەرامبەر',
      category: 'پەروەردە',
      languages: 'کوردی · عەرەبی · ئینگلیزی',
    },
    store: {
      getItOn: 'بەدەستی بهێنە لە',
      downloadOnThe: 'دایبگرە لە',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      comingSoon: 'بەم زووانە',
    },
    categories: {
      label: '٠١ — بەپێی بابەت بگەڕێ',
      title: 'لە بابەتەکانی قوتابخانەوە تا لێهاتوویی پیشەیی.',
      desc:
        '١٣ بواری خوێندن، لەلایەن مامۆستا و قوتابخانە و ناوەندەکانی ڕاهێنان لە کوردستان — ئۆنلاین یان ڕووبەڕوو.',
      items: {
        'school-academic': 'قوتابخانە و ئەکادیمی',
        languages: 'زمانەکان',
        'technology-it': 'تەکنەلۆژیا و ئایتی',
        professional: 'لێهاتوویی پیشەیی',
        'business-finance': 'بازرگانی و دارای',
        'health-wellness': 'تەندروستی و چاکسازی',
        engineering: 'ئەندازیاری',
        'arts-creativity': 'هونەر و داهێنان',
        lifestyle: 'ژیان و خولیاکان',
        'islamic-studies': 'خوێندنی ئیسلامی',
        vocational: 'پیشەیی',
        'creative-media': 'کاری داهێنەرانە و میدیا',
        'legal-admin': 'یاسا، کارگێڕی و دارای',
      },
    },
    features: {
      label: '٠٢ — چۆن کار دەکات',
      title: 'بدۆزەرەوە، بەراورد بکە، پاشان تۆمار بکە.',
      desc: 'هەموو ئەوەی پێویستتە بۆ دۆزینەوەی مامۆستای گونجاو — لە یەک ئەپدا.',
      items: [
        {
          title: 'مامۆستا، قوتابخانە و ناوەندەکان',
          body: 'پڕۆفایلی ورد لەگەڵ وێنە، بابەت، ئەزموون، هەڵسەنگاندن و نرخی کاتژمێری — لەگەڵ کۆرسە دیارەکان.',
        },
        {
          title: 'ڕاستەوخۆ گفتوگۆ و تۆمارکردن',
          body: 'نامە بنێرە بۆ مامۆستای گونجاو و وانەکان لە ناو ئەپەکە تۆمار بکە — ئۆنلاین یان ڕووبەڕوو.',
        },
        {
          title: 'نرخ و بۆچوون بەراورد بکە',
          body: 'بۆچوونی ڕاستەقینەی خوێندکاران بخوێنەرەوە، پاشان نرخ و هەڵسەنگاندن و بەردەستبوون بەراورد بکە.',
        },
        {
          title: 'بۆ کوردستان دروستکراوە',
          body: 'بە کوردی، عەرەبی و ئینگلیزی بەردەستە، لەگەڵ هاوبەشی باوەڕپێکراو لە هەولێر، سلێمانی، دهۆک و دەرەوە.',
        },
      ],
    },
    final: {
      label: '٠٣ — ئەپەکە دابگرە',
      h1a: 'دەستبکە بە فێربوون',
      h1b: 'ئەمڕۆ.',
      desc:
        'دابگرتن بێبەرامبەرە. کامێرای مۆبایلەکەت بەرامبەر کۆدەکە بگرە — ئەو فرۆشگایە دەکرێتەوە کە گونجاوە لەگەڵ ئامێرەکەت.',
      scan: 'بسکان بکە بۆ داگرتن',
      scanHint: 'App Store یان Google Play دەکاتەوە',
      available: 'ئێستا لە App Store بەردەستە.',
      publishedBy: 'بڵاوکراوەتەوە لەلایەن ferkar.co',
    },
    footer: {
      tagline:
        'فێرگە بازاڕگەی پەروەردەیی کوردستانە — مامۆستا، قوتابخانە، ناوەندی ڕاهێنان و کۆرسەکان لە یەک ئەپدا.',
      download: 'داگرتن',
      company: 'کۆمپانیا',
      legal: 'یاسایی',
      about: 'دەربارە',
      support: 'پشتگیری',
      privacy: 'سیاسەتی تایبەتێتی',
      dataDeletion: 'سڕینەوەی داتا',
      subjects: 'بابەتەکان',
      rights: 'هەموو مافەکان پارێزراون',
    },
  },
};
