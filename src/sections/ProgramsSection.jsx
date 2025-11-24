import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { programs } from "../data/content";
import { Button } from "../components/Button";

export default function ProgramsSection() {
  return (
    <section id="programs" className="container-edge space-y-8 py-14 md:py-16">
      <SectionTitle
        eyebrow="Программы"
        title="Направления обучения"
        description="Погружение в ключевые дисциплины с упором на практику и индивидуальные творческие проекты."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <Card key={program.title} className="flex flex-col justify-between bg-white/90">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-dark">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Button variant="outline" className="px-4 py-2">
                Подробнее
              </Button>
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                4 года
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
