"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle, Target, Heart, Users } from "lucide-react";

const commitments = [
  {
    icon: Heart,
    title: "People First",
    description: "The safety and well-being of our people is our highest priority, above all production targets.",
  },
  {
    icon: Target,
    title: "Zero Harm Goal",
    description: "We strive for zero injuries, zero illnesses, and zero environmental incidents on every project.",
  },
  {
    icon: Users,
    title: "Shared Responsibility",
    description: "Safety is everyone's responsibility, from leadership to every team member on site.",
  },
  {
    icon: CheckCircle,
    title: "Continuous Improvement",
    description: "We regularly review and enhance our HSE systems to achieve better outcomes.",
  },
];

export default function SafetyCommitment() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader
          overline="Our Commitment"
          title="Safety is not just a policy, it's our culture."
          description="Every member of High Dam Group is committed to working safely and ensuring the safety of others."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {commitments.map((commitment, i) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex items-start gap-5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-700/10 transition-all duration-300 group-hover:bg-teal-700">
                <commitment.icon size={28} className="text-teal-700 transition-colors duration-300 group-hover:text-yellow-400" />
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-teal-900 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}