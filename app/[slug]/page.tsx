import type { Metadata } from "next";
import { getFirmBySlug } from "@/lib/csvFetcher";
import { I18nProvider } from "@/lib/i18n";
import LawFirmPage from "@/components/LawFirmPage";

const CSV_URL = process.env.NEXT_PUBLIC_CSV_URL || "";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const firm = await getFirmBySlug(CSV_URL, params.slug);
  return {
    title: `${firm.name} | Advokátska kancelária Bratislava`,
    description: `Profesionálne právne služby — ${firm.name}, ${firm.address}. Bezplatná konzultácia.`,
  };
}

export default async function SlugPage({ params }: PageProps) {
  const firm = await getFirmBySlug(CSV_URL, params.slug);

  return (
    <I18nProvider>
      <LawFirmPage
        dynamicFirm={{
          name:    firm.name,
          phone:   firm.phone,
          address: firm.address,
          email:   firm.email,
        }}
      />
    </I18nProvider>
  );
}
