import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { brand } from "@/config/brand";

export const Route = createFileRoute("/case-studies")({
  head: () => ({ meta: [{ title: `Case Studies — ${brand.name}` }, { name: "description", content: "Client success stories." }] }),
  component: CaseStudies,
});

const cases = [
  { industry: "Healthcare", initial: "L", name: "Dr. Laurent M.", role: "Clinic Director, Toronto", result: "3 defamatory Google reviews removed in 6 days", quote: "Their team handled everything discreetly. Our clinic's reputation is fully restored." },
  { industry: "Hospitality", initial: "S", name: "Sophie R.", role: "Hotel General Manager, London", result: "Recovered 4.7-star average after coordinated attack", quote: "Professional, discreet, and effective. They handled our case when no one else could." },
  { industry: "Restaurant", initial: "M", name: "Marc T.", role: "Restaurant Owner, Dubai", result: "12 fake competitor reviews removed in 2 weeks", quote: "Our 4.8-star rating was recovered within two weeks. Worth every euro." },
  { industry: "Luxury Retail", initial: "A", name: "Sophia M.", role: "Boutique Owner, Maldives", result: "Best investment we made for our reputation", quote: "Clear, honest communication throughout. Results delivered exactly as promised." },
];

function CaseStudies() {
  return (
    <div className="px-4 md:px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Client success stories</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Real results, across industries and geographies.</p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article key={c.name} className="rounded-2xl border border-border bg-surface p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">{c.industry}</span>
              <h2 className="mt-3 text-xl font-bold">{c.result}</h2>
              <div className="mt-3 flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}</div>
              <p className="mt-3 text-sm text-foreground/90">"{c.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/20 text-gold flex items-center justify-center font-semibold">{c.initial}</div>
                <div>
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Link to="/contact" className="mt-12 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground">Start your case</Link>
      </div>
    </div>
  );
}
