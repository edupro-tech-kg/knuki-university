import clsx from "clsx";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

const variants = {
  primary: "bg-primary text-white shadow-soft hover:opacity-95 focus-visible:ring-offset-light",
  ghost:
    "border border-white/60 text-white hover:bg-white/10 focus-visible:ring-white/80 focus-visible:ring-offset-transparent",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-offset-light",
};

export function Button({ children, variant = "primary", className, ...props }) {
  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
