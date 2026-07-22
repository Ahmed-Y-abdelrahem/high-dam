"use client";

import { useLocale } from 'next-intl';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function IndustryCard({ industry, index }) {
  const locale = useLocale();
  
  const getText = (field) => {
    if (typeof industry[field] === 'object') {
      return industry[field][locale] || industry[field].en;
    }
    return industry[field];
  };

  return (
    <Link href={`/${locale}/industries/${industry.slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl border border-white/10"
      >
        {/* الصورة باستخدام Next/Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={industry.image}
            alt={getText('altText')}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/70 to-transparent transition-opacity duration-500 group-hover:from-brand-950/90" />

        {/* Top Right Arrow */}
        <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-yellow-500 group-hover:rotate-45">
          <ArrowUpRight size={18} className="text-white transition-colors duration-300 group-hover:text-brand-900" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <p className="readout mb-2 text-xs tracking-[2px] text-yellow-500 font-bold">
            {industry.code}
          </p>
          <h3 className="font-display text-xl font-bold text-white leading-tight mb-2 transition-colors duration-300 group-hover:text-yellow-400">
            {getText('name')}
          </h3>
          <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
            {getText('description')}
          </p>

          {/* Bottom Line */}
          <div className="mt-4 h-[2px] w-10 bg-yellow-500 transition-all duration-500 group-hover:w-full" />
        </div>
      </motion.div>
    </Link>
  );
}