# Beaches Pet Sitting Website - Development Guide

## Project Overview

This project creates a professional single-page website for Beaches Pet Sitting, a veterinary-trained pet sitting service. The website's primary goal is to generate bookings for initial consultations by building trust through professional credentials and making the booking process seamless.

### Business Context
- **Service:** In-Home Overnight Pet Sitting
- **Target Market:** Local pet owners who prefer in-home care while traveling
- **Key Differentiator:** Degreed Veterinary Assistant with 11+ years experience
- **Primary Goal:** Generate qualified leads for free initial interviews
- **Conversion Target:** 8-12% from website visit to booking
- **Service Area:** Beaches area and surrounding neighborhoods

### Value Proposition
**Professional veterinary care in the comfort of your pet's home**
- 11+ years professional experience
- Veterinary Assistant degree
- All small animals including reptiles
- Fully bondable and reliable
- Personalized, compassionate care

### Pricing Structure
- **Full Day (24 hours):** $125
- **Half Day (12 hours):** $75
- **Initial Interview:** FREE (always)

## Technology Stack

### Core Framework
- **Next.js 16+** (App Router) - Modern React framework
- **TypeScript** (Strict mode) - Type safety throughout
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - High-quality component library
- **Framer Motion** - Smooth animations and transitions

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Consistent code formatting
- **Git** - Version control

### Deployment
- **Vercel** - Hosting platform
- **Calendar Widget** - Calendly/Cal.com or custom integration

## Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout with metadata and SEO
│   ├── page.tsx                # Main single-page application
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── fonts/                  # Local font files (Inter)
│   └── api/                    # API routes (contact form, etc.)
│       └── contact/
│           └── route.ts
├── components/
│   ├── ui/                     # Shadcn components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx           # Hero with CTA and trust signals
│   │   ├── Services.tsx       # Service offerings grid
│   │   ├── About.tsx          # Professional bio and credentials
│   │   ├── WhyInHome.tsx      # Benefits of in-home care
│   │   ├── Pricing.tsx        # Pricing cards with features
│   │   ├── Process.tsx        # How it works steps
│   │   ├── Testimonials.tsx   # Client testimonials
│   │   ├── FAQ.tsx            # Frequently asked questions
│   │   ├── Booking.tsx        # Calendar integration + CTA
│   │   └── Footer.tsx         # Contact info and links
│   └── shared/                 # Reusable components
│       ├── Container.tsx
│       ├── SectionHeading.tsx
│       ├── TrustBadge.tsx
│       └── AnimatedCard.tsx
├── lib/
│   ├── utils.ts               # Utility functions (cn, etc.)
│   ├── constants.ts           # App constants
│   └── animations.ts          # Framer Motion presets
├── public/
│   └── images/                # Optimized images
│       ├── hero-bg.webp
│       ├── about-photo.webp
│       └── service-icons/
├── context/                    # Comprehensive project documentation
│   ├── PROJECT-CONTEXT-SUMMARY.md
│   ├── business-requirements.md
│   ├── technical-specifications.md
│   ├── design-principles.md
│   ├── design-guide.md
│   ├── content-strategy.md
│   ├── implementation-checklist.md
│   └── master-orchestration-prompt.md
└── .claude/                    # Claude Code configuration
    ├── agents/
    │   ├── design-review-agent.md
    │   └── pragmatic-code-review-subagent.md
    └── commands/
        ├── design-review.md
        └── pragmatic-code-review.md
