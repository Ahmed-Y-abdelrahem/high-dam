"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

export default function HiringProcess() {
  const t = useTranslations('careersPage.hiringProcess');
  const steps = t.raw('steps');

  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} align="center" />
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="readout mb-3 text-xs text-brand-700">{step.step}</p>
              <h3 className="font-display text-lg font-bold text-brand-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}