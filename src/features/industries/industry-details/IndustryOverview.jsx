"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function IndustryOverview({ industry }) {
  const locale = useLocale();
  const t = useTranslations('industriesPage.detail.overview');

  const getText = (field) => typeof industry[field] === 'object' ? (industry[field][locale] || industry[field].en) : industry[field];
  const getArray = (field) => Array.isArray(industry[field]) ? industry[field] : (industry[field][locale] || industry[field].en);
  
  const servicesArray = getArray('services');
  const projectsArray = getArray('projects');

  return (
    <section className="bg-white py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeader
              overline={t('overline')}
              title={`${t('title')} ${getText('name').toLowerCase()}.`}
              description={getText('longDescription')}
            />
            <div className="mt-10">
              <h3 className="font-display text-lg font-bold text-brand-900 mb-6">{t('capabilitiesTitle')}</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {servicesArray.map((service, i) => {
                  const serviceText = typeof service === 'object' ? (service[locale] || service.en) : service;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-brand-700 hover:bg-white hover:shadow-md">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-700 transition-all duration-300 group-hover:text-yellow-500 group-hover:scale-110" />
                      <span className="text-sm text-gray-700 font-medium">{serviceText}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl lg:h-[600px]">
              <Image src={industry.image} alt={getText('altText')} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-xl bg-yellow-500 px-5 py-3 shadow-lg">
                <p className="readout text-xs font-bold text-brand-900">{industry.code}</p>
                <p className="text-xs text-brand-900 font-semibold">{getText('name')}</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-brand-900 to-brand-950 p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-2xl font-bold text-yellow-400">{servicesArray.length}+</p>
                  <p className="mt-1 text-xs text-white/70">{t('servicesLabel')}</p>
                </div>
                <div className="border-x border-white/10">
                  <p className="font-display text-2xl font-bold text-yellow-400">{projectsArray.length}+</p>
                  <p className="mt-1 text-xs text-white/70">{t('projectsLabel')}</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-yellow-400">100%</p>
                  <p className="mt-1 text-xs text-white/70">{t('complianceLabel')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}