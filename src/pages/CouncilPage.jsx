import { useTranslation } from "react-i18next";

export default function CouncilPage() {
    const { t } = useTranslation();
    const functions = t("council.function", { returnObjects: true });

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
                    <h2 className="text-bold text-sm sm:text-base lg:text-lg font-bold">
                        {t("council.functionTitle")}
                    </h2>
                    {functions.map((item, index) => (
                        <div key={index} className="mt-6 sm:mt-8">
                            <h3 className="text-base sm:text-lg font-semibold mb-4">
                                {item.name}
                            </h3>
                            <ul className="grid gap-3 text-sm sm:text-base">
                                {item.functions.map((i, id) => (
                                    <li key={id} className="ml-6">{i}</li>
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
                        <li className="flex gap-2">
                            <span className="ml-6">{t("council.composition")}</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="ml-6">{t("council.procedure")}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}