```

## Context Files - Your Source of Truth

The `/context` directory contains comprehensive documentation that should guide ALL development decisions:

### 📋 PROJECT-CONTEXT-SUMMARY.md
**Purpose:** Complete project overview and strategic direction
**Use When:** Starting new work, understanding project goals, making architectural decisions
**Key Content:**
- Project overview and objectives
- Context document descriptions
- Design decisions from Fetch Pet Care analysis
- Critical success factors
- Implementation strategy
- Expected outcomes

### 💼 business-requirements.md
**Purpose:** Business goals, target market, and value proposition
**Use When:** Writing copy, making UX decisions, prioritizing features
**Key Content:**
- Company overview and experience
- Unique value proposition
- Service offerings and pricing
- Business objectives and metrics
- Key messages and positioning
- Customer journey mapping
- Call-to-action strategy

### 🔧 technical-specifications.md
**Purpose:** Complete technical requirements and architecture
**Use When:** Setting up project, choosing libraries, implementing features
**Key Content:**
- Full technology stack specifications
- Component architecture details
- Performance requirements (95+ Lighthouse)
- SEO and accessibility standards
- Responsive design breakpoints
- Security considerations
- Build and deployment configuration

### 🎨 design-principles.md
**Purpose:** Design system checklist and best practices
**Use When:** Creating UI components, making design decisions
**Key Content:**
- Core design philosophy
- Design system foundation (colors, typography, spacing)
- Layout and visual hierarchy guidelines
- Interaction design and animations
- Module-specific design tactics
- CSS architecture recommendations

### 🖌️ design-guide.md
**Purpose:** Visual identity, color palette, and component styles
**Use When:** Styling components, implementing brand guidelines
**Key Content:**
- Complete color palette with CSS variables
- Typography scale and font stacks
- Spacing system and layout patterns
- Component styles (buttons, cards, forms)
- Animation guidelines with Framer Motion presets
- Iconography and image guidelines
- Responsive behavior patterns

### ✍️ content-strategy.md
**Purpose:** All copy, messaging, and SEO content
**Use When:** Writing any user-facing text, implementing content
**Key Content:**
- Section-by-section content architecture
- Complete copy for all sections
- Headlines, subheadlines, body text
- SEO keywords and meta tags
- Schema markup for local business
- Voice and tone guidelines
- Call-to-action variations

### ✅ implementation-checklist.md
**Purpose:** Validation criteria and quality assurance
**Use When:** Validating completed work, ensuring nothing is missed
**Key Content:**
- Component development checklist
- Technical implementation requirements
- Performance optimization tasks
- SEO and accessibility validation
- Cross-browser testing criteria
- Quality assurance standards

### 🚀 master-orchestration-prompt.md
**Purpose:** Autonomous development framework
**Use When:** Starting development, planning implementation phases
**Key Content:**
- Five-phase execution framework
- Design specifications from Fetch Pet Care
- Validation checkpoints
- Autonomous decision authority
- Deliverable expectations

## Development Standards

### Code Style Guidelines

#### TypeScript Standards
```typescript
// ✅ DO: Use strict typing
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ✅ DO: Use functional components with proper typing
export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600">{description}</p>
      </CardContent>
    </Card>
  );
}

// ❌ DON'T: Use any or loose typing
// ❌ DON'T: Use class components
```

#### Component Organization
```
components/
├── ui/              # Primitive components (Shadcn)
├── sections/        # Page sections (business logic)
└── shared/          # Reusable composed components

Rules:
- One component per file
- PascalCase for component names
- Co-locate related types/interfaces
- Export components as named exports
```

#### Styling Guidelines
```typescript
// ✅ DO: Use Tailwind utility classes
<button className="rounded-full bg-primary-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary-600 hover:shadow-xl">
  Book Free Interview
</button>

// ✅ DO: Use cn() utility for conditional classes
import { cn } from "@/lib/utils";

<div className={cn(
  "rounded-lg border p-6",
  featured && "border-primary-500 bg-primary-50",
  disabled && "opacity-50 cursor-not-allowed"
)}>

// ❌ DON'T: Create custom CSS files for components
// ❌ DON'T: Use inline styles
```

### Performance Requirements

#### Lighthouse Scores (Minimum)
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

#### Core Web Vitals
- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3s
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Input Delay (FID):** < 100ms

#### Optimization Strategies
```typescript
// ✅ Image optimization with Next.js Image
import Image from 'next/image';

<Image
  src="/images/hero-bg.webp"
  alt="Happy pet receiving care"
  width={1920}
  height={1080}
  priority // For above-fold images
  placeholder="blur"
  blurDataURL="..."
/>

// ✅ Lazy loading for below-fold sections
import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div>Loading...</div>,
});

// ✅ Bundle size management
- Initial bundle: < 200KB
- Use code splitting
- Dynamic imports for heavy components
```

### Accessibility Standards (WCAG 2.1 AA)

#### Essential Requirements
```typescript
// ✅ Semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#services">Services</a></li>
  </ul>
