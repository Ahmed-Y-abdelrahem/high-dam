"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowLeft, Building2, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function IndustryHero({ industry }) {
  const locale = useLocale();
  const t = useTranslations('industriesPage.detail.hero');

  const getText = (field) => typeof industry[field] === 'object' ? (industry[field][locale] || industry[field].en) : industry[field];
  const getArray = (field) => Array.isArray(industry[field]) ? industry[field] : (industry[field][locale] || industry[field].en);

  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-brand-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      <div className="absolute inset-0 z-0">
        <Image src={industry.image} alt={getText('altText')} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/70 to-brand-900/30" />
      </div>
      <div className="absolute inset-0 z-[1] opacity-[0.05]">
        <div className="h-full w-full" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <Container className="relative z-10">
        <Link href="/industries" className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors mb-6 group">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm">{t('back')}</span>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <SectionLabel label={`${t('sector')} • ${industry.code}`} dark />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          {getText('name')}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
          {getText('longDescription')}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
            <Building2 size={20} className="text-yellow-400" />
            <div>
              <p className="text-xs text-white/60">{t('sector')}</p>
              <p className="text-sm font-semibold text-white">{getText('name')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
            <Briefcase size={20} className="text-yellow-400" />
            <div>
              <p className="text-xs text-white/60">{t('services')}</p>
              <p className="text-sm font-semibold text-white">{getArray('services').length}+ {t('capabilities')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
            <MapPin size={20} className="text-yellow-400" />
            <div>
              <p className="text-xs text-white/60">{t('coverage')}</p>
              <p className="text-sm font-semibold text-white">{t('kingdomWide')}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}