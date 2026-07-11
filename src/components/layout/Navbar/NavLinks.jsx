import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useActivePath } from "@/hooks";
import { NAV_LINKS } from "@/data/navigation";
import MegaMenu from "./MegaMenu";

export default function NavLinks({ activeDropdown, setActiveDropdown }) {
  const { isActive } = useActivePath();

  return (
    <ul className="flex items-center gap-2">
      {NAV_LINKS.map((link) => {
        const active = isActive(link.href);
        const hasSubmenu = link.submenu;
        
        return (
          <li 
            key={link.href}
            className="relative"
            onMouseEnter={() => hasSubmenu && setActiveDropdown(link.href)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={link.href}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                active 
                  ? "text-yellow-300" 
                  : "text-yellow-400 hover:text-yellow-200"
              }`}
            >
              <span>{link.label}</span>
              {hasSubmenu && (
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-300 ${
                    activeDropdown === link.href ? "rotate-180" : ""
                  }`}
                />
              )}
              
              {active && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-yellow-400 rounded-full" />
              )}
            </Link>

            {hasSubmenu && activeDropdown === link.href && (
              <MegaMenu submenu={link.submenu} href={link.href} label={link.label} />
            )}
          </li>
        );
      })}
    </ul>
  );
}