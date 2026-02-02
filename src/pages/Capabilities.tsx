import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Cpu, Server, Brain, Code, Database, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    category: "Hardware Integration",
    icon: Cpu,
    items: [
      {
        title: "Sensor Integration",
        description: "Deep expertise in integrating industrial and scientific sensors for mission-critical applications.",
      },
      {
        title: "FPGA Development",
        description: "Custom FPGA solutions for real-time signal processing and hardware acceleration.",
      },
      {
        title: "Embedded C/C++",
        description: "Robust, secure embedded software development following MISRA and CERT standards.",
      },
    ],
  },
  {
    category: "Microservices Architecture",
    icon: Server,
    items: [
      {
        title: "BFF Pattern Implementation",
        description: "Backend-for-frontend architectures optimized for secure, high-performance applications.",
      },
      {
        title: "API Design & Security",
        description: "RESTful and GraphQL APIs with comprehensive security controls and rate limiting.",
      },
      {
        title: "Event-Driven Systems",
        description: "Scalable event-driven architectures using message queues and stream processing.",
      },
    ],
  },
  {
    category: "Sovereign AI Solutions",
    icon: Brain,
    items: [
      {
        title: "Local SLM Deployment",
        description: "On-premise Small Language Models for secure, air-gapped AI capabilities.",
      },
      {
        title: "MCP Agent Development",
        description: "Multi-capability agents for task automation and intelligent system integration.",
      },
      {
        title: "Offline AI Infrastructure",
        description: "Complete AI solutions using Ollama and OpenStack for sovereign deployments.",
      },
    ],
  },
];

const techStack = [
  { icon: Code, name: "C/C++", category: "Embedded" },
  { icon: Server, name: "Python", category: "AI/ML" },
  { icon: Database, name: "PostgreSQL", category: "Database" },
  { icon: Shield, name: "Rust", category: "Systems" },
];

const Capabilities = () => {
  return (
    <Layout>
      <PageHeader
        title="Engineering Capabilities"
        subtitle="Full-stack expertise from silicon to secure cloud, delivering sovereign solutions for Australia's most demanding sectors."
        badge="Technical Excellence"
      />

      {/* Capabilities Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {capabilities.map((capability, categoryIndex) => (
              <div key={capability.category}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{capability.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {capability.items.map((item, index) => (
                    <div
                      key={item.title}
                      className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
                      style={{ animationDelay: `${(categoryIndex * 3 + index) * 0.1}s` }}
                    >
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage proven, secure technologies chosen for reliability and sovereign compliance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="p-6 rounded-xl bg-muted/30 border border-border text-center hover:border-primary/50 transition-all duration-300"
              >
                <tech.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team is ready to provide technical consultation on your specific requirements.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Request Technical Briefing <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Capabilities;
