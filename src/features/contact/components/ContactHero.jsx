"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactHero() {
  const t = useTranslations('contactPage.hero');

  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-brand-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/contact/hero.jpg)" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-brand-900/30" />
      </div>
      <Container className="relative z-10">
        <SectionLabel label={t('label')} dark />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {t('title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          {t('description')}
        </motion.p>
      </Container>
    </section>
  );
}