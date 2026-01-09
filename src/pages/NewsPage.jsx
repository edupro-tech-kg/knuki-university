import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import makam from "../assets/images/makam.jpg";
import grand1 from "../assets/images/grand1.jpg";
import grand2 from "../assets/images/grand2.jpg";
import newGym from "../assets/images/newGym.jpg";
import newGym1 from "../assets/images/newGym1.jpg";
import newGym2 from "../assets/images/newGym2.jpg";
import newGym3 from "../assets/images/newGym3.jpg";
import newGym4 from "../assets/images/newGym4.jpg";
import construction1 from "../assets/images/construction1.jpg";
import construction2 from "../assets/images/construction2.jpg";
import instrument1 from "../assets/images/instrument1.jpg";
import instrument2 from "../assets/images/instrument2.jpg";
import instrument3 from "../assets/images/instrument3.jpg";


export default function NewsPage() {
    const { id } = useParams();
    const { t } = useTranslation();

    const newsItems = t("news.items", { returnObjects: true }) || [];
    const newsPage = t("newsPage", { returnObjects: true }) || {};

    const NEWS_IMAGES = {
        makam: [
            makam
        ],
        students: [
            grand1,
            grand2
        ],
        gym: [
            newGym,
            newGym1,
            newGym2,
            newGym3,
            newGym4
        ],
        building: [
            construction1,
            construction2
        ],
        instruments: [
            instrument1,
            instrument2,
            instrument3
        ],
    };
    const idNum = parseInt(id, 10);

    let pageData = null;

    if (!isNaN(idNum) && newsItems.length > 0) {
        const idx = ((idNum - 1) % newsItems.length + newsItems.length) % newsItems.length;
        const item = newsItems[idx] || {};
        const key = item.id;

        pageData = (key && newsPage[key]) || (Array.isArray(newsPage.news) && newsPage.news[idx]) || item;
    } else {
        pageData = newsPage[id] || (Array.isArray(newsPage.news) && newsPage.news.find((n) => n.id === id)) || null;

        if (!pageData && Array.isArray(newsItems)) {
            const idx = newsItems.findIndex((it) => String(it.id) === String(id));
            if (idx !== -1 && Array.isArray(newsPage.news) && newsPage.news[idx]) {
                pageData = newsPage.news[idx];
            }
        }
    }

    const title = pageData?.title || "";
    const content = pageData?.content || pageData?.text || [];

    return (
        <section className="container-edge mx-auto px-4 py-8">
            <h1 className="text-xl md:text-4xl font-bold mb-8 text-center">{title}</h1>
            <div className="hidden md:grid grid-flow-col mb-6">
                {NEWS_IMAGES[pageData?.id]?.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt=""
                        className="w-full max-h-96 md:max-h-80 object-cover"
                    />
                ))}
            </div>
            <div className="md:hidden mb-6">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >
                    {NEWS_IMAGES[pageData?.id]?.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={img}
                                alt=""
                                className="w-full max-h-80 object-cover rounded-md"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="text-base md:text-lg text-gray-700 leading-relaxed">
                <p>{content}</p>
            </div>
        </section>
    );
};