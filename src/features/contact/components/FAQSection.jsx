"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

export default function FAQSection() {
  const t = useTranslations('contactPage.faq');
  const faqs = t.raw('items');
  
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader
          overline={t('overline')}
          title={t('title')}
          align="center"
        />
        <div className="mt-16 mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-gray-50">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg font-bold text-brand-900">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-brand-700 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}