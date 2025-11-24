import SectionTitle from "../components/SectionTitle";
import { history } from "../data/content";
import Card from "../components/Card";

export default function HistorySection() {
  return (
    <section className="bg-light py-14 md:py-16">
      <div className="container-edge space-y-8">
        <SectionTitle
          eyebrow="История"
          title="Наследие университета"
          description="Каждый этап роста КНКАИ — это новые сцены, новые имена и вклад в культурную жизнь страны."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {history.map((item) => (
            <Card key={item.year} className="flex items-start gap-4 bg-white/95">
              <div className="rounded-2xl bg-primary px-3 py-2 text-white shadow-soft">
                <span className="text-lg font-semibold">{item.year}</span>
              </div>
              <p className="text-gray-700">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
