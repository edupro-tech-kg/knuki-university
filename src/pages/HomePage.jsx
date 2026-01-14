// HomePage.jsx
import { Suspense, lazy } from "react";
import HeroSection from "../sections/HeroSection";
import NewsSection from "../sections/NewsSection";
import ProgramsSection from "../sections/ProgramsSection";
import LazyMount from "../components/UI/LazyMount";

const MissionSection = lazy(() => import("../sections/MissionSection"));
const RectorMessage = lazy(() => import("../sections/RectorMessage"));
const CalendarEvents = lazy(() => import("../sections/CalendarEvents"));
const QuickLinks = lazy(() => import("../sections/QuickLinks"));
const HistorySection = lazy(() => import("../sections/HistorySection"));
const GallerySection = lazy(() => import("../sections/GallerySection"));
const ContactForm = lazy(() => import("../sections/ContactForm"));

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-12">
      {/* Используем полный HeroSection компонент */}
      <HeroSection />
      <NewsSection />
      <ProgramsSection />
      <LazyMount minHeight={520}>
        <Suspense fallback={null}>
          <MissionSection />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight={520}>
        <Suspense fallback={null}>
          <RectorMessage />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight={420}>
        <Suspense fallback={null}>
          <CalendarEvents />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight={240}>
        <Suspense fallback={null}>
          <QuickLinks />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight={520}>
        <Suspense fallback={null}>
          <HistorySection />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight={520}>
        <Suspense fallback={null}>
          <GallerySection />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight={560}>
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </LazyMount>
    </div>
  );
}
