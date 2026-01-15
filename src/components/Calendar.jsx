import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import ruLocale from "../locales/ru.js";
import enLocale from "../locales/en.js";
import kyLocale from "../locales/ky.js";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/calendar.css";
import { Tooltip } from "react-tooltip";

function toLocalDateString(date) {
  if (!date || typeof date.getFullYear !== "function") return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function Calendar({
  events: overrideEvents,
  highlightDates,
  holidays,
  selectedDate,
  onSelectDate,
  initialDate,
}) {
  const [currentTitle, setCurrentTitle] = useState("");
  const [activeView, setActiveView] = useState("dayGridMonth");
  const calendarRef = useRef();

  const { t, i18n } = useTranslation();
  const calendar = t("calendar");
  const locale = i18n.language;

  const dayNamesShort = calendar.days.dayNamesShort;
  const events = overrideEvents ?? calendar.events ?? [];
  const highlightSet =
    highlightDates instanceof Set ? highlightDates : new Set(highlightDates || []);
  const holidayList = holidays ?? calendar.holidays ?? [];
  const holidayByMonthDay = new Map();
  const holidayByDate = new Map();

  (Array.isArray(holidayList) ? holidayList : []).forEach((holiday) => {
    if (!holiday?.title) return;
    if (holiday.date) {
      holidayByDate.set(holiday.date, holiday.title);
      return;
    }
    if (holiday.monthDay) {
      holidayByMonthDay.set(holiday.monthDay, holiday.title);
    }
  });

  const changeView = (view) => {
    calendarRef.current.getApi().changeView(view);
    setActiveView(view);
  };

  return (
    <div className="flex flex-col font-sans text-[#1f1f1f] ">
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
        key={locale}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView={activeView}
        initialDate={initialDate ?? new Date()}
        events={events}
        ref={calendarRef}
        headerToolbar={false}
        locales={[ruLocale, kyLocale, enLocale]}
        locale={locale}
        firstDay={1}
        datesSet={(info) => setCurrentTitle(info.view.title)}
        dateClick={(info) => {
          if (onSelectDate) onSelectDate(info.dateStr);
        }}
        dayCellClassNames={(arg) => {
          const dateStr = toLocalDateString(arg?.date);
          const classes = [];
          if (dateStr && highlightSet.has(dateStr)) classes.push("has-news-day");
          const monthDay = dateStr ? dateStr.slice(5) : "";
          if (holidayByDate.has(dateStr) || holidayByMonthDay.has(monthDay)) {
            classes.push("has-holiday-day");
          }
          if (selectedDate && dateStr === selectedDate) classes.push("selected-day");
          return classes;
        }}
        dayCellDidMount={(arg) => {
          const dateStr = toLocalDateString(arg?.date);
          const monthDay = dateStr ? dateStr.slice(5) : "";
          const holidayTitle = holidayByDate.get(dateStr) ?? holidayByMonthDay.get(monthDay);
          if (holidayTitle) {
            arg.el.setAttribute("title", holidayTitle);
            // Add a visible label inside the day cell (month view).
            const frame = arg.el.querySelector(".fc-daygrid-day-frame");
            if (frame) {
              const existing = frame.querySelector(".holiday-label");
              if (existing) {
                existing.textContent = holidayTitle;
              } else {
                const label = document.createElement("div");
                label.className = "holiday-label";
                label.textContent = holidayTitle;
                frame.appendChild(label);
              }
            }
          }
        }}
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
