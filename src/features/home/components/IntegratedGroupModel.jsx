"use client";

import { useLocale, useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { companies } from "@/data/companies";
import { HOLDING_BENEFITS } from "@/constants/benefits";
import { Building2 } from "lucide-react";

function CompanyCard({ company, index }) {
  const locale = useLocale();
  
  // ✅ دالة مساعدة لاستخراج النص الصحيح حسب اللغة
  const getText = (field) => {
    if (typeof company[field] === 'object' && company[field] !== null) {
      return company[field][locale] || company[field].en;
    }
    return company[field];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-800/50 to-brand-950/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50"
    >
      <div className="absolute top-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
      <div className="mb-4 flex items-center justify-between">
        <span className="readout text-xs tracking-[2px] text-yellow-400 font-bold">
          {company.code}
        </span>
        <div className="h-2 w-2 rounded-full bg-green-400" />
      </div>
      
      {/* ✅ استخدام getText بدلاً من العرض المباشر */}
      <h3 className="text-lg font-bold text-white leading-tight mb-2">
        {getText('name')}
      </h3>
      <p className="text-xs text-white/60 leading-relaxed mb-4">
        {getText('tagline')}
      </p>
    </motion.div>
  );
}

export default function IntegratedGroupModel() {
  const t = useTranslations('integratedGroup');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-900 to-brand-950 py-28 md:py-32">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>
      <div className="hdg-watermark" />
      <Container className="relative z-10">
        <SectionHeader
          overline={t('overline')}
          title={t('title')}
          description={t('description')}
          dark
          align="center"
        />
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-2xl border-2 border-yellow-400/50 bg-gradient-to-br from-brand-700 to-brand-950 p-8 backdrop-blur-sm"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full border border-yellow-400/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full border border-yellow-400/30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full border border-yellow-400/40" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400"
                >
                  <Building2 size={32} className="text-brand-900" />
                </motion.div>
                <p className="readout text-xs tracking-[3px] text-yellow-400 font-bold mb-2">
                  {t('holdingLabel')}
                </p>
                <h3 className="text-2xl font-bold text-white leading-tight mb-2">
                  {t('holdingName')}
                </h3>
                <p className="text-sm text-white/70">{t('holdingGroup')}</p>
                <div className="mt-6 pt-6 border-t border-white/20 w-full">
                  <p className="text-xs text-white/60 leading-relaxed">
                    {t('holdingSlogan')}
                  </p>
                </div>
              </div>
            </motion.div>
            <CompanyCard company={companies[0]} index={0} />
            <CompanyCard company={companies[1]} index={1} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CompanyCard company={companies[2]} index={2} />
            <CompanyCard company={companies[3]} index={3} />
            <CompanyCard company={companies[4]} index={4} />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-28 max-w-6xl"
        >
          <div className="mb-12 text-center">
            <p className="readout text-xs tracking-[3px] text-yellow-400 mb-3">
              {t('advantagesLabel')}
            </p>
            <h3 className="font-display text-2xl font-bold text-white md:text-4xl">
              {t('advantagesTitle')}
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {HOLDING_BENEFITS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/40"
              >
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 transition-all duration-300 group-hover:bg-yellow-400">
                    <item.icon size={22} className="text-yellow-400 transition-colors duration-300 group-hover:text-brand-900" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-white/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}