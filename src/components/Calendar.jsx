/* eslint-disable no-unused-vars */
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import ruLocale from "@fullcalendar/core/locales/ru";
import kyLocale from "../locales/ky.js";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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

  return (
    <div className="flex flex-col font-sans text-[#1f1f1f]">
      <div className="flex justify-center mb-4 md:mb-6">
        <h2 className="text-[#a12626] italic font-serif font-semibold text-xl md:text-2xl 2xl:text-[26px]">
          {currentTitle}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 mb-5">
        <div className="flex items-center gap-3">
          <button
            className="h-10 w-10 flex items-center justify-center rounded-md border border-[#d1d1d1] bg-white hover:bg-[#f5f5f5]"
            onClick={() => calendarRef.current.getApi().prev()}
          >
            ‹
          </button>
          <button
            className="h-10 w-10 flex items-center justify-center rounded-md border border-[#d1d1d1] bg-white hover:bg-[#f5f5f5]"
            onClick={() => calendarRef.current.getApi().next()}
          >
            ›
          </button>
          <button
            onClick={() => calendarRef.current.getApi().today()}
            className="px-4 h-10 rounded-md border border-[#d1d1d1] bg-white hover:bg-[#f5f5f5] text-sm font-medium"
          >
            {calendar.buttonText.today}
          </button>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {[
            { view: "timeGridDay", label: calendar.buttonText.day },
            { view: "timeGridWeek", label: calendar.buttonText.week },
            { view: "dayGridMonth", label: calendar.buttonText.month },
            { view: "listDay", label: calendar.buttonText.list },
          ].map(({ view, label }) => {
            const isActive = activeView === view;
            return (
              <button
                key={view}
                onClick={() => changeView(view)}
                className={`px-4 h-10 rounded-md text-sm font-medium border ${
                  isActive
                    ? "bg-[#b02929] border-[#b02929] text-white"
                    : "bg-white border-[#d1d1d1] text-[#1f1f1f] hover:bg-[#f5f5f5]"
                }`}
              >
                {label}
              </button>
            );
          })}
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
        firstDay={1}
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
