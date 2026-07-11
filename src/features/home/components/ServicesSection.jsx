"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/domain/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  const featured = services.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-28 md:py-32">
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #006778 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30" />

      <Container className="relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            overline="Services"
            title="End-to-end execution capability."
            description="From civil and MEP works to site enabling, interiors, and medical supply — delivered through a single, unified execution team."
          />
          <Button href="/services" variant="primary">
            View All Services
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => (
            <ServiceCard key={service.code} service={service} index={i} />
          ))}
        </div>

        
      </Container>
    </section>
  );
}
