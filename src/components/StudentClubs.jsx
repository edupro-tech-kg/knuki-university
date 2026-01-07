import { useState } from "react";
import { useTranslation } from "react-i18next";

function ClubGroup({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClub = items[activeIndex] || items[0];

  return (
    <section className="w-full bg-[#751715] py-10">
      <div className="max-w-[1200px] mx-auto px-4 space-y-8">

        {/* Tabs */}
        <div className="bg-[#A62623] p-2 rounded-xl border border-[#751715]">
          <div className="grid md:grid-cols-3  gap-2 px-1 pb-1 sm:px-0 sm:pb-0">
            {items.map((club, idx) => (
              <button
                key={club.key || club.name}
                onClick={() => setActiveIndex(idx)}
                className={`flex-1 min-w-[180px] sm:min-w-[160px] px-4 py-3 rounded-md text-sm font-medium transition-colors border text-center
                ${idx === activeIndex
                    ? "bg-white text-[#751715] border-[#751715] shadow-sm"
                    : "bg-[#751715] text-white border-[#A62623] hover:bg-[#8c1f1f] hover:border-[#8c1f1f]"}
              `}
              >
                <span className="line-clamp-2">{club.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Teacher Cards */}
        <div className="space-y-6">
          {activeClub && (
            <div
              className="bg-[#A62623] text-white border border-[#751715] rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden"
            >

              {/* Photo */}
              <div className="w-full md:w-48 lg:w-56 flex-shrink-0 p-5 md:p-7">
                <div className="w-full h-56 md:h-[240px] lg:h-[260px] border-2 border-white rounded-md overflow-hidden">
                  <img
                    src={activeClub.image}
                    alt={activeClub.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="mt-4 md:hidden text-xl font-semibold leading-snug">{activeClub.name}</p>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 md:p-7 flex flex-col min-h-0">
                {/* Основной контент, который занимает доступное пространство */}
                <div className="space-y-3 flex-1">
                  <p className="hidden md:flex text-xl font-semibold leading-snug">{activeClub.name}</p>

                  {activeClub.position && (
                    <p className="text-sm font-medium text-white/90">{activeClub.position}</p>
                  )}

                  {activeClub.description && (
                    <p className="text-sm leading-relaxed text-white/90 whitespace-pre-line">{activeClub.description}</p>
                  )}
                </div>

                {/* Подзаголовок всегда снизу */}
                {activeClub.subtitle && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm font-medium text-gray-300">{activeClub.subtitle}</p>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
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
      <div className="mx-auto ">
        {groups.map((group, idx) => (
          <ClubGroup key={`club-group-${idx}`} items={group} />
        ))}
      </div>
    </section>
  );
}
