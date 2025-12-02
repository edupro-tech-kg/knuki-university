import { useTranslation } from "react-i18next";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import letter from "../assets/svg/letter.svg";
import Map from "../assets/svg/map.svg";
import Phone from "../assets/svg/phone.svg";

export default function Footer() {
  const { t } = useTranslation();
  const footer = t("footer", { returnObjects: true });

  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="container-edge md:flex items-end justify-between py-16 grid lg:gap-0 gap-10">
        <div className="flex gap-10">
          <div className="grid gap-4">
            <strong className="font-medium text-[16.57px] lg:text-[26px]">
              {footer.labels.address}
            </strong>
            <ul className="font-light text-[12.74px] lg:text-[20px] tracking-[-0.04em]">
              <li>720005 г. Бишкек</li>
              <li>ул. Джантошева 113</li>
              <li>email:contact@kguki.kg</li>
              <li>Канцелярия</li>
              <li>Факс: +996 312 57 07 56</li>
              <li>Тел.: +996 312 57 07 56</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <strong className="font-medium text-[16.57px] lg:text-[26px]">
              {footer.labels.links}
            </strong>
            <ul className="font-light text-[12.74px] lg:text-[20px] tracking-[-0.04em]">
              <li>720005 г. Бишкек</li>
              <li>ул. Джантошева 113</li>
              <li>email:contact@kguki.kg</li>
              <li>Канцелярия</li>
              <li>Факс: +996 312 57 07 56</li>
              <li>Тел.: +996 312 57 07 56</li>
            </ul>
          </div>
        </div>
        <div className="flex h-full gap-2">
          <img className="cursor-pointer w-4 lg:w-6" src={letter} alt="" />
          <img className="cursor-pointer w-4 lg:w-6" src={Phone} alt="" />
          <img className="cursor-pointer w-4 lg:w-6" src={Map} alt="" />
          <div className="bg-[#FFFFFF3D] w-0.5 h-4 lg:h-6 rotate-0 opacity-100 rounded-[29.04px]" />
          <img className="cursor-pointer w-4 lg:w-6" src={facebook} alt="" />
          <img className="cursor-pointer w-4 lg:w-6" src={instagram} alt="" />
        </div>
      </div>
    </footer>
  );
}
