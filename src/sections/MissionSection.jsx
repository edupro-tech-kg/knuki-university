import { useTranslation } from "react-i18next";
import MissionSectionImg from "../assets/images/missionImage.png";
import Mission2 from "../assets/images/mission2image.png";
import Mission3 from "../assets/images/mission3.png";
import Mission4 from "../assets/images/mission4.jpg";
import Mission5 from "../assets/images/mission5.jpg";
import Mission6 from "../assets/images/mission6.jpg";
import Mission7 from "../assets/images/mission7.jpg";
import Mission8 from "../assets/images/mission8.jpg";
import Mission9 from "../assets/images/mission9.jpg";

import { Trans } from "react-i18next";
import Pattern from "../assets/svg/patterns.svg";
import { useEffect, useMemo, useState } from "react";

function MissionSection() {
  const { t } = useTranslation();
  const images = useMemo(
    () => [
      MissionSectionImg,
      Mission2,
      Mission3,
      Mission4,
      Mission5,
      Mission6,
      Mission7,
      Mission8,
      Mission9,
    ],
    []
  );
  const [activeMainIndex, setActiveMainIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveMainIndex((prev) => (prev + 1) % images.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <section id="mission" className="bg-background w-full relative overflow-x-hidden mt-12">
      <div className="max-w-[1440px] mx-auto px-4 relative z-10 pb-12">
        <div className="text-center mb-12">
          <h2 className="uppercase font-serif text-2xl md:text-4xl font-bold mb-4 text-text-primary text-center italic">
            <Trans i18nKey="mission.title" components={{ br: <br /> }} />
          </h2>
          <p className="mt-4 text-base font-normal leading-[1.4] text-text-primary md:text-lg md:font-normal md:leading-[1.4] md:mx-auto md:max-w-2xl">
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

            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col p-10">
              <p className="text-white text-sm md:text-base mb-6 overflow-y-auto scrollbar-transparent max-h-[600px]">
                {t("mission.imageDescription")}
              </p>

              {/* <Button variant="primaryIcon" className="self-start mt-auto">
                {t("mission.button")}
              </Button> */}
            </div>
          </div>

          {(() => {
            const nextIndices = [];
            for (let i = 1; nextIndices.length < 2 && i <= images.length; i += 1) {
              const idx = (activeMainIndex + i) % images.length;
              if (idx !== activeMainIndex) nextIndices.push(idx);
            }
            const prevIndex = (activeMainIndex - 1 + images.length) % images.length;

            const slotsByPosition = [
              { idx: nextIndices[0] ?? prevIndex, kind: "small", mobileHidden: false },
              { idx: nextIndices[1] ?? prevIndex, kind: "small", mobileHidden: false },
              { idx: prevIndex, kind: "small", mobileHidden: true },
              { idx: activeMainIndex, kind: "wide", mobileHidden: false },
            ];

            return (
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:grid-rows-2 lg:h-[650px]">
                {slotsByPosition.map((slot, pos) => (
                  <button
                    key={pos}
                    type="button"
                    onClick={() => setActiveMainIndex(slot.idx)}
                    className={[
                      "relative w-full overflow-hidden rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#751715]/60",
                      slot.mobileHidden ? "hidden lg:block" : "",
                      slot.kind === "wide"
                        ? "col-span-2 h-[220px] md:h-[260px] lg:col-span-3 lg:row-start-2 lg:h-full"
                        : "h-[160px] md:h-[200px] lg:row-start-1 lg:h-full",
                    ].join(" ")}
                  >
                    <img
                      src={images[slot.idx]}
                      alt={`Mission ${slot.idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                        slot.kind === "wide" ? "animate-[fadeIn_250ms_ease-out]" : ""
                      }`}
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </button>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
      <div className="mt-2">
        <img
          src={Pattern}
          alt="patterns"
          className="object-cover h-12  w-[620px] sm:w-[1000px]   lg:h-auto lg:w-full"
        />
      </div>
    </section>
  );
}

export default MissionSection;
