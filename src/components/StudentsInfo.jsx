import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

function StudentsInfo() {
  const { t } = useTranslation();
  const students = t("studentsInfo", { returnObjects: true });
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    // если дошли до конца
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
      el.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mt-8 px-4 container-edge">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="
                    mx-auto max-w-7xl
                    flex gap-4 overflow-x-auto
                    md:grid md:grid-cols-2 lg:grid-cols-4
                    md:gap-6 md:overflow-visible
                    scrollbar-none
                "
      >
        <style jsx>{`
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {students.map((item, index) => (
          <div
            key={index}
            className="
                            flex-shrink-0
                            w-[85%] sm:w-[70%] md:w-auto
                            bg-white
                            rounded-xl md:rounded-none
                            border border-gray-200 md:border-none
                            shadow-sm md:shadow-none
                            p-4
                            flex flex-col items-center text-center
                        "
          >
            <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <h4 className="text-lg font-semibold mb-2">{item.name}</h4>

            <p className="text-gray-600 text-sm md:text-base">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StudentsInfo;
