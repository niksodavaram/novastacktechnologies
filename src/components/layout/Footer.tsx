import { Link } from "react-router-dom";
import { Shield, Lock, Award, MapPin } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "NV1 Cleared Principal" },
  { icon: Lock, label: "SME Sovereign Supplier" },
  { icon: Award, label: "DISP Partner" },
  { icon: MapPin, label: "Australian Owned" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Trust Badges */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <badge.icon className="w-8 h-8 text-primary mb-3" />
              <span className="text-sm font-medium text-muted-foreground">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <span className="text-2xl font-bold tracking-tight text-foreground">
                  Nova<span className="text-primary">stack</span>
                </span>
              </Link>
              <p className="text-muted-foreground text-sm max-w-md mb-4">
                NovaStack Technologies Pty Ltd is a sovereign Australian engineering consultancy 
                specializing in high-security AI, MedTech, and Defence infrastructure solutions.
              </p>
              <p className="text-muted-foreground text-sm">
                ABN: XX XXX XXX XXX
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Capabilities", "Security", "Academy", "Case Studies", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a 
                    href="mailto:consulting@novastack.com.au" 
                    className="hover:text-primary transition-colors duration-300"
                  >
                    consulting@novastack.com.au
                  </a>
                </li>
                <li>Australia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} NovaStack Technologies Pty Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
