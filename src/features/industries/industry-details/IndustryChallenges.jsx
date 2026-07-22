"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { AlertTriangle, Lightbulb } from "lucide-react";

export default function IndustryChallenges({ industry }) {
  const locale = useLocale();
  const t = useTranslations('industriesPage.detail.challenges');

  const getArray = (field) => Array.isArray(industry[field]) ? industry[field] : (industry[field][locale] || industry[field].en);
  const challengesArray = getArray('challenges');
  const solutionsArray = getArray('solutions');

  return (
    <section className="relative overflow-hidden bg-gray-50 py-28">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #006778 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <Container className="relative z-10">
        <SectionHeader overline={t('overline')} title={t('title')} description={t('description')} align="center" />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
                <AlertTriangle size={28} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-900">{t('challengesTitle')}</h3>
                <p className="text-sm text-gray-600">{t('challengesDesc')}</p>
              </div>
            </div>
            <div className="space-y-4">
              {challengesArray.map((challenge, i) => {
                const text = typeof challenge === 'object' ? (challenge[locale] || challenge.en) : challenge;
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-300 hover:shadow-md">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">{i + 1}</span>
                    <div className="flex-1"><p className="text-sm font-medium text-gray-800 leading-relaxed">{text}</p></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-100">
                <Lightbulb size={28} className="text-brand-700" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-900">{t('solutionsTitle')}</h3>
                <p className="text-sm text-gray-600">{t('solutionsDesc')}</p>
              </div>
            </div>
            <div className="space-y-4">
              {solutionsArray.map((solution, i) => {
                const text = typeof solution === 'object' ? (solution[locale] || solution.en) : solution;
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }} className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand-700 hover:shadow-md">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">{i + 1}</span>
                    <div className="flex-1"><p className="text-sm font-medium text-gray-800 leading-relaxed">{text}</p></div>
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