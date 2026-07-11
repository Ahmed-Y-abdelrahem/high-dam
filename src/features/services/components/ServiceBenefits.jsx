"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  Shield,
  Rocket,
  Layers,
  Wallet,
  Award,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const benefits = [
  {
    icon: UserCheck,
    text: "Single point of contact for all project needs",
  },
  {
    icon: Shield,
    text: "Reduced contractor interfaces and coordination risks",
  },
  {
    icon: Rocket,
    text: "Faster mobilization and project start-up",
  },
  {
    icon: Layers,
    text: "Integrated quality control across all services",
  },
  {
    icon: Wallet,
    text: "Cost efficiency through bundled solutions",
  },
  {
    icon: Award,
    text: "Proven track record with major clients",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
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

export default function ServiceBenefits() {
  return (
    <section className="bg-teal-950 py-28">
      <Container>
        <SectionHeader
          overline="Benefits"
          title="Why choose our integrated approach?"
          dark
          align="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                {/* icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-900 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={18} className="text-yellow-400" />
                </div>

                {/* text */}
                <p className="text-sm leading-relaxed text-white/80">
                  {b.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}