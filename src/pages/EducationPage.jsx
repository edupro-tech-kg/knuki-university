import React, { useState } from "react";  
import { useTranslation } from "react-i18next";
import PdfModal from "../components/UI/PdfModal";
import doc1 from "../assets/pdf/education/doc1.pdf";
import doc2 from "../assets/pdf/education/doc2.PDF";
import doc3 from "../assets/pdf/education/doc3.PDF";
import doc4 from "../assets/pdf/education/doc4.PDF";
import doc5 from "../assets/pdf/education/doc5.PDF";
import doc6 from "../assets/pdf/education/doc6.PDF";
import doc7 from "../assets/pdf/education/doc7.PDF";
import doc8 from "../assets/pdf/education/doc8.PDF";
import doc9 from "../assets/pdf/education/doc9.PDF";
import doc10 from "../assets/pdf/education/doc10.pdf";
import doc11 from "../assets/pdf/education/doc11.pdf";
import doc12 from "../assets/pdf/education/doc12.pdf";
import doc13 from "../assets/pdf/education/doc13.pdf";

export default function EducationPage() {
  const { t } = useTranslation();
  const educationData = t("education");
  const [modalState, setModalState] = useState({
    isOpen: false,
    pdf: null,
    title: "",
  });

  const styles = {
    border: "border border-black",
    text: "font-normal text-xs sm:text-sm md:text-base lg:text-lg",
    heading: "text-sm sm:text-base md:text-lg lg:text-xl",
    center: "flex justify-center items-center",
    cellPadding: "p-2 sm:p-3 md:p-4",
    sectionHeading: "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold",
    link: "hover:underline underline-offset-2 decoration-black decoration-1 hover:decoration-2 transition-all duration-200 cursor-pointer ",
  };

  const noLinkIds = [3, 11, 17, 18];

  const pdfMapping = {
    1: doc1,
    2: doc2,
    4: doc3,
    5: doc4,
    6: doc5,
    7: doc6,
    8: doc7,
    9: doc8,
    10: doc9,
    12: doc10,
    13: doc11,
    14: doc12,
    15: doc13,
  };

  const openPdfModal = (pdf, title) => {
    setModalState({
      isOpen: true,
      pdf,
      title,
    });
  };

  const closePdfModal = () => {
    setModalState({
      isOpen: false,
      pdf: null,
      title: "",
    });
  };

  const renderCellContent = (item) => {
    const pdfFile = pdfMapping[item.id];
    const isLink = pdfFile && !noLinkIds.includes(item.id);

    if (isLink) {
      return (
        <button
          onClick={() => openPdfModal(pdfFile, item.title)}
          className={`${styles.text} ${styles.link} inline-block text-left w-full bg-transparent border-none p-0`}
        >
          {item.title}
        </button>
      );
    }

    return <p className={styles.text}>{item.title}</p>;
  };

  return (
    <div className="pb-6 md:pb-10 lg:pb-14">
      <div className="flex justify-center mt-4 md:mt-6 lg:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary font-serif italic uppercase font-bold">
          {t("education.title")}
        </h1>
      </div>

      <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-10">
          {/* Левая таблица */}
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
                          {renderCellContent(item)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Правая таблица */}
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

      {modalState.isOpen && (
        <PdfModal
          pdf={modalState.pdf}
          title={modalState.title}
          onClose={closePdfModal}
        />
      )}
    </div>
  );
}