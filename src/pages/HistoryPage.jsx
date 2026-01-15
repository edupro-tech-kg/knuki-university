import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Dansers from "../assets/images/dancers.png";

export default function HistoryPage() {
  const { t } = useTranslation();

  const timelineData = t("historyPage.timeline", { returnObjects: true });

  const refs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const options = { threshold: 0.25 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    }, options);

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative mx-auto pt-24 md:pt-10 mr-3">
      <h1 className="font-serif text-center text-3xl md:text-6xl font-bold mb-16 md:mb-24 text-[#751715] italic">
        {t("historyPage.title")}
      </h1>

      <div className="hidden md:block absolute left-1/2 top-60 bottom-0 w-[3px] bg-gray-300 h-[75%] -translate-x-1/2 z-0"></div>

      {timelineData.map((item, index) => {
        const isActive = index === activeIndex;
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            data-index={index}
            ref={(el) => (refs.current[index] = el)}
            className="relative py-16 md:py-32"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 transition-all duration-300">
              <div
                className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-16 h-8 border border-[#751715] text-sm font-semibold"
                    : "w-6 h-6 border border-button-primary flex items-center justify-center rounded-full"
                }`}
              >
                {!isActive && <div className="w-4 h-4 bg-button-primary rounded-full"></div>}
                {isActive && item.year}
              </div>
            </div>

            <div
              className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center transition-all duration-500 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ transform: isActive ? "translateY(-10px)" : "translateY(0)" }}
            >
              <div
                className="w-full md:w-1/2 mx-8 transition-all duration-500 border rounded p-4"
                style={{
                  transform: isActive ? "translateY(-10px)" : "translateY(0)",
                  opacity: isActive ? 1 : 0.8,
                }}
              >
                <h3 className="text-md md:text-xl text-primary-text font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-gray-700 leading-relaxed text-sm md:text-base">
                  {item.text}
                </p>
              </div>

              <div
                className="w-full md:w-1/2 transition-all duration-500"
                style={{
                  transform: isActive ? "translateY(-20px) scale(1.02)" : "translateY(0) scale(1)",
                }}
              >
                <img src={Dansers} className="w-full h-[300px] md:h-[500px] object-cover rounded" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
