"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ProjectCard from "@/components/domain/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

const ITEMS_PER_PAGE = 3;

export default function ProjectsGrid() {
  const locale = useLocale();
  const t = useTranslations('projectsPage.grid');
  
  // حالة لتحديد عدد المشاريع المعروضة (تبدأ بـ 4)
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // قص المصفوفة لعرض العدد المطلوب فقط
  const visibleProjects = projects.slice(0, visibleCount);
  
  // التحقق مما إذا كان هناك المزيد من المشاريع لعرضها
  const hasMore = visibleCount < projects.length;

  // دالة لزيادة العدد بمقدار 4 عند الضغط على الزر
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // نص الزر باللغتين دون الحاجة لتعديل ملفات الترجمة (حفاظاً على طلبك)
  const loadMoreText = locale === 'ar' ? "عرض المزيد" : "Load More";

  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader overline={t('overline')} title={t('title')} />
        
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>

        {/* زر عرض المزيد يظهر فقط إذا كان هناك مشاريع متبقية */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <Button onClick={handleLoadMore} variant="outline">
              {loadMoreText}
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}