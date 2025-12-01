import { useTranslation } from "react-i18next";
import { Fragment } from "react";

export default function LastNews() {
  const { t } = useTranslation();
  const calendar = t("calendar");
  const lastNews = calendar.lastNews;

  return (
    <div className="font-sans">
      <h2 className="pl-3 mb-5  font-normal text-sm 2xl:text-[28px] lg:text-xl sm:text-lg ">
        {lastNews.title}
      </h2>
      <div className="flex flex-col pr-10">
        {lastNews.newsData?.map((item, index) => (
          <Fragment key={index}>
            <div className="px-3 pb-[10px] pt-2   border-b border-[#EEEEEE]">
              <h3 className="font-medium  mb-1  2xl:text-lg lg:text-sm">{item.desc}</h3>
              <p className="text-[#898989]  font-normal 2xl:text-base lg:text-xs ">{item.date}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
