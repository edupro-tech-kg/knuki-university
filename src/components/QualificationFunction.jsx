import React from "react";
import { useTranslation } from "react-i18next";

function QualificationFunction() {
  const { t } = useTranslation();
  const data = t("qualificationFunction", { returnObjects: true });

  return (
    <div className="container-edge my-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{data.title}</h2>

      <div className="flex flex-col gap-6">
        {data.cards.map((item) => (
          <div
            key={item.id}
            className="
              flex flex-col md:flex-row
              bg-primary
            "
          >
            <div className="flex gap-4 p-5 md:p-6 flex-1">
              <span
                className="
                  flex-shrink-0
                  w-9 h-9
                  sm:w-10 sm:h-10
                  md:w-12 md:h-12
                  rounded-full
                  bg-white
                  text-primary
                  font-semibold
                  flex items-center justify-center
                  text-sm md:text-base
                "
              >
                {item.id}
              </span>

              <p className="text-white leading-relaxed text-sm sm:text-base">{item.description}</p>
            </div>

            <div className="w-full md:w-72 lg:w-80 h-48 md:h-auto">
              <img src={item.image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QualificationFunction;
