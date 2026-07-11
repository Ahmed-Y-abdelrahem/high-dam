"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { coreValues } from "@/data/stats";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CoreValues() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader
          overline="Core Values"
          title="Six commitments guiding every phase of execution."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {coreValues.map((value) => (
            <motion.div
              key={value.code}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-teal-700 hover:shadow-lg"
            >
              {/* big background code */}
              <div className="pointer-events-none absolute -right-6 -top-6 text-7xl font-bold text-gray-100 transition-opacity duration-300 group-hover:opacity-80">
                {value.code}
              </div>

              {/* content */}
              <p className="text-xs tracking-[0.3em] text-teal-700 font-semibold">
                {value.code}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-teal-900 transition-colors group-hover:text-teal-700">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {value.description}
              </p>

              {/* subtle bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-teal-600 to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}