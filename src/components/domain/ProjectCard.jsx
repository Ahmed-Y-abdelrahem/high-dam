"use client";

import { useLocale } from 'next-intl';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const locale = useLocale();
  
  // دالة مساعدة لاستخراج النص حسب اللغة
  const getText = (field) => {
    if (typeof project[field] === 'object' && project[field] !== null) {
      return project[field][locale] || project[field].en;
    }
    return project[field];
  };

  return (
    <Link href={`/${locale}/projects/${project.slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-brand-700 hover:-translate-y-2"
      >
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={getText('altText')}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/20 to-transparent" />
          
          {project.status && (
            <span className="absolute right-4 top-4 rounded-full bg-yellow-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-900 shadow-lg">
              {getText('status')}
            </span>
          )}
          
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm">
            <Calendar size={12} className="text-yellow-400" />
            <span className="text-xs font-semibold text-white">{project.year}</span>
          </div>
          
          <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-yellow-500 group-hover:rotate-45">
            <ArrowUpRight size={18} className="text-white transition-colors duration-300 group-hover:text-brand-900" />
          </div>
        </div>

        <div className="relative p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="readout text-xs tracking-[2px] text-brand-700 font-bold">{project.code}</span>
            <span className="text-xs text-gray-500 font-medium">{getText('sector')}</span>
          </div>
          
          <h3 className="font-display text-lg font-bold leading-snug text-brand-900 mb-2 transition-colors duration-300 group-hover:text-brand-700">
            {getText('name')}
          </h3>
          
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
            {getText('client')}
          </p>
          
          <p className="text-sm leading-relaxed text-gray-600 line-clamp-2 mb-4">
            {getText('shortDescription')}
          </p>
          
          <div className="h-[2px] w-10 bg-yellow-500 transition-all duration-500 group-hover:w-full" />
        </div>
      </motion.div>
    </Link>
  );
}