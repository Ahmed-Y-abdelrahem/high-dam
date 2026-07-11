/**
 * Reusable info card for contact/details sections
 * @param {React.ReactNode} icon - Icon element
 * @param {string} label - Label text
 * @param {React.ReactNode} children - Value content
 */
export default function InfoCard({ icon, label, children }) {
  return (
    <li className="flex items-start gap-3 group">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 transition-colors group-hover:bg-yellow-400">
        <div className="text-yellow-400 transition-colors group-hover:text-teal-900">
          {icon}
        </div>
      </div>
      <div className="pt-1.5">
        <p className="text-xs text-white/50 mb-0.5">{label}</p>
        <div className="text-white/80">{children}</div>
      </div>
    </li>
  );
}