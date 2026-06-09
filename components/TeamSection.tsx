"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FIRM } from "@/config/firmData";
import { fadeUp, stagger } from "@/lib/variants";

// Works for both person names ("JUDr. Martin Novák" → "MN")
// and firm names ("Novák & Partners" → "NP", "Smith & Jones" → "SJ")
function getInitials(name: string): string {
  return name
    .replace(/^(JUDr\.|Mgr\.|Ing\.|Dr\.)\s*/i, "")
    .split(/\s+/)
    .filter((w) => w.length > 1 && w !== "&")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function InitialsAvatar({ name }: { name: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-dark border-2 border-gold/40 flex items-center justify-center">
        <span className="font-display text-2xl font-bold text-gold">
          {getInitials(name)}
        </span>
      </div>
    </div>
  );
}

function MemberPhoto({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <InitialsAvatar name={name} />;
  }
  return (
    <Image
      src={src}
      alt={name}
      fill
      className="object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}

interface TeamSectionProps {
  dynamicName: string;
}

export default function TeamSection({ dynamicName }: TeamSectionProps) {
  const { lang, dict } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="team" className="bg-parchment py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.span
            variants={fadeUp}
            className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4 block"
          >
            {dict.team.label[lang]}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-bold text-charcoal"
          >
            {dict.team.title[lang]}
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {FIRM.team.map((member) => {
            // First team member: name and avatar come from the CSV
            const isLeadPartner = member.id === "partner1";
            const displayName = isLeadPartner ? dynamicName : member.name;

            return (
              <motion.div
                key={member.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-dark rounded-sm overflow-hidden group"
              >
                {/* Photo / initials area */}
                <div className="relative bg-dark-light h-64 border-b border-gold/10 overflow-hidden">
                  {isLeadPartner ? (
                    // Lead partner always shows initials derived from the dynamic name
                    <InitialsAvatar name={dynamicName} />
                  ) : (
                    // Other members try the photo first, fall back to initials
                    <>
                      <MemberPhoto src={member.image} name={member.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent pointer-events-none" />
                    </>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-2">
                    {member.role[lang]}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-light mb-1">
                    {displayName}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                    <span>{member.specialization[lang]}</span>
                    <span className="text-gold/30">·</span>
                    <span>{member.experience[lang]}</span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed mb-5">
                    {member.bio[lang]}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-gold transition-colors"
                    aria-label="LinkedIn"
                  >
                    <ExternalLink size={14} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
