import React, { useRef, useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/UI/Button";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import music from "../assets/svg/music.svg";
import mask from "../assets/svg/mask.svg";
import projector from "../assets/svg/projector.svg";
import ballerina from "../assets/svg/ballerina.svg";

const directions = [
  { icon: music, slug: "estrada-music" },
  { icon: mask, slug: "theater" },
  { icon: projector, slug: "kino-tele" },
  { icon: ballerina, slug: "choreography" },
  { icon: music, slug: "folk-music" },
  { icon: mask, slug: "postgraduate" },
];

export default function ProgramsSection() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleNext = () => {
    if (!containerRef.current || !isDesktop) return;

    const container = containerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const cardWidth = container.children[0]?.offsetWidth || 320;
    const scrollAmount = cardWidth * 1;

    if (scrollLeft + clientWidth + scrollAmount >= scrollWidth - 10) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (!containerRef.current || !isDesktop) return;

    const container = containerRef.current;
    const { scrollLeft } = container;
    const cardWidth = container.children[0]?.offsetWidth || 320;
    const scrollAmount = cardWidth * 1;

    if (scrollLeft - scrollAmount <= 10) {
      container.scrollTo({
        left: container.scrollWidth - container.clientWidth,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const facultiesTitles = useMemo(
    () => t("facultiesData.items", { returnObjects: true }) || {},
    [t]
  );
  const programList = useMemo(() => t("programs.list", { returnObjects: true }) || [], [t]);

  const getTitle = (slug, index) =>
    facultiesTitles?.[slug]?.title || programList?.[index]?.title || slug;

  return (
    <section
      id="programs"
      className="bg-background flex items-center justify-center mt-20 container mx-auto"
    >
      <div className="w-full mx-5 relative">
        <h2 className="uppercase mt-10 font-serif italic text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-text-primary">
          {t("programs.eyebrow")}
        </h2>

        <div
          ref={containerRef}
          className={`
    ${!isDesktop ? "flex gap-6 overflow-x-auto pl-5 pr-5 snap-x snap-mandatory scrollbar-hide pb-4" : ""}
    ${isDesktop ? "md:flex md:overflow-x-auto md:gap-6 md:pb-4 md:scrollbar-hide" : ""}
    [&::-webkit-scrollbar]:hidden  /* Скрыть в WebKit браузерах */
    [-ms-overflow-style:none]      /* Скрыть в IE/Edge */
    [scrollbar-width:none]         /* Скрыть в Firefox */
  `}
        >
          {directions.map((dir, index) => (
            <Link
              to={`/faculty/${dir.slug}`}
              key={dir.slug}
              className={`
                group 
                ${!isDesktop ? "flex-shrink-0 w-[calc(100vw-80px)] snap-center" : ""}
                ${isDesktop ? "md:flex-shrink-0 md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]" : ""}
                bg-text-primary transition-colors duration-300 
                hover:bg-primary flex flex-col
              `}
              style={{
                marginRight: !isDesktop ? "20px" : isDesktop ? "0" : "0",
              }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-sm text-stroke mb-2">{t("programs.faculty")}</div>

                <h2 className="font-sans text-2xl font-medium text-white mb-4">
                  {getTitle(dir.slug, index)}
                </h2>

                <div className="flex-grow"></div>

                <div className="mb-4 flex justify-end mt-auto">
                  <div className="bg-primary p-4 transition-colors duration-300 group-hover:bg-text-primary">
                    <img src={dir.icon} alt="" className="w-20 h-20" />
                  </div>
                </div>

                <div>
                  <ButtonPrimary variant="primaryIcon">{t("programs.buttonText")}</ButtonPrimary>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {isDesktop && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="bg-transparent hover:bg-white/20 text-gray-700 h-10 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-300 px-5 md:px-4"
            >
              <FaArrowLeftLong className="w-6 h-6 md:w-14" />
            </button>

            <button
              onClick={handleNext}
              className="bg-transparent hover:bg-white/20 text-gray-700 h-10 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-300 px-5 md:px-4"
            >
              <FaArrowRightLong className="w-6 h-6 md:w-14" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
