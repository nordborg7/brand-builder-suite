import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck, Lock, CheckCircle2, DollarSign, ArrowRight, Star,
  Award, Clock, TrendingUp, Scale, EyeOff, Zap,
} from "lucide-react";
import { brand } from "@/config/brand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${brand.name} — Remove Damaging Online Reviews` },
      { name: "description", content: brand.description },
    ],
  }),
  component: HomePage,
});

const heroStats = [
  { icon: CheckCircle2, value: "25,000+", label: "Reviews Removed" },
  { icon: TrendingUp, value: "100%", label: "Success Rate" },
  { icon: Clock, value: "5 days", label: "Avg. Removal Time" },
  { icon: Award, value: "8+", label: "Years Experience" },
];

const featurePills = [
  { icon: Scale, label: "Legally Compliant" },
  { icon: EyeOff, label: "Confidential" },
  { icon: CheckCircle2, label: "100% Success Rate" },
  { icon: DollarSign, label: "Pay After Removal" },
];

const platforms = [
  { slug: "google", letter: "G", name: "Google Reviews", desc: "Remove fake, defamatory, and policy-violating Google reviews — the highest success rate in the industry.", featured: true },
  { slug: "facebook", letter: "f", name: "Facebook Reviews", desc: "Dispute and remove harmful reviews and recommendations from your Facebook Business Page." },
  { slug: "trustpilot", letter: "T", name: "Trustpilot Reviews", desc: "Challenge and remove fraudulent or policy-violating Trustpilot reviews professionally." },
  { slug: "reddit", letter: "R", name: "Reddit Reviews", desc: "Strategically address damaging Reddit posts and threads affecting your brand." },
  { slug: "tripadvisor", letter: "TA", name: "Tripadvisor Reviews", desc: "Remove fake and competitive reviews harming your hospitality or tourism business." },
];

const plans = [
  { name: "Essential Protect", desc: "Entry plan for small businesses", price: "€199", removals: "Up to 3 review removals / month", note: "Standard processing" },
  { name: "Business Protect", desc: "Balanced protection for growing businesses", price: "€539", removals: "Up to 8 reviews / month", note: "Priority handling", popular: true },
  { name: "Advanced Protect", desc: "For high-visibility businesses", price: "€999", removals: "Up to 15 review removals / month", note: "Faster turnaround" },
  { name: "Premium Protect", desc: "Strong protection for reputation-critical brands", price: "€1,999", removals: "Up to 30 review removals / month", note: "High-priority processing" },
  { name: "Ultimate Protect", desc: "Maximum coverage for multi-location brands", price: "€3,999", removals: "Up to 60 review removals / month", note: "Dedicated priority handling" },
];

const whyUs = [
  { icon: Scale, title: "Legal Expertise", desc: "Our team includes former platform policy specialists and media law attorneys." },
  { icon: EyeOff, title: "Confidential Process", desc: "100% discreet — your business identity is never disclosed during removal." },
  { icon: Zap, title: "Fast Execution", desc: "Most removals are completed within 5 days of case submission." },
  { icon: DollarSign, title: "Pay After Removal", desc: "You're never charged before the review is permanently gone. Invoice on confirmed removal." },
];

