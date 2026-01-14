import React from "react";
import { useTranslation } from "react-i18next";

function AccountingFirst() {
  const { t } = useTranslation();

  const rows = t("firstAccounting.rows", { returnObjects: true });

  return (
    <div className="container-edge my-4 overflow-x-auto mb-16">
      <table className="w-full border border-black text-sm text-center">
        <thead>
          <tr>
            <th rowSpan="3" className="border border-black px-2 py-2">
              №
            </th>
            <th rowSpan="3" className="border border-black px-4 py-2">
              {t("firstAccounting.specialty")}
            </th>
            <th rowSpan="3" className="border border-black px-2 py-2">
              {t("firstAccounting.code")}
            </th>
            <th colSpan="6" className="border border-black px-4 py-2 font-semibold">
              {t("firstAccounting.title")}
            </th>
          </tr>
          <tr>
            <th colSpan="6" className="border border-black py-2">
              {t("firstAccounting.price")}
            </th>
          </tr>
          <tr>
            {t("firstAccounting.courses", { returnObjects: true }).map((c, i) => (
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
export default AccountingFirst;
