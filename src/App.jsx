import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import FacultyPage from "./pages/FacultyPage";
import StudentsLife from "./pages/StudentsLife";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light text-dark flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/faculty/:slug" element={<FacultyPage />} />
            <Route path="/studentsLife" element={<StudentsLife />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
