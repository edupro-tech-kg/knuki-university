import { useState } from "react";
import Calendar from "../components/Calendar";
import LastNews from "../components/LastNews";

export default function CalendarEvents() {
  const [mobileView, setMobileView] = useState("calendar"); // calendar | news

  return (
    <section className="bg-primary font-serif pb-24 pt-12 md:pt-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex justify-center">
          <p className="italic font-serif font-medium text-white mb-14 sm:mb-20 text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl">
            КАЛЕНДАРЬ СОБЫТИЙ
          </p>
        </div>

        <div className="relative mt-1 md:mt-4 lg:mt-2">
          <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[6px] bg-white/80 rotate-[1deg] shadow-[0_18px_55px_rgba(0,0,0,0.22)]" />

          <div className="relative bg-white rounded-[6px] shadow-[0_18px_55px_rgba(0,0,0,0.2)] border border-[#e6e6e6] overflow-hidden flex flex-col lg:flex-row">
            <div className="hidden lg:block lg:w-[55%] px-4 sm:px-10 lg:px-12 py-8 lg:py-12 border-b lg:border-b-0 lg:border-r border-[#e6e6e6]">
              <Calendar />
            </div>
            <div className="hidden lg:block lg:w-[45%] px-6 sm:px-10 lg:px-12 py-10 lg:py-12">
              <LastNews />
            </div>

            {/* Mobile carousel-like toggle: calendar <-> news */}
            <div className="lg:hidden w-full px-2 sm:px-4 pb-8 pt-2">
              {mobileView === "calendar" ? (
                <div className="rounded-lg border border-[#e6e6e6] bg-white shadow-sm">
                  <div className="px-2 sm:px-3 py-4">
                    <Calendar />
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border border-[#e6e6e6] bg-white shadow-sm">
                  <div className="px-3 py-4">
                    <LastNews />
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  onClick={() => setMobileView("calendar")}
                  className={`h-12 w-12 rounded-full border ${
                    mobileView === "calendar"
                      ? "border-[#b02929] text-[#b02929]"
                      : "border-[#d1d1d1] text-[#444]"
                  } flex items-center justify-center bg-white hover:bg-[#f8f8f8]`}
                  aria-label="Показать календарь"
                >
                  ←
                </button>
                <button
                  onClick={() => setMobileView("news")}
                  className={`h-12 w-12 rounded-full border ${
                    mobileView === "news"
                      ? "border-[#b02929] text-[#b02929]"
                      : "border-[#d1d1d1] text-[#444]"
                  } flex items-center justify-center bg-white hover:bg-[#f8f8f8]`}
                  aria-label="Показать события"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
