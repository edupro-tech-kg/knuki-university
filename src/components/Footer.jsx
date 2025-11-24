import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const navLinks = t("navLinks");

  return (
    <footer className="bg-dark text-white">
      <div className="container-edge grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr] md:py-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-semibold shadow-soft">
              КН
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/60">
                {t("header.brandTop")}
              </p>
              <p className="font-serif text-lg font-semibold leading-tight">{t("header.brandName")}</p>
            </div>
          </div>
          <p className="max-w-md text-white/70">{t("footer.about")}</p>
          <Button variant="primary" className="bg-white text-primary hover:opacity-90">
            {t("footer.download")}
          </Button>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">{t("footer.navTitle")}</h4>
          <ul className="space-y-3 text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">{t("footer.contactsTitle")}</h4>
          <ul className="space-y-3 text-white/70">
            <li>{t("footer.address")}</li>
            <li>{t("footer.phone")}</li>
            <li>{t("footer.email")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
