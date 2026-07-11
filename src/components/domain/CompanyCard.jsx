"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CompanyCard({ company, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/services#${company.slug}`}
        className="group block h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-700 hover:shadow-xl"
      >
        <div className="flex items-start justify-between">
          <span className="readout text-xs text-teal-700">{company.code}</span>
          <ArrowUpRight
            size={18}
            className="text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-yellow-500"
          />
        </div>
        <h3 className="mt-6 font-display text-xl font-bold text-teal-900">{company.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">{company.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-gray-600">{company.role}</p>
        <div className="mt-6 h-[2px] w-10 bg-yellow-500 transition-all duration-300 group-hover:w-16" />
      </Link>
    </motion.div>
  );
}