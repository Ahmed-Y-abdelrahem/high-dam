"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowLeft, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // استيراد مكون Image

export default function ServiceHero({ service }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-teal-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      
      {/* الصورة باستخدام Next/Image */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.altText || service.title}
          fill
          className="object-cover"
          priority // تحميل فوري لأنها في الـ Hero
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-900/60 to-teal-900/30" />
      </div>

      <Container className="relative z-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to Services</span>
        </Link>

        <SectionLabel label={service.company} dark />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {service.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          {service.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex items-center gap-3"
        >
          <Building2 size={20} className="text-yellow-400" />
          <span className="text-white/70">Delivered by {service.company}</span>
        </motion.div>
      </Container>
    </section>
  );
}