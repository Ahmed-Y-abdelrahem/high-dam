"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowLeft, Building2, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function IndustryHero({ industry }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-teal-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      
      {/* الصورة باستخدام Next/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={industry.image}
          alt={industry.altText}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-900/70 to-teal-900/30" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.05]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <Container className="relative z-10">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors mb-6 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm">Back to Industries</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel label={`Industry Sector • ${industry.code}`} dark />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {industry.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed"
        >
          {industry.longDescription}
        </motion.p>

        {/* Industry Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
            <Building2 size={20} className="text-yellow-400" />
            <div>
              <p className="text-xs text-white/60">Sector</p>
              <p className="text-sm font-semibold text-white">{industry.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
            <Briefcase size={20} className="text-yellow-400" />
            <div>
              <p className="text-xs text-white/60">Services</p>
              <p className="text-sm font-semibold text-white">{industry.services.length}+ Capabilities</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
            <MapPin size={20} className="text-yellow-400" />
            <div>
              <p className="text-xs text-white/60">Coverage</p>
              <p className="text-sm font-semibold text-white">Kingdom-wide</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}