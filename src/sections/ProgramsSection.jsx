import React, { useRef, useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const directions = [
  { slug: "socio-cultural" },
  { slug: "choreography" },
  { slug: "music-performance" },
  { slug: "music-teacher" },
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

      if (containerRef.current && desktop) {
        const container = containerRef.current;
        setShowControls(container.scrollWidth > container.clientWidth);
      }
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const getScrollAmount = () => {
    if (!containerRef.current) return { cardWidth: 320, gap: 24 };

    const container = containerRef.current;
    const firstCard = container.children[0];
    if (!firstCard) return { cardWidth: 320, gap: 24 };

    const cardWidth = firstCard.getBoundingClientRect().width;
    const containerStyle = window.getComputedStyle(container);
    const gap = parseFloat(containerStyle.gap) || 24;

    return { cardWidth, gap, scrollAmount: cardWidth + gap };
  };

  const handleNextSimple = () => {
    if (!containerRef.current || !isDesktop) return;

    const container = containerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const { scrollAmount } = getScrollAmount();

    const newScrollLeft = scrollLeft + scrollAmount;
    const maxScroll = scrollWidth - clientWidth;

    if (newScrollLeft > maxScroll + 10) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const handlePrevSimple = () => {
    if (!containerRef.current || !isDesktop) return;

    const container = containerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const { scrollAmount } = getScrollAmount();

    const newScrollLeft = scrollLeft - scrollAmount;
    if (newScrollLeft < -10) {
      container.scrollTo({
        left: scrollWidth - clientWidth,
        behavior: "smooth",
      });
    } else {
      container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const programList = useMemo(() => t("programs.list", { returnObjects: true }) || [], [t]);

  return (
    <section
      id="programs"
      className="bg-background flex items-center justify-center mt-20 container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full relative max-w-7xl">
        <h2 className="uppercase mt-10 font-serif text-2xl md:text-4xl font-bold mb-4 text-text-primary text-center italic">
          {t("programs.eyebrow")}
        </h2>

        <div className="relative">
          <div
            ref={containerRef}
            className={`
              ${
                !isDesktop
                  ? "flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 pl-4 pr-4 md:pl-0 md:pr-0"
                  : "md:flex md:overflow-x-auto md:gap-6 md:pb-4 md:scrollbar-hide md:px-1"
              }
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            `}
          >
            {programList.map((program, index) => (
              <Link
                to={`/program/${program.id}`}
                key={program.id}
                className={`
                  group 
                  ${
                    !isDesktop
                      ? "flex-shrink-0 w-[calc(100vw-64px)] md:w-[calc(50vw-48px)] snap-start"
                      : "md:flex-shrink-0 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
                  }
                  bg-white transition-all duration-300 
                  hover:shadow-lg flex flex-col
                  overflow-hidden
                  ${isDesktop ? "md:mx-0" : ""}
                `}
              >
                <div className="p-6 flex flex-col h-full">
                  <div
                    className="
                    bg-[#751715] text-white
                    rounded-sm border border-[#5f1112]
                    flex flex-col items-center
                    gap-2
                    min-h-28
                    px-4 py-4
                    mb-6
                    justify-center
                  "
                  >
                    <span
                      className="
                        h-8 w-8
                        rounded-full
                        bg-white text-[#751715]
                        text-sm font-semibold
                        flex items-center justify-center
                        shrink-0
                      "
                    >
                      {program.id}
                    </span>

                    <p className="text-sm text-center leading-snug">{program.title}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      {t(`programs.descriptions.${program.id}`, { defaultValue: "" })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
