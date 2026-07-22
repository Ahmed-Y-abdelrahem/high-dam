"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowLeft, Shield, Award, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/images/hse/hero.png";

export default function HSEHero() {
  const t = useTranslations('hsePage.hero');

  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-brand-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      <div className="absolute inset-0 z-0">
        <Image src={heroImg} alt="High Dam Group HSE policy" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/70 to-brand-900/30" />
      </div>
      <div className="absolute inset-0 z-[1] opacity-[0.05]">
        <div className="h-full w-full" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors mb-6 group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">{t('back')}</span>
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <SectionLabel label={t('label')} dark />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          {t('title')}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
          {t('description')}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm border border-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10"><Shield size={24} className="text-yellow-400" /></div>
            <div>
              <p className="text-xs text-white/60">{t('coreValueLabel')}</p>
              <p className="text-sm font-semibold text-white">{t('coreValue')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm border border-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10"><Award size={24} className="text-yellow-400" /></div>
            <div>
              <p className="text-xs text-white/60">{t('certLabel')}</p>
              <p className="text-sm font-semibold text-white">{t('cert')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm border border-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10"><Heart size={24} className="text-yellow-400" /></div>
            <div>
              <p className="text-xs text-white/60">{t('commitmentLabel')}</p>
              <p className="text-sm font-semibold text-white">{t('commitment')}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}