import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Dansers from "../assets/images/dancers.png";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

export default function HistoryPage() {
  const { t } = useTranslation();

  const timelineData = t("history.SecTimeline", { returnObjects: true });

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
    <div className="relative mx-3 md:mx-20  mr-3">
      <h1 className="font-serif text-center text-3xl md:text-6xl font-bold mb-16 md:mb-24 text-[#751715] italic">
        {t("history.title")}
      </h1>

      <div className="hidden md:block absolute left-1/2 top-48 bottom-0 w-[3px] bg-gray-300 h-[75%] -translate-x-1/2 z-0"></div>

      {timelineData.map((item, index) => {
        const isActive = index === activeIndex;
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            data-index={index}
            ref={(el) => (refs.current[index] = el)}
            className="relative py-12 md:py-20"
          >
            <div className="absolute left-1/2 -top-12 mb-2 md:top-0 md:mb-0 -translate-x-1/2 z-20 transition-all duration-300">
              <div
                className={`flex items-center justify-center rounded-full transition-all duration-300 ${isActive
                  ? "w-16 h-8 border border-[#751715] text-sm font-semibold"
                  : "w-6 h-6 border border-button-primary flex items-center justify-center rounded-full"
                  }`}
              >
                {!isActive && <div className="w-4 h-4 bg-button-primary rounded-full"></div>}
                {isActive && item.year}
              </div>
            </div>

            <div
              className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center transition-all duration-500 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              style={{ transform: isActive ? "translateY(-10%)" : "translateY(0)" }}
            >
              <div
                className="w-full md:w-1/2 mx-8 transition-all duration-500 border rounded p-4"
                style={{ transform: isActive ? "translateY(-10%)" : "translateY(0)", opacity: isActive ? 1 : 0.8 }}
              >
                <h3 className="text-md md:text-xl text-primary-text font-semibold mb-2">{item.title}</h3>
                <p className="font-sans text-gray-700 leading-relaxed text-sm md:text-base">
                  {item.text}
                </p>
              </div>

              <div
                className="w-full md:w-1/2 transition-all duration-500"
                style={{ transform: isActive ? "translateY(-10%) scale(1.02)" : "translateY(0) scale(1)" }}
              >
                <img src={Dansers} className="w-full h-[200px] md:h-[300px] object-cover rounded" />
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-72 md:w-96 mx-auto -mt-10 md:-mt-16 relative z-40">
        <Link to='/history'>
          <Button variant="secondary" className="w-full">
            {t("history.moreButton")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
