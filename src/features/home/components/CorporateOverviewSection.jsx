"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Target, Users, Zap, Shield } from "lucide-react";
import Image from "next/image";
import aboutImg from "@/assets/images/about/about-company.png"; // استيراد الصورة من assets

const features = [
  { icon: Target, title: "Single Point of Contact", desc: "One accountable team for all project needs" },
  { icon: Users, title: "Integrated Expertise", desc: "5 specialized companies under one group" },
  { icon: Zap, title: "Rapid Mobilization", desc: "Fast deployment of resources and manpower" },
  { icon: Shield, title: "Quality Assured", desc: "ISO certified management systems" },
];

export default function CorporateOverviewSection() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* النص */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              overline="Corporate Overview"
              title="A one-stop-shop delivery model built on integration and control."
              description="Our operating model is built around a one-stop solution approach, designed to reduce contractor interfaces, accelerate mobilization, and maintain full accountability from early works through project completion."
            />

            {/* المميزات */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-teal-700 hover:shadow-lg hover:-translate-y-1"
                >
                  <feature.icon 
                    size={24} 
                    className="text-teal-700 transition-transform duration-300 group-hover:scale-110" 
                  />
                  <h4 className="mt-3 font-display text-sm font-bold text-teal-900">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl md:h-[500px]">
              <Image
                src={aboutImg}
                alt="High Dam Group corporate office and facilities in Saudi Arabia"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
              
              {/* Badge على الصورة */}
              <div className="absolute bottom-6 left-6 rounded-xl bg-yellow-500 px-4 py-3 shadow-lg">
                <p className="readout text-xs font-bold text-teal-900">EST. 2014</p>
                <p className="text-xs text-teal-900">A Decade of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}