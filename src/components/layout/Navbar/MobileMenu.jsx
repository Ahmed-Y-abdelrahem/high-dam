import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { useActivePath } from "@/hooks";

export default function MobileMenu({ open }) {
  const { isActive } = useActivePath();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-teal-950/98 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col h-full py-8 px-6">
            <div className="flex-1 overflow-y-auto">
              <nav className="space-y-1">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-4 border-b border-white/10 transition-colors ${
                          active 
                            ? "text-yellow-400" 
                            : "text-yellow-400/80 hover:text-yellow-300"
                        }`}
                      >
                        <span className="text-lg font-medium">{link.label}</span>
                        <ArrowRight size={18} className={active ? "text-yellow-400" : "text-yellow-400/30"} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 space-y-4"
              >
                <a 
                  href="tel:+966138996997"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10">
                    <Phone size={18} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Call Us</p>
                    <p className="text-sm font-semibold text-white">+966 13 899 6997</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@high-dam.co"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10">
                    <Mail size={18} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Email Us</p>
                    <p className="text-sm font-semibold text-white">info@high-dam.co</p>
                  </div>
                </a>

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-teal-900 py-4 rounded-xl font-semibold transition-colors"
                >
                  <span>Get In Touch</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>© 2026 High Dam Group</span>
                <span>All Rights Reserved</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}