"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowLeft, Shield, Award, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/images/hse/hero.png";

export default function HSEHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-teal-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      
      {/* الصورة باستخدام Next/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="High Dam Group Health Safety and Environment HSE policy - Zero harm commitment ARAMCO SABIC certified contractor Saudi Arabia"
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors mb-6 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">Back to Homepage</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SectionLabel label="Health, Safety & Environment" dark />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Zero harm to people and the environment.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed"
        >
          The Group is fully committed to conducting all activities in a manner that protects people, assets, and the environment, in alignment with ARAMCO, SABIC, and EPC HSE requirements.
        </motion.p>

        {/* Key Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm border border-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10">
              <Shield size={24} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-xs text-white/60">Core Value</p>
              <p className="text-sm font-semibold text-white">Safety First</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm border border-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10">
              <Award size={24} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-xs text-white/60">Certification</p>
              <p className="text-sm font-semibold text-white">ISO 45001:2018</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm border border-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10">
              <Heart size={24} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-xs text-white/60">Commitment</p>
              <p className="text-sm font-semibold text-white">Zero Harm</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}