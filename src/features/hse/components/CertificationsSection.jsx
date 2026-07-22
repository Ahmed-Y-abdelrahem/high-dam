"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Award, Badge, FileCheck, Shield } from "lucide-react";

const icons = [Award, Badge, FileCheck, Shield];

export default function CertificationsSection() {
  const t = useTranslations('hsePage.certifications');
  const certifications = t.raw('items');

  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} description={t('description')} align="center" />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {certifications.map((cert, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-brand-700 hover:shadow-xl">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-700/10 transition-all duration-300 group-hover:bg-brand-700">
                    <Icon size={32} className="text-brand-700 transition-colors duration-300 group-hover:text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <p className="readout text-sm tracking-[2px] text-yellow-600 font-bold mb-2">{cert.code}</p>
                    <h3 className="font-display text-xl font-bold text-brand-900 mb-3">{cert.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}