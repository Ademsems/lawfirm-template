"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import PracticeAreas from "@/components/PracticeAreas";
import TeamSection from "@/components/TeamSection";
import CaseStudies from "@/components/CaseStudies";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

interface DynamicFirm {
  name: string;
  phone: string;
  address: string;
  email: string;
}

interface LawFirmPageProps {
  dynamicFirm: DynamicFirm;
}

export default function LawFirmPage({ dynamicFirm }: LawFirmPageProps) {
  return (
    <main>
      <Navbar firmName={dynamicFirm.name} />
      <HeroSection firmName={dynamicFirm.name} />
      <StatsBar />
      <AboutSection />
      <PracticeAreas />
      <TeamSection dynamicName={dynamicFirm.name} />
      <CaseStudies />
      <ProcessSection />
      <Testimonials />
      <FAQSection />
      <ContactSection
        address={dynamicFirm.address}
        phone={dynamicFirm.phone}
        email={dynamicFirm.email}
      />
      <Footer
        firmName={dynamicFirm.name}
        address={dynamicFirm.address}
        phone={dynamicFirm.phone}
        email={dynamicFirm.email}
      />
    </main>
  );
}
