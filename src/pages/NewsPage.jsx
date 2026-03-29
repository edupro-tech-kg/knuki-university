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
import accreditation1 from "../assets/images/accreditation1.jpg";
import accreditation2 from "../assets/images/accreditation2.jpg";
import accreditation3 from "../assets/images/accreditation3.jpg";
import accreditation4 from "../assets/images/accreditation4.jpg";
import accreditation5 from "../assets/images/accreditation5.jpg";
import accreditation6 from "../assets/images/accreditation6.jpg";
import accreditation7 from "../assets/images/accreditation7.jpg";
import accreditation8 from "../assets/images/accreditation8.jpg";
import accreditation9 from "../assets/images/accreditation9.jpg";
import accreditation10 from "../assets/images/accreditation10.jpg";
import accreditation11 from "../assets/images/accreditation11.jpg";
import accreditation12 from "../assets/images/accreditation12.jpg";
import accreditation13 from "../assets/images/accreditation13.jpg";
import meeting1 from "../assets/images/meeting1.jpg";
import meeting2 from "../assets/images/meeting2.jpg";
import meeting3 from "../assets/images/meeting3.jpg";
import meeting4 from "../assets/images/meeting4.jpg";
import meeting5 from "../assets/images/meeting5.jpg";
import meeting6 from "../assets/images/meeting6.jpg";
import meeting7 from "../assets/images/meeting7.jpg";
import meeting8 from "../assets/images/meeting8.jpg";
import myktyRegisser from "../assets/images/news/mykty-regisser.jpg";
import myktyRegisser1 from "../assets/images/news/mykty-regisser_1.jpg";
import myktyRegisser2 from "../assets/images/news/mykty-regisser_2.jpg";
import myktyRegisser3 from "../assets/images/news/mykty-regisser_3.jpg";
import knukiAlatoo from "../assets/images/news/knuki-alatoo.jpg";
import knukiAlatoo1 from "../assets/images/news/knuki-alatoo_1.jpg";
import knukiAlatoo2 from "../assets/images/news/knuki-alatoo_2.jpg";
import knukiAlatoo3 from "../assets/images/news/knuki-alatoo_3.jpg";
import knukiAlatoo4 from "../assets/images/news/knuki-alatoo_4.jpg";
import subbotnik from "../assets/images/news/subbotnik.jpg";
import subbotnik1 from "../assets/images/news/subbotnik_1.jpg";
import subbotnik2 from "../assets/images/news/subbotnik_2.jpg";
import subbotnik3 from "../assets/images/news/subbotnik_3.jpg";
import subbotnik4 from "../assets/images/news/subbotnik_4.jpg";
import uluttukDem from "../assets/images/news/uluttuk-dem.jpg";
import uluttukDem1 from "../assets/images/news/uluttuk-dem_1.jpg";
import uluttukDem2 from "../assets/images/news/uluttuk-dem_2.jpg";
import uluttukDem3 from "../assets/images/news/uluttuk-dem_3.jpg";
import uluttukDem4 from "../assets/images/news/uluttuk-dem_4.jpg";
import nooruz from "../assets/images/news/nooruz.jpg";
import nooruz1 from "../assets/images/news/nooruz_1.jpg";
import nooruz2 from "../assets/images/news/nooruz_2.jpg";
import nooruz3 from "../assets/images/news/nooruz_3.jpg";
import nooruz4 from "../assets/images/news/nooruz_4.jpg";
import uzbekRel from "../assets/images/news/uzbek-rel.jpg";
import uzbekRel1 from "../assets/images/news/uzbek-rel_1.jpg";
import uzbekRel2 from "../assets/images/news/uzbek-rel_2.jpg";
import uzbekRel3 from "../assets/images/news/uzbek-rel_3.jpg";
import uzbekRel4 from "../assets/images/news/uzbek-rel_4.jpg";

