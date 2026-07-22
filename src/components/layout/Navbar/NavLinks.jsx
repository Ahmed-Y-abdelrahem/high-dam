"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavLinks({ activeDropdown, setActiveDropdown }) {
  const locale = useLocale();
  const t = useTranslations('nav');
  const tServices = useTranslations('services');
  const tIndustries = useTranslations('industries');

  // ✅ روابط الخدمات (تم تحديث الـ href لتطابق الروابط الصحيحة التي أرسلتها تماماً)
  const servicesLinks = [
    { href: "/services/civil-works", label: tServices('civilWorks'), desc: tServices('civilWorksDesc') },
    { href: "/services/mechanical-installations", label: tServices('mechanical'), desc: tServices('mechanicalDesc') }, // تم التعديل
    { href: "/services/electrical-mep", label: tServices('electrical'), desc: tServices('electricalDesc') },
    { href: "/services/dewatering-shoring", label: tServices('dewatering'), desc: tServices('dewateringDesc') }, // تم التعديل
    { href: "/services/manpower-equipment", label: tServices('manpower'), desc: tServices('manpowerDesc') }, // تم التعديل
    { href: "/services/interior-fitout", label: tServices('interiorFitOut'), desc: tServices('interiorFitOutDesc') },
  ];

  // ✅ روابط القطاعات
  const industriesLinks = [
    { href: "/industries/epc-industrial", label: tIndustries('epc') },
    { href: "/industries/infrastructure-civil", label: tIndustries('infrastructure') },
    { href: "/industries/healthcare-medical", label: tIndustries('healthcare') },
    { href: "/industries/hospitality-residential", label: tIndustries('hospitality') },
    { href: "/industries/commercial-corporate", label: tIndustries('commercial') },
  ];

  // ✅ دالة ذكية لإضافة اللغة للرابط الداخلي فقط
  const getLocalizedHref = (href) => {
    if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) {
      return href;
    }
    // إزالة الشرطة المائلة الأولى إن وجدت لتجنب تكرارها
    const cleanHref = href.startsWith('/') ? href.slice(1) : href;
    return `/${locale}/${cleanHref}`;
  };

  return (
    <>
      {/* Services Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown('services')}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="flex items-center gap-1 px-4 py-2 text-yellow-400 hover:text-yellow-300 transition-colors">
          <span>{t('services')}</span>
          <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 pt-4 z-50"
            >
              <div 
                className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 min-w-[320px]"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="space-y-1">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={getLocalizedHref(link.href)}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                        <ArrowRight size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{link.label}</p>
                        <p className="text-sm text-gray-500">{link.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href={getLocalizedHref('/services')}
                    className="flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>{tServices('viewAll')}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Industries Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown('industries')}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="flex items-center gap-1 px-4 py-2 text-yellow-400 hover:text-yellow-300 transition-colors">
          <span>{t('industries')}</span>
          <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {activeDropdown === 'industries' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 pt-4 z-50"
            >
              <div 
                className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 min-w-[280px]"
                onMouseEnter={() => setActiveDropdown('industries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="space-y-2">
                  {industriesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={getLocalizedHref(link.href)}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href={getLocalizedHref('/industries')}
                    className="flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>{tIndustries('viewAll')}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* الروابط العادية الأخرى */}
      <Link href={getLocalizedHref('/about')} className="px-4 py-2 text-yellow-400 hover:text-yellow-300 transition-colors">
        {t('about')}
      </Link>
      
      <Link href={getLocalizedHref('/projects')} className="px-4 py-2 text-yellow-400 hover:text-yellow-300 transition-colors">
        {t('projects')}
      </Link>
      
      <Link href={getLocalizedHref('/hse')} className="px-4 py-2 text-yellow-400 hover:text-yellow-300 transition-colors">
        {t('hse')}
      </Link>
      
      <Link href={getLocalizedHref('/careers')} className="px-4 py-2 text-yellow-400 hover:text-yellow-300 transition-colors">
        {t('careers')}
      </Link>
    </>
  );
}