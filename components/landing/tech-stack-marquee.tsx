export function TechStackMarquee() {
  const techs = [
    "Next.js 16", "React 19", "Agentic AI", "Python", "TypeScript", 
    "Core Banking IBR", "FastAPI", "PostgreSQL", "Node.js", "Redis", 
    "Kubernetes", "AWS GovCloud", "OpenAI", "Anthropic", "LangChain", 
    "Docker", "Apache Kafka", "Microservices", "Tailwind CSS", "GraphQL", 
    "Supabase", "CI/CD Pipeline"
  ];

  return (
    <section className="py-10 border-b border-foreground/10 bg-foreground/[0.015] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-5">
        <div className="flex items-center justify-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
          <span>Core Engineering &amp; AI Stack</span>
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
        </div>
      </div>
      
      <div className="w-full relative mask-marquee overflow-hidden">
        <div className="flex gap-12 items-center marquee whitespace-nowrap py-1">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-12 items-center shrink-0">
              {techs.map((tech) => (
                <div
                  key={`${setIdx}-${tech}`}
                  className="inline-flex items-center gap-4 text-foreground/50 hover:text-foreground transition-colors duration-300 font-mono text-sm tracking-wider uppercase group cursor-default"
                >
                  <span className="group-hover:scale-105 transition-transform duration-200">{tech}</span>
                  <span className="text-foreground/20 text-xs">/</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
