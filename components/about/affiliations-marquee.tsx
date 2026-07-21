"use client";

export function AffiliationsMarquee() {
  const orgs = [
    "Bhopal Management Association (BMA)", 
    "JNCT Governing Body", 
    "Banking Automation Consortium", 
    "Enterprise AI Initiative",
    "MP Tech Council"
  ];

  return (
    <section className="py-12 border-b border-foreground/10 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-8 text-center">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Leadership & Affiliations
        </p>
      </div>
      <div className="w-full relative flex overflow-x-hidden">
        <div className="flex gap-16 items-center marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {orgs.map((org) => (
                <span 
                  key={`${setIdx}-${org}`} 
                  className="font-display text-2xl lg:text-4xl text-foreground/40 hover:text-foreground transition-colors duration-300"
                >
                  {org}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
