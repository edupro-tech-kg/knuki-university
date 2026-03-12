import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const HeaderBox = ({ text }) => (
  <div className="w-full rounded-[26px] border-2 border-black bg-white p-3 text-center text-[11px] font-semibold leading-snug">
    {text}
  </div>
);

const ItemBox = ({ text, className = "" }) => (
  <div
    className={`w-full rounded-[18px] border-2 border-black bg-white p-2 text-center text-[11px] font-medium leading-snug ${className}`}
  >
    {text}
  </div>
);

const TallItemBox = ({ text }) => (
  <div className="flex min-h-[96px] w-full items-center justify-center rounded-[18px] border-2 border-black bg-white p-2 text-center text-[11px] font-medium leading-snug">
    {text}
  </div>
);

const Arrow = () => (
  <div className="-my-1 flex flex-col items-center">
    <div className="h-4 w-px bg-black" />
    <div className="h-0 w-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-black" />
  </div>
);

function BusConnectedItem({ text, busGapPx, wrapperRef = null }) {
  return (
    <div ref={wrapperRef} className="relative w-full">
      <ItemBox text={text} />
      <div
        className="absolute top-1/2 flex -translate-y-1/2 items-center"
        style={{ right: -busGapPx }}
      >
        <div className="h-0 w-0 border-b-[4px] border-b-transparent border-r-[7px] border-r-black border-t-[4px] border-t-transparent" />
        <div className="h-px bg-black" style={{ width: Math.max(0, busGapPx - 7) }} />
      </div>
    </div>
  );
}

const FacultyBox = ({ text, isBold = false }) => (
  <div
    className={`rounded-[18px] border-2 border-black bg-white p-3 text-center text-[11px] leading-snug min-h-[74px] flex items-center justify-center ${isBold ? "font-bold" : "font-medium"}`}
  >
    {text}
  </div>
);

