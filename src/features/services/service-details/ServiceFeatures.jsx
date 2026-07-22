"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function ServiceFeatures({ features }) {
  const locale = useLocale();
  const t = useTranslations('servicesPage.detail.features');

  const getText = (feature) => {
    if (typeof feature === 'object' && feature !== null) {
      return feature[locale] || feature.en;
    }
    return feature;
  };

  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-brand-700 hover:shadow-lg hover:-translate-y-1"
            >
              <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-brand-700 transition-all duration-300 group-hover:text-yellow-500 group-hover:scale-110" />
              <span className="text-gray-700 font-medium">{getText(feature)}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}