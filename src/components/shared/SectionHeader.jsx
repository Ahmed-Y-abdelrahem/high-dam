"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldLine from "@/components/ui/GoldLine";

export default function SectionHeader({
  index,
  overline,
  title,
  description,
  dark = false,
  align = "left",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <SectionLabel index={index} label={overline} dark={dark} />
      <h2
        className={`font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-teal-900"
        }`}
      >
        {title}
      </h2>
      <GoldLine className="my-6" align={isCenter ? "center" : "left"} />
      {description && (
        <p
          className={`text-base leading-relaxed md:text-lg ${
            dark ? "text-white/70" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}