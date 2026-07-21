import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { OpenPositions } from "@/components/careers/open-positions";
import { Benefits } from "@/components/careers/benefits";

export const metadata = {
  title: "Careers | Datatrack - Build the Future of Enterprise IT",
  description: "Join Datatrack and work on massive enterprise applications, banking automation, and agentic AI.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for Careers Page */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground/5 dark:bg-foreground/10 pattern-dots opacity-50"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6">
            Help us engineer<br />
            <span className="text-muted-foreground">the automated enterprise.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We are a team of builders, hackers, and visionaries based in Bhopal. We are always looking for world-class talent to join our mission.
          </p>
        </div>
      </section>

      <OpenPositions />
      <Benefits />
      <FooterSection />
    </main>
  );
}
