"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Award, Badge, FileCheck, Shield } from "lucide-react";

const certifications = [
  {
    icon: Award,
    code: "ISO 45001:2018",
    title: "Occupational Health & Safety",
    description: "International standard for occupational health and safety management systems.",
  },
  {
    icon: Badge,
    code: "ISO 14001:2015",
    title: "Environmental Management",
    description: "Framework for effective environmental management systems and sustainable practices.",
  },
  {
    icon: FileCheck,
    code: "ISO 9001:2015",
    title: "Quality Management",
    description: "Quality management systems ensuring consistent delivery of high-quality services.",
  },
  {
    icon: Shield,
    code: "ARAMCO Approved",
    title: "Safety Prequalification",
    description: "Full compliance with Saudi Aramco's stringent safety and quality requirements.",
  },
];

export default function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader
          overline="Certifications & Compliance"
          title="Internationally recognized standards."
          description="Our certifications demonstrate our commitment to maintaining the highest standards in health, safety, and environmental management."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal-700 hover:shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-teal-700/10 transition-all duration-300 group-hover:bg-teal-700">
                  <cert.icon size={32} className="text-teal-700 transition-colors duration-300 group-hover:text-yellow-400" />
                </div>

                <div className="flex-1">
                  <p className="readout text-sm tracking-[2px] text-yellow-600 font-bold mb-2">
                    {cert.code}
                  </p>
                  <h3 className="font-display text-xl font-bold text-teal-900 mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}