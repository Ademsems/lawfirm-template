"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FIRM } from "@/config/firmData";
import { fadeUp, staggerSlow as stagger } from "@/lib/variants";

export default function AboutSection() {
  const { lang, dict } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const highlights = [
    lang === "sk" ? "Najvyššia kvalita právnych služieb" : "Highest quality legal services",
    lang === "sk" ? "Individuálny prístup ku každému klientovi" : "Individual approach for every client",
    lang === "sk" ? "Transparentná komunikácia a ceny" : "Transparent communication and pricing",
    lang === "sk" ? "Skúsenosti pred slovenskými aj európskymi súdmi" : "Experience before Slovak and European courts",
  ];

  return (
    <section id="about" className="bg-cream py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Left: content */}
          <div>
            <motion.span
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4 block"
            >
              {dict.about.label[lang]}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6"
            >
              {dict.about.title[lang]}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-mid leading-relaxed mb-4">
              {dict.about.body1[lang]}
            </motion.p>
            <motion.p variants={fadeUp} className="text-mid leading-relaxed mb-8">
              {dict.about.body2[lang]}
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-mid text-sm">{h}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              variants={fadeUp}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 bg-charcoal text-cream text-sm font-semibold hover:bg-gold hover:text-dark transition-colors duration-200 rounded-sm"
            >
              {dict.hero.cta[lang]}
            </motion.button>
          </div>

          {/* Right: decorative card */}
          <motion.div variants={fadeUp} className="relative">
            <div className="bg-dark rounded-sm p-8 border-l-4 border-gold">
              <div className="flex items-center gap-3 mb-6">
                <Award size={24} className="text-gold" />
                <span className="font-display text-lg text-gold font-semibold">
                  {lang === "sk" ? "Prečo si nás klienti vyberajú" : "Why clients choose us"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {FIRM.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display text-3xl font-bold text-gold mb-1">{stat.value}</div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">{stat.label[lang]}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gold/10">
                <blockquote className="font-display text-lg italic text-text-light leading-relaxed">
                  &ldquo;{FIRM.tagline[lang]}&rdquo;
                </blockquote>
              </div>
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/20 rounded-sm -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
