"use client";

import { useLocale } from 'next-intl';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function ServiceCard({ service, index }) {
  const locale = useLocale();
  
  const getText = (field) => {
    if (typeof service[field] === 'object' && service[field] !== null) {
      return service[field][locale] || service[field].en;
    }
    return service[field];
  };

  return (
    <Link href={`/${locale}/services/${service.slug}`} className="block h-full">
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ y: -8 }}
        className="group relative h-full"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-transparent to-brand-500/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
        
        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-brand-950 shadow-lg transition-all duration-500 group-hover:border-yellow-400/40">
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={service.image}
              alt={getText('altText')}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/40 to-transparent" />
            <div className="absolute top-4 left-4 rounded-full bg-black/30 px-3 py-1 text-[10px] tracking-widest text-yellow-300 backdrop-blur-md">
              {service.code}
            </div>
          </div>
          
          <div className="relative p-6">
            <h3 className="text-lg font-bold text-white transition-colors group-hover:text-yellow-300">
              {getText('title')}
            </h3>
            <p className="mt-2 text-sm text-white/60 line-clamp-2">
              {getText('shortDescription')}
            </p>
            <div className="mt-5 flex items-center gap-2 text-yellow-400 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <span className="text-xs font-semibold tracking-wide">
                {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
              </span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-500 to-transparent transition-all duration-500 group-hover:w-full" />
        </div>
      </motion.div>
    </Link>
  );
}