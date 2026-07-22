"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/domain/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-white py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            overline={t('overline')}
            title={t('title')}
          />
          <Button href="/projects" variant="primary">
            {t('cta')}
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.code} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}