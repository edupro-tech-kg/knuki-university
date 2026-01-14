import React from "react";
import { useTranslation } from "react-i18next";

export default function EducationPage() {
  const { t } = useTranslation();
  const educationData = t("education");

  const styles = {
    border: "border border-black",
    text: "font-normal text-xs sm:text-sm md:text-base lg:text-lg",
    heading: "text-sm sm:text-base md:text-lg lg:text-xl",
    center: "flex justify-center items-center",
    cellPadding: "p-2 sm:p-3 md:p-4",
    sectionHeading: "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold",
  };

  return (
    <div className="pb-6 md:pb-10 lg:pb-14">
      <div className="flex justify-center mt-4 md:mt-6 lg:mt-8">
        <h1 className="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary font-serif italic uppercase font-bold">
          {t("education.title")}
        </h1>
      </div>

      <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-10">
          {/* Первая таблица */}
          <div className="w-full lg:w-1/2">
            <table className={`${styles.border} border-collapse w-full text-xs sm:text-sm`}>
              <thead>
                <tr>
                  <th className={`${styles.border} px-1 sm:px-2 md:px-3 py-2 sm:py-3`}>№</th>
                  <th className={`${styles.border} py-3 sm:py-4 md:py-5`}>
                    <h2 className={`${styles.heading} text-center px-2`}>
                      {t("education.programTitle")}
                    </h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                {educationData.tables.map((section) => (
                  <React.Fragment key={section.title}>
                    <tr>
                      <td className={`${styles.border} bg-gray-50`}></td>
                      <td className={`py-3 sm:py-4 ${styles.center} bg-gray-50`}>
                        <b className="text-sm sm:text-base md:text-lg lg:text-xl text-center px-2">
                          {section.title}
                        </b>
                      </td>
                    </tr>

                    {section.data.map((item) => (
                      <tr key={item.id} className={styles.border}>
                        <td className="w-8 sm:w-10 md:w-12 bg-gray-50">
                          <div className={`${styles.center} h-full ${styles.text}`}>{item.id}</div>
                        </td>
                        <td className={`${styles.border} ${styles.cellPadding}`}>
                          <p className={styles.text}>{item.title}</p>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Вторая таблица */}
          <div className="w-full lg:w-1/2">
            <table className="border-collapse w-full text-xs sm:text-sm">
              <thead className={styles.border}>
                <tr>
                  <th className="py-3 sm:py-4 md:py-5">
                    <h2 className={`${styles.heading} text-center px-2`}>
                      {t("education.additionalEducation")}
                    </h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                {educationData.additionalPrograms.map((item) => (
                  <tr key={item.id} className={styles.border}>
                    <td className={`${styles.cellPadding}`}>
                      <p className={`${styles.text} font-medium`}>{item.title}</p>

                      {item.list && (
                        <ul className="list-disc pl-3 sm:pl-4 md:pl-6 space-y-1 mt-1 sm:mt-2">
                          {item.list.map((li, index) => (
                            <li key={index} className={`${styles.text} pl-2 sm:pl-3`}>
                              {li}
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.footer && (
                        <p className={`mt-1 sm:mt-2 italic ${styles.text} text-gray-600`}>
                          {item.footer}
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
