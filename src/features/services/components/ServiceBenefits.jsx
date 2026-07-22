"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { UserCheck, Shield, Rocket, Layers, Wallet, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const icons = [UserCheck, Shield, Rocket, Layers, Wallet, Award];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function ServiceBenefits() {
  const t = useTranslations('servicesPage.benefits');

  return (
    <section className="bg-brand-950 py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} dark align="center" />

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} variants={item} className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-900 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={18} className="text-yellow-400" />
                </div>
                <p className="text-sm leading-relaxed text-white/80">{t(`items.${i}`)}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}