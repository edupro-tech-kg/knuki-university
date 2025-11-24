import clsx from "clsx";

const baseStyles =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark placeholder-gray-400 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition";

export default function Input({ label, type = "text", textarea = false, className, ...props }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-dark/80">
      {label}
      {textarea ? (
        <textarea className={clsx(baseStyles, "min-h-[140px] resize-none", className)} {...props} />
      ) : (
        <input type={type} className={clsx(baseStyles, className)} {...props} />
      )}
    </label>
  );
}
