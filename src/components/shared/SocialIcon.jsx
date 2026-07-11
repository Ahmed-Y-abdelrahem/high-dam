/**
 * Reusable social media icon button
 * @param {React.ReactNode} icon - SVG icon
 * @param {string} href - Social profile URL
 * @param {string} label - Platform name
 */
export default function SocialIcon({ icon, href, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-yellow-400"
    >
      {icon}
    </a>
  );
}