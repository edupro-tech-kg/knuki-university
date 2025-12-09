import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FacultyHero from "../components/faculty/FacultyHero";
import FacultyInfoBlocks from "../components/faculty/FacultyInfoBlocks";
import FacultyStats from "../components/faculty/FacultyStats";
import FacultyTeachersTabs from "../components/faculty/FacultyTeachersTabs";
import DocumentsSection from "../components/faculty/DocumentsSection";
import SectionHeading from "../components/faculty/SectionHeading";
import { getFacultyData } from "../data/faculties";

export default function FacultyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const faculty = useMemo(() => getFacultyData(slug), [slug]);

  if (!faculty) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <p className="text-xl font-semibold mb-4">Факультет табылган жок</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded bg-[#751715] text-white hover:bg-[#5f1112]"
        >
          Башкы бетке кайтуу
        </button>
      </div>
    );
  }

  return (
    <div className="bg-light text-dark">
      <FacultyHero
        title={faculty.title}
        description={faculty.description}
        heroImage={faculty.heroImage}
        heroBackground={faculty.heroBackground}
        studyForms={faculty.studyForms}
        duration={faculty.duration}
      />
      <FacultyInfoBlocks
        infoColumns={faculty.infoColumns}
        programBlocks={faculty.programBlocks}
        programHeading={faculty.programHeading}
        layout={faculty.infoLayout || "split"}
      />
      <FacultyStats stats={faculty.stats} heading={faculty.teachersTitle} />
      <FacultyTeachersTabs groups={faculty.teacherGroups || []} />
      <DocumentsSection documents={faculty.documents} />
    </div>
  );
}
