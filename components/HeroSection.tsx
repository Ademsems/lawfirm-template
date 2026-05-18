"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FIRM } from "@/config/firmData";

interface HeroProps {
  firmName: string;
}

export default function HeroSection({ firmName }: HeroProps) {
  const { lang, dict } = useI18n();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark"
    >
      {/* Hero background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-law.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-dark/75" />
      </div>

      {/* Animated background geometry */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Floating circles */}
        <motion.div
          className="absolute top-[15%] left-[8%] w-64 h-64 rounded-full border border-gold/8"
          animate={{ y: [0, -24, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[6%] w-48 h-48 rounded-full border border-gold/6"
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-32 h-32 border border-gold/5 rotate-45"
          animate={{ rotate: [45, 60, 45], scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[60%] left-[15%] w-20 h-20 border border-gold/8 rotate-12"
          animate={{ rotate: [12, -5, 12], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.03] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 rounded-full mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            {dict.hero.badge[lang]}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-gold leading-none mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {firmName}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-text-muted font-light tracking-widest uppercase mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {FIRM.tagline[lang]}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-4 bg-gold text-dark font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors duration-200 rounded-sm min-w-[200px]"
          >
            {dict.hero.cta[lang]}
          </button>
          <button
            onClick={() => scrollTo("practice-areas")}
            className="px-8 py-4 border border-gold/40 text-text-light font-medium text-sm tracking-wide hover:border-gold hover:text-gold transition-colors duration-200 rounded-sm min-w-[200px]"
          >
            {dict.hero.secondary[lang]}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("stats")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-gold transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase">{dict.hero.scroll[lang]}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
