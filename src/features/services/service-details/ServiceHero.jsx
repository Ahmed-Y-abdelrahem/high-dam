"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowLeft, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServiceHero({ service }) {
  const locale = useLocale();

  const getText = (field) => {
    if (typeof service[field] === 'object' && service[field] !== null) {
      return service[field][locale] || service[field].en;
    }
    return service[field];
  };

  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-brand-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      <div className="absolute inset-0">
        <Image src={service.image} alt={getText('altText')} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-brand-900/30" />
      </div>

      <Container className="relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors mb-6">
          <ArrowLeft size={16} />
          <span className="text-sm">Back to Services</span> {/* يمكن ترجمتها لاحقاً إذا أردت، لكن تركتها إنجليزي للحفاظ على البساطة أو يمكنك استخدام useTranslations */}
        </Link>

        <SectionLabel label={getText('company')} dark />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {getText('title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          {getText('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex items-center gap-3"
        >
          <Building2 size={20} className="text-yellow-400" />
          <span className="text-white/70">Delivered by {getText('company')}</span>
        </motion.div>
      </Container>
    </section>
  );
}