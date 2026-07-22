"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

export default function WhyWorkWithUs() {
  const t = useTranslations('careersPage.whyJoin');
  const reasons = t.raw('reasons');

  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-display text-lg font-bold text-brand-900">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}