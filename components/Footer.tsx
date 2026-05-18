"use client";

import { Scale, Globe, Share2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FIRM } from "@/config/firmData";

interface FooterProps {
  firmName: string;
  address: string;
  phone: string;
  email: string;
}

export default function Footer({ firmName, address, phone, email }: FooterProps) {
  const { lang, dict } = useI18n();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#practice-areas", label: dict.nav.practiceAreas[lang] },
    { href: "#about",          label: dict.nav.about[lang]          },
    { href: "#team",           label: dict.nav.team[lang]           },
    { href: "#cases",          label: dict.nav.caseStudies[lang]    },
    { href: "#contact",        label: dict.nav.contact[lang]        },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A1520] border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 border border-gold/60 rounded-sm flex items-center justify-center">
                <Scale size={16} className="text-gold" />
              </div>
              <span className="font-display text-lg font-semibold text-text-light">{firmName}</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-5">
              {FIRM.tagline[lang]}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={FIRM.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-gold/20 rounded-sm flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Globe size={14} />
              </a>
              <a
                href={FIRM.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-gold/20 rounded-sm flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Facebook"
              >
                <Share2 size={14} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-5">
              {lang === "sk" ? "Navigácia" : "Navigation"}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-5">
              {dict.contact.label[lang]}
            </h4>
            <div className="space-y-2.5 text-sm text-text-muted">
              <p>{address}</p>
              <a href={`tel:${phone}`} className="block hover:text-gold transition-colors">{phone}</a>
              <a href={`mailto:${email}`} className="block hover:text-gold transition-colors">{email}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-muted">
          <span>© {year} {firmName}. {dict.footer.rights[lang]}</span>
          <span className="text-center opacity-60">{dict.footer.disclaimer[lang]}</span>
        </div>
      </div>
    </footer>
  );
}