</nav>

// ✅ ARIA labels for interactive elements
<button aria-label="Book your free interview">
  Book Free Interview
</button>

// ✅ Keyboard navigation support
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  onClick={handleClick}
>

// ✅ Color contrast ratios
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum
- Use contrast checker tools

// ✅ Focus indicators
.focus-visible:focus {
  @apply outline-2 outline-offset-2 outline-primary-500;
}
```

### Responsive Design

#### Breakpoint Strategy
```css
/* Mobile First Approach */
/* Base styles: 320px - 639px */
.container {
  padding: 1rem;
}

/* Tablet: 640px - 1023px */
@media (min-width: 640px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

#### Touch Target Guidelines
- Minimum size: 44x44px
- Spacing between targets: 8px
- Test on actual devices

## Design System Implementation

### Color Palette (Tailwind Configuration)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF4FF',
          100: '#D1E7FF',
          // ... (see design-guide.md for full palette)
          500: '#4A90E2',
          900: '#0F2447',
        },
        secondary: {
          500: '#FFA500',
          // ... (see design-guide.md)
        },
        neutral: {
          50: '#FAFAF9',
          800: '#292524',
          900: '#1C1917',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.15)',
      }
    }
  }
}
```

### Animation Patterns

```typescript
// lib/animations.ts
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Usage in components
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

<motion.div {...fadeIn}>
  <ServiceCard />
</motion.div>
```

## Visual Development

### Design Principles
- Comprehensive design checklist in `/context/design-principles.md`
- Brand style guide in `/context/design-guide.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Quick Visual Check
IMMEDIATELY after implementing any front-end change:
1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp__playwright__browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md` and `/context/design-guide.md`
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp__playwright__browser_console_messages`

This verification ensures changes meet design standards and user requirements.

### Comprehensive Design Review
Invoke the `@agent-design-review` subagent for thorough design validation when:
- Completing significant UI/UX features
- Before finalizing PRs with visual changes
- Needing comprehensive accessibility and responsiveness testing

## Implementation Strategy

### Phase 1: Project Setup & Foundation
**Goal:** Initialize project with all dependencies and configuration

**Tasks:**
1. Create Next.js 16+ project with TypeScript
2. Configure Tailwind CSS with custom design tokens
3. Install and setup Shadcn/ui components
4. Add Framer Motion for animations
5. Setup project structure (components, lib, public)
6. Configure Inter font (local or Google Fonts)
7. Create design token CSS variables
8. Setup ESLint and Prettier

**Validation:**
- `npm run dev` starts without errors
- Tailwind classes work correctly
- TypeScript compiles without errors
- Design tokens accessible via Tailwind

### Phase 2: Component Development
**Goal:** Build all page sections systematically

**Order of Implementation:**
1. **Layout & Metadata** (app/layout.tsx)
   - SEO metadata
   - Schema.org markup
   - Font loading
   - Global styles

2. **Hero Section**
   - Full-width background with overlay
   - Main headline and subheadline
   - Primary CTA button
   - Trust indicators (4 badges)
   - Smooth scroll to booking

3. **Services Section**
   - Grid layout (4 cards on desktop, 1-2 on mobile)
   - Icon + Title + Description pattern
   - Hover animations
   - Responsive grid

4. **About Section**
   - Professional bio with credentials
   - Photo placeholder or image
   - Credentials checklist
   - Trust-building copy

5. **Why In-Home Section**
   - Benefits grid (2-3 columns)
   - Clear value propositions
   - Icon + text pattern

6. **Pricing Section**
   - Three pricing cards
   - Featured card styling (Free Interview)
   - Clear pricing display
   - Feature lists
   - CTA buttons

7. **Process Section**
   - 3-step process
   - Numbered steps with icons
   - Clear, simple explanations

8. **Testimonials Section**
   - Testimonial card component
   - Star ratings
   - Client names and pets
   - Placeholder for future reviews

9. **FAQ Section**
   - Accordion component (Shadcn)
   - 5-6 common questions
   - Clean, readable format

10. **Booking/CTA Section**
    - Large CTA for booking
    - Calendar embed placeholder
    - Alternative contact methods
    - Trust signals repeated

