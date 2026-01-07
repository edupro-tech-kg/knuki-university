import Button from "../components/UI/Button";
import { useTranslation } from "react-i18next";

export default function NLAKyrgyzRepublic() {
  const { t } = useTranslation();
  const documents = t("documentNLA.documents", { returnObjects: true });

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-3">
      <h1 className="font-serif text-primary text-2xl sm:text-3xl md:text-4xl text-center py-6 md:py-9 uppercase italic">
        {t("documentNLA.title")}
      </h1>

      <div className="md:hidden space-y-4">
        {documents.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-black rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-medium">
                {index + 1}
              </span>
              <p className="text-sm sm:text-base text-gray-700 flex-1">
                {item.text}
              </p>
            </div>
            <div className="flex justify-end">
              <Button
                variant="secondary"
                onClick={() => window.open(item.link, "_blank")}
                className="px-4 py-2 text-sm w-full sm:w-auto"
              >
                {t("documentNLA.btnText")}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-black">
          <tbody>
            {documents.map((item, index) => (
              <tr
                key={index}
                className="border-b border-black last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <td className="w-16 px-4 py-3 text-center text-base font-medium text-gray-900 border-r border-black">
                  {index + 1}
                </td>
                <td className="px-4 py-3 text-base text-gray-700">{item.text}</td>
                <td className="w-48 px-4 py-3">
                  <div className="flex justify-end">
                    <Button
                      variant="secondary"
                      onClick={() => window.open(item.link, "_blank")}
                      className="px-6 py-2 text-sm"
                    >
                      {t("documentNLA.btnText")}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
