/* eslint-disable no-unused-vars */
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import ruLocale from "@fullcalendar/core/locales/ru";
import kyLocale from "../locales/ky.js";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "../assets/svg/index.js";
import "../styles/calendar.css";
import { Tooltip } from "react-tooltip";

export default function Calendar() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [activeView, setActiveView] = useState("dayGridMonth");
  const calendarRef = useRef(null);

  const { t } = useTranslation();
  const calendar = t("calendar");
  const locale = t("locale");

  const dayNamesShort = calendar.days.dayNamesShort;

  const changeView = (view) => {
    calendarRef.current.getApi().changeView(view);
    setActiveView(view);
  };

  const btnBase = "py-[10px] px-[15px] border rounded-md flex items-center duration-150";
  const btnActive = "bg-button-primary text-white";
  const btnInactive = "text-black hover:bg-button-primary hover:text-white";
  const iconClass = "px-[2.64px] mr-[2.64px]";

  const viewButtons = [
    { view: "timeGridDay", label: calendar.buttonText.day, Icon: Icons.btnDay },
    { view: "timeGridWeek", label: calendar.buttonText.week, Icon: Icons.btnWeek },
    { view: "dayGridMonth", label: calendar.buttonText.month, Icon: Icons.btnMonth },
    { view: "listDay", label: calendar.buttonText.list, Icon: Icons.btnAgendas },
  ];

  return (
    <div className="flex flex-col font-sans">
      <div className="flex justify-center mr-4 mb-6">
        <h2 className="flex items-center text-text-accent font-serif italic font-bold 2xl:text-3xl md:text-2xl">
          {currentTitle}
        </h2>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 max-w-52 w-full justify-between">
          <div className="flex items-center">
            <button
              className="px-[22px] py-4 shrink-0 hover:bg-button-primary hover:text-white duration-150 rounded-md"
              onClick={() => calendarRef.current.getApi().prev()}
            >
              <Icons.prev />
            </button>

            <button
              className="px-[22px] py-4 shrink-0 hover:bg-button-primary hover:text-white duration-150 rounded-md"
              onClick={() => calendarRef.current.getApi().next()}
            >
              <Icons.next />
            </button>
          </div>

          <button
            onClick={() => calendarRef.current.getApi().today()}
            className={`${btnBase} ${btnInactive}`}
          >
            {calendar.buttonText.today}
          </button>
        </div>

        <div className="flex items-center gap-[6px]">
          {viewButtons.map(({ view, label, Icon }) => (
            <button
              key={view}
              onClick={() => changeView(view)}
              className={`${btnBase} ${activeView === view ? btnActive : btnInactive}`}
            >
              <span className={iconClass}>
                <Icon />
              </span>
              {label}
            </button>
          ))}
        </div>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={calendar.events}
        ref={calendarRef}
        headerToolbar={false}
        locales={[ruLocale, kyLocale]}
        locale={locale}
        datesSet={(info) => setCurrentTitle(info.view.title)}
        dayHeaderContent={(args) => {
          const dayIndex = args.date.getDay();
          return dayNamesShort[dayIndex === 0 ? 6 : dayIndex - 1];
        }}
        eventContent={(arg) => (
          <div className="event-pill">
            <p className="event-text" data-tooltip-id={arg.event.id}>
              {arg.event.title}
            </p>
            {arg.event.title.length > 13 && (
              <Tooltip clickable content={arg.event.title} place="top" id={arg.event.id} />
            )}
          </div>
        )}
      />
    </div>
  );
}
