"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { BookOpen, Users, GraduationCap, ClipboardCheck } from "lucide-react";

const icons = [BookOpen, Users, GraduationCap, ClipboardCheck];

export default function TrainingPrograms() {
  const t = useTranslations('hsePage.training');
  const programs = t.raw('programs');

  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} description={t('description')} align="center" />
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {programs.map((program, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 transition-all duration-300 hover:border-brand-700 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-700/10 transition-all duration-300 group-hover:bg-brand-700">
                    <Icon size={28} className="text-brand-700 transition-colors duration-300 group-hover:text-yellow-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-900">{program.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{program.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {program.features.map((feature, j) => (
                    <motion.div key={j} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
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