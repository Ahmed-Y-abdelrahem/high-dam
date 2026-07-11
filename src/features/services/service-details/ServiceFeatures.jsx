"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function ServiceFeatures({ features }) {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader
          index="01"
          overline="Key Features"
          title="Comprehensive service capabilities."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-teal-700 hover:shadow-lg hover:-translate-y-1"
            >
              <CheckCircle2 
                size={24} 
                className="mt-0.5 shrink-0 text-teal-700 transition-all duration-300 group-hover:text-yellow-500 group-hover:scale-110" 
              />
              <span className="text-gray-700 font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}