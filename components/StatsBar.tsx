"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FIRM } from "@/config/firmData";
import { useI18n } from "@/lib/i18n";
import { fadeUp, stagger } from "@/lib/variants";

export default function StatsBar() {
  const { lang } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="stats" className="bg-dark-light py-16 lg:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {FIRM.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`flex flex-col items-center text-center py-8 px-6 ${
                i < FIRM.stats.length - 1 ? "lg:border-r border-gold/10" : ""
              } ${i === 1 ? "border-r border-gold/10 lg:border-r" : ""} ${
                i < 2 ? "border-b lg:border-b-0 border-gold/10" : ""
              }`}
            >
              <span className="font-display text-5xl md:text-6xl font-bold text-gold mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-text-muted uppercase tracking-widest font-medium">
                {stat.label[lang]}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
