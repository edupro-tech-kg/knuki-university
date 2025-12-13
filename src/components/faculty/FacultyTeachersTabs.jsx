import { useState } from "react";

export default function FacultyTeachersTabs({ groups }) {
  const validGroups = groups?.filter((g) => g && g.title && g.teachers?.length);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!validGroups?.length) return null;
  const activeGroup = validGroups[Math.min(activeIndex, validGroups.length - 1)];

  return (
    <section className="w-full bg-[#751715] py-10">
      <div className="max-w-[1200px] mx-auto px-4 space-y-8">

        {/* Tabs */}
        <div className="bg-[#A62623] p-2 rounded-xl border border-[#751715]">
          <div className="flex flex-wrap gap-2">
            {validGroups.map((group, idx) => (
              <button
                key={group.title}
                onClick={() => setActiveIndex(idx)}
                className={`flex-1 min-w-[140px] md:min-w-[160px] px-4 py-3 rounded-md text-sm font-medium transition-colors border text-center
                  ${idx === activeIndex
                    ? "bg-white text-[#751715] border-[#751715] shadow-sm"
                    : "bg-[#751715] text-white border-[#A62623] hover:bg-[#8c1f1f] hover:border-[#8c1f1f]"}
                `}
              >
                <span className="line-clamp-2">{group.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Teacher Cards */}
        <div className="space-y-6">
          {activeGroup.teachers.map((teacher, idx) => (
            <div
              key={`${activeGroup.title}-${idx}`}
              className="bg-[#A62623] text-white border border-[#751715] rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden"
            >

              {/* Photo */}
              <div className="md:w-48 lg:w-56 flex-none p-5 md:p-7">
                <div className="w-full h-[220px] md:h-[240px] lg:h-[260px] border-2 border-white rounded-md overflow-hidden">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 md:p-7 flex flex-col min-h-0">
                {/* Основной контент, который занимает доступное пространство */}
                <div className="space-y-3 flex-1">
                  <p className="text-xl font-semibold leading-snug">{teacher.name}</p>

                  {teacher.position && (
                    <p className="text-sm font-medium text-white/90">{teacher.position}</p>
                  )}

                  {teacher.description && (
                    <p className="text-sm leading-relaxed text-white/90 whitespace-pre-line">{teacher.description}</p>
                  )}
                </div>

                {/* Подзаголовок всегда снизу */}
                {teacher.subtitle && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm font-medium text-gray-300">{teacher.subtitle}</p>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}