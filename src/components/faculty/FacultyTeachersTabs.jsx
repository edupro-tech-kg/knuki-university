import { useState } from "react";

export default function FacultyTeachersTabs({ groups }) {
  const validGroups = groups?.filter((g) => g && g.title && g.teachers?.length);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!validGroups?.length) return null;
  const activeGroup = validGroups[Math.min(activeIndex, validGroups.length - 1)];

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-10 space-y-5">
        <div className="flex flex-wrap gap-2 bg-white p-2 rounded-sm shadow-sm border border-[#e3e3e3]">
          {validGroups.map((group, idx) => (
            <button
              key={group.title}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-sm border text-sm font-medium transition ${
                idx === activeIndex
                  ? "bg-white border-[#751715] text-[#751715] shadow-sm"
                  : "bg-[#a52a2a] text-white border-[#8c1f1f] hover:bg-[#8c1f1f]"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {activeGroup.teachers.map((teacher, idx) => (
          <div
            key={`${activeGroup.title}-${idx}`}
            className="bg-[#7a1d1d] text-white border border-[#691717] rounded-sm shadow-md flex flex-col md:flex-row"
          >
            <div className="md:w-40 lg:w-44 shrink-0">
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="h-full w-full object-cover md:min-h-[240px]"
              />
            </div>
            <div className="flex-1 p-4 md:p-6 space-y-3">
              <p className="text-lg font-semibold leading-snug">{teacher.name}</p>
              {teacher.position && (
                <p className="text-sm font-medium text-white/90">{teacher.position}</p>
              )}
              <p className="text-sm leading-relaxed text-white/90 whitespace-pre-line">
                {teacher.description}
              </p>
              {teacher.subtitle && (
                <p className="text-sm font-medium text-white/90">{teacher.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
