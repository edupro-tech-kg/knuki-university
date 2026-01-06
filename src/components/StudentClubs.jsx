import { useState } from "react";
import { useTranslation } from "react-i18next";

function ClubGroup({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClub = items[activeIndex] || items[0];

  return (
    <div className="bg-[#7a1d1d] text-white border-2 border-[#a62623] overflow-hidden">
      <div className="bg-[#a62623] flex items-center justify-center p-2 sm:p-4 overflow-x-auto">
        <div className="flex flex-nowrap gap-2 sm:gap-3 items-center justify-center min-w-min">
          {items.map((club, idx) => (
            <button
              key={club.key || club.name}
              onClick={() => setActiveIndex(idx)}
              className={`
                flex-shrink-0 rounded-xl border-2 font-semibold 
                transition-colors flex items-center justify-center text-center
                px-4 sm:px-6 py-3 h-[60px] whitespace-nowrap
                ${idx === activeIndex
                  ? "bg-white text-black border-white"
                  : "bg-[#7a1d1d] text-white border-[#902321] hover:bg-[#8c1f1f]" 
                }
              `}
              style={{
                fontSize: "clamp(0.75rem, 2vw, 1rem)", 
              }}
            >
              {club.name}
            </button>
          ))}
        </div>
      </div>

      {activeClub && (
        <div className="p-4 sm:p-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-12 items-center">
            <div className="w-full flex justify-center">
              <div
                className="bg-white rounded-lg overflow-hidden border-4 border-white"
                style={{
                  aspectRatio: "691/458", 
                  width: "100%",
                  maxWidth: "min(691px, 100%)", 
                }}
              >
                {activeClub.image ? (
                  <img
                    src={activeClub.image}
                    alt={activeClub.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white/70 text-sm">
                    {activeClub.name}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-xl sm:text-2xl font-semibold">{activeClub.name}</h4>
              <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {activeClub.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StudentClubs() {
  const { t } = useTranslation();
  const clubs = t("studentClubs", { returnObjects: true }) || [];
  const chunkSize = 3;
  const groups = [];
  for (let i = 0; i < clubs.length; i += chunkSize) {
    const group = clubs.slice(i, i + chunkSize).filter(Boolean);
    if (group.length) groups.push(group);
  }

  if (!groups.length) return null;

  return (
    <section className="mt-8 sm:mt-12 lg:mt-16 space-y-8 sm:space-y-12 mb-12 sm:mb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {groups.map((group, idx) => (
          <ClubGroup key={`club-group-${idx}`} items={group} />
        ))}
      </div>
    </section>
  );
}