"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Building2, ArrowDown, MapPin, Calendar, Award } from "lucide-react";
import Image from "next/image";
import heroImg from "@/assets/images/home/hero.png"; // استيراد الصورة من assets

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-teal-900">
      <div className="hdg-watermark" />
      
      {/* خلفية الصورة باستخدام Next/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="High Dam Group - Integrated construction and project execution in Saudi Arabia"
          fill
          className="object-cover"
          priority // تحميل فوري لأنها أول حاجة في الصفحة
          sizes="100vw"
        />
        {/* الـ Overlay عشان النص يظهر بوضوح */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-900/70 to-teal-900/40" />
      </div>

      {/* شبكة هندسية */}
      <div className="absolute inset-0 opacity-10 z-10 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <Container className="relative z-20 pt-24 pb-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-1.5 text-xs font-semibold text-teal-900 shadow-lg shadow-yellow-500/20">
            <Building2 size={14} strokeWidth={2.5} />
            Integrated Group Company Profile
          </span>
        </motion.div>

        {/* العنوان الرئيسي */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          One Group.
          <br />
          One Standard.
          <br />
          <span className="text-yellow-400">Total Project Control.</span>
        </motion.h1>

        {/* الوصف */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          A fully integrated, execution-driven business group supporting Oil &amp; Gas
          operators, EPC contractors, government entities, and mega project developers
          across the Kingdom of Saudi Arabia.
        </motion.p>

        {/* الأزرار */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/contact" variant="secondary">
            Request a Proposal
          </Button>
          <Button href="/about" variant="outlineLight">
            Explore the Group
          </Button>
        </motion.div>

        {/* إحصائيات سريعة في الـ Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          <div className="flex items-center gap-3 border-l-2 border-yellow-500 pl-4">
            <Award size={24} className="text-yellow-400" />
            <div>
              <p className="font-display text-2xl font-bold text-white">ISO</p>
              <p className="text-xs text-white/60">Certified Company</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-l-2 border-yellow-500 pl-4">
            <Calendar size={24} className="text-yellow-400" />
            <div>
              <p className="font-display text-2xl font-bold text-white">10+</p>
              <p className="text-xs text-white/60">Years of Excellence</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-l-2 border-yellow-500 pl-4">
            <MapPin size={24} className="text-yellow-400" />
            <div>
              <p className="font-display text-2xl font-bold text-white">KSA</p>
              <p className="text-xs text-white/60">Nationwide Coverage</p>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute inset-x-0 bottom-8 z-20 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="readout text-xs text-white/50">SCROLL</span>
          <ArrowDown size={20} className="text-yellow-400" />
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <Container>
          <div className="flex items-center justify-between border-t border-white/10 py-6 text-white/50">
            <span className="readout text-xs">N26.30° E50.15° — AL KHOBAR, KSA</span>
            <span className="readout hidden text-xs md:inline">SCROLL TO EXPLORE</span>
          </div>
        </Container>
      </div>
    </section>
  );
}