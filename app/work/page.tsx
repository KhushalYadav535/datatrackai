import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CaseStudiesGrid } from "@/components/work/case-studies-grid";
import { ClientTestimonials } from "@/components/work/client-testimonials";
import { CtaSection } from "@/components/landing/cta-section";
import { Briefcase } from "lucide-react";

export const metadata = {
  title: "Our Work & Portfolio | Datatrack - Case Studies & Systems",
  description: "Explore Datatrack's successful implementations across banking automation, custom software, and Agentic AI solutions.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background noise-overlay">
      <Navigation />
      
      {/* Hero Section for Work Page */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden border-b border-foreground/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-foreground/[0.02] dark:bg-foreground/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.03] text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Engineering Portfolio</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.98]">
            Building the future,
            <br />
            <span className="font-serif-italic font-normal bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
              one enterprise at a time.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From core banking reconciliation to autonomous agentic voice workflows, explore how we build scalable digital infrastructure for high-scale clients.
          </p>
        </div>
      </section>

      <CaseStudiesGrid />
      <ClientTestimonials />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
