import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
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
];

const Row = ({ reverse }) => (
  <Swiper
    modules={[Autoplay]}
    loop={true}
    spaceBetween={0}
    slidesPerView={5}
    speed={5000}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: reverse,
    }}
    style={{
      padding: 0,
      margin: 0,
    }}
    breakpoints={{
      320: { slidesPerView: 2 },
      480: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
    }}
  >
    {images.map((img, i) => (
      <SwiperSlide
        key={i}
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <img
          src={img}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "0px",
            display: "block",
          }}
          alt=""
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default function GallerySection() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-start gap-5 lg:gap-64 items-center">
        <img className="w-40 md:w-96" src={gallery} alt="" />
        <h2 className="uppercase mt-10 font-serif italic text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16 text-gray-800 ">{t("gallery.eyebrow")}</h2>
      </div>
      <div style={{ width: "100%", overflow: "hidden", padding: 0, margin: 0 }}>
        <Row reverse={false} />
        <div style={{ marginTop: 0 }}><Row reverse={true} /></div>
        <div style={{ marginTop: 0 }}><Row reverse={false} /></div>
      </div>
    </div>
  );
}
