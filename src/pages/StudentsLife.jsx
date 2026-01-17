import { useTranslation } from "react-i18next";
import StudentStructure from "../components/StudentStructure";
import StudentsInfo from "../components/StudentsInfo";
import StudentClubs from "../components/StudentClubs";
import ScholarsCarousel from "../components/ScholarsCarousel";
import AnimatedStats from "../components/AnimatedStats";

function StudentsLife() {
  const { t } = useTranslation();

  return (
    <div>
      <StudentStructure />
      <AnimatedStats />
      <StudentsInfo />
      <div className="text-center mt-10 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 uppercase italic font-serif">
          {t("scholars.title")}
        </h2>
      </div>
      <ScholarsCarousel variant="national" />
      <ScholarsCarousel variant="presidential" />
      <StudentClubs />
    </div>
  );
}

export default StudentsLife;