export default function NewsPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const newsItems = t("news.items", { returnObjects: true }) || [];
  const newsPage = t("newsPage", { returnObjects: true }) || {};

  const NEWS_IMAGES = {
    "knuki-alatoo": [knukiAlatoo, knukiAlatoo1, knukiAlatoo2, knukiAlatoo3, knukiAlatoo4],
    subbotnik: [subbotnik, subbotnik1, subbotnik2, subbotnik3, subbotnik4],
    "mykty-regisser": [myktyRegisser, myktyRegisser1, myktyRegisser2, myktyRegisser3],
    "uluttuk-dem": [uluttukDem, uluttukDem1, uluttukDem2, uluttukDem3, uluttukDem4],
    nooruz: [nooruz, nooruz1, nooruz2, nooruz3, nooruz4],
    "uzbek-rel": [uzbekRel, uzbekRel1, uzbekRel2, uzbekRel3, uzbekRel4],
    makam: [makam],
    students: [grand1, grand2],
    gym: [newGym, newGym1, newGym2, newGym3, newGym4],
    building: [construction1, construction2],
    instruments: [instrument1, instrument2, instrument3],
    accreditation: [
      accreditation1,
      accreditation2,
      accreditation3,
      accreditation4,
      accreditation5,
      accreditation6,
      accreditation7,
      accreditation8,
      accreditation9,
      accreditation10,
      accreditation11,
      accreditation12,
      accreditation13,
    ],
  };
  const idNum = parseInt(id, 10);

  let pageData = null;

  if (!isNaN(idNum) && newsItems.length > 0) {
    const idx = (((idNum - 1) % newsItems.length) + newsItems.length) % newsItems.length;
    const item = newsItems[idx] || {};
    const key = item.id;

    pageData =
      (key && newsPage[key]) || (Array.isArray(newsPage.news) && newsPage.news[idx]) || item;
  } else {
    pageData =
      newsPage[id] ||
      (Array.isArray(newsPage.news) && newsPage.news.find((n) => n.id === id)) ||
      null;

    if (!pageData && Array.isArray(newsItems)) {
      const idx = newsItems.findIndex((it) => String(it.id) === String(id));
      if (idx !== -1 && Array.isArray(newsPage.news) && newsPage.news[idx]) {
        pageData = newsPage.news[idx];
      }
    }
  }

  const title = pageData?.title || "";
  const content = pageData?.content || pageData?.text || [];
  const fromPageImages = Array.isArray(pageData?.images) ? pageData.images : [];
  const mappedImages = NEWS_IMAGES[pageData?.id] || [];
  const fallbackImages = Object.values(NEWS_IMAGES).flat();
  const images =
    (fromPageImages.length && fromPageImages) ||
    (mappedImages.length && mappedImages) ||
    fallbackImages;
  const paragraphs = Array.isArray(content) ? content : content ? [content] : [];

  return (
    <section className="container-edge mx-auto px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h1>
        <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
          {images.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={12}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3600 }}
              loop={images.length > 1}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[260px] md:h-[360px] lg:h-[440px] overflow-hidden bg-gray-100">
                    <img
                      src={img}
                      alt={title || `News image ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="relative w-full h-[260px] md:h-[360px] lg:h-[440px] overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 text-gray-500 text-sm flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                {t("news.title")}
              </div>
            </div>
          )}
          {title ? (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent px-6 py-4">
              <h1 className="text-xl md:text-3xl font-bold text-white drop-shadow">{title}</h1>
            </div>
          ) : null}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-5">
            {paragraphs.length > 0 ? (
              paragraphs.map((para, idx) => (
                <p
                  style={{ whiteSpace: "pre-line" }}
                  key={idx}
                  className="text-base md:text-lg leading-7 text-gray-800"
                >
                  {para}
                </p>
              ))
            ) : (
              <p className="text-base text-gray-500">{t("news.title")}</p>
            )}
          </article>

          {images.length > 1 && (
            <aside className="lg:sticky lg:top-24 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-5">
                <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                  {t("news.title")}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-full overflow-hidden rounded-xl border border-gray-100"
                    >
                      <img
                        src={img}
                        alt={`${title} ${idx + 1}`}
                        className="w-full h-24 md:h-28 object-cover transition duration-200 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
