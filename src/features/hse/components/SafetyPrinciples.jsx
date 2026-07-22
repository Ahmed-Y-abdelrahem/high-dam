"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle, AlertTriangle, HardHat, Eye, Hand, Shield } from "lucide-react";

const icons = [HardHat, Eye, Hand, Shield, AlertTriangle, CheckCircle];

export default function SafetyPrinciples() {
  const t = useTranslations('hsePage.principles');
  const principles = t.raw('items');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-950 to-black py-28">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <Container className="relative z-10">
        <SectionHeader overline={t('overline')} title={t('title')} description={t('description')} dark align="center" />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10 transition-all duration-300 group-hover:bg-yellow-400">
                  <Icon size={24} className="text-yellow-400 transition-colors duration-300 group-hover:text-brand-900" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{principle.desc}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}