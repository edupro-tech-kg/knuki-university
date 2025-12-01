import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import Dansers from "../assets/img/dancers.png";
import { useTranslation } from "react-i18next";

export default function HistorySection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const xPosition = useMotionValue(0);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const delta = time - previousTimeRef.current;

        const speed = 2;

        xPosition.set(xPosition.get() - speed * (delta / 16));

        const limit = window.innerWidth * 1.5;

        if (xPosition.get() <= -limit) {
          xPosition.set(0);
        }
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [xPosition]);

  const { t } = useTranslation();

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
      style={{ height: "150vh" }}
    >
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h2
          style={{ opacity: textOpacity, y: textY }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#751715] mb-6 md:mb-8 tracking-wide"
        >
          {renderTitle()}
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <motion.div
              style={{ x: xPosition }}
              className="absolute top-10 left-0 h-full flex items-center"
            >
              <img
                src={Dansers}
                alt={t("history.imageAlt")}
                className="w-[150vw] h-auto object-cover object-center min-h-[200px] md:min-h-[300px] lg:min-h-[350px] brightness-90"
              />
              <img
                src={Dansers}
                alt={t("history.imageAlt")}
                className="w-[150vw] h-auto object-cover object-center min-h-[200px] md:min-h-[300px] lg:min-h-[350px] brightness-90 ml-0"
              />
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="relative z-20 w-full max-w-[90%] sm:max-w-[80%] md:w-[500px] bg-white p-5 sm:p-6 md:p-8 mx-auto mb-6 md:mb-8 shadow-2xl min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col justify-center"
          >
            <p className="text-gray-800 leading-6 sm:leading-7 md:leading-8 text-sm sm:text-[14px] md:text-[16px] text-center">
              {t("history.content")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
