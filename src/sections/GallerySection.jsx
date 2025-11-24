import SectionTitle from "../components/SectionTitle";
import { gallery } from "../data/content";

export default function GallerySection() {
  return (
    <section id="gallery" className="container-edge space-y-8 py-14 md:py-16">
      <SectionTitle
        eyebrow="Галерея"
        title="Жизнь университета"
        description="Постановки, репетиции, закулисье и кадры из учебного процесса."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {gallery.map((item) => (
          <div
            key={item.title}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 shadow-card"
            style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent transition group-hover:from-primary/70"></div>
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-dark">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
