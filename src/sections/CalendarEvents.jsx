import Calendar from "../components/calendar/Calendar";
import { useTranslation } from "react-i18next";
import patterns from "../assets/patterns.svg";
import LastNews from "../components/LastNews";

export default function CalendarEvents() {
  const { t } = useTranslation();
  const calendar = t("calendar");
  console.log(calendar);

  return (
    <>
      <section className="min-h-screen font-serif">
        <div>
          <img src={patterns} alt="patterns" className="w-full" />
        </div>
        <div className="bg-primary py-24  ">
          <div className="flex justify-center ">
            <p className=" italic font-serif font-medium 2xl:text-6xl xl:text-5xl md:text-4xl text-white mb-24 text-2xl">
              КАЛЕНДАРЬ СОБЫТИЙ
            </p>
          </div>

          <div
            className={` flex justify-between px-10   ter pb-20 relative z-10 w-full  h-full bg-no-repeat bg-top    pt-[84px]  min-h-screen 2xl:bg-[length:95%_90%]  xl:bg-[length:95%_70%] `}
            style={{ backgroundImage: "url('/src/assets/image/lastFone.png')" }}
          >
            <div className=" w-[50%] pr-[55px] pl-[100px]">
              <Calendar />
            </div>
            <div className="w-[50%] pl-16 pr-20 pt-3">
              <LastNews />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
