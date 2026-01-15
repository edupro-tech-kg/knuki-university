import React from "react";
import { useTranslation } from "react-i18next";

function LibraryStructure() {
  const { t } = useTranslation();
  const libraryStruct = t("libraryStructure", { returnObjects: true });

  return (
    <div className="container-edge py-6 md:py-10 bg-text-accent text-center my-6 md:my-10">
      <h2 className="uppercase font-cormorant italic font-bold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 text-white">
        {libraryStruct.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-left">
        {libraryStruct.list.map((item) => (
          <div className="bg-white p-3 md:p-4 flex items-center" key={item.id}>
            <p className="text-sm md:text-base" key={item.id}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibraryStructure;
