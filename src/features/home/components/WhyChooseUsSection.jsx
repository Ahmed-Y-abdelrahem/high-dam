"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { 
  Target, ShieldCheck, Gauge, Handshake, 
  Leaf, Users 
} from "lucide-react";
import { coreValues } from "@/data/stats";

const valueIcons = [Target, ShieldCheck, Gauge, Handshake, Leaf, Users];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader
          overline="Why High Dam"
          title="Six principles behind every project we execute."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, i) => {
            const Icon = valueIcons[i];
            return (
              <motion.div
                key={value.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:border-teal-700 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* رقم القيمة */}
                <div className="absolute top-4 right-4 font-display text-6xl font-bold text-gray-100 transition-colors duration-300 group-hover:text-teal-50">
                  {value.code}
                </div>

                {/* الأيقونة */}
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-700/10 transition-all duration-300 group-hover:bg-teal-700">
                  <Icon 
                    size={28} 
                    className="text-teal-700 transition-colors duration-300 group-hover:text-yellow-400" 
                  />
                </div>

                {/* المحتوى */}
                <h3 className="relative z-10 font-display text-xl font-bold text-teal-900 transition-colors duration-300 group-hover:text-teal-700">
                  {value.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-600">
                  {value.description}
                </p>

                {/* خط متحرك */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}