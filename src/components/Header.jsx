/* eslint-disable react-hooks/static-components */
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icons } from "../assets/svg";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  const languages = [
    { code: "ky", label: "KG" },
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
  ];

  const headerTranslations = t("header", { returnObjects: true });

  const dropdownRef = useRef(null);
  const [headerSize, setHeaderSize] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    if (!divRef.current) return;

    const observer = new ResizeObserver(() => {
      const newHeight = divRef.current.offsetHeight;

      setHeaderSize((prev) => {
        if (prev !== newHeight) return newHeight;
        return prev;
      });
    });

    observer.observe(divRef.current);

    return () => observer.disconnect();
  }, []);

  // Адрес университета
  const universityAddress =
    "https://www.google.com/maps/place/%D0%A3%D0%BB%D0%B8%D1%86%D0%B0+%D0%91%D0%B0%D0%B9%D1%82%D0%B8%D0%BA+%D0%91%D0%B0%D0%B0%D1%82%D1%8B%D1%80%D0%B0+3g,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8347316,74.5902183,17z/data=!3m1!4b1!4m6!3m5!1s0x389ec83e335b0c4f:0x4e6b7b3f3e0bcc5e!8m2!3d42.8347277!4d74.5927932!16s%2Fg%2F11s7v5q9f?entry=ttu";

  useEffect(() => {
    const handleClick = (event) => {
      if (
        !dropdownRef.current?.contains(event.target) &&
        !event.target.closest(".language-selector-button")
      )
        setLanguageDropdownOpen(false);
    };

    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuOpen]);

  const getCurrentLanguageLabel = () =>
    languages.find((lang) => lang.code === locale)?.label || "KG";

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => setLanguageDropdownOpen(!languageDropdownOpen);

  const SocialIcons = () => (
    <div className="flex items-center gap-3">
      <Link to="mailto:kguki.art@mail.ru" target="_blank" rel="noopener noreferrer">
        <img src={Icons.mail} className="w-6 h-6 cursor-pointer hover:opacity-80" />
      </Link>
      <Link to="tel:+996312570379" target="_blank" rel="noopener noreferrer">
        <img src={Icons.phone} className="w-6 h-6 cursor-pointer hover:opacity-80" />
      </Link>
      <Link
        to={universityAddress}
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 cursor-pointer hover:opacity-80"
      >
        <img src={Icons.maps} alt="Map" className="w-6 h-6" />
      </Link>
      <div className=" border-2 rounded-3xl h-6 border-[#FFFFFF3D]"></div>
      <Link
        to="https://www.facebook.com/share/1BniHdayHv/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Icons.facebook} className="w-[18px] h-6 cursor-pointer hover:opacity-80" />
      </Link>
      <Link
        to="https://www.instagram.com/knuki_kg?igsh=d3FlenBmdTFjcjNm&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Icons.instagram} className="w-6 h-6 cursor-pointer hover:opacity-80" />
      </Link>
    </div>
  );

  const LanguageSelector = () => (
    <div className="relative">
      <div
        className="language-selector-button flex items-center gap-2 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/10 transition-colors"
        onClick={toggleLanguageDropdown}
      >
        <img src={Icons.language} alt="" className="w-5 h-5" />
        <span className="text-sm font-inter font-medium">{getCurrentLanguageLabel()}</span>
        <img
          src={Icons.arrowDown}
          className={clsx(
            "w-3 h-3 transition-transform",
            languageDropdownOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
    </div>
  );

  return (
    <header style={{ height: headerSize }} className={` z-50   w-full`}>
      <div ref={divRef} className="w-full fixed inset-0 h-fit">
        <div className="w-full bg-[#751715] text-white  top-0 z-50">
          <div className=" mx-auto px-12 pt-6 pb-7  flex items-center justify-between">
            <button
              className=" md:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <img src={Icons.burgerMenu} alt="Menu" className="w-6 h-6" />
            </button>

            <div className="flex justify-end max-w-[90px] w-full lg:max-w-[290px] md:justify-start ">
              <a href="/" className="flex items-center gap-4 :ml-[50px] md:ml-0 ">
                <img src={Icons.logo} className="h-14 w-14" />
              </a>
            </div>

            <div className="flex justify-between md:w-full">
              <div className="hidden md:flex flex-1 justify-center px-4">
                <p className="text-xl font-inter font-semibold leading-tight max-w-xl text-center  lg:text-lg">
                  {headerTranslations.universityName}
                </p>
              </div>

              <div className=" flex items-center gap-4 relative">
                <div
                  ref={dropdownRef}
                  className={` ${languageDropdownOpen ? " absolute bg-white rounded-lg shadow-lg border border-gray-200 w-32 z-[9999] top-10  md:top-3/4 duration-100" : "absolute    bg-white top-4  opacity-0 rounded-lg shadow-lg border pointer-events-none w-32 border-gray-200 duration-100"}`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={clsx(
                        "w-full text-left rounded-md px-4 py-2 text-sm font-inter font-medium",
                        locale === lang.code
                          ? "bg-[#751715] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>

                <LanguageSelector />
                <div className="hidden lg:flex">
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-full bg-white text-[#751715] shadow  top-[100px] z-40">
          <div className="max-w-[1440px] mx-auto px-6 h-[56px] flex items-center justify-center">
            <NavBar menu={false} />
          </div>
        </div>

        <div
          className={clsx(
            "fixed top-0 left-0 h-full w-80 bg-[#751715] shadow-xl z-50 transition-transform duration-300 md:hidden",
            menuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <SideBar onClose={() => setMenuOpen(false)} />
        </div>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
