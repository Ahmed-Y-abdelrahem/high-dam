"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl"; // ✅ 1. استيراد أدوات الترجمة
import Container from "@/components/ui/Container";
import { useScrollPosition } from "@/hooks";
import TopBar from "./TopBar";
import NavbarLogo from "./NavbarLogo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

export default function Navbar() {
  const scrolled = useScrollPosition(20);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // ✅ 2. الحصول على اللغة الحالية ودالة الترجمة
  const locale = useLocale();
  const t = useTranslations('mobileMenu');

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      
      <div
        className={`transition-all duration-500 ${
          scrolled 
            ? "bg-brand-900/98 backdrop-blur-xl shadow-2xl shadow-brand-900/30" 
            : "bg-brand-900/90 backdrop-blur-md"
        }`}
      >
        <Container>
          <div className="flex h-24 items-center justify-between">
            {/* اللوجو */}
            <NavbarLogo />

            {/* روابط سطح المكتب */}
            <nav className="hidden lg:flex items-center">
              <NavLinks 
                activeDropdown={activeDropdown} 
                setActiveDropdown={setActiveDropdown} 
              />
            </nav>

            {/* زر التواصل ومبدل اللغة (سطح المكتب فقط) */}
            <div className="hidden lg:flex items-center gap-4">
              
              
              {/* ✅ 3. الزر محدث ليحتوي على اللغة والترجمة */}
              <a
                href={`/${locale}/contact`}
                className="relative inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-brand-900 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 group"
              >
                <span>{t('getInTouch')}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* زر القائمة للموبايل */}
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
              </AnimatePresence  >
            </button>
          </div>
        </Container>
      </div>

      {/* استدعاء مكون القائمة المنسدلة للموبايل (ملف منفصل) */}
   <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}