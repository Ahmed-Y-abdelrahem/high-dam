"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion"; // أُعيدت للحفاظ على حركة الظهور الأصلية إن وجدت
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function IndustryMainCTA() {
  const locale = useLocale();
  const t = useTranslations('industriesPage.cta');

  // ✅ دالة إصلاح الروابط (تعمل في الخلفية ولا تؤثر على التصميم نهائياً)
  const getLocalizedHref = (href) => {
    if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) {
      return href;
    }
    // منع تكرار اللغة إذا كانت موجودة بالفعل
    if (href.startsWith(`/${locale}/`)) return href;
    
    const cleanHref = href.startsWith('/') ? href.slice(1) : href;
    return `/${locale}/${cleanHref}`;
  };

  return (
    // ملاحظة: استخدمنا bg-brand-900 ليتماشى مع اللوجو الجديد. 
    // إذا كنت تفضل اللون الأخضر المزرق القديم، غيّر "bg-brand-900" إلى "bg-teal-900"
    <section className="bg-brand-900 py-28">
      <Container className="text-center">
        
        {/* غلاف الحركة للحفاظ على نفس تجربة المستخدم الأصلية */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            {t('desc')}
          </p>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* ✅ هنا فقط نطبق الدالة لضمان وصول الرابط بشكل صحيح دون تغيير شكل الزر */}
            <Button href={getLocalizedHref('/contact')} variant="secondary">
              {t('btn1')}
            </Button>
            <Button href={getLocalizedHref('/projects')} variant="outlineLight">
              {t('btn2')}
            </Button>
          </div>
        </motion.div>
        
      </Container>
    </section>
  );
}