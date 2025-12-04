import React from "react";

export default function AnimatedOrnament({ speed = 20, height = "50px" }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex scroll-animation gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <img 
            key={i}
            src="/src/assets/svg/patterns.svg" 
            alt="ornament pattern" 
            className="flex-shrink-0"
            style={{ height }}
          />
        ))}
      </div>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-animation {
          display: flex;
          width: calc(200%);
          animation: scrollLeft ${speed}s linear infinite;
        }
      `}</style>
    </div>
  );
}