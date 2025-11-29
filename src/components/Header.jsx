import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Logo from "../assets/svg/Logo.svg";
import Language from "../assets/svg/language.svg";
import Mail from "../assets/svg/mail.svg";
import Phone from "../assets/svg/phone.svg";
import Map from "../assets/svg/map.svg";
import Facebook from "../assets/svg/facebook.svg";
import Instagram from "../assets/svg/instagram.svg";
import ArrowDown from "../assets/svg/arrowDown.svg";
import BurgerMenu from "../assets/svg/burger-menu.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  const languages = [
    { code: "ky", label: "KG" },
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
  ];

  const navLinks = t("navLinks", { returnObjects: true });
  const headerTranslations = t("header", { returnObjects: true });

  const dropdownRef = useRef(null);
  const languageButtonRef = useRef(null);
  const mobileLanguageButtonRef = useRef(null);

  // Адрес университета
  const universityAddress =
    "https://www.google.com/maps/place/%D0%A3%D0%BB%D0%B8%D1%86%D0%B0+%D0%91%D0%B0%D0%B9%D1%82%D0%B8%D0%BA+%D0%91%D0%B0%D0%B0%D1%82%D1%8B%D1%80%D0%B0+3g,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8347316,74.5902183,17z/data=!3m1!4b1!4m6!3m5!1s0x389ec83e335b0c4f:0x4e6b7b3f3e0bcc5e!8m2!3d42.8347277!4d74.5927932!16s%2Fg%2F11s7v5q9f?entry=ttu";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".language-selector-button")
      ) {
        setLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (languageButtonRef.current && languageDropdownOpen && window.innerWidth >= 768) {
      const rect = languageButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
      });
    } else if (mobileLanguageButtonRef.current && languageDropdownOpen && window.innerWidth < 768) {
      const rect = mobileLanguageButtonRef.current.getBoundingClientRect();
      const dropdownWidth = 128;
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.right + window.scrollX - dropdownWidth,
      });
    }
  }, [languageDropdownOpen]);

  const getCurrentLanguageLabel = () =>
    languages.find((lang) => lang.code === locale)?.label || "KG";

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => setLanguageDropdownOpen(!languageDropdownOpen);

  const SocialIcons = () => (
    <div className="flex items-center gap-3">
      <img src={Mail} className="w-6 h-6 cursor-pointer hover:opacity-80" />
      <img src={Phone} className="w-6 h-6 cursor-pointer hover:opacity-80" />
      <a
        href={universityAddress}
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 cursor-pointer hover:opacity-80"
      >
        <img src={Map} alt="Map" className="w-6 h-6" />
      </a>
      <img src={Facebook} className="w-6 h-6 cursor-pointer hover:opacity-80" />
      <img src={Instagram} className="w-6 h-6 cursor-pointer hover:opacity-80" />
    </div>
  );

  const LanguageSelector = ({ isMobile = false }) => (
    <div className="relative">
      <div
        ref={isMobile ? mobileLanguageButtonRef : languageButtonRef}
        className="language-selector-button flex items-center gap-2 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/10 transition-colors"
        onClick={toggleLanguageDropdown}
      >
        <img src={Language} alt="" className="w-5 h-5" />
        <span className="text-sm font-inter font-medium">{getCurrentLanguageLabel()}</span>

        <img
          src={ArrowDown}
          className={clsx(
            "w-3 h-3 transition-transform",
            languageDropdownOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
    </div>
  );

  const MenuContent = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center gap-3">
          <span className="font-inter font-semibold text-white">{headerTranslations.menu}</span>
        </div>

        <button
          onClick={() => setMenuOpen(false)}
          className="w-8 h-8 flex items-center justify-center text-white text-xl hover:bg-white/10 rounded-lg"
        >
          ×
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="p-6">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-base font-inter text-white py-3 px-4 hover:bg-white/10 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="px-6 pb-6">
          <div className="pt-6 border-t border-white/30">
            <p className="text-sm font-inter text-white/80 mb-4 text-center font-medium">
              {headerTranslations.socialNetworks}
            </p>
            <div className="flex justify-center gap-4">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="w-full z-50">
      <div className="w-full bg-[#751715] text-white fixed top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-[100px] flex items-center justify-between">
          <a href="/" className="hidden md:flex items-center gap-4">
            <img src={Logo} className="h-14 w-14" />
          </a>

          <div className="hidden md:flex flex-1 justify-center px-4">
            <p className="text-xl font-inter font-semibold leading-tight max-w-xl text-center mx-auto">
              {headerTranslations.universityName}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <SocialIcons />
          </div>

          <div className="md:hidden flex items-center justify-between w-full">
            <button
              className="w-10 h-10 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <img src={BurgerMenu} alt="Menu" className="w-6 h-6" />
            </button>

            <a href="/" className="flex items-center justify-center">
              <img src={Logo} className="h-10 w-10" />
            </a>

            <LanguageSelector isMobile={true} />
          </div>
        </div>

        <div className="md:hidden px-6 text-center mt-2 pb-4">
          <p className="text-sm font-inter font-semibold leading-relaxed max-w-xs mx-auto">
            {headerTranslations.universityName}
          </p>
        </div>
      </div>

      <div className="hidden md:block w-full bg-white text-[#751715] shadow fixed top-[100px] z-40">
        <div className="max-w-[1440px] mx-auto px-6 h-[56px] flex items-center justify-center">
          <nav className="flex flex-1 justify-center items-center gap-8 text-sm font-medium font-inter">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="opacity-80 hover:opacity-100 transition hover:text-[#751715]/90"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-80 bg-[#751715] shadow-xl z-50 transition-transform duration-300 md:hidden",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <MenuContent />
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {languageDropdownOpen && (
        <div
          ref={dropdownRef}
          className="fixed bg-white rounded-lg shadow-lg border border-gray-200 w-32 z-[9999]"
          style={{
            top:'3%',
            left:'67%'
            // top: dropdownPosition.top,
            // left: dropdownPosition.left,
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={clsx(
                "w-full text-left rounded-md px-4 py-2 text-sm font-inter font-medium",
                locale === lang.code ? "bg-[#751715] text-white" : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
