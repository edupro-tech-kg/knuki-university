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
  { icon: music, slug: "choreography" },
  { icon: mask, slug: "folk-music" },
  { icon: projector, slug: "estrada-music" },
  { icon: ballerina, slug: "theater" },
  { icon: music, slug: "kino-tele" },
  { icon: mask, slug: "postgraduate" },
];

export default function ProgramsSection() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);

      // Проверяем, нужны ли кнопки навигации (если контент не помещается)
      if (containerRef.current && desktop) {
        const container = containerRef.current;
        setShowControls(container.scrollWidth > container.clientWidth);
      }
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
    const gap = 24; // 6 * 4px (gap-6 = 1.5rem = 24px)
    const scrollAmount = cardWidth + gap;

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
    const gap = 24;
    const scrollAmount = cardWidth + gap;

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
      className="bg-background flex items-center justify-center mt-20 container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full relative max-w-7xl">
        <h2 className="uppercase font-serif text-2xl md:text-4xl font-bold mb-4 text-text-primary text-center italic">
          {t("programs.eyebrow")}
        </h2>

        <div className="relative">
          <div
            ref={containerRef}
            className={`
              ${
                !isDesktop
                  ? "flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 pl-4 pr-4 md:pl-0 md:pr-0"
                  : "md:flex md:overflow-x-auto md:gap-6 md:pb-4 md:scrollbar-hide md:px-1"
              }
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            `}
          >
            {directions.map((dir, index) => (
              <Link
                to={`/faculty/${dir.slug}`}
                key={dir.slug}
                className={`
                  group 
                  ${
                    !isDesktop
                      ? "flex-shrink-0 w-[calc(100vw-64px)] md:w-[calc(50vw-48px)] snap-start"
                      : "md:flex-shrink-0 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
                  }
                  bg-text-primary transition-all duration-300 
                  hover:bg-primary flex flex-col
                   overflow-hidden
                  ${isDesktop ? "md:mx-0" : ""}
                `}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="text-sm text-stroke mb-2">{t("programs.faculty")}</div>

                  <h3 className="font-sans text-xl font-medium text-white mb-4">
                    {getTitle(dir.slug, index)}
                  </h3>

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
        </div>

        {isDesktop && showControls && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="bg-white hover:bg-gray-100 text-gray-700 h-10 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-300 shadow-sm hover:shadow-md px-4 md:px-5"
              aria-label="Previous"
            >
              <FaArrowLeftLong className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={handleNext}
              className="bg-white hover:bg-gray-100 text-gray-700 h-10 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-300 shadow-sm hover:shadow-md px-4 md:px-5"
              aria-label="Next"
            >
              <FaArrowRightLong className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
