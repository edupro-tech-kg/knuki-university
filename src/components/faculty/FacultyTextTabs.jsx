import { useState } from "react";

export default function FacultyTextTabs({ tabs, activeIndex, onTabChange }) {
  const validTabs = tabs?.filter((t) => t && t.title && t.content);
  const [internalIndex, setInternalIndex] = useState(0);
  const currentIndex = activeIndex ?? internalIndex;

  if (!validTabs?.length) return null;
  const activeTab = validTabs[Math.min(currentIndex, validTabs.length - 1)];

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 border border-[#cfcfcf] rounded-sm bg-white px-2 py-2 mb-4">
          {validTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => {
                setInternalIndex(idx);
                onTabChange?.(idx);
              }}
              className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${
                idx === currentIndex
                  ? "bg-white border-[#751715] text-[#751715] shadow-sm"
                  : "bg-[#a52a2a] text-white border-[#8c1f1f] hover:bg-[#8c1f1f]"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="border border-[#cfcfcf] rounded-sm bg-white px-4 py-4 text-sm leading-relaxed whitespace-pre-line">
          {activeTab.content}
        </div>
      </div>
    </section>
  );
}
