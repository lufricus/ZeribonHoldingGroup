import { Link } from "wouter";
import { 
  Shield, Users, Building2, Globe, Truck, Monitor, 
  Home as HomeIcon, ClipboardList, Car, Target, 
  CheckCircle, Award, BadgeCheck, Lock, Globe2,
  ArrowRight, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageMeta } from "@/components/seo/PageMeta";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: ClipboardList,
    title: "Advisory & Program Support",
    description: "Federal operations, risk management, finance, compliance, and readiness.",
    href: "/capabilities#advisory",
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Protective services, access control, threat response, and secure facility management.",
    href: "/capabilities#security",
  },
  {
    icon: Users,
    title: "Staffing & Recruiting",
    description: "Cleared and uncleared personnel for federal missions and operations.",
    href: "/capabilities#staffing",
  },
  {
    icon: Building2,
    title: "Cleaning Services",
    description: "Secure facility cleaning, base cleaning, and government janitorial services.",
    href: "/capabilities#cleaning",
  },
  {
    icon: Globe,
    title: "Global Cleaning Operations",
    description: "Overseas bases, embassies, and rapid deployment sanitation.",
    href: "/capabilities#global-cleaning",
  },
  {
    icon: Monitor,
    title: "IT & Supply Solutions",
    description: "Computers, telecom, tactical gear, uniforms, and technology assets.",
    href: "/capabilities#it-supply",
  },
  {
    icon: HomeIcon,
    title: "Real Estate & Property Management",
    description: "Government housing, facility operations, and base housing management.",
    href: "/capabilities#real-estate",
  },
  {
    icon: Truck,
    title: "Logistics & Procurement",
    description: "Equipment sourcing, inventory management, and supply chain solutions.",
    href: "/capabilities#logistics",
  },
  {
    icon: Car,
    title: "Fleet & Vehicle Logistics",
    description: "Government vehicles, tactical transport, and deployment support.",
    href: "/capabilities#fleet",
  },
  {
    icon: Target,
    title: "Global Operations & Deployment",
    description: "International field teams and onsite mission support.",
    href: "/capabilities#global-ops",
  },
];

const credentials = [
  { icon: Award, label: "Veteran-Led" },
  { icon: CheckCircle, label: "SBA Approved" },
  { icon: CheckCircle, label: "SAM Registered" },
  { icon: BadgeCheck, label: "UEI Verified" },
  { icon: Lock, label: "CAGE Certified" },
  { icon: Globe2, label: "U.S. & Global Operations" },
];

const clientTypes = [
  { label: "Federal Agencies", description: "Supporting U.S. government missions" },
  { label: "State & Local Government", description: "Regional and municipal partnerships" },
  { label: "Defense Contractors", description: "Prime contract collaborations" },
  { label: "Prime Contractors", description: "Strategic subcontracting" },
  { label: "Corporate Facilities", description: "Enterprise-level solutions" },
  { label: "International Agencies", description: "Global operational support" },
];

export default function Home() {
  return (
    <div>
      <PageMeta 
        title="Home"
        description="Zeribon Holding Group is a veteran-led government contractor delivering advisory, security, staffing, cleaning, IT supply, logistics, and global operations for federal agencies across all 50 US states, military bases, and overseas embassies."
        keywords="government contractor, veteran-owned, federal services, advisory, security, staffing, cleaning, IT supply, logistics, all 50 states, overseas bases, embassies"
        canonicalPath="/"
        page="home"
      />
      {/* Hero Section */}
      <section className="relative bg-deep-navy min-h-[90vh] flex items-center overflow-hidden" data-testid="section-hero">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C1A45A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-deep-navy/95 to-federal-blue/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-mission-gold/10 border border-mission-gold/30 rounded-md px-4 py-2 mb-8" data-testid="badge-veteran-owned">
              <Star className="w-4 h-4 text-mission-gold" />
              <span className="text-mission-gold text-sm font-medium">Veteran-Owned Government Contractor</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6" data-testid="text-hero-title">
              Zeribon Holding Group
            </h1>
            
            <p className="text-2xl md:text-3xl text-mission-gold font-heading font-semibold mb-6" data-testid="text-hero-tagline">
              Veteran-Led. Mission-Driven. Government-Ready.
            </p>
            
            <p className="text-lg md:text-xl text-steel-gray max-w-2xl mb-8 leading-relaxed" data-testid="text-hero-description">
              Delivering Advisory, Security, Staffing, Cleaning, IT Supply, Real Estate, 
              Logistics, and Global Operations for U.S. Federal and State Agencies.
            </p>
            
            <p className="text-white/80 text-lg font-medium mb-10">
              Trusted. Disciplined. Operationally Proven.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/government#capability-statement">
                <Button size="lg" className="text-base px-8" data-testid="button-hero-capabilities">
                  Request Capabilities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/partners">
                <Button variant="outline" size="lg" className="text-base px-8 bg-white/5 text-white border-white/20 backdrop-blur-sm" data-testid="button-hero-partner">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-federal-blue border-y border-mission-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {credentials.map((cred, index) => (
              <div 
                key={cred.label} 
                className="flex flex-col items-center text-center gap-2"
                data-testid={`credential-${index}`}
              >
                <cred.icon className="w-6 h-6 text-mission-gold" />
                <span className="text-white text-sm font-medium">{cred.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <Section>
        <SectionHeader
          subtitle="Our Expertise"
          title="Core Capabilities"
          description="Comprehensive government contracting services across 10 critical mission areas, delivered with military precision and corporate excellence."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {capabilities.map((cap, index) => (
            <Link key={cap.title} href={cap.href}>
              <Card 
                className="h-full hover-elevate cursor-pointer group transition-all duration-300"
                data-testid={`capability-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-mission-gold/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-mission-gold/20 transition-colors">
                    <cap.icon className="w-6 h-6 text-mission-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-mission-gold transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/capabilities">
            <Button variant="outline" size="lg" data-testid="button-view-capabilities">
              View All Capabilities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Who We Serve */}
      <Section dark>
        <SectionHeader
          subtitle="Our Clients"
          title="Who We Serve"
          description="Trusted by government agencies and contractors worldwide for mission-critical operations."
          centered
          dark
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <div 
              key={client.label}
              className="bg-federal-blue/30 border border-federal-blue/50 rounded-md p-6 hover-elevate"
              data-testid={`client-type-${index}`}
            >
              <h3 className="font-heading font-semibold text-lg text-white mb-2">
                {client.label}
              </h3>
              <p className="text-steel-gray text-sm">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder's Statement */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase mb-3 text-mission-gold">
            Leadership
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-8">
            Founder's Statement
          </h2>
          
          <div className="bg-card border border-card-border rounded-lg p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Zeribon Holding Group is built on a clear principle. Deliver mission-critical solutions with integrity, discipline, and complete reliability. Our leadership philosophy reflects real experience across military service, financial oversight, and global operations. Every engagement is carried out with readiness and precision to meet the highest federal standards."
            </p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section dark className="text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
          Ready for Mission Success?
        </h2>
        <p className="text-xl text-steel-gray max-w-2xl mx-auto mb-10">
          Partner with a trusted veteran-led government contractor. 
          Let's discuss how we can support your mission.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="text-base px-8" data-testid="button-cta-proposal">
              Request Proposal
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/government#capability-statement">
            <Button variant="outline" size="lg" className="text-base px-8 bg-white/5 text-white border-white/20" data-testid="button-cta-capability">
              Download Capability Statement
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
