import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import FacultyPage from "./pages/FacultyPage";
import NewsPage from "./pages/NewsPage";
import StudentsLife from "./pages/StudentsLife";
import Applicants from "./pages/Applicants";
import LibraryPage from "./pages/LibraryPage";
import QualificationPage from "./pages/QualificationPage";
import ManagementPage from "./pages/ManagementPage";
import PracticeCareer from "./pages/PracticeCareer";
import EducationPage from "./pages/EducationPage";
import SeoTitle from "./components/SeoTitle";
import HRdepartment from "./pages/HRdepartmentPage";
import EbilimPage from "./pages/EbilimPage";
import DocumentPage from "./pages/DocumentsPage";
import SciencePage from "./pages/SciencePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light text-dark flex flex-col">
        <SeoTitle />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/faculty/:slug" element={<FacultyPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/studentsLife" element={<StudentsLife />} />
            <Route path="/applicants" element={<Applicants />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/qualification" element={<QualificationPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/practice-career" element={<PracticeCareer />} />
            <Route path="/HRdepartment" element={<HRdepartment/>} />
            <Route path="/ebilim" element={<EbilimPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/documents" element={<DocumentPage />} />
            <Route path="/science" element={<SciencePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
