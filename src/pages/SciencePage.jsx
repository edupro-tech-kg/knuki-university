import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import FacultyHero from "../components/faculty/FacultyHero";

import photo1 from "../assets/images/faculties/science/science1.jpg";
import photo2 from "../assets/images/faculties/science/science2.jpg";
import photo3 from "../assets/images/faculties/science/science3.jpg";
import photo4 from "../assets/images/faculties/science/photo4.jpg";
import photo5 from "../assets/images/faculties/science/photo5.jpg";
import photo6 from "../assets/images/faculties/science/photo6.jpg";
import photo7 from "../assets/images/faculties/science/photo7.jpg";

import heroBg from "../assets/images/faculties/magictracy/hero-bg.jpg";

function SciencePage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const data = t("sciencePage", { returnObjects: true });
  if (!data || !data.tabs) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  const sliderImages = useMemo(
    () => [
      { src: photo1, alt: "Science photo 1" },
      { src: photo2, alt: "Science photo 2" },
      { src: photo3, alt: "Science photo 3" },
      { src: photo4, alt: "Science photo 4" },
      { src: photo5, alt: "Science photo 5" },
      { src: photo6, alt: "Science photo 6" },
      { src: photo7, alt: "Science photo 7" },
    ],
    []
  );

  const heroData = {
    title: data.title,
    description: data.heroDescription || "",
    heroBackground: heroBg,
    sliderImages,
    heroImage: photo1,
    studyForms: data.studyForms || null,
    duration: data.duration || null,
  };

  return (
    <div className="bg-light text-dark">
      <FacultyHero {...heroData} />

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2 border border-[#cfcfcf] rounded-sm bg-white px-2 py-2 mb-4">
            <button
              onClick={() => setActiveTab(0)}
              className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${
                activeTab === 0
                  ? "bg-white border-[#751715] text-[#751715] shadow-sm"
                  : "bg-[#a52a2a] text-white border-[#8c1f1f] hover:bg-[#8c1f1f]"
              }`}
            >
              {data.tabs.science}
            </button>

            <button
              onClick={() => setActiveTab(1)}
              className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${
                activeTab === 1
                  ? "bg-white border-[#751715] text-[#751715] shadow-sm"
                  : "bg-[#a52a2a] text-white border-[#8c1f1f] hover:bg-[#8c1f1f]"
              }`}
            >
              {data.tabs.international}
            </button>
          </div>

          <div className="border border-[#cfcfcf] rounded-sm bg-white px-4 py-6 text-sm leading-relaxed whitespace-pre-line">
            {activeTab === 0 ? (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#751715] mb-4">{data.scienceTitle}</h2>
                <p>{data.scienceContent1}</p>
                <p>{data.scienceContent2}</p>
                <p>{data.scienceContent3}</p>
                <p>{data.scienceContent4}</p>
                <p>{data.scienceContent5}</p>
                <p>{data.scienceContent6}</p>
                <p>{data.scienceContent7}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#751715] mb-4">
                  {data.internationalTitle}
                </h2>
                <p>{data.internationalContent1}</p>
                <p>{data.internationalContent2}</p>
                <p>{data.internationalContent3}</p>
                <p>{data.internationalContent4}</p>
                <p>{data.internationalContent5}</p>
                <p>{data.internationalContent6}</p>
                <p>{data.internationalContent7}</p>
                <p>{data.internationalContent8}</p>
                <p>{data.internationalContent9}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SciencePage;
