import Calendar from "../components/Calendar";
import { useTranslation } from "react-i18next";
import patterns from "../assets/svg/patterns.svg";
import LastNews from "../components/LastNews";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function CalendarEvents() {
  const { t } = useTranslation();
  const calendar = t("calendar");

  const [showNews, setShowNews] = useState(false);

  return (
    <section className="min-h-screen font-serif">
      <img src={patterns} alt="patterns" className="w-full" />

      <div className="bg-primary py-24">
        <div className="flex justify-center">
          <p className="italic font-serif font-medium 2xl:text-6xl xl:text-5xl md:text-4xl text-white mb-24 text-2xl">
            КАЛЕНДАРЬ СОБЫТИЙ
          </p>
        </div>

        <div
          className={`
            relative px-5 md:px-10 pb-20 min-h-screen pt-10 overflow-hidden bg-no-repeat
            
            /* Desktop: полная книга */
            md:bg-[url('/src/assets/images/lastFone.png')]
            md:bg-[length:95%_100%]
            md:bg-top
            
            /* Mobile: половина книги сдвигается */
            bg-[url('/src/assets/images/lastFone.png')]
            bg-[length:200%_100%]
            ${showNews ? "bg-right" : "bg-left"}
          `}
        >
          {showNews && (
            <button
              onClick={() => setShowNews(false)}
              className="absolute top-4 left-4 z-20 bg-white shadow rounded-full p-3 md:p-4 hover:bg-gray-100 transition"
            >
              <FaArrowLeft className="text-lg" />
            </button>
          )}

          {!showNews && (
            <button
              onClick={() => setShowNews(true)}
              className="absolute top-4 right-4 z-20 bg-white shadow rounded-full p-3 md:p-4 hover:bg-gray-100 transition"
            >
              <FaArrowRight className="text-lg" />
            </button>
          )}

          <div className="relative w-full">
            <AnimatePresence mode="wait">
              {!showNews ? (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.35 }}
                  className="w-full md:w-[50%] pl-4 md:pl-24 pr-4"
                >
                  <Calendar />
                </motion.div>
              ) : (
                <motion.div
                  key="news"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                  className="w-full md:w-[50%] pl-4 md:pl-16 pr-4 md:pr-20"
                >
                  <LastNews />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
