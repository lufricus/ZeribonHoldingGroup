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
4. **Government** (`/government`) - Contracting info, UEI/CAGE/NAICS, capability statement, contract vehicles
5. **Partners** (`/partners`) - Teaming, subcontractor registration, vendor onboarding
6. **Contact** (`/contact`) - Contact form, direct contact info, RFP/RFQ submission

## API Endpoints
- `POST /api/contact` - Submit contact form inquiries
- `POST /api/partners` - Submit partner/vendor registrations

## Data Models
- **ContactSubmission**: Contact form submissions (name, email, phone, organization, subject, message)
- **PartnerRegistration**: Partner/vendor registrations (company info, capabilities, certifications)

## Development
- Run `npm run dev` to start the development server
- Frontend runs on port 5000
- Hot reloading enabled for both frontend and backend

## Key Features
- Fully responsive design (mobile, tablet, desktop)
- SEO-optimized with meta tags for government contracting keywords
- Professional navigation with dropdown menus
- Contact form with validation
- Credibility strip displaying certifications
- 10 capability area showcases
- Partner/vendor registration pathways
