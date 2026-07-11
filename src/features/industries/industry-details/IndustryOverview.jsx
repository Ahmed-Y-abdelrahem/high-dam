"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function IndustryOverview({ industry }) {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left: Description & Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              overline="Industry Expertise"
              title={`Comprehensive solutions for ${industry.name.toLowerCase()}.`}
              description={industry.longDescription}
            />

            {/* Services List */}
            <div className="mt-10">
              <h3 className="font-display text-lg font-bold text-teal-900 mb-6">
                Our Capabilities in This Sector
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {industry.services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-teal-700 hover:bg-white hover:shadow-md"
                  >
                    <CheckCircle2 
                      size={20} 
                      className="mt-0.5 shrink-0 text-teal-700 transition-all duration-300 group-hover:text-yellow-500 group-hover:scale-110" 
                    />
                    <span className="text-sm text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl lg:h-[600px]">
              <Image
                src={industry.image}
                alt={industry.altText}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 rounded-xl bg-yellow-500 px-5 py-3 shadow-lg">
                <p className="readout text-xs font-bold text-teal-900">{industry.code}</p>
                <p className="text-xs text-teal-900 font-semibold">{industry.name}</p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-teal-900 to-teal-950 p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-2xl font-bold text-yellow-400">
                    {industry.services.length}+
                  </p>
                  <p className="mt-1 text-xs text-white/70">Services</p>
                </div>
                <div className="border-x border-white/10">
                  <p className="font-display text-2xl font-bold text-yellow-400">
                    {industry.projects.length}+
                  </p>
                  <p className="mt-1 text-xs text-white/70">Projects</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-yellow-400">
                    100%
                  </p>
                  <p className="mt-1 text-xs text-white/70">Compliance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}