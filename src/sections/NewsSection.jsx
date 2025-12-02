import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import ButtonPrimary from "../components/UI/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import ballerina from "../../src/assets/images/ballerina.png";
import girlSinging from "../../src/assets/images/girlSinging.png";
import delivery from "../../src/assets/images/delivery.png";
import rehearsal from "../../src/assets/images/rehearsal.png";
import audience from "../../src/assets/images/audience.png";
export default function NewsSection() {
  const { t } = useTranslation();
  const news = t("news", { returnObjects: true });
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const slides = [
    {
      id: 1,
      image: ballerina,
      title: news?.items?.[0]?.title || "Ballerina Performance",
      buttonText: news?.items?.[0]?.buttonText || "Learn More",
    },
    {
      id: 2,
      image: girlSinging,
      title: news?.items?.[1]?.title || "Girl Singing",
      buttonText: news?.items?.[1]?.buttonText || "View Details",
    },
    {
      id: 3,
      image: delivery,
      title: news?.items?.[2]?.title || "Fast Delivery",
      buttonText: news?.items?.[2]?.buttonText || "Order Now",
    },
    {
      id: 4,
      image: rehearsal,
      title: news?.items?.[3]?.title || "Rehearsal",
      buttonText: news?.items?.[3]?.buttonText || "Get Tickets",
    },
    {
      id: 5,
      image: audience,
      title: news?.items?.[4]?.title || "Audience",
      buttonText: news?.items?.[4]?.buttonText || "Join Event",
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(Math.floor(slides.length / 2));

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      swiperInstance.on("slideChange", () => {
        setActiveSlideIndex(swiperInstance.activeIndex);
      });
    }
  }, [swiperInstance]);

  return (
    <section>
      <div className="container mx-auto px-4">
        <h3 className="uppercase mt-10 font-serif italic text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16 text-gray-800 ">
          {news?.title}
        </h3>

        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={40}
            initialSlide={Math.floor(slides.length / 2)}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
            modules={[EffectCoverflow, Navigation]}
            className="w-full pb-16"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              320: {
                spaceBetween: 20,
              },
              768: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 40,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={slide.id}
                className="!w-64 !h-80 md:!w-72 md:!h-96 lg:!w-80 lg:!h-[28rem]"
              >
                <div
                  className={`relative w-full h-full rounded-xl overflow-hidden shadow-xl transition-all duration-500 ${
                    index === activeSlideIndex ? "scale-100" : "scale-95"
                  }`}
                  style={{
                    transform:
                      index === activeSlideIndex
                        ? "perspective(1000px) rotateY(0deg)"
                        : index < activeSlideIndex
                          ? "perspective(1000px) rotateY(-8deg)"
                          : "perspective(1000px) rotateY(8deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      index === activeSlideIndex ? "filter-none" : "grayscale"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

                  {index === activeSlideIndex && (
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white">
                      <div className="text-center mb-4">
                        <h4 className="text-lg md:text-xl font-bold mb-2 line-clamp-1">
                          {slide.title}
                        </h4>
                      </div>
                      <div className="flex justify-center">
                        <ButtonPrimary>{slide.buttonText}</ButtonPrimary>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute py-3 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
            <button
              ref={prevRef}
              className="bg-transparent hover:bg-white/20 text-gray-700 h-10 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed px-5 md:px-4"
            >
              <FaArrowLeftLong className="w-6 h-6 md:w-14" />
            </button>

            <button
              ref={nextRef}
              className="bg-transparent hover:bg-white/20 text-gray-700 h-10 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed px-5 md:px-4"
            >
              <FaArrowRightLong className="w-6 h-6 md:w-14" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
