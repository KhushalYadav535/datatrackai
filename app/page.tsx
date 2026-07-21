import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { TechStackMarquee } from "@/components/landing/tech-stack-marquee";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { GlobeSection } from "@/components/landing/globe-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FaqSection } from "@/components/landing/faq-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <TechStackMarquee />
      <FeaturesSection />
      <HowItWorksSection />
      <InfrastructureSection />
      <GlobeSection />
      <MetricsSection />
      {/* <IntegrationsSection /> */}
      <SecuritySection />
      {/* <DevelopersSection /> */}
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
