import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Shield, Lock, Key, Server, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const securityPillars = [
  {
    icon: Server,
    title: "OpenStack Private Cloud",
    description: "Sovereign Australian infrastructure with complete data residency compliance. Your data never leaves Australian soil.",
    features: ["Australian data centres", "Private network isolation", "Full infrastructure control"],
  },
  {
    icon: Lock,
    title: "Offline AI (Ollama)",
    description: "Air-gapped AI capabilities using local language models. No external API calls, no data leakage.",
    features: ["Air-gapped deployment", "Local model inference", "Zero external dependencies"],
  },
  {
    icon: Key,
    title: "DID/OIDC Authentication",
    description: "Decentralized identity and OpenID Connect for robust, standards-compliant authentication.",
    features: ["Decentralized identifiers", "Multi-factor authentication", "Federation support"],
  },
  {
    icon: Shield,
    title: "Zero-Trust Architecture",
    description: "Never trust, always verify. Every access request is fully authenticated, authorized, and encrypted.",
    features: ["Micro-segmentation", "Continuous verification", "Least privilege access"],
  },
];

const essentialEight = [
  { name: "Application Control", status: "compliant" },
  { name: "Patch Applications", status: "compliant" },
  { name: "Configure Microsoft Office Macros", status: "compliant" },
  { name: "User Application Hardening", status: "compliant" },
  { name: "Restrict Administrative Privileges", status: "compliant" },
  { name: "Patch Operating Systems", status: "compliant" },
  { name: "Multi-factor Authentication", status: "compliant" },
  { name: "Regular Backups", status: "compliant" },
];

const Security = () => {
  return (
    <Layout>
      <PageHeader
        title="Security & Sovereignty"
        subtitle="Protecting Australia's critical infrastructure with world-class security architecture and full ASD Essential Eight compliance."
        badge="Defence-Grade Security"
      />

      {/* Security Pillars */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security <span className="text-gradient-green">Architecture</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our multi-layered security approach ensures your data and systems remain protected at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground mb-4">{pillar.description}</p>
                    <ul className="space-y-2">
                      {pillar.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASD Essential Eight */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ASD Essential Eight <span className="text-gradient-green">Compliance</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our systems are designed and operated in full compliance with the Australian Signals Directorate's 
                Essential Eight mitigation strategies, providing the highest level of cyber security assurance.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight" target="_blank" rel="noopener noreferrer">
                  Learn About Essential Eight <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="space-y-3">
              {essentialEight.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border"
                >
                  <span className="font-medium">{item.name}</span>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Compliant</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-12 bg-destructive/10 border-y border-destructive/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Security is Non-Negotiable</h3>
              <p className="text-sm text-muted-foreground">
                All NovaStack engagements include comprehensive security reviews and ongoing vulnerability assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Security Consultation?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our security experts can assess your current posture and recommend sovereign solutions.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Request Security Briefing <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Security;
