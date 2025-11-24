import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import AboutShort from "./sections/AboutShort";
import ProgramsSection from "./sections/ProgramsSection";
import AdvantagesSection from "./sections/AdvantagesSection";
import EventsPreview from "./sections/EventsPreview";
import HistorySection from "./sections/HistorySection";
import GallerySection from "./sections/GallerySection";
import ContactForm from "./sections/ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-light text-dark">
      <Header />
      <main className="space-y-12 md:space-y-16">
        <HeroSection />
        <AboutShort />
        <ProgramsSection />
        <AdvantagesSection />
        <EventsPreview />
        <HistorySection />
        <GallerySection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
