"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { MapPin } from "lucide-react";

export default function OfficeLocations() {
  const t = useTranslations('contactPage.offices');
  const locations = t.raw('locations');

  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader
          overline={t('overline')}
          title={t('title')}
          align="center"
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {locations.map((office, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
              <MapPin size={24} className="text-brand-700 mb-4" />
              <h3 className="font-display text-lg font-bold text-brand-900">{office.city}</h3>
              <p className="mt-3 text-sm text-gray-600">{office.address}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}