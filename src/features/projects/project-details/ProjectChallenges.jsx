"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

export default function ProjectChallenges({ project }) {
  // Defensive checks
  if (!project || !project.challenges || !project.solutions || !project.results) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gray-50 py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #006778 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          overline="Challenges & Solutions"
          title="How we delivered excellence."
          description="Every project has unique challenges. Our expertise allows us to overcome obstacles and deliver outstanding results."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                <AlertTriangle size={24} className="text-red-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-teal-900">Challenges</h3>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:border-red-300 hover:shadow-md"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700">{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                <CheckCircle size={24} className="text-teal-700" />
              </div>
              <h3 className="font-display text-xl font-bold text-teal-900">Solutions</h3>
            </div>
            <ul className="space-y-3">
              {project.solutions.map((solution, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:border-teal-700 hover:shadow-md"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                <TrendingUp size={24} className="text-yellow-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-teal-900">Results</h3>
            </div>
            <ul className="space-y-3">
              {project.results.map((result, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                  className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:border-yellow-500 hover:shadow-md"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-xs font-bold text-yellow-600 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700">{result}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}