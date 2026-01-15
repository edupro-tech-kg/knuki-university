import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function formatIsoDate(isoDate, language) {
  if (!isoDate) return "";
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(language, { year: "numeric", month: "long", day: "numeric" }).format(date);
}

export default function LastNews({ items: overrideItems, selectedDate, onClearFilter }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const calendar = t("calendar");
  const lastNews = calendar.lastNews;
  const newsItems = t("news.items", { returnObjects: true }) || [];

  const items = overrideItems ?? newsItems;

  const normalized = useMemo(() => {
    const list = (Array.isArray(items) ? items : [])
      .map((it, idx) => ({
        id: it?.id ?? idx + 1,
        title: it?.title ?? it?.desc ?? "",
        date: it?.date ?? "",
      }))
      .filter((it) => it.title);

    list.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    return list;
  }, [items]);

  const filtered = selectedDate
    ? normalized.filter((it) => it.date === selectedDate)
    : normalized;

  return (
    <div className="font-sans text-[#1f1f1f]">
      <div className="flex items-center justify-between gap-4 mb-5">
        <h2 className="font-semibold text-lg sm:text-xl lg:text-2xl">{lastNews.title}</h2>
        {selectedDate ? (
          <button
            type="button"
            className="text-sm font-medium text-[#751715] hover:underline"
            onClick={onClearFilter}
          >
            {t("calendar.lastNews.clearFilter", { defaultValue: "Show all" })}
          </button>
        ) : null}
      </div>

      <div className="flex flex-col pr-2 sm:pr-6">
        {filtered.length ? (
          filtered.slice(0, 8).map((item) => (
            <button
              key={String(item.id)}
              type="button"
              className="px-3 pb-[10px] pt-2 border-b border-[#EEEEEE] text-left hover:bg-[#fafafa] transition"
              onClick={() => navigate(`/news/${item.id}`)}
            >
              <h3 className="font-medium mb-1 text-sm sm:text-base lg:text-lg">{item.title}</h3>
              <p className="text-[#898989] font-normal text-xs sm:text-sm lg:text-base">
                {formatIsoDate(item.date, t("locale")) || item.date}
              </p>
            </button>
          ))
        ) : (
          <div className="px-3 py-6 text-sm text-gray-500">
            {t("calendar.lastNews.empty", { defaultValue: "No news for the selected day." })}
          </div>
        )}
      </div>
    </div>
  );
}
