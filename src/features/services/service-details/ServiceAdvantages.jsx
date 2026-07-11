"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Star } from "lucide-react";

export default function ServiceAdvantages({ advantages }) {
  return (
    <section className="bg-teal-900 py-28">
      <Container>
        <SectionHeader
          index="02"
          overline="Why Choose Us"
          title="Our competitive advantages."
          dark
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {advantages.map((advantage, i) => (
            <motion.div
              key={advantage}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/50 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                <Star size={20} className="text-yellow-400" />
              </div>
              <span className="text-white/80 font-medium">{advantage}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}