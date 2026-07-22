"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2, FileText, Target } from "lucide-react";

export default function ProjectOverview({ project }) {
  const locale = useLocale();
  const t = useTranslations('projectDetails.overview');

  const getText = (field) => typeof project[field] === 'object' ? (project[field][locale] || project[field].en) : project[field];
  const getArray = (field) => Array.isArray(project[field]) ? project[field] : (project[field][locale] || project[field].en || []);
  const featuresArray = getArray('features');

  return (
    <section className="bg-white py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeader overline={t('overline')} title={t('title')} />
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-brand-900 mb-3 flex items-center gap-2">
                  <FileText size={20} className="text-yellow-500" />
                  {t('descriptionLabel')}
                </h3>
                <p className="leading-relaxed text-gray-600">{getText('description')}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-900 mb-3 flex items-center gap-2">
                  <Target size={20} className="text-yellow-500" />
                  {t('scopeLabel')}
                </h3>
                <p className="leading-relaxed text-gray-600">{getText('scope')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="font-display text-xl font-bold text-brand-900 mb-6">{t('deliverablesTitle')}</h3>
            <div className="grid grid-cols-1 gap-3">
              {featuresArray.map((feature, i) => {
                const featureText = typeof feature === 'object' ? (feature[locale] || feature.en) : feature;
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-brand-700 hover:bg-white hover:shadow-md">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-700 transition-all duration-300 group-hover:text-yellow-500 group-hover:scale-110" />
                    <span className="text-sm text-gray-700 font-medium">{featureText}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}