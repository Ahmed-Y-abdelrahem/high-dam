"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Check } from "lucide-react";

export default function BenefitsSection() {
  const t = useTranslations('careersPage.benefits');
  const benefits = t.raw('items');

  return (
    <section className="bg-brand-900 py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} dark />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <Check size={20} className="mt-0.5 shrink-0 text-yellow-400" />
              <span className="text-sm text-white/80">{benefit}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}