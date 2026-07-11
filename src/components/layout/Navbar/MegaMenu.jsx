import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MegaMenu({ submenu, href, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden"
    >
      <div className="p-2">
        {submenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-teal-50 transition-colors group/item"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-100 group-hover/item:bg-yellow-400 transition-colors">
              <ArrowRight size={14} className="text-teal-700 group-hover/item:text-teal-900" />
            </div>
            <div>
              <p className="text-sm font-semibold text-teal-900 group-hover/item:text-teal-700">
                {item.label}
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-200 p-3 bg-gray-50">
        <Link 
          href={href}
          className="flex items-center justify-center gap-2 text-sm font-semibold text-teal-700 hover:text-yellow-600 transition-colors"
        >
          View All {label}
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}