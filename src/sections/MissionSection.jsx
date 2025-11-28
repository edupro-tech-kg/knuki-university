import React from "react";
import { useTranslation } from "react-i18next";
import MissionSectionImg from "../assets/image/missionImage.png";
import Mission2 from "../assets/image/mission2image.png";
import Mission3 from "../assets/image/mission3.png";
import Button from "../components/Button";
import LongOrnament from "../assets/image/longOrnament.png";

function MissionSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 lg:py-24 relative">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-4xl font-bold mb-4 text-[#751715] font-playfair italic transform skew-x-[1deg]">
            {t("mission.title")}
          </h2>
          <p className="text-gray-600 w-[350px] max-w-2xl mx-auto">
            {t("mission.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[544px_1fr] gap-5 items-start">
          <div className="relative w-[544px] h-[650px] overflow-hidden">
            <img
              src={MissionSectionImg}
              alt="Main mission"
              className="w-[544px] h-[650px] object-cover"
            />

            <div className="absolute inset-0 mt-[100px] bg-black bg-opacity-40 flex flex-col justify-start pt-8 px-6">
              <p className="text-white w-[250px] text-sm md:text-base mb-6 max-w-[80%]">
                {t("mission.imageDescription")}
              </p>

              <Button
                variant="outline"
                className="bg-transparent !text-white !border-white hover:bg-[#751715] hover:!text-white w-[191px] h-12"
              >
                {t("mission.button")}
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full h-[319px] overflow-hidden">
              <img
                src={Mission2}
                alt="Secondary mission"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>

            <div className="w-full h-[319px] overflow-hidden">
              <img
                src={Mission3}
                alt="Additional mission"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-[51px] mt-12 overflow-hidden absolute left-1/2 transform -translate-x-1/2">
        <img
          src={LongOrnament}
          alt="Ornament"
          className="w-screen h-[51px] object-cover"
        />
      </div>
    </section>
  );
}

export default MissionSection;
