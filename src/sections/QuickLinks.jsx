import React from "react";
import { useTranslation } from "react-i18next";

import Ornament from "../assets/svg/ornament.svg";
import Button from "../components/Button";

function QuickLinks() {
  const { t } = useTranslation();

  const quickLinks = t("quickLinks", { returnObjects: true });

  return (
    <section className="py-14 w-full">
      <h2 className="text-center text-3xl md:text-4xl font-serif mb-10">{quickLinks.title}</h2>

      <div
        className="
          flex gap-6 overflow-x-auto px-4 md:px-0
          md:grid md:grid-cols-2 md:gap-6 md:overflow-visible
          lg:grid lg:grid-cols-4 lg:gap-8
          max-w-[1440px] mx-auto md:max-w-3xl lg:max-w-[1440px]
        "
      >
        {quickLinks.cards.map((item) => (
          <div
            key={item.id}
            className="
              border border-black p-6 w-64 md:w-[280px] lg:w-[299px] h-[400px] md:h-[380px] lg:h-[432px] flex-shrink-0
              flex flex-col justify-between items-center text-center
              hover:shadow-lg transition-shadow bg-white
              md:justify-self-center
            "
          >
            <div className="flex justify-between w-full mt-[-12px]">
              <img src={Ornament} alt="" className="w-16 h-16 -ml-4" />
              <img src={Ornament} alt="" className="w-16 h-16 rotate-90 -mr-4" />
            </div>

            <p className="text-lg font-semibold text-[#751715] min-h-[70px] flex items-center justify-center">
              {item.title}
            </p>

            <Button
              variant="outline"
              className="mt-6 w-full bg-white !text-black !border-black hover:bg-[#751715] hover:!text-white transition-colors"
            >
              {quickLinks.button}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickLinks;
