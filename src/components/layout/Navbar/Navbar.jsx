"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { useScrollPosition } from "@/hooks";
import TopBar from "./TopBar";
import NavbarLogo from "./NavbarLogo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const scrolled = useScrollPosition(20);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      
      <div
        className={`transition-all duration-500 ${
          scrolled 
            ? "bg-teal-900/98 backdrop-blur-xl shadow-2xl shadow-teal-900/30" 
            : "bg-teal-900/90 backdrop-blur-md"
        }`}
      >
        <Container>
          <div className="flex h-24 items-center justify-between">
            <NavbarLogo />

            <nav className="hidden lg:flex items-center">
              <NavLinks 
                activeDropdown={activeDropdown} 
                setActiveDropdown={setActiveDropdown} 
              />
            </nav>

            <div className="hidden lg:block">
              <a
                href="/contact"
                className="relative inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-teal-900 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 group"
              >
                <span>Get In Touch</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400 transition-colors"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </div>

      <MobileMenu open={open} />
    </header>
  );
}