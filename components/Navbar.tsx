"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Scale, Globe, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface NavbarProps {
  firmName: string;
}

export default function Navbar({ firmName }: NavbarProps) {
  const { lang, setLang, dict } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#practice-areas", label: dict.nav.practiceAreas[lang] },
    { href: "#about",          label: dict.nav.about[lang]          },
    { href: "#team",           label: dict.nav.team[lang]           },
    { href: "#cases",          label: dict.nav.caseStudies[lang]    },
    { href: "#contact",        label: dict.nav.contact[lang]        },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/90 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-dark/20"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 border border-gold/60 rounded-sm flex items-center justify-center group-hover:border-gold transition-colors">
                <Scale size={16} className="text-gold" />
              </div>
              <span className="font-display text-lg font-semibold text-text-light leading-tight">
                {firmName}
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-text-muted hover:text-gold transition-colors duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setLang(lang === "sk" ? "en" : "sk")}
                className="flex items-center gap-1.5 text-text-muted hover:text-gold transition-colors text-sm"
              >
                <Globe size={14} />
                <span className="uppercase font-medium">{lang}</span>
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-5 py-2 bg-gold text-dark text-sm font-semibold rounded-sm hover:bg-gold-light transition-colors"
              >
                {dict.nav.consultation[lang]}
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-text-light p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-dark flex flex-col"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-gold/10">
            <span className="font-display text-lg font-semibold text-text-light">{firmName}</span>
            <button onClick={() => setMobileOpen(false)} className="text-text-light p-1" aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-6 flex-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left py-4 text-xl font-display text-text-light border-b border-gold/10 hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="p-6 border-t border-gold/10 flex flex-col gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full py-3 bg-gold text-dark font-semibold rounded-sm hover:bg-gold-light transition-colors"
            >
              {dict.nav.consultation[lang]}
            </button>
            <button
              onClick={() => { setLang(lang === "sk" ? "en" : "sk"); }}
              className="flex items-center justify-center gap-2 text-text-muted hover:text-gold transition-colors text-sm py-2"
            >
              <Globe size={14} />
              <span className="uppercase font-medium">{lang === "sk" ? "EN" : "SK"}</span>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
