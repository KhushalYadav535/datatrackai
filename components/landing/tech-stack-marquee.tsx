export function TechStackMarquee() {
  const techs = [
    "Next.js", "React", "React Native", "TypeScript", "Node.js", "Python", 
    "Agentic AI", "AI Native", "LangChain", "LlamaIndex", "TensorFlow", "n8n", 
    "Cross Platform Development", "Golang", "FastAPI", "Apache Kafka", "Microservices",
    "AWS", "Docker", "Kubernetes", "PostgreSQL", "OpenAI", "Tailwind CSS", 
    "Redis", "GraphQL", "Figma", "MERN Stack", "Flutter", "Spring Boot", 
    "Firebase", "Supabase", "MongoDB", "Angular", "Vue.js", "Google Cloud", "Azure", "CI/CD"
  ];

  return (
    <section className="py-12 border-y border-foreground/10 bg-foreground/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-6">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase text-center">
          Powered by enterprise-grade technologies
        </p>
      </div>
      <div className="w-full relative flex overflow-x-hidden">
        {/* Gradient fades for edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex gap-16 items-center marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {techs.map((tech) => (
                <span
                  key={`${setIdx}-${tech}`}
                  className="font-display text-2xl md:text-3xl font-medium text-foreground/40 hover:text-foreground transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
