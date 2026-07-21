"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const products = [
  { name: "Vocred", category: "AI", url: "https://vocred.com", description: "AI Voice Agent platform delivering human-like conversational experiences." },
  { name: "AapkiSociety", category: "Management", url: "https://aapkisociety.in", description: "Comprehensive society management system." },
  { name: "Sahbhagi", category: "Engagement", url: "https://sahbhagi.vercel.app/", description: "Interactive audience engagement and Q&A platform." },
  { name: "KheechMeriPhoto", category: "Fun / AI", url: "https://kheechmeriphoto.vercel.app/", description: "AI-powered caricature photo generator with endless styles." },
  { name: "TextMitra", category: "Utility", url: "https://textmitra.com", description: "Extract text seamlessly from images and PDFs." },
  { name: "Sahayog AI", category: "Fintech", url: "https://sahayogai-ella.vercel.app/", description: "Intelligent Finance for Modern Cooperatives." },
  { name: "HRMS System", category: "HR", url: "https://hrmssystem.vercel.app/", description: "Complete Human Resource Management System for enterprise teams." },
  { name: "UpRole", category: "Career", url: "https://www.uprole.me/", description: "Modern and intuitive resume builder." },
  { name: "PracticeMitra AI", category: "EdTech", url: "https://www.pracup.co.in/", description: "Generate customized worksheets instantly using AI." },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      className={`group block p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-500 bg-foreground/[0.02] hover:bg-foreground/[0.04] rounded-3xl relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="absolute top-6 right-6">
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
      
      <div className="mb-4">
        <span className="inline-block px-3 py-1 rounded-full border border-foreground/20 text-xs font-mono text-muted-foreground mb-6">
          {product.category}
        </span>
        <h3 className="text-2xl font-display group-hover:translate-x-1 transition-transform duration-300">
          {product.name}
        </h3>
      </div>
      
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Decorative gradient blob on hover */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-foreground/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </a>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center justify-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Our Portfolio
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Explore our ecosystem of
            <br />
            <span className="bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent pb-2">AI & SaaS Products.</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
