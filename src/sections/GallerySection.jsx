import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

import gallery from "../assets/images/gallery.png";
import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/gallery4.png";
import gallery5 from "../assets/images/gallery5.png";
import gallery6 from "../assets/images/gallery6.png";
import gallery7 from "../assets/images/gallery7.png";
import gallery8 from "../assets/images/gallery8.png";
import gallery9 from "../assets/images/gallery9.png";
import gallery10 from "../assets/images/gallery10.png";
import gallery11 from "../assets/images/gallery11.png";
import gallery12 from "../assets/images/gallery12.png";
import gallery13 from "../assets/images/gallery13.jpg";
import gallery14 from "../assets/images/gallery14.jpg";
import gallery15 from "../assets/images/gallery15.jpg";
import gallery16 from "../assets/images/gallery16.jpg";
import gallery17 from "../assets/images/gallery17.jpg";
import gallery18 from "../assets/images/gallery18.jpg";
import gallery19 from "../assets/images/gallery19.jpg";
import gallery20 from "../assets/images/gallery20.jpg";
import gallery21 from "../assets/images/gallery21.jpg";
import gallery22 from "../assets/images/gallery22.jpg";
import gallery23 from "../assets/images/gallery23.jpg";
import gallery24 from "../assets/images/gallery24.jpg";
import gallery25 from "../assets/images/gallery25.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
];
const row1Images = images.slice(0, 9);
const row2Images = images.slice(9, 17);
const row3Images = images.slice(17);

const Row = ({ images, reverse }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Swiper
      modules={prefersReducedMotion ? [] : [Autoplay]}
      loop={true}
      spaceBetween={0}
      slidesPerView={5}
      speed={5000}
      autoplay={
        prefersReducedMotion
          ? false
          : {
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: reverse,
            }
      }
      breakpoints={{
        320: { slidesPerView: 2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt=""
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function GallerySection() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-background relative flex items-center w-full">
        <img className="h-16 w-auto md:h-24 lg:h-28" src={gallery} alt="" decoding="async" />
        <h2 className="absolute left-1/2 -translate-x-1/2 uppercase font-serif text-2xl md:text-4xl font-bold text-text-primary text-center italic">
          {t("gallery.eyebrow")}
        </h2>
      </div>

      <div style={{ width: "100%", overflow: "hidden" }}>
        <Row images={row1Images} reverse={false} />
        <Row images={row2Images} reverse={true} />
        <Row images={row3Images} reverse={false} />
      </div>
    </div>
  );
}
