import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/security", label: "Security" },
  { href: "/academy", label: "Academy" },
  { href: "/contact", label: "Contact" },
  { href: "/About", label: "About" },
  { href: "/Insights", label: "Insights" },
];

const solutionsSubmenu = [
  { href: "/india-solutions", label: "India Solutions" },
  { href: "/fintech", label: "Fintech & Banking" },
  { href: "/project-management", label: "Project Management" }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              Nova<span className="text-primary">stack</span> <span>Techno</span><span className="text-primary">logies</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Solutions Dropdown - Desktop */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-lg border border-border/50 rounded-lg shadow-xl py-2 animate-fade-in">
                  {solutionsSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://portal.novastack.com.au" target="_blank" rel="noopener noreferrer">
                Client Portal
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors duration-300 hover:text-primary ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Solutions Dropdown - Mobile */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 w-full"
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileSolutionsOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {solutionsSubmenu.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          setMobileSolutionsOpen(false);
                        }}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Button variant="hero" className="mt-4" asChild>
                <a href="https://portal.novastack.com.au" target="_blank" rel="noopener noreferrer">
                  Client Portal
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
