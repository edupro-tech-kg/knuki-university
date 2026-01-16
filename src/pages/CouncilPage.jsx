import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/UI/Button";
import PdfModal from "../components/UI/PdfModal";
import okumushtuularKengeshi from "../assets/pdf/okumushtuular-kengeshi.pdf";

export default function CouncilPage() {
  const { t } = useTranslation();
  const functions = t("council.function", { returnObjects: true });

  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const handleOpenPdf = () => {
    setIsPdfModalOpen(true);
  };

  const handleClosePdfModal = () => {
    setIsPdfModalOpen(false);
  };

  const pdfUrl =
    typeof okumushtuularKengeshi === "string"
      ? okumushtuularKengeshi
      : okumushtuularKengeshi?.default || okumushtuularKengeshi;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
        <h1 className="text-center text-base sm:text-lg lg:text-4xl uppercase text-primary italic font-serif">
          {t("council.title")}
        </h1>

        <p className="text-center text-bold text-sm sm:text-base lg:text-lg font-bold">
          {t("council.subtitle")}
        </p>

        <div className="text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <h2 className="text-bold text-sm sm:text-base lg:text-lg font-bold flex-1">
              {t("council.functionTitle")}
            </h2>

            <Button
              variant="primaryIcon"
              onClick={handleOpenPdf}
              className="whitespace-nowrap min-w-[200px] text-center 
            !border-black !text-black hover:!border-black hover:!text-black hover:!bg-transparent"
            >
              {t("council.buttonText")}
            </Button>
          </div>

          {functions.map((item, index) => (
            <div key={index} className="mt-6 sm:mt-8">
              <h3 className="text-base sm:text-lg font-semibold mb-4">{item.name}</h3>
              <ul className="grid gap-3 text-sm sm:text-base">
                {item.functions.map((i, id) => (
                  <li key={id} className="ml-6">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            {t("council.compositionProcedure")}
          </h2>

          <ul className="grid gap-3 text-sm sm:text-base">
            <li className="ml-6">{t("council.composition")}</li>
            <li className="ml-6">{t("council.procedure")}</li>
          </ul>
        </div>
      </div>
      {isPdfModalOpen && (
        <PdfModal
          pdf={pdfUrl}
          onClose={handleClosePdfModal}
          title={t("council.buttonText") || "Документ"}
        />
      )}
    </section>
  );
}