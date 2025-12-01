import { useEffect } from "react";
import { 
  usStates, 
  federalDepartments, 
  federalAgencies,
  militaryBranches,
  overseasBases,
  embassiesAndConsulates
} from "@/lib/seo-data";

// Generate area served array for all US states
const generateUSAreasServed = () => {
  return usStates.map(state => ({
    "@type": "AdministrativeArea",
    "name": state.name,
    "addressCountry": "US"
  }));
};

// Generate international areas served with military base details
const generateInternationalAreas = () => {
  const areas: object[] = [];
  const addedCountries = new Set<string>();
  
  // Add countries with military bases (with specific base references)
  overseasBases.forEach(base => {
    const country = base.country.split(" (")[0];
    if (!addedCountries.has(country)) {
      addedCountries.add(country);
      areas.push({
        "@type": "Country",
        "name": country,
        "description": `U.S. Military Base Contractor Services - ${base.name}`
      });
    }
  });
  
  // Add countries with embassies
  embassiesAndConsulates.forEach(embassy => {
    if (!addedCountries.has(embassy.country)) {
      addedCountries.add(embassy.country);
      areas.push({
        "@type": "Country",
        "name": embassy.country,
        "description": `U.S. Embassy Contractor Services - ${embassy.city}`
      });
    }
  });
  
  return areas;
};

// Generate military installations served
const generateMilitaryInstallations = () => {
  const installations: object[] = [];
  
  // Domestic military bases
  const domesticBases = [
    "Pentagon", "Fort Liberty", "Fort Cavazos", "Fort Moore", "Fort Johnson",
    "Naval Station Norfolk", "Camp Pendleton", "Fort Sam Houston", "Joint Base Lewis-McChord",
    "Fort Campbell", "Fort Bliss", "Fort Stewart", "Fort Eisenhower", "Fort Drum"
  ];
  
  domesticBases.forEach(base => {
    installations.push({
      "@type": "Place",
      "name": base,
      "description": `Government contractor services at ${base}`,
      "address": { "@type": "PostalAddress", "addressCountry": "US" }
    });
  });
  
  // Overseas installations
  overseasBases.forEach(base => {
    installations.push({
      "@type": "Place",
      "name": base.name,
      "description": `Government contractor services at ${base.name}, ${base.country}`,
      "address": { "@type": "PostalAddress", "addressCountry": base.country.split(" (")[0] }
    });
  });
  
  return installations;
};

// Generate service offerings
const generateServiceOfferings = () => [
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Advisory & Program Support",
      "description": "Risk management, financial oversight, compliance consulting, program management for federal operations"
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Security Services",
      "description": "Protective services, access control, threat response, facility security for government installations"
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Staffing & Recruiting",
      "description": "Cleared and uncleared personnel placement for federal missions and operations"
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Cleaning Services",
      "description": "Secure facility cleaning, base cleaning, government janitorial services"
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "IT & Supply Solutions",
      "description": "Computers, telecom, tactical gear, technology assets for federal agencies"
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Real Estate & Property Management",
      "description": "Government housing, facility operations, base housing management"
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Logistics & Procurement",
      "description": "Equipment sourcing, inventory management, supply chain solutions"
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Fleet & Vehicle Logistics",
      "description": "Government vehicles, tactical transport, deployment support"
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Global Operations & Deployment",
      "description": "International field teams, overseas missions, embassy and military base support"
    }
  }
];

// Company structured data for Schema.org with comprehensive geo coverage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://zeribonholding.com/#organization",
  "name": "Zeribon Holding Group",
  "alternateName": ["Zeribon", "ZHG", "Zeribon Holdings"],
  "url": "https://zeribonholding.com",
  "logo": "https://zeribonholding.com/logo.png",
  "description": "Veteran-led U.S. government contracting firm delivering advisory, security, staffing, cleaning, IT supply, real estate, logistics, and global operations for federal, state, local, and international agencies across all 50 US states and overseas military bases and embassies worldwide.",
  "foundingDate": "2022",
  "founder": {
    "@type": "Person",
    "name": "Arghoon Dar",
    "jobTitle": "Chief Executive Officer"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Washington",
    "addressRegion": "DC",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    ...generateUSAreasServed(),
    ...generateInternationalAreas(),
    ...generateMilitaryInstallations()
  ],
  "knowsAbout": [
    "Government Contracting",
    "Federal Procurement",
    "Defense Contracting",
    "Advisory Services",
    "Security Services",
    "Staffing Solutions",
    "Facility Management",
    "IT Supply Chain",
    "Logistics",
    "Global Operations",
    "Military Base Support",
    "Embassy Services",
    ...federalDepartments.map(d => `${d.name} Contracting`),
    ...federalAgencies.slice(0, 15).map(a => `${a.name} Services`),
    ...militaryBranches.slice(0, 6).map(b => `${b.name} Contractor`)
  ],
  "sameAs": [
    "https://sam.gov",
    "https://linkedin.com/company/zeribon-holding-group"
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "System for Award Management (SAM)",
      "url": "https://sam.gov"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Government Registration",
      "name": "SAM Registration"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Government Registration", 
      "name": "UEI Number"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Government Registration",
      "name": "CAGE Code"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Business Certification",
      "name": "Veteran-Owned Business"
    }
  ],
  "makesOffer": generateServiceOfferings()
};

