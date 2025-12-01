// Comprehensive SEO Data for Government Contractor Geo-Targeting

// All 50 US States + DC + Territories
export const usStates = [
  { name: "Alabama", abbr: "AL", capital: "Montgomery" },
  { name: "Alaska", abbr: "AK", capital: "Juneau" },
  { name: "Arizona", abbr: "AZ", capital: "Phoenix" },
  { name: "Arkansas", abbr: "AR", capital: "Little Rock" },
  { name: "California", abbr: "CA", capital: "Sacramento" },
  { name: "Colorado", abbr: "CO", capital: "Denver" },
  { name: "Connecticut", abbr: "CT", capital: "Hartford" },
  { name: "Delaware", abbr: "DE", capital: "Dover" },
  { name: "Florida", abbr: "FL", capital: "Tallahassee" },
  { name: "Georgia", abbr: "GA", capital: "Atlanta" },
  { name: "Hawaii", abbr: "HI", capital: "Honolulu" },
  { name: "Idaho", abbr: "ID", capital: "Boise" },
  { name: "Illinois", abbr: "IL", capital: "Springfield" },
  { name: "Indiana", abbr: "IN", capital: "Indianapolis" },
  { name: "Iowa", abbr: "IA", capital: "Des Moines" },
  { name: "Kansas", abbr: "KS", capital: "Topeka" },
  { name: "Kentucky", abbr: "KY", capital: "Frankfort" },
  { name: "Louisiana", abbr: "LA", capital: "Baton Rouge" },
  { name: "Maine", abbr: "ME", capital: "Augusta" },
  { name: "Maryland", abbr: "MD", capital: "Annapolis" },
  { name: "Massachusetts", abbr: "MA", capital: "Boston" },
  { name: "Michigan", abbr: "MI", capital: "Lansing" },
  { name: "Minnesota", abbr: "MN", capital: "Saint Paul" },
  { name: "Mississippi", abbr: "MS", capital: "Jackson" },
  { name: "Missouri", abbr: "MO", capital: "Jefferson City" },
  { name: "Montana", abbr: "MT", capital: "Helena" },
  { name: "Nebraska", abbr: "NE", capital: "Lincoln" },
  { name: "Nevada", abbr: "NV", capital: "Carson City" },
  { name: "New Hampshire", abbr: "NH", capital: "Concord" },
  { name: "New Jersey", abbr: "NJ", capital: "Trenton" },
  { name: "New Mexico", abbr: "NM", capital: "Santa Fe" },
  { name: "New York", abbr: "NY", capital: "Albany" },
  { name: "North Carolina", abbr: "NC", capital: "Raleigh" },
  { name: "North Dakota", abbr: "ND", capital: "Bismarck" },
  { name: "Ohio", abbr: "OH", capital: "Columbus" },
  { name: "Oklahoma", abbr: "OK", capital: "Oklahoma City" },
  { name: "Oregon", abbr: "OR", capital: "Salem" },
  { name: "Pennsylvania", abbr: "PA", capital: "Harrisburg" },
  { name: "Rhode Island", abbr: "RI", capital: "Providence" },
  { name: "South Carolina", abbr: "SC", capital: "Columbia" },
  { name: "South Dakota", abbr: "SD", capital: "Pierre" },
  { name: "Tennessee", abbr: "TN", capital: "Nashville" },
  { name: "Texas", abbr: "TX", capital: "Austin" },
  { name: "Utah", abbr: "UT", capital: "Salt Lake City" },
  { name: "Vermont", abbr: "VT", capital: "Montpelier" },
  { name: "Virginia", abbr: "VA", capital: "Richmond" },
  { name: "Washington", abbr: "WA", capital: "Olympia" },
  { name: "West Virginia", abbr: "WV", capital: "Charleston" },
  { name: "Wisconsin", abbr: "WI", capital: "Madison" },
  { name: "Wyoming", abbr: "WY", capital: "Cheyenne" },
  { name: "District of Columbia", abbr: "DC", capital: "Washington" },
  { name: "Puerto Rico", abbr: "PR", capital: "San Juan" },
  { name: "Guam", abbr: "GU", capital: "Hagatna" },
  { name: "U.S. Virgin Islands", abbr: "VI", capital: "Charlotte Amalie" },
  { name: "American Samoa", abbr: "AS", capital: "Pago Pago" },
  { name: "Northern Mariana Islands", abbr: "MP", capital: "Saipan" },
];

