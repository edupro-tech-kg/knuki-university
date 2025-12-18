import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Ornament from "../assets/svg/ornament.svg";
import Button from "../components/UI/Button";

const QUICK_LINKS = [
  { key: "about", link: "/about" },
  { key: "science", link: "/science" },
  { key: "ebilim", link: "/ebilim" },
  { key: "documents", link: "/documents" },
  { key: "practice", link: "/practice-career" },
];

function QuickLinks() {
  const { t } = useTranslation();

  const quickLinks = t("quickLinks", { returnObjects: true });

  return (
    <section className="bg-background py-14 w-full">
      <h2 className="text-center text-3xl md:text-4xl font-serif mb-10">{quickLinks.title}</h2>

      <div
        className="
          flex gap-4 overflow-x-auto px-4 md:px-6
          md:grid md:grid-cols-2 md:gap-4 md:overflow-visible
          lg:grid lg:grid-cols-4 lg:gap-4
          max-w-[1440px] mx-auto
        "
      >
        {QUICK_LINKS.map((item) => (
          <div
            key={item.key}
            className="
              border border-black p-6 min-w-[280px] md:min-w-0 md:w-full
              flex flex-col justify-between items-center text-center
              hover:shadow-lg transition-shadow duration-300 bg-white
              h-[400px] md:h-[380px] lg:h-[432px]
              md:justify-self-center
            "
          >
            <div className="flex justify-between w-full mt-[-12px]">
              <img src={Ornament} alt="" className="w-14 h-14 md:w-16 md:h-16 -ml-4" />
              <img src={Ornament} alt="" className="w-14 h-14 md:w-16 md:h-16 rotate-90 -mr-4" />
            </div>

            <p className="text-lg font-semibold text-[#751715] min-h-[70px] flex items-center justify-center px-2">
              {quickLinks.cards?.[item.key] || item.key}
            </p>

            {item.link ? (
              <Link to={item.link} className="w-full flex justify-center">
                <Button
                  variant="secondary"
                  className="mt-6 w-full max-w-[200px] md:max-w-[240px] hover:bg-[#751715] active:scale-95 rounded-[90px]"
                >
                  {quickLinks.button}
                </Button>
              </Link>
            ) : (
              <Button
                variant="secondary"
                className="mt-6 w-full max-w-[200px] md:max-w-[240px] hover:bg-[#751715] active:scale-95 rounded-[90px]"
              >
                {quickLinks.button}
              </Button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickLinks;
