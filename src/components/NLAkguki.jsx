import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/UI/Button";

import doc1 from "../assets/pdf/doc1.pdf";
import doc2 from "../assets/pdf/doc2.pdf";
import doc3 from "../assets/pdf/doc3.pdf";
import doc4 from "../assets/pdf/doc4.pdf";
import doc5 from "../assets/pdf/doc5.pdf";
import doc6 from "../assets/pdf/doc6.pdf";
import doc7 from "../assets/pdf/doc7.pdf";
import doc8 from "../assets/pdf/doc8.pdf";
import doc9 from "../assets/pdf/doc9.pdf";
import doc10 from "../assets/pdf/doc10.pdf";
import doc11 from "../assets/pdf/doc11.pdf";
import doc12 from "../assets/pdf/doc12.pdf";
import doc13 from "../assets/pdf/doc13.pdf";
import doc14 from "../assets/pdf/doc14.pdf";
import doc15 from "../assets/pdf/doc15.pdf";
import doc16 from "../assets/pdf/doc16.pdf";
import doc17 from "../assets/pdf/doc17.pdf";
import doc18 from "../assets/pdf/doc18.pdf";
import doc19 from "../assets/pdf/doc19.pdf";
import doc20 from "../assets/pdf/doc20.pdf";
import doc21 from "../assets/pdf/doc21.pdf";
import doc22 from "../assets/pdf/doc22.pdf";
import doc23 from "../assets/pdf/doc23.pdf";
import doc24 from "../assets/pdf/doc24.pdf";
import doc25 from "../assets/pdf/doc25.pdf";
import doc26 from "../assets/pdf/doc26.pdf";
import doc27 from "../assets/pdf/doc27.pdf";
import doc28 from "../assets/pdf/doc28.pdf";
import doc29 from "../assets/pdf/doc29.pdf";
import doc30 from "../assets/pdf/doc30.pdf";
import doc31 from "../assets/pdf/doc31.pdf";
import doc32 from "../assets/pdf/doc32.pdf";

const nlaKgukiPdfs = {
  doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9, doc10, doc11, doc12, doc13, doc14, doc15, doc16, doc17, doc18, doc19, doc20, doc21, doc22, doc23, doc24, doc25,
  doc26, doc27, doc28, doc29, doc30, doc31, doc32,
};

function PdfModal({ pdf, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-11/12 md:w-3/4 h-5/6 rounded-lg overflow-hidden relative">
        <button
          className="absolute top-2 right-2 bg-gray-200 px-3 py-1 rounded"
          onClick={onClose}
        >
          x
        </button>
        <iframe
          src={pdf}
          className="w-full h-full"
          title="Документ"
        />
      </div>
    </div>
  );
}

export default function NLAkguki() {
  const { t } = useTranslation();
  const documents = t("NLAkguki.documents", { returnObjects: true });
  const [activePdf, setActivePdf] = useState(null);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-4 sm:py-8">
      <h1 className="font-serif text-primary text-2xl sm:text-3xl md:text-4xl text-center py-6 sm:py-9 uppercase italic">
        {t("NLAkguki.title")}
      </h1>

      <div className="block md:hidden space-y-4">
        {documents.map((item, index) => (
          <div key={item.id} className="bg-white border border-black rounded-lg p-4">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded text-sm font-medium">
                {index + 1}
              </span>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
            <Button
              variant="secondary"
              className="w-full px-4 py-2 text-sm"
              onClick={() => setActivePdf(nlaKgukiPdfs[item.id])}
            >
              {t("NLAkguki.btnText")}
            </Button>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-black">
          <tbody>
            {documents.map((item, index) => (
              <tr key={item.id} className="border-b border-black last:border-b-0">
                <td className="w-16 px-4 py-3 text-center font-medium border-r border-black">
                  {index + 1}
                </td>
                <td className="px-4 py-3 text-gray-700">{item.text}</td>
                <td className="w-48 px-4 py-3">
                  <div className="flex justify-end">
                    <Button
                      variant="secondary"
                      className="px-6 py-2 text-sm"
                      onClick={() => setActivePdf(nlaKgukiPdfs[item.id])}
                    >
                      {t("NLAkguki.btnText")}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {activePdf && <PdfModal pdf={activePdf} onClose={() => setActivePdf(null)} />}
    </section>
  );
}
