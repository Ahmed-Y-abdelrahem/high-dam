"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Phone, Mail } from "lucide-react";

export default function HSECTA() {
  const t = useTranslations('hsePage.cta');

  return (
    <section className="relative overflow-hidden bg-gray-50 py-28">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #006778 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-10 shadow-2xl md:p-16">
          <div className="text-center">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, type: "spring" }} className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500">
              <Phone size={28} className="text-brand-900" />
            </motion.div>

            <h2 className="font-display text-3xl font-bold text-brand-900 md:text-4xl mb-4">{t('title')}</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600 leading-relaxed mb-10">{t('desc')}</p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Button href="/contact" variant="primary" className="gap-2">{t('btn1')}</Button>
              <Button href="/about" variant="outline">{t('btn2')}</Button>
            </div>

            <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-brand-700" />
                <span>{t('phone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-brand-700" />
                <span>{t('email')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}