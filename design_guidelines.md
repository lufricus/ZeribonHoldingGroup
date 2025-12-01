# Zeribon Holding Group - Design Guidelines

## Design Approach
**Federal Contractor Visual Identity**: Clean, sophisticated, government-grade aesthetic that conveys trust, military discipline, and corporate elegance. Draw inspiration from federal contractor websites and government portals—minimal, professional, with emphasis on credibility and operational excellence.

## Color System
**PRIMARY COLORS**
- Federal Blue: `#0A1A3E` - Primary backgrounds, headers, hero sections
- Deep Navy: `#051124` - Accent backgrounds, cards, footer

**SECONDARY COLORS**
- Steel Gray: `#6F7A86` - Secondary text, borders, subtle elements
- Matte Black: `#0D0D0D` - High-contrast text where needed

**ACCENTS**
- Pure White: `#FFFFFF` - Text on dark backgrounds, cards, primary content areas
- Silver Edge: `#DDE3EB` - Borders, dividers, subtle backgrounds
- Mission Gold: `#C1A45A` - Very subtle accents only, sparingly used for emphasis (buttons, highlights)

## Typography
**Headings**: Montserrat (Bold 700 / Semi-Bold 600)
- H1: Large, commanding presence
- H2: Section headers
- H3: Subsection headers

**Body Text**: Inter (Regular 400 / Medium 500)
- Body: Regular weight
- Emphasis: Medium weight
- Clean, government-grade clarity

**Hierarchy**: Large typography with clear hierarchy. Hero headlines should be bold and impactful.

## Layout & Spacing
**Spacing System**: Use Tailwind units `4, 6, 8, 12, 16, 20, 24` for consistent, disciplined spacing
- Section padding: `py-16` to `py-24` (desktop), `py-12` (mobile)
- Component spacing: `gap-8` for grids, `space-y-6` for vertical stacks
- Generous whitespace—government-grade means breathing room

**Container Strategy**:
- Max-width: `max-w-7xl` for main content containers
- Full-width hero sections with contained inner content
- Disciplined alignment and consistent margins

## Component Design

### Navigation
- Clean horizontal menu: HOME | ABOUT | CAPABILITIES | GOVERNMENT | PARTNERS | CONTACT
- Dropdown menus for ABOUT, CAPABILITIES, GOVERNMENT, PARTNERS sub-pages
- Sticky header with Federal Blue background
- Mobile: Hamburger menu, slide-in navigation

### Hero Sections
- Large, full-width hero with Federal Blue background
- Commanding headline typography (Montserrat Bold)
- Dual CTAs: "Request Capabilities" + "Become a Partner"
- Buttons with blurred backgrounds when on images
- Hero image: Professional military/corporate imagery or abstract geometric patterns

### Credibility Strip
- Horizontal badge layout displaying: Veteran-Led | SAM Registered | UEI | CAGE | NAICS | U.S. & Global Operations
- Subtle background (Silver Edge or light Deep Navy)
- Icons from Heroicons for each credential

### Capability Cards Grid
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Each card: Icon + Title + Short description
- Card background: White with subtle Silver Edge border
- Hover: Subtle elevation or border color change

### Forms
- Clean, government-grade form styling
- Labels above inputs
- Silver Edge borders, Federal Blue focus states
- Clear submit buttons with Mission Gold accents

### Buttons
- Primary: Mission Gold background with white text
- Secondary: White background with Federal Blue border and text
- All buttons: Rounded corners, medium padding
- Implement own hover states (no custom hover needed)

## Page-Specific Requirements

### Homepage
- Full-width hero with image background
- Credibility strip immediately below hero
- 10 capability cards in responsive grid
- "Who We Serve" section with 6 client categories
- Founder highlight with photo and bio
- Final CTA section

### Capabilities Page
- Individual sections for each of 10 capabilities
- Consistent layout for each capability area
- Supporting imagery for each section

### Government Page
- Official, formal layout
- Clear presentation of UEI/CAGE/NAICS
- Downloadable capability statement (PDF link)
- Contract vehicles information

### Contact Page
- Split layout: Form on left, contact info on right (desktop)
- Full contact details: email, phone, location
- RFP/RFQ submission capability

## Images
**Hero Section**: Full-width professional image conveying military precision and corporate professionalism—consider military personnel in professional setting, strategic operations imagery, or clean architectural/corporate scenes. Image should have slight dark overlay for text readability.

**Founder Section**: Professional headshot of Arghoon Dar in business attire

**Capability Sections**: Supporting imagery for each capability area showing relevant operations (security personnel, cleaning operations, IT equipment, real estate properties, etc.)

**General Imagery Style**: Professional, high-quality, authentic—avoid stock photo clichés. Images should reinforce credibility, operational excellence, and government-grade professionalism.

## Final Notes
- Every element serves trust-building and credibility
- SEO optimization throughout with strategic keyword placement
- Mobile-responsive across all breakpoints
- Accessible, WCAG compliant
- Clean, minimal, disciplined—federal contractor excellence