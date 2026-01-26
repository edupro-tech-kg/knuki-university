import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Ornament from "../assets/svg/ornament.svg";
import Button from "../components/UI/Button";

const QUICK_LINKS = [
  { key: "practic", link: "/practice-career" },
  { key: "council", link: "/council" },
  { key: "okuuBolumu", link: "/okuu-bolumu" },
  { key: "literature", link: "/literature" },
  { key: "qualification", link: "/qualification" },
  { key: "department", link: "/HRdepartment" },
  { key: "library", link: "/library" },
  { key: "profsouz", link: "/profsouz" },
  { key: "accounting", link: "/accounting" },
  { key: "ebilim", link: "/ebilim" },
];
function QuickLinks() {
  const { t } = useTranslation();

  const quickLinks = t("quickLinks", { returnObjects: true });

  return (
    <section className="bg-background py-14 w-full">
      <h2 className="uppercase font-serif text-2xl md:text-4xl font-bold mb-4 text-text-primary text-center italic">
        {quickLinks.title}
      </h2>
      <div
        className="
          flex gap-3 pl-4 pr-4 md:px-6 md:gap-4
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory
          scroll-pl-6
          md:grid md:grid-cols-4
          lg:grid-cols-5
          max-w-[1440px] mx-auto
        "
      >
        {QUICK_LINKS.map((item) => (
          <div
            key={item.key}
            className="
              border border-text-secondary p-4 w-[248px] md:w-full
              flex flex-col justify-between items-center text-center
              duration-300 bg-white
              h-64
              flex-none snap-start
              md:min-w-0 md:flex-auto
            "
          >
            <div className="flex justify-between w-full -mt-6">
              <img src={Ornament} alt="" className="w-20 h-20 md:w-22 md:h-22 -ml-6" />
              <img src={Ornament} alt="" className="w-20 h-20 md:w-22 md:h-22 rotate-90 -mr-6" />
            </div>

            <p className="uppercase text-xl font-bold text-button-primary flex items-center justify-center px-1 w-64 mb-1">
              {quickLinks.cards?.[item.key] || item.key}
            </p>

            {item.link ? (
              <Link to={item.link} className="w-full flex justify-center">
                <Button variant="primaryIcon" className="!border-text-primary !text-text-primary">
                  {quickLinks.button}
                </Button>
              </Link>
            ) : (
              <Button variant="primaryIcon" className="!border-text-primary !text-text-primary">
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
