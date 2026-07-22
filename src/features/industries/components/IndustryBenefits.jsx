"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Target, ShieldCheck, Layers, Award, Users, Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const icons = [Target, ShieldCheck, Layers, Award, Users, Briefcase];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function IndustryBenefits() {
  const t = useTranslations('industriesPage.benefits');

  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} align="center" />
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} variants={item} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-700 hover:shadow-lg">
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -top-10 right-0 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100">
                  <Icon size={18} className="text-brand-700" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">{t(`items.${i}`)}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-600 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}