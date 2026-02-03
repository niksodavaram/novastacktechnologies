import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  GitBranch, 
  Calendar,
  CheckSquare,
  Users,
  TrendingUp,
  Zap,
  FileText,
  BarChart3
} from "lucide-react";

const ProjectManagement = () => {
  return (
    <Layout>
      <PageHeader
        title="Jira-Style Project Management & Ticketing"
        subtitle="Integrated task tracking, issue management, and sprint planning built directly into your ERPNext operating system—no separate tools needed."
        badge="Project Management Module"
      />

      {/* Overview */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Juggling Email, WhatsApp, and Jira. <span className="text-gradient-green">Unify Everything.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For companies managing multiple concurrent projects, we offer an integrated Jira-style project 
              management system that connects tasks, tickets, resources, and budgets in one intelligent platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckSquare, label: "Unlimited Projects", value: "Tasks & Tickets" },
              { icon: Users, label: "Team Collaboration", value: "Real-Time Updates" },
              { icon: Calendar, label: "Sprint Planning", value: "Kanban Boards" },
              { icon: BarChart3, label: "Progress Tracking", value: "Burndown Charts" },
            ].map((feature) => (
              <div 
                key={feature.label}
                className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors duration-300"
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-sm text-muted-foreground mb-1">{feature.label}</div>
                <div className="text-lg font-semibold">{feature.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Core Capabilities
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Projects & Phases",
                  description: "Create projects for each large client or internal initiative, with phases (Discovery, Build, Pilot, Rollout). Gantt charts and milestones help you track timelines and dependencies.",
                  icon: GitBranch
                },
                {
                  title: "Tasks, Sub-Tasks & Owners",
                  description: "Break work into tasks and sub-tasks, assign to specific team members, set due dates, and track percentage complete.",
                  icon: CheckSquare
                },
                {
                  title: "Resource & Time Tracking",
                  description: "Allocate people to projects, log timesheets against tasks, and see utilization and project cost vs. budget in one place.",
                  icon: Users
                },
                {
                  title: "Ticket / Issue Management (Like Jira)",
                  description: "Supervisors or staff can raise a ticket (issue) from the mobile app when there is a problem. Tickets are auto-tagged by site, project, and type with SLA tracking.",
                  icon: FileText
                },
                {
                  title: "Queues & Assignment",
                  description: "Central board showing all open tickets. Auto or manual assignment to the right person (operations manager, IT support, HR) with status workflows.",
                  icon: TrendingUp
                },
                {
                  title: "Dashboards & Reports",
                  description: "Number of open tickets by site, type, and owner. Average resolution time. Top recurring issues for process improvement.",
                  icon: BarChart3
                }
              ].map((capability) => (
                <div 
                  key={capability.title}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 flex items-start gap-6"
                >
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                    <capability.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Integrated PM is Better Than Standalone Jira
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Linked to Your Business Data",
                  description: "Every ticket is connected to sites, projects, accounts, and clients—not isolated in a separate IT tool."
                },
                {
                  title: "Single Source of Truth",
                  description: "No more syncing data between Jira, Trello, email, and your ERP. Everything lives in one system."
                },
                {
                  title: "Budget & Resource Integration",
                  description: "Track actual project costs against budgets. See resource allocation and availability in real-time."
                },
                {
                  title: "Mobile-First for Field Teams",
                  description: "Field supervisors create tickets directly from site via mobile app—no need to log into desktop Jira."
                },
                {
                  title: "Cost Effective",
                  description: "₹12,000/month vs. Jira Enterprise at ₹40,000+/month for similar team sizes."
                },
                {
                  title: "Zero Onboarding Friction",
                  description: "If you already use NovaStack's ERP system, PM module is just another tab—no separate login or training."
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Real-World Use Cases
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Large Villa Landscaping Project",
                  description: "Track 50+ tasks (soil prep, irrigation, planting, hardscape) across 8-week timeline with dependency mapping."
                },
                {
                  title: "Corporate Campus Maintenance",
                  description: "Manage 100+ recurring maintenance tickets with priority queues and SLA tracking."
                },
                {
                  title: "Multi-Site Construction Rollouts",
                  description: "Coordinate 10 concurrent site installations with shared resource pools and equipment allocation."
                },
                {
                  title: "Client Issue Resolution",
                  description: "Track complaints from report → investigation → resolution → client confirmation with full audit trail."
                },
                {
                  title: "Software Development Sprints",
                  description: "Run 2-week agile sprints with backlog grooming, story points, and velocity tracking."
                },
                {
                  title: "Internal IT Help Desk",
                  description: "Handle employee support requests (laptop issues, access problems, software bugs) with categorization and escalation rules."
                }
              ].map((useCase, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Simple, Transparent Pricing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-sm text-muted-foreground mb-2">One-Time Setup</div>
                <div className="text-3xl font-bold text-primary mb-4">₹1,50,000</div>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li>• Workflow design</li>
                  <li>• User training</li>
                  <li>• Data migration</li>
                  <li>• Custom configurations</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border-2 border-primary text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Recommended
                </div>
                <div className="text-sm text-muted-foreground mb-2">Monthly Subscription</div>
                <div className="text-3xl font-bold text-primary mb-4">₹12,000</div>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li>• Unlimited projects</li>
                  <li>• Unlimited tickets</li>
                  <li>• Unlimited users</li>
                  <li>• Regular updates</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-sm text-muted-foreground mb-2">Advanced Features</div>
                <div className="text-3xl font-bold text-primary mb-4">+₹5,000</div>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li>• Gantt charts</li>
                  <li>• Resource forecasting</li>
                  <li>• Custom reports</li>
                  <li>• API integrations</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-muted/30 border border-border">
              <h3 className="text-xl font-bold mb-4">Who Should Add This Module?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="font-semibold text-primary mb-2">✓ Best For:</div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Companies managing 10+ concurrent projects</li>
                    <li>• Businesses with dedicated project managers</li>
                    <li>• Firms targeting large corporate/government contracts</li>
                    <li>• Organizations struggling with email/WhatsApp coordination</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-2">Skip If:</div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Smaller operations with &lt;5 concurrent projects</li>
                    <li>• Simple task lists are sufficient</li>
                    <li>• Core GIS tracking meets your needs</li>
                    <li>• You prefer lighter-weight tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unify Your Project Management?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a demo to see how integrated project management streamlines your operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Demo <ArrowRight className="ml-2 w-5 h-5" />
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

export default ProjectManagement;
