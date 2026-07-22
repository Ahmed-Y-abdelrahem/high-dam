"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ServicesCTA() {
  const t = useTranslations('servicesPage.cta');

  return (
    <section className="bg-gray-50 py-28">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-brand-900 md:text-4xl">{t('title')}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">{t('desc')}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary">{t('btn1')}</Button>
          <Button href="/projects" variant="outline">{t('btn2')}</Button>
        </div>
      </Container>
    </section>
  );
}