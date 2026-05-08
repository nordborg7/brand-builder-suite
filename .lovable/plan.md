## Goal

Recreate the structure, layout, and visual style of repudefense.com as a TanStack Start app, with the brand name and logo centralized in a single config file so you can swap them in seconds.

## Brand customization (the key feature)

A single file `src/config/brand.ts` will hold everything brand-related:

```ts
export const brand = {
  name: "RepuDefense",
  tagline: "Reputation Protection",
  logoSrc: "/logo.svg",        // swap by replacing this file
  email: "removals@yourdomain.com",
  phone: "+33 631 602 072",
};
```

Every component (header, footer, hero, meta tags, testimonials) reads from this file. To rebrand:
1. Edit the `name`, `tagline`, `email`, `phone` strings.
2. Replace `public/logo.svg` (or change `logoSrc` to a new uploaded image).

That's it — no other code changes needed.

## Pages (separate routes for SEO)

- `/` — Home (hero, stats, Google removal feature, packages, monthly plans, all services grid, why-us, testimonials, CTA)
- `/services/google` — Google review removal detail
- `/services/facebook`, `/services/trustpilot`, `/services/reddit`, `/services/tripadvisor` — platform pages (shared template)
- `/why-us` — Differentiators & approach
- `/case-studies` — Client success stories
- `/about` — Company info
- `/contact` — Free consultation form

## Design direction

Dark navy background with gold accents — matches the "trust + premium" feel of the original:
- Background: deep navy (`oklch(0.18 0.04 260)`)
- Accent: warm gold (`oklch(0.78 0.13 80)`)
- Foreground: near-white
- Typography: bold sans display + clean sans body (e.g. Sora + Inter)
- Generous spacing, subtle shield/badge iconography, gradient stat cards

All colors defined as semantic tokens in `src/styles.css` (oklch).

## Sections on the homepage

1. **Top bar** — phone, email, "Trusted by 2,000+ businesses"
2. **Header** — logo + name, nav (Services dropdown, Why Us, Guarantee, Case Studies, About, Contact), gold "Free Consultation" CTA
3. **Hero** — headline "Protect Your Reputation. Remove Damaging Reviews." with gold accent on second sentence, subcopy, feature pills (Legally Compliant / Confidential / 100% Success / Pay After Removal), two CTAs, and a 2x2 stats card (25,000+ removed, 100% success, 5 days avg, 8+ years) + testimonial quote
4. **Google removal feature** — two-column with bullet list and stat tiles
5. **Packages** — Standard vs Express ("Price on Request")
6. **Monthly Protection Plans** — 5-tier pricing grid (Essential €199 → Ultimate €3,999)
7. **Transparent Terms** — 4 numbered cards (validity, eligibility, usage, flexibility)
8. **All Services grid** — 5 platform cards linking to `/services/*`
9. **Why Choose Us** — 4 differentiators with image
10. **Testimonials** — 3 client quotes
11. **Final CTA + Footer**

All copy is rewritten in our own words covering the same offering — not copied verbatim from the source. Stock imagery from Unsplash. No real client names — replace with generic placeholders you can edit.

## Tech notes

- TanStack Start file-based routes under `src/routes/`
- Shared `<SiteHeader />` and `<SiteFooter />` rendered in `__root.tsx`
- `framer-motion` for hero/stat fade-ins
- Per-route `head()` with brand-aware title/description (reads `brand.name`)
- shadcn `button`, `card`, `badge` for primitives

## Out of scope (ask if you want them)

- Working contact form backend (will be a styled form that shows a success toast; wire to Lovable Cloud later if needed)
- Real payment / subscription flow for the monthly plans
- CMS for editing copy from a UI
