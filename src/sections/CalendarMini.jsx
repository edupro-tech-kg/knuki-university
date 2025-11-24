import Card from "../components/Card";
import { calendarDays } from "../data/content";

export default function CalendarMini() {
  return (
    <Card className="bg-white/90">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gray-500">Календарь</p>
          <p className="text-lg font-semibold text-dark">Сентябрь 2025</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-primary">
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          События
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {calendarDays.map((item) => (
          <div
            key={item.date}
            className={`flex flex-col items-center justify-center rounded-xl border border-gray-100 px-2 py-3 ${
              item.active ? "bg-primary text-white shadow-soft" : "bg-light text-dark"
            }`}
          >
            <span className="text-[11px] uppercase tracking-[0.12em] text-gray-500">{item.day}</span>
            <span className="text-base font-semibold">{item.date}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Актуальный календарь мероприятий на неделю с расписанием залов и мастер-классов.
      </p>
    </Card>
  );
}
