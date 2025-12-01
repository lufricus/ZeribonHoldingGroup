import { Link } from "wouter";
import { 
  FileText, Shield, Hash, Folder, Award, Building2,
  Download, ArrowRight, CheckCircle, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageMeta } from "@/components/seo/PageMeta";

const identifiers = [
  { label: "UEI Number", value: "Registered", description: "Unique Entity Identifier for federal contracting" },
  { label: "CAGE Code", value: "Certified", description: "Commercial and Government Entity Code" },
  { label: "SAM Status", value: "Active", description: "System for Award Management registration" },
];

const naicsCodes = [
  { code: "541611", description: "Administrative Management & General Management Consulting" },
  { code: "561210", description: "Facilities Support Services" },
  { code: "561612", description: "Security Guards & Patrol Services" },
  { code: "561720", description: "Janitorial Services" },
  { code: "541512", description: "Computer Systems Design Services" },
  { code: "423430", description: "Computer and Computer Peripheral Equipment" },
  { code: "531312", description: "Nonresidential Property Managers" },
  { code: "484110", description: "General Freight Trucking, Local" },
  { code: "561320", description: "Temporary Help Services" },
  { code: "541990", description: "All Other Professional, Scientific & Technical Services" },
];

const contractVehicles = [
  { 
    name: "Open Market", 
    status: "Available",
    description: "Direct contracting through competitive bids and negotiations"
  },
  { 
    name: "Micro-Purchase", 
    status: "Available",
    description: "Simplified acquisitions under the micro-purchase threshold"
  },
  { 
    name: "BPA (Blanket Purchase Agreement)", 
    status: "Pursuing",
    description: "Pre-negotiated terms for recurring requirements"
  },
  { 
    name: "IDIQ (Indefinite Delivery/Indefinite Quantity)", 
    status: "Pursuing",
    description: "Flexible delivery ordering for government requirements"
  },
  { 
    name: "GSA Schedule", 
    status: "In Progress",
    description: "General Services Administration Multiple Award Schedule"
  },
];

const capabilityHighlights = [
  "Veteran-Owned Business",
  "10 Core Capability Areas",
  "U.S. & Global Operations",
  "Cleared Personnel Available",
  "SAM Registered & Compliant",
  "Past Performance References",
];

