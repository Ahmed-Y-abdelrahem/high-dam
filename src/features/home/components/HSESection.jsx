"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, BookOpen, AlertTriangle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/ui/Button";
import { hsePrinciples } from "@/data/stats";

const principleIcons = [ShieldCheck, Award, Users, BookOpen, AlertTriangle];

export default function HSESection() {
  return (
    <section className="relative overflow-hidden bg-teal-800 py-28">
      <div className="hdg-watermark" />
      
      <Container className="relative z-10 grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* الجانب الأيسر */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            overline="Health, Safety & Environment"
            title="Zero harm is not a slogan. It is a management responsibility."
            description="The Group is fully committed to conducting all activities in a manner that protects people, assets, and the environment, in alignment with ARAMCO, SABIC, and EPC HSE requirements."
            dark
          />

          {/* شارة ISO */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-6 py-3 backdrop-blur-sm">
            <Award size={32} className="text-yellow-400" />
            <div>
              <p className="font-display text-sm font-bold text-white">ISO 45001:2018</p>
              <p className="text-xs text-white/60">Occupational Health & Safety</p>
            </div>
          </div>
        </motion.div>

        {/* الجانب الأيمن - المبادئ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {hsePrinciples.map((p, i) => {
            const Icon = principleIcons[i];
            return (
              <motion.div
                key={p}
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
                    className="text-yellow-400 transition-colors duration-300 group-hover:text-teal-900" 
                  />
                </div>
                <span className="text-sm text-white/80 pt-2">{p}</span>
              </motion.div>
            );
          })}
          <Button href="/hse" variant="outlineLight" className="mt-4">
            View HSE Policy
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}