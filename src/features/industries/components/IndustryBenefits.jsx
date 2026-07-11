"use client";

import { motion } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  Target,
  Award,
  Users,
  Briefcase,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const benefits = [
  {
    icon: Target,
    text: "Specialized expertise for each sector",
  },
  {
    icon: ShieldCheck,
    text: "Compliance with industry-specific regulations",
  },
  {
    icon: Layers,
    text: "Tailored solutions for unique challenges",
  },
  {
    icon: Award,
    text: "Proven track record in each industry",
  },
  {
    icon: Users,
    text: "Dedicated teams with sector knowledge",
  },
  {
    icon: Briefcase,
    text: "Long-term partnerships with major clients",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function IndustryBenefits() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader
          overline="Our Advantage"
          title="Sector-specific expertise, group-wide accountability."
          align="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-teal-700 hover:shadow-lg"
              >
                {/* subtle glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -top-10 right-0 h-28 w-28 rounded-full bg-teal-500/10 blur-2xl" />
                </div>

                {/* icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 ring-1 ring-teal-100">
                  <Icon size={18} className="text-teal-700" />
                </div>

                {/* text */}
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  {b.text}
                </p>

                {/* bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-teal-600 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}