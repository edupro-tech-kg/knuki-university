
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

  return (
    <section id="home" className="bg-background relative overflow-hidden">
      <div className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-12 w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
        <div
          className="
            relative bg-[#751715]
            w-full
            xl:flex-[1.2]
            min-h-[450px] lg:min-h-[500px]
            p-4 sm:p-6
            xl:-ml-[100vw]
            xl:pl-[100vw]
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
          {/* Анимация удалена отсюда */}
        </div>
      </div>
      <div className="mt-8 sm:mt-5">
        <img
          src={Pattern}
          alt="patterns"
          className="object-cover h-12 w-[620px] sm:w-[1000px] lg:h-auto lg:w-full"
        />
      </div>
    </section>
  );
}