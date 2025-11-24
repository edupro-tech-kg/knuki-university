import { Button } from "../components/Button";

const stats = [
  { value: "20+", label: "Факультетов и кафедр" },
  { value: "6k", label: "Студентов и выпускников" },
  { value: "150+", label: "Артистов в составе преподавателей" },
];

export default function HeroSection() {
  return (
    <section className="bg-hero-pattern bg-cover bg-center text-white">
      <div className="container-edge flex flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
            Искусство будущего
            <span className="h-2 w-2 rounded-full bg-accent"></span>
            Прием 2025 открыт
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Кыргызский Национальный Университет Культуры и Искусств
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Получайте образование мирового уровня, сохраняя корни кыргызской культуры и раскрывая
            свою индивидуальность.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button className="shadow-soft">Подать заявку</Button>
            <Button variant="ghost" className="border-white/60">
              Узнать о программах
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((item) => (
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
              Главные события недели
              <span className="h-2 w-2 rounded-full bg-accent"></span>
            </div>
            <ul className="space-y-4 text-dark">
              <li className="flex items-start gap-3 rounded-2xl bg-light px-4 py-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <div>
                  <p className="text-sm text-gray-500">Сентябрь 14, 12:30</p>
                  <p className="text-base font-semibold">День открытых дверей факультета искусств</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-light px-4 py-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-accent"></div>
                <div>
                  <p className="text-sm text-gray-500">Сентябрь 16, 18:00</p>
                  <p className="text-base font-semibold">Показ дипломных спектаклей «Новая сцена»</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-light px-4 py-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <div>
                  <p className="text-sm text-gray-500">Сентябрь 18, 15:00</p>
                  <p className="text-base font-semibold">Мастер-класс по этно-джаз импровизации</p>
                </div>
              </li>
            </ul>
            <div className="flex items-center justify-between rounded-2xl bg-dark px-4 py-3 text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.14em] text-white/70">Прием документов</p>
                <p className="text-lg font-semibold">до 20 сентября</p>
              </div>
              <Button variant="primary" className="bg-white text-primary hover:opacity-90">
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
