export default function DocumentsSection({ documents }) {
  if (!documents?.length) return null;

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-4">
        {documents.map((doc, idx) => (
          <div key={idx} className="border border-[#d1d1d1] rounded-sm shadow-sm">
            {doc.title && (
              <div className="bg-[#751715] text-white px-4 py-2 text-sm font-semibold">
                {doc.title}
              </div>
            )}
            <div className="px-4 py-4 text-sm leading-relaxed text-[#222] whitespace-pre-line">
              {doc.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
