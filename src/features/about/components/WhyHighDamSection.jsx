"use client";

import { useLocale, useTranslations } from "next-intl"; // ✅ أضفنا useTranslations
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { companies } from "@/data/companies";

export default function WhyHighDamSection() {
  const locale = useLocale();
  const t = useTranslations('sections.groupStructure'); // ✅ تعريف دالة الترجمة لهذا القسم

  const getText = (field, company) => {
    if (typeof company[field] === 'object' && company[field] !== null) {
      return company[field][locale] || company[field].en;
    }
    return company[field];
  };

  return (
    <section className="bg-white py-28">
      <Container>
        {/* ✅ استبدلنا النصوص الثابتة بدالة الترجمة */}
        <SectionHeader
          overline={t('overline')}
          title={t('title')}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <div
              key={company.slug}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-700 hover:shadow-lg"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-10 right-0 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl" />
              </div>

              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-brand-600 to-transparent opacity-60" />

              <div className="pl-5">
                <p className="text-xs tracking-[0.3em] text-brand-700 font-semibold">
                  {company.code}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-brand-900 transition-colors group-hover:text-brand-700">
                  {getText('name', company)}
                </h3>

                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                  {getText('tagline', company)}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {getText('role', company)}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-600 to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}