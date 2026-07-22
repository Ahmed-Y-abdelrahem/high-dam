"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, X } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";

// ✅ 1. استلام دالة setOpen لإغلاق القائمة
export default function MobileMenu({ open, setOpen }) {
  const locale = useLocale();
  const t = useTranslations('mobileMenu');

  // ✅ 2. دالة ذكية لإصلاح الروابط وإضافة اللغة تلقائياً
  const getLocalizedHref = (href) => {
    if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
      return href;
    }
    // إزالة الشرطة المائلة الأولى إن وجدت لتجنب تكرارها (مثل //en/services)
    const cleanHref = href.startsWith('/') ? href.slice(1) : href;
    return `/${locale}/${cleanHref}`;
  };

  // ✅ 3. دالة لإغلاق القائمة عند الضغط على أي رابط
  const handleLinkClick = () => {
    if (setOpen) setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-brand-950/98 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col h-full py-6 px-6 relative">
            
            {/* زر إغلاق علوي لتحسين تجربة المستخدم */}
            <button 
              onClick={handleLinkClick}
              className="absolute top-6 right-6 p-2 rounded-lg border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="flex-1 overflow-y-auto mt-12">
              <nav className="space-y-2">
                {NAV_LINKS?.map((link, i) => {
                  // ✅ التعامل مع الروابط الفرعية (مثل خدمات: مدني، ميكانيكا، إلخ)
                  if (link.children && link.children.length > 0) {
                    return (
                      <motion.div
                        key={link.href || i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="py-3 border-b border-white/10"
                      >
                        <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                          {link.label}
                        </p>
                        <div className="space-y-3 pl-4 border-l-2 border-white/10">
                          {link.children.map((child, childIndex) => (
                            <Link
                              key={child.href}
                              href={getLocalizedHref(child.href)}
                              onClick={handleLinkClick}
                              className="block text-white/80 hover:text-yellow-400 text-base font-medium transition-colors py-1"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }

                  // ✅ التعامل مع الروابط الرئيسية العادية (Industries, Projects, HSE, Careers)
                  return (
                    <motion.div
                      key={link.href || i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={getLocalizedHref(link.href)}
                        onClick={handleLinkClick}
                        className="flex items-center justify-between py-4 border-b border-white/10 text-yellow-400/80 hover:text-yellow-300 transition-colors"
                      >
                        <span className="text-lg font-medium">{link.label}</span>
                        <ArrowRight size={18} className="text-yellow-400/30" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* قسم معلومات التواصل */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 space-y-4"
              >
                <a href="tel:+966138996997" className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10">
                    <Phone size={18} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{t('callUs')}</p>
                    <p className="text-sm font-semibold text-white">+966 13 899 6997</p>
                  </div>
                </a>

                <a href="mailto:info@high-dam.co" className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10">
                    <Mail size={18} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{t('emailUs')}</p>
                    <p className="text-sm font-semibold text-white">info@high-dam.co</p>
                  </div>
                </a>

                <Link
                  href={`/${locale}/contact`}
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-brand-900 py-4 rounded-xl font-semibold transition-colors"
                >
                  <span>{t('getInTouch')}</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{t('copyright')}</span>
                <span>{t('rights')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}