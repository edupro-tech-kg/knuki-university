import clsx from "clsx";

export default function Card({ children, className }) {
  return <div className={clsx("section-surface p-6 md:p-7", className)}>{children}</div>;
}
