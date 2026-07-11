"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const projectStats = [
  { value: 50, suffix: "+", label: "Major Projects" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 0, suffix: "", label: "Safety Incidents" },
];

export default function ProjectsStats() {
  return (
    <section className="bg-teal-900 py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {projectStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}