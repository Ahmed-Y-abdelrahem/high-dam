"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const statKeys = ["majorProjects", "yearsExperience", "clientSatisfaction", "safetyIncidents"];
const projectStats = [
  { value: 50, suffix: "+" },
  { value: 10, suffix: "+" },
  { value: 100, suffix: "%" },
  { value: 0, suffix: "" },
];

export default function ProjectsStats() {
  const t = useTranslations('projectsPage.stats');

  return (
    <section className="bg-brand-900 py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {projectStats.map((stat, i) => (
            <motion.div
              key={statKeys[i]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-white/70">{t(statKeys[i])}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}