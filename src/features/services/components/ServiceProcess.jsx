"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.18 } } };
const item = { hidden: { opacity: 0, y: 60, filter: "blur(10px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } } };

export default function ServiceProcess() {
  const t = useTranslations('servicesPage.process');

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-28 overflow-hidden">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} align="center" />
        <div className="absolute left-1/2 top-64 hidden h-[60%] w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-200 via-yellow-200 to-transparent lg:block" />

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {[0, 1, 2, 3].map((i) => {
            const stepNum = String(i + 1).padStart(2, '0');
            return (
              <motion.div key={i} variants={item} className={`relative flex ${i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                <div className="group relative w-full max-w-md">
                  <div className="absolute left-1/2 top-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border border-yellow-400 bg-white shadow-md lg:block" />
                  <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-xl">
                    <div className="pointer-events-none absolute -right-6 -top-6 text-8xl font-bold text-gray-100">{stepNum}</div>
                    <p className="mb-2 text-xs tracking-[0.3em] text-brand-700">STEP {stepNum}</p>
                    <h3 className="text-lg font-bold text-brand-900 transition-colors group-hover:text-yellow-600">{t(`steps.${i}.title`)}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{t(`steps.${i}.desc`)}</p>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-brand-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}