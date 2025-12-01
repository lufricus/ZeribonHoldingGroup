import { Link } from "wouter";
import { 
  ClipboardList, Users, Shield, Building2, Globe, Monitor,
  Home as HomeIcon, Truck, Car, Target, ArrowRight, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageMeta } from "@/components/seo/PageMeta";

interface Capability {
  id: string;
  icon: any;
  title: string;
  tagline: string;
  description: string;
  services: string[];
}

const capabilities: Capability[] = [
  {
    id: "advisory",
    icon: ClipboardList,
    title: "Advisory & Program Support",
    tagline: "Strategic Guidance for Mission Success",
    description: "Comprehensive advisory services delivering risk management, financial oversight, compliance consulting, and program management for federal operations. Our team brings Wall Street expertise to government program execution.",
    services: [
      "Risk Management & Assessment",
      "Financial Planning & Analysis",
      "Compliance Consulting",
      "Operational Strategy Development",
      "Program Oversight & Management",
      "Readiness Assessments",
    ],
  },
  {
    id: "staffing",
    icon: Users,
    title: "Staffing & Recruiting",
    tagline: "Mission-Ready Personnel Solutions",
    description: "Full-spectrum staffing solutions providing cleared and uncleared personnel for federal missions. From IT specialists to facility staff, we deliver qualified professionals ready for immediate deployment.",
    services: [
      "Cleared Personnel Placement",
      "IT & Technical Staffing",
      "Administrative Support Staff",
      "Facility Operations Personnel",
      "Emergency Deployment Teams",
      "Temporary & Permanent Placements",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security Services",
    tagline: "Protection with Military Precision",
    description: "Comprehensive security solutions including protective services, access control, threat response, and secure facility management. Our veteran-led teams bring military discipline to every security operation.",
    services: [
      "Protective Services & VIP Security",
      "Access Control & Monitoring",
      "Threat Assessment & Response",
      "Secure Facility Management",
      "Patrol & Surveillance Operations",
      "Emergency Response Planning",
    ],
  },
  {
    id: "cleaning",
    icon: Building2,
    title: "Cleaning Services",
    tagline: "Federal-Grade Facility Maintenance",
    description: "Professional janitorial and cleaning services for government buildings, military bases, and secure facilities. We understand the unique requirements of maintaining sensitive government spaces.",
    services: [
      "Government Building Janitorial",
      "Military Base Cleaning",
      "Secure Facility Cleaning (SCIF)",
      "Industrial & Commercial Cleaning",
      "Specialized Sanitation Services",
      "Day Porter & Night Cleaning",
    ],
  },
  {
    id: "global-cleaning",
    icon: Globe,
    title: "Global Cleaning Operations",
    tagline: "Worldwide Sanitation Support",
    description: "International cleaning and sanitation services for overseas military bases, U.S. embassies, and humanitarian missions. Rapid deployment capabilities ensure we can mobilize anywhere in the world.",
    services: [
      "Overseas Military Base Cleaning",
      "Embassy & Consulate Cleaning",
      "Humanitarian Mission Sanitation",
      "Rapid Deployment Cleaning Teams",
      "International Facility Maintenance",
      "OCONUS Operations Support",
    ],
  },
  {
    id: "it-supply",
    icon: Monitor,
    title: "IT & Supply Solutions",
    tagline: "Technology & Equipment Procurement",
    description: "End-to-end IT and supply chain solutions including computers, servers, telecommunications equipment, tactical gear, uniforms, and specialized technology assets for government operations.",
    services: [
      "Computer & Server Procurement",
      "Networking Equipment Supply",
      "Telecommunications Systems",
      "Tactical Gear & Uniforms",
      "Technology Asset Management",
      "Equipment Installation & Setup",
    ],
  },
  {
    id: "real-estate",
    icon: HomeIcon,
    title: "Real Estate & Property Management",
    tagline: "Government Housing Solutions",
    description: "Comprehensive real estate and property management services for government housing, base housing, and facility operations. From acquisition to maintenance, we handle all aspects of property management.",
    services: [
      "Government Housing Management",
      "Base Housing Operations",
      "Facility Activation & Setup",
      "Property Maintenance & Repairs",
      "Lease Administration",
      "Asset Lifecycle Management",
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Procurement",
    tagline: "Supply Chain Excellence",
    description: "Strategic logistics and procurement services ensuring your operations have the equipment, supplies, and resources needed for mission success. From sourcing to delivery, we manage the complete supply chain.",
    services: [
      "Equipment Sourcing & Procurement",
      "Inventory Management Systems",
      "Warehouse Management",
      "Supply Chain Optimization",
      "Distribution & Delivery",
      "Asset Tracking & Reporting",
    ],
  },
  {
    id: "fleet",
    icon: Car,
    title: "Fleet & Vehicle Logistics",
    tagline: "Mission-Ready Transportation",
    description: "Complete fleet management and vehicle logistics for government operations. From tactical vehicles to standard transport, we ensure your fleet is maintained, managed, and ready for deployment.",
    services: [
      "Government Vehicle Sourcing",
      "Tactical Transport Solutions",
      "Fleet Management Services",
      "Vehicle Maintenance Programs",
      "Deployment Logistics",
      "Supply Vehicle Operations",
    ],
  },
  {
    id: "global-ops",
    icon: Target,
    title: "Global Operations & Deployment",
    tagline: "Worldwide Mission Support",
    description: "International operational support and deployment services for missions around the globe. Our experienced teams provide onsite support in diverse and challenging environments.",
    services: [
      "International Field Teams",
      "Onsite Mission Support",
      "Remote Operations Management",
      "Cross-Border Logistics",
      "Austere Environment Operations",
      "24/7 Global Response Capability",
    ],
  },
];

export default function Capabilities() {
  return (
    <div>
      <PageMeta 
        title="Capabilities"
        description="Explore Zeribon Holding Group's ten core capability areas including advisory services, security, staffing, IT supply, cleaning, logistics, real estate, fleet management, and global operations for federal agencies nationwide."
        keywords="advisory services, security services, staffing, IT supply, cleaning services, logistics, fleet management, global operations, real estate, property management, DOD, DHS, VA"
        canonicalPath="/capabilities"
        page="capabilities"
      />
      {/* Hero */}
      <section className="bg-deep-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-mission-gold text-sm font-medium tracking-widest uppercase mb-4">Our Services</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Capabilities
            </h1>
            <p className="text-xl text-steel-gray leading-relaxed">
              Ten critical mission areas delivering comprehensive government contracting 
              services with military precision and corporate excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      {capabilities.map((cap, index) => (
        <Section 
          key={cap.id} 
          id={cap.id}
          dark={index % 2 === 1}
          className={index % 2 === 0 ? "bg-muted/30" : ""}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-mission-gold/10 rounded-md flex items-center justify-center">
                  <cap.icon className="w-7 h-7 text-mission-gold" />
                </div>
                <div>
                  <p className="text-mission-gold text-sm font-medium tracking-wide uppercase">
                    {cap.tagline}
                  </p>
                </div>
              </div>
              
              <h2 className={`font-heading font-bold text-3xl md:text-4xl mb-4 ${
                index % 2 === 1 ? "text-white" : ""
              }`}>
                {cap.title}
              </h2>
              
              <p className={`text-lg leading-relaxed mb-8 ${
                index % 2 === 1 ? "text-steel-gray" : "text-muted-foreground"
              }`}>
                {cap.description}
              </p>
              
              <Link href="/contact">
                <Button data-testid={`button-contact-${cap.id}`}>
                  Request Information
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div className={`rounded-lg p-6 ${
                index % 2 === 1 
                  ? "bg-federal-blue/30 border border-federal-blue/50" 
                  : "bg-card border border-card-border"
              }`}>
                <h3 className={`font-heading font-semibold text-lg mb-4 ${
                  index % 2 === 1 ? "text-white" : ""
                }`}>
                  Services Include:
                </h3>
                <ul className="space-y-3">
                  {cap.services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-mission-gold mt-0.5 shrink-0" />
                      <span className={index % 2 === 1 ? "text-steel-gray" : "text-muted-foreground"}>
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section dark className="text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
          Ready to Partner?
        </h2>
        <p className="text-xl text-steel-gray max-w-2xl mx-auto mb-10">
          Contact us to discuss how our capabilities can support your mission requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" data-testid="button-capabilities-cta">
              Request Proposal
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/government#capability-statement">
            <Button variant="outline" size="lg" className="bg-white/5 text-white border-white/20">
              Download Capability Statement
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
