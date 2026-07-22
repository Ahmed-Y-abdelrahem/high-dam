"use client";

import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  const t = useTranslations('contactPage.info');
  
  // تقسيم العنوان إلى أسطر للحفاظ على <br />
  const addressLines = t('address').split('\n');

  return (
    <div>
      <p className="readout mb-4 text-xs text-brand-700">{t('label')}</p>
      <h2 className="font-display text-3xl font-bold text-brand-900">
        {t('title')}
      </h2>

      <ul className="mt-10 space-y-6">
        <li className="flex items-start gap-4">
          <MapPin size={20} className="mt-1 shrink-0 text-brand-700" />
          <span className="text-gray-700">
            {addressLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < addressLines.length - 1 && <br />}
              </span>
            ))}
          </span>
        </li>
        <li className="flex items-center gap-4">
          <Phone size={20} className="shrink-0 text-brand-700" />
          <span className="text-gray-700">{t('phone')}</span>
        </li>
        <li className="flex items-center gap-4">
          <Mail size={20} className="shrink-0 text-brand-700" />
          <span className="text-gray-700">{t('email')}</span>
        </li>
      </ul>

      <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
        <iframe
          title={t('mapTitle')}
          className="h-72 w-full"
          loading="lazy"
          src="https://www.google.com/maps?q=Dhahran+Road+Thugbah+Al+Khobar+Saudi+Arabia&output=embed"
        />
      </div>
    </div>
  );
}