import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import DunajBanner from "@/components/DunajBanner";

export const metadata: Metadata = {
  title: "Novák & Partners | Advokátska kancelária Bratislava",
  description:
    "Profesionálne právne služby v Bratislave. Obchodné právo, rodinné právo, trestné právo. Bezplatná konzultácia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <I18nProvider>
          {children}
          <DunajBanner />
        </I18nProvider>
      </body>
    </html>
  );
}
