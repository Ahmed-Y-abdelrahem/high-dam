"use client";

import { useLocale, useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, BookOpen, AlertTriangle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/ui/Button";
import { hsePrinciples } from "@/data/stats";

const principleIcons = [ShieldCheck, Award, Users, BookOpen, AlertTriangle];

export default function HSESection() {
  const locale = useLocale();
  const t = useTranslations('hse');

  // التعامل مع hsePrinciples سواء كانت مصفوفة أو كائن يحتوي على en/ar
  const principlesList = Array.isArray(hsePrinciples) 
    ? hsePrinciples.map(p => typeof p === 'object' ? (p[locale] || p.en) : p)
    : (hsePrinciples[locale] || hsePrinciples.en);

  return (
    <section className="relative overflow-hidden bg-brand-800 py-28">
      <div className="hdg-watermark" />
      
      <Container className="relative z-10 grid grid-cols-1 gap-16 md:grid-cols-2">
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
            dark
          />

          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-6 py-3 backdrop-blur-sm">
            <Award size={32} className="text-yellow-400" />
            <div>
              <p className="font-display text-sm font-bold text-white">{t('isoTitle')}</p>
              <p className="text-xs text-white/60">{t('isoDesc')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {principlesList.map((p, i) => {
            const Icon = principleIcons[i];
            return (
              <motion.div
                key={i} // ✅ استخدام الـ index كـ Key
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/50 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 transition-all duration-300 group-hover:bg-yellow-500">
                  <Icon 
                    size={20} 
                    className="text-yellow-400 transition-colors duration-300 group-hover:text-brand-900" 
                  />
                </div>
                <span className="text-sm text-white/80 pt-2">{p}</span>
              </motion.div>
            );
          })}
          <Button href="/hse" variant="outlineLight" className="mt-4">
            {t('cta')}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}