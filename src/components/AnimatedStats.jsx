import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const AnimatedStats = () => {
  const { t } = useTranslation();
  const hero = t("hero");
  const studentsLife = t("studentsLife");
  const [students, setStudents] = useState(0);
  const [budget, setBudget] = useState(0);
  const [paid, setPaid] = useState(0);

  const numbersRef = useRef(null);
  const started = useRef(false);

  const animateNumber = (setter, endValue, duration) => {
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setter(Math.floor(progress * endValue));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animateNumber(setStudents, 1599, 2000);
          animateNumber(setBudget, 393, 2000);
          animateNumber(setPaid, 1206, 2200);
        }
      },
      { threshold: 0.4 }
    );

    if (numbersRef.current) observer.observe(numbersRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-gray-900 uppercase italic font-serif">
          {studentsLife.numbersTitle}
        </h2>

        <div
          ref={numbersRef}
          className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center"
        >
          <Stat value={`+${students.toLocaleString("en-US")}`} label={hero.stat1} />
          <Divider />
          <Stat value={`+${budget.toLocaleString("en-US")}`} label={hero.stat2} />
          <Divider />
          <Stat value={`+${paid.toLocaleString("en-US")}`} label={hero.stat3} />
        </div>
      </div>

      <style>{`
        .stat-number {
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum";
          text-align: center;
          white-space: nowrap;
          will-change: contents;
          contain: layout paint;
        }
      `}</style>
    </div>
  );
};

function Stat({ value, label }) {
  return (
    <div className="flex-1 px-3 text-center">
      <p className="stat-number text-3xl md:text-4xl lg:text-4xl font-bold text-[#751715] mb-2">
        {value}
      </p>
      <p className="text-sm md:text-base text-gray-600 font-medium">{label}</p>
    </div>
  );
}

function Divider() {
  return (
    <>
      <div className="hidden sm:block w-px h-16 bg-gray-200" />
      <div className="sm:hidden w-16 h-px bg-gray-200" />
    </>
  );
}

export default AnimatedStats;
