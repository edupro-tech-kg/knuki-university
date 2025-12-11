import { useTranslation } from "react-i18next";
import MissionSectionImg from "../assets/images/missionImage.png";
import Mission2 from "../assets/images/mission2image.png";
import Mission3 from "../assets/images/mission3.png";
import Button from "../components/UI/Button";
import { Trans } from "react-i18next";

function MissionSection() {
  const { t } = useTranslation();

  return (
    <section id="mission" className="bg-background w-full relative overflow-x-hidden mt-28">
      <div className="max-w-[1440px] mx-auto px-4 relative z-10 pb-12">
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-[24px] font-semibold leading-[1.1] text-text-primary md:text-[60px] md:leading-[1.05] md:font-medium">
            <Trans i18nKey="mission.title" components={{ br: <br /> }} />
          </h2>
          <p className="mt-4 text-[12px] font-normal leading-[1.4] text-text-primary md:text-[20px] md:font-normal md:leading-[1.4] md:mx-auto md:max-w-3xl">
            {t("mission.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[544px_1fr] gap-5 items-start">
          <div className="relative w-full max-w-[544px] h-[650px] overflow-hidden">
            <img
              src={MissionSectionImg}
              alt="Main mission"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 mt-[100px] bg-black bg-opacity-40 flex flex-col justify-start pt-8 px-6">
              <p className="text-white w-[250px] text-sm md:text-base mb-6 max-w-[80%]">
                {t("mission.imageDescription")}
              </p>

              <Button
                variant="primaryIcon"
                 className="self-start"
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
      <div className="mt-2">
        <img
          src="/src/assets/svg/patterns.svg"
          alt="patterns"
          className="object-cover h-12  w-[620px] sm:w-[1000px]   lg:h-auto lg:w-full"
        />
      </div>
    </section>
  );
}

export default MissionSection;
