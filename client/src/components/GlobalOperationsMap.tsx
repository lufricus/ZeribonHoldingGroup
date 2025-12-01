import { MapPin, Building2, Globe2, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface LocationMarker {
  id: string;
  name: string;
  type: "headquarters" | "military" | "embassy" | "operations";
  region: string;
  description?: string;
}

const locations: LocationMarker[] = [
  {
    id: "hq",
    name: "Washington, D.C.",
    type: "headquarters",
    region: "North America",
    description: "Corporate Headquarters"
  },
  {
    id: "germany",
    name: "Ramstein Air Base",
    type: "military",
    region: "Europe",
    description: "Germany Operations"
  },
  {
    id: "japan",
    name: "Yokota Air Base",
    type: "military",
    region: "Asia-Pacific",
    description: "Japan Operations"
  },
  {
    id: "korea",
    name: "Camp Humphreys",
    type: "military",
    region: "Asia-Pacific",
    description: "South Korea Operations"
  },
  {
    id: "qatar",
    name: "Al-Udeid Air Base",
    type: "military",
    region: "Middle East",
    description: "Qatar Operations"
  },
  {
    id: "djibouti",
    name: "Camp Lemonnier",
    type: "military",
    region: "Africa",
    description: "Djibouti Operations"
  },
  {
    id: "uk",
    name: "RAF Lakenheath",
    type: "military",
    region: "Europe",
    description: "United Kingdom Operations"
  },
  {
    id: "italy",
    name: "Naval Station Naples",
    type: "military",
    region: "Europe",
    description: "Italy Operations"
  },
  {
    id: "bahrain",
    name: "Naval Support Activity",
    type: "military",
    region: "Middle East",
    description: "Bahrain Operations"
  },
  {
    id: "guam",
    name: "Andersen Air Force Base",
    type: "military",
    region: "Asia-Pacific",
    description: "Guam Operations"
  },
];

const regions = [
  {
    name: "North America",
    description: "U.S. Headquarters & Domestic Operations",
    icon: Building2,
    stats: "50 States Coverage",
    color: "bg-mission-gold"
  },
  {
    name: "Europe",
    description: "NATO Bases & Embassy Support",
    icon: Globe2,
    stats: "12+ Countries",
    color: "bg-blue-500"
  },
  {
    name: "Asia-Pacific",
    description: "Military Installations & Missions",
    icon: Plane,
    stats: "8+ Countries",
    color: "bg-green-500"
  },
  {
    name: "Middle East",
    description: "Forward Operating Locations",
    icon: MapPin,
    stats: "6+ Countries",
    color: "bg-orange-500"
  },
  {
    name: "Africa",
    description: "Embassy & AFRICOM Support",
    icon: MapPin,
    stats: "4+ Countries",
    color: "bg-red-500"
  },
];

export default function GlobalOperationsMap() {
  return (
    <div className="space-y-8">
      {/* World Map Visual */}
      <div className="relative bg-deep-navy rounded-lg p-8 overflow-hidden">
        {/* World Map SVG Background */}
        <div className="relative z-10">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-auto"
            style={{ minHeight: "300px" }}
          >
            {/* Simplified world map paths */}
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a365d" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0A1A3E" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Background ocean */}
            <rect x="0" y="0" width="1000" height="500" fill="#051124" />
            
            {/* Simplified continental shapes */}
            {/* North America */}
            <path
              d="M100,50 L250,50 L280,100 L290,150 L270,200 L230,220 L180,250 L150,280 L120,250 L100,200 L80,150 L90,100 Z"
              fill="url(#mapGradient)"
              stroke="#C1A45A"
              strokeWidth="1"
              opacity="0.7"
            />
            {/* South America */}
            <path
              d="M200,280 L240,280 L260,320 L250,380 L230,430 L200,450 L170,420 L160,360 L180,300 Z"
              fill="url(#mapGradient)"
              stroke="#C1A45A"
              strokeWidth="1"
              opacity="0.7"
            />
            {/* Europe */}
            <path
              d="M420,60 L500,50 L520,80 L510,120 L480,150 L450,140 L430,120 L420,90 Z"
              fill="url(#mapGradient)"
              stroke="#C1A45A"
              strokeWidth="1"
              opacity="0.7"
            />
            {/* Africa */}
            <path
              d="M420,150 L500,150 L530,200 L540,280 L520,350 L480,380 L430,360 L400,300 L390,230 L400,180 Z"
              fill="url(#mapGradient)"
              stroke="#C1A45A"
              strokeWidth="1"
              opacity="0.7"
            />
            {/* Asia */}
            <path
              d="M520,60 L700,40 L780,60 L820,100 L850,140 L830,180 L780,200 L720,220 L650,210 L580,180 L540,140 L530,100 Z"
              fill="url(#mapGradient)"
              stroke="#C1A45A"
              strokeWidth="1"
              opacity="0.7"
            />
            {/* Australia */}
            <path
              d="M750,320 L830,310 L870,330 L880,370 L860,400 L810,410 L760,390 L740,360 Z"
              fill="url(#mapGradient)"
              stroke="#C1A45A"
              strokeWidth="1"
              opacity="0.7"
            />

            {/* Connection lines from HQ */}
            <g className="opacity-30">
              {/* Lines from Washington DC to various locations */}
              <line x1="180" y1="130" x2="470" y2="100" stroke="#C1A45A" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="180" y1="130" x2="750" y2="120" stroke="#C1A45A" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="180" y1="130" x2="520" y2="200" stroke="#C1A45A" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="180" y1="130" x2="460" y2="280" stroke="#C1A45A" strokeWidth="1" strokeDasharray="5,5" />
            </g>

            {/* Location markers */}
            {/* Washington DC - Headquarters */}
            <g data-testid="marker-hq">
              <circle cx="180" cy="130" r="12" fill="#C1A45A" className="animate-pulse" />
              <circle cx="180" cy="130" r="8" fill="#0A1A3E" />
              <circle cx="180" cy="130" r="4" fill="#C1A45A" />
            </g>
            
            {/* Europe markers */}
            <g data-testid="marker-europe">
              <circle cx="470" cy="100" r="6" fill="#3B82F6" />
              <circle cx="455" cy="130" r="5" fill="#3B82F6" />
            </g>
            
            {/* Asia-Pacific markers */}
            <g data-testid="marker-asia">
              <circle cx="750" cy="120" r="6" fill="#22C55E" />
              <circle cx="720" cy="150" r="5" fill="#22C55E" />
              <circle cx="830" cy="350" r="5" fill="#22C55E" />
            </g>
            
            {/* Middle East markers */}
            <g data-testid="marker-middleeast">
              <circle cx="520" cy="200" r="6" fill="#F97316" />
              <circle cx="550" cy="180" r="5" fill="#F97316" />
            </g>
            
            {/* Africa markers */}
            <g data-testid="marker-africa">
              <circle cx="460" cy="280" r="6" fill="#EF4444" />
            </g>
          </svg>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-mission-gold" />
            <span className="text-steel-gray">Headquarters</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-steel-gray">Europe</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-steel-gray">Asia-Pacific</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-steel-gray">Middle East</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-steel-gray">Africa</span>
          </div>
        </div>
      </div>

      {/* Regional Breakdown */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {regions.map((region) => (
          <Card key={region.name} className="hover-elevate" data-testid={`region-${region.name.toLowerCase().replace(/[^a-z]/g, '-')}`}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 ${region.color} rounded-md flex items-center justify-center`}>
                  <region.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm">{region.name}</h4>
                  <p className="text-xs text-mission-gold">{region.stats}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{region.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Locations */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {locations.slice(0, 5).map((location) => (
          <div 
            key={location.id}
            className="flex items-center gap-3 p-3 bg-card rounded-md border"
            data-testid={`location-${location.id}`}
          >
            <MapPin className={`w-4 h-4 shrink-0 ${
              location.type === "headquarters" ? "text-mission-gold" : 
              location.region === "Europe" ? "text-blue-500" :
              location.region === "Asia-Pacific" ? "text-green-500" :
              location.region === "Middle East" ? "text-orange-500" :
              "text-red-500"
            }`} />
            <div className="min-w-0">
              <p className="font-medium text-sm truncate">{location.name}</p>
              <p className="text-xs text-muted-foreground">{location.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
