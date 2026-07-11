"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CareersHero() {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-teal-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/careers/hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-900/60 to-teal-900/30" />
      </div>
      <Container className="relative z-10">
        <SectionLabel label="Careers" dark />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Join the team behind the Kingdom's mega projects.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          Manpower mobilization is carried out in full compliance with ARAMCO & SABIC manpower, competency, certification, and site access requirements.
        </motion.p>
      </Container>
    </section>
  );
}