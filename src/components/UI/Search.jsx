import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img from "../../assets/images/hero-img.png";
import tracery from "../../src/assets/images/tracery.png";
import { useTranslation } from "react-i18next";
import Search from "./Search"; // Импортируем Search компонент

export default function HeroSection() {
  const { t } = useTranslation();
  const hero = t("hero");

  const slides = [img, img, img, img, img, img];
  const [students, setStudents] = useState(0);
  const [budget, setBudget] = useState(0);
  const [paid, setPaid] = useState(0);

  const numbersRef = useRef(null);
  const started = useRef(false);

  const animateNumber = (setter, endValue, duration) => {
    let start = 0;
    const stepTime = 10;
    const increment = endValue / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setter(Math.floor(start));
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animateNumber(setStudents, 4450000, 2000);
          animateNumber(setBudget, 603413, 2300);
          animateNumber(setPaid, 1730409, 2500);
        }
      },
      { threshold: 0.4 }
    );

    if (numbersRef.current) observer.observe(numbersRef.current);
    return () => observer.disconnect();
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="lg:mt-[160px] mt-[200px] relative">
      <div className="flex flex-col-reverse xl:flex-row items-start justify-between w-full max-w-[1449px] mx-auto px-4 xl:px-0 gap-8 xl:gap-0">
        {/* LEFT SLIDER SECTION - фиксированная ширина */}
        <div className="xl:w-[466px] w-full relative">
          <div className="bg-[#751715] h-[295px] lg:h-[712px] p-6 xl:p-12 relative overflow-hidden">
            {/* slides nav */}
            <div className="flex justify-between items-center text-white z-20 relative">
              <button
                onClick={prevSlide}
                className="flex items-center justify-center h-10 w-10 border border-white rounded-full hover:bg-white/10 transition-colors"
              >
                <FaArrowLeft size={14} />
              </button>

              <div className="flex items-center font-normal text-[16px] sm:text-[18px] gap-2">
                <p>
                  {String(currentSlide + 1).padStart(2, "0")}/
                  <span className="text-[12px] mt-1.5">20</span>
                </p>
                <div className="flex gap-1 ml-3">
                  {slides.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        i === currentSlide ? "bg-white" : "bg-white/40"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="flex items-center justify-center h-10 w-10 border border-white rounded-full hover:bg-white/10 transition-colors"
              >
                <FaArrowRight size={14} />
              </button>
            </div>

            {/* Изображение - выходит за пределы справа */}
            <img
              src={slides[currentSlide]}
              alt="Slide"
              className="absolute left-1/2 -translate-x-1/2 xl:left-auto xl:right-0 xl:translate-x-[30%] 
                       top-1/2 -translate-y-1/2 lg:top-[60%] lg:-translate-y-1/2
                       w-[284px] h-[237px] sm:w-[350px] sm:h-[292px] 
                       lg:w-[621px] lg:h-[518px] 
                       object-cover z-10"
            />
          </div>
        </div>

        {/* RIGHT CONTENT SECTION - выравнивается по левому краю слайдера */}
        <div className="xl:flex-1 xl:pl-[100px] lg:pl-[50px] w-full">
          <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left gap-8 lg:gap-10">
            <h1
              className="font-serif text-[#751715] font-bold italic 
                          text-[32px] sm:text-[40px] lg:text-[55px] xl:text-[65px] 
                          leading-tight max-w-[700px]"
            >
              {hero.title1} — <br /> {hero.title2}
            </h1>

            {/* Search компонент */}
            <div className="w-full max-w-[690px]">
              <Search />
            </div>

            {/* Статистика */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-6 lg:gap-8 mt-4"
              ref={numbersRef}
            >
              <div className="text-center">
                <p className="font-medium text-[24px] sm:text-[26px] lg:text-[30px] text-[#751715]">
                  {(students / 1000000).toFixed(2)}M
                </p>
                <p className="text-sm sm:text-base opacity-70 mt-1">{hero.stat1}</p>
              </div>

              <div className="hidden sm:block w-[1px] h-[56px] bg-[#EEEEEE]"></div>
              <hr className="sm:hidden w-full border-t border-[#EEEEEE]" />

              <div className="text-center">
                <p className="font-medium text-[24px] sm:text-[26px] lg:text-[30px] text-[#751715]">
                  {budget.toLocaleString()}
                </p>
                <p className="text-sm sm:text-base opacity-70 mt-1">{hero.stat2}</p>
              </div>

              <div className="hidden sm:block w-[1px] h-[56px] bg-[#EEEEEE]"></div>
              <hr className="sm:hidden w-full border-t border-[#EEEEEE]" />

              <div className="text-center">
                <p className="font-medium text-[24px] sm:text-[26px] lg:text-[30px] text-[#751715]">
                  {paid.toLocaleString()}
                </p>
                <p className="text-sm sm:text-base opacity-70 mt-1">{hero.stat3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling ornament */}
      <div className="relative w-full overflow-hidden mt-10 lg:mt-16">
        <div className="flex scroll-animation gap-2">
          {[...Array(8)].map((_, i) => (
            <img key={i} className="h-[40px] lg:h-[50px]" src={tracery} alt="ornament" />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-animation {
          display: flex;
          width: calc(200%);
          animation: scrollLeft 20s linear infinite;
        }
        
        @media (max-width: 768px) {
          .scroll-animation {
            animation: scrollLeft 12s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
