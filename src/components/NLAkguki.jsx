import { useTranslation } from "react-i18next";
import Button from "../components/UI/Button";

export default function NLAkguki() {
    const { t } = useTranslation();
    const documents = t("NLAkguki.documents", { returnObjects: true });
    
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-4 sm:py-8">
            <h1 className="font-serif text-primary text-2xl sm:text-3xl md:text-4xl text-center py-6 sm:py-9 uppercase italic">
                {t("NLAkguki.title")}
            </h1>

            <div className="block md:hidden space-y-4">
                {documents.map((text, index) => (
                    <div 
                        key={index} 
                        className="bg-white border border-black rounded-lg p-4"
                    >
                        <div className="flex items-start gap-3 mb-3">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded text-sm font-medium">
                                {index + 1}
                            </span>
                            <p className="text-sm text-gray-700">
                                {text}
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <Button
                                variant="secondary"
                                className="px-4 py-2 text-sm w-full"
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
                        {documents.map((text, index) => (
                            <tr key={index} className="border-b border-black last:border-b-0">
                                <td className="w-16 px-4 py-3 text-center text-base font-medium text-gray-900 border-r border-black">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-3 text-base text-gray-700">
                                    {text}
                                </td>
                                <td className="w-48 px-4 py-3">
                                    <div className="flex justify-end">
                                        <Button
                                            variant="secondary"
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