export default function UniversityStructureChart() {
  const { t } = useTranslation();
  const content = t("managementStructure", { returnObjects: true, defaultValue: null });
  if (!content?.nodes) return null;

  const titleLines = Array.isArray(content.titleLines) ? content.titleLines : [];
  const n = content.nodes;
  const rightBusGapPx = 56;
  const rightBusContainerRef = useRef(null);
  const tradeUnionRef = useRef(null);
  const [rightBusBottomPx, setRightBusBottomPx] = useState(0);

  useLayoutEffect(() => {
    const container = rightBusContainerRef.current;
    const target = tradeUnionRef.current;
    if (!container || !target) return;

    const update = () => {
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const endY = targetRect.top - containerRect.top + targetRect.height / 2;
      const bottomPx = Math.max(0, containerRect.height - endY);
      setRightBusBottomPx(bottomPx);
    };

    update();

    const observers = [];
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(update);
      ro.observe(container);
      ro.observe(target);
      observers.push(() => ro.disconnect());
    } else {
      window.addEventListener("resize", update);
      observers.push(() => window.removeEventListener("resize", update));
    }

    window.addEventListener("resize", update);
    observers.push(() => window.removeEventListener("resize", update));

    return () => observers.forEach((fn) => fn());
  }, []);

  return (
    <div className="mt-10 flex justify-center px-3 sm:px-4 lg:px-8">
      <div className="w-full overflow-x-auto pb-6">
        <div className="mx-auto w-[1150px] border border-gray-300 bg-white p-10 font-serif text-[10px] uppercase leading-tight text-black">
          {/* Title */}
          {titleLines.length ? (
            <div className="mb-10 text-center">
              {titleLines.map((line, idx) => (
                <p
                  key={`ms-title-${idx}`}
                  className={`${idx === 0 ? "text-xl" : "text-lg"} font-bold`}
                >
                  {line}
                </p>
              ))}
            </div>
          ) : null}

          {/* Top tier (explicit connectors from Rector to both councils) */}
          <div className="mb-6 flex items-center justify-center">
            <div className="w-56 rounded-[28px] border-2 border-black bg-white p-3 text-center font-bold italic">
              {n.academicCouncil}
            </div>
            <div className="h-px w-24 bg-black" aria-hidden />
            <div className="w-36 rounded-[18px] border-2 border-black bg-white p-4 text-center text-sm font-bold">
              {n.rector}
            </div>
            <div className="h-px w-24 bg-black" aria-hidden />
            <div className="w-56 rounded-[28px] border-2 border-black bg-white p-3 text-center font-bold italic">
              {n.supervisoryBoard}
            </div>
          </div>

          {/* Rector to main bar */}
          <div className="flex h-8 justify-center">
            <div className="h-full w-px bg-black" />
          </div>

          {/* Main distribution line + drops (approximate centers per column like the reference image) */}
          <div className="px-10">
            <div className="relative h-px bg-black">
              {[5, 22, 40, 58, 74, 90, 100].map((pos) => (
                <div
                  key={`drop-${pos}`}
                  className="absolute top-0 h-6 w-px bg-black"
                  style={{ left: `${pos}%` }}
                />
              ))}
            </div>

            {/* 6 columns + right bus */}
            <div className="grid grid-cols-[1fr_1fr_1fr_1.05fr_0.9fr_0.9fr] gap-x-4 pt-6">
            {/* Column 1: Academic */}
            <div className="flex flex-col items-center gap-4">
              <HeaderBox text={n.prorectorAcademic} />
              <Arrow />
              <ItemBox text={n.educationalDepartment} />
              <Arrow />
              <ItemBox text={n.eBilim} />
              <Arrow />
              <ItemBox text={n.practiceCareerDepartment} />
              <Arrow />
              <ItemBox text={n.qualificationCenter} />
            </div>

            {/* Column 2: Science */}
            <div className="flex flex-col items-center gap-4">
              <HeaderBox text={n.prorectorScienceIntl} />
              <Arrow />
              <ItemBox text={n.magistracyPostgraduate} />
              <Arrow />
              <ItemBox text={n.library} />
              <Arrow />
              <ItemBox text={n.internationalRelations} />

              {/* Horizontal connector to educational support staff (offset box + clean line like the reference) */}
              <div className="relative mt-4 w-full">
                <div className="absolute left-0 top-1/2 h-px w-8 -translate-y-1/2 bg-black" />
                <ItemBox
                  text={n.educationalSupportStaff}
                  className="ml-8 flex min-h-[56px] items-center justify-center rounded-[22px] p-2"
                />
              </div>
            </div>

            {/* Column 3: State language / student */}
            <div className="flex flex-col items-center gap-4">
              <HeaderBox text={n.prorectorStateLanguageEducation} />
              <Arrow />
              <ItemBox text={n.studentCouncil} />
              <Arrow />
              <ItemBox text={n.dormitory} />
              <Arrow />
              <ItemBox text={n.press} />
            </div>

            {/* Column 4: Administrative / economic */}
            <div className="flex flex-col items-center gap-4">
              <HeaderBox text={n.prorectorAdministrative} />
              <Arrow />
              <ItemBox text={n.juniorServiceStaff} />
              <Arrow />
              <TallItemBox text={n.technicalServiceStaff} />
              <Arrow />
              <ItemBox text={n.civilDefense} />
            </div>

            {/* Column 5: HR / inspector */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <ItemBox text={n.hrDepartment} />
              <Arrow />
              <ItemBox text={n.leadInspector} />
              <Arrow />
              <ItemBox text={n.lawyer} />
              <Arrow />
              <ItemBox text={n.archive} />
            </div>

            {/* Column 6: Right side chain + bus line (improved: connectors are tied to each box, not % offsets) */}
            <div ref={rightBusContainerRef} className="relative pt-4 pr-[56px]">
              {/* Right bus line should end at the last connected item (trade union). */}
              <div
                className="absolute -top-6 right-0 w-px bg-black"
                style={{ bottom: `${rightBusBottomPx}px` }}
              />

              <div className="flex flex-col items-center gap-6">
                <BusConnectedItem text={n.academicSecretary} busGapPx={rightBusGapPx} />
                <BusConnectedItem text={n.accounting} busGapPx={rightBusGapPx} />
                <BusConnectedItem text={n.recordsOfficer} busGapPx={rightBusGapPx} />
                <div className="h-6" />
                <BusConnectedItem
                  text={n.tradeUnion}
                  busGapPx={rightBusGapPx}
                  wrapperRef={tradeUnionRef}
                />
              </div>
            </div>
            </div>
          </div>

          {/* Faculties bottom section */}
          <div className="relative mt-16 border-t-2 border-black pt-10">
            <div className="absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 bg-black" />

            <div className="grid grid-cols-6 gap-3">
              <FacultyBox text={n.facultyChoreographyCulture} />
              <FacultyBox text={n.facultyFolkMusic} />
              <FacultyBox text={n.facultyPopMusicEducation} />
              <FacultyBox text={n.facultyTheater} isBold />
              <FacultyBox text={n.facultyCinemaTv} />
              <FacultyBox text={n.higherLiteratureCourse} isBold />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
