import React from "react";
import { useTranslation } from "react-i18next";

function SciencePage() {
  const { t } = useTranslation();
  const data = t("sciencePage", { returnObjects: true });

  return (
    <div className="container-edge my-12">
      <h1 className="uppercase font-serif text-xl md:text-4xl font-bold mb-4 text-primary  text-center">
        {data.title}
      </h1>

      <div className="space-y-4 mb-10">
        {data.infos.map((item, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {item.text}
          </p>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">
          {data.name}
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          {data.list.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SciencePage;
