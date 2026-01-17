import React from "react";
import { useTranslation } from "react-i18next";

function LibraryDescription() {
  const { t } = useTranslation();
  const library = t("libraryDescription", { returnObjects: true });

  return (
    <div className="container-edge my-10 font-sans">
      <div className="text-center mb-8">
        <h2 className="uppercase font-serif text-4xl font-bold mb-4 text-primary italic">
          {library.title}
        </h2>

        <p className="text-text-primary text-left whitespace-pre-line">
          {library.content}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {library.cards.map((card) => (
          <div key={card.id} className="p-4 border rounded-lg">
            <h4 className="text-lg text-text-primary font-bold mb-2">
              {card.name}
            </h4>

            <p className="text-text-primary whitespace-pre-line leading-relaxed">
              {card.description}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default LibraryDescription;
