"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowLeft, MapPin, Calendar, DollarSign, Clock, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectHero({ project }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-teal-900 pb-20 pt-40">
      <div className="hdg-watermark" />
      
      {/* الصورة باستخدام Next/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.image}
          alt={project.altText || project.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-900/70 to-teal-900/30" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.05]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <Container className="relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors mb-6 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SectionLabel label={`${project.sector} • ${project.year}`} dark />
        </motion.div>

        {/* Project Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {project.name}
        </motion.h1>

        {/* Project Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Project Details Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/15"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10">
              <MapPin size={20} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/60">Location</p>
              <p className="text-sm font-semibold text-white">{project.location}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/15"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10">
              <Calendar size={20} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/60">Year</p>
              <p className="text-sm font-semibold text-white">{project.year}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/15"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10">
              <DollarSign size={20} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/60">Value</p>
              <p className="text-sm font-semibold text-white">{project.value}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/15"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10">
              <Clock size={20} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/60">Duration</p>
              <p className="text-sm font-semibold text-white">{project.duration}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Client & Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/10">
            <Building2 size={16} className="text-yellow-400" />
            <span className="text-xs text-white/80">Client: <span className="font-semibold text-white">{project.client}</span></span>
          </div>
          
          {project.status && (
            <div className="flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-2 backdrop-blur-sm border border-yellow-400/30">
              <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-xs font-semibold text-yellow-400">{project.status}</span>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}