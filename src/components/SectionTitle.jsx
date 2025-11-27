export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? <span className="pill bg-primary/10 text-primary">{eyebrow}</span> : null}
      <h2 className="text-3xl font-serif font-semibold text-dark md:text-4xl">{title}</h2>
      {description ? <p className="text-base text-gray-600 md:max-w-2xl">{description}</p> : null}
    </div>
  );
}