// Major US Cities for Government Contracting
export const majorCities = [
  "Washington DC", "Arlington VA", "Alexandria VA", "Bethesda MD", "Rockville MD",
  "Baltimore MD", "Annapolis MD", "Silver Spring MD", "Fairfax VA", "McLean VA",
  "Reston VA", "Tysons VA", "Falls Church VA", "Herndon VA", "Chantilly VA",
  "New York NY", "Los Angeles CA", "Chicago IL", "Houston TX", "Phoenix AZ",
  "Philadelphia PA", "San Antonio TX", "San Diego CA", "Dallas TX", "San Jose CA",
  "Austin TX", "Jacksonville FL", "Fort Worth TX", "Columbus OH", "Charlotte NC",
  "San Francisco CA", "Indianapolis IN", "Seattle WA", "Denver CO", "Boston MA",
  "El Paso TX", "Nashville TN", "Detroit MI", "Oklahoma City OK", "Portland OR",
  "Las Vegas NV", "Memphis TN", "Louisville KY", "Milwaukee WI", "Albuquerque NM",
  "Tucson AZ", "Fresno CA", "Sacramento CA", "Kansas City MO", "Atlanta GA",
  "Miami FL", "Tampa FL", "Orlando FL", "Colorado Springs CO", "Omaha NE",
  "Raleigh NC", "Virginia Beach VA", "Oakland CA", "Minneapolis MN", "Tulsa OK",
  "Cleveland OH", "Wichita KS", "New Orleans LA", "Bakersfield CA", "Aurora CO",
  "Anaheim CA", "Honolulu HI", "Santa Ana CA", "Riverside CA", "Corpus Christi TX",
  "Lexington KY", "Pittsburgh PA", "St. Louis MO", "Anchorage AK", "Stockton CA",
  "Cincinnati OH", "St. Paul MN", "Newark NJ", "Greensboro NC", "Buffalo NY",
  "Plano TX", "Lincoln NE", "Henderson NV", "Fort Wayne IN", "Jersey City NJ",
  "Chandler AZ", "Norfolk VA", "Hampton VA", "Newport News VA", "Chesapeake VA",
];

// Federal Executive Departments (Cabinet-Level)
export const federalDepartments = [
  { name: "Department of Defense", abbr: "DOD", keywords: ["military", "defense", "armed forces", "Pentagon"] },
  { name: "Department of Homeland Security", abbr: "DHS", keywords: ["border", "security", "TSA", "FEMA", "ICE", "CBP"] },
  { name: "Department of Veterans Affairs", abbr: "VA", keywords: ["veterans", "military healthcare", "benefits"] },
  { name: "Department of State", abbr: "DOS", keywords: ["foreign affairs", "diplomacy", "embassy", "consulate"] },
  { name: "Department of Justice", abbr: "DOJ", keywords: ["law enforcement", "FBI", "DEA", "ATF", "legal"] },
  { name: "Department of Health and Human Services", abbr: "HHS", keywords: ["healthcare", "Medicare", "Medicaid", "CDC", "NIH", "FDA"] },
  { name: "Department of the Treasury", abbr: "Treasury", keywords: ["finance", "IRS", "fiscal", "currency"] },
  { name: "Department of Agriculture", abbr: "USDA", keywords: ["farming", "food safety", "rural development", "forestry"] },
  { name: "Department of Commerce", abbr: "DOC", keywords: ["trade", "business", "census", "NOAA", "economic"] },
  { name: "Department of Labor", abbr: "DOL", keywords: ["employment", "workers", "OSHA", "wages"] },
  { name: "Department of Education", abbr: "ED", keywords: ["schools", "education", "student aid", "FAFSA"] },
  { name: "Department of Energy", abbr: "DOE", keywords: ["nuclear", "energy", "power", "renewable"] },
  { name: "Department of Housing and Urban Development", abbr: "HUD", keywords: ["housing", "urban", "development"] },
  { name: "Department of Transportation", abbr: "DOT", keywords: ["highways", "aviation", "FAA", "transit", "infrastructure"] },
  { name: "Department of the Interior", abbr: "DOI", keywords: ["national parks", "public lands", "natural resources", "BLM"] },
];

