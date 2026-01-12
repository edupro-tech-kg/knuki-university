import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Virtual } from "swiper/modules";
import ButtonPrimary from "../components/UI/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/virtual";

import grand1 from "../../src/assets/images/grand1.jpg";
import newGym from "../../src/assets/images/newGym.jpg";
import construction1 from "../../src/assets/images/construction1.jpg";
import instrument2 from "../../src/assets/images/instrument2.jpg";
import makam from "../../src/assets/images/makam.jpg";

export default function NewsSectionInfinite() {
  const { t } = useTranslation();
  const newsTitle = t("news.title");
  const newsItems = t("news.items", { returnObjects: true });
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const slidesData = useMemo(
    () => [
      {
        id: 1,
        slug: newsItems?.[0]?.id || 1,
        image: makam,
        title: newsItems?.[0]?.title,
        buttonText: newsItems?.[0]?.buttonText,
      },
      {
        id: 2,
        slug: newsItems?.[1]?.id || 2,
        image: newGym,
        title: newsItems?.[1]?.title || "Girl Singing",
        buttonText: newsItems?.[1]?.buttonText || "View Details",
      },
      {
        id: 3,
        slug: newsItems?.[2]?.id || 3,
        image: construction1,
        title: newsItems?.[2]?.title || "Fast Delivery",
        buttonText: newsItems?.[2]?.buttonText || "Order Now",
      },
      {
        id: 4,
        slug: newsItems?.[3]?.id || 4,
        image: grand1,
        title: newsItems?.[3]?.title || "Rehearsal",
        buttonText: newsItems?.[3]?.buttonText || "Get Tickets",
      },
      {
        id: 5,
        slug: newsItems?.[4]?.id || 5,
        image: instrument2,
        title: newsItems?.[4]?.title || "Audience",
        buttonText: newsItems?.[4]?.buttonText || "Join Event",
      },
    ],
    [newsItems]
  );

  const createInfiniteSlides = () => {
    const slides = [];

    for (let i = 0; i < 20; i++) {
      const originalIndex = i % slidesData.length;
      const originalSlide = slidesData[originalIndex];

      slides.push({
        ...originalSlide,
        id: i + 1,
      });
    }

    return slides;
  };

  const [slides, setSlides] = useState(createInfiniteSlides());
  const [activeSlideIndex, setActiveSlideIndex] = useState(10);


  const loadMoreSlides = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    try {

      await new Promise(resolve => setTimeout(resolve, 300));


      const newSlides = [];
      const currentLength = slides.length;


      for (let i = 0; i < 10; i++) {
        const globalIndex = currentLength + i;
        const originalIndex = globalIndex % slidesData.length;
        const originalSlide = slidesData[originalIndex];

        newSlides.push({
          ...originalSlide,
          id: globalIndex + 1,
        });
      }

      setSlides(prev => [...prev, ...newSlides]);


      if (swiperInstance) {
        swiperInstance.update();
        swiperInstance.virtual.update();
      }


      if (slides.length + newSlides.length >= 50) {
        setHasMore(false);
      }

    } catch (error) {
      console.error("Ошибка при загрузке слайдов:", error);
    } finally {
      setIsLoading(false);
    }
  }, [slides.length, isLoading, hasMore, swiperInstance, slidesData]);


  const handleSlideChange = useCallback((swiper) => {
    const realIndex = swiper.activeIndex;
    setActiveSlideIndex(realIndex);


    if (realIndex >= slides.length - 6 && hasMore && !isLoading) {
      loadMoreSlides();
    }
  }, [slides.length, hasMore, isLoading, loadMoreSlides]);


  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      swiperInstance.on("slideChange", handleSlideChange);

      return () => {
        if (swiperInstance) {
          swiperInstance.off("slideChange", handleSlideChange);
        }
      };
    }
  }, [swiperInstance, handleSlideChange]);

  return (
    <section id='news'>
      <div className="bg-background container mx-auto px-4">
        <h2 className="uppercase font-serif text-2xl md:text-4xl font-bold mb-4 text-text-primary text-center italic">
          {newsTitle}
        </h2>
        <div className="relative">
          <div className="">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={40}
              initialSlide={10}
              onSwiper={setSwiperInstance}
              modules={[EffectCoverflow, Navigation, Virtual]}
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
                  coverflowEffect: {
                    depth: 50,
                  }
                },
                768: {
                  spaceBetween: 30,
                },
                1024: {
                  spaceBetween: 40,
                },
              }}
              virtual={{
                enabled: true,
                addSlidesBefore: 2,
                addSlidesAfter: 2,
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={slide.id}
                  virtualIndex={index}
                  className="!h-72 md:!w-72 md:!h-96 lg:!w-80 lg:!h-[28rem]"
                >
                  <div
                    className={`relative w-full h-full rounded-xl overflow-hidden shadow-xl transition-all duration-500 ${index === activeSlideIndex ? "scale-100" : "scale-95"
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
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/news/${slide.slug ?? slide.id}`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(`/news/${slide.slug ?? slide.id}`);
                      }
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${index === activeSlideIndex ? "filter-none" : "grayscale"
                        }`}
                      loading="lazy"
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
                          <ButtonPrimary onClick={() => navigate(`/news/${slide.slug ?? slide.id}`)}>
                            {slide.buttonText}
                          </ButtonPrimary>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden absolute py-3 left-1/2 transform -translate-x-1/2 md:flex items-center gap-4 z-10">
            <button
              ref={prevRef}
              className="bg-transparent hover:bg-white/20 text-gray-700 h-10 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-300 px-5 md:px-4"
            >
              <FaArrowLeftLong className="w-6 h-6 md:w-14" />
            </button>
            <button
              ref={nextRef}
              className="bg-transparent hover:bg-white/20 text-gray-700 h-10 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-300 px-5 md:px-4"
            >
              <FaArrowRightLong className="w-6 h-6 md:w-14" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
