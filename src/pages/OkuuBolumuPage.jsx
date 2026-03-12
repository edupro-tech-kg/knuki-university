import { useTranslation } from "react-i18next";

function StaffTable({ rows, headers }) {
  if (!Array.isArray(rows) || rows.length === 0) return null;

  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-[860px] w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="px-4 py-3 w-14">{headers?.no || "№"}</th>
            <th className="px-4 py-3">{headers?.name || "Name"}</th>
            <th className="px-4 py-3">{headers?.role || "Role"}</th>
            <th className="px-4 py-3">{headers?.email || "Email"}</th>
            <th className="px-4 py-3">{headers?.phone || "Phone"}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr key={index} className="align-top">
              <td className="px-4 py-3 text-gray-600">{row.no ?? index + 1}</td>
              <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
              <td className="px-4 py-3 text-gray-700">{row.role}</td>
              <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                {row.email ? (
                  <a className="text-[#751715] hover:underline" href={`mailto:${row.email}`}>
                    {row.email}
                  </a>
                ) : (
                  "—"
                )}
              </td>
              <td className="px-4 py-3 text-gray-700 whitespace-nowrap tabular-nums">
                {row.phone ? (
                  <a className="text-[#751715] hover:underline" href={`tel:${row.phone}`}>
                    {row.phone}
                  </a>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function OkuuBolumuPage() {
  const { t, i18n } = useTranslation();
  const content = t("okuuBolumuPage", { returnObjects: true });
  const headings = content?.headings || {};
  const tableHeaders = content?.tableHeaders || {};

  return (
    <main className="max-w-[1100px] mx-auto px-4 md:px-6 py-10">
      <h1 className="text-2xl md:text-4xl font-serif font-bold text-[#751715]">
        {t("pageTitles.okuuBolumu")}
      </h1>

      <p className="mt-4 text-base md:text-lg text-gray-700">{content?.intro}</p>

      {Array.isArray(content?.tasks) && content.tasks.length > 0 && (
        <>
          <h2 className="mt-8 text-lg md:text-xl font-semibold text-[#751715]">
            {headings.tasks || "Key responsibilities:"}
          </h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700">
            {content.tasks.map((item, index) => (
              <li key={index} className="text-base md:text-lg">
                {item}
              </li>
            ))}
          </ul>
        </>
      )}

      {content?.goal && (
        <p className="mt-6 text-base md:text-lg text-gray-700">
          <span className="font-semibold text-gray-900">
            {headings.goalPrefix || "Main goal: "}
          </span>
          {content.goal}
        </p>
      )}

      {Array.isArray(content?.staff) && content.staff.length > 0 && (
        <>
          <h2 className="mt-10 text-lg md:text-xl font-semibold text-[#751715]">
            {headings.staff || "Core staff"}
          </h2>
          <StaffTable rows={content.staff} headers={tableHeaders} />
        </>
      )}
    </main>
  );
}