// Major Federal Agencies (Independent)
export const federalAgencies = [
  { name: "General Services Administration", abbr: "GSA", keywords: ["procurement", "federal property", "contracts"] },
  { name: "National Aeronautics and Space Administration", abbr: "NASA", keywords: ["space", "aerospace", "research"] },
  { name: "Environmental Protection Agency", abbr: "EPA", keywords: ["environment", "pollution", "climate"] },
  { name: "Small Business Administration", abbr: "SBA", keywords: ["small business", "loans", "set-asides"] },
  { name: "Social Security Administration", abbr: "SSA", keywords: ["benefits", "retirement", "disability"] },
  { name: "Federal Emergency Management Agency", abbr: "FEMA", keywords: ["disaster", "emergency", "relief"] },
  { name: "Central Intelligence Agency", abbr: "CIA", keywords: ["intelligence", "national security"] },
  { name: "National Security Agency", abbr: "NSA", keywords: ["signals intelligence", "cybersecurity", "encryption"] },
  { name: "Federal Bureau of Investigation", abbr: "FBI", keywords: ["law enforcement", "investigation", "counterterrorism"] },
  { name: "U.S. Agency for International Development", abbr: "USAID", keywords: ["international", "development", "aid"] },
  { name: "Office of Personnel Management", abbr: "OPM", keywords: ["federal workforce", "HR", "benefits"] },
  { name: "U.S. Postal Service", abbr: "USPS", keywords: ["mail", "postal", "delivery"] },
  { name: "Securities and Exchange Commission", abbr: "SEC", keywords: ["financial", "securities", "markets"] },
  { name: "Federal Communications Commission", abbr: "FCC", keywords: ["telecom", "broadcasting", "communications"] },
  { name: "Federal Trade Commission", abbr: "FTC", keywords: ["consumer protection", "antitrust", "commerce"] },
  { name: "Nuclear Regulatory Commission", abbr: "NRC", keywords: ["nuclear", "radiation", "reactors"] },
  { name: "National Archives and Records Administration", abbr: "NARA", keywords: ["records", "archives", "documents"] },
  { name: "Office of Management and Budget", abbr: "OMB", keywords: ["budget", "management", "policy"] },
  { name: "Government Accountability Office", abbr: "GAO", keywords: ["audit", "oversight", "accountability"] },
  { name: "Defense Logistics Agency", abbr: "DLA", keywords: ["logistics", "supply chain", "military"] },
  { name: "Defense Information Systems Agency", abbr: "DISA", keywords: ["IT", "communications", "cyber"] },
  { name: "Defense Contract Management Agency", abbr: "DCMA", keywords: ["contracts", "acquisition", "oversight"] },
  { name: "U.S. Marshals Service", abbr: "USMS", keywords: ["law enforcement", "fugitives", "courts"] },
  { name: "Bureau of Alcohol, Tobacco, Firearms and Explosives", abbr: "ATF", keywords: ["firearms", "explosives", "enforcement"] },
  { name: "Drug Enforcement Administration", abbr: "DEA", keywords: ["drugs", "narcotics", "enforcement"] },
  { name: "U.S. Customs and Border Protection", abbr: "CBP", keywords: ["border", "customs", "ports"] },
  { name: "U.S. Immigration and Customs Enforcement", abbr: "ICE", keywords: ["immigration", "enforcement", "investigations"] },
  { name: "Transportation Security Administration", abbr: "TSA", keywords: ["aviation", "security", "screening"] },
  { name: "U.S. Coast Guard", abbr: "USCG", keywords: ["maritime", "search and rescue", "homeland security"] },
  { name: "U.S. Secret Service", abbr: "USSS", keywords: ["protection", "financial crimes", "investigations"] },
];

