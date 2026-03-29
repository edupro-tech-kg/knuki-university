import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import makam from "../assets/images/makam.jpg";
import grand1 from "../assets/images/grand1.jpg";
import construction1 from "../assets/images/construction1.jpg";
import instrument2 from "../assets/images/instrument2.jpg";
import newGym from "../assets/images/newGym.jpg";
import accreditation from "../assets/images/accreditation1.jpg";
import myktyRegisser from "../assets/images/news/mykty-regisser.jpg";
import knukiAlatoo from "../assets/images/news/knuki-alatoo.jpg";
import subbotnik from "../assets/images/news/subbotnik.jpg";
import uluttukDem from "../assets/images/news/uluttuk-dem.jpg";
import nooruz from "../assets/images/news/nooruz.jpg";
import uzbekRel from "../assets/images/news/uzbek-rel.jpg";

const IMAGE_MAP = {
  "knuki-alatoo": knukiAlatoo,
  subbotnik,
  "mykty-regisser": myktyRegisser,
  "uluttuk-dem": uluttukDem,
  nooruz,
  "uzbek-rel": uzbekRel,
  makam,
  students: grand1,
  building: construction1,
  instruments: instrument2,
  gym: newGym,
  accreditation: accreditation,
};

export default function NewsList() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const items = t("news.items", { returnObjects: true }) || [];

  const prioritizedItems = useMemo(() => {
    const itemsList = Array.isArray(items) ? [...items] : [];
    return itemsList.sort((left, right) => {
      // Prioritize uzbek-rel news to be first (latest)
      if (left?.id === "uzbek-rel") return -1;
      if (right?.id === "uzbek-rel") return 1;

      // Then prioritize nooruz news to be second
      if (left?.id === "nooruz") return -1;
      if (right?.id === "nooruz") return 1;

      // Then sort by date
      const leftTime = left?.date ? new Date(left.date).getTime() : 0;
      const rightTime = right?.date ? new Date(right.date).getTime() : 0;
      return rightTime - leftTime;
    });
  }, [items]);

  const cards = useMemo(
    () =>
      prioritizedItems.map((item, idx) => {
        const slug = item?.id ?? idx + 1;
        const mapped = item?.id && IMAGE_MAP[item.id];
        const fallback = Object.values(IMAGE_MAP)[idx % Object.values(IMAGE_MAP).length];
        return {
          id: slug,
          title: item?.title || t("news.title"),
          image: mapped || fallback,
          buttonText: item?.buttonText || t("news.readMore", { defaultValue: t("news.title") }),
        };
      }),
    [prioritizedItems, t]
  );

  return (
    <section className="container-edge mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="uppercase font-serif text-xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-primary italic text-center">
            {t("news.pageHeading", { defaultValue: t("news.title") })}
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col cursor-pointer transition hover:-translate-y-1 hover:shadow-lg"
              onClick={() => navigate(`/news/${card.id}`)}
            >
              <div className="relative w-full h-52 overflow-hidden bg-gray-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {card.title}
                </h3>
                <button
                  type="button"
                  className="mt-auto inline-flex items-center justify-start text-[#751715] font-semibold"
                >
                  {card.buttonText || t("news.readMore", { defaultValue: t("news.title") })} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
