import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import photo1 from "../assets/images/faculties/science/science1.jpg";
import photo2 from "../assets/images/faculties/science/science2.jpg";
import photo3 from "../assets/images/faculties/science/science3.jpg";
import photo4 from "../assets/images/faculties/science/photo4.jpg";
import photo5 from "../assets/images/faculties/science/photo5.jpg";
import photo6 from "../assets/images/faculties/science/photo6.jpg";
import photo7 from "../assets/images/faculties/science/photo7.jpg";

import heroBg from "../assets/images/faculties/magictracy/hero-bg.jpg";

function ScienceHero({ title, description, heroBackground }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const allPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [allPhotos.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="py-8 text-center">
          <h1 className="text-[#751715] text-2xl md:text-4xl font-serif italic uppercase leading-tight">
            {title}
          </h1>
        </div>
      </div>

      <div
        className="relative"
        style={{
          backgroundImage: heroBackground ? `url(${heroBackground})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-[1200px] mx-auto px-4 py-8 md:py-14 flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start">
          <div className="w-full md:w-[420px] lg:w-[460px] flex justify-center mt-4 md:mt-0">
            <div className="bg-[#751715] rounded-sm shadow-lg p-4 md:p-8 w-full">
              <div className="relative">
                <div className="h-56 w-56 md:h-96 md:w-96 rounded-full overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl bg-white mx-auto">
                  <img
                    src={allPhotos[currentSlide]}
                    alt={`Фото ${currentSlide + 1}`}
                    className="h-full w-full object-cover transition-all duration-500 ease-in-out transform"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite",
                    }}
                  />

                  <style jsx>{`
                    @keyframes fadeInOut {
                      0%,
                      100% {
                        opacity: 1;
                      }
                      33% {
                        opacity: 1;
                      }
                      66% {
                        opacity: 1;
                      }
                    }
                  `}</style>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="flex gap-2">
                    {allPhotos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentSlide
                            ? "bg-white w-2 h-2"
                            : "bg-white/50 hover:bg-white/75 w-1 h-1"
                        }`}
                        aria-label={`Go to photo ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 text-white">
            <p className="text-sm md:text-base leading-relaxed whitespace-pre-line mt-44">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SciencePage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const data = t("sciencePage", { returnObjects: true });
  if (!data) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  const heroData = {
    title: data.title,
    description: data.heroDescription || "",
    heroBackground: heroBg,
  };

  return (
    <div className="bg-light text-dark">
      <ScienceHero {...heroData} />

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
              ИЛИМ
            </button>

            <button
              onClick={() => setActiveTab(1)}
              className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${
                activeTab === 1
                  ? "bg-white border-[#751715] text-[#751715] shadow-sm"
                  : "bg-[#a52a2a] text-white border-[#8c1f1f] hover:bg-[#8c1f1f]"
              }`}
            >
              ЭЛ АРАЛЫК БАЙЛАНЫШТАР
            </button>
          </div>

          <div className="border border-[#cfcfcf] rounded-sm bg-white px-4 py-6 text-sm leading-relaxed whitespace-pre-line">
            {activeTab === 0 ? (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#751715] mb-4">
                  {t("sciencePage.scienceTitle", {
                    defaultValue: "Илимий-изилдөө иштери жөнүндө маалымат",
                  })}
                </h2>
                <p className="mb-4">{data.scienceContent1}</p>
                <p className="mb-4">{data.scienceContent2}</p>
                <p className="mb-4">{data.scienceContent3}</p>
                <p className="mb-4">{data.scienceContent4}</p>
                <p className="mb-4">{data.scienceContent5}</p>
                <p className="mb-4">{data.scienceContent6}</p>
                <p className="mb-4">{data.scienceContent7}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#751715] mb-4">
                  {t("sciencePage.internationalTitle", {
                    defaultValue: "Эл аралык байланыштар жөнүндө маалымат",
                  })}
                </h2>
                <p className="mb-4">{data.internationalContent1}</p>
                <p className="mb-4">{data.internationalContent2}</p>
                <p className="mb-4">{data.internationalContent3}</p>
                <p className="mb-4">{data.internationalContent4}</p>
                <p className="mb-4">{data.internationalContent5}</p>
                <p className="mb-4">{data.internationalContent6}</p>
                <p className="mb-4">{data.internationalContent7}</p>
                <p className="mb-4">{data.internationalContent8}</p>
                <p className="mb-4">{data.internationalContent9}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SciencePage;
