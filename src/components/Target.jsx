import React from "react";
import { useTranslation } from "react-i18next";

function Target() {
    const { t } = useTranslation();
    const target = t("target", { returnObjects: true });

    return (
        <div className="container-edge py-10 bg-primary">
            <h2 className="uppercase font-serif italic text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-[#FFFFFF]">
                {target.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {target.cards.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white"
                    >
                        <p className="text-text-primary text-sm leading-relaxed font-medium">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Target;
