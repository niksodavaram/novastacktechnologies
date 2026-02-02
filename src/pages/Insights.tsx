import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Calendar,
  Clock,
  Tag,
  Shield,
  Brain,
  Workflow,
  FileCheck
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Why 'Air-Gapped AI' is the Future of Australian Defence",
    excerpt: "Exploring how locally-hosted AI models using Ollama and specialized SLMs provide the security and sovereignty Defence programs demand—without the risks of cloud-based LLMs.",
    category: "Defence AI",
    date: "2026-01-15",
    readTime: "8 min read",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    tags: ["AI", "Defence", "Sovereignty", "Ollama"],
    highlights: [
      "Why cloud-based AI creates unacceptable data sovereignty risks",
      "Ollama + MCP: The architecture for PROTECTED-level AI automation",
      "Real-world Defence use cases: automated compliance checking and code generation",
      "Comparing SLMs vs. LLMs for mission-critical applications"
    ]
  },
  {
    id: 2,
    title: "The NV1 Advantage: Mitigating Risk in MedTech Data Flows",
    excerpt: "How NV1 security clearances and hardware-level expertise combine to create the most secure medical device integration architectures in Australia.",
    category: "MedTech Security",
    date: "2026-01-22",
    readTime: "6 min read",
    icon: FileCheck,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    tags: ["MedTech", "Security", "NV1", "Healthcare"],
    highlights: [
      "Understanding the threat model: from sensor to cloud",
      "Why MedTech requires Defence-grade security architectures",
      "Case study: Implementing FHIR/HL7 on PROTECTED cloud infrastructure",
      "NV1 clearance as a competitive advantage in Health IT"
    ]
  },
  {
    id: 3,
    title: "From Prototypes to Production: The Power of the Agentic Digital Thread",
    excerpt: "How the Model Context Protocol (MCP) enables a team of 4 to deliver 20x output with zero configuration errors—the secret behind NovaStack's delivery velocity.",
    category: "DevOps Automation",
    date: "2026-01-29",
    readTime: "10 min read",
    icon: Workflow,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    tags: ["MCP", "AI Agents", "DevOps", "Automation"],
    highlights: [
      "What is the Digital Thread and why it matters for Defence programs",
      "Practical MCP implementation: GitLab + Snyk + Vault + Ollama",
      "Measuring productivity gains: benchmarks and metrics",
      "Eliminating configuration drift with Infrastructure-as-Code + AI"
    ]
  },
  {
    id: 4,
    title: "Australia's AI Assurance Framework: A Practical Guide for SMEs",
    excerpt: "Breaking down the Department of Defence's AI Assurance Framework and how small-to-medium enterprises can achieve compliance without enterprise-scale resources.",
    category: "Compliance",
    date: "2026-02-05",
    readTime: "7 min read",
    icon: Brain,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    tags: ["Compliance", "AI Assurance", "Defence", "SME"],
    highlights: [
      "Overview of DoD's AI Assurance requirements",
      "Mapping Essential Eight to AI model deployments",
      "Practical compliance checklist for SME Defence contractors",
      "How NovaStack achieves AI Assurance with air-gapped infrastructure"
    ]
  },
];

const Insights = () => {
  return (
    <Layout>
      <PageHeader
        title="Thought Leadership: The Future of Sovereign Engineering"
        subtitle="In-depth technical analysis, case studies, and practical guidance on Defence AI, MedTech security, and next-generation DevOps automation."
        badge="Insights"
      />

      {/* Featured Post (Most Recent) */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-4">
              <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30 font-semibold">
                FEATURED ARTICLE
              </span>
            </div>
            
            <div className={`p-8 md:p-12 rounded-3xl ${blogPosts[0].bgColor} border ${blogPosts[0].borderColor} hover:scale-[1.02] transition-all duration-500`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <blogPosts[0].icon className={`w-8 h-8 ${blogPosts[0].color}`} />
                    <span className={`px-3 py-1 text-xs rounded-full ${blogPosts[0].bgColor} ${blogPosts[0].color} border ${blogPosts[0].borderColor} font-semibold`}>
                      {blogPosts[0].category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>

                  <Button variant="hero" size="lg">
                    Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                <div className="lg:col-span-1">
                  <div className="p-6 rounded-xl bg-card/50 border border-border">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <FileCheck className="w-4 h-4" />
                      Key Topics Covered
                    </h3>
                    <ul className="space-y-2">
                      {blogPosts[0].highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full ${blogPosts[0].color} ${blogPosts[0].bgColor} border ${blogPosts[0].borderColor} mt-1.5 flex-shrink-0`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article 
                  key={post.id}
                  className={`group p-8 rounded-2xl ${post.bgColor} border ${post.borderColor} hover:scale-105 transition-all duration-500 cursor-pointer`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${post.bgColor} border ${post.borderColor} flex items-center justify-center`}>
                      <post.icon className={`w-6 h-6 ${post.color}`} />
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${post.bgColor} ${post.color} border ${post.borderColor} font-semibold`}>
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(post.date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-muted/50 border border-border flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup CTA */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Brain className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated on Sovereign Engineering
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to receive in-depth technical articles, case studies, and analysis 
              on Defence AI, MedTech security, and agentic DevOps automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Subscribe to Newsletter <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="hero-ghost" size="lg" asChild>
                <Link to="/capabilities">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
