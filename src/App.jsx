import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

// Lazy load 非首屏元件，減少初始 bundle 大小
const FinanceSection = lazy(() => import('./components/FinanceSection'));
const SchoolsSection = lazy(() => import('./components/SchoolsSection'));
const NewsSection = lazy(() => import('./components/NewsSection'));
const TimelineSection = lazy(() => import('./components/TimelineSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

const SectionFallback = () => (
  <div className="py-24 flex items-center justify-center" aria-busy="true" aria-label="載入中">
    <div className="border-4 border-black bg-yellow-400 px-8 py-4 font-black text-xl comic-shadow animate-pulse">
      載入中...
    </div>
  </div>
);

export default function App() {
  return (
    <div
      className="min-h-screen text-black bg-[#fdfdfd] overflow-x-hidden selection:bg-yellow-300"
      style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
    >
      {/* 鍵盤使用者跳過導航 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-yellow-400 border-4 border-black px-6 py-3 font-black text-lg"
      >
        跳至主要內容
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />

        {/* 動態資訊跑馬燈 */}
        <div
          className="bg-black py-4 -rotate-1 scale-105 mb-24 overflow-hidden whitespace-nowrap border-y-4 border-white shadow-xl relative z-20 font-black"
          aria-label="最新消息跑馬燈"
          role="marquee"
        >
          <div className="text-yellow-400 font-black text-2xl tracking-widest inline-block animate-pulse" aria-hidden="true">
            🔥 2026 年度入學申請中 • 高中三年學費全免 • 台灣 3+4 官方合作計畫 • 馬來西亞專區 •{' '}
            🔥 2026 年度入學申請中 • 高中三年學費全免 • 台灣 3+4 官方合作計畫 • 馬來西亞專區 •{' '}
          </div>
          {/* 給螢幕閱讀器的靜態版本 */}
          <span className="sr-only">2026 年度入學申請中。高中三年學費全免。台灣 3+4 官方合作計畫。馬來西亞專區招生。</span>
        </div>

        <Suspense fallback={<SectionFallback />}>
          <FinanceSection />
        </Suspense>

        <FeaturesSection />

        <Suspense fallback={<SectionFallback />}>
          <SchoolsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <NewsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TimelineSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
