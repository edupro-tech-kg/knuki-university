export default function SectionHeading({ text }) {
  if (!text) return null;
  return (
    <div className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-6 text-center">
        <p className="text-[#2b2b2b] text-base md:text-lg font-serif italic uppercase tracking-tight">
          {text}
        </p>
      </div>
    </div>
  );
}
