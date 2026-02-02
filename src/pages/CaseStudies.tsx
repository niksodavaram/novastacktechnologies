import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  ArrowRight, 
  Lock, 
  Heart, 
  Shield, 
  Landmark,
  CheckCircle2,
  Cpu,
  Database,
  Key
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    title: "Real-Time Patient Monitoring via Sovereign Cloud",
    category: "MedTech",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    summary: "Developed a secure C++ API for an implantable sensor system for NSW Health, moving data from the hardware level to a PROTECTED-level private cloud environment.",
    outcome: "100% data sovereignty achieved, reducing patient PII leakage risk by 99% compared to traditional cloud models.",
    keyTech: ["C++", "OpenStack", "Nginx API Gateway", "FHIR/HL7"],
    metrics: [
      { label: "Data Sovereignty", value: "100%" },
      { label: "PII Risk Reduction", value: "99%" },
      { label: "Latency", value: "<50ms" },
    ],
    highlights: [
      "Custom C++ adapter for embedded pressure sensor integration",
      "PROTECTED-level OpenStack deployment with hardware-backed encryption",
      "Real-time telemetry streaming with sub-50ms latency",
      "Full FHIR/HL7 compliance for NSW Health interoperability",
    ]
  },
  {
    id: 2,
    title: "Automated, Auditable CI/CD Pipeline for Classified Assets",
    category: "Defence",
    icon: Shield,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    summary: 'Implemented a full "Digital Thread" using local AI agents (Ollama/SLMs) to automate Snyk vulnerability scanning and HashiCorp Vault secrets management for a Defence subcontractor.',
    outcome: "80% reduction in lead time for deployments and a perfect ASD Essential Eight compliance score.",
    keyTech: ["GitLab Self-Managed", "Snyk", "HashiCorp Vault", "MCP Agents"],
    metrics: [
      { label: "Deployment Time", value: "-80%" },
      { label: "ASD Essential Eight", value: "ML3" },
      { label: "Security Incidents", value: "0" },
    ],
    highlights: [
      "Air-gapped CI/CD pipeline using GitLab Self-Managed Enterprise",
      "Automated vulnerability scanning with Snyk integrated via MCP agents",
      "Dynamic secrets injection using HashiCorp Vault with PKI backend",
      "Full Digital Thread traceability from requirements to production",
    ]
  },
  {
    id: 3,
    title: "Zero-Trust Identity Layer for a Major Australian Bank",
    category: "Banking",
    icon: Landmark,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    summary: "Implemented a DID-over-OIDC authentication layer to enforce mTLS and hardware MFA for all administrative API access, eliminating credential theft risk.",
    outcome: 'Implemented the "Gold Standard" for zero-trust identity, eliminating phishing as a viable threat vector for admin access.',
    keyTech: ["Keycloak", "DID (did:web)", "Cloudflare Zero Trust", "Nginx"],
    metrics: [
      { label: "Phishing Risk", value: "Eliminated" },
      { label: "mTLS Enforcement", value: "100%" },
      { label: "Admin MFA", value: "Hardware-Backed" },
    ],
    highlights: [
      "Decentralized Identity (DID) implementation using did:web standard",
      "Hardware-backed MFA enforcement for all privileged access",
      "Mutual TLS (mTLS) for API gateway with certificate pinning",
      "Integration with Cloudflare Zero Trust for edge security",
    ]
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <PageHeader
        title="Proven Solutions in Critical Australian Infrastructure"
        subtitle="Real-world deployments delivering measurable security, sovereignty, and performance outcomes for Defence, Health, and Banking sectors."
        badge="Case Studies"
      />

      {/* Detailed Case Studies */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 md:p-12 rounded-3xl ${study.bgColor} border ${study.borderColor} hover:scale-[1.02] transition-all duration-500`}>
                  {/* Left Column - Icon & Category */}
                  <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className={`w-20 h-20 rounded-2xl ${study.bgColor} border ${study.borderColor} flex items-center justify-center mb-4`}>
                      <study.icon className={`w-10 h-10 ${study.color}`} />
                    </div>
                    <span className={`px-4 py-2 text-sm font-semibold rounded-full ${study.bgColor} ${study.color} border ${study.borderColor}`}>
                      {study.category}
                    </span>
                  </div>

                  {/* Right Column - Content */}
                  <div className="lg:col-span-4 space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {study.summary}
                      </p>
                    </div>

                    {/* Outcome Highlight */}
                    <div className="p-6 rounded-xl bg-card/50 border border-border">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-green-500 mb-2">Key Outcome</div>
                          <p className="text-foreground">{study.outcome}</p>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="p-4 rounded-xl bg-card/30 border border-border text-center">
                          <div className={`text-2xl md:text-3xl font-bold ${study.color} mb-1`}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technical Highlights */}
                    <div>
                      <div className="font-semibold mb-3 flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        Technical Highlights
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full ${study.color} ${study.bgColor} border ${study.borderColor} mt-1.5 flex-shrink-0`} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div>
                      <div className="font-semibold mb-3 flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        Key Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.keyTech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1.5 text-xs font-mono rounded-lg bg-muted/50 border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < caseStudies.length - 1 && (
                  <div className="h-px bg-border my-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classified Notice */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Lock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Many Projects Are Classified
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Due to the sensitive nature of our work in Defence and critical infrastructure, 
              many of our case studies cannot be publicly disclosed. The examples shown here 
              represent sanitized, non-classified versions of our capabilities.
            </p>
            <p className="text-muted-foreground mb-8">
              We're happy to discuss relevant experience under appropriate NDA arrangements 
              and provide detailed technical briefings for qualified government and enterprise clients.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request NDA Briefing <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Delivered", icon: CheckCircle2 },
              { value: "15+", label: "Years Experience", icon: Shield },
              { value: "100%", label: "On-Time Delivery", icon: ArrowRight },
              { value: "0", label: "Security Incidents", icon: Key },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl md:text-5xl font-bold text-gradient-green mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
