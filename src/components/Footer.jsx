import { useTranslation } from "react-i18next";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import letter from "../assets/svg/letter.svg";
import map from "../assets/svg/map.svg";
import phone from "../assets/svg/phone.svg";

export default function Footer() {
  const { t } = useTranslation();
  const footer = t("footer", { returnObjects: true });
  const icons = [
    {
      id: "letter",
      src: letter,
      alt: "Email",
      href: "mailto:kguki.art@mail.ru",
    },
    {
      id: "phone",
      src: phone,
      alt: "Phone",
      href: "tel:+996312570379",
    },
    {
      id: "map",
      src: map,
      alt: "Map",
      href: "https://maps.google.com/?q=720005+г.+Бишкек+ул.+Джантошева+113",
    },
    {
      id: "facebook",
      src: facebook,
      alt: "Facebook",
      href: "https://www.facebook.com/share/1BniHdayHv/?mibextid=wwXIfr",
    },
    {
      id: "instagram",
      src: instagram,
      alt: "Instagram",
      href: "https://www.instagram.com/knuki_kg?igsh=d3FlenBmdTFjcjNm&utm_source=qr",
    },
  ];

  const linkUrls = [
    "/",
    "/management",
    // "/faculties",
    "/students",
    "/applicants",
    // "/news",
    "/documents",
    // "/contacts",
  ];

  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="container-edge py-16">
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* Адрес */}
            <div>
              <strong className="font-medium text-[14px] md:text-[16.57px] lg:text-[26px] block mb-3 md:mb-4">
                {footer.labels.address}
              </strong>

              <ul className="font-light text-[10px] md:text-[12.74px] lg:text-[20px] tracking-[-0.04em] space-y-1 md:space-y-2">
                {footer.addressItems?.map((item, index) => (
                  <li key={index}>
                    {item.includes("email:") ? (
                      <a
                        href="mailto:kguki.art@mail.ru"
                        className="hover:border-b hover:border-white transition duration-200 leading-tight"
                      >
                        {item}
                      </a>
                    ) : item.includes("+996") ? (
                      <a
                        href="tel:+996312570379"
                        className="hover:border-b hover:border-white transition duration-200 leading-tight"
                      >
                        {item}
                      </a>
                    ) : (
                      <span className="leading-tight">{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Быстрые ссылки */}
            <div>
              <strong className="font-medium text-[14px] md:text-[16.57px] lg:text-[26px] block mb-3 md:mb-4">
                {footer.labels.links}
              </strong>

              <ul className="font-light text-[10px] md:text-[12.74px] lg:text-[20px] tracking-[-0.04em] space-y-1 md:space-y-2">
                {footer.linkItems?.map((item, index) => (
                  <li key={index}>
                    <a
                      href={linkUrls[index] || "#"}
                      className="hover:border-b hover:border-white transition duration-200 leading-tight inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Иконки — десктоп */}
          <div className="hidden md:flex items-start gap-5 ml-auto">
            {icons.map((icon) => (
              <a
                key={icon.id}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img className="w-6 md:w-7 lg:w-8 xl:w-9" src={icon.src} alt={icon.alt} />
              </a>
            ))}
          </div>
        </div>

        {/* Иконки — мобильные */}
        <div className="flex md:hidden justify-center mt-10 gap-5">
          {icons.map((icon) => (
            <a
              key={icon.id}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img className="w-6 md:w-7 lg:w-8 xl:w-9" src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
