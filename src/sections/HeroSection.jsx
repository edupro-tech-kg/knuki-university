import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Search from "../components/UI/Search";
import ReusableSlider from "../components/UI/ReusableSlider";
import Pattern from "../assets/svg/patterns.svg";
import img from "../assets/images/hero-img.png";
import img1 from "../assets/images/heroImage1.jpg";
import img2 from "../assets/images/heroImage2.jpg";
import img3 from "../assets/images/heroImage3.jpg";
import img4 from "../assets/images/heroImage4.jpg";
import img5 from "../assets/images/heroImage5.jpg";
import img6 from "../assets/images/heroImage6.jpg";

export default function HeroSection() {
  const { t } = useTranslation();
  const hero = t("hero");

  const slides = [
    { src: img, alt: "University building" },
    { src: img1, alt: "Students in campus" },
    { src: img2, alt: "University building" },
    { src: img3, alt: "Students in campus" },
    { src: img4, alt: "University building" },
    { src: img5, alt: "Students in campus" },
    { src: img6, alt: "Students in campus" },
  ];

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
    <section id="home" className="bg-background relative overflow-hidden">
      <div className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-12 w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">

        <div
          className="
    relative bg-[#751715]
    w-full
    xl:flex-[1.2]          /* короче по ширине на desktop */
    min-h-[450px] lg:min-h-[500px]
    p-4 sm:p-6
    xl:-ml-[100vw]         /* уводим фон влево */
    xl:pl-[100vw]          /* возвращаем контент */
  "
        >
  <ReusableSlider
            images={slides}
            type="default"
            showArrows={true}
            showNumbers={true}
            showDots={true}
            autoplay={true}
            autoplayInterval={2000}
            overlap={true} 
            className="w-full h-full"
            imageClassName="
             w-full
             max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
              h-96
              object-cover"
            mobilePosition="top"
          />
        </div>
        <div className="flex flex-col justify-center xl:flex-[1] items-center xl:items-start text-center xl:text-left gap-6 lg:gap-8 w-full">
          <h1 className="uppercase font-serif text-2xl md:text-6xl font-bold mb-4 text-text-accent text-left italic mt-4">
            {hero.title1} <br /> {hero.title2}
          </h1>
          <div className="w-full max-w-3xl">
            <Search />
          </div>
          <div ref={numbersRef} className="flex gap-1 md:gap-6 text-center">
            <Stat
              value={`+${students.toLocaleString("en-US")}`}
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
      <div className="mt-8 sm:mt-5">
        <img
          src={Pattern}
          alt="patterns"
          className="object-cover h-12 w-[620px] sm:w-[1000px] lg:h-auto lg:w-full"
        />
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
      <p className="stat-number text-xl sm:text-3xl font-medium text-[#751715]">
        {value}
      </p>
      <p className="text-xs opacity-70 mt-1">{label}</p>
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