// Military Branches and Commands
export const militaryBranches = [
  { name: "U.S. Army", keywords: ["ground forces", "soldiers", "infantry", "armor"] },
  { name: "U.S. Navy", keywords: ["naval", "ships", "submarines", "sailors"] },
  { name: "U.S. Air Force", keywords: ["aviation", "airmen", "aircraft", "space"] },
  { name: "U.S. Marine Corps", keywords: ["marines", "amphibious", "expeditionary"] },
  { name: "U.S. Space Force", keywords: ["space", "satellites", "orbital"] },
  { name: "U.S. Coast Guard", keywords: ["maritime", "coastal", "rescue"] },
  { name: "U.S. Army Corps of Engineers", abbr: "USACE", keywords: ["engineering", "construction", "infrastructure"] },
  { name: "U.S. Special Operations Command", abbr: "SOCOM", keywords: ["special forces", "operations"] },
  { name: "U.S. Cyber Command", abbr: "USCYBERCOM", keywords: ["cyber", "information warfare"] },
  { name: "U.S. Indo-Pacific Command", abbr: "USINDOPACOM", keywords: ["Pacific", "Asia", "regional"] },
  { name: "U.S. European Command", abbr: "USEUCOM", keywords: ["Europe", "NATO", "regional"] },
  { name: "U.S. Central Command", abbr: "USCENTCOM", keywords: ["Middle East", "Central Asia", "regional"] },
  { name: "U.S. Africa Command", abbr: "USAFRICOM", keywords: ["Africa", "regional"] },
  { name: "U.S. Southern Command", abbr: "USSOUTHCOM", keywords: ["Latin America", "Caribbean", "regional"] },
  { name: "U.S. Northern Command", abbr: "USNORTHCOM", keywords: ["North America", "homeland defense"] },
  { name: "U.S. Transportation Command", abbr: "USTRANSCOM", keywords: ["logistics", "mobility", "airlift"] },
  { name: "U.S. Strategic Command", abbr: "USSTRATCOM", keywords: ["nuclear", "strategic", "deterrence"] },
];

