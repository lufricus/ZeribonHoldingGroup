import jsPDF from "jspdf";

const FEDERAL_BLUE = "#0A1A3E";
const MISSION_GOLD = "#C1A45A";
const STEEL_GRAY = "#6F7A86";
const WHITE = "#FFFFFF";

interface CapabilityStatementData {
  companyName: string;
  tagline: string;
  uei: string;
  cage: string;
  samStatus: string;
  naicsCodes: { code: string; description: string }[];
  coreCompetencies: string[];
  capabilities: string[];
  differentiators: string[];
  businessClassification: string[];
  contactEmail: string;
  contactPhone: string;
  website: string;
}

const defaultData: CapabilityStatementData = {
  companyName: "ZERIBON HOLDING GROUP",
  tagline: "Veteran-Led Government Contractor",
  uei: "Registered",
  cage: "Certified",
  samStatus: "Active",
  naicsCodes: [
    { code: "541611", description: "Administrative Management Consulting" },
    { code: "561210", description: "Facilities Support Services" },
    { code: "561612", description: "Security Guards & Patrol Services" },
    { code: "561720", description: "Janitorial Services" },
    { code: "541512", description: "Computer Systems Design Services" },
    { code: "423430", description: "Computer Equipment" },
    { code: "531312", description: "Nonresidential Property Managers" },
    { code: "484110", description: "General Freight Trucking" },
    { code: "561320", description: "Temporary Help Services" },
    { code: "541990", description: "Professional Services" },
  ],
  coreCompetencies: [
    "Advisory & Program Support",
    "Security Services",
    "Staffing & Recruiting",
    "Cleaning Services",
    "IT & Supply Solutions",
    "Real Estate & Property Management",
    "Logistics & Procurement",
    "Fleet & Vehicle Logistics",
    "Global Operations & Deployment",
  ],
  capabilities: [
    "Risk Management & Financial Oversight",
    "Cleared Personnel Placement",
    "Protective Services & Access Control",
    "Government Building Janitorial",
    "Computer & Server Procurement",
    "Base Housing Operations",
    "Supply Chain Management",
    "Tactical Transport Solutions",
    "International Field Teams",
    "24/7 Global Response Capability",
  ],
  differentiators: [
    "Veteran-Owned & Led Business",
    "U.S. Army Special Forces Leadership",
    "Wall Street & Cornell MBA Experience",
    "Cleared Personnel Available",
    "U.S. & Global Operations Capability",
    "SAM Registered & Compliant",
  ],
  businessClassification: [
    "Veteran-Owned Business (VOB)",
    "Small Business",
  ],
  contactEmail: "contact@zeribongroup.com",
  contactPhone: "(202) 555-0100",
  website: "www.zeribonholding.com",
};

