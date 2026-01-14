import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from "../assets/images/applicants/slide1.jpg";
import slide2 from "../assets/images/applicants/slide2.jpg";
import slide3 from "../assets/images/applicants/slide3.jpg";
import slide4 from "../assets/images/applicants/slide4.jpg";
import slide5 from "../assets/images/applicants/slide5.jpg";
import slide6 from "../assets/images/applicants/slide6.jpg";
import slide7 from "../assets/images/applicants/slide7.jpg";
import slide8 from "../assets/images/applicants/slide8.jpg";
import slide9 from "../assets/images/applicants/slide9.jpg";
import slide10 from "../assets/images/applicants/slide10.jpg";
import slide11 from "../assets/images/applicants/slide11.jpg";
import slide12 from "../assets/images/applicants/slide12.jpg";
import slide13 from "../assets/images/applicants/slide13.jpg";
import slide14 from "../assets/images/applicants/slide14.jpg";
import slide15 from "../assets/images/applicants/slide15.jpg";
import slide16 from "../assets/images/applicants/slide16.jpg";
import slide17 from "../assets/images/applicants/slide17.jpg";
import slide18 from "../assets/images/applicants/slide18.jpg";

export default function ApplicantsSwiper() {
  const { t } = useTranslation();
  const studentsMoments = t("studentsMoments", { returnObjects: true });
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    slide1, slide2, slide3, slide4, slide5, slide6,
    slide7, slide8, slide9, slide10, slide11, slide12,
    slide13, slide14, slide15, slide16, slide17, slide18
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-xl leading-snug tracking-tight text-center uppercase text-text-accent mb-8 md:mb-12">
        <h1>{studentsMoments.title}</h1>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 ">
        <div className="h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] xl:h-[500px] w-full">
          <Swiper
            effect="cube"
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: isMobile ? 10 : 20,
              shadowScale: isMobile ? 0.8 : 0.94,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={!isMobile}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            modules={[EffectCube, Pagination, Autoplay, Navigation]}
            className="h-full rounded-xl overflow-hidden shadow-2xl [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img 
                    src={slide} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm md:text-base">
                      {index + 1} / {slides.length}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}