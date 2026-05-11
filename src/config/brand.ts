/**
 * BRAND CONFIG — Edit this file to rebrand the entire site.
 *
 * To change the name: edit `name` and `tagline`.
 * To change the logo: replace `/public/logo.svg` OR change `logoSrc` to a new path.
 * To update contact info: edit `email` and `phone`.
 *
 * Every page, header, footer, and meta tag reads from here.
 */
export const brand = {
  name: "ReputationLift",
  shortName: "ReputationLift",
  tagline: "Reputation Protection",
  // Path inside /public, or any image URL. Replace /public/logo.svg to swap visuals.
  logoSrc: "/logo.svg",
  email: "hello@yourdomain.com",
  phone: "+1-347-480-8033",
  // Used in meta descriptions
  description:
    "Specialists in legally removing fake, defamatory, and policy-violating reviews from Google, Facebook, Trustpilot, Reddit, and Tripadvisor.",
} as const;
