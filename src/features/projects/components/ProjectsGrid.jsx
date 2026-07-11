"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ProjectCard from "@/components/domain/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader
          overline="Selected Projects"
          title="From early works to final handover."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
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
      </Container>
    </section>
  );
}
