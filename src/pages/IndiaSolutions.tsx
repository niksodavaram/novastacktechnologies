import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  Cloud,
  Cpu,
  Lock,
  Zap,
  CheckCircle2
} from "lucide-react";

const IndiaSolutions = () => {
  return (
    <Layout>
      <PageHeader
        title="Bridging Australian Excellence with Indian Innovation"
        subtitle="NovaStack Technologies delivers Australian defence-grade engineering standards to India through local teams, combining sovereign security with cost-effective delivery."
        badge="Solutions for India"
      />

      {/* Cross-Border Value Proposition */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Australian Engineering. Indian Execution. <span className="text-gradient-green">Global Standards.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bridge the gap between world-class Australian technology standards and India's dynamic market, 
              delivering NV1-grade secure systems at a fraction of international consultancy costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Defence-Grade Security",
                description: "Australian NV1-cleared principals ensure every system meets stringent security standards equivalent to Defence and Banking requirements.",
                color: "text-red-500",
                bgColor: "bg-red-500/10",
                borderColor: "border-red-500/30"
              },
              {
                icon: Users,
                title: "Local India Teams",
                description: "Graduate engineers and project managers based in major Indian cities for on-ground implementation and ongoing support.",
                color: "text-primary",
                bgColor: "bg-primary/10",
                borderColor: "border-primary/30"
              },
              {
                icon: TrendingUp,
                title: "Cost-Effective Delivery",
                description: "Australian architectural oversight with Indian delivery rates—achieving 60-70% cost savings without compromising quality.",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
                borderColor: "border-secondary/30"
              },
            ].map((benefit) => (
              <div 
                key={benefit.title}
                className={`p-6 rounded-xl ${benefit.bgColor} border ${benefit.borderColor} hover:scale-105 transition-transform duration-300`}
              >
                <benefit.icon className={`w-12 h-12 ${benefit.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Leaves Case Study Highlight */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/30 mb-6">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Featured Project: India Market Entry</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Green Intelligence System (GIS)
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NovaStack is transforming India's first <span className="text-foreground font-semibold">AI-driven landscaping company</span> with 
                a complete digital operating system—from plantation management to client delivery.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "₹8-12 lakh annual operational savings through GPS-verified attendance and AI site auditing",
                  "40% reduction in supervisor time wastage via automated reporting",
                  "95% elimination of fraudulent travel claims with location tracking",
                  "Sovereign data hosting on private Indian cloud with Australian security standards"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/case-studies">
                  View Full Case Study <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/10 border border-border p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="relative z-10 text-center space-y-6">
                  <div className="text-6xl font-bold text-gradient-green">₹20L+</div>
                  <div className="text-xl text-foreground">Annual Value Delivered</div>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="text-3xl font-bold text-primary">12-18m</div>
                      <div className="text-sm text-muted-foreground">ROI Payback</div>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="text-3xl font-bold text-secondary">100%</div>
                      <div className="text-sm text-muted-foreground">Data Sovereignty</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tailored Solutions for Indian Enterprises
            </h2>
            <p className="text-lg text-muted-foreground">
              We adapt our sovereign technology approach to India's unique regulatory environment while 
              maintaining Australian engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Field Operations & Logistics",
                description: "AI-powered field service management for landscaping, construction, facility management, and maintenance companies",
                features: [
                  "GPS-verified attendance and location tracking",
                  "AI photo analysis for site condition auditing",
                  "Offline-capable mobile apps for remote areas",
                  "Automated expense and bill processing"
                ],
                icon: Users,
                color: "primary"
              },
              {
                title: "ERP & Business Intelligence",
                description: "ERPNext-based sovereign operating systems for manufacturing, distribution, and service businesses",
                features: [
                  "Complete CRM, HR, Accounts integration",
                  "Role-based access control (RBAC) for data privacy",
                  "DPDP Act compliant data management",
                  "Indian cloud hosting with Australian security"
                ],
                icon: Cloud,
                color: "secondary"
              },
              {
                title: "Manufacturing & Inventory",
                description: "End-to-end supply chain visibility from raw materials to finished goods delivery",
                features: [
                  "Real-time inventory tracking across locations",
                  "Bill of Materials (BOM) automation",
                  "Quality control with AI visual inspection",
                  "Predictive maintenance scheduling"
                ],
                icon: Cpu,
                color: "yellow-500"
              },
              {
                title: "Compliance & Governance",
                description: "Secure document management and workflow automation for regulated industries",
                features: [
                  "Audit trail for all system actions",
                  "Automated compliance reporting",
                  "Encrypted data storage and transmission",
                  "ISO 27001 aligned security controls"
                ],
                icon: Lock,
                color: "red-500"
              }
            ].map((solution) => (
              <div 
                key={solution.title}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <solution.icon className={`w-12 h-12 text-${solution.color} mb-4`} />
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NovaStack for India */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The NovaStack Advantage for Indian Businesses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "No Vendor Lock-In",
                  description: "Built on open-source foundations (ERPNext, React Native). You own 100% of your data and code."
                },
                {
                  title: "Data Sovereignty",
                  description: "All data hosted on Indian cloud infrastructure, compliant with DPDP Act and RBI guidelines."
                },
                {
                  title: "Australian Quality Standards",
                  description: "Every system reviewed by NV1-cleared principals with Defence and Federal Government experience."
                },
                {
                  title: "Local Support Teams",
                  description: "Engineers and project managers in your timezone, speaking your language, understanding your market."
                },
                {
                  title: "Transparent Pricing",
                  description: "Clear milestone-based payments. No hidden fees. Performance guarantees included."
                },
                {
                  title: "Future-Proof Architecture",
                  description: "Modular design allows gradual expansion. Integrate new technologies without complete system replacement."
                }
              ].map((advantage, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Indian Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a technical briefing to see how NovaStack can deliver Australian engineering excellence 
              to your business at Indian market rates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Proposal <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-ghost" size="xl" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndiaSolutions;