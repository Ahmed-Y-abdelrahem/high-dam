"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/ui/Button";
import IndustryCard from "@/components/domain/IndustryCard";
import { industries } from "@/data/industries";
import { Building2, Factory, Hospital, Home, Briefcase, HardHat } from "lucide-react";

const industryIcons = [HardHat, Factory, Building2, Hospital, Home, Briefcase];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-950 to-black py-28 md:py-32">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-40" />

      {/* Subtle Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-teal-700/20 blur-[120px]" />

      <Container className="relative z-10">
        
        {/* Header with Button */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <SectionHeader
            overline="Industries Served"
            title="Trusted across the Kingdom's most demanding sectors."
            description="From Oil & Gas to healthcare, infrastructure to hospitality — we deliver excellence across every industry we serve."
            dark
          />
          <Button href="/industries" variant="secondary">
            Explore All Sectors
          </Button>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <IndustryCard industry={industry} index={0} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
