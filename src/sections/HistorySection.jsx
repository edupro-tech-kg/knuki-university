import { useScroll, useTransform, motion, useAnimationFrame } from "framer-motion";
import { useState, useRef } from "react";
import Dansers from "../assets/img/dancers.png";
import { useTranslation } from "react-i18next";

export default function HistorySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const xPosition = useRef(0);
  const imageWidth = 150;

  useAnimationFrame((time, delta) => {
    const speed = 0.08;
    xPosition.current = xPosition.current - speed * (delta / 16);

    if (xPosition.current <= -imageWidth) {
      xPosition.current = 0;
    }
  });

  const [showFullText, setShowFullText] = useState(false);
  const { t } = useTranslation();

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const renderTitle = () => {
    const title = t("history.title");
    const parts = title.split(" ");

    return parts.map((part, index) => {
      const isTaryh = part.toLowerCase() === "taryh";

      return (
        <span key={index} className={isTaryh ? "font-inter" : ""}>
          {part}
          {index < parts.length - 1 && " "}
        </span>
      );
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center py-10 md:py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h2
          style={{ opacity: textOpacity }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#751715] mb-6 md:mb-8 tracking-wide"
        >
          {renderTitle()}
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <motion.div
              style={{
                x: `${xPosition.current}%`,
              }}
              className="absolute top-0 left-0 h-full flex items-center"
            >
              <img
                src={Dansers}
                alt={t("history.imageAlt")}
                className="w-[150vw] h-auto object-cover object-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px] brightness-90"
              />
              <img
                src={Dansers}
                alt={t("history.imageAlt")}
                className="w-[150vw] h-auto object-cover object-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px] brightness-90 ml-0"
              />
            </motion.div>
          </div>

          <motion.div
            style={{
              opacity: textOpacity,
              y: textY,
            }}
            className={`relative z-20 w-full max-w-[90%] sm:max-w-[80%] md:w-[552px] bg-white p-6 sm:p-8 md:p-10 mx-auto mb-6 md:mb-8 shadow-2xl ${
              showFullText
                ? "min-h-[500px] sm:min-h-[600px] md:min-h-[652px]"
                : "h-auto min-h-[300px] sm:min-h-[350px]"
            } flex flex-col justify-between`}
          >
            <p className="text-gray-800 leading-6 sm:leading-7 md:leading-8 text-sm sm:text-[15px] md:text-[17px] text-center mb-4 sm:mb-6 flex-grow">
              {showFullText ? t("history.content") : `${t("history.content").substring(0, 200)}...`}
            </p>

            <button
              onClick={toggleText}
              className="text-[#751715] font-semibold hover:text-[#5a1210] transition-colors duration-200 underline text-sm sm:text-base mt-4"
            >
              {showFullText ? t("history.readLess") : t("history.readMore")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
