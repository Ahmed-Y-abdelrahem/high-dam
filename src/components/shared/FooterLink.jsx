import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Reusable footer link with animated arrow
 * @param {string} href - Link destination
 * @param {React.ReactNode} children - Link text
 */
export default function FooterLink({ href, children }) {
  return (
    <Link 
      href={href}
      className="group flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors"
    >
      <ArrowRight 
        size={12} 
        className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" 
      />
      <span>{children}</span>
    </Link>
  );
}