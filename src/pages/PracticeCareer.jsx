import { useTranslation } from "react-i18next";

export default function PracticeCareer() {
  const { t } = useTranslation();
  const content = t("practiceCareer", { returnObjects: true }) || {};

  const duties = content.duties || [];
  const tableRows = content.table || [];
  const bullets = content.bullets || [];
  const employers = content.employers?.list || [];
  const practiceBullet =
    content.practiceTitle && content.practiceDescription
      ? `${content.practiceTitle} ${content.practiceDescription}`
      : null;

  return (
    <div className="bg-white min-h-screen py-12 px-4 md:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-[#8B1A1A] font-serif italic text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide">
            {content.title}
          </h1>

          <p className="mt-8 font-semibold text-[#1f1f1f] text-base md:text-lg leading-relaxed max-w-6xl mx-auto">
            {content.intro}
          </p>
        </div>

        <div className="mt-12 text-sm md:text-base leading-relaxed text-gray-900 space-y-10">
          <div className="space-y-3">
            <p className="font-semibold uppercase tracking-wide">{content.dutiesTitle}</p>
            <ul className="list-disc pl-6 space-y-2">
              {duties.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl border-collapse text-left text-sm md:text-base border border-[#cfcfcf]">
              <thead>
                <tr className="bg-[#f4efea] text-gray-900">
                  <th className="border border-[#cfcfcf] px-4 py-3 font-semibold">
                    {content.tableHeaders?.direction}
                  </th>
                  <th className="border border-[#cfcfcf] px-4 py-3 font-semibold">
                    {content.tableHeaders?.course}
                  </th>
                  <th className="border border-[#cfcfcf] px-4 py-3 font-semibold">
                    {content.tableHeaders?.period}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#fbf8f4]"}>
                    <td className="border border-[#cfcfcf] px-4 py-3">{row.direction}</td>
                    <td className="border border-[#cfcfcf] px-4 py-3">{row.course}</td>
                    <td className="border border-[#cfcfcf] px-4 py-3">{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="list-disc pl-6 space-y-2">
            {bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
            {practiceBullet && (
              <li>
                <strong>{content.practiceTitle}</strong>{" "}
                {content.practiceDescription}
              </li>
            )}
          </ul>

          {content.totalGraduates && <p className="text-sm md:text-base">{content.totalGraduates}</p>}

          <div className="space-y-3">
            <p className="font-semibold">{content.employers?.title}</p>
            <ul className="list-disc pl-6 space-y-2">
              {employers.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-12" />
    </div>
  );
}
