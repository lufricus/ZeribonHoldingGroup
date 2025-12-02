import { useState } from "react";
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
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const getMarkerColor = (region: string) => {
    const colorMap: { [key: string]: string } = {
      "North America": "#C1A45A",
      "Europe": "#3B82F6",
      "Asia-Pacific": "#22C55E",
      "Middle East": "#F97316",
      "Africa": "#EF4444"
    };
    return colorMap[region] || "#C1A45A";
  };

  return (
    <div className="space-y-8">
      {/* Premium World Map */}
      <div className="relative bg-gradient-to-br from-deep-navy via-federal-blue to-deep-navy rounded-xl p-8 overflow-hidden border border-federal-blue/30">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 600">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#C1A45A" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="1000" height="600" fill="url(#grid)" />
          </svg>
        </div>

        {/* Main SVG Map */}
        <div className="relative z-10">
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-auto drop-shadow-lg"
            style={{ minHeight: "400px" }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#051124" />
                <stop offset="100%" stopColor="#0A1A3E" />
              </linearGradient>
              <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0A1A3E" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Ocean background */}
            <rect x="0" y="0" width="1000" height="600" fill="url(#oceanGrad)" />

            {/* Continental shapes with gradient */}
            {/* North America */}
            <path d="M 100 80 L 250 60 L 280 120 L 290 180 L 260 240 L 200 260 L 150 300 L 120 280 L 100 220 L 90 150 Z"
              fill="url(#landGrad)" stroke="#C1A45A" strokeWidth="1.5" opacity="0.8" />

            {/* South America */}
            <path d="M 180 300 L 240 290 L 270 340 L 280 420 L 250 480 L 200 500 L 160 460 L 140 380 Z"
              fill="url(#landGrad)" stroke="#C1A45A" strokeWidth="1.5" opacity="0.8" />

            {/* Europe */}
            <path d="M 450 60 L 530 50 L 560 100 L 540 160 L 480 170 L 450 140 Z"
              fill="url(#landGrad)" stroke="#C1A45A" strokeWidth="1.5" opacity="0.8" />

            {/* Africa */}
            <path d="M 450 170 L 550 160 L 590 250 L 610 380 L 570 450 L 480 440 L 430 350 L 420 240 Z"
              fill="url(#landGrad)" stroke="#C1A45A" strokeWidth="1.5" opacity="0.8" />

            {/* Asia */}
            <path d="M 560 80 L 750 40 L 850 80 L 900 140 L 920 200 L 870 220 L 800 230 L 700 210 L 600 160 L 570 120 Z"
              fill="url(#landGrad)" stroke="#C1A45A" strokeWidth="1.5" opacity="0.8" />

            {/* Australia */}
            <path d="M 800 360 L 900 350 L 950 390 L 960 450 L 920 480 L 830 470 L 790 420 Z"
              fill="url(#landGrad)" stroke="#C1A45A" strokeWidth="1.5" opacity="0.8" />

            {/* Connection lines from HQ to regions */}
            <g className="opacity-20">
              <line x1="230" y1="120" x2="490" y2="100" stroke="#C1A45A" strokeWidth="2" strokeDasharray="8,4" filter="url(#glow)" />
              <line x1="230" y1="120" x2="820" y2="120" stroke="#C1A45A" strokeWidth="2" strokeDasharray="8,4" filter="url(#glow)" />
              <line x1="230" y1="120" x2="620" y2="240" stroke="#C1A45A" strokeWidth="2" strokeDasharray="8,4" filter="url(#glow)" />
              <line x1="230" y1="120" x2="520" y2="300" stroke="#C1A45A" strokeWidth="2" strokeDasharray="8,4" filter="url(#glow)" />
            </g>

            {/* Location markers */}
            {locations.map((location) => (
              <g
                key={location.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                {/* Pulse ring for HQ */}
                {location.type === "headquarters" && (
                  <>
                    <circle
                      cx={`${location.x}%`}
                      cy={`${location.y}%`}
                      r="20"
                      fill={getMarkerColor(location.region)}
                      opacity="0.1"
                      className="animate-pulse"
                    />
                    <circle
                      cx={`${location.x}%`}
                      cy={`${location.y}%`}
                      r="15"
                      fill={getMarkerColor(location.region)}
                      opacity="0.15"
                      className="animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </>
                )}

                {/* Main marker */}
                <circle
                  cx={`${location.x}%`}
                  cy={`${location.y}%`}
                  r={hoveredLocation === location.id ? "10" : "7"}
                  fill={getMarkerColor(location.region)}
                  className="transition-all duration-300"
                  filter="url(#glow)"
                />

                {/* Hover glow */}
                {hoveredLocation === location.id && (
                  <circle
                    cx={`${location.x}%`}
                    cy={`${location.y}%`}
                    r="14"
                    fill="none"
                    stroke={getMarkerColor(location.region)}
                    strokeWidth="2"
                    opacity="0.4"
                  />
                )}

                {/* Outer ring for HQ */}
                {location.type === "headquarters" && (
                  <circle
                    cx={`${location.x}%`}
                    cy={`${location.y}%`}
                    r="12"
                    fill="none"
                    stroke={getMarkerColor(location.region)}
                    strokeWidth="2"
                    opacity="0.5"
                  />
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* Legend */}
        <div className="absolute bottom-6 left-8 flex flex-wrap gap-6 text-sm z-20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-mission-gold shadow-lg" />
            <span className="text-steel-gray font-medium">Headquarters</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg" />
            <span className="text-steel-gray font-medium">Europe</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg" />
            <span className="text-steel-gray font-medium">Asia-Pacific</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500 shadow-lg" />
            <span className="text-steel-gray font-medium">Middle East</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg" />
            <span className="text-steel-gray font-medium">Africa</span>
          </div>
        </div>
      </div>

      {/* Regional Breakdown */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {regions.map((region) => (
          <Card key={region.name} className="hover-elevate bg-gradient-to-br from-white to-gray-50 dark:from-federal-blue/20 dark:to-deep-navy/40" data-testid={`region-${region.name.toLowerCase().replace(/[^a-z]/g, '-')}`}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 ${region.color} rounded-lg flex items-center justify-center shadow-lg`}>
                  <region.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-gray-900 dark:text-white">{region.name}</h4>
                  <p className="text-xs text-mission-gold font-semibold">{region.stats}</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-steel-gray leading-relaxed">{region.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Locations Grid */}
      <div className="bg-gradient-to-r from-mission-gold/5 to-blue-500/5 rounded-xl p-6 border border-mission-gold/10">
        <h3 className="font-heading font-bold text-lg text-white mb-4">Strategic Global Locations</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className="flex items-start gap-3 p-4 bg-deep-navy/50 rounded-lg border border-federal-blue/30 hover-elevate transition-all"
              data-testid={`location-${location.id}`}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${getMarkerColor(location.region)}20` }}>
                <MapPin className="w-4 h-4" style={{ color: getMarkerColor(location.region) }} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm text-white">{location.name}</p>
                <p className="text-xs text-steel-gray">{location.description}</p>
                <p className="text-xs text-mission-gold mt-1 font-medium">{location.region}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage Stats */}
      <div className="bg-gradient-to-r from-federal-blue to-deep-navy rounded-xl p-8 border border-mission-gold/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div data-testid="stat-worldwide">
            <p className="font-heading font-bold text-3xl text-mission-gold mb-1">50+</p>
            <p className="text-sm text-steel-gray">Global Locations</p>
          </div>
          <div data-testid="stat-support">
            <p className="font-heading font-bold text-3xl text-mission-gold mb-1">80+</p>
            <p className="text-sm text-steel-gray">Metropolitan Areas</p>
          </div>
          <div data-testid="stat-continents">
            <p className="font-heading font-bold text-3xl text-mission-gold mb-1">6</p>
            <p className="text-sm text-steel-gray">Continents</p>
          </div>
          <div data-testid="stat-readiness">
            <p className="font-heading font-bold text-3xl text-mission-gold mb-1">24/7</p>
            <p className="text-sm text-steel-gray">Global Readiness</p>
          </div>
        </div>
      </div>
    </div>
  );
}
