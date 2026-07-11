"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Rocket,
  ShieldCheck,
  Clock3,
  Handshake,
} from "lucide-react";

import Container from "@/components/ui/Container";

const pillars = [
  {
    icon: Rocket,
    title: "Fast Execution",
    description: "Accelerates project execution and mobilization.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Reduction",
    description: "Minimizes interface and commercial risks for clients.",
  },
  {
    icon: Clock3,
    title: "Operational Excellence",
    description: "Maintains the highest standards of safety, quality and compliance.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "Building trusted relationships through consistent performance.",
  },
];

export default function CompanyStory() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-900 text-white">
              <Building2 size={30} />
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">
              Who We Are
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
              A leading Tier-1 general contracting and integrated project execution group.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              We partner with government entities, infrastructure developers,
              and industrial leaders to deliver complex projects through a
              fully integrated execution model that combines engineering,
              construction, and specialized services under one accountable group.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .15 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-700 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}