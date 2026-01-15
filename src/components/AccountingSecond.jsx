import { useTranslation } from "react-i18next";

const AccountingSecond = () => {
  const { t } = useTranslation();
  const rows = t("accounting.rows", { returnObjects: true });

  return (
    <div className="overflow-x-auto container-edge my-4">
      <table className="w-full border border-black text-sm">
        <thead>
          <tr className="text-center font-semibold">
            <th className="border border-black px-2 py-2 w-12">№</th>
            <th className="border border-black px-4 py-2">{t("accounting.service")}</th>
            <th className="border border-black px-4 py-2 w-40">{t("accounting.amount")}</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(rows) &&
            rows.map((row, i) => (
              <tr key={i}>
                <td className="border border-black text-center px-2 py-2">{row.id}</td>
                <td className="border border-black px-4 py-2">{row.name}</td>
                <td className="border border-black text-center px-4 py-2">{row.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountingSecond;
