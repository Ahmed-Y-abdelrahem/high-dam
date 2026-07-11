export default function GoldLine({ align = "left", className = "" }) {
  const alignment = align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "";
  return <div className={`h-[2px] w-16 bg-yellow-500 ${alignment} ${className}`} />;
}