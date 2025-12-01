import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    children: [
      { label: "Company Overview", href: "/about#overview", description: "Learn about our mission and values" },
      { label: "Leadership", href: "/about#leadership", description: "Meet our executive team" },
      { label: "Certifications & Compliance", href: "/about#certifications", description: "Our credentials and standards" },
    ],
  },
  {
    label: "CAPABILITIES",
    href: "/capabilities",
    children: [
      { label: "Advisory & Program Support", href: "/capabilities#advisory" },
      { label: "Staffing & Recruiting", href: "/capabilities#staffing" },
      { label: "Security Services", href: "/capabilities#security" },
      { label: "Cleaning Services", href: "/capabilities#cleaning" },
      { label: "Global Cleaning Operations", href: "/capabilities#global-cleaning" },
      { label: "IT & Supply Solutions", href: "/capabilities#it-supply" },
      { label: "Real Estate & Property Management", href: "/capabilities#real-estate" },
      { label: "Logistics & Procurement", href: "/capabilities#logistics" },
      { label: "Fleet & Vehicle Logistics", href: "/capabilities#fleet" },
      { label: "Global Operations & Deployment", href: "/capabilities#global-ops" },
    ],
  },
  {
    label: "GOVERNMENT",
    href: "/government",
    children: [
      { label: "Contracting & Procurement", href: "/government#contracting" },
      { label: "UEI / CAGE / NAICS", href: "/government#identifiers" },
      { label: "Capability Statement", href: "/government#capability-statement" },
      { label: "Contract Vehicles", href: "/government#vehicles" },
      { label: "Past Performance", href: "/government#past-performance" },
    ],
  },
  {
    label: "PARTNERS",
    href: "/partners",
    children: [
      { label: "Teaming Opportunities", href: "/partners#teaming" },
      { label: "Subcontractor Registration", href: "/partners#subcontractor" },
      { label: "Vendor Onboarding", href: "/partners#vendor" },
      { label: "Small Business Programs", href: "/partners#small-business" },
      { label: "Strategic Alliances", href: "/partners#alliances" },
    ],
  },
  { label: "CONTACT", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href.split("#")[0]);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-deep-navy border-b border-federal-blue/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-home-logo">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-mission-gold rounded-md flex items-center justify-center">
                <span className="text-deep-navy font-heading font-bold text-lg">Z</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-heading font-bold text-lg tracking-wide">ZERIBON</div>
                <div className="text-steel-gray text-xs tracking-widest">HOLDING GROUP</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href}>
                  <div
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md",
                      isActive(item.href)
                        ? "text-mission-gold"
                        : "text-white/90 hover:text-mission-gold"
                    )}
                    data-testid={`nav-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        activeDropdown === item.label && "rotate-180"
                      )} />
                    )}
                  </div>
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-deep-navy border border-federal-blue/50 rounded-md shadow-xl py-2 animate-fade-in">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        <div
                          className="px-4 py-2.5 text-sm text-white/80 hover:text-mission-gold hover:bg-federal-blue/30 transition-colors cursor-pointer"
                          data-testid={`nav-dropdown-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {child.label}
                          {child.description && (
                            <p className="text-xs text-steel-gray mt-0.5">{child.description}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button data-testid="button-request-proposal">
                Request Proposal
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-deep-navy border-t border-federal-blue/50 animate-slide-in-right">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" data-testid="nav-mobile">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link href={item.href}>
                  <div
                    className={cn(
                      "block px-4 py-3 text-sm font-medium rounded-md cursor-pointer",
                      isActive(item.href)
                        ? "text-mission-gold bg-federal-blue/20"
                        : "text-white/90 hover:text-mission-gold hover:bg-federal-blue/10"
                    )}
                    onClick={() => !item.children && setMobileMenuOpen(false)}
                    data-testid={`nav-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </div>
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-federal-blue/30 pl-4">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        <div
                          className="block py-2 text-sm text-white/70 hover:text-mission-gold transition-colors cursor-pointer"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/contact">
                <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Request Proposal
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
