"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";
import heroImg from "@/assets/images/industries/hero.png"; // استيراد الصورة من assets

export default function IndustriesHero() {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-teal-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      
      {/* الصورة باستخدام Next/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Industries served by High Dam Group - Oil & Gas, Infrastructure, Healthcare, and EPC contractors in Saudi Arabia"
          fill
          className="object-cover"
          priority // تحميل فوري لأنها Hero image
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-900/60 to-teal-900/30" />
      </div>

      <Container className="relative z-10">
        <SectionLabel label="Industries Served" dark />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Deep sector expertise, one execution standard.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          Trusted by operators, EPC contractors, and government entities across the Kingdom's most demanding industries.
        </motion.p>
      </Container>
    </section>
  );
}