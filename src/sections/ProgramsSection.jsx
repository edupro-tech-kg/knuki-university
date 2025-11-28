import React, { use } from "react";
import { useTranslation } from "react-i18next";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import music from "../assets/svg/music.svg";
import mask from "../assets/svg/mask.svg";
import projector from "../assets/svg/projector.svg";
import ballerina from "../assets/svg/ballerina.svg";

const directions = [
  { icon: music, },
  { icon: mask, },
  { icon: projector, },
  { icon: ballerina, },
];

export default function ProgramsSection() {
  const { t } = useTranslation();
  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4 ">
      <div className="w-full mx-5">
        <h2 className="uppercase mt-10 font-serif italic text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-text-primary">
          {t("programs.eyebrow")}
        </h2>

        <div className="flex gap-6 overflow-x-auto md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-4 scrollbar-hide pb-4 -mx-2 px-2 md:mx-0 md:p-0">
          {directions.map((dir, id) => (
            <div
              key={id}
              className="group flex-shrink-0 w-80 md:w-auto md:flex-shrink bg-text-primary transition-colors duration-300 hover:bg-primary flex flex-col justify-between"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-sm text-stroke mb-2">{t("programs.faculty")}</div>

                <h2 className="font-sans text-2xl font-medium text-white mb-4">
                  {t(`programs.list.${id}.title`)}
                </h2>

                <div className="mb-4 mt-10 flex justify-end">
                  <div className="bg-primary p-4 transition-colors duration-300 group-hover:bg-text-primary
      ">
                    <img src={dir.icon} alt="" className="w-20 h-20" />
                  </div>
                </div>

                <div className="mt-auto flex">
                  <ButtonPrimary>
                    {t("programs.buttonText")} →
                  </ButtonPrimary>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
