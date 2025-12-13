import React from 'react';

export default function FacultyInfoBlocks({
  infoColumns = [],
  programBlocks = [],
  programHeading,
  layout = "split",
}) {
  if (!infoColumns.length && !programBlocks.length) return null;

  const renderCard = (label, idx) => (
    <div
      className="
        bg-[#751715] text-white
        rounded-sm border border-[#5f1112]
        flex flex-col items-center
        gap-2
        min-h-28
        px-4 py-4
        w-full
      "
    >
      <span
        className="
          h-8 w-8
          rounded-full
          bg-white text-[#751715]
          text-sm font-semibold
          flex items-center justify-center
          shrink-0
        "
      >
        {idx + 1}
      </span>

      <p className="text-sm text-center leading-snug">
        {label}
      </p>
    </div>
  );

  const CardsRow = () => (
    <div className="
      overflow-x-auto 
      -mx-4 px-4
      pb-1
      touch-pan-x
      md:overflow-x-visible
      md:mx-0 md:px-0
      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
    ">
      <div className="
        flex gap-3
        min-w-max
        md:min-w-0
        md:flex-wrap
        md:justify-center
        md:gap-4
      ">
        {programBlocks.map((label, idx) => (
          <div
            key={`${label}-${idx}`}
            className="
              shrink-0
              w-[85vw] max-w-[300px]
              md:w-[calc(33.333%-1rem)] 
              md:max-w-[280px]
              md:shrink
            "
          >
            {renderCard(label, idx)}
          </div>
        ))}
      </div>
    </div>
  );

  /* ===== ТОЛЬКО КАРТОЧКИ ===== */
  if (layout === "cards" || (!infoColumns.length && programBlocks.length)) {
    return (
      <section className="bg-white">
        <div className="px-4 py-6 md:px-6 md:py-8">
          {programHeading && (
            <h3 className="text-center text-base md:text-lg font-semibold mb-4 md:mb-6 uppercase">
              {programHeading}
            </h3>
          )}
          <CardsRow />
        </div>
      </section>
    );
  }

  /* ===== ТЕКСТ + КАРТОЧКИ ===== */
  return (
    <section className="bg-white">
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-[minmax(300px,2fr)_3fr] md:gap-8 lg:gap-12">
          {/* текст */}
          <div className="space-y-6">
            {infoColumns.map((col, idx) => (
              <div 
                key={`col-${idx}`} 
                className="space-y-3"
              >
                {col.title && (
                  <h3 className="text-base md:text-lg font-semibold uppercase text-[#151515]">
                    {col.title}
                  </h3>
                )}
                {col.subtitle && (
                  <p className="text-sm font-semibold text-[#151515]">
                    {col.subtitle}
                  </p>
                )}
                {col.items?.length > 0 && (
                  <ul className="space-y-2 text-sm md:text-base leading-relaxed text-[#111]">
                    {col.items.map((item, i) => (
                      <li 
                        key={i}
                        className="flex items-start"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#751715] mt-2 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* карточки */}
          {programBlocks.length > 0 && (
            <div className="md:pt-4">
              {programHeading && (
                <h3 className="text-base md:text-lg font-semibold mb-4 uppercase text-[#151515] md:hidden">
                  {programHeading}
                </h3>
              )}
              <CardsRow />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}