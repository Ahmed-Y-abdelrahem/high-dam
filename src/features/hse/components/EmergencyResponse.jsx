"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { AlertCircle, Phone, Siren, Flame, Droplets } from "lucide-react";

const emergencyCapabilities = [
  {
    icon: Siren,
    title: "Medical Emergency Response",
    description: "On-site medical facilities and trained first aiders at all project locations.",
  },
  {
    icon: Flame,
    title: "Fire Fighting",
    description: "Certified fire fighting teams and equipment ready for immediate response.",
  },
  {
    icon: Droplets,
    title: "Spill Response",
    description: "Rapid response teams and equipment for environmental spill containment.",
  },
  {
    icon: AlertCircle,
    title: "Evacuation Procedures",
    description: "Well-defined evacuation plans and regular drills at all sites.",
  },
];

export default function EmergencyResponse() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-teal-950 to-black py-28">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          overline="Emergency Preparedness"
          title="Ready to respond, 24/7."
          description="Our comprehensive emergency response capabilities ensure rapid and effective action in any situation."
          dark
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {emergencyCapabilities.map((capability, i) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10 transition-all duration-300 group-hover:bg-yellow-400">
                <capability.icon size={24} className="text-yellow-400 transition-colors duration-300 group-hover:text-teal-900" />
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-3">
                {capability.title}
              </h3>
              
              <p className="text-sm text-white/70 leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-8 backdrop-blur-sm text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <Phone size={24} className="text-yellow-400" />
            <h3 className="font-display text-2xl font-bold text-white">24/7 Emergency Hotline</h3>
          </div>
          <p className="text-4xl font-bold text-yellow-400 mb-2">+966 13 899 6997</p>
          <p className="text-sm text-white/70">Available round the clock for all HSE emergencies</p>
        </motion.div>
      </Container>
    </section>
  );
}