import { useTranslation } from "react-i18next";

export default function LastNews() {
  const { t } = useTranslation();
  const calendar = t("calendar");
  const lastNews = calendar.lastNews;

  return (
    <div>
      <h2 className="pl-4 text-2xl font-bold">{lastNews.title}</h2>
      <div className="flex flex-col">
        {lastNews.newsData?.map((item) => (
          <>
            <div className="px-3 pb-[10px] pt-2  border-b border-[#EEEEEE]">
              <h3 className="font-bold mb-1">{item.desc}</h3>
              <p className="text-[#898989]">{item.date}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
