"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import IndustryCard from "@/components/domain/IndustryCard";
import { industries } from "@/data/industries";

export default function IndustriesGrid() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader
          overline="Sectors"
          title="Where High Dam Group operates."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <IndustryCard industry={industry} index={i} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
