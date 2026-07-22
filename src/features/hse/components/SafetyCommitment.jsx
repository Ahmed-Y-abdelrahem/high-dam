"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle, Target, Heart, Users } from "lucide-react";

const icons = [Heart, Target, Users, CheckCircle];

export default function SafetyCommitment() {
  const t = useTranslations('hsePage.commitment');
  const commitments = t.raw('items');

  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} description={t('description')} align="center" />
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {commitments.map((commitment, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-700/10 transition-all duration-300 group-hover:bg-brand-700">
                  <Icon size={28} className="text-brand-700 transition-colors duration-300 group-hover:text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-900 mb-3">{commitment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{commitment.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}