import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  Cloud, 
  Code, 
  Lock,
  Zap,
  TrendingUp,
  CheckCircle2,
  DollarSign
} from "lucide-react";

const FintechSolutions = () => {
  return (
    <Layout>
      <PageHeader
        title="Banking-Grade Infrastructure for Finance Startups"
        subtitle="NovaStack Technologies delivers secure, scalable, and compliant cloud architecture for fintech, lending, payments, and wealth management platforms."
        badge="Finance & Fintech"
      />

      {/* Core Value Proposition */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              From MVP to IPO-Ready: <span className="text-gradient-green">Banking Infrastructure That Scales</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've built secure financial systems for banks, wealth platforms, and regulated entities. 
              Now we bring that expertise to startups at startup-friendly rates—with flexible funding models 
              including milestone-based delivery and 0% payment plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Banking-Grade Security", value: "ISO 27001 Aligned" },
              { icon: Cloud, label: "Scalable Architecture", value: "Zero to 1M Users" },
              { icon: Lock, label: "Regulatory Ready", value: "Audit Trails Built-In" },
              { icon: Zap, label: "Rapid MVP Delivery", value: "12-16 Week Launch" },
            ].map((stat) => (
              <div 
                key={stat.label}
                className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors duration-300"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-lg font-semibold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services for Finance Startups */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Core Services for Finance Startups
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Cloud Architecture & Hosting for Fintech Apps",
                  description: "Designing and running secure, scalable cloud environments for web/mobile products in banking, lending, payments, or wealth workflows.",
                  features: [
                    "Multi-region deployment on AWS/Azure for high availability",
                    "Auto-scaling infrastructure to handle transaction spikes",
                    "PCI-DSS compliant payment processing infrastructure",
                    "Disaster recovery and business continuity planning",
                    "Cost optimization (save 40-60% vs. default cloud configs)"
                  ],
                  icon: Cloud,
                  color: "primary"
                },
                {
                  title: "Product Engineering (MVP to Scale)",
                  description: "End-to-end build of web and mobile apps, APIs, and backend services, with CI/CD, monitoring, and handover so the startup owns its IP and codebase.",
                  features: [
                    "React/React Native frontend with TypeScript",
                    "Java Spring Boot or Node.js microservices backend",
                    "RESTful APIs and GraphQL for third-party integrations",
                    "PostgreSQL/MongoDB for transactional data",
                    "Complete DevOps pipeline with automated testing"
                  ],
                  icon: Code,
                  color: "secondary"
                },
                {
                  title: "Security, Compliance & Data Protection",
                  description: "Hardening infrastructure, access control, logging, and privacy controls so early-stage products can move toward regulatory expectations in finance.",
                  features: [
                    "Segregation of dev/staging/production environments",
                    "Role-based access control (RBAC) for all systems",
                    "Comprehensive audit trails for compliance reviews",
                    "Encryption at rest and in transit (AES-256, TLS 1.3)",
                    "Regular penetration testing and vulnerability scanning"
                  ],
                  icon: Lock,
                  color: "red-500"
                },
                {
                  title: "Managed Hosting & Ongoing DevOps",
                  description: "Running the production stack (patching, backups, uptime SLAs) so the founders can focus on product and customers.",
                  features: [
                    "24/7 infrastructure monitoring and alerting",
                    "99.95% uptime SLA with redundancy",
                    "Daily encrypted backups with point-in-time recovery",
                    "Security patch management and OS updates",
                    "Performance optimization and capacity planning"
                  ],
                  icon: Zap,
                  color: "yellow-500"
                }
              ].map((service) => (
                <div 
                  key={service.title}
                  className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-xl bg-${service.color}/10 border border-${service.color}/30`}>
                      <service.icon className={`w-8 h-8 text-${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Funding Models */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/30 mb-6">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-medium">Startup-Friendly Commercial Models</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Preserve Cash. Build Faster. Own Everything.
              </h2>
              
              <p className="text-lg text-muted-foreground">
                We offer flexible funding models so you can afford a robust, production-grade build 
                without burning through your seed capital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Milestone-Based Delivery",
                  description: "Pay in stages as we hit agreed milestones: Design → MVP → Beta → Production Launch.",
                  features: [
                    "30% upfront, 70% spread across deliverables",
                    "Clear acceptance criteria per milestone",
                    "Refund guarantee if milestone not met"
                  ],
                  icon: TrendingUp,
                  recommended: false
                },
                {
                  title: "0% Payment Plan (NextStack Model)",
                  description: "Spread the cost over 12-18 months with zero interest. Preserve runway for customer acquisition.",
                  features: [
                    "25% down payment, rest in monthly installments",
                    "No interest charges or hidden fees",
                    "Maintenance included from month 1"
                  ],
                  icon: DollarSign,
                  recommended: true
                },
                {
                  title: "Co-Build / Equity Structure",
                  description: "For exceptional founding teams: we invest engineering time in exchange for equity + milestone payments.",
                  features: [
                    "Reduced cash outlay (40-50% discount)",
                    "NovaStack takes minor equity stake",
                    "Aligned incentives for long-term success"
                  ],
                  icon: Shield,
                  recommended: false
                }
              ].map((model) => (
                <div 
                  key={model.title}
                  className={`p-6 rounded-2xl border ${
                    model.recommended 
                      ? 'bg-primary/5 border-primary' 
                      : 'bg-card border-border'
                  } hover:scale-105 transition-transform duration-300 relative`}
                >
                  {model.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <model.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Fintech Founders Choose NovaStack */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Fintech Founders Choose NovaStack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                {
                  title: "You Own Everything",
                  description: "Full source code ownership. Complete database access. Zero vendor lock-in. Export your data anytime."
                },
                {
                  title: "Built for Audits",
                  description: "Every action logged. Role-based permissions. Compliance reports ready for regulators from day one."
                },
                {
                  title: "Banking Sector Experience",
                  description: "We've built systems for National Australia Bank, federal government agencies, and MedTech platforms with healthcare compliance."
                },
                {
                  title: "Agentic Engineering Advantage",
                  description: "Our 4-person team delivers output equivalent to 20-person traditional firms through AI-augmented workflows."
                },
                {
                  title: "No Surprises",
                  description: "Fixed-price contracts. Transparent milestone tracking. Weekly progress reports. Refund guarantees if we miss commitments."
                },
                {
                  title: "Production-Grade from Day 1",
                  description: "No technical debt. No shortcuts. Every MVP we build is architected to scale to millions of users without rewrites."
                }
              ].map((reason, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Banking-Grade Infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a technical briefing to discuss your fintech product vision and explore 
              flexible funding options that preserve your runway.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Technical Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-ghost" size="xl" asChild>
                <Link to="/capabilities">View All Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FintechSolutions;
