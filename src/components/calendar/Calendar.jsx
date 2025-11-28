import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./calendar.css";
import { useTranslation } from "react-i18next";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import ruLocale from "@fullcalendar/core/locales/ru";
import kyLocale from "../../data/locales/ky";
import prev from "../../assets/prev.svg";
import next from "../../assets/next.svg";
import { useRef, useState } from "react";
import IconWeek from "../../assets/svg/btWeek.svg";
import IconDay from "../../assets/svg/btnDay.svg";
import IconMonth from "../../assets/svg/btnMonth.svg";
import IconAgendas from "../../assets/svg/btnAgendas.svg";

export default function Calendar() {
  const { t } = useTranslation();
  const calendarRef = useRef(null);
  const [currentTitle, setCurrentTile] = useState("");
  const calendar = t("calendar");
  const locale = t("locale");

  const dayNamesMap = {
    ky: calendar.days.dayNamesShort,
    ru: calendar.days.dayNamesShort,
    en: calendar.days.dayNamesShort,
  };

  const btnclass = "py-[10px] px-[15px]  border rounded-md    flex items-center hover: ";
  const iconClass = "px-[2.64px] mr-[2.64px]";

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mr-4 mb-6">
        <h2 className="text-2xl italic font-bold font-mono">{currentTitle}</h2>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 max-w-52 w-full justify-between">
          <div className="flex items-center">
            <button className="px-[22px] py-4" onClick={() => calendarRef.current?.getApi().prev()}>
              <img src={prev} alt="" />
            </button>
            <button className="px-[22px] py-4" onClick={() => calendarRef.current?.getApi().next()}>
              <img src={next} alt="" />
            </button>
          </div>
          <button onClick={() => calendarRef.current?.getApi().today()} className={btnclass}>
            {calendar.buttonText.today}
          </button>
        </div>

        <div className="flex items-center gap-[6px]">
          <button
            className={`${btnclass}`}
            onClick={() => calendarRef.current?.getApi().changeView("timeGridDay")}
          >
            <img src={IconDay} alt="" className={iconClass} />

            {calendar.buttonText.day}
          </button>
          <button
            className={btnclass}
            onClick={() => calendarRef.current?.getApi().changeView("timeGridWeek")}
          >
            <img src={IconWeek} alt="" className={iconClass} />

            {calendar.buttonText.week}
          </button>
          <button
            className={btnclass}
            onClick={() => calendarRef.current?.getApi().changeView("dayGridMonth")}
          >
            <img src={IconMonth} alt="" className={iconClass} />
            {calendar.buttonText.month}
          </button>

          <button
            className={btnclass}
            onClick={() => calendarRef.current?.getApi().changeView("listDay")}
          >
            <img src={IconAgendas} alt="" className={iconClass} />

            {calendar.buttonText.list}
          </button>
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={calendar.events}
        ref={calendarRef}
        headerToolbar={false}
        locales={[ruLocale, kyLocale]}
        datesSet={(info) => {
          setCurrentTile(info.view.title);
        }}
        dayHeaderContent={(args) => {
          const lang = locale;
          const index = args.date.getDay();

          const arr = dayNamesMap[lang];
          console.log(arr);

          const correctedIndex = index === 0 ? 6 : index - 1;
          return arr[correctedIndex];
        }}
        locale={locale}
        eventContent={(arg) => (
          <div className="event-pill">
            <p className="event-text">{arg.event.title}</p>
          </div>
        )}
      />
    </div>
  );
}
