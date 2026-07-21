import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CeoProfile } from "@/components/about/ceo-profile";
import { JourneyTimeline } from "@/components/about/journey-timeline";
import { CoreValues } from "@/components/about/core-values";
import { AffiliationsMarquee } from "@/components/about/affiliations-marquee";
import { VisionQuote } from "@/components/about/vision-quote";
import { PhotoGallery } from "@/components/about/photo-gallery";
import { CtaSection } from "@/components/landing/cta-section";

export const metadata = {
  title: "About Us | Ashish Kolarkar - Datatrack",
  description: "Learn about Ashish Kolarkar, CEO of Datatrack, and the journey of pioneering banking automation and AI native solutions.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <CeoProfile />
      <AffiliationsMarquee />
      <JourneyTimeline />
      <CoreValues />
      <VisionQuote />
      <PhotoGallery />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
