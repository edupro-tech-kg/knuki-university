export default function FacultyInfoBlocks({
  infoColumns = [],
  programBlocks = [],
  programHeading,
  layout = "split", // "split" (text + cards) or "cards"
}) {
  if (!infoColumns.length && !programBlocks.length) return null;

  const renderCard = (label, idx) => (
    <div
      key={idx}
      className="bg-[#751715] text-white rounded-sm shadow-md px-4 py-6 text-center border border-[#5f1112] flex flex-col items-center justify-center gap-3"
    >
      <span className="h-8 w-8 rounded-full bg-white text-[#751715] text-sm font-semibold flex items-center justify-center">
        {idx + 1}
      </span>
      <p className="text-sm md:text-base leading-snug">{label}</p>
    </div>
  );

  if (layout === "cards" || (!infoColumns.length && programBlocks.length)) {
    return (
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          {programHeading && (
            <h3 className="text-center text-base md:text-lg font-semibold mb-6 uppercase">
              {programHeading}
            </h3>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {programBlocks.map((label, idx) => renderCard(label, idx))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10">
          <div className="space-y-8">
            {infoColumns.map((col, idx) => (
              <div key={idx} className="space-y-3">
                {col.title && (
                  <h3 className="text-base md:text-lg font-semibold uppercase text-[#151515]">
                    {col.title}
                  </h3>
                )}
                {col.subtitle && (
                  <p className="text-sm font-semibold text-[#151515]">{col.subtitle}</p>
                )}
                <ul className="space-y-1 text-sm leading-snug text-[#111] list-none">
                  {col.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {programBlocks.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
              {programBlocks.map((label, idx) => renderCard(label, idx))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
