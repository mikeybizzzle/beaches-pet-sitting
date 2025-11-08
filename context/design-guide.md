# Design System & Style Guide - Beaches Pet Sitting

## Brand Analysis (Based on Fetch Pet Care)

### Visual Identity Elements Observed
- **Primary Color:** Bright blue (#4A90E2 range)
- **Secondary Color:** Warm orange/yellow (#FFA500 range)
- **Neutral Palette:** Soft cream/beige backgrounds
- **Typography:** Clean, modern sans-serif
- **Photography Style:** Warm, natural lighting with happy pets and owners
- **Layout:** Card-based design with rounded corners
- **Visual Hierarchy:** Clear sections with alternating backgrounds

## Color Palette

### Primary Colors
```css
--color-primary-50: #EBF4FF;
--color-primary-100: #D1E7FF;
--color-primary-200: #A3CFFF;
--color-primary-300: #70B3FF;
--color-primary-400: #4A90E2;
--color-primary-500: #3B7DD8;
--color-primary-600: #2E64B5;
--color-primary-700: #234C92;
--color-primary-800: #1A3A70;
--color-primary-900: #0F2447;
```

### Secondary Colors (Accent)
```css
--color-secondary-50: #FFF9E6;
--color-secondary-100: #FFF2CC;
--color-secondary-200: #FFE599;
--color-secondary-300: #FFD966;
--color-secondary-400: #FFCC33;
--color-secondary-500: #FFA500;
--color-secondary-600: #FF9900;
--color-secondary-700: #CC7A00;
--color-secondary-800: #995C00;
--color-secondary-900: #663D00;
```

### Neutral Colors
```css
--color-neutral-50: #FAFAF9;
--color-neutral-100: #F5F5F4;
--color-neutral-200: #E7E5E4;
--color-neutral-300: #D6D3D1;
--color-neutral-400: #A8A29E;
--color-neutral-500: #78716C;
--color-neutral-600: #57534E;
--color-neutral-700: #44403C;
--color-neutral-800: #292524;
--color-neutral-900: #1C1917;
```

### Background Colors
```css
--color-background-white: #FFFFFF;
--color-background-cream: #FFF8F3;
--color-background-light-blue: #F0F7FF;
--color-background-light-orange: #FFF5E6;
```

## Typography

### Font Stack
```css
--font-heading: 'Inter', system-ui, -apple-system, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-script: 'Dancing Script', cursive; /* For decorative text only */
```

### Type Scale
```css
--text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);
--text-base: clamp(1rem, 0.9rem + 0.4vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem);
--text-3xl: clamp(1.875rem, 1.6rem + 1vw, 2.25rem);
--text-4xl: clamp(2.25rem, 1.9rem + 1.2vw, 3rem);
--text-5xl: clamp(3rem, 2.5rem + 1.5vw, 3.75rem);
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Line Heights
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 1.75;
```

## Spacing System

### Base Spacing Scale
```css
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```

### Section Spacing
```css
--section-spacing-mobile: var(--space-12);
--section-spacing-tablet: var(--space-16);
--section-spacing-desktop: var(--space-20);
```

## Component Styles

### Cards
```css
.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
}
```

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--color-primary-500);
  color: white;
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px 0 rgba(74, 144, 226, 0.3);
}

.btn-primary:hover {
  background: var(--color-primary-600);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px 0 rgba(74, 144, 226, 0.4);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: var(--color-secondary-500);
  color: white;
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}
```

#### Outline Button
```css
.btn-outline {
  background: transparent;
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-500);
  padding: 10px 30px;
  border-radius: 50px;
  font-weight: 600;
}
```

### Form Elements
```css
.input {
  padding: 12px 16px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 8px;
  font-size: var(--text-base);
  transition: border-color 0.2s;
}

.input:focus {
  border-color: var(--color-primary-400);
  outline: none;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}
```

## Layout Patterns

### Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 32px;
  }
}
```

### Grid System
```css
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

## Animation Guidelines

### Transitions
```css
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 350ms ease;
--transition-slower: 500ms ease;
```

### Framer Motion Presets
```javascript
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

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.4 }
};
```

## Visual Elements

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

## Iconography
- **Style:** Rounded, friendly icons
- **Weight:** Medium to bold
- **Size:** Consistent sizing (24px, 32px, 48px)
- **Library:** Lucide React or Heroicons
- **Color:** Primary blue or contextual colors

## Image Guidelines

### Photography Style
- **Mood:** Warm, friendly, professional
- **Subjects:** Happy pets with owners, comfortable home settings
- **Lighting:** Natural, bright, inviting
- **Color Treatment:** Slightly warm tone, high key
- **Composition:** Clean backgrounds, focus on subjects

### Image Treatments
- Rounded corners (16px)
- Subtle shadow for depth
- Aspect ratios: 16:9 for hero, 1:1 for cards, 4:3 for features

## Content Voice & Tone

### Voice Attributes
- **Professional:** Veterinary expertise
- **Warm:** Caring and compassionate
- **Trustworthy:** Reliable and experienced
- **Approachable:** Friendly, not intimidating
- **Clear:** Simple, direct communication

### Tone Guidelines
- **Headlines:** Confident and reassuring
- **Body Copy:** Informative and friendly
- **CTAs:** Action-oriented and encouraging
- **Testimonials:** Authentic and grateful

## UI Patterns

### Hero Section
- Full-width background with overlay
- Large, bold headline
- Supporting subtext
- Primary CTA button
- Trust indicators below

### Service Cards
- Icon at top
- Title in semibold
- Description in regular
- Hover state with elevation
- Consistent padding

### Pricing Cards
- Featured card with different color
- Price prominently displayed
- List of features
- CTA button at bottom
- "Most Popular" badge if applicable

### Trust Signals
- Years of experience badge
- Professional certification icons
- Star ratings
- Customer testimonial cards
- "Fully Bonded" badge

## Responsive Behavior

### Mobile First Approach
1. Design for 320px minimum
2. Scale up to tablet at 768px
3. Optimize for desktop at 1024px+

### Breakpoint-Specific Adjustments
- **Mobile:** Stack all columns, larger touch targets
- **Tablet:** 2-column layouts, moderate spacing
- **Desktop:** Multi-column layouts, generous spacing

## Accessibility Design
- **Focus States:** Visible outline with offset
- **Color Contrast:** WCAG AA compliant
- **Touch Targets:** Minimum 44x44px
- **Text Size:** Minimum 14px, scalable
- **Interactive Elements:** Clear affordances

## Component Library Usage (Shadcn)
- Use default Shadcn components as base
- Override with brand colors
- Maintain consistent radius and shadows
- Apply custom animations with Framer Motion
