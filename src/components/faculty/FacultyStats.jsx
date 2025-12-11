import statsBg from "../../assets/images/mission2image.png";
import SectionHeading from "./SectionHeading";

export default function FacultyStats({ stats, heading }) {
  if (!stats?.length) return null;

  return (
    <section className="bg-white">
      <SectionHeading text={heading} />
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${statsBg})` }}
      >
        <div className="bg-black/70">
          <div className="max-w-[1200px] mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="h-28 w-28 rounded-full border-2 border-white flex flex-col items-center justify-center text-white bg-black/30"
                >
                  <span className="text-2xl font-semibold leading-none">{stat.value}</span>
                  <span className="text-[11px] text-center px-3 mt-2 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
