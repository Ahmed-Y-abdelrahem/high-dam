"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

export default function MissionVision() {
  const t = useTranslations('about.missionVision');

  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} align="center" />
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative group">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-brand-600 to-transparent" />
            <div className="pl-6">
              <p className="text-xs tracking-[0.3em] text-brand-700 uppercase font-semibold">{t('visionLabel')}</p>
              <h3 className="mt-3 text-2xl font-semibold text-gray-900 leading-snug">{t('visionTitle')}</h3>
              <p className="mt-6 text-base leading-relaxed text-gray-600">{t('visionDesc')}</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-500 to-transparent opacity-70" />
            <div className="pl-6">
              <p className="text-xs tracking-[0.3em] text-yellow-600 uppercase font-semibold">{t('missionLabel')}</p>
              <h3 className="mt-3 text-2xl font-semibold text-gray-900 leading-snug">{t('missionTitle')}</h3>
              <p className="mt-6 text-base leading-relaxed text-gray-600">{t('missionDesc')}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}