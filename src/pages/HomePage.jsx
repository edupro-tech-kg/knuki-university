// HomePage.jsx
import HeroSection from "../sections/HeroSection";
import NewsSection from "../sections/NewsSection";
import ProgramsSection from "../sections/ProgramsSection";
import MissionSection from "../sections/MissionSection";
import CalendarEvents from "../sections/CalendarEvents";
import QuickLinks from "../sections/QuickLinks";
import HistorySection from "../sections/HistorySection";
import GallerySection from "../sections/GallerySection";
import ContactForm from "../sections/ContactForm";
import RectorMessage from "../sections/RectorMessage";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-12">
      {/* Используем полный HeroSection компонент */}
      <HeroSection />
      <NewsSection />
      <ProgramsSection />
      <MissionSection />
      <RectorMessage />
      <CalendarEvents />
      <QuickLinks />
      <HistorySection />
      <GallerySection />
      <ContactForm />
    </div>
  );
}