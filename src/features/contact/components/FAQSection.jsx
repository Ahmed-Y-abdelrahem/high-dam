"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const faqs = [
  { question: "What services does High Dam Group provide?", answer: "We provide integrated project execution services including civil works, MEP, dewatering, shoring, manpower supply, and equipment rental." },
  { question: "Which industries do you serve?", answer: "We serve Oil & Gas, infrastructure, healthcare, hospitality, commercial, and government sectors across Saudi Arabia." },
  { question: "What are your HSE standards?", answer: "We maintain ISO 9001, 14001, and 45001 certifications and comply with ARAMCO, SABIC, and EPC HSE requirements." },
  { question: "How can I request a proposal?", answer: "You can contact us through our contact form, email, or phone. Our team will respond within one business day." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader
          index="02"
          overline="FAQ"
          title="Frequently asked questions."
          align="center"
        />
        <div className="mt-16 mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-gray-50">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg font-bold text-teal-900">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-teal-700 transition-transform ${
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
                    <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
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