import React from "react";
import { useTranslation } from "react-i18next";

function LibraryDescription() {
    const { t } = useTranslation();

    const library = t("libraryDescription", { returnObjects: true });

    return (
        <div className="container-edge my-10">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">
                    {library.title}
                </h2>
                <p className="text-gray-700">
                    {library.content}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {library.cards.map((card) => (
                    <div key={card.id} className="p-6 border rounded-lg">
                        <h4 className="text-lg font-semibold mb-2">
                            {card.name}
                        </h4>
                        <p className="text-gray-600">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LibraryDescription;
