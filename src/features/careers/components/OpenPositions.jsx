"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { manpowerCategories } from "@/data/stats";

export default function OpenPositions() {
  const locale = useLocale();
  const t = useTranslations('careersPage.openPositions');

  const getText = (field, item) => {
    if (typeof item[field] === 'object' && item[field] !== null) {
      return item[field][locale] || item[field].en;
    }
    return item[field];
  };

  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} />
        <div className="mt-16 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          {manpowerCategories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`grid grid-cols-1 gap-2 p-6 md:grid-cols-3 md:items-center ${
                i !== manpowerCategories.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <span className="readout text-xs text-brand-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display font-bold text-brand-900">
                {getText('category', item)}
              </span>
              <span className="text-sm text-gray-600">
                {getText('description', item)}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}