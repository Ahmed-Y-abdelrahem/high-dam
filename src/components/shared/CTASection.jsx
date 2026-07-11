"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTASection({
  title = "Ready to Execute Your Next Mega Project?",
  description = "Partner with High Dam Group for decisive action, disciplined execution, and absolute certainty.",
  primaryLabel = "Start a Conversation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Companies",
  secondaryHref = "/about",
}) {
  return (
    <section className="relative overflow-hidden bg-teal-900 py-24 md:py-32">
      <div className="azal-watermark" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">{description}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryHref} variant="secondary">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="outlineLight">
              {secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}