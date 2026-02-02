import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBadges />
      <ServicesOverview />

      {/* Why NovaStack Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient-green">NovaStack?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine deep technical expertise with the highest security clearances 
                to deliver sovereign solutions that meet Australia's most demanding requirements.
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "NV1 cleared principal with proven track record" },
                  { icon: Zap, text: "Full-stack capability from embedded to cloud" },
                  { icon: Globe, text: "100% Australian owned and operated" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground pt-2">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-muted/30 border border-border p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-gradient-green mb-4">15+</div>
                  <p className="text-xl text-muted-foreground">Years of Secure Engineering</p>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Secure, Sovereign Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's discuss how NovaStack can help you meet your security and compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Technical Briefing <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-ghost" size="xl" asChild>
                <Link to="/security">Learn About Our Security</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