export default function Government() {
  return (
    <div>
      <PageMeta 
        title="Government Services"
        description="Zeribon Holding Group is fully registered and compliant for federal, state, and local government contracting with UEI, CAGE code, and SAM registration."
        keywords="government contracting, federal contractor, SAM registered, UEI, CAGE code, NAICS codes"
      />
      {/* Hero */}
      <section className="bg-deep-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-mission-gold text-sm font-medium tracking-widest uppercase mb-4">Federal Contracting</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Government Services
            </h1>
            <p className="text-xl text-steel-gray leading-relaxed">
              Fully registered and compliant for federal, state, and local government contracting. 
              Your trusted partner for mission-critical procurements.
            </p>
          </div>
        </div>
      </section>

      {/* Contracting & Procurement */}
      <Section id="contracting">
        <SectionHeader
          subtitle="How To Contract"
          title="Contracting & Procurement"
          description="Multiple pathways for government agencies to engage our services."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 bg-mission-gold/10 rounded-md flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-mission-gold" />
              </div>
              <CardTitle>Direct Procurement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Submit RFPs, RFQs, and solicitations directly to our contracts team 
                for competitive bids on open market opportunities.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Submit RFP/RFQ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 bg-mission-gold/10 rounded-md flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-mission-gold" />
              </div>
              <CardTitle>Prime Contracting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Engage Zeribon as a prime contractor for multi-disciplinary projects 
                requiring comprehensive service delivery.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Request Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 bg-mission-gold/10 rounded-md flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-mission-gold" />
              </div>
              <CardTitle>Subcontracting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Partner with prime contractors to provide specialized services 
                as a qualified subcontractor.
              </p>
              <Link href="/partners#subcontractor">
                <Button variant="outline" className="w-full">
                  Partner With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* UEI / CAGE / NAICS */}
      <Section dark id="identifiers">
        <SectionHeader
          subtitle="Federal Registration"
          title="UEI / CAGE / NAICS"
          description="Complete federal registration and certification for government contracting."
          dark
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Registration Status */}
          <div>
            <h3 className="font-heading font-semibold text-xl text-white mb-6">Registration Status</h3>
            <div className="space-y-4">
              {identifiers.map((item) => (
                <div 
                  key={item.label}
                  className="flex items-center gap-4 bg-federal-blue/30 border border-federal-blue/50 rounded-md p-4"
                >
                  <div className="w-10 h-10 bg-mission-gold/10 rounded-md flex items-center justify-center shrink-0">
                    <Hash className="w-5 h-5 text-mission-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{item.label}</p>
                    <p className="text-steel-gray text-sm">{item.description}</p>
                  </div>
                  <span className="text-mission-gold font-medium text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* NAICS Codes */}
          <div>
            <h3 className="font-heading font-semibold text-xl text-white mb-6">NAICS Classifications</h3>
            <div className="bg-federal-blue/30 border border-federal-blue/50 rounded-md p-6 max-h-80 overflow-y-auto">
              <div className="space-y-3">
                {naicsCodes.map((item) => (
                  <div key={item.code} className="flex items-start gap-3">
                    <span className="text-mission-gold font-mono text-sm shrink-0 w-16">{item.code}</span>
                    <span className="text-steel-gray text-sm">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Capability Statement */}
      <Section id="capability-statement" className="bg-muted/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Overview Document"
              title="Capability Statement"
              description="Our comprehensive capability statement provides contracting officers with essential information about our qualifications, experience, and service offerings."
            />
            
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {capabilityHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-mission-gold shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button data-testid="button-download-capability">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Link href="/contact">
                <Button variant="outline">
                  Request Detailed Information
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <Card className="bg-card">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-mission-gold rounded-md flex items-center justify-center mb-4">
                    <span className="text-deep-navy font-heading font-bold text-2xl">Z</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl">ZERIBON HOLDING GROUP</h3>
                  <p className="text-muted-foreground text-sm">Capability Statement</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="border-b pb-3">
                    <p className="font-medium text-muted-foreground mb-1">Core Competencies</p>
                    <p>Advisory, Security, Staffing, Cleaning, IT Supply, Logistics, Real Estate, Global Operations</p>
                  </div>
                  <div className="border-b pb-3">
                    <p className="font-medium text-muted-foreground mb-1">Business Classification</p>
                    <p>Veteran-Owned Business</p>
                  </div>
                  <div className="border-b pb-3">
                    <p className="font-medium text-muted-foreground mb-1">Operational Reach</p>
                    <p>United States & Global Operations</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground mb-1">Contact</p>
                    <p>contact@zeribongroup.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Contract Vehicles */}
      <Section id="vehicles">
        <SectionHeader
          subtitle="Procurement Options"
          title="Contract Vehicles"
          description="Current and planned contract vehicles for streamlined procurement."
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {contractVehicles.map((vehicle) => (
            <Card key={vehicle.name} className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-semibold">{vehicle.name}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    vehicle.status === "Available" 
                      ? "bg-green-500/10 text-green-600" 
                      : "bg-mission-gold/10 text-mission-gold"
                  }`}>
                    {vehicle.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{vehicle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Past Performance */}
      <Section dark id="past-performance">
        <SectionHeader
          subtitle="Track Record"
          title="Past Performance"
          description="Our leadership brings extensive experience from military, financial, and operational sectors."
          dark
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-federal-blue/30 border-federal-blue/50">
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-mission-gold mb-4" />
              <h3 className="font-heading font-semibold text-white mb-2">Military Operations</h3>
              <p className="text-steel-gray text-sm">
                Leadership experience with U.S. Army Special Forces, collaborating with 
                Navy SEALs, Delta Force, Rangers, CIA, and FBI on critical missions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-federal-blue/30 border-federal-blue/50">
            <CardContent className="p-6">
              <Building2 className="w-8 h-8 text-mission-gold mb-4" />
              <h3 className="font-heading font-semibold text-white mb-2">Financial Services</h3>
              <p className="text-steel-gray text-sm">
                Tier-1 investment banking experience on Wall Street, providing 
                strategic financial expertise and operational leadership.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-federal-blue/30 border-federal-blue/50">
            <CardContent className="p-6">
              <Folder className="w-8 h-8 text-mission-gold mb-4" />
              <h3 className="font-heading font-semibold text-white mb-2">Corporate Excellence</h3>
              <p className="text-steel-gray text-sm">
                Cornell University Executive MBA training combined with proven 
                leadership in complex organizational environments.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button size="lg" data-testid="button-request-references">
              Request Past Performance References
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
