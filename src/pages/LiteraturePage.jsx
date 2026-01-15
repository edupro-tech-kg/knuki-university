import React from "react";
import { useTranslation } from "react-i18next";

function LiteraturePage() {
  const { t } = useTranslation();
  const data = t("literaturePage", { returnObjects: true });

  return (
    <div className="container-edge my-12">
      <h1 className="uppercase font-serif text-lg md:text-4xl font-bold mb-4 text-primary  text-center italic">
        {data.title}
      </h1>

      <h2 className="md:text-lg font-bold mb-6 text-xs text-center">{data.theme}</h2>

      <div className="space-y-4 mb-10">
        {data.infos.map((item, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {item.text}
          </p>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">{data.name}</h3>

        <ol className="list-decimal pl-6 space-y-1">
          {data.list.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default LiteraturePage;