// Major US Military Installations
export const majorMilitaryBases = [
  { name: "Fort Liberty", location: "North Carolina", branch: "Army", formerly: "Fort Bragg" },
  { name: "Fort Cavazos", location: "Texas", branch: "Army", formerly: "Fort Hood" },
  { name: "Joint Base Lewis-McChord", location: "Washington", branch: "Army/Air Force" },
  { name: "Fort Campbell", location: "Kentucky/Tennessee", branch: "Army" },
  { name: "Fort Stewart", location: "Georgia", branch: "Army" },
  { name: "Fort Moore", location: "Georgia", branch: "Army", formerly: "Fort Benning" },
  { name: "Fort Carson", location: "Colorado", branch: "Army" },
  { name: "Fort Bliss", location: "Texas", branch: "Army" },
  { name: "Joint Base San Antonio", location: "Texas", branch: "Army/Air Force" },
  { name: "Fort Drum", location: "New York", branch: "Army" },
  { name: "Naval Station Norfolk", location: "Virginia", branch: "Navy" },
  { name: "Naval Base San Diego", location: "California", branch: "Navy" },
  { name: "Naval Air Station Jacksonville", location: "Florida", branch: "Navy" },
  { name: "Naval Station Mayport", location: "Florida", branch: "Navy" },
  { name: "Naval Submarine Base Kings Bay", location: "Georgia", branch: "Navy" },
  { name: "Naval Base Kitsap", location: "Washington", branch: "Navy" },
  { name: "Naval Air Station Pensacola", location: "Florida", branch: "Navy" },
  { name: "Naval Station Great Lakes", location: "Illinois", branch: "Navy" },
  { name: "Wright-Patterson Air Force Base", location: "Ohio", branch: "Air Force" },
  { name: "Eglin Air Force Base", location: "Florida", branch: "Air Force" },
  { name: "Hill Air Force Base", location: "Utah", branch: "Air Force" },
  { name: "Nellis Air Force Base", location: "Nevada", branch: "Air Force" },
  { name: "Tinker Air Force Base", location: "Oklahoma", branch: "Air Force" },
  { name: "Robins Air Force Base", location: "Georgia", branch: "Air Force" },
  { name: "Edwards Air Force Base", location: "California", branch: "Air Force" },
  { name: "Langley Air Force Base", location: "Virginia", branch: "Air Force" },
  { name: "Camp Pendleton", location: "California", branch: "Marine Corps" },
  { name: "Camp Lejeune", location: "North Carolina", branch: "Marine Corps" },
  { name: "Marine Corps Base Quantico", location: "Virginia", branch: "Marine Corps" },
  { name: "MCAS Miramar", location: "California", branch: "Marine Corps" },
  { name: "The Pentagon", location: "Virginia", branch: "DOD Headquarters" },
];

// Overseas Military Bases
export const overseasBases = [
  { name: "Camp Humphreys", country: "South Korea", region: "Asia-Pacific" },
  { name: "Osan Air Base", country: "South Korea", region: "Asia-Pacific" },
  { name: "Camp Casey", country: "South Korea", region: "Asia-Pacific" },
  { name: "Yokota Air Base", country: "Japan", region: "Asia-Pacific" },
  { name: "Yokosuka Naval Base", country: "Japan", region: "Asia-Pacific" },
  { name: "Kadena Air Base", country: "Japan (Okinawa)", region: "Asia-Pacific" },
  { name: "Camp Foster", country: "Japan (Okinawa)", region: "Asia-Pacific" },
  { name: "Misawa Air Base", country: "Japan", region: "Asia-Pacific" },
  { name: "Andersen Air Force Base", country: "Guam", region: "Asia-Pacific" },
  { name: "Naval Base Guam", country: "Guam", region: "Asia-Pacific" },
  { name: "Clark Air Base", country: "Philippines", region: "Asia-Pacific" },
  { name: "Subic Bay", country: "Philippines", region: "Asia-Pacific" },
  { name: "Pine Gap", country: "Australia", region: "Asia-Pacific" },
  { name: "Ramstein Air Base", country: "Germany", region: "Europe" },
  { name: "Spangdahlem Air Base", country: "Germany", region: "Europe" },
  { name: "Grafenwoehr Training Area", country: "Germany", region: "Europe" },
  { name: "Stuttgart", country: "Germany", region: "Europe" },
  { name: "Landstuhl Regional Medical Center", country: "Germany", region: "Europe" },
  { name: "RAF Lakenheath", country: "United Kingdom", region: "Europe" },
  { name: "RAF Mildenhall", country: "United Kingdom", region: "Europe" },
  { name: "RAF Croughton", country: "United Kingdom", region: "Europe" },
  { name: "Aviano Air Base", country: "Italy", region: "Europe" },
  { name: "Naval Station Rota", country: "Spain", region: "Europe" },
  { name: "Naval Support Activity Naples", country: "Italy", region: "Europe" },
  { name: "Naval Support Activity Bahrain", country: "Bahrain", region: "Middle East" },
  { name: "Al-Udeid Air Base", country: "Qatar", region: "Middle East" },
  { name: "Camp Arifjan", country: "Kuwait", region: "Middle East" },
  { name: "Ali Al Salem Air Base", country: "Kuwait", region: "Middle East" },
  { name: "Al Dhafra Air Base", country: "United Arab Emirates", region: "Middle East" },
  { name: "Incirlik Air Base", country: "Turkey", region: "Middle East/Europe" },
  { name: "Camp Lemonnier", country: "Djibouti", region: "Africa" },
  { name: "Naval Station Guantanamo Bay", country: "Cuba", region: "Caribbean" },
  { name: "Thule Air Base", country: "Greenland", region: "Arctic" },
  { name: "Keflavik Air Base", country: "Iceland", region: "Europe/Arctic" },
  { name: "Diego Garcia", country: "British Indian Ocean Territory", region: "Indian Ocean" },
];

