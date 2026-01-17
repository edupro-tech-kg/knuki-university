import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PdfModal from "../components/UI/PdfModal";
import DocumentTable from "../components/UI/DocumentTable";

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

  const noLinkIds = [3, 11, 17, 18];

  const prepareLeftTableData = () => {
    if (!educationData?.tables) return [];

    return educationData.tables.map((group) => ({
      title: group.title,
      data: group.data.map((item) => ({
        ...item,
        pdf: pdfMapping[item.id],
        hasPdf: pdfMapping[item.id] && !noLinkIds.includes(item.id),
        // Определяем, показывать ли кнопку
        showButton: pdfMapping[item.id] && !noLinkIds.includes(item.id),
      }))
    }));
  };

  const openPdfModal = (item) => {
    if (item.pdf && item.hasPdf) {
      setModalState({
        isOpen: true,
        pdf: item.pdf,
        title: item.title
      });
    }
  };

  const closePdfModal = () => {
    setModalState({ isOpen: false, pdf: null, title: "" });
  };
  const renderActionButton = (item, index, defaultButton) => {
    if (!item.showButton) {
      return null;
    }
    return defaultButton;
  };

  const renderLeftCell = (item) => {
    return (
      <div>
        <p className="text-gray-700 text-sm sm:text-base font-normal">
          {item.title}
        </p>
        {item.list && (
          <ul className="list-disc pl-5 mt-2 space-y-1">
            {item.list.map((li, i) => (
              <li key={i} className="text-sm text-gray-600">{li}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const renderRightCell = (item) => (
    <div className="py-1">
      <p className="font-medium text-gray-800 text-sm sm:text-base">
        {item.title}
      </p>
      {item.list && (
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 text-sm sm:text-base">
          {item.list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      )}
      {item.footer && (
        <p className="mt-3 italic text-gray-600 text-sm">{item.footer}</p>
      )}
    </div>
  );

  const leftTableData = prepareLeftTableData();

  return (
    <div className="pb-10 lg:pb-14">
      <div className="flex justify-center mt-6 lg:mt-10">
        <h1 className="font-serif text-primary text-2xl sm:text-3xl md:text-4xl text-center uppercase italic">
          {t("education.title")}
        </h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 mt-8 lg:mt-12">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div>

            <DocumentTable
              data={leftTableData}
              config={{
                isGrouped: true,
                groupTitleKey: "title",
                groupItemsKey: "data",
                hasIndexColumn: true,
                hasActionColumn: true,
                actionType: "pdf",
                indexColumnWidth: "w-12 sm:w-14 md:w-16",
                actionColumnWidth: "w-40 sm:w-44 md:w-48",
                textColumnClass: "px-4 py-3 text-gray-700",
                borderClass: "border border-black",
                rowBorderClass: "border-b border-black last:border-b-0",
                hoverEffect: true,
                itemTextKey: "title",
                itemPdfKey: "pdf",
                buttonVariant: "secondary",
                buttonClassName: "px-4 py-2 text-sm sm:px-6 sm:py-2",
                textSize: "text-sm sm:text-base",
                showButtonIfNoAction: false,
              }}
              buttonText={t("education.viewPdf") || "Посмотреть PDF"}
              onActionClick={openPdfModal}
              renderCellContent={renderLeftCell}
              mobileView="cards"
            />
          </div>
          <div>
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-5">
              {t("education.additionalEducation")}
            </h2>

            <DocumentTable
              data={educationData.additionalPrograms}
              config={{
                hasIndexColumn: false,
                hasActionColumn: false,
                borderClass: "border border-black",
                rowBorderClass: "border-b border-black last:border-b-0",
                hoverEffect: false,
                textSize: "text-sm sm:text-base",
                textColumnClass: "px-4 py-3 text-gray-700",
              }}
              renderCellContent={renderRightCell}
              mobileView="cards"
            />
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