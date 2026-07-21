import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CaseStudiesGrid } from "@/components/work/case-studies-grid";
import { ClientTestimonials } from "@/components/work/client-testimonials";
import { CtaSection } from "@/components/landing/cta-section";

export const metadata = {
  title: "Our Work | Datatrack - Case Studies & Implementations",
  description: "Explore Datatrack's successful implementations across banking automation, custom software, and Agentic AI solutions.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for Work Page */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground/5 dark:bg-foreground/10 pattern-dots opacity-50"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6">
            Building the future,<br />
            <span className="text-muted-foreground">one enterprise at a time.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            From core banking systems to agentic AI workflows, see how we engineer solutions that drive massive operational efficiency.
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
