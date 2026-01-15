export default function TeachersSection({ teachers }) {
  if (!teachers?.length) return null;

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-10 space-y-5">
        {teachers.map((teacher, idx) => (
          <div
            key={idx}
            className="bg-[#751715] text-white border border-[#5f1112] rounded-sm shadow-md flex flex-col md:flex-row"
          >
            <div className="w-full md:w-36 lg:w-40 shrink-0">
              <div className="w-full h-56 md:h-full md:min-h-[200px] overflow-hidden bg-black/10">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="flex-1 p-4 md:p-6 space-y-3">
              <div className="flex flex-wrap gap-2">
                {teacher.tags?.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="bg-white text-[#751715] text-[11px] font-semibold px-2 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-semibold text-base leading-tight">{teacher.name}</p>
              {teacher.position && (
                <p className="text-sm font-medium text-white/90">{teacher.position}</p>
              )}
              <p className="text-sm leading-relaxed text-white/90 whitespace-pre-line">
                {teacher.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
