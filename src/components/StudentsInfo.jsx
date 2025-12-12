import React from "react";
import { useTranslation } from "react-i18next";

function StudentsInfo() {
    const { t } = useTranslation();

    const students = t("studentsInfo", { returnObjects: true });

    return (
        <div className="container-edge flex flex-wrap  gap-6 justify-center mt-8">
            {students.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center text-center rounded-xl"
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-80 object-cover mb-4"
                    />
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-gray-600 mt-1 w-64">{item.content}</p>
                </div>
            ))}
        </div>
    );
}

export default StudentsInfo;