export async function generateCapabilityStatementPDF(data: CapabilityStatementData = defaultData): Promise<void> {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "letter",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  let y = 0;

  // Header with company branding
  doc.setFillColor(FEDERAL_BLUE);
  doc.rect(0, 0, pageWidth, 35, "F");

  // Logo - Add Zeribon logo image
  try {
    const logoUrl = "/zeribon_transparent_(1)_1765320298690.png";
    const response = await fetch(logoUrl);
    const blob = await response.blob();
    
    // Create canvas with proper dimensions for logo
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 480;
    const ctx = canvas.getContext("2d");
    
    if (ctx) {
      // Fill with header background color
      ctx.fillStyle = FEDERAL_BLUE;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create image and wait for it to load
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => {
          // Draw the image on the canvas
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve();
        };
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = URL.createObjectURL(blob);
      });
      
      // Convert canvas to JPEG (which jsPDF handles better than PNG)
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const logoWidth = 12;
      const logoHeight = 14.4; // maintain aspect ratio
      const logoX = pageWidth / 2 - logoWidth / 2;
      const logoY = 4;
      
      doc.addImage(imgData, "JPEG", logoX, logoY, logoWidth, logoHeight);
    }
  } catch (error) {
    console.error("Failed to load logo:", error);
  }

  // Tagline below logo (company name removed, only tagline)
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(MISSION_GOLD);
  doc.text(data.tagline, pageWidth / 2, 28, { align: "center" });

  // Title bar
  doc.setFillColor(MISSION_GOLD);
  doc.rect(0, 35, pageWidth, 8, "F");
  doc.setTextColor(FEDERAL_BLUE);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("CAPABILITY STATEMENT", pageWidth / 2, 41, { align: "center" });

  y = 50;

  // Two-column layout
  const colWidth = (contentWidth - 5) / 2;
  const leftCol = margin;
  const rightCol = margin + colWidth + 5;

  // SBA Approved Badge
  doc.setFillColor(MISSION_GOLD);
  doc.rect(margin, y, 40, 6, "F");
  doc.setTextColor(FEDERAL_BLUE);
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.text("SBA APPROVED BUSINESS", margin + 2, y + 4.5);
  
  y += 10;

  // Left Column - Core Competencies
  doc.setFillColor(FEDERAL_BLUE);
  doc.rect(leftCol - 2, y - 2, colWidth + 4, 8, "F");
  doc.setTextColor(WHITE);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("CORE COMPETENCIES", leftCol, y + 3);

  y += 12;
  doc.setTextColor(FEDERAL_BLUE);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");

  data.coreCompetencies.forEach((comp, i) => {
    doc.setFillColor(MISSION_GOLD);
    doc.circle(leftCol + 2, y + 1.5, 1, "F");
    doc.text(comp, leftCol + 6, y + 2.5);
    y += 6;
  });

  // Left Column - Capabilities
  y += 4;
  doc.setFillColor(FEDERAL_BLUE);
  doc.rect(leftCol - 2, y - 2, colWidth + 4, 8, "F");
  doc.setTextColor(WHITE);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("SERVICES & CAPABILITIES", leftCol, y + 3);

  y += 12;
  doc.setTextColor(FEDERAL_BLUE);
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");

  data.capabilities.forEach((cap) => {
    doc.setFillColor(STEEL_GRAY);
    doc.circle(leftCol + 2, y + 1.5, 0.8, "F");
    doc.text(cap, leftCol + 6, y + 2.5);
    y += 5;
  });

  // Right Column - Reset y position
  let yRight = 50;

  // Federal Registration
  doc.setFillColor(FEDERAL_BLUE);
  doc.rect(rightCol - 2, yRight - 2, colWidth + 4, 8, "F");
  doc.setTextColor(WHITE);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("FEDERAL REGISTRATION", rightCol, yRight + 3);

  yRight += 12;
  doc.setTextColor(FEDERAL_BLUE);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");

  const regs = [
    { label: "UEI Number:", value: data.uei },
    { label: "CAGE Code:", value: data.cage },
    { label: "SAM Status:", value: data.samStatus },
  ];

  regs.forEach((reg) => {
    doc.setFont("helvetica", "bold");
    doc.text(reg.label, rightCol, yRight + 2);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(MISSION_GOLD);
    doc.text(reg.value, rightCol + 28, yRight + 2);
    doc.setTextColor(FEDERAL_BLUE);
    yRight += 7;
  });

  // NAICS Codes
  yRight += 4;
  doc.setFillColor(FEDERAL_BLUE);
  doc.rect(rightCol - 2, yRight - 2, colWidth + 4, 8, "F");
  doc.setTextColor(WHITE);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("NAICS CODES", rightCol, yRight + 3);

  yRight += 12;
  doc.setTextColor(FEDERAL_BLUE);
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");

  data.naicsCodes.forEach((naics) => {
    doc.setFont("helvetica", "bold");
    doc.text(naics.code, rightCol, yRight + 2);
    doc.setFont("helvetica", "normal");
    doc.text(" - " + naics.description, rightCol + 12, yRight + 2);
    yRight += 5;
  });

  // Differentiators
  yRight += 4;
  doc.setFillColor(FEDERAL_BLUE);
  doc.rect(rightCol - 2, yRight - 2, colWidth + 4, 8, "F");
  doc.setTextColor(WHITE);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("DIFFERENTIATORS", rightCol, yRight + 3);

  yRight += 12;
  doc.setTextColor(FEDERAL_BLUE);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");

  data.differentiators.forEach((diff) => {
    doc.setFillColor(MISSION_GOLD);
    doc.rect(rightCol, yRight, 2, 2, "F");
    doc.text(diff, rightCol + 5, yRight + 1.5);
    yRight += 6;
  });

  // Business Classification
  yRight += 4;
  doc.setFillColor(FEDERAL_BLUE);
  doc.rect(rightCol - 2, yRight - 2, colWidth + 4, 8, "F");
  doc.setTextColor(WHITE);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("BUSINESS CLASSIFICATION", rightCol, yRight + 3);

  yRight += 12;
  doc.setTextColor(FEDERAL_BLUE);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");

  data.businessClassification.forEach((cls) => {
    doc.setFillColor(MISSION_GOLD);
    doc.circle(rightCol + 2, yRight + 1.5, 1, "F");
    doc.text(cls, rightCol + 6, yRight + 2.5);
    yRight += 6;
  });

  // Footer Contact Section
  const footerY = pageHeight - 25;

  doc.setFillColor(FEDERAL_BLUE);
  doc.rect(0, footerY, pageWidth, 25, "F");

  // Gold accent line
  doc.setFillColor(MISSION_GOLD);
  doc.rect(0, footerY, pageWidth, 2, "F");

  // Contact information
  doc.setTextColor(WHITE);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("CONTACT", pageWidth / 2, footerY + 8, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(MISSION_GOLD);
  
  const contactLine = `${data.contactEmail}  |  ${data.contactPhone}  |  ${data.website}`;
  doc.text(contactLine, pageWidth / 2, footerY + 15, { align: "center" });

  // Veteran-Owned badge
  doc.setTextColor(WHITE);
  doc.setFontSize(7);
  doc.text("Veteran-Owned Business | SAM Registered | Ready to Serve", pageWidth / 2, footerY + 21, { align: "center" });

  // Save the PDF
  doc.save("Zeribon-Capability-Statement.pdf");
}

export type { CapabilityStatementData };
