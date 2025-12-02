import { 
  Shield, Award, BadgeCheck, Building2, Globe, Target, 
  CheckCircle, Users, Star, FileCheck
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageMeta } from "@/components/seo/PageMeta";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Unwavering commitment to honesty, transparency, and ethical conduct in every engagement.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Military-grade accuracy and attention to detail in all operations and deliverables.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Relentless pursuit of the highest standards in service delivery and client satisfaction.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborative approach that leverages diverse expertise for mission success.",
  },
];

const certifications = [
  { label: "Veteran-Owned Business", status: "Verified" },
  { label: "SAM Registration", status: "Active" },
  { label: "UEI Number", status: "Verified" },
  { label: "CAGE Code", status: "Certified" },
  { label: "NAICS Classification", status: "Registered" },
  { label: "Global Operations Capability", status: "Active" },
  { label: "GSA Schedule", status: "In Progress" },
];

const timeline = [
  { year: "2022", event: "Company Founded", description: "Zeribon Holding Group established with a mission to serve America." },
  { year: "2022", event: "SAM Registration", description: "Completed federal registration, eligibility, and compliance requirements." },
  { year: "2023", event: "Federal Readiness Milestones", description: "Developed core capabilities, built government partnerships, and completed all required SAM, UEI, NAICS, and compliance frameworks to pursue federal contracts." },
  { year: "2024", event: "Operational Expansion", description: "Expanded service offerings, strengthened government-facing infrastructure, and prepared for federal, state, and defense-sector opportunities." },
  { year: "2025", event: "Contract Pursuit Phase", description: "Actively pursuing federal, defense, intelligence, and state-level contracts with a full capability statement, compliant infrastructure, and mission-ready operations." },
];

export default function About() {
  return (
    <div>
      <PageMeta 
        title="About Us"
        description="Learn about Zeribon Holding Group, a veteran-led government contracting firm delivering mission-critical services with integrity, discipline, and operational excellence across all 50 US states and global locations."
        keywords="veteran-owned business, government contractor, mission-critical services, federal contracting, Arghoon Dar, CEO"
        canonicalPath="/about"
        page="about"
      />
      {/* Hero */}
      <section className="bg-deep-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-mission-gold text-sm font-medium tracking-widest uppercase mb-4">About Us</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Mission-Critical Excellence
            </h1>
            <p className="text-xl text-steel-gray leading-relaxed">
              A veteran-led government contracting firm delivering integrity, discipline, 
              and operational excellence across federal, state, and international agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <Section id="overview">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Company Overview"
              title="Who We Are"
            />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Zeribon Holding Group is a U.S. veteran-led government contracting firm delivering 
                mission-critical services across advisory, security, staffing, IT supply, cleaning, 
                logistics, real estate, and global operations.
              </p>
              <p>
                Established in 2022, we support federal, state, and international agencies with 
                integrity, discipline, and operational excellence. Our approach blends military 
                precision with corporate strategy for measurable results.
              </p>
              <p>
                With headquarters in the United States and global operational capabilities, 
                we are positioned to support missions anywhere in the world, ensuring our 
                clients receive the same level of excellence regardless of location.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {coreValues.map((value) => (
              <Card key={value.title} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-mission-gold/10 rounded-md flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-mission-gold" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership - Founder's Statement */}
      <Section dark id="leadership">
        <SectionHeader
          subtitle="Leadership"
          title="Founder's Statement"
          dark
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-federal-blue/30 border border-federal-blue/50 rounded-lg p-8 md:p-12">
            <p className="text-white text-lg leading-relaxed font-medium">
              "Zeribon Holding Group was created to serve America with integrity, precision, and operational excellence. Built on the principles of military discipline, financial expertise, and global operational leadership, the mission is simple: deliver solutions that meet the highest federal standards and support agencies that protect and strengthen this nation."
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-muted/30">
        <SectionHeader
          subtitle="Our Journey"
          title="Company Timeline"
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="shrink-0 w-16 text-right">
                  <span className="text-mission-gold font-heading font-bold">{item.year}</span>
                </div>
                <div className="shrink-0 w-4 h-4 bg-mission-gold rounded-full mt-1.5 relative z-10" />
                <div className="flex-1 bg-card border border-card-border rounded-md p-6 hover-elevate">
                  <h3 className="font-heading font-semibold text-lg mb-1">{item.event}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications">
        <SectionHeader
          subtitle="Compliance"
          title="Certifications & Compliance"
          description="Fully registered and compliant with all federal contracting requirements."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert.label}
              className="flex items-center gap-4 bg-card border border-card-border rounded-md p-4 hover-elevate"
            >
              <div className="w-10 h-10 bg-mission-gold/10 rounded-md flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5 text-mission-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{cert.label}</p>
                <p className="text-sm text-mission-gold">{cert.status}</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
