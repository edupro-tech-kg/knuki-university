import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { Button } from "../components/Button";
import CalendarMini from "./CalendarMini";
import { useTranslation } from "react-i18next";

export default function EventsPreview() {
  const { t } = useTranslation();
  const events = t("events");

  return (
    <section id="events" className="container-edge space-y-8 py-14 md:py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <SectionTitle
          eyebrow={events.eyebrow}
          title={events.title}
          description={events.description}
        />
        <Button className="self-start md:self-auto">{events.button}</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {events.list.map((event) => (
            <Card
              key={event.title}
              className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-primary px-4 py-3 text-center text-white shadow-soft">
                  <p className="text-lg font-semibold">{event.date}</p>
                  <span className="text-xs uppercase tracking-[0.12em] text-white/80">2025</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-dark">{event.title}</p>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
              </div>
              <Button variant="outline" className="px-4 py-2">
                {events.register}
              </Button>
            </Card>
          ))}
        </div>

        <CalendarMini />
      </div>
    </section>
  );
}
