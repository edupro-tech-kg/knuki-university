import { Button } from "../components/Button";
import { useTranslation } from "react-i18next";
export default function HeroSection() {
  const { t } = useTranslation();
  const hero = t("hero");
  const weekEvents = hero.weekEvents || [];

  return (
    <section className="bg-hero-pattern bg-cover bg-center text-white">
      <div className="container-edge flex flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
            {hero.pill}
            <span className="h-2 w-2 rounded-full bg-accent"></span>
            {hero.badge}
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            {hero.heading}
          </h1>
          <p className="max-w-2xl text-lg text-white/80">{hero.subheading}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button className="shadow-soft">{hero.primaryCta}</Button>
            <Button variant="ghost" className="border-white/60">
              {hero.secondaryCta}
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {hero.stats.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/10 p-4">
                <div className="text-2xl font-semibold">{item.value}</div>
                <p className="text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-surface flex-1 border border-white/10 bg-white/90 text-dark shadow-soft backdrop-blur">
          <div className="space-y-4 p-6">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-primary">
              {t("events.title")}
              <span className="h-2 w-2 rounded-full bg-accent"></span>
            </div>
            <ul className="space-y-4 text-dark">
              {weekEvents.map((event, idx) => (
                <li key={event.title} className="flex items-start gap-3 rounded-2xl bg-light px-4 py-3">
                  <div className={`mt-1 h-2 w-2 rounded-full ${idx % 2 === 0 ? "bg-primary" : "bg-accent"}`}></div>
                  <div>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <p className="text-base font-semibold">{event.title}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between rounded-2xl bg-dark px-4 py-3 text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.14em] text-white/70">{hero.admission.label}</p>
                <p className="text-lg font-semibold">{hero.admission.deadline}</p>
              </div>
              <Button variant="primary" className="bg-white text-primary hover:opacity-90">
                {hero.admission.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
