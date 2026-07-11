"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

import ceoImage from "@/assets/images/about/ceo.jpeg";

export default function CEOMessage() {
  return (
    <section className="bg-gray-100 py-32">
      <Container>

        <SectionHeader
          overline="Leadership"
          title="A message from our Chief Executive Officer."
          align="center"
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Message */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-teal-900 text-white">
              <Quote size={22} />
            </div>

            <blockquote className="text-3xl font-semibold leading-tight text-gray-900">
              We believe sustainable success is built through trust,
              accountability, and delivering excellence every single day.
            </blockquote>

            <p className="mt-8 leading-8 text-gray-600">
              Every project we undertake represents more than construction—it
              reflects our commitment to our clients, our people, and the
              communities we serve. By combining technical excellence,
              innovation, and uncompromising safety standards, we continue to
              build lasting partnerships and create long-term value across every
              sector we operate in.
            </p>

            <div className="mt-10 border-l-2 border-yellow-500 pl-5">
              <h4 className="text-lg font-semibold text-gray-900">
                Hadi Musfer Ali Al Gashanin
              </h4>

              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gray-500">
                Chief Executive Officer
              </p>
            </div>

          </motion.div>

          {/* CEO Image */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .15 }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-3xl">

              <Image
                src={ceoImage}
                alt="Chief Executive Officer"
                className="h-[620px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent" />

            </div>

            {/* Decoration */}

            <div className="absolute -bottom-6 -left-6 h-36 w-36 rounded-full border border-yellow-400/30" />

            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal-100" />

          </motion.div>

        </div>

      </Container>
    </section>
  );
}