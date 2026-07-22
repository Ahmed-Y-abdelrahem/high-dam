"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustryProjects({ projects, industrySlug }) {
  const locale = useLocale();
  const t = useTranslations('industriesPage.detail.projects');

  // ✅ استخراج المصفوفة بشكل آمن سواء كانت مصفوفة أو كائن {en, ar}
  const projectsArray = Array.isArray(projects) 
    ? projects 
    : (projects[locale] || projects.en || []);

  return (
    <section className="relative overflow-hidden bg-brand-900 py-28">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full" style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} />
      </div>

      <Container className="relative z-10">
        <SectionHeader overline={t('overline')} title={t('title')} description={t('description')} dark />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsArray.map((project, i) => {
            // التعامل مع كل عنصر إذا كان كائناً أو نصاً عادياً
            const projectName = typeof project === 'object' ? (project[locale] || project.en) : project;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:from-white/15 hover:to-white/10"
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10 transition-all duration-300 group-hover:bg-yellow-400">
                  <Building2 size={24} className="text-yellow-400 transition-colors duration-300 group-hover:text-brand-900" />
                </div>

                {/* Project Name */}
                <h3 className="font-display text-lg font-bold text-white leading-tight mb-3 transition-colors duration-300 group-hover:text-yellow-400">
                  {projectName}
                </h3>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-yellow-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-xs font-semibold">{t('viewDetails')}</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400/10 px-6 py-3 text-sm font-semibold text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-brand-900"
          >
            {t('viewAll')}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}