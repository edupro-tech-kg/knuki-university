export default function FacultyHero({
  title,
  description,
  heroImage,
  heroBackground,
  studyForms,
  duration,
}) {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 pt-48 md:pt-24 lg:pt-36">
        <div className="py-6 md:py-8 lg:py-10 text-center">
          <h1 className="text-[#751715] text-2xl md:text-4xl font-serif italic leading-tight">
            {title}
          </h1>
        </div>
      </div>

      <div
        className="relative"
        style={{
          backgroundImage: heroBackground ? `url(${heroBackground})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-[1200px] mx-auto px-4 py-8 md:py-14 flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start">
          <div className="bg-[#751715] rounded-sm shadow-lg p-4 md:p-8 w-full md:w-[420px] lg:w-[460px] flex justify-center mt-4 md:mt-0">
            <div className="h-56 w-56 md:h-96 md:w-96 rounded-full overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl bg-white">
              <img 
                src={heroImage} 
                alt={title} 
                className="h-full w-full object-cover" 
              />
            </div>
          </div>

          <div className="flex-1 text-white">
            <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
              {description}
            </p>

            {studyForms && (
              <div className="mt-4 md:mt-6 space-y-2 text-sm md:text-base">
                <p className="font-extrabold uppercase tracking-tight">
                  ФАКУЛЬТЕТТИН ОКУУ ФОРМАСЫ:
                </p>
                <p className="text-white/90">{studyForms}</p>
              </div>
            )}

            {duration && (
              <div className="mt-3 md:mt-4 space-y-2 text-sm md:text-base">
                <p className="font-extrabold uppercase tracking-tight">ОКУУ МӨӨНӨТҮ:</p>
                <p className="text-white/90">{duration}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}