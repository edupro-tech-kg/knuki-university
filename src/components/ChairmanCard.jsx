import React from "react";
import { useTranslation } from "react-i18next";

function ChairmanCard() {
    const { t } = useTranslation();
    const chairman = t("chairmanCard", { returnObjects: true });

    return (
        <div className="my-12 text-center">
            <h3 className="text-2xl font-bold mb-8">
                {chairman.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-6 px-4">
                {chairman.cards.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center gap-4 p-6 border border-gray-200 
                                 rounded-[24px] shadow-sm bg-white w-full sm:w-[288px] lg:w-[300px] 
                                 xl:w-[320px] flex-shrink-0"
                    >
                        <span className="w-14 h-14 rounded-full flex justify-center items-center 
                                       text-xl font-semibold bg-[#BF211F] text-white">
                            {item.id}
                        </span>

                        <div className="text-center">
                            <h4 className="text-lg font-semibold">
                                {item.name}
                            </h4>
                            <p className="text-gray-700 mt-2 text-base leading-6">
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
