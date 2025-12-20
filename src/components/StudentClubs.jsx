import { useState } from "react";
import { useTranslation } from "react-i18next";

function ClubGroup({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClub = items[Math.min(activeIndex, items.length - 1)];

  return (
    <div className="bg-[#7a1d1d] text-white rounded-lg border border-[#a62623] overflow-hidden">
      <div
        className="bg-[#a62623] flex flex-wrap gap-2 items-center justify-center"
        style={{ padding: "7.91px", borderRadius: "15.81px" }}
      >
        {items.map((club, idx) => (
          <button
            key={club.key || club.name}
            onClick={() => setActiveIndex(idx)}
            className={`w-full sm:w-auto rounded-md border text-sm font-semibold transition-colors flex items-center justify-center text-center`
              + ` ${idx === (activeIndex ?? 0)
                ? "bg-white text-[#7a1d1d] border-white"
                : "bg-[#7a1d1d] text-white border-[#a62623] hover:bg-[#8c1f1f]"}`
            }
            style={{
              borderRadius: "11.86px",
              minWidth: "220px",
              padding: "26px",
            }}
          >
            {club.name}
          </button>
        ))}
      </div>

      {activeClub && (
        <div className="p-4 sm:p-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-4 md:gap-8 items-center">
            <div className="w-full flex justify-center">
              <div
                className="bg-white rounded-md overflow-hidden"
                style={{
                  width: "100%",
                  maxWidth: "691px",
                  height: "458px",
                  borderRadius: "8px",
                  border: "6px solid #fff",
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
                  <div className="w-full h-full flex items-center justify-center text-white/70 text-sm">
                    {activeClub.name}
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg md:text-xl font-semibold">{activeClub.name}</h4>
              <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
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
  const groups = [
    clubs.slice(0, 3).filter(Boolean),
    clubs.slice(3, 6).filter(Boolean),
  ].filter((group) => group.length);

  if (!groups.length) return null;

  return (
    <section className="mt-10 space-y-8">
      <div className="container-edge space-y-8">
        {groups.map((group, idx) => (
          <ClubGroup key={`club-group-${idx}`} items={group} />
        ))}
      </div>
    </section>
  );
}
