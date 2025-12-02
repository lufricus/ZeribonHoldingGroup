import { MapPin, Building2, Globe2, Plane, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface LocationMarker {
  id: string;
  name: string;
  type: "headquarters" | "military" | "embassy" | "operations";
  region: string;
  description?: string;
  x: number;
  y: number;
}

const locations: LocationMarker[] = [
  {
    id: "hq",
    name: "Washington, D.C.",
    type: "headquarters",
    region: "North America",
    description: "Corporate Headquarters & Command Center",
    x: 23,
    y: 38
  },
  {
    id: "ramstein",
    name: "Ramstein Air Base",
    type: "military",
    region: "Europe",
    description: "Germany Operations Hub",
    x: 49,
    y: 28
  },
  {
    id: "lakenheath",
    name: "RAF Lakenheath",
    type: "military",
    region: "Europe",
    description: "United Kingdom Operations",
    x: 45,
    y: 22
  },
  {
    id: "naples",
    name: "Naval Station Naples",
    type: "military",
    region: "Europe",
    description: "Italy Mediterranean Base",
    x: 52,
    y: 32
  },
  {
    id: "alудeid",
    name: "Al-Udeid Air Base",
    type: "military",
    region: "Middle East",
    description: "Qatar Command Center",
    x: 62,
    y: 45
  },
  {
    id: "bahrain",
    name: "Naval Support Activity",
    type: "military",
    region: "Middle East",
    description: "Bahrain Operations",
    x: 65,
    y: 47
  },
  {
    id: "djibouti",
    name: "Camp Lemonnier",
    type: "military",
    region: "Africa",
    description: "Djibouti AFRICOM Hub",
    x: 62,
    y: 60
  },
  {
    id: "yokota",
    name: "Yokota Air Base",
    type: "military",
    region: "Asia-Pacific",
    description: "Japan Operations Center",
    x: 82,
    y: 32
  },
  {
    id: "humphreys",
    name: "Camp Humphreys",
    type: "military",
    region: "Asia-Pacific",
    description: "South Korea Headquarters",
    x: 82,
    y: 36
  },
  {
    id: "andersen",
    name: "Andersen Air Force Base",
    type: "military",
    region: "Asia-Pacific",
    description: "Guam Pacific Hub",
    x: 88,
    y: 60
  },
];

const regions = [
  {
    name: "North America",
    description: "U.S. Headquarters & Domestic Operations",
    icon: Building2,
    stats: "50+ States Coverage",
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
    icon: Zap,
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
