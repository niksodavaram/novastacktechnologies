import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Folder, ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const placeholderCaseStudies = [
  {
    title: "Defence Sensor Integration",
    category: "Defence",
    status: "Classified",
    description: "Custom sensor integration and data processing for a major Defence program.",
  },
  {
    title: "Healthcare AI Platform",
    category: "MedTech",
    status: "Coming Soon",
    description: "Sovereign AI deployment for secure medical data analysis and diagnostics.",
  },
  {
    title: "Secure Banking Infrastructure",
    category: "FinTech",
    status: "Coming Soon",
    description: "Zero-trust microservices architecture for a major Australian bank.",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <PageHeader
        title="Case Studies"
        subtitle="Explore our portfolio of secure, sovereign solutions delivered for Defence, Health, and Banking sectors."
        badge="Our Work"
      />

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placeholderCaseStudies.map((study) => (
              <div
                key={study.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30">
                    {study.category}
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    {study.status}
                  </span>
                </div>
                
                <div className="w-full aspect-video rounded-xl bg-muted/30 border border-border flex items-center justify-center mb-6">
                  <Folder className="w-12 h-12 text-muted-foreground/50" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-muted-foreground text-sm">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Lock className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Many Projects Are Classified
            </h2>
            <p className="text-muted-foreground mb-8">
              Due to the sensitive nature of our work in Defence and critical infrastructure, 
              many of our case studies cannot be publicly disclosed. We're happy to discuss 
              relevant experience under appropriate NDA arrangements.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request NDA Briefing <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "15+", label: "Years Experience" },
              { value: "100%", label: "On-Time Delivery" },
              { value: "0", label: "Security Incidents" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-green mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
