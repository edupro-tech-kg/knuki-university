import { useTranslation } from "react-i18next";

export default function ProfsoyuzPage() {
  const { t } = useTranslation();
  const content = t("profsouzPage", { returnObjects: true });

  return (
    <main className="max-w-[1100px] mx-auto px-4 md:px-6 py-10">
      <h1 className="font-['Cormorant_Garamond'] font-bold italic text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-snug tracking-tight text-center uppercase text-text-accent">
        {t("pageTitles.profsouz")}
      </h1>
      <p className="mt-4 text-base md:text-lg text-gray-700">{content?.intro}</p>

      {Array.isArray(content?.bullets) && content.bullets.length > 0 && (
        <>
          <h2 className="mt-8 text-lg md:text-xl font-semibold text-[#751715]">Профсоюз:</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700">
            {content.bullets.map((item, index) => (
              <li key={index} className="text-base md:text-lg">
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
