import { useTranslation } from "react-i18next";
import { Fragment } from "react";

export default function LastNews() {
  const { t } = useTranslation();
  const calendar = t("calendar");
  const lastNews = calendar.lastNews;

  return (
    <div className="font-sans text-[#1f1f1f]">
      <h2 className="mb-5 font-semibold text-lg sm:text-xl lg:text-2xl">
        {lastNews.title}
      </h2>
      <div className="flex flex-col pr-10">
        {lastNews.newsData?.map((item, index) => (
          <Fragment key={index}>
            <div className="px-3 pb-[10px] pt-2   border-b border-[#EEEEEE]">
              <h3 className="font-medium mb-1 text-sm sm:text-base lg:text-lg">{item.desc}</h3>
              <p className="text-[#898989] font-normal text-xs sm:text-sm lg:text-base">
                {item.date}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