// Major US Embassies and Consulates
export const embassiesAndConsulates = [
  { city: "London", country: "United Kingdom", type: "Embassy" },
  { city: "Paris", country: "France", type: "Embassy" },
  { city: "Berlin", country: "Germany", type: "Embassy" },
  { city: "Rome", country: "Italy", type: "Embassy" },
  { city: "Madrid", country: "Spain", type: "Embassy" },
  { city: "Tokyo", country: "Japan", type: "Embassy" },
  { city: "Seoul", country: "South Korea", type: "Embassy" },
  { city: "Beijing", country: "China", type: "Embassy" },
  { city: "New Delhi", country: "India", type: "Embassy" },
  { city: "Canberra", country: "Australia", type: "Embassy" },
  { city: "Ottawa", country: "Canada", type: "Embassy" },
  { city: "Mexico City", country: "Mexico", type: "Embassy" },
  { city: "Brasilia", country: "Brazil", type: "Embassy" },
  { city: "Buenos Aires", country: "Argentina", type: "Embassy" },
  { city: "Bogota", country: "Colombia", type: "Embassy" },
  { city: "Cairo", country: "Egypt", type: "Embassy" },
  { city: "Tel Aviv", country: "Israel", type: "Embassy" },
  { city: "Jerusalem", country: "Israel", type: "Embassy" },
  { city: "Riyadh", country: "Saudi Arabia", type: "Embassy" },
  { city: "Abu Dhabi", country: "United Arab Emirates", type: "Embassy" },
  { city: "Doha", country: "Qatar", type: "Embassy" },
  { city: "Kuwait City", country: "Kuwait", type: "Embassy" },
  { city: "Amman", country: "Jordan", type: "Embassy" },
  { city: "Baghdad", country: "Iraq", type: "Embassy" },
  { city: "Kabul", country: "Afghanistan", type: "Embassy" },
  { city: "Ankara", country: "Turkey", type: "Embassy" },
  { city: "Kyiv", country: "Ukraine", type: "Embassy" },
  { city: "Warsaw", country: "Poland", type: "Embassy" },
  { city: "Prague", country: "Czech Republic", type: "Embassy" },
  { city: "Vienna", country: "Austria", type: "Embassy" },
  { city: "Brussels", country: "Belgium", type: "Embassy" },
  { city: "The Hague", country: "Netherlands", type: "Embassy" },
  { city: "Stockholm", country: "Sweden", type: "Embassy" },
  { city: "Oslo", country: "Norway", type: "Embassy" },
  { city: "Copenhagen", country: "Denmark", type: "Embassy" },
  { city: "Helsinki", country: "Finland", type: "Embassy" },
  { city: "Bern", country: "Switzerland", type: "Embassy" },
  { city: "Singapore", country: "Singapore", type: "Embassy" },
  { city: "Bangkok", country: "Thailand", type: "Embassy" },
  { city: "Manila", country: "Philippines", type: "Embassy" },
  { city: "Jakarta", country: "Indonesia", type: "Embassy" },
  { city: "Hanoi", country: "Vietnam", type: "Embassy" },
  { city: "Nairobi", country: "Kenya", type: "Embassy" },
  { city: "Pretoria", country: "South Africa", type: "Embassy" },
  { city: "Lagos", country: "Nigeria", type: "Consulate" },
  { city: "Accra", country: "Ghana", type: "Embassy" },
  { city: "Addis Ababa", country: "Ethiopia", type: "Embassy" },
  { city: "Dakar", country: "Senegal", type: "Embassy" },
];

