"use client";

import { useLocale } from 'next-intl';
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { Building2, Briefcase, Award, Calendar } from "lucide-react";
import { stats } from "@/data/stats";

const statIcons = [Building2, Briefcase, Award, Calendar];

export default function StatsSection() {
  const locale = useLocale();

  const getText = (field, item) => {
    if (typeof item[field] === 'object' && item[field] !== null) {
      return item[field][locale] || item[field].en;
    }
    return item[field];
  };

  return (
    <section className="relative overflow-hidden bg-brand-900 py-24">
      <div className="hdg-watermark" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((item, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div
                key={i} // ✅ استخدام الـ index كـ Key لتجنب خطأ [object Object]
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/10 border border-yellow-500/20 transition-all duration-300 group-hover:bg-yellow-500 group-hover:scale-110">
                  <Icon 
                    size={28} 
                    className="text-yellow-400 transition-colors duration-300 group-hover:text-brand-900" 
                  />
                </div>

                <div className="text-4xl font-bold text-yellow-400 md:text-5xl font-display">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>

                <p className="mt-3 text-sm leading-snug text-white/60">
                  {getText('label', item)}
                </p>

                <div className="mt-4 h-[2px] w-12 bg-yellow-500/30 transition-all duration-300 group-hover:w-full group-hover:bg-yellow-500" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}