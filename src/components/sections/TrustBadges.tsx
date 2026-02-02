import { Shield, Lock, Award, MapPin } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "NV1 Cleared Principal",
    description: "Government security clearance holder",
  },
  {
    icon: Lock,
    title: "SME Sovereign Supplier",
    description: "Australian sovereign capability",
  },
  {
    icon: Award,
    title: "DISP Partner",
    description: "Via Keane Consulting partnership",
  },
  {
    icon: MapPin,
    title: "Australian Owned & Operated",
    description: "100% Australian ownership",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted Security Credentials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team holds the highest Australian security clearances and maintains strict compliance with government standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="group relative p-6 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(115_100%_55%/0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <badge.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
