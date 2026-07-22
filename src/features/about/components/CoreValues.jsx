"use client";

import { useLocale, useTranslations } from "next-intl"; // ✅ أضفنا useTranslations
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { coreValues } from "@/data/stats";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function CoreValues() {
  const locale = useLocale();
  const t = useTranslations('sections.coreValues'); // ✅ تعريف دالة الترجمة لهذا القسم

  const getText = (field, value) => {
    if (typeof value[field] === 'object' && value[field] !== null) {
      return value[field][locale] || value[field].en;
    }
    return value[field];
  };

  return (
    <section className="bg-gray-50 py-28">
      <Container>
        {/* ✅ استبدلنا النصوص الثابتة بدالة الترجمة */}
        <SectionHeader overline={t('overline')} title={t('title')} />
        
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <motion.div key={value.code} variants={item} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-700 hover:shadow-lg">
              <div className="pointer-events-none absolute -right-6 -top-6 text-7xl font-bold text-gray-100 transition-opacity duration-300 group-hover:opacity-80">
                {value.code}
              </div>
              <p className="text-xs tracking-[0.3em] text-brand-700 font-semibold">{value.code}</p>
              <h3 className="mt-3 text-lg font-semibold text-brand-900 transition-colors group-hover:text-brand-700">
                {getText('title', value)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {getText('description', value)}
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-600 to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}