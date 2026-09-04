"use client";

export function AffiliationsMarquee() {
  const orgs = [
    "Bhopal Management Association (BMA)", 
    "Cooperative Banking Consortium", 
    "Enterprise AI Systems Council",
    "MP State IT Advisory Forum",
    "National FinTech Alliance"
  ];

  return (
    <section className="py-10 border-b border-foreground/10 bg-foreground/[0.015] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-5 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
          <span>Leadership, Advisory &amp; Institutional Governance</span>
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
        </div>
      </div>
      <div className="w-full relative mask-marquee overflow-hidden">
        <div className="flex gap-16 items-center marquee whitespace-nowrap py-1">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {orgs.map((org) => (
                <div 
                  key={`${setIdx}-${org}`} 
                  className="inline-flex items-center gap-6 font-display text-xl lg:text-3xl text-foreground/40 hover:text-foreground transition-colors duration-300"
                >
                  <span>{org}</span>
                  <span className="text-foreground/20 text-sm">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
