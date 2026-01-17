import React, { useRef, useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function SpecialtiesSection() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const specialties = useMemo(() => t("specialties", { returnObjects: true }) || {}, [t]);
  const items = specialties.list || [];

  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <section className="bg-background mt-20">
      <div className="container-edge mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="w-full relative max-w-7xl mx-auto">
          <h2 className="uppercase font-serif text-2xl md:text-4xl font-bold mb-6 text-text-primary text-center italic">
            {specialties.eyebrow || t("programs.eyebrow")}
          </h2>

          {!isDesktop ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-xl"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="bg-[#751715] text-white rounded-sm border border-[#5f1112] flex flex-col items-center gap-2 min-h-28 px-4 py-4 justify-center">
                      <span className="h-8 w-8 rounded-full bg-white text-[#751715] text-sm font-semibold flex items-center justify-center shrink-0">
                        {item.id}
                      </span>
                      <p className="text-sm text-center leading-snug">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative">
              <div
                ref={containerRef}
                className={`
                  md:flex md:overflow-x-auto md:gap-6 md:pb-4 md:px-1
                  [&::-webkit-scrollbar]:hidden
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]
                `}
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="md:flex-shrink-0 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-xl"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="bg-[#751715] text-white rounded-sm border border-[#5f1112] flex flex-col items-center gap-2 min-h-28 px-4 py-4 justify-center">
                        <span className="h-8 w-8 rounded-full bg-white text-[#751715] text-sm font-semibold flex items-center justify-center shrink-0">
                          {item.id}
                        </span>
                        <p className="text-sm text-center leading-snug">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
