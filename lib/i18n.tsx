"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "@/config/firmData";

const dict = {
  nav: {
    practiceAreas: { sk: "Oblasti práva",  en: "Practice Areas" },
    about:         { sk: "O nás",           en: "About"          },
    team:          { sk: "Tím",             en: "Team"           },
    caseStudies:   { sk: "Prípady",         en: "Case Studies"   },
    contact:       { sk: "Kontakt",         en: "Contact"        },
    consultation:  { sk: "Konzultácia",     en: "Consultation"   },
  },
  hero: {
    badge:     { sk: "Advokátska kancelária", en: "Law Firm"           },
    cta:       { sk: "Bezplatná konzultácia", en: "Free Consultation"  },
    secondary: { sk: "Oblasti práva",         en: "Practice Areas"     },
    scroll:    { sk: "Prečítať viac",         en: "Read more"          },
  },
  about: {
    label:  { sk: "O kancelárií",                         en: "About the firm"              },
    title:  { sk: "Dvadsať rokov právnej excelentnosti",  en: "Twenty years of legal excellence" },
    body1: {
      sk: "Advokátska kancelária Novák & Partners bola založená s jediným cieľom — poskytovať právne služby najvyššej kvality, ktoré skutočne chránia záujmy našich klientov. Za viac ako dve dekády praxe sme si vybudovali povesť kancelárie, ktorej môžete dôverovať v najnáročnejších situáciách.",
      en: "Novák & Partners law firm was founded with a single purpose — to provide the highest quality legal services that truly protect the interests of our clients. Over more than two decades of practice, we have built a reputation as a firm you can trust in the most challenging situations.",
    },
    body2: {
      sk: "Každý prípad berieme ako jedinečnú výzvu. Nepracujeme so šablónami — analyzujeme, stratégizujeme a bojujeme za každého klienta s rovnakou mierou odhodlania, bez ohľadu na veľkosť prípadu alebo výšku odmeny.",
      en: "We treat every case as a unique challenge. We do not work from templates — we analyze, strategize and fight for every client with the same level of determination, regardless of the size of the case or the fee.",
    },
  },
  practiceAreas: {
    label:     { sk: "Oblasti práva", en: "Practice Areas" },
    title:     { sk: "Čo riešime",    en: "What we handle" },
    learnMore: { sk: "Viac informácií", en: "Learn more"   },
  },
  team: {
    label:          { sk: "Náš tím",              en: "Our team"        },
    title:          { sk: "Ľudia za výsledkami",  en: "The people behind the results" },
    experience:     { sk: "Skúsenosti",            en: "Experience"      },
    specialization: { sk: "Špecializácia",         en: "Specialization"  },
  },
  caseStudies: {
    label:       { sk: "Úspešné prípady", en: "Case Studies"                  },
    title:       { sk: "Výsledky, ktoré hovoria za seba", en: "Results that speak for themselves" },
    subtitle:    { sk: "Ukážky z našej praxe — každý prípad je iný, záväzok zostáva rovnaký.", en: "Highlights from our practice — every case is different, the commitment remains the same." },
    outcome:     { sk: "Výsledok",         en: "Outcome"      },
    duration:    { sk: "Trvanie",          en: "Duration"     },
    value:       { sk: "Hodnota sporu",    en: "Case value"   },
    confidential: { sk: "* Podrobnosti anonymizované v súlade s advokátskou mlčanlivosťou.", en: "* Details anonymized in accordance with attorney-client privilege." },
  },
  process: {
    label: { sk: "Náš postup",                        en: "Our process"                    },
    title: { sk: "Ako pracujeme s každým prípadom",   en: "How we work with every case"    },
  },
  testimonials: {
    label: { sk: "Referencie",                en: "Testimonials"        },
    title: { sk: "Čo hovoria naši klienti",   en: "What our clients say" },
  },
  faq: {
    label: { sk: "Často kladené otázky", en: "Frequently Asked Questions" },
    title: { sk: "Máte otázky?",          en: "Have questions?"           },
  },
  contact: {
    label:       { sk: "Kontakt",              en: "Contact"           },
    title:       { sk: "Dohodnite si konzultáciu", en: "Schedule a consultation" },
    subtitle:    { sk: "Prvý hovor je vždy bezplatný.", en: "The first call is always free." },
    name:        { sk: "Celé meno",            en: "Full name"         },
    email:       { sk: "E-mail",               en: "Email"             },
    phone:       { sk: "Telefón",              en: "Phone"             },
    subject:     { sk: "Predmet",              en: "Subject"           },
    message:     { sk: "Správa",               en: "Message"           },
    send:        { sk: "Odoslať správu",        en: "Send message"      },
    namePh:      { sk: "Ján Novák",            en: "John Smith"        },
    subjectPh:   { sk: "Napr. Obchodný spor, Rozvod, Zmluva...", en: "E.g. Business dispute, Divorce, Contract..." },
    messagePh:   { sk: "Opíšte stručne vašu situáciu...", en: "Briefly describe your situation..." },
    address:     { sk: "Adresa",               en: "Address"           },
    phone_label: { sk: "Telefón",              en: "Phone"             },
    email_label: { sk: "E-mail",               en: "Email"             },
    hours:       { sk: "Otváracie hodiny",      en: "Office hours"      },
    getDir:      { sk: "Navigovať",            en: "Get Directions"    },
  },
  footer: {
    rights:     { sk: "Všetky práva vyhradené.", en: "All rights reserved." },
    disclaimer: {
      sk: "Táto webová stránka slúži len na informačné účely a nepredstavuje právne poradenstvo.",
      en: "This website is for informational purposes only and does not constitute legal advice.",
    },
  },
} as const;

type DictValue = { sk: string; en: string };

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (obj: DictValue) => string;
  dict: typeof dict;
}

export const I18nContext = createContext<I18nCtx>({
  lang: "sk",
  setLang: () => {},
  t: (o) => o.sk,
  dict,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("sk");
  const t = (obj: DictValue) => obj[lang];
  return (
    <I18nContext.Provider value={{ lang, setLang, t, dict }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
