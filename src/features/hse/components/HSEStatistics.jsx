"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { Shield, TrendingDown, Users, Award } from "lucide-react";

const statIcons = [Shield, TrendingDown, Users, Award];
const statKeys = ["lti", "incidentReduction", "trainedPersonnel", "complianceRate"];
const statsData = [
  { value: 0, suffix: "" },
  { value: 95, suffix: "%" },
  { value: 500, suffix: "+" },
  { value: 100, suffix: "%" },
];

export default function HSEStatistics() {
  const t = useTranslations('hsePage.statistics');

  return (
    <section className="relative overflow-hidden bg-brand-900 py-24">
      <div className="hdg-watermark" />
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statsData.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div key={statKeys[i]} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 border border-yellow-400/20 transition-all duration-300 group-hover:bg-yellow-400 group-hover:scale-110">
                    <Icon size={32} className="text-yellow-400 transition-colors duration-300 group-hover:text-brand-900" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-yellow-400 md:text-5xl font-display mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-white/70 leading-snug">{t(statKeys[i])}</p>
                <div className="mt-4 h-[2px] w-12 bg-yellow-400/30 mx-auto transition-all duration-300 group-hover:w-full group-hover:bg-yellow-400" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}