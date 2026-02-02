import { Link } from "react-router-dom";
import { Cpu, Cloud, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cpu,
    title: "Hardware Integration",
    description: "Expert integration of sensors, FPGA systems, and embedded C/C++ solutions for mission-critical applications.",
    link: "/capabilities",
  },
  {
    icon: Cloud,
    title: "Secure Microservices",
    description: "BFF and API design with Zero-Trust architecture, deployed on sovereign Australian infrastructure.",
    link: "/capabilities",
  },
  {
    icon: Brain,
    title: "Sovereign AI",
    description: "Local SLM deployment, MCP agents, and offline AI solutions using OpenStack and Ollama.",
    link: "/capabilities",
  },
];

export const ServicesOverview = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Engineering <span className="text-gradient-green">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack capability from silicon to cloud, secured at every layer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:gap-3 gap-2 transition-all duration-300"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/capabilities">View All Capabilities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
