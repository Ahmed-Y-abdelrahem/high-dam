"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CareersCTA() {
  const t = useTranslations('careersPage.cta');

  return (
    <section className="bg-white py-28">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-brand-900 md:text-4xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
          {t('description')}
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="primary">
            {t('button')}
          </Button>
        </div>
      </Container>
    </section>
  );
}