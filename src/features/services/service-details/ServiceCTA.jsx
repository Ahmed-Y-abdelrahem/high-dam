"use client";

import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ServiceCTA({ serviceTitle }) {
  const locale = useLocale();
  const t = useTranslations('servicesPage.detail.cta');

  // التعامل مع serviceTitle إذا كان كائناً {en, ar}
  const getTitle = () => {
    if (typeof serviceTitle === 'object' && serviceTitle !== null) {
      return serviceTitle[locale] || serviceTitle.en;
    }
    return serviceTitle;
  };

  return (
    <section className="bg-gray-50 py-28">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-brand-900 md:text-4xl">
          {t('title', { serviceTitle: getTitle() })}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">{t('desc')}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary">{t('btn1')}</Button>
          <Button href="/services" variant="outline">{t('btn2')}</Button>
        </div>
      </Container>
    </section>
  );
}