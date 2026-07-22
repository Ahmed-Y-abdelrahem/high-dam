"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

export default function ProjectChallenges({ project }) {
  const locale = useLocale();
  const t = useTranslations('projectDetails.challenges');

  // ✅ دالة آمنة جداً لاستخراج المصفوفة
  const getArray = (field) => {
    if (!project || !project[field]) return [];
    if (Array.isArray(project[field])) return project[field];
    if (typeof project[field] === 'object' && project[field] !== null) {
      return project[field][locale] || project[field].en || [];
    }
    return [];
  };
  
  const challengesArray = getArray('challenges');
  const solutionsArray = getArray('solutions');
  const resultsArray = getArray('results');

  // إذا لم تكن هناك بيانات، لا تعرض السكشن نهائياً
  if (challengesArray.length === 0 && solutionsArray.length === 0 && resultsArray.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gray-50 py-28">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #006778 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <Container className="relative z-10">
        <SectionHeader overline={t('overline')} title={t('title')} description={t('description')} align="center" />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Challenges */}
          {challengesArray.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                  <AlertTriangle size={24} className="text-red-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-900">{t('challengesTitle')}</h3>
              </div>
              <ul className="space-y-3">
                {challengesArray.map((challenge, i) => {
                  const text = typeof challenge === 'object' ? (challenge[locale] || challenge.en) : challenge;
                  return (
                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:border-red-300 hover:shadow-md">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">{i + 1}</span>
                      <span className="text-sm text-gray-700">{text}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}

          {/* Solutions */}
          {solutionsArray.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
                  <CheckCircle size={24} className="text-brand-700" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-900">{t('solutionsTitle')}</h3>
              </div>
              <ul className="space-y-3">
                {solutionsArray.map((solution, i) => {
                  const text = typeof solution === 'object' ? (solution[locale] || solution.en) : solution;
                  return (
                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:border-brand-700 hover:shadow-md">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">{i + 1}</span>
                      <span className="text-sm text-gray-700">{text}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}

          {/* Results */}
          {resultsArray.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                  <TrendingUp size={24} className="text-yellow-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-900">{t('resultsTitle')}</h3>
              </div>
              <ul className="space-y-3">
                {resultsArray.map((result, i) => {
                  const text = typeof result === 'object' ? (result[locale] || result.en) : result;
                  return (
                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:border-yellow-500 hover:shadow-md">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-xs font-bold text-yellow-600 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">{i + 1}</span>
                      <span className="text-sm text-gray-700">{text}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}