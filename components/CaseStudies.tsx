"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { FIRM } from "@/config/firmData";
import { Clock, TrendingUp, DollarSign } from "lucide-react";
import { fadeUp, stagger } from "@/lib/variants";

export default function CaseStudies() {
  const { lang, dict } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="cases" className="bg-dark py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-4"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4 block">
            {dict.caseStudies.label[lang]}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-text-light mb-4">
            {dict.caseStudies.title[lang]}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-muted max-w-2xl mx-auto mb-14">
            {dict.caseStudies.subtitle[lang]}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {FIRM.caseStudies.map((cs) => (
            <motion.div
              key={cs.id}
              variants={fadeUp}
              className="bg-dark-light rounded-sm p-7 border border-gold/0 hover:border-gold/20 transition-colors duration-300 flex flex-col"
            >
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold font-semibold border border-gold/30 px-3 py-1 rounded-full mb-5 self-start">
                {cs.category[lang]}
              </span>
              <h3 className="font-display text-xl font-semibold text-text-light leading-snug mb-3">
                {cs.title[lang]}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">
                {cs.summary[lang]}
              </p>
              {/* Stats row */}
              <div className="border-t border-gold/10 pt-5 grid grid-cols-3 gap-3">
                <div className="text-center">
                  <TrendingUp size={14} className="text-gold mx-auto mb-1" />
                  <div className="text-xs text-text-muted mb-0.5">{dict.caseStudies.outcome[lang]}</div>
                  <div className="text-xs font-medium text-text-light leading-snug">{cs.outcome[lang]}</div>
                </div>
                <div className="text-center border-x border-gold/10">
                  <Clock size={14} className="text-gold mx-auto mb-1" />
                  <div className="text-xs text-text-muted mb-0.5">{dict.caseStudies.duration[lang]}</div>
                  <div className="text-xs font-medium text-text-light">{cs.duration[lang]}</div>
                </div>
                <div className="text-center">
                  <DollarSign size={14} className="text-gold mx-auto mb-1" />
                  <div className="text-xs text-text-muted mb-0.5">{dict.caseStudies.value[lang]}</div>
                  <div className="text-xs font-semibold text-gold">{cs.value}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center text-xs text-text-muted mt-10 opacity-60"
        >
          {dict.caseStudies.confidential[lang]}
        </motion.p>
      </div>
    </section>
  );
}
