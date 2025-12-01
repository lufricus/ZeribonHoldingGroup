import { useEffect } from "react";
import { StructuredData } from "./StructuredData";
import { 
  usStates, 
  majorCities, 
  federalDepartments, 
  federalAgencies,
  militaryBranches,
  overseasBases,
  embassiesAndConsulates,
  serviceKeywords,
  contractKeywords
} from "@/lib/seo-data";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  page?: "home" | "about" | "capabilities" | "government" | "partners" | "contact";
}

// Generate comprehensive geo-targeted keywords
function generateComprehensiveKeywords(pageKeywords: string = ""): string {
  const allKeywords: string[] = [];
  
  // Base company keywords
  allKeywords.push(
    "Zeribon Holding Group",
    "government contractor",
    "federal contractor",
    "defense contractor",
    "veteran-owned business",
    "veteran-led company",
    "SDVOSB",
    "VOSB",
    "SAM registered",
    "CAGE code",
    "UEI number"
  );
  
  // Page-specific keywords
  if (pageKeywords) {
    allKeywords.push(...pageKeywords.split(",").map(k => k.trim()).filter(Boolean));
  }
  
  // All 50 states + DC + territories geo-targeting
  usStates.forEach(state => {
    allKeywords.push(`${state.name} government contractor`);
    allKeywords.push(`${state.abbr} federal services`);
  });
  
  // Major cities geo-targeting
  majorCities.forEach(city => {
    allKeywords.push(`${city} government contractor`);
  });
  
  // All federal departments
  federalDepartments.forEach(dept => {
    allKeywords.push(`${dept.abbr} contractor`);
    allKeywords.push(`${dept.name} services`);
  });
  
  // All federal agencies
  federalAgencies.forEach(agency => {
    allKeywords.push(`${agency.abbr} contractor`);
  });
  
  // Military branches
  militaryBranches.forEach(branch => {
    allKeywords.push(`${branch.name} contractor`);
    if (branch.abbr) {
      allKeywords.push(`${branch.abbr} services`);
    }
  });
  
  // Overseas bases
  overseasBases.forEach(base => {
    allKeywords.push(`${base.name} contractor`);
    allKeywords.push(`${base.country} government services`);
  });
  
  // Embassies
  embassiesAndConsulates.forEach(embassy => {
    allKeywords.push(`${embassy.country} embassy contractor`);
  });
  
  // Service and contract keywords
  allKeywords.push(...serviceKeywords);
  allKeywords.push(...contractKeywords);
  
  // Remove duplicates and join
  return [...new Set(allKeywords)].join(", ");
}

// Generate a focused subset for meta keywords tag (most important first)
function generateMetaKeywords(pageKeywords: string = ""): string {
  const priorityKeywords: string[] = [];
  
  // Core branding
  priorityKeywords.push(
    "Zeribon Holding Group",
    "veteran-owned government contractor",
    "federal contractor USA",
    "defense contractor",
    "SDVOSB contractor",
    "SAM registered contractor"
  );
  
  // Page-specific
  if (pageKeywords) {
    priorityKeywords.push(...pageKeywords.split(",").map(k => k.trim()).filter(Boolean));
  }
  
  // All 50 states (abbreviated for meta tag)
  usStates.forEach(state => {
    priorityKeywords.push(`${state.name} government contractor`);
  });
  
  // Top metro areas
  const topMetros = [
    "Washington DC", "Arlington VA", "Alexandria VA", "Bethesda MD",
    "New York NY", "Los Angeles CA", "Chicago IL", "Houston TX",
    "Phoenix AZ", "San Antonio TX", "San Diego CA", "Dallas TX",
    "Atlanta GA", "Miami FL", "Denver CO", "Seattle WA", "Boston MA"
  ];
  topMetros.forEach(city => {
    priorityKeywords.push(`${city} federal contractor`);
  });
  
  // All federal departments
  federalDepartments.forEach(dept => {
    priorityKeywords.push(`${dept.abbr} contractor`);
  });
  
  // Major federal agencies
  federalAgencies.forEach(agency => {
    priorityKeywords.push(`${agency.abbr} contractor`);
  });
  
  // Military
  priorityKeywords.push(
    "Army contractor", "Navy contractor", "Air Force contractor",
    "Marine Corps contractor", "Space Force contractor", "Coast Guard contractor",
    "Pentagon contractor", "military base contractor"
  );
  
  // Overseas
  priorityKeywords.push(
    "overseas military base contractor",
    "embassy contractor",
    "global operations",
    "international government services",
    "Ramstein contractor",
    "Camp Humphreys contractor",
    "Yokota contractor",
    "Al-Udeid contractor"
  );
  
  // Service capabilities
  priorityKeywords.push(
    "advisory services", "security services", "staffing services",
    "cleaning services", "IT supply", "logistics", "real estate",
    "fleet management", "global operations"
  );
  
  // Contract keywords
  priorityKeywords.push(
    "GSA Schedule contractor", "IDIQ contractor", "BPA contractor",
    "8(a) contractor", "HUBZone contractor", "WOSB contractor", "MBE contractor"
  );
  
  return [...new Set(priorityKeywords)].join(", ");
}

export function PageMeta({ 
  title, 
  description, 
  keywords = "",
  canonicalPath = "",
  ogImage = "/og-image.png",
  page = "home"
}: PageMetaProps) {
  const baseUrl = "https://zeribonholding.com";
  
  useEffect(() => {
    // Update document title
    const fullTitle = `${title} | Zeribon Holding Group | Veteran-Led Government Contractor`;
    document.title = fullTitle;
    
    // Generate focused page keywords (core keywords that fit within limits)
    const pageKeywords = generateMetaKeywords(keywords);
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    
    // Update meta keywords with focused, page-relevant keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", pageKeywords);
    }
    
    // Construct absolute URLs
    const absoluteCanonical = canonicalPath ? `${baseUrl}${canonicalPath}` : baseUrl;
    const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute("content", absoluteOgImage);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", absoluteCanonical);
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", fullTitle);
    }
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute("content", description);
    }
    
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute("content", absoluteCanonical);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", absoluteOgImage);
    }
    
    // Update canonical URL (always use absolute URL)
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", absoluteCanonical);
    }
    
    // Cleanup on unmount
    return () => {
      document.title = "Zeribon Holding Group | Veteran-Led Government Contractor";
    };
  }, [title, description, keywords, canonicalPath, ogImage]);

  // Generate breadcrumbs based on page
  const getBreadcrumbs = () => {
    const base = [{ name: "Home", url: "/" }];
    switch (page) {
      case "about":
        return [...base, { name: "About Us", url: "/about" }];
      case "capabilities":
        return [...base, { name: "Capabilities", url: "/capabilities" }];
      case "government":
        return [...base, { name: "Government Services", url: "/government" }];
      case "partners":
        return [...base, { name: "Partners", url: "/partners" }];
      case "contact":
        return [...base, { name: "Contact Us", url: "/contact" }];
      default:
        return base;
    }
  };

  return <StructuredData page={page} breadcrumbs={getBreadcrumbs()} />;
}
