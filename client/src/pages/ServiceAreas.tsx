import { MapPin, Building2, Globe, Shield, Flag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageMeta } from "@/components/seo/PageMeta";
import { 
  usStates, 
  majorCities, 
  federalDepartments, 
  federalAgencies,
  militaryBranches,
  majorMilitaryBases,
  overseasBases,
  embassiesAndConsulates
} from "@/lib/seo-data";

export default function ServiceAreas() {
  return (
    <div>
      <PageMeta 
        title="Service Areas"
        description="Zeribon Holding Group provides government contracting services across all 50 US states, Washington DC, US territories, overseas military bases, and embassies worldwide. Serving DOD, DHS, VA, and all federal agencies."
        keywords="service areas, all 50 states, federal agencies, military bases, embassies, government contractor locations, nationwide services, global operations"
        canonicalPath="/service-areas"
        page="government"
      />
      
      {/* Hero */}
      <section className="bg-deep-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-mission-gold text-sm font-medium tracking-widest uppercase mb-4">Nationwide & Global</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6" data-testid="text-service-areas-title">
              Service Areas
            </h1>
            <p className="text-xl text-steel-gray leading-relaxed">
              Delivering mission-critical government contracting services across all 50 United States, 
              U.S. territories, overseas military installations, and diplomatic missions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* All 50 States */}
      <Section id="states">
        <SectionHeader
          subtitle="Nationwide Coverage"
          title="All 50 States & Territories"
          description="We provide government contracting services to federal, state, and local agencies in every state and territory."
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {usStates.map((state) => (
            <Card key={state.abbr} className="hover-elevate" data-testid={`state-${state.abbr.toLowerCase()}`}>
              <CardContent className="p-3 text-center">
                <p className="font-semibold text-sm">{state.name}</p>
                <p className="text-xs text-muted-foreground">{state.abbr}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Major Metro Areas */}
      <Section id="cities" className="bg-muted/30">
        <SectionHeader
          subtitle="Metropolitan Areas"
          title="Major Cities We Serve"
          description="Strategic presence in key metropolitan areas with high concentrations of government facilities and agencies."
          centered
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-w-5xl mx-auto">
          {majorCities.slice(0, 50).map((city, index) => (
            <div 
              key={city} 
              className="flex items-center gap-2 text-sm py-2 px-3 bg-card border border-card-border rounded-md"
              data-testid={`city-${index}`}
            >
              <MapPin className="w-3 h-3 text-mission-gold shrink-0" />
              <span className="truncate">{city}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Federal Departments */}
      <Section id="departments">
        <SectionHeader
          subtitle="Federal Government"
          title="Executive Departments"
          description="Serving all 15 Cabinet-level departments and their sub-agencies across the federal government."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {federalDepartments.map((dept, index) => (
            <Card key={dept.abbr} className="hover-elevate" data-testid={`dept-${index}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-mission-gold/10 rounded-md flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-mission-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{dept.name}</p>
                    <p className="text-xs text-mission-gold font-medium">{dept.abbr}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Federal Agencies */}
      <Section id="agencies" className="bg-muted/30">
        <SectionHeader
          subtitle="Independent Agencies"
          title="Federal Agencies"
          description="Supporting major independent agencies and government organizations nationwide."
          centered
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {federalAgencies.slice(0, 20).map((agency, index) => (
            <Card key={agency.abbr} className="hover-elevate" data-testid={`agency-${index}`}>
              <CardContent className="p-3 text-center">
                <p className="font-bold text-mission-gold text-sm">{agency.abbr}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{agency.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Military Branches */}
      <Section id="military" dark>
        <SectionHeader
          subtitle="Defense"
          title="Military Branches & Commands"
          description="Comprehensive support across all branches of the U.S. Armed Forces and unified combatant commands."
          dark
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {militaryBranches.slice(0, 12).map((branch, index) => (
            <Card key={branch.name} className="bg-federal-blue/30 border-federal-blue/50" data-testid={`branch-${index}`}>
              <CardContent className="p-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-mission-gold shrink-0" />
                <div>
                  <p className="font-semibold text-white text-sm">{branch.name}</p>
                  {branch.abbr && (
                    <p className="text-xs text-mission-gold">{branch.abbr}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Domestic Military Bases */}
      <Section id="bases">
        <SectionHeader
          subtitle="Installations"
          title="Major Military Bases"
          description="Active support at major military installations across the continental United States and territories."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {majorMilitaryBases.map((base, index) => (
            <div 
              key={base.name}
              className="flex items-start gap-3 p-4 bg-card border border-card-border rounded-md hover-elevate"
              data-testid={`base-${index}`}
            >
              <Flag className="w-5 h-5 text-mission-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">{base.name}</p>
                <p className="text-xs text-muted-foreground">{base.location} - {base.branch}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Overseas Bases */}
      <Section id="overseas" className="bg-muted/30">
        <SectionHeader
          subtitle="Global Presence"
          title="Overseas Military Bases"
          description="Extending our capabilities to U.S. military installations around the world."
          centered
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {overseasBases.map((base, index) => (
            <Card key={base.name} className="hover-elevate" data-testid={`overseas-${index}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-mission-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{base.name}</p>
                    <p className="text-xs text-muted-foreground">{base.country}</p>
                    <p className="text-xs text-mission-gold">{base.region}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Embassies */}
      <Section id="embassies" dark>
        <SectionHeader
          subtitle="Diplomatic Missions"
          title="Embassies & Consulates"
          description="Supporting U.S. diplomatic missions and State Department facilities worldwide."
          dark
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {embassiesAndConsulates.map((embassy, index) => (
            <Card key={`${embassy.city}-${embassy.country}`} className="bg-federal-blue/30 border-federal-blue/50" data-testid={`embassy-${index}`}>
              <CardContent className="p-3 text-center">
                <p className="font-semibold text-white text-sm">{embassy.city}</p>
                <p className="text-xs text-steel-gray">{embassy.country}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Coverage Summary */}
      <Section id="summary">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            subtitle="Complete Coverage"
            title="Wherever the Mission Takes You"
            description="From Washington DC to remote overseas installations, Zeribon Holding Group delivers consistent, reliable government contracting services."
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center" data-testid="stat-states">
              <p className="font-heading font-bold text-4xl text-mission-gold">50+</p>
              <p className="text-sm text-muted-foreground">States & Territories</p>
            </div>
            <div className="text-center" data-testid="stat-agencies">
              <p className="font-heading font-bold text-4xl text-mission-gold">30+</p>
              <p className="text-sm text-muted-foreground">Federal Agencies</p>
            </div>
            <div className="text-center" data-testid="stat-bases">
              <p className="font-heading font-bold text-4xl text-mission-gold">100+</p>
              <p className="text-sm text-muted-foreground">Military Bases</p>
            </div>
            <div className="text-center" data-testid="stat-countries">
              <p className="font-heading font-bold text-4xl text-mission-gold">50+</p>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
