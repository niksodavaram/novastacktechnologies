import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { BookOpen, Shield, Award, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const lmsFeatures = [
  {
    icon: Shield,
    title: "NV1-Compliant Training",
    description: "All training materials and assessments meet the requirements for personnel holding NV1 security clearances.",
  },
  {
    icon: BookOpen,
    title: "Project-Specific Knowledge",
    description: "Custom learning paths tailored to each project's unique technology stack and security requirements.",
  },
  {
    icon: Award,
    title: "Certification Tracking",
    description: "Comprehensive tracking of certifications, renewals, and compliance requirements for all team members.",
  },
  {
    icon: Users,
    title: "Team Onboarding",
    description: "Structured onboarding programs ensuring new team members are productive and security-aware from day one.",
  },
];

const trainingModules = [
  {
    title: "Security Fundamentals",
    duration: "8 hours",
    topics: ["Zero-Trust Architecture", "Secure Coding Practices", "Incident Response"],
  },
  {
    title: "Sovereign AI Operations",
    duration: "12 hours",
    topics: ["Local LLM Deployment", "Data Privacy", "Air-Gapped Systems"],
  },
  {
    title: "Defence Industry Compliance",
    duration: "6 hours",
    topics: ["DISP Requirements", "Security Classification", "Export Controls"],
  },
  {
    title: "Secure Development Lifecycle",
    duration: "10 hours",
    topics: ["Threat Modelling", "Code Review", "Penetration Testing"],
  },
];

const Academy = () => {
  return (
    <Layout>
      <PageHeader
        title="NovaStack Academy"
        subtitle="Our internal Learning Management System ensures every team member maintains the highest standards of security knowledge and project-specific expertise."
        badge="Continuous Learning"
      />

      {/* LMS Features */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise <span className="text-gradient-green">Learning Platform</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purpose-built for security-cleared professionals working on classified projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lmsFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Training Modules</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs covering all aspects of secure engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingModules.map((module) => (
              <div
                key={module.title}
                className="p-6 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{module.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {module.duration}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {module.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="text-gradient-green">Academy Matters</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                In high-security environments, every team member must maintain current knowledge 
                of threats, compliance requirements, and best practices. Our Academy ensures 
                consistent, verified competency across all projects.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Auditable training records for compliance",
                  "Reduced onboarding time for new projects",
                  "Consistent security practices across teams",
                  "Up-to-date threat awareness",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl bg-muted/30 border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl md:text-6xl font-bold text-gradient-green mb-4">100%</div>
                  <p className="text-xl text-muted-foreground">Team Certification Rate</p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Our Training Approach?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us to learn more about how we maintain team excellence.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Academy;
