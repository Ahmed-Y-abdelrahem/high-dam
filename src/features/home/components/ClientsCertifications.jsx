"use client";

import { useLocale, useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { certifications } from "@/data/stats";
import { Award, Shield, CheckCircle } from "lucide-react";

const clients = ["ARAMCO", "SABIC", "SADARA", "GCCIA", "RIYADH METRO", "QIDDIYA", "NEOM"];
const certIcons = [Award, Shield, CheckCircle];

export default function ClientsCertifications() {
  const locale = useLocale();
  const t = useTranslations('clients');

  const getText = (field, item) => {
    if (typeof item[field] === 'object' && item[field] !== null) {
      return item[field][locale] || item[field].en;
    }
    return item[field];
  };

  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader
          overline={t('overline')}
          title={t('title')}
          align="center"
        />

        <div className="mt-14 overflow-hidden border-y border-gray-200 py-8">
          <div className="flex w-max animate-marquee gap-16">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="readout whitespace-nowrap text-lg text-brand-900/40 font-bold"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = certIcons[i];
            return (
              <motion.div
                key={cert.code} // ✅ cert.code هو نص ثابت ("ISO 9001:2015") لذا فهو آمن كـ Key
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-brand-700 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-700/10 transition-all duration-300 group-hover:bg-brand-700">
                  <Icon 
                    size={28} 
                    className="text-brand-700 transition-colors duration-300 group-hover:text-yellow-400" 
                  />
                </div>
                <p className="font-display text-lg font-bold text-brand-900">{cert.code}</p>
                <p className="mt-2 text-sm text-gray-600">
                  {getText('label', cert)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}