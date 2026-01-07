import React, { useRef, useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FiUser } from "react-icons/fi";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Scholars() {
    const { t, i18n } = useTranslation();
    const containerRefNational = useRef(null);
    const containerRefPresidential = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const [showControlsNational, setShowControlsNational] = useState(false);
    const [showControlsPresidential, setShowControlsPresidential] = useState(false);

    const nationalScholars = useMemo(() =>
        t("scholars.nationalScholars", { returnObjects: true }) || [],
        [t]
    );

    const presidentialScholars = useMemo(() =>
        t("scholars.presidentialScholars", { returnObjects: true }) || [],
        [t]
    );

    const currentLang = i18n.language;

    useEffect(() => {
        const checkDesktop = () => {
            const desktop = window.innerWidth >= 768;
            setIsDesktop(desktop);

            const checkContainer = (containerRef, setShowControls) => {
                if (containerRef.current && desktop) {
                    const container = containerRef.current;
                    setShowControls(container.scrollWidth > container.clientWidth);
                }
            };

            checkContainer(containerRefNational, setShowControlsNational);
            checkContainer(containerRefPresidential, setShowControlsPresidential);
        };

        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, [nationalScholars, presidentialScholars]);

    const createScrollHandler = (containerRef, isNext) => () => {
        if (!containerRef.current || !isDesktop) return;

        const container = containerRef.current;
        const { scrollLeft, scrollWidth, clientWidth } = container;

        // Динамически определяем размер карточки и отступ
        const firstCard = container.children[0];
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const computedStyle = window.getComputedStyle(container);
        const gap = parseInt(computedStyle.gap) || 0;
        const scrollAmount = cardWidth + gap;

        if (isNext) {
            if (scrollLeft + clientWidth + scrollAmount >= scrollWidth - 10) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth",
                });
            }
        } else {
            if (scrollLeft - scrollAmount <= 10) {
                container.scrollTo({
                    left: scrollWidth - clientWidth,
                    behavior: "smooth",
                });
            } else {
                container.scrollBy({
                    left: -scrollAmount,
                    behavior: "smooth",
                });
            }
        }
    };

    const handleNextNational = createScrollHandler(containerRefNational, true);
    const handlePrevNational = createScrollHandler(containerRefNational, false);
    const handleNextPresidential = createScrollHandler(containerRefPresidential, true);
    const handlePrevPresidential = createScrollHandler(containerRefPresidential, false);

    const formatYear = (year) => {
        if (currentLang === "en") return year;
        return `${year}`;
    };

    const ScholarCard = ({ scholar, isNational }) => (
        <div className="bg-white rounded-xl p-6 flex flex-col flex-shrink-0 border border-gray-200 shadow-sm h-full">
            <div className="flex justify-center mb-6">
                <div className="w-28 h-28 rounded-lg bg-gray-100 flex items-center justify-center">
                    <FiUser className="w-16 h-16 text-gray-300" />
                </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
                {scholar.name}
            </h3>

            <div className="mt-auto space-y-2 text-sm text-gray-600">
                {isNational && scholar.awardedBy && (
                    <p className="text-center">
                        <span className="font-medium"></span> {scholar.awardedBy}
                    </p>
                )}
                <p className="text-center">
                    <span className="font-medium"></span> {formatYear(scholar.year)}
                </p>
            </div>
        </div>
    );

    const ScholarSection = ({
        title,
        scholars,
        containerRef,
        showControls,
        handlePrev,
        handleNext,
        isNational
    }) => {
        if (!Array.isArray(scholars) || scholars.length === 0) return null;

        return (
            <section className="mb-16 relative">
                <h2
                    className="text-2xl font-semibold text-center mb-8"
                    style={{ color: "#751715" }}
                >
                    {title}
                </h2>

                <div className="relative">
                    <div
                        ref={containerRef}
                        className={`
              ${!isDesktop
                                ? "flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 pl-4 pr-4 md:pl-0 md:pr-0"
                                : "md:flex md:overflow-x-auto md:gap-6 md:pb-4 md:scrollbar-hide md:px-1"
                            }
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            `}
                    >
                        {scholars.map((scholar, i) => (
                            <div
                                key={i}
                                className={`
                  ${!isDesktop
                                        ? "flex-shrink-0 w-[calc(100vw-64px)] md:w-[calc(50vw-48px)] snap-start"
                                        : "md:flex-shrink-0 md:w-[320px]"
                                    }
                `}
                            >
                                <ScholarCard scholar={scholar} isNational={isNational} />
                            </div>
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
            </section>
        );
    };

    return (
        <div className="my-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 uppercase italic font-serif">
                {t("scholars.title")}
            </h1>

            <ScholarSection
                title={t("scholars.national")}
                scholars={nationalScholars}
                containerRef={containerRefNational}
                showControls={showControlsNational}
                handlePrev={handlePrevNational}
                handleNext={handleNextNational}
                isNational={true}
            />

            <ScholarSection
                title={t("scholars.presidential")}
                scholars={presidentialScholars}
                containerRef={containerRefPresidential}
                showControls={showControlsPresidential}
                handlePrev={handlePrevPresidential}
                handleNext={handleNextPresidential}
                isNational={false}
            />
        </div>
    );
}

export default Scholars;