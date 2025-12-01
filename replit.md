# Zeribon Holding Group Website

## Overview
A sophisticated government-grade website for Zeribon Holding Group, a veteran-led U.S. government contracting company. The design is trustworthy, elegant, minimal, and highly professional, targeting federal contractors and government agencies.

## Tech Stack
- **Frontend**: React + TypeScript with Vite
- **Styling**: Tailwind CSS with custom government-grade color palette
- **Routing**: Wouter
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack React Query
- **Backend**: Express.js
- **Components**: Shadcn UI components
- **PDF Generation**: jsPDF for capability statement downloads

## Color Palette
- **Federal Blue**: #0A1A3E (Primary backgrounds, headers)
- **Deep Navy**: #051124 (Accent backgrounds, footer)
- **Steel Gray**: #6F7A86 (Secondary text)
- **Silver Edge**: #DDE3EB (Borders, subtle backgrounds)
- **Mission Gold**: #C1A45A (Accent, CTAs)
- **Pure White**: #FFFFFF (Text on dark backgrounds)

## Typography
- **Headings**: Montserrat (Bold/Semi-Bold)
- **Body Text**: Inter (Regular/Medium)

## Pages
1. **Home** (`/`) - Hero section, credibility strip, capabilities grid, founder highlight, CTAs
2. **About** (`/about`) - Company overview, leadership, certifications
3. **Capabilities** (`/capabilities`) - All 10 capability areas with detailed descriptions
4. **Government** (`/government`) - Contracting info, UEI/CAGE/NAICS, capability statement with PDF download, contract vehicles
5. **Partners** (`/partners`) - Teaming, subcontractor registration, vendor onboarding, partner registration form
6. **Contact** (`/contact`) - Contact form, direct contact info, RFP/RFQ submission
7. **Service Areas** (`/service-areas`) - Interactive global operations map, comprehensive geo-location coverage display
8. **Admin** (`/admin`) - Analytics dashboard, contact/partner submission management

## API Endpoints
- `POST /api/contact` - Submit contact form inquiries
- `GET /api/contact` - Get all contact submissions (admin)
- `POST /api/partners` - Submit partner/vendor registrations
- `GET /api/partners` - Get all partner registrations (admin)
- `POST /api/analytics` - Track page views and user interactions
- `GET /api/analytics/summary` - Get analytics summary for admin dashboard

## Data Models
- **ContactSubmission**: Contact form submissions (name, email, phone, organization, subject, message)
- **PartnerRegistration**: Partner/vendor registrations (company info, capabilities, certifications)
- **AnalyticsEvent**: Page view and interaction tracking (sessionId, type, page, referrer, metadata)

## Recent Updates
- **PDF Capability Statement**: Downloadable PDF on Government page using jsPDF (client/src/lib/pdf-generator.ts)
- **Interactive Global Map**: SVG-based world map on Service Areas page showing HQ and global operations (client/src/components/GlobalOperationsMap.tsx)
- **Analytics Tracking**: Client-side analytics with page view tracking (client/src/lib/analytics.ts)
- **Admin Dashboard**: View analytics, contact submissions, and partner registrations at /admin

## Notes
- Email notifications for form submissions require external email service integration (Resend/SendGrid) - not currently configured

## SEO Implementation

### Comprehensive Geo-Targeting
The website is optimized for SEO with comprehensive geo-location targeting:

**Geographic Coverage:**
- All 50 US states + DC + US territories
- 80+ major metropolitan areas
- Washington DC metro corridor focus

**Federal Government Agencies:**
- 15 Cabinet-level Executive Departments (DOD, DHS, VA, DOJ, etc.)
- 30+ Independent Federal Agencies (GSA, NASA, EPA, FEMA, etc.)
- All military branches and major commands

**Military & Overseas:**
- 30+ major domestic military installations
- 35+ overseas military bases (Asia-Pacific, Europe, Middle East, Africa)
- 48+ US embassies and consulates worldwide

### SEO Components
- **PageMeta** (`client/src/components/seo/PageMeta.tsx`): Per-page metadata with dynamic title, description, keywords, canonical URLs, Open Graph, and Twitter Cards
- **StructuredData** (`client/src/components/seo/StructuredData.tsx`): Schema.org JSON-LD structured data (Organization, ProfessionalService, GovernmentService, LocalBusiness, Breadcrumbs)
- **SEO Data Library** (`client/src/lib/seo-data.ts`): Comprehensive data arrays for states, cities, agencies, bases, and embassies

### Meta Tags (index.html)
- Comprehensive keywords covering all states, agencies, and services
- Geo-location meta tags (geo.region, geo.position, ICBM)
- Open Graph and Twitter Card tags
- Robots directives for search engine indexing
- Language and locale declarations

## Development
- Run `npm run dev` to start the development server
- Frontend runs on port 5000
- Hot reloading enabled for both frontend and backend

## Key Features
- Fully responsive design (mobile, tablet, desktop)
- Comprehensive SEO optimization for government contracting
- Geo-targeting for all 50 states and global locations
- Professional navigation with dropdown menus
- Contact form with validation
- Partner registration form with validation
- Credibility strip displaying certifications
- 10 capability area showcases
- Service Areas page with complete geographic coverage
- Schema.org structured data for rich search results

## User Preferences
- Professional, government-grade aesthetic
- Federal contractor color palette
- Montserrat/Inter typography
- Clean, minimal design
- No emojis in UI