const testimonials = [
  { initial: "L", name: "Dr. Laurent M.", role: "Clinic Director, Toronto", quote: `${brand.shortName} removed three defamatory Google reviews that were destroying our clinic's reputation. Results in under a week.` },
  { initial: "S", name: "Sophie R.", role: "Hotel General Manager, London", quote: "Professional, discreet, and effective. They handled our case when no one else could. Highly recommended." },
  { initial: "M", name: "Marc T.", role: "Restaurant Owner, Dubai", quote: "After a competitor planted fake reviews, our 4.8-star rating was recovered within two weeks." },
];

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative px-4 md:px-6 pt-12 md:pt-20 pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--surface-2),_transparent_60%)]" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
              <Star className="h-3.5 w-3.5 fill-gold" />
              The World's #1 Review Removal Experts
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Protect Your Reputation.
              <br />
              <span className="text-gold">Remove Damaging Reviews.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
              We specialise in legally removing fake, defamatory, and policy-violating reviews from Google, Facebook, Trustpilot, Reddit, and Tripadvisor — with a guaranteed outcome.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featurePills.map((p) => (
                <span key={p.label} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground/80">
                  <p.icon className="h-3.5 w-3.5 text-gold" />
                  {p.label}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:opacity-90 transition shadow-[0_10px_40px_-10px_var(--gold)]">
                View Pricing <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/services/google" className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold/10 transition">
                Google Review Removal
              </Link>
            </div>
          </motion.div>

          {/* Stat card */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-5 md:p-6">
            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((s) => (
                <div key={s.label} className="rounded-xl bg-surface-2/60 border border-border p-5 text-center">
                  <s.icon className="h-5 w-5 text-gold mx-auto" />
                  <div className="mt-2 text-3xl font-bold font-display">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-border p-4">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}
              </div>
              <p className="mt-2 text-sm text-foreground/90">"3 fake Google reviews removed in 5 days. Paid only after seeing them gone."</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold">P</div>
                <div>
                  <div className="text-sm font-semibold">Pierre V.</div>
                  <div className="text-xs text-muted-foreground">Restaurant Owner, Sydney</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GOOGLE FEATURE */}
      <section className="px-4 md:px-6 py-20 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Google Review Removal — Our Speciality</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Get harmful Google reviews permanently removed</h2>
            <p className="mt-4 text-muted-foreground">
              Google reviews are the #1 factor in consumer trust. A single fake or malicious review can cost you thousands in lost business. Our Google removal service maintains a <span className="text-gold font-semibold">100% success rate</span> — the highest in the world.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Fake reviews from competitors",
                "Defamatory or false statements",
                "Policy-violating content",
                "Coordinated review attacks",
                "Reviews from non-customers",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
            <Link to="/services/google" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground">
              Learn more about Google removal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "100%", l: "Success Rate", s: "Google reviews" },
              { v: "5 days", l: "Avg. Removal", s: "From submission" },
              { v: "20,000+", l: "Cases Handled", s: "Google only" },
              { v: "4.9/5", l: "Client Satisfaction", s: "Post-service rating" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-surface p-6">
                <div className="text-3xl font-bold font-display text-gold">{s.v}</div>
                <div className="mt-1 text-sm font-semibold">{s.l}</div>
                <div className="text-xs text-muted-foreground">{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="px-4 md:px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Pay After Removal — Always</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Choose your package</h2>
            <p className="mt-3 text-muted-foreground">Two targeted removal packages for existing reviews. Request your price — you only pay once the review is confirmed gone.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Standard Removal", tag: "Best for 1–5 reviews", items: ["Best for 1–5 reviews", "Pay after removal", "Dedicated case manager"] },
              { name: "Express Removal", tag: "Fastest results", items: ["Ideal for urgent or unlimited cases", "Priority processing (24–72 hours)", "Pay after removal", "Dedicated case manager"], featured: true },
            ].map((pkg) => (
              <div key={pkg.name} className={`relative rounded-2xl border p-8 ${pkg.featured ? "border-gold bg-surface" : "border-border bg-surface/60"}`}>
                {pkg.featured && <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">Fastest Results</span>}
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{pkg.tag}</p>
                <div className="mt-5 text-2xl font-bold font-display text-gold">Price on Request</div>
                <p className="text-xs text-muted-foreground">Pay after removal</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {pkg.items.map((i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />{i}</li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-7 inline-flex w-full justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground">Request Price</Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Not sure which package suits you? <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-gold hover:underline">Call us</a> or <a href={`mailto:${brand.email}`} className="text-gold hover:underline">email our team</a> — free assessment, no commitment.
          </p>
        </div>
      </section>

      {/* MONTHLY PLANS */}
      <section className="px-4 md:px-6 py-20 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Monthly Protection Plans</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Google Review Protection Plans</h2>
            <p className="mt-3 text-muted-foreground">We protect your business from harmful written reviews — before they impact your reputation.</p>
            <div className="mt-3 flex justify-center gap-2 flex-wrap text-xs text-muted-foreground">
              <span>No commitment</span>·<span>Cancel anytime</span>·<span>No long-term contract</span>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-2xl border p-6 flex flex-col ${p.popular ? "border-gold bg-surface ring-1 ring-gold/30" : "border-border bg-surface/60"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">★ Most Popular</span>}
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 min-h-[32px]">{p.desc}</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold font-display text-gold">{p.price}</span>
                  <span className="text-xs text-muted-foreground"> / month</span>
                </div>
                <ul className="mt-4 space-y-2 text-xs flex-1">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0" />{p.removals}</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0" />{p.note}</li>
                  <li className="text-muted-foreground">+ Monthly reputation report: +€15</li>
                </ul>
                <Link to="/contact" className="mt-5 inline-flex justify-center rounded-full border border-gold/40 px-4 py-2 text-xs font-semibold text-gold hover:bg-gold/10">Subscribe</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section className="px-4 md:px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Clear &amp; transparent terms</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: 1, t: "Subscription Validity", d: "Each subscription runs for 30 days from the start date. Only reviews posted within the active period are eligible." },
              { n: 2, t: "Review Eligibility", d: "Covered: text reviews posted after start date, within the 30-day period. Not covered: reviews before subscription, ratings without text." },
              { n: 3, t: "Monthly Usage", d: "Monthly limits are fixed per cycle. Unused removals don't carry forward — each month resets to zero." },
              { n: 4, t: "Flexibility", d: "No commitment, cancel anytime, no long-term contract. Pause whenever you need to." },
            ].map((c) => (
              <div key={c.n} className="rounded-2xl border border-border bg-surface p-6">
                <div className="h-10 w-10 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold">{c.n}</div>
                <h3 className="mt-4 font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="px-4 md:px-6 py-20 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">All review removal services</h2>
            <p className="mt-3 text-muted-foreground">We specialise in removing damaging reviews across every major platform — protecting your reputation at every touchpoint.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map((p) => (
              <Link key={p.slug} to="/services/$slug" params={{ slug: p.slug }}
                className={`group rounded-2xl border p-6 transition hover:-translate-y-1 ${p.featured ? "border-gold bg-surface ring-1 ring-gold/30" : "border-border bg-surface hover:border-gold/40"}`}>
                {p.featured && <span className="inline-block mb-3 rounded-full bg-gold/20 text-gold px-2 py-1 text-[10px] font-bold uppercase">Most Requested</span>}
                <div className="h-12 w-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center font-bold text-xl">{p.letter}</div>
                <h3 className="mt-4 font-bold text-lg">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-4 md:px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Why Businesses Choose Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Different by design. Superior by results.</h2>
            <p className="mt-3 text-muted-foreground">Unlike generic SEO agencies or reputation management firms, {brand.name} focuses exclusively on review removal — making us the most specialised and effective team in the world.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border bg-surface p-6">
                <div className="h-12 w-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center"><w.icon className="h-6 w-6" /></div>
                <h3 className="mt-4 font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 md:px-6 py-20 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Client success stories</h2>
            <p className="mt-3 text-muted-foreground">Hundreds of businesses have trusted us to restore their reputation.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}
                </div>
                <p className="mt-4 text-sm text-foreground/90">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gold/20 text-gold flex items-center justify-center font-semibold">{t.initial}</div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              View all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto text-center rounded-3xl border border-gold/30 bg-gradient-to-br from-surface to-surface-2 p-10 md:p-16">
          <ShieldCheck className="h-12 w-12 text-gold mx-auto" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Ready to defend your reputation?</h2>
          <p className="mt-3 text-muted-foreground">Get a free case assessment from our experts. No commitment required — we'll tell you exactly what we can achieve.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[0_10px_40px_-10px_var(--gold)]">Request Free Assessment</Link>
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="inline-flex rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold/10">Call Us Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
