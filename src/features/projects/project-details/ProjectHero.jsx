"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowLeft, MapPin, Calendar, DollarSign, Clock, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectHero({ project }) {
  const locale = useLocale();
  const t = useTranslations('projectDetails.hero');

  const getText = (field) => {
    if (typeof project[field] === 'object' && project[field] !== null) {
      return project[field][locale] || project[field].en;
    }
    return project[field];
  };

  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-brand-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      <div className="absolute inset-0 z-0">
        <Image src={project.image} alt={getText('altText') || getText('name')} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/70 to-brand-900/30" />
      </div>
      <div className="absolute inset-0 z-[1] opacity-[0.05]">
        <div className="h-full w-full" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors mb-6 group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">{t('back')}</span>
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <SectionLabel label={`${getText('sector')} • ${project.year}`} dark />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          {getText('name')}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
          {getText('description')}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.3 }} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/15">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10"><MapPin size={20} className="text-yellow-400" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/60">{t('location')}</p>
              <p className="text-sm font-semibold text-white">{getText('location')}</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.3 }} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/15">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10"><Calendar size={20} className="text-yellow-400" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/60">{t('year')}</p>
              <p className="text-sm font-semibold text-white">{project.year}</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.3 }} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/15">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10"><DollarSign size={20} className="text-yellow-400" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/60">{t('value')}</p>
              <p className="text-sm font-semibold text-white">{getText('value')}</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.3 }} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/15">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10"><Clock size={20} className="text-yellow-400" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/60">{t('duration')}</p>
              <p className="text-sm font-semibold text-white">{getText('duration')}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/10">
            <Building2 size={16} className="text-yellow-400" />
            <span className="text-xs text-white/80">{t('client')}: <span className="font-semibold text-white">{getText('client')}</span></span>
          </div>
          {project.status && (
            <div className="flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-2 backdrop-blur-sm border border-yellow-400/30">
              <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-xs font-semibold text-yellow-400">{getText('status')}</span>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}