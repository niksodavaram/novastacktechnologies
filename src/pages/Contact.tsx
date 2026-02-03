import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Mail, MapPin, Building, ArrowRight, CheckCircle, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", organization: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Ready to discuss your project? Get in touch with our team for a confidential consultation."
        badge="Get in Touch"
      />

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Request a <span className="text-gradient-green">Briefing</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will respond within 24 hours. 
                For classified discussions, we can arrange secure communication channels.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="bg-muted/30 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@organization.gov.au"
                      className="bg-muted/30 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Department / Company name"
                    className="bg-muted/30 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    className="bg-muted/30 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button variant="hero" size="lg" type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-12">
              <div className="space-y-8">
                {/* Company Details */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-3 text-lg">NovaStack Technologies PTY LTD</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-muted-foreground min-w-[60px]">ABN:</span>
                          <span className="font-mono">59 690 831 675</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-muted-foreground min-w-[60px]">Status:</span>
                          <span className="text-green-500 font-medium">Active, GST Registered</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-muted-foreground min-w-[60px]">Location:</span>
                          <span>VIC 3429, Australia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a 
                        href="mailto:consulting@novastack.com.au" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        consulting@novastack.com.au
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">
                        For general inquiries and project discussions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Website</h3>
                      <a 
                        href="https://www.novastack.com.au" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        www.novastack.com.au
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">
                        Case studies, capabilities, and technical resources
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Operating Locations</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>🇦🇺 Australia (Primary)</p>
                        <p>🇮🇳 India (Delivery Teams)</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Australian-led engineering with global delivery capability
                      </p>
                    </div>
                  </div>
                </div>

                {/* Defence Partnerships */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Defence Tenders</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        For Defence procurement, we partner with Keane Consulting 
                        as a DISP-accredited prime contractor.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        NV1-cleared principals • ASD Essential Eight ML3 compliance
                      </p>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="mt-12">
                  <h3 className="font-semibold mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {[
                      "Response within 24 hours",
                      "NDA available on request",
                      "Secure communication options for classified discussions",
                      "No obligation technical consultation",
                      "Transparent pricing and milestone-based delivery",
                      "Australian business hours (AEDT/AEST)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold mb-3 text-sm">Trust & Compliance</h3>
                  <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>ABN Verified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>GST Registered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>NV1 Cleared</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>ISO 27001 Aligned</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India Operations Note */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Serving Clients in Australia and India
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              While NovaStack Technologies is an Australian-registered company (ABN 59 690 831 675), 
              we maintain delivery teams in India to serve the growing market for sovereign, 
              AI-enabled business systems.
            </p>
            <p className="text-muted-foreground mb-8">
              <strong>For Indian clients:</strong> We provide the same Australian NV1-grade security 
              standards and engineering excellence, with local teams for implementation, training, 
              and ongoing support. All data remains sovereign within Indian cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:consulting@novastack.com.au">
                  Contact Australia Office <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="hero-ghost" size="lg" asChild>
                <a href="mailto:consulting@novastack.com.au">
                  Inquire About India Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
