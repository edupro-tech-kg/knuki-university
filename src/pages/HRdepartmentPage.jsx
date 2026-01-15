import { useTranslation } from "react-i18next";

export default function HRdepartment() {
  const { t } = useTranslation();
  const list = t("HRdepartment.disciplines", { returnObjects: true });

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Заголовок */}
        <h1 className="text-center text-base sm:text-lg lg:text-4xl uppercase text-primary italic font-serif">
          {t("HRdepartment.title")}
        </h1>

        {/* Подзаголовок */}
        <p className="text-center text-bold text-sm sm:text-base lg:text-lg font-bold">
          {t("HRdepartment.subtitle")}
        </p>

        {/* главные обязанности */}
        <div className="mt-6 sm:mt-8">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            {t("HRdepartment.mainMission")}
          </h2>

          <ul className="grid gap-3 text-sm sm:text-base">
            {t("HRdepartment.missions", { returnObjects: true }).map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="font-medium">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Список услуг */}
        <div className="mt-6 sm:mt-8">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            {t("HRdepartment.servicesTitle")}
          </h2>

          <ul className="grid gap-3 text-sm sm:text-base">
            {t("HRdepartment.services", { returnObjects: true }).map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="font-medium">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* график */}
        <div className="mt-6 sm:mt-8">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            {t("HRdepartment.scheduleTitle")}
          </h2>

          <ul className="grid gap-2 text-sm sm:text-base">
            {t("HRdepartment.schedule", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Список работников */}
        <div className="mt-6 sm:mt-8">
          <h2 className="text-base sm:text-lg font-semibold mb-4">{t("HRdepartment.listTitle")}</h2>

          <ul className="grid gap-3 text-sm sm:text-base">
            {list.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="font-medium">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* трудоустройство  */}

        <div className="mt-6 sm:mt-8">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            {t("HRdepartment.employmentTitle")}
          </h2>

          <ul className="grid gap-3 text-sm sm:text-base">
            {t("HRdepartment.employment", { returnObjects: true }).map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="font-medium">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
