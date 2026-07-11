import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300";

const variants = {
  primary: "bg-teal-700 text-white hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-700/20",
  secondary: "bg-yellow-500 text-teal-900 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20",
  outline: "border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white",
  outlineLight: "border border-white/30 text-white hover:border-yellow-500 hover:bg-yellow-500 hover:text-teal-900",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}