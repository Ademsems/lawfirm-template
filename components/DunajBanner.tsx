"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const TARGET_URL = "https://www.dunajmedia.sk/services/tvorba-web-stranok";
const STORAGE_KEY = "dunaj_banner_dismissed";

const COPY = {
  sk: "Páči sa vám tento dizajn? Vytvorila ho digitálna agentúra DunajMedia. Získajte moderný web pre vašu advokátsku kanceláriu do 72 hodín len za 350 € →",
  en: "Like this design? Built by digital agency DunajMedia. Get a modern website for your law firm in 72 hours for 350 euros only →",
};

export default function DunajBanner() {
  const { lang } = useI18n();
  // Hidden until sessionStorage has been checked, so SSR and first paint match
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) !== "true") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* storage unavailable — banner just stays dismissed for this render */
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl bg-neutral-950/90 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl sm:rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-white flex items-center gap-3">
      <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
      </span>
      <a
        href={TARGET_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-xs sm:text-sm font-medium leading-snug text-white/90 hover:text-emerald-300 hover:underline underline-offset-2 transition-colors"
      >
        {COPY[lang]}
      </a>
      <button
        onClick={dismiss}
        aria-label={lang === "sk" ? "Zavrieť" : "Close"}
        className="flex-shrink-0 text-white/50 hover:text-white transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
