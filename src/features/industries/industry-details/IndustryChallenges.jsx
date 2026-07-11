"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { AlertTriangle, Lightbulb, ArrowRight } from "lucide-react";

export default function IndustryChallenges({ industry }) {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #006778 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          overline="Challenges & Solutions"
          title="How we address sector-specific challenges."
          description="Every industry has unique requirements. Our deep expertise allows us to anticipate challenges and deliver tailored solutions."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
                <AlertTriangle size={28} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-teal-900">Industry Challenges</h3>
                <p className="text-sm text-gray-600">Key obstacles we overcome</p>
              </div>
            </div>

            <div className="space-y-4">
              {industry.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-300 hover:shadow-md"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 leading-relaxed">{challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100">
                <Lightbulb size={28} className="text-teal-700" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-teal-900">Our Solutions</h3>
                <p className="text-sm text-gray-600">How we deliver excellence</p>
              </div>
            </div>

            <div className="space-y-4">
              {industry.solutions.map((solution, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-teal-700 hover:shadow-md"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 leading-relaxed">{solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}