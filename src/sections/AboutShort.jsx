import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

export default function AboutShort() {
  const { t } = useTranslation();
  const about = t("about");

  return (
    <section id="about" className="container-edge -mt-12 space-y-8">
      <Card className="bg-about-pattern text-dark">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <SectionTitle
              eyebrow={about.eyebrow}
              title={about.title}
              description={about.description}
            />
            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-dark">
              {about.highlights.map((item) => (
                <div key={item.value} className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  <p className="text-2xl font-semibold text-primary">{item.value}</p>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/70 to-dark/80"></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent"></div>
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-dark">
                {about.badge}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
