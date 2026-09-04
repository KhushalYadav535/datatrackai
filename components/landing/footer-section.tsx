"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "Banking Automation (IBR)", href: "/#services" },
    { name: "Custom Software Engineering", href: "/#services" },
    { name: "Agentic AI & Voice Agents", href: "/#services" },
    { name: "Database Architecture", href: "/#services" },
    { name: "Corporate IT Training", href: "/#services" },
  ],
  Portfolio: [
    { name: "Vocred AI Voice Agent", href: "https://vocred.com" },
    { name: "AapkiSociety ERP", href: "https://aapkisociety.in" },
    { name: "Sahayog AI Banking", href: "https://sahayogai-ella.vercel.app/" },
    { name: "Sahbhagi Live Q&A", href: "https://sahbhagi.vercel.app/" },
    { name: "View All Portfolio", href: "/work" },
  ],
  Company: [
    { name: "About Us & Leadership", href: "/about" },
    { name: "Proven Work & Case Studies", href: "/work" },
    { name: "Careers & Open Roles", href: "/careers", badge: "Hiring" },
    { name: "Contact & Consultation", href: "/#contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/datatrackonline/" },
  { name: "CEO Profile", href: "https://www.linkedin.com/in/ashishkolarkar/" },
  { name: "Email", href: "mailto:ashishkolarkar@gmail.com" },
];

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-foreground/10 bg-background overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 h-48 opacity-15 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-6">
              <Link href="/" className="inline-flex items-center gap-2.5 group">
                <img 
                  src="/datatrack-logo-transparent.png" 
                  alt="DataTrack"
                  className="h-10 w-auto object-contain dark:invert"
                />
              </Link>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Engineering mission-critical enterprise software, core banking automation, and agentic AI architectures for leading institutions across India.
              </p>
              
              <div className="text-xs font-mono text-muted-foreground space-y-1">
                <p>Hotline: +91 9425300792</p>
                <p>Email: ashishkolarkar@gmail.com</p>
                <p>Location: Bhopal, Madhya Pradesh, India</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group border border-foreground/10 px-3 py-1.5 rounded-full hover:border-foreground/30 bg-foreground/[0.02]"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Link Columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold">
                    {title}
                  </h3>
                  <ul className="space-y-2.5">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                        >
                          {link.name}
                          {"badge" in link && link.badge && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 bg-foreground text-background rounded-full">
                              {link.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Datatrack Online Services. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational • 99.99% SLA
            </span>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-foreground/15 hover:border-foreground flex items-center justify-center text-foreground transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
