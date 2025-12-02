import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Globe } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Certifications", href: "/about#certifications" },
    { label: "Careers", href: "/contact" },
  ],
  capabilities: [
    { label: "Advisory Services", href: "/capabilities#advisory" },
    { label: "Security Services", href: "/capabilities#security" },
    { label: "Staffing Solutions", href: "/capabilities#staffing" },
    { label: "Cleaning Services", href: "/capabilities#cleaning" },
    { label: "Global Cleaning Operations", href: "/capabilities#global-cleaning" },
    { label: "IT & Supply Solutions", href: "/capabilities#it-supply" },
    { label: "Real Estate & Property Management", href: "/capabilities#real-estate" },
    { label: "Logistics & Procurement", href: "/capabilities#logistics" },
    { label: "Fleet & Vehicle Logistics", href: "/capabilities#fleet" },
    { label: "Global Operations & Deployment", href: "/capabilities#global-ops" },
  ],
  government: [
    { label: "Contracting Info", href: "/government#contracting" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Capability Statement", href: "/government#capability-statement" },
    { label: "Contract Vehicles", href: "/government#vehicles" },
    { label: "SAM Registration", href: "/government#identifiers" },
  ],
  partners: [
    { label: "Teaming", href: "/partners#teaming" },
    { label: "Subcontractor Registration", href: "/partners#subcontractor" },
    { label: "Vendor Onboarding", href: "/partners#vendor" },
    { label: "Small Business Programs", href: "/partners#small-business" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-navy border-t border-federal-blue/30">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer mb-6">
                <Globe className="w-6 h-6 text-mission-gold" />
                <div className="flex flex-col leading-tight">
                  <div className="text-white font-heading font-bold text-sm tracking-wider">ZERIBON</div>
                  <div className="text-mission-gold font-heading font-semibold text-xs tracking-widest">HOLDING GROUP</div>
                </div>
              </div>
            </Link>
            <p className="text-steel-gray text-sm leading-relaxed mb-6 max-w-sm">
              Veteran-led government contractor delivering mission-critical services across advisory, 
              security, staffing, IT supply, cleaning, logistics, and global operations.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:contact@zeribongroup.com" 
                className="flex items-center gap-3 text-steel-gray hover:text-mission-gold transition-colors text-sm"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4" />
                contact@zeribongroup.com
              </a>
              <a 
                href="tel:+1-000-000-0000" 
                className="flex items-center gap-3 text-steel-gray hover:text-mission-gold transition-colors text-sm"
                data-testid="link-footer-phone"
              >
                <Phone className="w-4 h-4" />
                (000) 000-0000
              </a>
              <div className="flex items-start gap-3 text-steel-gray text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>United States<br />Global Operations</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm mb-4 tracking-wide">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-steel-gray hover:text-mission-gold transition-colors text-sm cursor-pointer" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm mb-4 tracking-wide">CAPABILITIES</h4>
            <ul className="space-y-3">
              {footerLinks.capabilities.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-steel-gray hover:text-mission-gold transition-colors text-sm cursor-pointer" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm mb-4 tracking-wide">GOVERNMENT</h4>
            <ul className="space-y-3">
              {footerLinks.government.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-steel-gray hover:text-mission-gold transition-colors text-sm cursor-pointer" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm mb-4 tracking-wide">PARTNERS</h4>
            <ul className="space-y-3">
              {footerLinks.partners.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-steel-gray hover:text-mission-gold transition-colors text-sm cursor-pointer" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Credentials Bar */}
      <div className="border-t border-federal-blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-steel-gray">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-mission-gold rounded-full"></span>
              Veteran-Owned
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-mission-gold rounded-full"></span>
              SAM Registered
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-mission-gold rounded-full"></span>
              UEI Verified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-mission-gold rounded-full"></span>
              CAGE Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-mission-gold rounded-full"></span>
              Global Operations
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-federal-blue/30 bg-matte-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-gray">
            <p>&copy; {currentYear} Zeribon Holding Group. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy">
                <span className="hover:text-mission-gold transition-colors cursor-pointer">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="hover:text-mission-gold transition-colors cursor-pointer">Terms of Service</span>
              </Link>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-mission-gold transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
