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
    <section id="home" className="bg-background relative overflow-hidden mt-5">
      <div className="flex flex-col-reverse xl:flex-row relative justify-between w-full max-w-7xl 2xl:max-w-[1449px] mx-auto px-4 sm:px-6 xl:px-8 2xl:px-0">
        {/* LEFT SLIDER */}
        <div className="xl:w-[466px] w-full h-auto min-h-[295px] lg:min-h-[570px] p-4 sm:p-6 xl:p-8 2xl:p-12 mb-10 xl:mb-0 bg-[#751715] relative">
          {/* slides nav */}
          <div className="flex justify-between items-center text-white z-20 relative">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center h-10 w-10 border border-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Previous slide"
            >
              <FaArrowLeft size={14} />
            </button>

            <div className="flex items-center font-normal text-base sm:text-lg gap-2">
              <p>
                {String(currentSlide + 1).padStart(2, "0")}/
                <span className="text-xs sm:text-sm">{slides.length}</span>
              </p>
              <div className="flex gap-1 ml-3">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${i === currentSlide ? "bg-white" : "bg-white/40"
                      }`}
                  ></span>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center h-10 w-10 border border-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Next slide"
            >
              <FaArrowRight size={14} />
            </button>
          </div>

          <img
            src={slides[currentSlide]}
            alt="Slide"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover xl:absolute z-10 xl:top-32 xl:left-4 mx-auto mt-6 xl:mt-0"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center xl:items-start items-center xl:text-left text-center gap-6 lg:gap-8 xl:gap-10 mb-12 xl:mb-0 w-full xl:w-auto xl:pl-8 2xl:pl-12 xl:max-w-[calc(100%-500px)]">
          <h1 className="font-serif text-[#751715] font-bold italic text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[55px] 2xl:text-6xl leading-tight max-w-4xl mx-auto xl:mx-0 px-4 sm:px-0">
            {hero.title1} — <br /> {hero.title2}
          </h1>

          <div className="w-full max-w-3xl mx-auto xl:mx-0 px-4 sm:px-0">
            <Search />
          </div>

          {/* ⭐ Count-up section */}
          <div
            className="flex flex-col sm:flex-row text-center gap-4 sm:gap-6 lg:gap-8 mt-4 w-full px-4 sm:px-0"
            ref={numbersRef}
          >
            <div className="flex-1 min-w-0 px-2">
              <p className="font-medium text-2xl sm:text-2xl lg:text-3xl text-[#751715] truncate">
                +{(students / 1000000).toFixed(2)}M
              </p>
              <p className="text-sm sm:text-base opacity-70 mt-1 break-words line-clamp-2">
                {hero.stat1}
              </p>
            </div>

            <div className="hidden sm:block w-px h-14 bg-[#EEEEEE] self-center flex-shrink-0"></div>
            <hr className="sm:hidden w-full border-t border-[#EEEEEE]" />

            <div className="flex-1 min-w-0 px-2">
              <p className="font-medium text-2xl sm:text-2xl lg:text-3xl text-[#751715] truncate">
                +{budget.toLocaleString()}
              </p>
              <p className="text-sm sm:text-base opacity-70 mt-1 break-words line-clamp-2">
                {hero.stat2}
              </p>
            </div>

            <div className="hidden sm:block w-px h-14 bg-[#EEEEEE] self-center flex-shrink-0"></div>
            <hr className="sm:hidden w-full border-t border-[#EEEEEE]" />

            <div className="flex-1 min-w-0 px-2">
              <p className="font-medium text-2xl sm:text-2xl lg:text-3xl text-[#751715] truncate">
                +{paid.toLocaleString()}
              </p>
              <p className="text-sm sm:text-base opacity-70 mt-1 break-words line-clamp-2">
                {hero.stat3}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling ornament */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-2">
          {[...Array(16)].map((_, i) => (
            <img key={i}
              className="object-cover h-12  w-[620px] sm:w-[1000px]   lg:h-auto lg:w-full"
              src={tracery} alt="ornament" />
          ))}
        </div>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .scroll-animation {
            animation: scrollLeft 12s linear infinite;
          }
        }
        
        @media (max-width: 1280px) {
          .xl\\:max-w-\\[calc\\(100\\%-500px\\)\\] {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}