// Service Area Keywords
export const serviceKeywords = [
  "government contractor", "federal contractor", "defense contractor",
  "government services", "federal services", "military services",
  "advisory services", "consulting services", "program management",
  "security services", "protective services", "facility security",
  "staffing services", "personnel services", "recruiting services",
  "cleaning services", "janitorial services", "facility maintenance",
  "IT services", "technology services", "IT supply",
  "logistics services", "supply chain", "procurement",
  "real estate services", "property management", "facility management",
  "fleet management", "vehicle logistics", "transportation",
  "global operations", "international operations", "overseas operations",
];

// Contract Vehicle Keywords
export const contractKeywords = [
  "GSA Schedule", "GSA Contract", "Multiple Award Schedule",
  "IDIQ", "Indefinite Delivery Indefinite Quantity",
  "BPA", "Blanket Purchase Agreement",
  "Task Order", "Delivery Order",
  "Set-Aside", "Small Business Set-Aside",
  "8(a) contractor", "SDVOSB contractor", "VOSB contractor",
  "WOSB contractor", "HUBZone contractor", "MBE contractor",
  "SAM registered", "SAM.gov", "federal registration",
  "CAGE code", "UEI number", "NAICS codes",
  "prime contractor", "subcontractor", "teaming partner",
];

// Generate all geo-targeted keywords
export function generateGeoKeywords(): string[] {
  const keywords: string[] = [];
  
  usStates.forEach(state => {
    keywords.push(`government contractor ${state.name}`);
    keywords.push(`federal contractor ${state.name}`);
    keywords.push(`government services ${state.abbr}`);
  });
  
  majorCities.forEach(city => {
    keywords.push(`government contractor ${city}`);
    keywords.push(`federal services ${city}`);
  });
  
  return keywords;
}

// Generate agency-targeted keywords
export function generateAgencyKeywords(): string[] {
  const keywords: string[] = [];
  
  federalDepartments.forEach(dept => {
    keywords.push(`${dept.abbr} contractor`);
    keywords.push(`${dept.name} services`);
    dept.keywords.forEach(kw => keywords.push(`${kw} contractor`));
  });
  
  federalAgencies.forEach(agency => {
    keywords.push(`${agency.abbr} contractor`);
    keywords.push(`${agency.name} services`);
  });
  
  return keywords;
}

// Generate overseas keywords
export function generateOverseasKeywords(): string[] {
  const keywords: string[] = [];
  
  overseasBases.forEach(base => {
    keywords.push(`${base.name} contractor`);
    keywords.push(`government services ${base.country}`);
  });
  
  embassiesAndConsulates.forEach(embassy => {
    keywords.push(`embassy contractor ${embassy.country}`);
    keywords.push(`${embassy.city} embassy services`);
  });
  
  return keywords;
}

// Complete keyword list for meta tags
export function getAllSEOKeywords(): string {
  return [
    ...serviceKeywords,
    ...contractKeywords,
    "veteran-owned business",
    "veteran-led company",
    "service-disabled veteran",
    "USA government contractor",
    "United States federal services",
    "Washington DC contractor",
    "Pentagon contractor",
    ...usStates.slice(0, 10).map(s => `${s.name} government contractor`),
    ...federalDepartments.slice(0, 8).map(d => `${d.abbr} contractor`),
  ].join(", ");
}
