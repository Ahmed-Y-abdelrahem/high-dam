"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Target, Users, Zap, Shield } from "lucide-react";
import Image from "next/image";
import aboutImg from "@/assets/images/about/about-company.png";

const featureKeys = [
  { icon: Target, titleKey: 'f1Title', descKey: 'f1Desc' },
  { icon: Users, titleKey: 'f2Title', descKey: 'f2Desc' },
  { icon: Zap, titleKey: 'f3Title', descKey: 'f3Desc' },
  { icon: Shield, titleKey: 'f4Title', descKey: 'f4Desc' },
];

export default function CorporateOverviewSection() {
  const t = useTranslations('corporateOverview');

  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              overline={t('overline')}
              title={t('title')}
              description={t('description')}
            />

            <div className="mt-10 grid grid-cols-2 gap-4">
              {featureKeys.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-brand-700 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Icon 
                      size={24} 
                      className="text-brand-700 transition-transform duration-300 group-hover:scale-110" 
                    />
                    <h4 className="mt-3 font-display text-sm font-bold text-brand-900">
                      {t(`features.${feature.titleKey}`)}
                    </h4>
                    <p className="mt-1 text-xs text-gray-600">
                      {t(`features.${feature.descKey}`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl md:h-[500px]">
              <Image
                src={aboutImg}
                alt={t('imageAlt')}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 rounded-xl bg-yellow-500 px-4 py-3 shadow-lg">
                <p className="readout text-xs font-bold text-brand-900">{t('estBadge')}</p>
                <p className="text-xs text-brand-900">{t('estDesc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}