export default function SectionLabel({ index, label, dark = false }) {
  return (
    <p className={`readout mb-4 text-xs font-medium tracking-widest ${dark ? "text-yellow-400" : "text-teal-700"}`}>
      {index ? `// ${index} — ${label}` : label}
    </p>
  );
}