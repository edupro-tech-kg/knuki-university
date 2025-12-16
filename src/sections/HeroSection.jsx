import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img from "../assets/images/hero-img.png";
import tracery from "../assets/images/tracery.png";
import { useTranslation } from "react-i18next";
import Search from "../components/UI/Search";

export default function HeroSection() {
  const { t } = useTranslation();
  const hero = t("hero");

  const slides = [img];
  const [currentSlide, setCurrentSlide] = useState(0);

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
          animateNumber(setStudents, 4450000, 1800);
          animateNumber(setBudget, 603413, 2000);
          animateNumber(setPaid, 1730409, 2200);
        }
      },
      { threshold: 0.4 }
    );

    if (numbersRef.current) observer.observe(numbersRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () =>
    setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="bg-background relative overflow-hidden ">
      <div className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-12 w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">


        <div
          className="
            relative bg-[#751715]
            w-full
            xl:flex-[1.5]
            min-h-[320px] lg:min-h-[580px]
            p-4 sm:p-6 xl:p-8 2xl:p-12
           
          "
        >
          {/* slider nav */}
          <div className="flex justify-between items-center text-white z-20 relative">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center h-10 w-10 border border-white rounded-full"
            >
              <FaArrowLeft size={14} />
            </button>

            <div className="flex items-center gap-2 text-base sm:text-lg">
              <p>
                {String(currentSlide + 1).padStart(2, "0")}/
                <span className="text-xs sm:text-sm">{slides.length}</span>
              </p>
              <div className="flex gap-1 ml-3">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full ${i === currentSlide ? "bg-white" : "bg-white/40"
                      }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center h-10 w-10 border border-white rounded-full"
            >
              <FaArrowRight size={14} />
            </button>
          </div>

          {/* image */}
          <img
            src={slides[currentSlide]}
            alt="Slide"
            className="
              w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
              h-auto object-cover
              xl:absolute xl:top-28 xl:left-4
              z-10 mx-auto mt-6 xl:mt-0
            "
          />
        </div>

        
        <div
          className="
            flex flex-col justify-center
            xl:flex-[1]
            items-center xl:items-start
            text-center xl:text-left
            gap-6 lg:gap-8
            w-full
          "
        >
          <h1 className="font-serif italic font-bold text-[#751715] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight max-w-4xl">
            {hero.title1} <br /> {hero.title2}
          </h1>

          <div className="w-full max-w-3xl">
            <Search />
          </div>

          {/* stats */}
          <div
            ref={numbersRef}
            className="flex flex-col sm:flex-row w-full gap-6 text-center"
          >
            <Stat
              value={`+${(students / 1_000_000).toFixed(2)}M`}
              label={hero.stat1}
            />
            <Divider />
            <Stat
              value={`+${budget.toLocaleString("en-US")}`}
              label={hero.stat2}
            />
            <Divider />
            <Stat
              value={`+${paid.toLocaleString("en-US")}`}
              label={hero.stat3}
            />
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-2">
          {[...Array(12)].map((_, i) => (
            <img
              key={i}
              src={tracery}
              alt=""
              className=" object-cover"
            />
          ))}
        </div>
      </div>


      <style>{`
        .stat-number {
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum";
          min-width: 8ch;
          text-align: center;
          white-space: nowrap;
          will-change: contents;
          contain: layout paint;
        }
      `}</style>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="flex-1 px-2">
      <p className="stat-number text-2xl sm:text-3xl font-medium text-[#751715]">
        {value}
      </p>
      <p className="text-sm opacity-70 mt-1">{label}</p>
    </div>
  );
}

function Divider() {
  return (
    <>
      <div className="hidden sm:block w-px bg-[#eee]" />
      <hr className="sm:hidden w-full border-[#eee]" />
    </>
  );
}
