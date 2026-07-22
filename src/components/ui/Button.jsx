"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300";

const variants = {
  primary: "bg-brand-700 text-white hover:bg-brand-800 hover:shadow-lg hover:shadow-brand-700/20",
  secondary: "bg-yellow-500 text-brand-900 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20",
  outline: "border border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white",
  outlineLight: "border border-white/30 text-white hover:border-yellow-500 hover:bg-yellow-500 hover:text-brand-900",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
  ...props
}) {
  const locale = useLocale();

  // ✅ دالة ذكية لإصلاح الروابط تلقائياً دون التأثير على التصميم
  const getLocalizedHref = (url) => {
    if (!url) return "#";
    
    // إذا كان رابط خارجي، بريد إلكتروني، هاتف، أو anchor، اتركه كما هو
    if (url.startsWith("http") || url.startsWith("mailto") || url.startsWith("tel") || url.startsWith("#")) {
      return url;
    }
    
    // إذا كان الرابط يحتوي بالفعل على اللغة، اتركه كما هو لتجنب التكرار
    if (url.startsWith(`/${locale}/`) || url === `/${locale}`) {
      return url;
    }
    
    // إزالة الشرطة المائلة الأولى إن وجدت، ثم إضافة اللغة
    const cleanUrl = url.startsWith("/") ? url.slice(1) : url;
    return `/${locale}/${cleanUrl}`;
  };

  const finalHref = getLocalizedHref(href);
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      )}
    </>
  );

  // إذا كان هناك رابط، اعرضه كـ Next.js Link مع الرابط المصحح
  if (href) {
    return (
      <Link href={finalHref} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // إذا لم يكن هناك رابط، اعرضه كـ button عادي
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}