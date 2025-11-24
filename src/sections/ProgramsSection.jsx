import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { Button } from "../components/Button";
import { useTranslation } from "react-i18next";

export default function ProgramsSection() {
  const { t } = useTranslation();
  const programs = t("programs");

  return (
    <section id="programs" className="container-edge space-y-8 py-14 md:py-16">
      <SectionTitle
        eyebrow={programs.eyebrow}
        title={programs.title}
        description={programs.description}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {programs.list.map((program) => (
          <Card key={program.title} className="flex flex-col justify-between bg-white/90">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-dark">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Button variant="outline" className="px-4 py-2">
                {programs.cta}
              </Button>
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                {programs.duration}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
