"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FIRM } from "@/config/firmData";
import { fadeUp, staggerFast as stagger } from "@/lib/variants";

interface ContactProps {
  address: string;
  phone: string;
  email: string;
}

export default function ContactSection({ address, phone, email }: ContactProps) {
  const { lang, dict } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-dark py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4 block">
            {dict.contact.label[lang]}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-text-light mb-3">
            {dict.contact.title[lang]}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-muted">
            {dict.contact.subtitle[lang]}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-text-muted mb-1.5 uppercase tracking-wider">
                  {dict.contact.name[lang]}
                </label>
                <input
                  type="text"
                  placeholder={dict.contact.namePh[lang]}
                  className="w-full bg-dark-light border border-gold/10 focus:border-gold/50 rounded-sm px-4 py-3 text-text-light text-sm outline-none transition-colors placeholder:text-text-muted/50"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-1.5 uppercase tracking-wider">
                  {dict.contact.email[lang]}
                </label>
                <input
                  type="email"
                  placeholder="jan.novak@example.sk"
                  className="w-full bg-dark-light border border-gold/10 focus:border-gold/50 rounded-sm px-4 py-3 text-text-light text-sm outline-none transition-colors placeholder:text-text-muted/50"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-text-muted mb-1.5 uppercase tracking-wider">
                  {dict.contact.phone[lang]}
                </label>
                <input
                  type="tel"
                  placeholder="+421 900 000 000"
                  className="w-full bg-dark-light border border-gold/10 focus:border-gold/50 rounded-sm px-4 py-3 text-text-light text-sm outline-none transition-colors placeholder:text-text-muted/50"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-1.5 uppercase tracking-wider">
                  {dict.contact.subject[lang]}
                </label>
                <input
                  type="text"
                  placeholder={dict.contact.subjectPh[lang]}
                  className="w-full bg-dark-light border border-gold/10 focus:border-gold/50 rounded-sm px-4 py-3 text-text-light text-sm outline-none transition-colors placeholder:text-text-muted/50"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-1.5 uppercase tracking-wider">
                {dict.contact.message[lang]}
              </label>
              <textarea
                rows={5}
                placeholder={dict.contact.messagePh[lang]}
                className="w-full bg-dark-light border border-gold/10 focus:border-gold/50 rounded-sm px-4 py-3 text-text-light text-sm outline-none transition-colors resize-none placeholder:text-text-muted/50"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gold text-dark font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors duration-200 rounded-sm"
            >
              {dict.contact.send[lang]}
            </button>
          </motion.form>

          {/* Info panel */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Contact info */}
            <div className="bg-dark-light rounded-sm p-6 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-wider mb-1">
                    {dict.contact.address[lang]}
                  </div>
                  <div className="text-text-light text-sm">{address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-wider mb-1">
                    {dict.contact.phone_label[lang]}
                  </div>
                  <a href={`tel:${phone}`} className="text-text-light text-sm hover:text-gold transition-colors">
                    {phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-wider mb-1">
                    {dict.contact.email_label[lang]}
                  </div>
                  <a href={`mailto:${email}`} className="text-text-light text-sm hover:text-gold transition-colors">
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-dark-light rounded-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-gold" />
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  {dict.contact.hours[lang]}
                </span>
              </div>
              <div className="space-y-2">
                {FIRM.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm text-text-muted">{h.day[lang]}</span>
                    <span className="text-sm text-text-light font-medium">
                      {typeof h.time === "string" ? h.time : h.time[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-dark-light rounded-sm h-48 flex flex-col items-center justify-center border border-gold/10 gap-3">
              <MapPin size={28} className="text-gold/40" />
              <span className="text-text-muted text-sm">Google Maps</span>
              <a
                href={`https://maps.google.com/maps?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors"
              >
                <Navigation size={12} />
                {dict.contact.getDir[lang]}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
