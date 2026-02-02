import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  Cpu, 
  Cloud, 
  Layers, 
  Users, 
  Zap,
  Award,
  Lock,
  GitBranch
} from "lucide-react";

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="Meet the Architects of Sovereign Capability"
        subtitle="NovaStack Technologies combines PhD-level engineering, national security clearance, and cutting-edge AI automation to deliver mission-critical solutions for Australia."
        badge="About Us"
      />

      {/* Principal Bio Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image/Badge Side */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/10 border border-border p-8 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Placeholder for professional photo */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="relative z-10 text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-muted/50 border-4 border-primary/30 flex items-center justify-center mb-6">
                    <Users className="w-24 h-24 text-primary" />
                  </div>
                  
                  {/* NV1 Badge */}
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border-2 border-primary/50 backdrop-blur-sm">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="font-bold text-lg">NV1 CLEARED</span>
                  </div>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
            </div>

            {/* Bio Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 mb-6">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Principal & Founder</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dr. Nirekshan Sodavaram
              </h2>
              
              <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Dr. Sodavaram holds a <span className="text-foreground font-semibold">PhD in Implantable Pressure Sensors</span> and 
                  a <span className="text-foreground font-semibold">Post-Doc in OFET peptide-based hardware</span>. With over 
                  <span className="text-foreground font-semibold"> 15+ years of full-stack software development</span>, he is the 
                  driving force behind the groundbreaking <span className="text-gradient-green font-semibold">"Silicon-to-Cloud"</span> methodology.
                </p>
                
                <p className="text-lg leading-relaxed">
                  As an <span className="text-foreground font-semibold">NV1-cleared principal</span>, his expertise ensures integrity 
                  across every stage of development—from physical hardware integration to secure microservices deployed on private 
                  OpenStack clouds. This unique combination of deep hardware knowledge and cloud-native architecture expertise makes 
                  NovaStack the only Australian firm capable of true end-to-end sovereign capability delivery.
                </p>

                <p className="text-lg leading-relaxed">
                  His work spans <span className="text-foreground font-semibold">Defence C4ISR systems, MedTech sensor platforms, 
                  and banking-grade security infrastructure</span>—delivering mission-critical solutions that meet the most demanding 
                  compliance and security requirements in Australia.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Cpu, label: "PhD Hardware", value: "Silicon Level" },
                  { icon: Cloud, label: "Cloud Architect", value: "AWS/Azure/OpenStack" },
                  { icon: Shield, label: "Security", value: "NV1 Cleared" },
                  { icon: Layers, label: "Experience", value: "15+ Years" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-muted/30 border border-border">
                    <item.icon className="w-6 h-6 text-primary mb-2" />
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-sm font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Methodology Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/30 mb-6">
                <GitBranch className="w-4 h-4" />
                <span className="text-sm font-medium">Agentic Engineering</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Force Multiplier: <span className="text-gradient-green">The Agentic Engineering Team</span>
              </h2>
            </div>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team operates via the <span className="text-foreground font-semibold">Model Context Protocol (MCP)</span>, 
                where human expertise is augmented by local AI agents. This revolutionary structure allows our 
                <span className="text-gradient-green font-bold"> team of 4 to deliver the output of a 20-person firm with zero errors</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are an agile, <span className="text-foreground font-semibold">NV1-vetted workforce</span> focused purely on 
                high-value outcomes for government and banking sectors. By leveraging air-gapped AI automation and the Digital Thread 
                methodology, we eliminate manual configuration errors and ensure 100% auditability across every deployment.
              </p>
            </div>

            {/* Key Advantages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Zap,
                  title: "5x Productivity Multiplier",
                  description: "Local AI agents handle repetitive tasks, allowing our team to focus on architecture and security.",
                  color: "text-yellow-500",
                  bgColor: "bg-yellow-500/10",
                  borderColor: "border-yellow-500/30"
                },
                {
                  icon: Lock,
                  title: "Zero Configuration Drift",
                  description: "Infrastructure-as-Code combined with MCP ensures deterministic, auditable deployments every time.",
                  color: "text-primary",
                  bgColor: "bg-primary/10",
                  borderColor: "border-primary/30"
                },
                {
                  icon: Shield,
                  title: "NV1 Vetted Workforce",
                  description: "Every team member holds appropriate security clearances for Defence and critical infrastructure work.",
                  color: "text-red-500",
                  bgColor: "bg-red-500/10",
                  borderColor: "border-red-500/30"
                },
                {
                  icon: Layers,
                  title: "Silicon-to-Cloud Integration",
                  description: "Unique capability to integrate FPGA/ASIC hardware directly into cloud-native microservices architecture.",
                  color: "text-secondary",
                  bgColor: "bg-secondary/10",
                  borderColor: "border-secondary/30"
                },
              ].map((advantage) => (
                <div 
                  key={advantage.title} 
                  className={`p-6 rounded-xl ${advantage.bgColor} border ${advantage.borderColor} hover:scale-105 transition-transform duration-300`}
                >
                  <advantage.icon className={`w-10 h-10 ${advantage.color} mb-4`} />
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>

            {/* Model Context Protocol Explainer */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <GitBranch className="w-8 h-8 text-primary" />
                  What is the Model Context Protocol?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MCP is a standardized interface that allows AI models to interact with tools, data sources, and enterprise systems 
                  in a secure, air-gapped environment. Unlike cloud-based AI that introduces data sovereignty risks, our MCP-based 
                  workflow runs entirely on <span className="text-foreground font-semibold">self-hosted infrastructure using Ollama and 
                  specialized SLMs (Small Language Models)</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This means we can automate code generation, vulnerability scanning (Snyk), secrets management (HashiCorp Vault), 
                  and CI/CD orchestration—all while maintaining <span className="text-gradient-green font-bold">100% data sovereignty 
                  and PROTECTED-level security</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Work With Australia's Most Advanced Engineering Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to leverage PhD-level expertise, NV1 clearances, and agentic AI automation for your next critical project?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Technical Briefing <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-ghost" size="xl" asChild>
                <Link to="/capabilities">View Our Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
