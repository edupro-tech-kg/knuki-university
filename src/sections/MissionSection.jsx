import React from "react";
import { useTranslation } from "react-i18next";

function MissionSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top block */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 font-medium mb-2">
            {t("about.eyebrow")}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("about.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        {/* Grid content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left block */}
          <div className="lg:col-span-2 order-1 lg:order-none">
            <div className="relative w-full h-[320px] bg-gray-200 rounded-2xl overflow-hidden mb-4">
              {/* Place for photo */}
            </div>
            <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-3">
              {t("about.badge")}
            </span>
            <div className="flex items-center gap-6 mb-4">
              {t("about.highlights", { returnObjects: true }).map((item, idx) => (
                <div key={idx}>
                  <p className="text-2xl font-bold text-blue-600">{item.value}</p>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              {t("common.more")}
            </button>
          </div>

          {/* Right block (two photos) */}
          <div className="flex flex-col gap-6 order-2 lg:order-none">
            <div className="w-full h-[150px] bg-gray-200 rounded-2xl overflow-hidden"></div>
            <div className="w-full h-[150px] bg-gray-200 rounded-2xl overflow-hidden"></div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="w-full h-20 bg-gray-100 rounded-xl mt-12"></div>
      </div>
    </section>
  );
}

export default MissionSection;
