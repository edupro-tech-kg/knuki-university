import React from "react";
import goalbg from "../assets/images/goalbg.png";
import man from "../assets/images/goalman.png";
import graybg from "../assets/images/graybg.png";
import { useTranslation } from "react-i18next";

function Goal() {
  const { t } = useTranslation();

  return (
    <div className="container-edge relative overflow-visible">
      <div
        className="absolute inset-x-0 top-[25%] h-[52%] bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${graybg})` }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-8 lg:gap-14">
        <div className="w-full lg:w-[50%] flex justify-center">
          <img src={man} alt="speaker" className="h-[60vh] lg:h-[60%] object-cover mt-28" />
        </div>

        <div
          className="w-full lg:w-[40%] p-4 sm:p-6 lg:p-8 bg-no-repeat bg-cover bg-center flex items-center justify-center my-28"
          style={{ backgroundImage: `url(${goalbg})` }}
        >
          <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed">
            {t("qualificationGoal.goal")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Goal;
