"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { manpowerCategories } from "@/data/stats";

export default function OpenPositions() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader
          index="02"
          overline="Manpower Categories"
          title="Every category, competency-based and site-ready."
        />
        <div className="mt-16 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          {manpowerCategories.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`grid grid-cols-1 gap-2 p-6 md:grid-cols-3 md:items-center ${
                i !== manpowerCategories.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <span className="readout text-xs text-teal-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display font-bold text-teal-900">{item.category}</span>
              <span className="text-sm text-gray-600">{item.description}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}