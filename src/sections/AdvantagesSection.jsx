import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { advantages } from "../data/content";

export default function AdvantagesSection() {
  return (
    <section className="bg-light py-14 md:py-16">
      <div className="container-edge space-y-8">
        <SectionTitle
          eyebrow="Почему мы"
          title="Сильные стороны университета"
          description="Основа обучения — живой контакт с мастерами сцены, регулярная практика и участие в проектах."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {advantages.map((item) => (
            <Card key={item.title} className="bg-white/90">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-primary"></div>
                <div>
                  <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
