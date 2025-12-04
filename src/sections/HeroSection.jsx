import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import img from "../assets/images/hero-img.png";
import { useTranslation } from "react-i18next";
import AnimatedOrnament from "../components/AnimatedOrnament"; 

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
      <div className="flex flex flex-col-reverse xl:flex-row relative justify-between w-full xl:w-[1449px] mx-auto px-4 lx:p-0">
        {/* LEFT SLIDER */}
        <div className="bg-[#751715] xl:w-[466px] w-full h-[295px] lg:h-[712px] p-6 xl:p-12 mb-10 xl:mb-0">
          {/* slides nav */}
          <div className="flex justify-between items-center text-white">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center h-10 w-10 border border-white rounded-full"
            >
              <FaArrowLeft size={14} />
            </button>

            <div className="flex items-center font-normal text-[18px] gap-2">
              <p>
                {String(currentSlide + 1).padStart(2, "0")}/
                <span className="text-[12px] mt-1.5">20</span>
              </p>
              <div className="flex gap-1 ml-3">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === currentSlide ? "bg-white" : "bg-white/40"
                    }`}
                  ></span>
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

          <img
            src={slides[currentSlide]}
            alt="Slide"
            className="lg:w-[621px] lg:h-[518px] w-[284.125px] h-[237px] object-cover xl:absolute z-10 xl:top-[131px] xl:left-4 mx-auto"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center xl:items-start items-center xl:text-left text-center gap-10 mb-12 lx:mb-0">
          <h1 className="font-serif text-[#751715] font-bold italic text-[35.41px] lg:text-[65px] leading-tight lg:w-[700px] flex-wrap mx-auto">
            {hero.title1} — <br /> {hero.title2}
          </h1>

          <div className="flex border rounded-lg h-14 shadow-sm overflow-hidden  h-[45px] lg:h-[49px] w-full">
            <div className="flex items-center gap-3 bg-[#F5F5F5] px-4 w-full">
              <FaSearch className="text-gray-500 text-sm" />
              <input
                type="text"
                placeholder={hero.searchPlaceholder}
                className="bg-transparent outline-none w-full"
              />
            </div>

            <button className="bg-[#3C3C3C] rounded-lg text-white px-6 lg:px-14 font-semibold flex items-center gap-2">
              {hero.next} <FaArrowRight size={16} />
            </button>
          </div>

          {/* ⭐ Count-up section */}
          <div className="flex text-center gap-4" ref={numbersRef}>
            <div>
              <p className="font-medium text-[19px] lg:text-[30px]">
                {(students / 1000000).toFixed(2)}
              </p>
              <p className="lg:text-sm text-xs opacity-70">{hero.stat1}</p>
            </div>

            <hr className="w-[1px] h-[56px] bg-[#EEEEEE]" />

            <div>
              <p className="font-medium text-[19px] lg:text-[30px]">{budget}</p>
              <p className="lg:text-sm text-xs opacity-70">{hero.stat2}</p>
            </div>

            <hr className="w-[1px] h-[56px] bg-[#EEEEEE]" />

            <div>
              <p className="font-medium text-[19px] lg:text-[30px]">{paid}</p>
              <p className="lg:text-sm text-xs opacity-70">{hero.stat3}</p>
            </div>
          </div>
        </div>
      </div>

      <AnimatedOrnament speed={16} height="50px" />
    </section>
  );
}
