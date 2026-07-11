"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { certifications } from "@/data/stats";
import { Award, Shield, CheckCircle } from "lucide-react";

const clients = ["ARAMCO", "SABIC", "SADARA", "GCCIA", "RIYADH METRO", "QIDDIYA", "NEOM"];

const certIcons = [Award, Shield, CheckCircle];

export default function ClientsCertifications() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader
          overline="Clients & Certifications"
          title="Aligned with the standards our clients demand."
          align="center"
        />

        {/* شريط العملاء المتحرك */}
        <div className="mt-14 overflow-hidden border-y border-gray-200 py-8">
          <div className="flex w-max animate-marquee gap-16">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="readout whitespace-nowrap text-lg text-teal-900/40 font-bold"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* الشهادات */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = certIcons[i];
            return (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-teal-700 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-700/10 transition-all duration-300 group-hover:bg-teal-700">
                  <Icon 
                    size={28} 
                    className="text-teal-700 transition-colors duration-300 group-hover:text-yellow-400" 
                  />
                </div>
                <p className="font-display text-lg font-bold text-teal-900">{cert.code}</p>
                <p className="mt-2 text-sm text-gray-600">{cert.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}