// Government Contractor Service Schema
const governmentContractorSchema = {
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  "name": "Federal Government Contracting Services",
  "serviceType": "Government Contracting",
  "provider": {
    "@type": "Organization",
    "name": "Zeribon Holding Group"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    ...generateUSAreasServed().slice(0, 20),
    ...generateInternationalAreas().slice(0, 20)
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Federal, State, and Local Government Agencies"
  },
  "serviceOutput": "Government Contract Fulfillment",
  "termsOfService": "https://zeribonholding.com/terms"
};

// Professional Service Schema with comprehensive coverage
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Zeribon Holding Group",
  "description": "Veteran-owned government contractor providing advisory, security, staffing, cleaning, IT, logistics, and global operations services to federal, state, and local government agencies across all 50 United States, overseas military bases, and U.S. embassies worldwide.",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Washington",
    "addressRegion": "DC",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.9072",
    "longitude": "-77.0369"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "AdministrativeArea", "name": "Washington DC Metro Area" },
    ...generateUSAreasServed(),
    ...generateInternationalAreas()
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Government Contracting Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Advisory & Program Support",
        "description": "Risk management, financial oversight, compliance consulting, program management"
      },
      {
        "@type": "OfferCatalog",
        "name": "Security Services",
        "description": "Protective services, access control, threat response, facility security"
      },
      {
        "@type": "OfferCatalog",
        "name": "Staffing & Recruiting",
        "description": "Cleared and uncleared personnel for federal missions"
      },
      {
        "@type": "OfferCatalog",
        "name": "Cleaning Services",
        "description": "Secure facility cleaning, base cleaning, government janitorial"
      },
      {
        "@type": "OfferCatalog",
        "name": "IT & Supply Solutions",
        "description": "Computers, telecom, tactical gear, technology assets"
      },
      {
        "@type": "OfferCatalog",
        "name": "Real Estate & Property Management",
        "description": "Government housing, facility operations, base housing"
      },
      {
        "@type": "OfferCatalog",
        "name": "Logistics & Procurement",
        "description": "Equipment sourcing, inventory management, supply chain"
      },
      {
        "@type": "OfferCatalog",
        "name": "Fleet & Vehicle Logistics",
        "description": "Government vehicles, tactical transport, deployment support"
      },
      {
        "@type": "OfferCatalog",
        "name": "Global Operations",
        "description": "International field teams, overseas missions, embassy and military base support"
      }
    ]
  }
};

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://zeribonholding.com${item.url}`
    }))
  };
}

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zeribon Holding Group",
  "url": "https://zeribonholding.com",
  "description": "Official website of Zeribon Holding Group - Veteran-Led Government Contractor serving all 50 US states and global locations",
  "publisher": {
    "@type": "Organization",
    "name": "Zeribon Holding Group"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://zeribonholding.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Local Business Schema for each major region
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zeribon Holding Group",
  "description": "Veteran-led government contractor serving federal, state, and local agencies",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Washington",
    "addressRegion": "DC",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.9072",
    "longitude": "-77.0369"
  },
  "areaServed": generateUSAreasServed(),
  "priceRange": "$$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ]
};

interface StructuredDataProps {
  page?: "home" | "about" | "capabilities" | "government" | "partners" | "contact";
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function StructuredData({ page = "home", breadcrumbs }: StructuredDataProps) {
  useEffect(() => {
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    const schemas: object[] = [
      organizationSchema,
      websiteSchema,
      professionalServiceSchema,
    ];
    
    if (page === "government" || page === "home") {
      schemas.push(governmentContractorSchema);
      schemas.push(localBusinessSchema);
    }
    
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push(generateBreadcrumbSchema(breadcrumbs));
    }
    
    schemas.forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [page, breadcrumbs]);

  return null;
}
