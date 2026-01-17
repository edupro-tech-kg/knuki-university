import React from "react";
import { useTranslation } from "react-i18next";

function AccountingFourth() {
    const { t } = useTranslation();

    const rows = t("fourthAccounting.rows", { returnObjects: true });

    return (
        <div className="container-edge my-4 overflow-x-auto mt-16">
            <table className="w-full border border-black text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan="3" className="border border-black px-2 py-2">
                            №
                        </th>
                        <th rowSpan="3" className="border border-black px-4 py-2">
                            {t("fourthAccounting.specialty")}
                        </th>
                        <th rowSpan="3" className="border border-black px-2 py-2">
                            {t("fourthAccounting.code")}
                        </th>
                        <th colSpan="6" className="border border-black px-4 py-2 font-semibold">
                            {t("fourthAccounting.title")}
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="6" className="border border-black py-2">
                            {t("fourthAccounting.price")}
                        </th>
                    </tr>
                    <tr>
                        {t("fourthAccounting.courses", { returnObjects: true }).map((c, i) => (
                            <th key={i} className="border border-black px-2 py-1">
                                {c}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            <td className="border border-black">{row.id}</td>
                            <td className="border border-black text-left px-2">{row.name}</td>
                            <td className="border border-black">{row.code}</td>
                            {row.prices.map((price, idx) => (
                                <td key={idx} className="border border-black">
                                    {Array.isArray(price) ? price.map((p, j) => <div key={j}>{p}</div>) : price}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default AccountingFourth;
