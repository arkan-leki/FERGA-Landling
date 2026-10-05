// Extracted and refined for https://get-ferga-now.base44.app/
export interface TranslationSchema {
  nav: {
    download: string;
  };
  hero: {
    tagline: string;
    h1a: string;
    h1b: string;
    subhead: string;
    builtBy: string;
  };
  screenshots: {
    label: string;
    title: string;
    desc: string;
    screens: Array<{
      title: string;
      caption: string;
    }>;
  };
  store: {
    getItOn: string;
    googlePlay: string;
    downloadOnThe: string;
    appStore: string;
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
    publishedBy: string;
  };
  footer: {
    tagline: string;
    download: string;
    company: string;
    about: string;
    contact: string;
    subjects: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<string, TranslationSchema> = {
  en: {
    nav: { download: 'Download Ferga' },
    hero: {
      tagline: 'Teaching and learning',
      h1a: 'Learn anything.',
      h1b: 'Teach anyone.',
      subhead: 'Ferga brings every subject together — from languages and school to music, fitness, and life skills — so curious learners and great teachers can find each other in one app.',
      builtBy: 'Built & published by ferkar.co',
    },
    screenshots: {
      label: 'App Screenshots',
      title: 'A glimpse inside Ferga.',
      desc: 'Real screens from our mobile app designed for students, teachers, and centers across Kurdistan and Iraq.',
      screens: [
        { title: 'Home & Discovery', caption: 'Find top educators, stats & 14 study categories' },
        { title: 'Nearby Centers (📍)', caption: 'Locate verified tutors & institutions near you' },
        { title: 'Teachers Directory', caption: 'Browse expert profiles, ratings & verified reviews' },
        { title: 'Courses & Skills', caption: 'Explore comprehensive courses from code to arts' },
      ],
    },
    store: {
      getItOn: 'Get it on',
      googlePlay: 'Google Play',
      downloadOnThe: 'Download on the',
      appStore: 'App Store',
    },
    categories: {
      label: '01 — What you can learn',
      title: 'One app. Every subject you care about.',
      desc: 'From school basics to professional skills, Ferga covers 14 fields of study — pick one and start, or teach what you know.',
      items: {
        languages: 'Languages',
        school: 'School Subjects',
        university: 'University Subjects',
        technology: 'Technology & IT',
        business: 'Business & Management',
        trades: 'Trades & Technical Skills',
        arts: 'Arts & Design',
        music: 'Music & Audio',
        fitness: 'Fitness & Sports',
        career: 'Career Development',
        exam: 'Exam Preparation',
        life: 'Life Skills',
        religious: 'Religious Education',
        personal: 'Personal Development',
      },
    },
    features: {
      label: '02 — Why Ferga',
      title: 'Teaching and learning, made simple.',
      desc: 'Ferga turns curiosity into progress — and skill into opportunity.',
      items: [
        {
          title: 'Any subject, any level',
          body: '14 fields of study — from languages and school subjects to trades, music, and life skills — all in one place.',
        },
        {
          title: 'Learn & teach',
          body: 'Join as a learner to grow, or as a teacher to share your skills and reach students who need them.',
        },
        {
          title: 'Track your progress',
          body: 'Follow every milestone, see how far you\'ve come, and stay motivated with clear goals.',
        },
        {
          title: 'Made for everyone',
          body: 'Simple, friendly, and built so anyone — student, teacher, or parent — can start in seconds.',
        },
      ],
    },
    final: {
      label: '03 — Install',
      h1a: 'Start learning',
      h1b: 'today.',
      desc: 'Free to download. Available now on Google Play and the App Store. Scan the code to install Ferga instantly on your phone.',
      scan: 'Scan to download',
      publishedBy: 'Published by ferkar.co',
    },
    footer: {
      tagline: 'Teaching and learning. Built and published by ferkar.co — one app for every subject.',
      download: 'Download',
      company: 'Company',
      about: 'About',
      contact: 'Contact',
      subjects: 'Subjects',
      rights: 'All rights reserved',
    },
  },
  ar: {
    nav: { download: 'تحميل فِرگا' },
    hero: {
      tagline: 'التدريس والتعلّم',
      h1a: 'تعلّم أي شيء.',
      h1b: 'علّم أي شخص.',
      subhead: 'يجمع فِرگا كل المواد معًا — من اللغات والمناهج المدرسية إلى البرمجة والموسيقى ومهارات الحياة — ليجد المتعلّمون والمعلّمون بعضهم البعض في تطبيق واحد.',
      builtBy: 'بُني ونُشر بواسطة ferkar.co',
    },
    screenshots: {
      label: 'لقطات من التطبيق',
      title: 'نظرة داخل تطبيق فِرگا.',
      desc: 'شاشات حقيقية من التطبيق مصممة لربط الطلاب بأفضل المعلمين والمراكز التعليمية في كردستان والعراق.',
      screens: [
        { title: 'الرئيسية والاستكشاف', caption: 'البحث عن أفضل المعلمين والمراكز وأحدث الدورات' },
        { title: 'القريب منك (📍)', caption: 'استكشاف المعلمين والمؤسسات المعتمدة حسب المسافة' },
        { title: 'دليل المعلمين', caption: 'ملفات المعلمين المعتمدين مع التقييمات والحصص الحضورية وعن بُعد' },
        { title: 'الدورات والامتحانات', caption: 'دورات البرمجة واللغات ونماذج امتحانات السنوات السابقة' },
      ],
    },
    store: {
      getItOn: 'متاح على',
      googlePlay: 'Google Play',
      downloadOnThe: 'تحميل من',
      appStore: 'App Store',
    },
    categories: {
      label: '٠١ — ما يمكنك تعلّمه',
      title: 'تطبيق واحد. كل مادة تهمّك.',
      desc: 'من أساسيات المدرسة إلى المهارات المهنية، يغطي فِرگا 14 مجالًا للدراسة — اختر مجالك وابدأ، أو شارك خبرتك وعلّم ما تتقنه.',
      items: {
        languages: 'اللغات',
        school: 'المناهج المدرسية',
        university: 'المواد الجامعية',
        technology: 'التكنولوجيا والبرمجة',
        business: 'الأعمال والإدارة',
        trades: 'المهن والمهارات التقنية',
        arts: 'الفنون والتصميم',
        music: 'الموسيقى والصوتيات',
        fitness: 'اللياقة والرياضة',
        career: 'التطوير المهني',
        exam: 'التحضير للامتحانات الوزارية',
        life: 'مهارات الحياة اليومية',
        religious: 'التعليم الديني',
        personal: 'التطوير الشخصي',
      },
    },
    features: {
      label: '٠٢ — لماذا فِرگا',
      title: 'التدريس والتعلّم، ببساطة.',
      desc: 'يحوّل فِرگا الفضول إلى تقدّم — والمهارة إلى فرصة حقيقية.',
      items: [
        {
          title: 'أي مادة، أي مستوى',
          body: '١٤ مجالًا للدراسة — من اللغات والمواد المدرسية إلى المهن والبرمجة ومهارات الحياة — كلها في مكان واحد.',
        },
        {
          title: 'تعلّم وعلّم',
          body: 'انضم كمتعلّم لتتطوّر، أو كمعلّم لتشارك مهاراتك وتصل إلى الطلاب الذين يحتاجونها.',
        },
        {
          title: 'تابع تقدّمك',
          body: 'تابع كل إنجاز، وانظر كم قطعت من شوط، وابقَ متحمّسًا بأهداف واضحة.',
        },
        {
          title: 'صُمّم للجميع',
          body: 'بسيط وودود، ومصمّم بحيث يستطيع أي شخص — طالب أو معلّم أو ولي أمر — البدء في ثوانٍ معدودة.',
        },
      ],
    },
    final: {
      label: '٠٣ — التثبيت',
      h1a: 'ابدأ التعلّم',
      h1b: 'اليوم.',
      desc: 'التحميل مجاني بالكامل. متاح الآن على Google Play و App Store. امسح الرمز لتثبيت فِرگا فورًا على هاتفك.',
      scan: 'امسح للتحميل',
      publishedBy: 'نُشر بواسطة ferkar.co',
    },
    footer: {
      tagline: 'التدريس والتعلّم. بُني ونُشر بواسطة ferkar.co — تطبيق واحد لكل مادة.',
      download: 'التحميل',
      company: 'الشركة',
      about: 'حول',
      contact: 'تواصل معنا',
      subjects: 'المواد الدراسية',
      rights: 'جميع الحقوق محفوظة',
    },
  },
  ckb: {
    nav: { download: 'داگرتنی فێرگا' },
    hero: {
      tagline: 'فێرکردن و فێربوون',
      h1a: 'هەرشتێک فێربە.',
      h1b: 'هەرکەسێک فێر بکە.',
      subhead: 'فێرگا هەموو بوارەکان لە یەک ئەپدا کۆدەکاتەوە — لە زمان و قوتابخانەوە تا پرۆگرامینگ، میوزیک و وەرزش — تا فێرخوازە زیرەکەکان و مامۆستایانی بەئەزموون لە یەک ئەپدا یەکتر بدۆزنەوە.',
      builtBy: 'دروستکراوە و بڵاوکراوەتەوە لەلایەن ferkar.co',
    },
    screenshots: {
      label: 'دیمەنەکانی ئەپ',
      title: 'چاوێک لە ناو ئەپی فێرگا.',
      desc: 'دیمەنی ڕاستەقینەی ناو ئەپی مۆبایلی فێرگا — گەڕان بەدوای باشترین مامۆستایان، قوتابخانەکان و سەنتەرەکانی فێربوون لە کوردستان و عێراق.',
      screens: [
        { title: 'سەرەکی و گەڕان', caption: 'دۆزینەوەی باشترین مامۆستا و قوتابخانە و سەنتەرەکان' },
        { title: 'نزیک لە خۆتەوە (📍)', caption: 'مامۆستایان و سەنتەرەکان بەپێی دووری لە شارەکەت' },
        { title: 'لیستی مامۆستایان', caption: 'مامۆستایانی شارەزا بەپێی هەڵسەنگاندن و خولەکان' },
        { title: 'کۆرسەکان و تاقیکردنەوە', caption: 'کۆرسی پایتۆن، زمان، پیانۆ و سەنتەری تاقیکردنەوەکان' },
      ],
    },
    store: {
      getItOn: 'بەدەستی بهێنە لە',
      googlePlay: 'Google Play',
      downloadOnThe: 'داگرتن لە',
      appStore: 'App Store',
    },
    categories: {
      label: '٠١ — چی دەتوانیت فێرببیت',
      title: 'یەک ئەپ. هەموو ئەو بابەتانەی گرنگن بۆت.',
      desc: 'لە وانەکانی قوتابخانەوە تا شارەزایی پیشەیی و تەکنەلۆژیا، فێرگا ١٤ بواری خوێندن دەگرێتەوە — بوارێک هەڵبژێرە و دەستپێبکە، یان ئەوەی دەیزانیت فێری کەسانی تر بکە.',
      items: {
        languages: 'زمانەکان',
        school: 'وانەکانی قوتابخانە',
        university: 'وانەکانی زانکۆ',
        technology: 'تەکنەلۆژیا و ئایتی',
        business: 'کاروبار و بازرگانی',
        trades: 'پیشە و شارەزایی تەکنیکی',
        arts: 'هونەر و دیزاین',
        music: 'میوزیک و دەنگ',
        fitness: 'وەرزش و تەندروستی',
        career: 'گەشەپێدانی پیشەیی',
        exam: 'ئامادەکاری بۆ تاقیکردنەوەکان',
        life: 'شارەزاییەکانی ژیان',
        religious: 'پەروەردەی ئایینی',
        personal: 'گەشەپێدانی کەسی',
      },
    },
    features: {
      label: '٠٢ — بۆچی فێرگا',
      title: 'فێرکردن و فێربوون، بە سادەیی.',
      desc: 'فێرگا تامەزرۆیی دەگۆڕێت بۆ پێشکەوتن — و شارەزایی دەگۆڕێت بۆ دەرفەت.',
      items: [
        {
          title: 'هەر بابەتێک، هەر ئاستێک',
          body: '١٤ بواری خوێندن — لە زمان و بابەتەکانی قوتابخانەوە تا پیشە، پرۆگرامینگ، میوزیک و شارەزایی ژیان — هەمووی لە یەک شوێندا.',
        },
        {
          title: 'فێربە و فێر بکە',
          body: 'وەک فێرخواز بەشدار بە بۆ پێشکەوتن، یان وەک مامۆستا شارەزاییت هاوبەش بکە و بگە بەو قوتابییانەی پێویستیان پێتە.',
        },
        {
          title: 'پێشکەوتنت ببەدوادا',
          body: 'هەر هەنگاوێکی فێربوون تۆمار بکە، ببینە چەندە پێشکەوتوویت، و بە ئامانجی ڕوون هەمیشە بەردەوام بە.',
        },
        {
          title: 'بۆ هەمووان دروستکراوە',
          body: 'سادە و دۆستانە، و بە شێوازێک دروستکراوە کە هەرکەسێک — قوتابی، مامۆستا، یان دایک و باوک — لە چەند چرکەیەکدا بتوانێت دەستپێبکات.',
        },
      ],
    },
    final: {
      label: '٠٣ — داگرتن',
      h1a: 'دەست بە فێربوون بکە',
      h1b: 'هەر ئەمڕۆ.',
      desc: 'داگرتن بە تەواوی بێبەرامبەرە. ئێستا لە Google Play و App Store بەردەستە. کۆدەکە سکان بکە بۆ داگرتنی خێرای فێرگا لەسەر مۆبایلەکەت.',
      scan: 'سکان بکە بۆ داگرتن',
      publishedBy: 'بڵاوکراوەتەوە لەلایەن ferkar.co',
    },
    footer: {
      tagline: 'فێرکردن و فێربوون. دروستکراوە و بڵاوکراوەتەوە لەلایەن ferkar.co — یەک پلاتفۆرم بۆ هەموو بابەتێک.',
      download: 'داگرتن',
      company: 'کۆمپانیا',
      about: 'دەربارە',
      contact: 'پەیوەندی',
      subjects: 'بابەتەکان',
      rights: 'هەموو مافەکان پارێزراون',
    },
  },
};