11. **Footer**
    - Contact information
    - Quick links navigation
    - Service area
    - Trust badges
    - Copyright

**Validation After Each Component:**
- Component renders without errors
- Responsive at all breakpoints
- Accessibility compliance
- Design matches specifications

### Phase 3: Content Integration
**Goal:** Add all copy, CTAs, and trust signals

**Reference:** `/context/content-strategy.md` for ALL content

**Tasks:**
1. Replace all placeholder text with final copy
2. Implement headline hierarchy (H1, H2, H3)
3. Add all trust signals and credentials
4. Integrate CTAs throughout
5. Add alt text to all images
6. Implement SEO meta tags
7. Add Schema.org LocalBusiness markup
8. Ensure consistent tone and messaging

**Validation:**
- All content is grammatically correct
- CTAs are clear and compelling
- Trust signals prominent throughout
- SEO metadata complete
- Schema markup valid

### Phase 4: Styling & Animations
**Goal:** Apply design system and polish interactions

**Tasks:**
1. Apply Fetch-inspired color palette
2. Implement hover states on all interactive elements
3. Add Framer Motion scroll animations
4. Create smooth page transitions
5. Polish spacing and alignment
6. Add shadows and depth
7. Implement alternating section backgrounds
8. Test dark mode compatibility (optional)

**Validation:**
- Design matches Fetch inspiration
- Animations smooth (60fps)
- No layout shift
- Consistent spacing
- Professional appearance

### Phase 5: Optimization & Quality Assurance
**Goal:** Ensure production-ready quality

**Tasks:**
1. Optimize all images (WebP format)
2. Implement lazy loading for below-fold content
3. Run Lighthouse audit (target 95+ all metrics)
4. Test accessibility with screen reader
5. Validate responsive behavior on real devices
6. Test all interactive elements
7. Check browser compatibility
8. Run production build and fix errors
9. Test calendar integration
10. Validate Schema markup

**Validation Checklist:**
- [ ] Lighthouse Performance: 95+
- [ ] Lighthouse Accessibility: 100
- [ ] Lighthouse Best Practices: 100
- [ ] Lighthouse SEO: 100
- [ ] Zero console errors or warnings
- [ ] All links work correctly
- [ ] Forms submit successfully
- [ ] Mobile experience excellent
- [ ] Calendar embed functional
- [ ] Cross-browser compatible

## Key Implementation Requirements

### Must-Have Features

1. **Trust Signals Throughout**
   - Veterinary credentials in hero
   - "11+ Years Experience" badge
   - "Fully Bondable" badge
   - Professional certifications
   - Repeat trust signals in footer

2. **Clear Call-to-Actions**
   - Primary CTA: "Book Your Free Interview"
   - Multiple CTA placements (hero, pricing, booking)
   - Click-to-call phone number on mobile
   - Email link with mailto:
   - Calendar booking prominent

3. **Professional Presentation**
   - Clean, modern design
   - High-quality imagery (or placeholders)
   - Consistent branding
   - Professional typography
   - Polished animations

4. **Mobile-First Excellence**
   - Perfect on 320px screens
   - Touch-friendly buttons
   - Readable text sizes
   - Fast loading on mobile networks
   - Easy thumb navigation

5. **SEO & Discoverability**
   - Complete meta tags
   - Schema.org markup
   - Semantic HTML
   - Fast page speed
   - Mobile-friendly
   - Local business optimization

### Content Guidelines

#### Tone of Voice
- **Professional:** Emphasize veterinary credentials
- **Warm:** Show genuine care for animals
- **Trustworthy:** Highlight reliability and bondability
- **Clear:** Simple, direct communication
- **Reassuring:** Focus on peace of mind

#### Key Messages to Emphasize
1. Veterinary Assistant degree (unique differentiator)
2. 11+ years professional experience
3. In-home care (pet comfort)
4. All small animals including reptiles
5. Free initial interview (no risk)
6. Fully bondable (trust and security)
7. Personalized, compassionate care

#### CTAs to Use
- **Primary:** "Book Your Free Interview"
- **Secondary:** "Schedule Consultation", "Get Started Today"
- **Tertiary:** "Learn More", "See Services", "Check Availability"

