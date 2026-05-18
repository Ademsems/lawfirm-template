"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { FIRM } from "@/config/firmData";
import { fadeUp, stagger } from "@/lib/variants";

export default function Testimonials() {
  const { lang, dict } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="testimonials" className="bg-dark-light py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4 block">
            {dict.testimonials.label[lang]}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-text-light">
            {dict.testimonials.title[lang]}
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {FIRM.testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="bg-dark rounded-sm p-8 border border-gold/0 hover:border-gold/20 transition-colors duration-300 flex flex-col"
            >
              {/* Decorative quote mark */}
              <span className="font-display text-6xl text-gold/20 leading-none mb-4 select-none">
                &ldquo;
              </span>
              <p className="font-display text-lg italic text-text-light leading-relaxed flex-1 mb-6">
                {t.quote[lang]}
              </p>
              <div className="border-t border-gold/10 pt-5">
                <div className="font-semibold text-text-light text-sm">{t.author}</div>
                <div className="text-text-muted text-xs mt-0.5">{t.company[lang]}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
