import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

/**
 * Reusable stat card for statistics sections
 * @param {Object} stat - { icon, value, suffix, label }
 * @param {number} index - Animation delay index
 */
export default function StatCard({ stat, index }) {
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 border border-yellow-400/20 transition-all duration-300 group-hover:bg-yellow-400 group-hover:scale-110">
          <Icon size={32} className="text-yellow-400 transition-colors duration-300 group-hover:text-brand-900" />
        </div>
      </div>

      <div className="text-4xl font-bold text-yellow-400 md:text-5xl font-display mb-2">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </div>

      <p className="text-sm text-white/70 leading-snug">{stat.label}</p>

      <div className="mt-4 h-[2px] w-12 bg-yellow-400/30 mx-auto transition-all duration-300 group-hover:w-full group-hover:bg-yellow-400" />
    </motion.div>
  );
}