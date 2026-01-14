import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SeoTitle from "./components/SeoTitle";

const HomePage = lazy(() => import("./pages/HomePage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));
const FacultyPage = lazy(() => import("./pages/FacultyPage"));
const NewsList = lazy(() => import("./pages/NewsList"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const StudentsLife = lazy(() => import("./pages/StudentsLife"));
const Applicants = lazy(() => import("./pages/Applicants"));
const LibraryPage = lazy(() => import("./pages/LibraryPage"));
const QualificationPage = lazy(() => import("./pages/QualificationPage"));
const ManagementPage = lazy(() => import("./pages/ManagementPage"));
const PracticeCareer = lazy(() => import("./pages/PracticeCareer"));
const HRdepartment = lazy(() => import("./pages/HRdepartmentPage"));
const EbilimPage = lazy(() => import("./pages/EbilimPage"));
const EducationPage = lazy(() => import("./pages/EducationPage"));
const LiteraturePage = lazy(() => import("./pages/LiteraturePage"));
const DocumentPage = lazy(() => import("./pages/DocumentsPage"));
const SciencePage = lazy(() => import("./pages/SciencePage"));
const ConsultationPage = lazy(() => import("./pages/ConsultationPage"));
const CouncilPage = lazy(() => import("./pages/CouncilPage"));
const Accounting = lazy(() => import("./pages/Accounting.jsx"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

function RouteLoadingFallback() {
  return (
    <main className="relative flex-1 flex items-center justify-center">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      <div className="relative">
        <div className="h-10 w-10 rounded-full border-4 border-[#751715]/20 border-t-[#751715] animate-spin" />
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light text-dark flex flex-col">
        <SeoTitle />
        <ScrollToTop />
        <Header />
        <Suspense fallback={<RouteLoadingFallback />}>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/faculty/:slug" element={<FacultyPage />} />
              <Route path="/news" element={<NewsList />} />
              <Route path="/news/:id" element={<NewsPage />} />
              <Route path="/studentsLife" element={<StudentsLife />} />
              <Route path="/applicants" element={<Applicants />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/qualification" element={<QualificationPage />} />
              <Route path="/management" element={<ManagementPage />} />
              <Route path="/practice-career" element={<PracticeCareer />} />
              <Route path="/HRdepartment" element={<HRdepartment />} />
              <Route path="/ebilim" element={<EbilimPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/literature" element={<LiteraturePage />} />
              <Route path="/documents" element={<DocumentPage />} />
              <Route path="/science" element={<SciencePage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/council" element={<CouncilPage />} />
              <Route path="/accounting" element={<Accounting />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
