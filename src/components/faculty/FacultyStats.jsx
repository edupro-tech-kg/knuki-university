import statsBg from "../../assets/images/statsBg.jpg";
import SectionHeading from "./SectionHeading";

export default function FacultyStats({ stats, heading }) {
  if (!stats?.length) return null;

  return (
    <section className="bg-white">
      <SectionHeading text={heading} />
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${statsBg})` }}>
        <div className="bg-black/70">
          <div className="max-w-[1200px] mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="
                    h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36
                    rounded-full border-2 border-white 
                    flex flex-col items-center justify-center
                    text-white bg-black/30
                  "
                >
                  <div className="flex-1 flex items-center justify-center min-h-[50%]">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-none">
                      {stat.value}
                    </span>
                  </div>
                  <div className="flex-1 flex items-start justify-center min-h-[50%] px-2">
                    <span className="text-[11px] sm:text-xs md:text-sm text-center leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
