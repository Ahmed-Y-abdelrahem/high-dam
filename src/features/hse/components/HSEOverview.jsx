"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Shield, Target, Users, FileCheck } from "lucide-react";

const icons = [Shield, Target, Users, FileCheck];

export default function HSEOverview() {
  const locale = useLocale();
  const t = useTranslations('hsePage.overview');
  const pillars = t.raw('pillars');

  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} description={t('description')} align="center" />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 transition-all duration-300 hover:border-brand-700 hover:shadow-xl">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-700/5 transition-all duration-500 group-hover:bg-brand-700/10" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-700/10 transition-all duration-300 group-hover:bg-brand-700">
                    <Icon size={28} className="text-brand-700 transition-colors duration-300 group-hover:text-yellow-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}