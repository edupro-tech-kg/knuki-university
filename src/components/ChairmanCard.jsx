import React from "react";
import { useTranslation } from "react-i18next";

function ChairmanCard() {
    const { t } = useTranslation();

    const chairman = t("chairmanCard", { returnObjects: true });

    return (
        <div className="my-10 text-center">
            <h3 className="text-2xl font-bold mb-6">
                {chairman.title}
            </h3>

            <div className="flex justify-center gap-6">
                {chairman.cards.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center gap-4 p-4 border border-gray-200 rounded-xl"
                    >
                        <span className="w-12 h-12 rounded-full flex justify-center items-center text-xl font-semibold bg-[#BF211F] text-[#FFFFFF]">
                            {item.id}
                        </span>

                        <div>
                            <h4 className="text-lg font-semibold">
                                {item.name}
                            </h4>
                            <p className="text-gray-600 mt-1 w-72">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChairmanCard;
