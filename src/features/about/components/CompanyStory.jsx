"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Building2, Rocket, ShieldCheck, Clock3, Handshake } from "lucide-react";
import Container from "@/components/ui/Container";

const pillarKeys = ["fast", "risk", "ops", "partner"];
const pillarIcons = [Rocket, ShieldCheck, Clock3, Handshake];

export default function CompanyStory() {
  const t = useTranslations('about.story');

  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-900 text-white">
              <Building2 size={30} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">{t('whoWeAre')}</span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">{t('title')}</h2>
            <p className="mt-6 max-w-xl leading-8 text-gray-600">{t('description')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .15 }} className="grid gap-5 sm:grid-cols-2">
            {pillarKeys.map((key, i) => {
              const Icon = pillarIcons[i];
              return (
                <div key={key} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-700 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{t(`pillars.${key}.title`)}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{t(`pillars.${key}.desc`)}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}