"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase, Scale, Shield, Heart, Building2, Users,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FIRM } from "@/config/firmData";
import { fadeUp, staggerFast as stagger } from "@/lib/variants";

const ICONS: Record<string, React.ElementType> = {
  Briefcase, Scale, Shield, Heart, Building2, Users,
};

export default function PracticeAreas() {
  const { lang, dict } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="practice-areas" className="bg-dark py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4 block">
            {dict.practiceAreas.label[lang]}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-text-light">
            {dict.practiceAreas.title[lang]}
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {FIRM.practiceAreas.map((area) => {
            const Icon = ICONS[area.icon] ?? Briefcase;
            return (
              <motion.div
                key={area.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-dark-light p-8 rounded-sm border border-gold/0 hover:border-gold/30 transition-colors duration-300 cursor-default overflow-hidden"
              >
                {/* Gold top line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-12 h-12 border border-gold/30 rounded-sm flex items-center justify-center mb-6 group-hover:border-gold/60 transition-colors">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-light mb-3">
                  {area.title[lang]}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {area.desc[lang]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