## Validation Checkpoints

### After Each Component
- ✅ TypeScript compiles without errors
- ✅ No console errors or warnings
- ✅ Component renders correctly
- ✅ Responsive at all breakpoints
- ✅ Accessibility standards met
- ✅ Design matches specifications

### Before Final Delivery
- ✅ All sections implemented
- ✅ All content integrated
- ✅ All images optimized
- ✅ Lighthouse score 95+
- ✅ Accessibility audit passed
- ✅ Cross-browser tested
- ✅ Mobile tested on real devices
- ✅ Production build successful
- ✅ No TypeScript errors
- ✅ No console warnings
- ✅ Calendar integration working
- ✅ All links functional
- ✅ Forms working (if applicable)
- ✅ SEO metadata complete
- ✅ Schema markup validated

## Expected Outcomes

### For the Business
- **Professional Web Presence:** High-quality site that builds trust
- **Lead Generation:** Convert 8-12% of visitors to interview bookings
- **Clear Value Communication:** Veterinary credentials prominently displayed
- **Competitive Differentiation:** Stand out with professional credentials
- **Scalable Solution:** Foundation for future growth

### For Users
- **Immediate Understanding:** Service clear within 5 seconds
- **Trust Establishment:** Credentials visible above fold
- **Easy Navigation:** Smooth scroll, clear sections
- **Quick Decisions:** All information needed to book
- **Mobile Excellence:** Perfect experience on phones
- **Peace of Mind:** Confidence in professional care

### Technical Quality
- **High Performance:** 95+ Lighthouse scores
- **Accessibility:** WCAG 2.1 AA compliant
- **SEO Optimized:** Local search visibility
- **Responsive Design:** Perfect on all devices
- **Production Ready:** Deployable to Vercel immediately

## Autonomous Decision Authority

You have full authority to:
- Make design decisions within brand guidelines
- Choose specific component implementations
- Optimize code structure and organization
- Select animations and transitions
- Implement performance best practices
- Handle edge cases and error states
- Create placeholder content where needed
- Make UX improvements
- Refactor for better maintainability

## Development Best Practices

### Git Workflow
```bash
# Feature branch naming
feature/hero-section
feature/pricing-cards
fix/responsive-nav

# Commit message format
feat: add hero section with trust indicators
fix: pricing card responsive layout
style: update button hover states
docs: add component documentation
```

### Code Review Checklist
- [ ] TypeScript types are specific (no `any`)
- [ ] Components are properly typed
- [ ] Tailwind classes used correctly
- [ ] Accessibility attributes present
- [ ] Responsive design implemented
- [ ] Animations smooth and purposeful
- [ ] No console errors
- [ ] Code is readable and maintainable

### Testing Strategy
1. **Manual Testing:**
   - Test in Chrome, Firefox, Safari, Edge
   - Test on iPhone, Android, tablet
   - Test with keyboard navigation
   - Test with screen reader

2. **Automated Testing:**
   - Run Lighthouse audits
   - Validate HTML
   - Check Schema markup
   - Test bundle size

3. **Performance Testing:**
   - Test on slow 3G
   - Check image loading
   - Verify lazy loading
   - Monitor bundle size

## Resources & References

### Documentation Links
- Next.js: https://nextjs.org/docs
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Shadcn/ui: https://ui.shadcn.com
- Framer Motion: https://www.framer.com/motion

### Design Inspiration
- Fetch Pet Care (reference design)
- Color palette: Blue (#4A90E2) + Orange (#FFA500)
- Clean, modern, card-based layout
- Professional yet approachable aesthetic

### SEO Resources
- Schema.org LocalBusiness: https://schema.org/LocalBusiness
- Google Search Console documentation
- Lighthouse performance optimization

## Next Steps

1. **Read All Context Files:** Thoroughly review all `/context` documents
2. **Initialize Project:** Set up Next.js with all dependencies
3. **Follow Implementation Phases:** Work through phases 1-5 systematically
4. **Validate Continuously:** Check quality at each checkpoint
5. **Deploy to Vercel:** Push to production when ready

Remember: This is a lead generation tool. Every design decision should support the primary goal of converting visitors into interview bookings while building trust through professional credentials and compassionate care messaging.
