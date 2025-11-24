import { useState } from "react";
import clsx from "clsx";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const languages = [
    { code: "ky", label: "KY" },
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
  ];
  const navLinks = t("navLinks");

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-dark/70 backdrop-blur-md">
      <div className="container-edge flex items-center justify-between py-4 text-white">
        <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-semibold shadow-soft">
              КН
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/70">{t("header.brandTop")}</p>
              <p className="font-serif text-lg font-semibold leading-tight">{t("header.brandName")}</p>
            </div>
          </div>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-white/30 p-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={clsx(
                  "px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] transition",
                  locale === lang.code
                    ? "rounded-full bg-white text-dark"
                    : "text-white/80 hover:text-white"
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <Button>{t("header.apply")}</Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>

      <div
        className={clsx(
          "md:hidden transition-all duration-200 overflow-hidden bg-dark/90 backdrop-blur-sm",
          menuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="container-edge flex flex-col gap-4 pb-6 text-white/80">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-base">
              {link.label}
            </a>
          ))}
          <div className="flex gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={clsx(
                  "flex-1 rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition",
                  locale === lang.code
                    ? "border-white bg-white text-dark"
                    : "border-white/30 text-white/80"
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <Button className="w-full justify-center">{t("header.apply")}</Button>
        </div>
      </div>
    </header>
  );
}
