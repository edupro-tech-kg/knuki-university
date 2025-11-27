import Card from "../components/Card";
import { useTranslation } from "react-i18next";

export default function CalendarMini() {
  const { t } = useTranslation();
  const calendar = t("calendar");

  return (
    <Card className="bg-white/90">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gray-500">{calendar.label}</p>
          <p className="text-lg font-semibold text-dark">{calendar.month}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-primary">
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          {calendar.legend}
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {calendar.days.map((item) => (
          <div
            key={item.date}
            className={`flex flex-col items-center justify-center rounded-xl border border-gray-100 px-2 py-3 ${
              item.active ? "bg-primary text-white shadow-soft" : "bg-light text-dark"
            }`}
          >
            <span className="text-[11px] uppercase tracking-[0.12em] text-gray-500">
              {item.day}
            </span>
            <span className="text-base font-semibold">{item.date}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600">{calendar.note}</p>
    </Card>
  );
}
