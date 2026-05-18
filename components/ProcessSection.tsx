"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { FIRM } from "@/config/firmData";
import { fadeUp, staggerSlow as stagger } from "@/lib/variants";

export default function ProcessSection() {
  const { lang, dict } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" className="bg-cream py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4 block">
            {dict.process.label[lang]}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            {dict.process.title[lang]}
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {FIRM.process.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              className={`flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-8 ${
                i < FIRM.process.length - 1 ? "border-b border-charcoal/10" : ""
              }`}
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-16">
                <span className="font-display text-4xl font-bold text-gold/40">
                  {step.step}
                </span>
              </div>

              {/* Title */}
              <div className="flex-shrink-0 md:w-64">
                <h3 className="font-display text-2xl font-semibold text-charcoal leading-tight">
                  {step.title[lang]}
                </h3>
              </div>

              {/* Description */}
              <div className="flex-1">
                <p className="text-mid leading-relaxed">
                  {step.desc[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
