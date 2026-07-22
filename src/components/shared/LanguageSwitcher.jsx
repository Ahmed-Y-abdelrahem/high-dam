"use client";

import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const newLocale = locale === 'en' ? 'ar' : 'en';

  return (
    <Link
      href={pathname}
      locale={newLocale}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all duration-300"
      aria-label="Switch language"
    >
      <Globe size={16} className="text-yellow-400" />
      <span className="text-sm font-semibold text-white">
        {locale === 'en' ? 'العربية' : 'English'}
      </span>
    </Link>
  );
}