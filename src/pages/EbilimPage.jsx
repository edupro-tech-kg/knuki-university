import { useTranslation } from "react-i18next";
import Button from "../components/UI/Button";
import ebilim from "../assets/images/ebilim.png";

export default function EbilimPage() {
  const { t } = useTranslation();

  const handleLogin = () => {
    window.location.href = "https://edu.kguki.kg/Account/Login?ReturnUrl=%2F";
  };

  return (
    <section className="bg-white w-full px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-serif italic uppercase text-primary mb-10">
        {t("ebilim.title")}
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center gap-5">
            <img src={ebilim} alt="EBilim" className="w-32 sm:w-36 md:w-40 h-auto object-contain" />
            <p className="text-xs font-bold uppercase">{t("ebilim.subtitle")}</p>

            <h2 className="text-lg sm:text-xl font-bold text-black leading-tight uppercase">
              {t("ebilim.AIdescription")}
            </h2>

            <Button
              variant="secondary"
              onClick={handleLogin}
              className="py-2 px-3 text-xs sm:text-sm w-full sm:w-auto truncate uppercase"
            >
              {t("ebilim.button")}
            </Button>

            <span className="text-xs text-gray-400 self-start">{t("ebilim.advertisement")}</span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-gray-700 text-sm sm:text-base leading-relaxed">
          <strong>EBilim</strong> – {t("ebilim.description")}
        </div>
      </div>
    </section>
  );
}
