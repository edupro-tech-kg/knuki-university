import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import ProgramsSection from "./sections/ProgramsSection";
import HistorySection from "./sections/HistorySection";
import GallerySection from "./sections/GallerySection";
import ContactForm from "./sections/ContactForm";
import MissionSection from "./sections/MissionSection";
import QuickLinks from "./sections/QuickLinks";
import NewsSection from "./sections/NewsSection";
import CalendarEvents from "./sections/CalendarEvents";

function App() {
  return (
    <div className="min-h-screen bg-light text-dark">
      <Header />
      <main className="space-y-12 md:space-y-16">
        <HeroSection />
        <NewsSection />
        <ProgramsSection />
        <MissionSection />
        <CalendarEvents />
        <QuickLinks />
        <HistorySection />
        <GallerySection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
