import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { AppScreenshotsSection } from './components/AppScreenshotsSection';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { InstallSection } from './components/InstallSection';
import { Footer } from './components/Footer';
import { FloatingDock } from './components/FloatingDock';

function FergaLandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#1D2630]">
      {/* Sticky Top Navbar matching poshyashop.com */}
      <TopNav />

      {/* Hero Section matching poshyashop.com */}
      <HeroSection logoUrl="/ferga-logo.jpg" />

      {/* Screenshots Carousel matching poshyashop.com */}
      <AppScreenshotsSection />

      {/* 14 Categories Section */}
      <CategoriesSection />

      {/* 4 Feature Cards Section */}
      <FeaturesSection />

      {/* Final QR & Download Section */}
      <InstallSection />

      {/* Footer */}
      <Footer />

      {/* Scroll-activated Floating Dock */}
      <FloatingDock />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <FergaLandingPage />
    </LanguageProvider>
  );
}
